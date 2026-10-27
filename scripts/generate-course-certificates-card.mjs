#!/usr/bin/env node
/**
 * Bespoke featured card for the Course Certificates page — light version.
 *
 * Same brand family as scripts/generate-featured-images.mjs (brand purple, aurora
 * fields, logo lockup, gradient rule, footer) but on a light ground, with the
 * certificate motif on the right and two badges: Upcoming, Request for Feedback.
 */
import sharp from 'sharp'
import { join } from 'node:path'

const REPO = '/Users/jewel/packages/github-repos/fluent-community-user-docs'
const PUBLIC_DIR = join(REPO, 'docs/public')
const LOGO_PATH = join(PUBLIC_DIR, 'images/brand/fluentCommunity_primary_logo.png')
const OUT = join(PUBLIC_DIR, 'images/featured/course-certificates.png')

// Brand palette, from .vitepress/theme/custom.css.
const BRAND_1 = '#5145e6'
const BRAND_3 = '#8a7cff'
const AURORA_3 = '#b15cff'
const AURORA_4 = '#5b8def'
const INK = '#1B1A33'
const MUTED = '#5A5570'
const FONT = 'Helvetica, Arial, sans-serif'

const W = 1200
const H = 630
const MARGIN_X = 88
const LOGO_W = 330

const SHEET_W = 430
const SHEET_H = 304
const SHEET_X = 676
const SHEET_Y = 180
const GOLD = '#C9A227'
const CREAM = '#FBF7EC'

/** A faux line of certificate text: a rounded bar, centred in the sheet. */
const bar = (y, w, h, fill, opacity = 1) =>
  `<rect x="${SHEET_X + (SHEET_W - w) / 2}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}" opacity="${opacity}"/>`

/** A pill badge with a leading dot. */
const badge = (x, y, w, label, bg, border, dot, text) => `
  <g transform="translate(${x} ${y})">
    <rect x="0" y="0" width="${w}" height="44" rx="22" fill="${bg}"/>
    <rect x="0" y="0" width="${w}" height="44" rx="22" fill="none" stroke="${border}" stroke-width="1.5"/>
    <circle cx="25" cy="22" r="6" fill="${dot}"/>
    <text x="42" y="29" font-family="${FONT}" font-size="17" font-weight="700"
          letter-spacing="0.3" fill="${text}">${label}</text>
  </g>`

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#EFEDFB"/>
    </linearGradient>
    <linearGradient id="rule" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${BRAND_1}"/>
      <stop offset="100%" stop-color="${AURORA_3}"/>
    </linearGradient>
    <linearGradient id="sheet" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="${CREAM}"/>
    </linearGradient>
    <linearGradient id="seal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F0D37A"/>
      <stop offset="100%" stop-color="#C8972B"/>
    </linearGradient>
    <linearGradient id="namebar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2B2550"/>
      <stop offset="100%" stop-color="${BRAND_1}"/>
    </linearGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="95"/>
    </filter>
    <filter id="cardShadow" x="-30%" y="-30%" width="180%" height="180%">
      <feDropShadow dx="0" dy="22" stdDeviation="26" flood-color="#2B2550" flood-opacity="0.26"/>
    </filter>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Aurora, kept pale so the ground stays light and the text holds contrast -->
  <g filter="url(#blur)">
    <ellipse cx="960" cy="90" rx="340" ry="230" fill="${BRAND_3}" opacity="0.30"/>
    <ellipse cx="1190" cy="540" rx="300" ry="250" fill="${AURORA_3}" opacity="0.18"/>
    <ellipse cx="90" cy="660" rx="360" ry="200" fill="${AURORA_4}" opacity="0.16"/>
    <ellipse cx="560" cy="-80" rx="280" ry="170" fill="${BRAND_1}" opacity="0.10"/>
  </g>

  <!-- Certificate motif -->
  <g transform="rotate(-7 ${SHEET_X + SHEET_W / 2} ${SHEET_Y + SHEET_H / 2})" filter="url(#cardShadow)">
    <rect x="${SHEET_X}" y="${SHEET_Y}" width="${SHEET_W}" height="${SHEET_H}" rx="6" fill="url(#sheet)"/>
    <rect x="${SHEET_X + 13}" y="${SHEET_Y + 13}" width="${SHEET_W - 26}" height="${SHEET_H - 26}" rx="3"
          fill="none" stroke="${GOLD}" stroke-width="2.5"/>
    <rect x="${SHEET_X + 20}" y="${SHEET_Y + 20}" width="${SHEET_W - 40}" height="${SHEET_H - 40}" rx="2"
          fill="none" stroke="${GOLD}" stroke-width="0.8" opacity="0.75"/>

    <text x="${SHEET_X + SHEET_W / 2}" y="${SHEET_Y + 58}" text-anchor="middle"
          font-family="${FONT}" font-size="13" font-weight="700" letter-spacing="4.5" fill="#A8821F">CERTIFICATE</text>
    ${bar(SHEET_Y + 76, 112, 5, '#D6C9AC', 0.9)}

    ${bar(SHEET_Y + 104, 236, 20, 'url(#namebar)')}
    ${bar(SHEET_Y + 136, 150, 5, '#DCD2BA')}

    ${bar(SHEET_Y + 164, 288, 9, '#4A4566', 0.62)}
    ${bar(SHEET_Y + 183, 206, 7, '#9A94B5', 0.52)}

    <rect x="${SHEET_X + 44}" y="${SHEET_Y + 238}" width="104" height="2" fill="#8C8698"/>
    <rect x="${SHEET_X + 62}" y="${SHEET_Y + 247}" width="68" height="5" rx="2.5" fill="#B4AEC2"/>
    <rect x="${SHEET_X + 176}" y="${SHEET_Y + 240}" width="86" height="6" rx="3" fill="#6F6888"/>
    <rect x="${SHEET_X + 176}" y="${SHEET_Y + 253}" width="58" height="4" rx="2" fill="#AAA4BC"/>

    <g transform="translate(${SHEET_X + SHEET_W - 92} ${SHEET_Y + 226})" fill="#1C1A33">
      <rect x="0" y="0" width="52" height="52" fill="#FFFFFF"/>
      <rect x="2" y="2" width="15" height="15"/><rect x="5" y="5" width="9" height="9" fill="#FFFFFF"/>
      <rect x="7" y="7" width="5" height="5"/>
      <rect x="35" y="2" width="15" height="15"/><rect x="38" y="5" width="9" height="9" fill="#FFFFFF"/>
      <rect x="40" y="7" width="5" height="5"/>
      <rect x="2" y="35" width="15" height="15"/><rect x="5" y="38" width="9" height="9" fill="#FFFFFF"/>
      <rect x="7" y="40" width="5" height="5"/>
      <rect x="22" y="3" width="4" height="4"/><rect x="28" y="9" width="4" height="4"/>
      <rect x="22" y="15" width="4" height="4"/><rect x="28" y="21" width="4" height="4"/>
      <rect x="22" y="27" width="4" height="4"/><rect x="34" y="27" width="4" height="4"/>
      <rect x="40" y="21" width="4" height="4"/><rect x="46" y="27" width="4" height="4"/>
      <rect x="22" y="39" width="4" height="4"/><rect x="28" y="45" width="4" height="4"/>
      <rect x="34" y="39" width="4" height="4"/><rect x="40" y="45" width="4" height="4"/>
      <rect x="46" y="39" width="4" height="4"/><rect x="3" y="22" width="4" height="4"/>
      <rect x="9" y="28" width="4" height="4"/><rect x="15" y="22" width="4" height="4"/>
    </g>
  </g>

  <!-- Gold seal with ribbon tails, on the sheet's lower-left corner -->
  <g transform="translate(656 420)">
    <path d="M-20 14 L-20 70 L-4 58 L10 70 L10 14 Z" fill="#8E2C3B"/>
    <path d="M14 14 L14 70 L30 58 L44 70 L44 14 Z" fill="#B23A4C"/>
    <circle cx="12" cy="12" r="40" fill="url(#seal)"/>
    <circle cx="12" cy="12" r="31" fill="none" stroke="#FFFFFF" stroke-width="2" opacity="0.6"/>
    <path d="M-2 13 l9 10 l18 -21" fill="none" stroke="#FFFFFF" stroke-width="5.5"
          stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- The verification chip, as the public page shows it -->
  <g transform="translate(912 486)">
    <rect x="0" y="0" width="186" height="52" rx="26" fill="#FFFFFF"/>
    <rect x="0" y="0" width="186" height="52" rx="26" fill="none" stroke="#9FE0C0" stroke-width="2"/>
    <circle cx="30" cy="26" r="7" fill="#10B981"/>
    <text x="50" y="33" font-family="${FONT}" font-size="20" font-weight="700" fill="#0F7A52">Verified</text>
  </g>

  <!-- Text column -->
  ${badge(MARGIN_X, 288, 150, 'Upcoming', '#EDEAFD', BRAND_3, BRAND_1, BRAND_1)}
  ${badge(MARGIN_X + 166, 288, 246, 'Request for Feedback', '#FFF4E0', '#F0C068', '#E8921B', '#A8650A')}

  <text font-family="${FONT}" font-weight="700" font-size="62" fill="${INK}">
    <tspan x="${MARGIN_X}" y="412">Course</tspan>
    <tspan x="${MARGIN_X}" y="478">Certificates</tspan>
  </text>
  <rect x="${MARGIN_X}" y="512" width="132" height="5" rx="2.5" fill="url(#rule)"/>
  <text x="${MARGIN_X}" y="558" font-family="${FONT}" font-size="18" font-weight="400"
        letter-spacing="1" fill="${MUTED}">docs.fluentcommunity.co</text>
</svg>`

const logo = await sharp(LOGO_PATH).resize({ width: LOGO_W }).png().toBuffer()
await sharp(Buffer.from(svg))
  .composite([{ input: logo, left: MARGIN_X, top: 82 }])
  .png({ compressionLevel: 9, effort: 10 })
  .toFile(OUT)

console.log('wrote', OUT)
