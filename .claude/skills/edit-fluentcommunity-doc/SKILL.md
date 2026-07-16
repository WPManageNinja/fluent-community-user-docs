---
name: edit-fluentcommunity-doc
description: 'Edit the content of an EXISTING FluentCommunity doc page in place — rewrite/expand/correct prose, add sections, swap in real screenshots, fix frontmatter — without moving, renaming, or deleting the file. Applies this repo house style and fixes known content issues as it goes. USE FOR: update this doc, revise/expand a page, fix wording, add a section, replace a [Screenshot: ...] placeholder, add a missing description, correct a mangled title. DO NOT USE FOR: creating a new page (use write-fluentcommunity-doc), renaming/moving/deleting/reordering pages (use restructure-fluentcommunity-docs), or a read-only site-wide audit (use audit-fluentcommunity-docs).'
license: MIT
compatibility: 'VitePress repo. Content at docs/<section>/<slug>.md served at /<section>/<slug> via cleanUrls. Frontmatter is title + description. Body links are relative and keep .md. Images root-absolute .webp under docs/public/images/. Requires Node + npm.'
metadata:
  project: fluent-community-user-docs
  canonical-rules: CLAUDE.md
---

# Edit a FluentCommunity Doc

Change the content of one existing page while preserving every convention, and quietly fix the
known content issues in any file you touch. The file path, slug, URL, and sidebar entry stay
the same — if any of those must change, stop and use `restructure-fluentcommunity-docs` instead.

---

## Agent Behavior Rules

1. **DO** read the whole target file first and preserve its frontmatter shape, single `# H1`, heading structure, and house style.
2. **DO** keep house-style **blockquote callouts** (`> **✨ Note:** …`); do not convert them to `:::` containers unless the user asks.
3. **DO** keep internal links **relative with `.md`** (`[text](./other.md)`, `[text](../section/other.md)`) and images root-absolute `.webp` (`/images/<section>/<slug>/*.webp`).
4. **DO** preserve the file location and slug. Any rename/move/delete is out of scope — hand off to `restructure-fluentcommunity-docs`.
5. **DO** mark Pro-only features `(Pro)` consistently in title, body, and (if the label wording changed) the sidebar `text` in `.vitepress/config.mts`.
6. **DO** end on a green `npm run docs:build`.
7. **DO NOT** invent product facts, endpoints, hooks, or settings the source doesn't support.
8. **DO NOT** write inner-whitespace bold (`** term **`) — use `**term**`.
9. **DO NOT** add support/marketing boilerplate footers.

---

## Cleanup rules (apply to any file you edit)

Whenever you open a page to edit it, also fix these known issues in that same file:

1. **`[Screenshot: …]` placeholders** — if the user supplied the real `.webp`, place it under `docs/public/images/<section>/<slug>/` and replace the placeholder with a proper `![alt](/images/…)`. If no image is available, leave the placeholder but note it in the report.
2. **Missing `description`** — if frontmatter has no `description`, add a specific one-sentence summary. If the file has no frontmatter at all (e.g. `getting-started/the-setup-wizard.md`), add the `title` + `description` block.
3. **Mangled acronym titles** — correct `Fluentcrm` → `FluentCRM`, `Rest Api` → `REST API`, `Cdn` → `CDN`, `Seo` → `SEO`, etc., in both `title` and the `# H1` (keep them identical).
4. **Remote-hosted images** — if the body references `https://fluentcommunity.co/wp-content/uploads/…` (as the migration pages do), and the user provides local copies, download/place them under `docs/public/images/<section>/<slug>/` and switch the ref to `/images/…`. Otherwise flag it.
5. **Inner-whitespace bold** — normalize `** term **` to `**term**`.

Only spend effort on cleanups relevant to the file at hand; don't expand scope to other files (that's the `audit` skill's job).

---

## Procedure

1. **Locate** the file:
   ```bash
   grep -rn "<slug or unique title>" docs/ .vitepress/config.mts
   ```
2. **Read** it fully, plus a sibling in the same section for tone.
3. **Edit** the content as requested; apply the cleanup rules above to this file.
4. **Images** — add any new `.webp` under the page's existing image folder; reuse the existing folder name even if it doesn't perfectly match the slug (don't rename folders here — that's `restructure`).
5. **Sidebar** — only touch `.vitepress/config.mts` if the displayed title text changed; the `link` must stay the same.
6. **Verify & report**:
   ```bash
   npm run docs:build
   ```
   Report ✅ what changed, and ⚠️ any placeholder/remote-image issues you flagged but couldn't resolve.

---

## Quick Reference

- Page path & URL are fixed here: `docs/<section>/<slug>.md` → `/<section>/<slug>`.
- Frontmatter: `title` + `description` only; H1 mirrors title; acronyms fixed.
- Callouts: `> **Use Case:** / > **✨ Note:** / > **⚠️ Important:** / > **💡 Tip:**`.
- Body links relative with `.md`; sidebar link root-absolute without `.md`; images `/images/…webp`.
- Find inbound links to this page (for context): `grep -rn "<slug>.md" docs/`.
- Rename/move/delete/reorder → **stop, use `restructure-fluentcommunity-docs`**.
