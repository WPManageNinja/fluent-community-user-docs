<p align="center">
  <img src="docs/public/images/brand/fluentCommunity_primary_logo.png" alt="FluentCommunity" width="320">
</p>

<h1 align="center">FluentCommunity User Documentation</h1>

<p align="center">
  The official end-user documentation for the <a href="https://fluentcommunity.co/">FluentCommunity</a> WordPress plugin, built with <a href="https://vitepress.dev">VitePress</a>.
</p>

<p align="center">
  <img alt="VitePress" src="https://img.shields.io/badge/built%20with-VitePress-5145e6">
  <img alt="Content" src="https://img.shields.io/badge/articles-97-5145e6">
  <img alt="Node" src="https://img.shields.io/badge/node-%E2%89%A518-5145e6">
</p>

---

## About

This is a **content repository**, not an application. Almost every change here is writing or editing a Markdown article, adding screenshots, and wiring the page into the sidebar.

If you're looking for developer-facing API documentation instead, that lives at [dev.fluentcommunity.co](https://dev.fluentcommunity.co/).

## Quick Start

You'll need [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/WPManageNinja/fluent-community-user-docs.git
cd fluent-community-user-docs
npm install
npm run docs:dev
```

The dev server starts at `http://localhost:5173` with hot reload.

### Available Scripts

| Command | What it does |
| :--- | :--- |
| `npm run docs:dev` | Start the local dev server with hot reload. |
| `npm run docs:build` | Build the production site to `.vitepress/dist`. |
| `npm run docs:preview` | Serve the built site locally to check the production output. |

> **There are no tests or linters in this repo.** `npm run docs:build` is the correctness check — VitePress fails the build on dead internal links, so always run it before opening a pull request.

## Repository Structure

```
.
├── .vitepress/
│   ├── config.mts          # Site config + the hand-maintained sidebar
│   └── theme/              # Brand colors and custom CSS
├── docs/                   # All content (srcDir)
│   ├── index.md            # Homepage (layout: home)
│   ├── getting-started/
│   ├── community-hub/
│   ├── ...                 # One folder per sidebar section
│   └── public/images/      # Screenshots, served at /images/...
├── CLAUDE.md               # Guidance for AI coding agents
└── package.json
```

### Content Sections

| Section | Folder | Articles |
| :--- | :--- | ---: |
| Getting Started | `docs/getting-started/` | 6 |
| Community Hub | `docs/community-hub/` | 28 |
| Gamification (Pro) | `docs/gamification-(pro)/` | 3 |
| Courses & Learning (Pro) | `docs/courses-&-learning-(pro)/` | 10 |
| Files & Media Storage | `docs/files-&-media-storage/` | 8 |
| Portal Settings | `docs/portal-settings/` | 16 |
| Monetization | `docs/monetization/` | 4 |
| Integrations | `docs/integrations/` | 14 |
| Migration | `docs/migration/` | 2 |
| Help & Resources | `docs/help-&-resources/` | 3 |
| For Developers | `docs/for-developers/` | 1 |
| Changelog | `docs/changelog/` | 1 |

## Adding a New Page

Adding an article is always a **two-step** job. A file without a sidebar entry is effectively orphaned — reachable only by direct URL.

1. **Create the Markdown file** in the right section folder, with `title` and `description` frontmatter:

   ```markdown
   ---
   title: Your Page Title
   description: One sentence describing the page. This feeds the SEO meta description.
   ---

   # Your Page Title

   Your content here.
   ```

2. **Add its sidebar entry** to the `themeConfig.sidebar` array in `.vitepress/config.mts`:

   ```js
   { text: 'Your Page Title', link: '/your-page-title' },
   ```

3. **Add screenshots** to `docs/public/images/<section>/<article-slug>/` as `.webp`.

4. **Run `npm run docs:build`** to confirm nothing is broken.

## Conventions

Read these before writing — they're easy to get wrong and they break the build.

### URLs are flattened

`cleanUrls` is on and a `rewrites` function strips the category folder from every URL. A file at `docs/portal-settings/general-settings.md` is served at **`/general-settings`**, not `/portal-settings/general-settings`. Sidebar `link` values and in-page links both use the flattened, root-absolute form without the `.md` extension.

### Filenames are significant

Article filenames are kebab-case and deliberately keep `&`, `(`, `)` so they match the sidebar `link` values exactly:

```
add-custom-links-(pro).md
space-settings-&-privacy.md
courses-&-learning-(pro)/
```

### Images

Screenshots go in `docs/public/images/<section>/<article-slug>/` as `.webp` and are referenced by root-absolute path (VitePress serves `public/` at `/`):

```markdown
![Descriptive alt text](/images/portal-settings/general-settings/site-logo.webp)
```

Convert screenshots before committing — for example `cwebp -q 82 -resize 1600 0 shot.png -o shot.webp`.

### Callouts

Use VitePress containers for asides:

```markdown
::: tip
Helpful suggestion.
:::

::: warning
Something to watch out for.
:::
```

Many existing pages also use blockquote callouts (`> **Use Case:** …`, `> **✨ Note:** …`). Match whichever style the surrounding page already uses.

### Pro features

Features that require the FluentCommunity Pro plan are labeled `(Pro)` consistently — in the filename, the frontmatter `title`, the `# H1`, and the sidebar `text`.

### Escaping `{{ }}`

VitePress runs Markdown through Vue, so `{{ double braces }}` are parsed as template interpolation **even inside inline code** — and an unparseable expression is a hard build failure. When documenting smartcodes or placeholders, wrap them:

```markdown
::: v-pre
`{{site_name_with_url}}` — replaced with your site name.
:::
```

## Theming

Branding is centralized in `.vitepress/theme/custom.css`, loaded via `.vitepress/theme/index.js` (which extends the VitePress default theme). The brand color is **`#5145e6`**, set through `--vp-c-brand-*` CSS variables with a `.dark` override. Prefer editing those variables over hardcoding colors.

## Contributing

1. Branch off `master`.
2. Make your content changes, following the conventions above.
3. Run `npm run docs:build` and confirm it completes with no dead-link warnings.
4. Open a pull request describing which pages you added or changed.

When restructuring — renaming, moving, or deleting a page — keep four things in sync: the Markdown file, its image folder, the sidebar entry in `.vitepress/config.mts`, and every inbound link from other pages.

## Links

- **Plugin website** — [fluentcommunity.co](https://fluentcommunity.co/)
- **Developer docs** — [dev.fluentcommunity.co](https://dev.fluentcommunity.co/)
- **VitePress docs** — [vitepress.dev](https://vitepress.dev)
