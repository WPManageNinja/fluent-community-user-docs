---
name: write-fluentcommunity-doc
description: 'Create a NEW FluentCommunity end-user documentation page in this VitePress site, correctly placed in a section folder, wired into the hand-maintained sidebar in .vitepress/config.mts, with its image folder created and a clean build. USE FOR: add a doc, write a new doc page, create a guide for X, document this feature, scaffold a new article, turn these notes into a doc page. DO NOT USE FOR: editing an existing page (use edit-fluentcommunity-doc), renaming/moving/deleting/reordering pages (use restructure-fluentcommunity-docs), site-wide quality checks (use audit-fluentcommunity-docs), or non-doc markdown like README.md / CLAUDE.md.'
license: MIT
compatibility: 'VitePress repo. Content at docs/<section>/<slug>.md served at /<section>/<slug> via cleanUrls. Sidebar inline in .vitepress/config.mts (themeConfig.sidebar). Images at docs/public/images/<section>/<article-slug>/ as .webp. Requires Node + npm (vitepress).'
metadata:
  project: fluent-community-user-docs
  canonical-rules: CLAUDE.md
---

# Write a FluentCommunity Doc

Create one new documentation page end-to-end: place it in the right section folder, write
it in the house style, set up its image folder, wire it into `.vitepress/config.mts`, and
verify with a clean build. Adding a page is a **3-place operation** — the markdown file, the
image folder, and the sidebar entry must all be created or the page is orphaned or 404s.

---

## Agent Behavior Rules

1. **DO** complete Phase 1 setup and confirm the summary table before writing anything.
2. **DO** place the file at `docs/<section>/<slug>.md` (never at the repo root or `docs/` root).
3. **DO** give it exactly two frontmatter fields — `title` and `description` — then a single `# H1` on the first line after the frontmatter that matches `title`.
4. **DO** fix acronym casing in `title`/H1: write `REST API`, `FluentCRM`, `FluentCommunity`, `CDN`, `S3`, `R2`, `SEO`, `URL` — never `Rest Api`, `Fluentcrm`, `Cdn`.
5. **DO** use house-style **blockquote callouts** (see Quick Reference), not native `:::` containers, unless the user asks otherwise.
6. **DO** reference images as root-absolute `.webp`: `![real descriptive alt](/images/<section>/<slug>/<file>.webp)`. Never use `<img>` tags or filename-as-alt.
7. **DO** write internal cross-links as **relative links that keep `.md`**: `[text](./other.md)` same-folder, `[text](../section/other.md)` cross-folder.
8. **DO** add the page to `.vitepress/config.mts` under the correct sidebar group; the sidebar `link` is `/<section>/<slug>` **without** `.md`.
9. **DO** mark Pro-only features `(Pro)` in the title/H1, body, and sidebar `text`; keep the filename/folder lowercase `(pro)`.
10. **DO** end on a green `npm run docs:build`.
11. **DO NOT** invent a new section folder or sidebar group without asking the user.
12. **DO NOT** leave `[Screenshot: ...]` placeholders unless the user has no image yet — if you must, flag them in the final report.
13. **DO NOT** write inner-whitespace bold (`** term **`) — use `**term**`.
14. **DO NOT** commit, push, or change existing pages' URLs.

---

## Phase 1: Setup (Interactive)

Ask the user for each item. Do not assume.

1. **Title** — becomes the `# H1` and the sidebar label. Record as `TITLE`.
2. **Section folder** — show the options and pick one:
   ```bash
   ls docs/    # community-hub, courses-&-learning-(pro), files-&-media-storage,
               # for-developers, gamification-(pro), getting-started, help-&-resources,
               # integrations, migration, monetization, portal-settings
   ```
   Record as `SECTION`.
3. **Slug** — kebab-case; **literally keep** `&`, `(pro)`, `()` and match the phrasing of sibling files (e.g. `add-custom-links-(pro)`, `space-settings-&-privacy`). Record as `SLUG`.
4. **Sidebar group** — open `.vitepress/config.mts` and identify the top-level group (and nested `collapsed: true` sub-group, if any) this page belongs under. Record as `GROUP`.
5. **Pro?** — is this a Pro-plan feature? If yes, append `(Pro)` to TITLE and sidebar text.
6. **Images / source** — does the user have `.webp` screenshots and/or raw content to convert? Where from?

Then show a confirmation table and wait for approval:

| Field | Value |
|-------|-------|
| File | `docs/<SECTION>/<SLUG>.md` |
| URL | `/<SECTION>/<SLUG>` |
| Sidebar | `<GROUP>` → `{ text: "<TITLE>", link: "/<SECTION>/<SLUG>" }` |
| Images | `docs/public/images/<SECTION>/<SLUG>/` |
| Pro | yes / no |

---

## Phase 2: Context

Open a sibling article in the SAME section and mirror its structure and tone before writing —
e.g. `docs/community-hub/creating-a-new-space.md`. Read the target sidebar group in
`.vitepress/config.mts` to see exactly where the new entry goes.

---

## Phase 3: Procedure

1. **Scaffold** `docs/<SECTION>/<SLUG>.md`:
   ```markdown
   ---
   title: <TITLE>
   description: <one-sentence, specific, SEO-friendly summary of the page>
   ---

   # <TITLE>

   <intro paragraph with **bold** product terms>

   > **Use Case:** <when/why a reader needs this>

   ## <Section heading>
   ### Step 1: <action>
   ![<descriptive alt>](/images/<SECTION>/<SLUG>/<file>.webp)
   ```
2. **Body** — task-oriented `##` sections; step-driven flows use `### Step N: …` then `####` sub-details. Use house-style blockquote callouts. Keep paragraphs tight.
3. **Images** — create `docs/public/images/<SECTION>/<SLUG>/` and place `.webp` files there; reference them root-absolute. If a screenshot is not yet available, insert a clearly-marked `[Screenshot: <what it should show>]` placeholder and list it in the report.
4. **Sidebar** — in `.vitepress/config.mts`, find the `GROUP` object (or its nested `collapsed: true` sub-group) and add, in reading order:
   ```js
   { text: '<TITLE>', link: '/<SECTION>/<SLUG>' },
   ```
5. **Interlink** — add a relative `.md` link from a related page to this one (prerequisite → next step / "see also"), and link out from this page where it helps.

---

## Phase 4: Verify & Report

```bash
npm run docs:build
```
Must complete with no dead-link warnings. Then report using ✅/⚠️:
- ✅ File, image folder, and sidebar entry created (list the paths).
- ⚠️ Any `[Screenshot: …]` placeholders left, or images still needed.
- The live URL: `/<SECTION>/<SLUG>`.

---

## Quick Reference

**Paths**
- Page: `docs/<section>/<slug>.md` → URL `/<section>/<slug>` (cleanUrls, no `.md`)
- Images: `docs/public/images/<section>/<slug>/*.webp` → ref `/images/<section>/<slug>/*.webp`
- Sidebar: `.vitepress/config.mts` → `themeConfig.sidebar`

**Frontmatter** (exactly these two)
```yaml
---
title: <Title Case, acronyms fixed>
description: <specific one-sentence summary>
---
```

**House-style callouts** (blockquote — the dominant convention)
```markdown
> **Use Case:** …
> **✨ Note:** …
> **⚠️ Important:** …
> **💡 Tip:** …
```

**Link forms**
- Body → relative WITH `.md`: `[text](./same-folder.md)`, `[text](../section/other.md)`
- Sidebar → root-absolute WITHOUT `.md`: `link: '/section/slug'`
- Image → root-absolute: `/images/section/slug/file.webp`

**Locate where a page lives**
```bash
grep -n "<slug>" .vitepress/config.mts
```

**Key principles**: acronyms fixed in titles · `(Pro)` in text, `(pro)` in filenames · one H1 per page · never orphan a page (3-place operation) · always end on a green build.
