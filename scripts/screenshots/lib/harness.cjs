// Headless-Chrome harness for FluentCommunity doc screenshots.
// Ported from the FluentCart docs runner. Drives the REAL Google Chrome via playwright-core and
// signs in with auth cookies (scripts/screenshots/.cookies.json, made by wp-cookies.php), so no
// password is needed. See .claude/skills/fluentcommunity-doc-screenshots/SKILL.md.

const path = require('path');
const fs = require('fs');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) { throw new Error('playwright-core not found. Run `npm i -D playwright-core` in the docs repo (no browser download needed).'); }

const DEFAULTS = {
  site: 'http://crm.local',
  chrome: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  cookieFile: path.join(__dirname, '..', '.cookies.json'),
  viewport: { width: 1600, height: 1000 },
  scale: 1.25,
  rawDir: path.join(__dirname, '..', 'raw'),
};

class Harness {
  constructor(opts = {}) {
    const clean = Object.fromEntries(Object.entries(opts).filter(([, v]) => v !== undefined && v !== null));
    this.o = { ...DEFAULTS, ...clean, viewport: { ...DEFAULTS.viewport, ...(opts.viewport || {}) } };
    fs.mkdirSync(this.o.rawDir, { recursive: true });
  }

  async launch() {
    if (!fs.existsSync(this.o.cookieFile)) throw new Error('Missing ' + this.o.cookieFile + '. Run the wp-cookies.php command from the skill (section 2, step 1).');
    this.browser = await chromium.launch({ executablePath: this.o.chrome, headless: true });
    this.context = await this.browser.newContext({ viewport: this.o.viewport, deviceScaleFactor: this.o.scale });
    const host = new URL(this.o.site).hostname;
    const cookies = JSON.parse(fs.readFileSync(this.o.cookieFile, 'utf8'));
    await this.context.addCookies(cookies.map(c => ({ ...c, domain: host, path: '/' })));
    if (this.o.initScript) await this.context.addInitScript(this.o.initScript);
    this.page = await this.context.newPage();
    return this.page;
  }

  async close() { if (this.browser) await this.browser.close(); }

  async setViewport(v) {
    this.o.viewport = { ...this.o.viewport, ...v };
    await this.page.setViewportSize(this.o.viewport);
    await this.page.waitForTimeout(400);
  }

  // A portal route, e.g. "/portal/admin/settings" or "/portal/courses". Logged in via cookies.
  async gotoPortal(url, { waitUntil = 'networkidle', waitForApp = true } = {}) {
    const p = this.page;
    const full = /^https?:/.test(url) ? url : this.o.site + url;
    await p.goto(full, { waitUntil, timeout: 90000 });
    if (/wp-login\.php/.test(p.url())) throw new Error('Cookies rejected (redirected to login). Regenerate .cookies.json.');
    if (waitForApp) await p.waitForSelector('#fluent_com_portal', { state: 'attached', timeout: 30000 });
    await p.waitForTimeout(1500);
    await this.cleanChrome();
  }

  // Hide the WP admin bar and floating noise. The portal itself has no WP menu.
  async cleanChrome() {
    await this.page.addStyleTag({ content: `
      #wpadminbar { display: none !important; } html { margin-top: 0 !important; }
      .el-message, .el-notification, .notice, .update-nag { display: none !important; }
    ` });
    await this.page.waitForTimeout(300);
  }

  async hideCss(selector) {
    await this.page.addStyleTag({ content: `${selector} { display: none !important; }` });
    await this.page.waitForTimeout(200);
  }

  async scrollTop() {
    await this.page.evaluate(() => {
      window.scrollTo(0, 0);
      document.querySelectorAll('*').forEach(e => { if (e.scrollTop) e.scrollTop = 0; });
    });
    await this.page.waitForTimeout(300);
  }

  // Locator helpers -------------------------------------------------------

  loc(sel) {
    // "text=..." / "role=button[name=...]" are plain Playwright selectors.
    // {text: "Search Help"} matches exact visible text; {label: "Timezone"}
    // resolves the settings row that owns that .setting-label.
    if (typeof sel === 'string') return this.page.locator(sel).first();
    if (sel.text) return this.page.getByText(sel.text, { exact: true }).first();
    if (sel.role) return this.page.getByRole(sel.role, { name: new RegExp(sel.name, 'i') }).first();
    if (sel.hasText) return this.page.locator(sel.selector || '*', { hasText: sel.hasText }).first();
    if (sel.selector) return this.page.locator(sel.selector).first();
    throw new Error('Unsupported selector: ' + JSON.stringify(sel));
  }

  // Bounding box of a form row (.el-form-item) whose label text equals `labelText`, and of its control.
  async settingsRow(labelText) {
    return this.page.evaluate((txt) => {
      const labs = Array.from(document.querySelectorAll('.el-form-item__label, .setting-label, label'));
      const lab = labs.find(e => e.textContent.trim() === txt);
      if (!lab) return null;
      const item = lab.closest('.el-form-item') || lab.parentElement;
      const r = item.getBoundingClientRect();
      const ctrl = item.querySelector('.el-radio-group, .el-select, .el-input, .el-switch, .el-checkbox, input, textarea');
      const c = ctrl ? ctrl.getBoundingClientRect() : null;
      return { row: { x: r.x, y: r.y, width: r.width, height: r.height },
               control: c ? { x: c.x, y: c.y, width: c.width, height: c.height } : null };
    }, labelText);
  }

  // Input actions ---------------------------------------------------------

  async click(sel) { await this.loc(sel).click(); await this.page.waitForTimeout(500); }

  async fill(sel, value) { await this.loc(sel).fill(String(value)); await this.page.waitForTimeout(200); }

  // Type into the input that belongs to a visible label (schema-driven forms).
  // Sets the value through the native setter so Vue picks it up. NOT saved.
  async fillByLabel(label, value) {
    await this.page.evaluate(({ label, value }) => {
      const lab = Array.from(document.querySelectorAll('label, span, div')).find(e => e.children.length === 0 && e.textContent.trim() === label);
      if (!lab) return false;
      let el = lab, input = null;
      for (let i = 0; i < 6 && el && !input; i++) { input = el.querySelector('input, textarea'); if (!input) el = el.parentElement; }
      if (!input) return false;
      const proto = input.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(proto, 'value').set.call(input, value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }, { label, value });
    await this.page.waitForTimeout(200);
  }

  // Screenshots -----------------------------------------------------------

  // Resolve a clip spec to CSS-pixel page coordinates.
  //   "app"                       -> the FluentCart admin app region (default for admin pages)
  //   "viewport"                  -> whole viewport
  //   {element: sel, pad}         -> that element's box (+pad)
  //   {rows: [label,...], pad}    -> union of settings rows (+pad)
  //   {x, y, width, height}       -> explicit CSS px
  async resolveClip(spec = 'app') {
    const vp = this.page.viewportSize();
    if (spec === 'viewport' || spec === 'app') return { x: 0, y: 0, width: vp.width, height: vp.height };
    if (spec.element) {
      const b = await this.loc(spec.element).boundingBox();
      if (!b) throw new Error('clip element not found: ' + JSON.stringify(spec.element));
      const pad = spec.pad || 0;
      const x = Math.max(0, b.x - pad), y = Math.max(0, b.y - pad);
      // extendRight: keep the element's left edge but run to the viewport's right edge
      // (mirrored margin), e.g. product gallery + the buy column beside it.
      const width = spec.extendRight ? vp.width - x - x : b.width + pad * 2;
      return { x, y, width, height: b.height + pad * 2 };
    }
    if (spec.rows) {
      const boxes = [];
      for (const label of spec.rows) {
        const r = await this.settingsRow(label);
        if (!r) throw new Error('settings row not found: ' + label);
        boxes.push(r.row);
      }
      const pad = spec.pad == null ? 24 : spec.pad;
      const x1 = Math.min(...boxes.map(b => b.x)) - pad, y1 = Math.min(...boxes.map(b => b.y)) - pad;
      const x2 = Math.max(...boxes.map(b => b.x + b.width)) + pad, y2 = Math.max(...boxes.map(b => b.y + b.height)) + pad;
      return { x: Math.max(0, x1), y: Math.max(0, y1), width: x2 - Math.max(0, x1), height: y2 - Math.max(0, y1) };
    }
    if (spec.width && spec.height) return { x: spec.x || 0, y: spec.y || 0, width: spec.width, height: spec.height };
    throw new Error('Unsupported clip: ' + JSON.stringify(spec));
  }

  // Resolve an arrow target to IMAGE pixels relative to a clip.
  //   {selector|text|role}        -> element box
  //   {row: label, part: 'control'|'label'|'row'} -> settings row part
  async resolveTarget(spec, clip) {
    let b;
    if (spec.row) {
      const r = await this.settingsRow(spec.row);
      if (!r) throw new Error('settings row not found: ' + spec.row);
      b = (spec.part === 'row' || !r.control) ? r.row : r.control;
      if (spec.part === 'label') {
        const lb = await this.page.locator('.el-form-item__label, .setting-label, label', { hasText: new RegExp('^' + spec.row + '$') }).first().boundingBox();
        if (lb) b = lb;
      }
    } else {
      const sel = spec.selector ? spec.selector : spec;
      b = await this.loc(sel).boundingBox();
      if (!b) throw new Error('arrow target not found: ' + JSON.stringify(spec));
    }
    const s = this.o.scale;
    return { x: (b.x - clip.x) * s, y: (b.y - clip.y) * s, width: b.width * s, height: b.height * s };
  }

  // Take a raw PNG for the clip; returns { file, clip }.
  async shotRaw(name, clipSpec = 'app') {
    const clip = await this.resolveClip(clipSpec);
    const vp = this.page.viewportSize();
    clip.width = Math.min(clip.width, vp.width - clip.x);
    clip.height = Math.min(clip.height, vp.height - clip.y);
    const file = path.join(this.o.rawDir, `${name}.png`);
    await this.page.screenshot({ path: file, clip });
    return { file, clip };
  }
}

module.exports = { Harness, DEFAULTS };
