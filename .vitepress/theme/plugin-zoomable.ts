import type { MarkdownRenderer } from "vitepress";

/** Escape for HTML attribute value to avoid broken markup and XSS. */
function escapeAttr(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function zoomablePlugin(md: MarkdownRenderer) {
  const defaultRender =
    md.renderer.rules.image ||
    ((tokens, idx, options, env, self) => {
      return self.renderToken(tokens, idx, options);
    });

  md.renderer.rules.image = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    if (!token.attrs) return defaultRender(tokens, idx, options, env, self);

    const srcIndex = token.attrIndex("src");
    if (srcIndex < 0) return defaultRender(tokens, idx, options, env, self);

    const src = token.attrs[srcIndex][1];
    const alt = token.content || "";

    // The component builds its own <img> from a raw string prop, so the src never
    // goes through Vite's asset pipeline. Relative paths (./foo.png, ../foo.png)
    // would be emitted verbatim and 404 in production — leave those to the default
    // renderer so Vite can still rewrite and hash them.
    if (!/^(\/|https?:)/.test(src)) {
      return defaultRender(tokens, idx, options, env, self);
    }

    // Rendered server-side (NOT wrapped in <ClientOnly>) so the <img> and its alt
    // text are present in the static HTML for crawlers and social scrapers.
    // ZoomableImage uses <span> wrappers precisely so this is valid inside the <p>
    // markdown puts an image in, and so SSR and client markup match for hydration.
    // Explicit closing tag keeps SSR and client output byte-identical.
    return `<ZoomableImage src="${escapeAttr(src)}" alt="${escapeAttr(alt)}"></ZoomableImage>`;
  };
}
