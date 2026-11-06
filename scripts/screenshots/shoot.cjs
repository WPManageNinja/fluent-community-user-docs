#!/usr/bin/env node
// Declarative screenshot runner for FluentCommunity docs.
//
//   node scripts/screenshots/shoot.cjs scripts/screenshots/plans/<plan>.json [--only name1,name2] [--keep-raw]
//
// A plan is JSON:
// {
//   "site": "http://crm.local",                       (optional, default)
//   "outDir": "docs/public/images/<section>/<article-slug>",    (required; created if missing)
//   "viewport": {"width":1600,"height":1100},           (optional, default)
//   "steps": [ ...see STEP TYPES below... ]
// }
//
// STEP TYPES (one key per step object):
//   {"portal": "/portal/admin/settings"}            go to a portal route (cookie login, WP admin bar hidden)
//       optional "waitForApp": false for server-rendered pages such as /portal/certificates/<id>
//   {"viewport": {"width":1600,"height":1400}}         resize
//   {"click": <sel>}                                   click; <sel> = "css" | {"text":"Save"} | {"role":"button","name":"^save$"} | {"selector":"css","hasText":"Customize"}
//   {"fill": {"selector": <sel>, "value": "..."}}      type into an input
//   {"fillByLabel": {"label":"Company Name","value":"Cartuz Studio LLC"}}   schema-form input under a label (NOT saved)
//   {"hideCss": "header.wp-block-template-part"}        display:none for anything noisy
//   {"scrollTop": true}                                 reset every scroll container (pickers scroll the panel)
//   {"css": "#adminmenumain{display:none}"}            inject arbitrary CSS (e.g. to hide chrome around the WordPress block editor)
//   {"eval": "wp.data.dispatch('core/block-editor').selectBlock(...)"}   run JS in the page (block/Elementor editors expose no stable selectors)
//   {"press": "Control+K"}                          keyboard shortcut (use "Meta+K" for Mac style)
//   {"type": "welcome"}                               type text into the focused element
//   {"wait": 800}                                       ms
//   {"shot": {                                          take + annotate + export
//       "name": "appearance-tab",                        -> <outDir>/<name>.webp
//       "clip": "app" | "viewport" | {"element": <sel>, "pad": 24} | {"rows": ["Date & Time Format","Timezone"], "pad": 24} | {"x":0,"y":0,"width":800,"height":600},
//       "arrows": [{"target": <sel> | {"row":"Timezone","part":"control"}, "from": "left|right|top|bottom", "len": 150}],
//       "highlights": [<sel>],
//       "crop": {"height": 1500},                        (image px, after clip; left/top/width optional)
//       "export": false                                  (keep the raw PNG only, e.g. an input for "stack")
//   }}
//   clip {"element": <sel>, "pad": 40, "extendRight": true}  keeps the element's left edge but runs to the
//       viewport's right edge with a mirrored margin (product gallery + the buy column beside it)
//   {"stack": {"raws": ["front-default","front-custom"], "labels": ["Before: ...","After: ..."], "name": "before-after"}}
//       vertical before/after composite from earlier shots' RAW pngs (by shot name)
//
// Raw PNGs go to scripts/screenshots/raw/ (gitignored). Only the .webp in outDir is committed.

const fs = require('fs');
const path = require('path');
const { Harness } = require('./lib/harness.cjs');
const { annotate, stack } = require('./lib/annotate.cjs');

const REPO = path.resolve(__dirname, '..', '..');

function parseArgs() {
  const args = process.argv.slice(2);
  const plan = args.find(a => !a.startsWith('--'));
  const only = (args.find(a => a.startsWith('--only=')) || '').replace('--only=', '').split(',').filter(Boolean);
  return { plan, only };
}

async function main() {
  const { plan: planFile, only } = parseArgs();
  if (!planFile) { console.error('usage: node scripts/screenshots/shoot.cjs <plan.json> [--only=name,name]'); process.exit(1); }
  const plan = JSON.parse(fs.readFileSync(path.resolve(planFile), 'utf8'));
  if (!plan.outDir) throw new Error('plan.outDir is required');
  const outDir = path.resolve(REPO, plan.outDir);
  fs.mkdirSync(outDir, { recursive: true });

  const h = new Harness({ site: plan.site, viewport: plan.viewport, user: plan.user, pass: plan.pass });
  await h.launch();
  const raws = {};
  let n = 0;

  try {
    for (const step of plan.steps) {
      n++;
      const type = Object.keys(step).find(k => !['waitUntil', 'waitForApp'].includes(k));
      const v = step[type];
      const tag = `[${n}] ${type}`;
      switch (type) {
        case 'portal': console.log(tag, v); await h.gotoPortal(v, { waitUntil: step.waitUntil || 'networkidle', waitForApp: step.waitForApp !== false }); break;
        case 'viewport': console.log(tag, JSON.stringify(v)); await h.setViewport(v); break;
        case 'click': console.log(tag, JSON.stringify(v)); await h.click(v); break;
        case 'fill': console.log(tag, JSON.stringify(v.selector)); await h.fill(v.selector, v.value); break;
        case 'fillByLabel': console.log(tag, v.label); await h.fillByLabel(v.label, v.value); break;
        case 'hideCss': console.log(tag, v); await h.hideCss(v); break;
        case 'scrollTop': console.log(tag); await h.scrollTop(); break;
        case 'css': console.log(tag, v.slice(0, 60)); await h.page.addStyleTag({ content: v }); await h.page.waitForTimeout(300); break;
        case 'eval': console.log(tag, v.slice(0, 60)); await h.page.evaluate(v); await h.page.waitForTimeout(600); break;
        case 'press': console.log(tag, v); await h.page.keyboard.press(v); await h.page.waitForTimeout(700); break;
        case 'type': console.log(tag, v); await h.page.keyboard.type(v, { delay: 40 }); await h.page.waitForTimeout(1200); break;
        case 'wait': console.log(tag, v); await h.page.waitForTimeout(v); break;
        case 'shot': {
          if (only.length && !only.includes(v.name)) { console.log(tag, v.name, '(skipped)'); break; }
          console.log(tag, v.name);
          const { file, clip } = await h.shotRaw(v.name, v.clip || 'app');
          raws[v.name] = file;
          if (v.export === false) { console.log('     -> raw only'); break; }
          const arrows = [];
          for (const a of v.arrows || []) arrows.push({ target: await h.resolveTarget(a.target, clip), from: a.from || 'left', len: a.len || 160 });
          const highlights = [];
          for (const t of v.highlights || []) highlights.push(await h.resolveTarget(t, clip));
          const out = path.join(outDir, `${v.name}.webp`);
          await annotate(file, out, { arrows, highlights, crop: v.crop || null, scale: h.o.scale });
          const meta = await require('sharp')(out).metadata();
          console.log(`     -> ${path.relative(REPO, out)}  ${meta.width}x${meta.height}`);
          break;
        }
        case 'stack': {
          console.log(tag, v.name);
          const files = v.raws.map(r => raws[r] || path.join(h.o.rawDir, `${r}.png`));
          const out = path.join(outDir, `${v.name}.webp`);
          await stack(files, v.labels, out);
          console.log(`     -> ${path.relative(REPO, out)}`);
          break;
        }
        default: throw new Error('Unknown step type: ' + type);
      }
    }
  } finally {
    await h.close();
  }
  console.log('done');
}

main().catch(e => { console.error(e); process.exit(1); });
