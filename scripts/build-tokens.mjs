// Generates src/styles/tokens.css from src/design/tokens.json.
// tokens.json is the single source of truth, shared with the design system artifact.
// Runs automatically before `astro dev` and `astro build` (see package.json).
import { readFileSync, writeFileSync } from 'node:fs';

const t = JSON.parse(readFileSync(new URL('../src/design/tokens.json', import.meta.url), 'utf8'));
const themes = t.color.themes.map((th) => th.id);
const first = themes[0];
const value = (v, theme) => (typeof v === 'string' ? v : (v[theme] ?? v[first]));
const block = (theme) =>
  [...t.color.tokens, ...(t.shadow?.tokens ?? [])]
    .map((k) => `  --${k.name}: ${value(k.value, theme)};`)
    .join('\n');

const flat = ['spacing', 'radius', 'size', 'zIndex']
  .flatMap((f) => t[f]?.tokens ?? [])
  .map((k) => `  --${k.name}: ${k.value};`);
const families = Object.entries(t.type.families).map(([k, v]) => `  --font-${k}: ${v};`);

const css = [
  '/* Minh Tran Portfolio: generated from tokens.json. Do not edit by hand; run `npm run tokens`. */',
  `:root, [data-theme="${first}"] {\n${block(first)}\n}`,
  ...themes.slice(1).map((th) => `[data-theme="${th}"] {\n${block(th)}\n}`),
  // Follow the system setting until the visitor picks a theme with the toggle.
  `@media (prefers-color-scheme: light) {\n  :root:not([data-theme]) {\n${block('light').replace(/^/gm, '  ')}\n  }\n}`,
  `:root {\n${[...flat, ...families].join('\n')}\n}`,
].join('\n\n');

writeFileSync(new URL('../src/styles/tokens.css', import.meta.url), css + '\n');
console.log(`tokens.css: ${t.color.tokens.length} colours x ${themes.length} themes, ${flat.length} scale tokens`);
