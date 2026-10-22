import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";

const base = process.env.TEST_URL || "http://127.0.0.1:4321";
const channel = process.env.BROWSER_CHANNEL || (process.platform === "win32" ? "chrome" : undefined);
await mkdir("test-results", { recursive: true });
async function routes(dir = "dist") {
  const list = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) list.push(...await routes(file));
    else if (file.endsWith(".html")) list.push("/" + path.relative("dist", file).split(path.sep).join("/").replace(/index\.html$/, ""));
  }
  return list;
}
const browser = await chromium.launch({ headless: true, channel });
const report = [];
try {
  for (const width of [1440, 768, 390, 320]) {
    const context = await browser.newContext({ viewport: { width, height: 960 }, reducedMotion: "reduce" });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", e => errors.push(e.message));
    for (const route of await routes()) {
      const response = await page.goto(base + route, { waitUntil: "networkidle" });
      assert.ok(response.status() === 200 || (route === "/404.html" && response.status() === 404), `${route}: ${response.status()}`);
      await page.evaluate(async () => {
        for (const img of document.images) { img.loading = "eager"; await img.decode().catch(() => {}); }
      });
      const metrics = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth + 1,
        missingImages: [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.src),
        emptyLinks: [...document.querySelectorAll("a")].filter(a => !a.textContent.trim() && !a.getAttribute("aria-label") && !a.querySelector("img[alt]")).length,
        textOverflow: [...document.querySelectorAll("main p, main h1, main h2, main h3")].filter(e => e.getBoundingClientRect().right > innerWidth + 1).length
      }));
      assert.equal(metrics.overflow, false, `${width} ${route}: overflow`);
      assert.deepEqual(metrics.missingImages, [], route);
      assert.equal(metrics.emptyLinks, 0, route);
      assert.equal(metrics.textOverflow, 0, route);
      if (width === 1440) {
        const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
        assert.deepEqual(accessibility.violations.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) })), [], `${route}: accessibility`);
      }
      if ([1440, 390].includes(width) && ["/", "/projects/asnr-brain-atlas/", "/projects/motiverse/", "/writing/human-capability/", "/publications/"].includes(route)) {
        await page.screenshot({ path: `test-results/${width}-${route.replaceAll("/", "_")}.png`, fullPage: true });
        if (route === "/") await page.screenshot({ path: `test-results/${width}-home-viewport.png` });
      }
      report.push({ width, route, ...metrics });
    }
    await page.goto(base + "/");
    await page.keyboard.press("Tab");
    assert.ok(await page.locator(".skip-link").evaluate(e => document.activeElement === e));
    await page.keyboard.press("Enter");
    assert.ok(await page.locator("#main").evaluate(e => document.activeElement === e));
    await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: "Writing", exact: true }).click();
    await page.waitForURL("**/writing/");
    await page.goto(base + "/publications/");
    await page.locator("summary").first().click();
    assert.equal(await page.locator("details").first().getAttribute("open"), "");
    assert.ok((await page.locator("pre").first().innerText()).includes("10.1145/3785022.3785058"));
    assert.deepEqual(errors, []);
    await context.close();
    console.log(`Passed ${width}px: all routes, images, overflow, keyboard navigation, and citations.`);
  }
  await writeFile("test-results/browser-report.json", JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
