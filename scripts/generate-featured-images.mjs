#!/usr/bin/env node
/**
 * Generates branded 1200x630 featured/OG images for every doc page, so a link
 * shared on Slack / X / Facebook / LinkedIn previews with that page's own title
 * instead of one generic hero image for the whole site.
 *
 * Sources: `docs/index.md` (home) and `docs/<section>/*.md` (`docs/public/` is skipped).
 * Output:  docs/public/images/featured/<slug>.png
 *          (`docs/` is the srcDir, so `docs/public/` is the VitePress publicDir and
 *          these are served at `/images/featured/<slug>.png`.)
 *
 * NAMING RULE — kept in sync with `featuredImageFor()` in `.vitepress/config.mts`.
 * This repo's `rewrites` strips the section folder from every URL
 * (`docs/community-hub/creating-a-new-space.md` -> `/creating-a-new-space`), so by the
 * time `transformPageData` runs, `pageData.relativePath` is already the flat
 * `<slug>.md`. The card is therefore named after that same flat slug — the file's
 * basename — and the home page's `index.md` becomes `index.png`.
 *
 * Because two files with the same basename in different folders would also collide
 * in `rewrites`, this script fails loudly on a duplicate slug rather than letting one
 * card silently overwrite another.
 *
 * A `default.png` is also emitted as the fallback for any page with no card.
 *
 * Idempotent: skips any output file that already exists unless --force is passed.
 * Run via `npm run featured:generate` (or `featured:regenerate`).
 */

import { readdirSync, statSync, readFileSync, existsSync, mkdirSync } from 'node:fs'
import { join, relative, dirname, basename, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = join(__dirname, '..')
const DOCS_DIR = join(REPO_ROOT, 'docs')
const DOCS_PUBLIC_DIR = join(DOCS_DIR, 'public')
const OUTPUT_DIR = join(DOCS_PUBLIC_DIR, 'images', 'featured')
const HOME_PATH = join(DOCS_DIR, 'index.md')
// The dark-mode lockup: white wordmark + the blue-on-white icon tile, the same asset
// the existing site-wide og-image.png was built from.
const LOGO_PATH = join(DOCS_PUBLIC_DIR, 'images', 'brand', 'fluentCommunity_secondary_logo.png')

const FORCE = process.argv.includes('--force')

// Palette mirrors .vitepress/theme/custom.css: the brand purple (#5145e6) and the
// dark-mode aurora stops, on the same near-black navy ground as the current
// site-wide card, so per-page cards read as the same family.
const BG_TOP = '#1B1A33'
const BG_BOTTOM = '#0B0B14'
const AURORA_1 = '#5145e6'
const AURORA_2 = '#8a7cff'
const AURORA_3 = '#b15cff'
const AURORA_4 = '#5b8def'
const EYEBROW_COLOR = '#A094FF'
const FONT_STACK = 'Helvetica, Arial, sans-serif'

const CANVAS_W = 1200
const CANVAS_H = 630
const MARGIN_X = 88
const TEXT_MAX_W = 1000

// Logo is 3364x512 (6.57:1); 380px wide keeps the lockup readable without dominating.
const LOGO_W = 380
const LOGO_X = MARGIN_X
const LOGO_Y = 76

// Kept in step with SITE_URL in config.mts.
const FOOTER_TEXT = 'docs.fluentcommunity.co'

// -------------------------------------------------------------------------
// File discovery
// -------------------------------------------------------------------------

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) {
      if (full === DOCS_PUBLIC_DIR) continue
      walk(full, files)
    } else if (stat.isFile() && entry.endsWith('.md')) {
      files.push(full)
    }
  }
  return files
}

// -------------------------------------------------------------------------
// Titles + labels
// -------------------------------------------------------------------------

/**
 * `courses-&-learning-(pro)` -> `Courses & Learning (Pro)`. Capitalises after a
 * hyphen AND after an opening parenthesis, so the `(pro)` suffix this repo uses in
 * folder and file names comes out as `(Pro)` like the sidebar labels.
 */
function titleCaseSlug(slug) {
  return slug
    .split('-')
    .map((word) => word.replace(/(^|\()([a-z])/g, (_, pre, ch) => pre + ch.toUpperCase()))
    .join(' ')
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .trim()
}

function unquote(text) {
  return text.trim().replace(/^(["'])(.*)\1$/, '$2')
}

/** Frontmatter `title`, else the first `# H1`, else the home hero, else the slug. */
function extractTitle(mdPath, fallbackSlug) {
  const content = readFileSync(mdPath, 'utf8')

  // This repo's convention is `title` + `description` frontmatter on every article,
  // and `title` is what transformPageData feeds to og:title — so the card should
  // carry the same string the share preview's headline does.
  const fm = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (fm) {
    const title = fm[1].match(/^title:\s*(.+?)\s*$/m)
    if (title) return stripMarkdown(unquote(title[1]))
  }

  for (const line of content.split(/\r?\n/)) {
    const match = line.trim().match(/^#\s+(.+)$/)
    if (match) return stripMarkdown(match[1])
  }

  // The home page uses `layout: home` with no H1 — fall back to its hero.
  const heroName = content.match(/^\s{2}name:\s*["']?(.+?)["']?\s*$/m)
  const heroText = content.match(/^\s{2}text:\s*["']?(.+?)["']?\s*$/m)
  if (heroName) return heroText ? `${heroName[1]} ${heroText[1]}` : heroName[1]

  return titleCaseSlug(fallbackSlug)
}

function escapeXml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

// -------------------------------------------------------------------------
// Title layout
// -------------------------------------------------------------------------
//
// librsvg returns no text metrics, so line breaking approximates: bold Helvetica
// averages ~0.55em per character over mixed-case English. Walk the sizes from
// largest down and take the first that fits, so short titles stay big and long
// ones step down instead of running off the canvas.

const CHAR_WIDTH_RATIO = 0.55
const FONT_SIZE_TIERS = [66, 58, 50, 44, 38]
const MAX_LINES = 3

function wrapAt(title, fontSize) {
  const budget = Math.floor(TEXT_MAX_W / (fontSize * CHAR_WIDTH_RATIO))
  const lines = []
  let current = ''

  for (const word of title.split(/\s+/)) {
    const attempt = current ? `${current} ${word}` : word
    if (attempt.length <= budget || !current) {
      current = attempt
    } else {
      lines.push(current)
      current = word
    }
  }
  if (current) lines.push(current)

  return { lines, budget }
}

function layoutTitle(title) {
  for (const fontSize of FONT_SIZE_TIERS) {
    const { lines } = wrapAt(title, fontSize)
    if (lines.length <= MAX_LINES) return { fontSize, lines }
  }

  const fontSize = FONT_SIZE_TIERS[FONT_SIZE_TIERS.length - 1]
  const { lines, budget } = wrapAt(title, fontSize)
  lines.length = MAX_LINES
  lines[MAX_LINES - 1] = `${lines[MAX_LINES - 1].slice(0, budget - 1).replace(/\s+$/, '')}…`
  return { fontSize, lines }
}

// -------------------------------------------------------------------------
// SVG template
// -------------------------------------------------------------------------

function buildSvg({ title, eyebrow }) {
  const { fontSize, lines } = layoutTitle(title)
  const lineHeight = Math.round(fontSize * 1.18)

  // Bottom-anchored above the footer, so one-, two- and three-line cards share
  // the same optical baseline. The eyebrow and the gradient rule sit relative to
  // the block so they travel with it.
  const blockBottom = 468
  const firstBaseline = blockBottom - (lines.length - 1) * lineHeight
  const eyebrowBaseline = firstBaseline - fontSize - 22
  const ruleY = blockBottom + 40

  const tspans = lines
    .map(
      (line, i) =>
        `<tspan x="${MARGIN_X}" y="${firstBaseline + i * lineHeight}">${escapeXml(line)}</tspan>`
    )
    .join('')

  return `<svg width="${CANVAS_W}" height="${CANVAS_H}" viewBox="0 0 ${CANVAS_W} ${CANVAS_H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${BG_TOP}"/>
      <stop offset="100%" stop-color="${BG_BOTTOM}"/>
    </linearGradient>
    <linearGradient id="rule" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${AURORA_2}"/>
      <stop offset="100%" stop-color="${AURORA_3}"/>
    </linearGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="90"/>
    </filter>
  </defs>
  <rect width="${CANVAS_W}" height="${CANVAS_H}" fill="url(#bg)"/>
  <!-- Aurora: the same soft colour fields the home hero uses, pushed to the edges
       so the text column stays on the darkest part of the ground. -->
  <g filter="url(#blur)">
    <ellipse cx="1010" cy="120" rx="330" ry="220" fill="${AURORA_1}" opacity="0.55"/>
    <ellipse cx="1180" cy="520" rx="300" ry="240" fill="${AURORA_3}" opacity="0.32"/>
    <ellipse cx="120" cy="640" rx="360" ry="200" fill="${AURORA_4}" opacity="0.28"/>
    <ellipse cx="640" cy="-60" rx="260" ry="160" fill="${AURORA_2}" opacity="0.22"/>
  </g>
  <text x="${MARGIN_X}" y="${eyebrowBaseline}" font-family="${FONT_STACK}" font-size="21" font-weight="700" letter-spacing="4" fill="${EYEBROW_COLOR}">${escapeXml(
    eyebrow.toUpperCase()
  )}</text>
  <text font-family="${FONT_STACK}" font-weight="700" font-size="${fontSize}" fill="#FFFFFF">${tspans}</text>
  <rect x="${MARGIN_X}" y="${ruleY}" width="132" height="5" rx="2.5" fill="url(#rule)"/>
  <text x="${MARGIN_X}" y="574" font-family="${FONT_STACK}" font-size="18" font-weight="400" letter-spacing="1" fill="#FFFFFF" opacity="0.55">${FOOTER_TEXT}</text>
</svg>`
}

async function renderCard({ title, eyebrow, outPath, logo }) {
  await sharp(Buffer.from(buildSvg({ title, eyebrow })))
    .composite([{ input: logo, left: LOGO_X, top: LOGO_Y }])
    // Flat gradient + text compresses well at max effort, and this is lossless.
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(outPath)
}

// -------------------------------------------------------------------------
// Main
// -------------------------------------------------------------------------

async function main() {
  if (!existsSync(LOGO_PATH)) {
    throw new Error(`Logo source not found at ${LOGO_PATH}`)
  }
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  // Resized once and reused — re-decoding the same PNG 100+ times is pure waste.
  const logo = await sharp(LOGO_PATH).resize({ width: LOGO_W }).png().toBuffer()

  const jobs = [
    {
      outPath: join(OUTPUT_DIR, 'default.png'),
      title: 'FluentCommunity Documentation',
      eyebrow: 'Documentation',
    },
  ]

  if (existsSync(HOME_PATH)) {
    jobs.push({
      outPath: join(OUTPUT_DIR, 'index.png'),
      title: extractTitle(HOME_PATH, 'fluentcommunity'),
      eyebrow: 'Documentation',
    })
  }

  const seen = new Map() // slug -> first source path, for the collision check
  const collisions = []

  for (const filePath of walk(DOCS_DIR).sort()) {
    if (filePath === HOME_PATH) continue

    const relPath = relative(DOCS_DIR, filePath).split(sep).join('/')
    const parts = relPath.split('/') // <section>/<file>.md — rewrites keeps only <file>
    const slug = basename(relPath, '.md')

    if (seen.has(slug)) {
      collisions.push(`${slug}  <-  ${seen.get(slug)}  and  ${relPath}`)
      continue
    }
    seen.set(slug, relPath)

    const section = parts.length > 1 ? titleCaseSlug(parts[0]) : 'Documentation'

    jobs.push({
      outPath: join(OUTPUT_DIR, `${slug}.png`),
      title: extractTitle(filePath, slug),
      eyebrow: section,
    })
  }

  if (collisions.length) {
    throw new Error(
      `${collisions.length} slug collision(s): these files share a basename, so \`rewrites\` ` +
        `serves them at the same URL and their cards would overwrite each other:\n  ${collisions.join('\n  ')}`
    )
  }

  let generated = 0
  let skipped = 0

  for (const job of jobs) {
    if (existsSync(job.outPath) && !FORCE) {
      skipped++
      continue
    }
    await renderCard({ ...job, logo })
    generated++
  }

  console.log(`Featured images: generated ${generated}, skipped ${skipped}.`)

  // A renamed or deleted page leaves its card behind, and nothing else would
  // ever notice. Report them rather than deleting — the call is the author's.
  const expected = new Set(jobs.map((job) => basename(job.outPath)))
  const orphans = readdirSync(OUTPUT_DIR).filter(
    (name) => name.endsWith('.png') && !expected.has(name)
  )
  if (orphans.length) {
    console.log(
      `\n${orphans.length} card(s) no longer match a page — delete them if the page is gone:`
    )
    orphans.forEach((name) => console.log(`  docs/public/images/featured/${name}`))
  }
}

main().catch((err) => {
  console.error(err.message ?? err)
  process.exitCode = 1
})
