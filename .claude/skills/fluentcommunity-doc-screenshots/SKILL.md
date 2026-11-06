---
name: fluentcommunity-doc-screenshots
description: Take, annotate, and place pixel-consistent screenshots of the FluentCommunity portal and admin screens (Portal Settings, courses, quizzes, certificates, search, spaces) for this docs site. Use whenever the user asks to "take screenshots", "add images", "capture the UI", "update the screenshot", or when a doc page being written or edited needs an image of a FluentCommunity screen. Covers the headless-Chrome runner (scripts/screenshots/shoot.cjs), cookie login for the crm.local test site, JSON shot plans, arrow/crop/naming rules, placing images in markdown, and verification. Do NOT use the Claude-in-Chrome extension or macOS screencapture.
---

# FluentCommunity Doc Screenshots

Ported from the FluentCart docs skill (`/Users/tajulislam/Desktop/fluent-cart-docs/.claude/skills/fluentcart-doc-screenshots`). Every screenshot is taken by a script, never by hand, so images are reproducible and share one framing, scale and arrow style.

Read this whole file before shooting. Follow the workflow in section 2.

---

## 1. Facts you must not rediscover

| Thing | Value |
|---|---|
| Test site | `http://crm.local` (Local by Flywheel). Site id `P9mY3GtAt`. WP user ID `1` (`tajul`, administrator). |
| Plugins under test | `~/Local Sites/crm/app/public/wp-content/plugins/fluent-community` and `fluent-community-pro` (v2.13.0). |
| Login | **Cookie based, no password.** `scripts/screenshots/wp-cookies.php` writes auth cookies to `scripts/screenshots/.cookies.json` (gitignored, expires in 2 days). Regenerate when the runner says "Cookies rejected". |
| Portal | `http://crm.local/portal/` is a Vue SPA with history routing. App root: `#fluent_com_portal`. |
| Routes | Feed `/portal/`, spaces `/portal/discover/spaces`, courses `/portal/courses`, members `/portal/members`, profile `/portal/u/<username>`, a space `/portal/space/<slug>/home`, a course `/portal/course/<slug>/lessons`, **all admin settings `/portal/admin/settings`** (Portal Settings sidebar), certificates and quizzes live under Course Management in that sidebar. |
| Runner | `npm run shots -- scripts/screenshots/plans/<plan>.json`. Library in `scripts/screenshots/lib/`. |
| Browser | Headless **real Google Chrome** via `playwright-core` (devDependency of this repo). No download. |
| Output | `docs/public/images/<section>/<article-slug>/<name>.webp`, referenced as `/images/<section>/<article-slug>/<name>.webp`. Raw PNGs go to `scripts/screenshots/raw/` (gitignored). |
| Scale | Viewport **1600 CSS px wide**, device scale **1.25** so images are about 2000 px wide, matching the existing library. Never resize output. |
| Brand colour | `#5145e6` for arrows with a white halo, set in `scripts/screenshots/lib/annotate.cjs`. |
| webp quality | 82. |

### Regenerate the cookies

```bash
cd /Users/tajulislam/Desktop/fluent-community-user-docs
PHP=/Applications/Local.app/Contents/Resources/extraResources/lightning-services/php-8.2.29+0/bin/darwin-arm64/bin/php
SOCK="$HOME/Library/Application Support/Local/run/P9mY3GtAt/mysql/mysqld.sock"
SITE_HOST=crm.local WP_PATH="$HOME/Local Sites/crm/app/public" \
  "$PHP" -d memory_limit=1G -d mysqli.default_socket="$SOCK" \
  scripts/screenshots/wp-cookies.php 1 > scripts/screenshots/.cookies.json
```

The Local site must be running (`curl -s -o /dev/null -w "%{http_code}" http://crm.local/` returns 200). Never commit `.cookies.json`.

### What does NOT work (do not retry)
- **Claude-in-Chrome extension**: bound to a different device, cannot resolve `crm.local`.
- **AppleScript plus `screencapture`**: captures overlapping windows and needs permissions.
- **`wp-cli`**: not set up for this site. Read plugin PHP instead.

---

## 2. Workflow (follow in order)

### Step 1: Decide the shot list from the doc, not from the UI
For the page you write or update, list every screenshot:

```
name (file slug) | what it must show | clip type | arrow target (if any) | where it goes in the .md
```

Rules:
- **One image per step that involves a click**, placed right after the sentence that says to click. Pure-reading steps get one image per section.
- **Arrows only where the sentence says "click", "select" or "open"**. A field-reference image gets no arrow.
- Skip an image if the control is already obvious in the previous one.
- A new feature page needs at minimum: (1) the "where to find it" shot, (2) one shot per major section, (3) the Save/apply shot.
- **Never overwrite or delete an existing image.** Only add new images where the user says one is needed, under a new filename. Replace an existing image only when the user explicitly asks. Check `docs/public/images/<section>/` first and pick a name that is not taken.
- Match the house style: portal chrome visible, no WordPress admin bar, no toasts, an arrow (and optional underline) in brand colour.

Naming: `kebab-case`, `<screen>-<what>.webp`, e.g. `global-search-results.webp`. No numbers, no dates.

### Step 2: Confirm the UI exists on the site
- Check the plugin version: `grep -m1 "Version:" ~/"Local Sites/crm/app/public/wp-content/plugins/fluent-community/fluent-community.php"`.
- Open the screen with a quick probe plan and read the raw image before writing the real plan. Learn the real labels and layout.
- Vue/JS bundle changes need the plugin build; the runner never builds.
- If a label from the doc is not on the screen, **stop and tell the user**. Do not shoot something similar.

### Step 3: Write the plan JSON
Create `scripts/screenshots/plans/<page-slug>.json`. Copy `plans/global-search.json` and edit it. The full step list is at the top of `scripts/screenshots/shoot.cjs`. Essentials:

```json
{
  "outDir": "docs/public/images/getting-started/global-search",
  "viewport": { "width": 1600, "height": 1000 },
  "steps": [
    { "portal": "/portal/" },
    { "press": "Control+K" },
    { "type": "welcome" },
    { "shot": { "name": "global-search-results", "clip": "viewport",
                "arrows": [ { "target": { "text": "Relevance" }, "from": "right", "len": 140 } ] } }
  ]
}
```

Step vocabulary: `portal`, `viewport`, `click`, `fill`, `fillByLabel`, `press`, `type`, `hideCss`, `scrollTop`, `css`, `eval`, `wait`, `shot`, `stack`.

A `portal` step also accepts `"waitForApp": false` for server-rendered pages that have no `#fluent_com_portal` (for example the public `/portal/certificates/<credential-id>` verification page). The full-screen course editor keeps `#fluent_com_portal` hidden, so the runner only waits for it to exist.

Selector forms accepted wherever `<sel>` is expected:
- CSS string: `".el-dialog"`, `"button.fcom_primary_button"`
- `{ "text": "Save" }`: exact visible text
- `{ "role": "button", "name": "^save$" }`: accessible role plus name regex
- `{ "selector": "css", "hasText": "Customize" }`: CSS narrowed by text
- `{ "selector": "css" }`: a plain CSS selector in object form (first match). A string such as `"button:has-text('Settings') >> nth=3"` picks the nth match.
- `{ "row": "Label", "part": "control" }`: a form row (`.el-form-item`) found by its label text

Clip rules:
- `"viewport"` (alias `"app"`): the whole browser window. Use for "where to find it" shots.
- `{ "element": "<sel>", "pad": 24 }`: a dialog, card, drawer, table.
- `{ "rows": ["Label A", "Label B"], "pad": 24 }`: one or more form rows.
- `"crop": { "height": N }` (image px) trims dead space at the bottom.
- Raise `viewport.height` (1300 to 1650) when a form is taller than the window, then crop.

Arrow rules:
- `from` is the side the arrow comes from. Pick the side with empty space.
- `len` 130 to 160 for controls. One arrow per image. Never label the arrow.
- If the arrow would cross text, change `from` or shorten it. Never crop part of a control to fit an arrow.

Data rules:
- Empty screens look fake. Use realistic, neutral sample data (a "Website Relaunch" style course, normal first names). Never real customer data or real emails. Hide private values with `css` or `eval` if they show.
- Create sample records through the plugin's own UI or REST API, never direct DB writes.
- Do not trigger outward-facing actions (real emails, deletes, revoking real certificates).
- Anything you change to take a shot (a toggle, a setting) must be **written down and put back** (step 7).

### Step 4: Run it

```
npm run shots -- scripts/screenshots/plans/<page-slug>.json
npm run shots -- scripts/screenshots/plans/<page-slug>.json --only=name1,name2
```

If a selector is not found, open the plugin's Vue source or inspect the page; do not guess class names.

### Step 5: Verify every image (mandatory)
Open each `.webp` with the Read tool and check, in order:
1. No WordPress admin bar, no browser chrome, no toast, no private data (emails, license keys).
2. The intended control is fully inside the frame, nothing cut mid-word.
3. The arrow tip sits just outside the control and does not cover text.
4. State is right: correct tab, values filled, dialog open.
5. Size is about 2000 px wide, with no large empty area (fix with `crop.height`).
If anything fails, fix the plan and re-run with `--only=`. Never hand-edit images.

### Step 6: Place in markdown
- Syntax: `![Screenshot of <what the reader sees>](/images/<section>/<article-slug>/<name>.webp)`. Follow the existing alt style on the page you are editing.
- Position: immediately after the sentence or step it illustrates, on its own line with blank lines around it. Inside a numbered list, indent four spaces under the step.
- Never stack two images with no text between them.
- Then run `npm run docs:build` (must pass) and, for a new page, `npm run featured:generate`.
- Do not commit unless the user asks.

### Step 7: Leave the site as you found it
- Put back every setting you changed and note it in your report.
- Delete sample records you created, or list their IDs and offer to delete them.
- Keep the plan JSON in `scripts/screenshots/plans/`. It is the regression fixture for the next release.

---

## 3. Recipes

**Global search palette**: `{ "portal": "/portal/" }`, `{ "press": "Control+K" }`, `{ "type": "<word>" }`, then a `viewport` shot. The header search box reads "Search..." with a `⌘K` badge.

**Portal Settings page**: `{ "portal": "/portal/admin/settings" }`, click the sidebar item with `{ "text": "Privacy Settings" }`, then shoot `"viewport"` or a `rows` clip.

**A dialog or modal**: click the trigger, `{ "wait": 800 }`, then `clip: { "element": ".el-dialog" }`. Element Plus dialogs are appended to `<body>`.

**Quiz or lesson editor**: open the lesson in the course editor under `/portal/course/<slug>/lessons`, then shoot the viewport. Quiz settings are in the right-hand panel.

**Student view**: the same cookies sign in as the admin. To show a student screen, shoot the pages students share (profile, course page) and avoid anything that needs a second user.

---

**Certificates (Pro)**: templates, the Course Certificates and Manual Certificates tabs live under `/portal/admin/settings` then **Certificates**. A course's **Certificate** tab is `/portal/admin/manage-courses/edit/<course-id>/settings`. Student screens are the profile **Certificates** tab (`/portal/u/<username>`) and the public page `/portal/certificates/<credential-id>`. See `plans/course-certificates-*.json` for working examples.

**Demo data**: create it through the plugin UI or REST API with a short Playwright script that reuses `.cookies.json` and the nonce in `window.fluentComAdmin.rest` (`url` and `nonce`). Lesson completion is `PUT courses/<id>/lessons/<lesson-id>/completion` and needs `POST courses/<id>/enroll` first. Always note every record and setting you create, and offer to remove it.

---

## 4. Hard rules
- Never take screenshots by hand or via the Chrome extension. If the runner cannot do it, extend `lib/harness.cjs` and keep plans declarative.
- Never publish an image that shows the WordPress admin chrome or another plugin's UI.
- Never invent UI. If a label cannot be found, tell the user which step is missing.
- Never commit `.cookies.json` or raw PNGs.
- Never change existing image paths or filenames when updating a doc.
