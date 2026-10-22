import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'parse5';
import assert from 'node:assert/strict';

const root = path.resolve('dist');
const origin = 'https://yunxi-kong.github.io';
const pages = new Map();
const externalLinks = new Set();
const attrs = node => Object.fromEntries((node.attrs || []).map(a => [a.name, a.value]));
function allNodes(node) {
  return [node, ...(node.childNodes || []).flatMap(allNodes)];
}
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}
for (const file of await walk(root)) {
  if (!file.endsWith('.html')) continue;
  const html = await readFile(file, 'utf8');
  const route = '/' + path.relative(root, file).split(path.sep).join('/').replace(/index\.html$/, '');
  const nodes = allNodes(parse(html));
  const elements = nodes.filter(n => n.tagName);
  const tags = tag => elements.filter(n => n.tagName === tag);
  assert.equal(tags('h1').length, 1, `${route}: one H1`);
  assert.equal(tags('main').length, 1, `${route}: one main landmark`);
  assert.equal(tags('title').length, 1, `${route}: title missing`);
  assert.equal(attrs(tags('html')[0]).lang, 'en');
  assert.ok(tags('meta').some(n => attrs(n).name === 'description' && attrs(n).content.length > 20), `${route}: description`);
  assert.ok(tags('link').some(n => attrs(n).rel === 'canonical' && attrs(n).href === origin + route), `${route}: canonical`);
  const ids = elements.map(n => attrs(n).id).filter(Boolean);
  assert.equal(ids.length, new Set(ids).size, `${route}: duplicate IDs`);
  for (const node of tags('img')) {
    const a = attrs(node);
    assert.ok(a.src && 'alt' in a && a.width && a.height, `${route}: image metadata`);
    assert.ok(a.src.startsWith('/'), `${route}: external image request`);
  }
  for (const node of tags('script')) {
    assert.equal(attrs(node).type, 'application/ld+json', `${route}: unexpected executable script`);
    JSON.parse(node.childNodes.map(n => n.value || '').join(''));
  }
  assert.ok(!html.includes('mailto:'), `${route}: email must remain selectable text`);
  assert.ok(!/under review|ICLS 2026|master's student|\bTODO\b|\blorem ipsum\b/i.test(html), `${route}: stale or placeholder content`);
  assert.ok(!/sk-[A-Za-z0-9]{24,}|ghp_[A-Za-z0-9]{30,}|C:[\\/]+Users[\\/]+Owner/.test(html), `${route}: possible private data`);
  pages.set(route, {elements, ids});
}
let references = 0;
for (const [route, page] of pages) {
  for (const node of page.elements) {
    const a = attrs(node);
    const reference = node.tagName === 'a' || node.tagName === 'link' ? a.href : node.tagName === 'img' ? a.src : null;
    if (!reference) continue;
    const url = new URL(reference, origin + route);
    assert.ok(['https:', 'http:'].includes(url.protocol), `${route}: unsafe URL ${reference}`);
    if (url.origin !== origin) { externalLinks.add(url.href); continue; }
    references++;
    const target = decodeURIComponent(url.pathname);
    if (pages.has(target)) {
      if (url.hash) assert.ok(pages.get(target).ids.includes(decodeURIComponent(url.hash.slice(1))), `${route}: broken anchor ${reference}`);
    } else {
      const file = path.resolve(root, '.' + target);
      assert.ok(file.startsWith(root + path.sep), `${route}: unsafe local path`);
      assert.ok((await stat(file)).isFile(), `${route}: broken link ${reference}`);
    }
  }
}
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
for (const route of pages.keys()) {
  if (route !== '/404.html') assert.ok(sitemap.includes(`<loc>${origin}${route}</loc>`), `Sitemap missing ${route}`);
}
assert.ok(pages.has('/writing/human-capability/'));
assert.ok(pages.has('/projects/asnr-brain-atlas/'));
console.log(`Validated ${pages.size} pages, ${references} internal references, image metadata, anchors, structured data, and sitemap coverage.`);
console.log(`${externalLinks.size} distinct external URLs present (network availability checked separately).`);
