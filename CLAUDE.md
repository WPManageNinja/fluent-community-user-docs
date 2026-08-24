# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A [VitePress](https://vitepress.dev) documentation site — the official user & developer docs for the **FluentCommunity** WordPress plugin (by WPManageNinja). It is a content repository: nearly all work is authoring/editing Markdown articles, adding screenshots, and wiring pages into the sidebar. There is no application code.

## Skills

This repo ships project skills under `.claude/skills/` for the common doc workflows — prefer them over ad-hoc edits:

- **`write-fluentcommunity-doc`** — scaffold a NEW page end-to-end (file + image folder + sidebar entry + build).
- **`edit-fluentcommunity-doc`** — in-place content edits to an existing page; also fixes known issues in the file it touches.
- **`restructure-fluentcommunity-docs`** — rename/move/delete/merge/reorder pages, keeping file, image folder, sidebar, and inbound links in sync.
- **`audit-fluentcommunity-docs`** — read-only quality gate (build, dead links, placeholder/frontmatter/acronym/remote-image scans).

## Commands

```bash
npm run docs:dev       # local dev server with hot reload
npm run docs:build     # production build to .vitepress/dist
npm run docs:preview   # preview the built site
```

There are no tests or linters. The build (`docs:build`) is the effective correctness check — VitePress fails the build on dead relative links between pages.

### Always build after editing

**Run `npm run docs:build` after every edit to this repo — no exceptions.** This applies to any change to a `.md` article, `.vitepress/config.mts`, a theme file, or a component. Do not report work as finished until the build has been run and passes.

- Run it once at the end of a batch of related edits, not after each individual file.
- A passing build prints `build complete in Xs` and exits `0`. Anything else — a non-zero exit, a `dead link` error, a Vue/component compile error — is a failure that must be fixed before reporting done.
- Report the outcome honestly. If the build fails and you cannot fix it, say so and show the error.

What the build **does** catch: dead relative links between pages, malformed frontmatter, broken Vue components (e.g. `VideoEmbed`), config syntax errors.

What the build **does not** catch — check these manually when relevant:

- Missing image files (a broken `/images/...` path renders as a 404 `<img>`, not a build error).
- Pages with no sidebar entry in `.vitepress/config.mts` (orphans — reachable by URL but invisible in navigation).
- Unresolved `[Screenshot: ...]` placeholders left in prose.
- Missing `description` frontmatter.
- Remote-hosted images (`![...](https://...)`) that should be local under `docs/public/images/`.

For a full pass over those, use the `audit-fluentcommunity-docs` skill.

## Structure & conventions

- **Content lives in `docs/`** (`srcDir: 'docs'`), organized into category folders that mirror the sidebar sections: `getting-started/`, `community-hub/`, `courses-&-learning-(pro)/`, `gamification-(pro)/`, `files-&-media-storage/`, `portal-settings/`, `monetization/`, `integrations/`, `migration/`, `help-&-resources/`, `for-developers/`.
- **File naming is significant.** Article filenames are kebab-case and deliberately preserve `&`, `(`, `)`, and spaces-as-hyphens to match the sidebar `link` values exactly (e.g. `add-custom-links-(pro).md`, `space-settings-&-privacy.md`). `cleanUrls: true` means links omit the `.md` extension. A page's URL is `/<folder>/<filename-without-.md>`.
- **The sidebar is hand-maintained** in `.vitepress/config.mts` (the `themeConfig.sidebar` array). Adding a new article is a two-step task: create the `.md` file AND add a matching `{ text, link }` entry under the correct section. A file with no sidebar entry is effectively orphaned. Nested sub-sections use `collapsed: true`.
- **Frontmatter** on each article is `title` + `description` (the description feeds SEO/meta). The homepage `docs/index.md` uses `layout: home` with `hero`/`features` blocks.
- **Images** live in `docs/public/images/<section>/<article-slug>/` as `.webp`, referenced by absolute path from the site root: `![alt text](/images/<section>/<article-slug>/<name>.webp)` (VitePress serves `public/` at `/`). Brand assets are under `/images/brand/`.
- **Pro features** are labeled `(Pro)` in titles, sidebar text, and filenames. The docs use a shared convention (e.g. a `::: tip` note) to flag that terms/features marked **(Pro)** require the FluentCommunity Pro plan.
- **Custom containers**: use VitePress markdown containers like `::: tip`, `::: warning`, `::: info` for callouts.

## Theming

Branding is centralized in `.vitepress/theme/custom.css` (loaded via `.vitepress/theme/index.js`, which extends the default theme). The brand color is `#5145e6` (purple), set through `--vp-c-brand-*` CSS variables with a `.dark` override. Prefer editing CSS variables over hardcoding colors. Site-wide `<head>` styles (e.g. hero centering) live inline in `config.mts`.

## When adding or restructuring content

1. Create the `.md` file with `title` + `description` frontmatter in the right category folder, using the kebab-case-with-symbols naming convention.
2. Add its sidebar entry in `.vitepress/config.mts`.
3. Place screenshots in `docs/public/images/<section>/<article-slug>/` and reference them by root-absolute `/images/...` paths.
4. Run `npm run docs:build` to catch broken internal links before committing.
