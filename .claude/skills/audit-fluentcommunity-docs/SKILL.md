---
name: audit-fluentcommunity-docs
description: 'Read-only quality gate for the FluentCommunity docs site: run the production build, catch dead internal links, and scan for this repo''s known content issues (unresolved [Screenshot: ...] placeholders, missing frontmatter descriptions, mangled acronym titles, remote-hosted images). Produces a ✅/⚠️/❌ report and proposes fixes but does NOT apply them. USE FOR: audit the docs, quality check, find broken links, what needs fixing, pre-release check, lint the docs. DO NOT USE FOR: creating a page (use write-fluentcommunity-doc), editing/fixing a specific page (use edit-fluentcommunity-doc), or renaming/moving/deleting pages (use restructure-fluentcommunity-docs).'
license: MIT
compatibility: 'VitePress repo. Content at docs/<section>/<slug>.md. Frontmatter is title + description. Images .webp under docs/public/images/. Requires Node + npm (vitepress). Read-only: this skill reports, it does not edit.'
metadata:
  project: fluent-community-user-docs
  canonical-rules: CLAUDE.md
---

# Audit FluentCommunity Docs

A read-only sweep of the whole site. Run the build (the authoritative dead-link check), then run
the content scans below, then hand the user a prioritized ✅/⚠️/❌ report. **Do not edit files** —
propose fixes and point at the `edit-fluentcommunity-doc` / `restructure-fluentcommunity-docs`
skills to apply them.

---

## Agent Behavior Rules

1. **DO** run every check below and report results — don't stop at the first failure.
2. **DO** treat any VitePress dead-link warning as a ❌ (must-fix).
3. **DO** report counts and the specific files/lines for each finding.
4. **DO NOT** modify any file — this skill is read-only.
5. **DO NOT** flag adjacent bold spans as "inner-whitespace bold"; that scan is noise-prone and is intentionally omitted.

---

## 1. Production build + dead links (authoritative)

```bash
npm run docs:build
```
Must end successfully. VitePress prints broken internal links during the build — every one is a ❌. This is the source of truth for link health because body links are relative `.md` links resolved by the builder.

---

## 2. Content scans (validated commands)

Run from the repo root. Each prints the offenders.

**Unresolved `[Screenshot: …]` placeholders** (half-finished pages):
```bash
grep -rlE '\[Screenshot:' docs/            # files
grep -rnE '\[Screenshot:' docs/ | wc -l    # total placeholders
```

**Missing `description` frontmatter** (and any file with no frontmatter at all):
```bash
for f in $(find docs -name '*.md' ! -name index.md); do
  grep -q '^description:' "$f" || echo "MISSING description: $f"
done
```

**Mangled acronym titles** (auto-title-casing broke the acronym):
```bash
grep -rnE '^title:.*(Fluentcrm|Fluentcommunity|Fluentcart|Rest Api|Cdn|Seo|Api|Url)\b' docs/
```
Fix casing → `FluentCRM`, `FluentCommunity`, `REST API`, `CDN`, `SEO`, `URL` (keep the `# H1` identical to the title).

**Remote-hosted images** (should be local `/images/…`):
```bash
grep -rnE '!\[[^]]*\]\(https?://' docs/
```
Known offenders: `migration/buddypress-migration.md`, `migration/buddyboss-migration.md` (point at `https://fluentcommunity.co/wp-content/uploads/…`).

**Image-folder ↔ slug mismatches** (manual/soft check — names diverge from article slugs, e.g. capitalized `Content-moderation`, typo `ractions-and-mention`, singular/plural `assigning-user-role` vs `…-roles`):
```bash
ls docs/public/images/*/                   # eyeball folder names vs docs/<section>/<slug>.md
```
These aren't build failures (refs still resolve) but are worth normalizing via `restructure-fluentcommunity-docs`.

---

## 3. Report

Summarize as a prioritized list:

- ❌ **Must fix** — build failures / dead links.
- ⚠️ **Should fix** — `[Screenshot:]` placeholders (~22 files), missing descriptions (~7 incl. `getting-started/the-setup-wizard.md`), mangled titles (~3), remote images (~2 files).
- ✅ **Clean** — checks that passed.

For each ⚠️/❌, name the file (and line) and the one-line fix, then point the user to `edit-fluentcommunity-doc` (content/frontmatter fixes) or `restructure-fluentcommunity-docs` (folder/slug renames). Do not apply the fixes here.

---

## Quick Reference

- Authoritative link check = `npm run docs:build` (relative `.md` links resolved by the builder).
- Content scans: placeholders · missing `description` · mangled acronym titles · remote images · folder-vs-slug mismatch.
- Read-only skill — report and delegate fixes; never edit.
