---
name: restructure-fluentcommunity-docs
description: 'Rename, move, delete, merge, or reorder FluentCommunity doc pages while keeping the markdown file, its image folder, the sidebar in .vitepress/config.mts, and every inbound cross-link in sync. USE FOR: rename a page, change a slug/URL, move a page to another section, delete/remove a page, merge two pages, reorder the sidebar, regroup pages, add or collapse a sidebar sub-group. DO NOT USE FOR: creating a brand-new page (use write-fluentcommunity-doc), editing the prose/content of a page that stays put (use edit-fluentcommunity-doc), or a read-only audit (use audit-fluentcommunity-docs).'
license: MIT
compatibility: 'VitePress repo. Content at docs/<section>/<slug>.md served at /<section>/<slug> via cleanUrls. Sidebar inline in .vitepress/config.mts. Images at docs/public/images/<section>/<article-slug>/. Body links are relative and keep .md. Requires Node + npm.'
metadata:
  project: fluent-community-user-docs
  canonical-rules: CLAUDE.md
---

# Restructure FluentCommunity Docs

Change WHERE pages live or HOW they're ordered, keeping four things in sync so nothing 404s or
goes missing from nav: (1) the `docs/<section>/<slug>.md` file, (2) its
`docs/public/images/<section>/<slug>/` folder, (3) the sidebar entry in `.vitepress/config.mts`,
and (4) every **inbound** relative `.md` link from other pages. Renaming a page changes its
public URL — confirm that's intended before proceeding.

---

## Agent Behavior Rules

1. **DO** confirm the exact operation and the before/after paths with the user first — renames change live URLs.
2. **DO** keep all four artifacts in sync in the same change (file · image folder · sidebar entry · inbound links).
3. **DO** use `git mv` for renames/moves so history is preserved.
4. **DO** preserve slug conventions: kebab-case, literal `&`, `(pro)`, `()`; sidebar `link` is `/<section>/<slug>` without `.md`; body links are relative WITH `.md`.
5. **DO** end on a green `npm run docs:build` AND a clean dead-link scan (see below).
6. **DO NOT** rename a page silently — every inbound `[text](.../old-slug.md)` must be updated.
7. **DO NOT** commit or push.
8. **DO NOT** rewrite page prose beyond what the structural change requires (that's `edit-fluentcommunity-doc`).

---

## Find everything tied to a page (run first)

```bash
SLUG="<old-slug>"; SECTION="<old-section>"
ls docs/$SECTION/$SLUG.md                                  # the file
ls -d docs/public/images/$SECTION/$SLUG/ 2>/dev/null       # image folder (name may differ — verify)
grep -n "$SLUG" .vitepress/config.mts                      # sidebar entry
grep -rn "$SLUG.md" docs/                                  # inbound relative links
grep -rn "/images/$SECTION/$SLUG/" docs/                   # image refs
```

---

## Operations

### Rename / change slug (same section)
1. `git mv docs/<section>/<old>.md docs/<section>/<new>.md`
2. `git mv docs/public/images/<section>/<old> docs/public/images/<section>/<new>` (if it exists) and update in-page image refs to the new path.
3. Update the sidebar `link` (and `text` if the title changed) in `.vitepress/config.mts`.
4. Update every inbound link: `grep -rln "<old>.md" docs/` then fix each `](...<old>.md)` → `<new>.md`.

### Move to another section
Same as rename, but the section changes in the file path, the image folder path, the sidebar `link` (`/<new-section>/<slug>`), and the sidebar **group** the entry sits under. Recheck that inbound relative links still resolve (`./` vs `../<section>/`).

### Delete / remove
1. `git rm docs/<section>/<slug>.md` and `git rm -r docs/public/images/<section>/<slug>` (if present).
2. Remove its sidebar entry from `.vitepress/config.mts`.
3. Remove or repoint every inbound link found by `grep -rn "<slug>.md" docs/` — leave no dangling links.

### Merge two pages
Fold the source content into the target (respecting house style), then perform the **delete** steps on the now-empty source and repoint its inbound links to the target.

### Reorder / regroup sidebar
Edit only the `themeConfig.sidebar` array order or the nested `collapsed: true` sub-groups in `.vitepress/config.mts`. No file or link changes needed.

---

## Verify & Report

```bash
npm run docs:build          # must complete with no dead-link warnings
```

Then a dead-link spot check for the old slug (should return nothing):
```bash
grep -rn "<old-slug>.md" docs/ ; grep -rn "/images/.*/<old-slug>/" docs/
```

Report ✅ the operation with before → after paths, the sidebar change, and the count of inbound links updated. ⚠️ Flag any link you couldn't confidently repoint.

---

## Quick Reference

- Four-in-sync: **file · image folder · sidebar entry · inbound links**.
- Renames change the public URL — confirm intent.
- `git mv` / `git rm` to preserve history; never commit.
- Sidebar link `/<section>/<slug>` (no `.md`); body links relative `./…md` / `../section/…md`.
- Image folder name may not equal the slug — verify with `ls` before moving it.
