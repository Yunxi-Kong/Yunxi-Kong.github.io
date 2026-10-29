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
  for (const width of [320, 390, 768, 1440]) {
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
      if ([1440, 390].includes(width) && (["/", "/about/", "/research/", "/projects/asnr-brain-atlas/", "/projects/motiverse/", "/publications/"].includes(route) || route.startsWith("/writing/"))) {
        await page.screenshot({ path: `test-results/${width}-${route.replaceAll("/", "_")}.png`, fullPage: true });
        if (route === "/") await page.screenshot({ path: `test-results/${width}-home-viewport.png` });
        if (route.startsWith("/writing/") && route !== "/writing/") await page.screenshot({ path: `test-results/${width}-${route.replaceAll("/", "_")}-viewport.png` });
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
    await page.getByRole("link", {name:"Read essay: The Next Bottleneck", exact:true}).click();
    await page.waitForURL("**/writing/the-next-bottleneck/");
    assert.equal(await page.locator(".editorial-figure").count(), 2);
    assert.equal(await page.locator(".argument-map dt").count(), 3);
    for (const figure of await page.locator(".editorial-figure").all()) {
      assert.match(await figure.locator("figcaption").innerText(), /AI-generated conceptual illustration/);
      await figure.scrollIntoViewIfNeeded();
      await figure.locator("img").evaluate(i => i.decode());
      const dimensions = await figure.locator("img").evaluate(i => ({width:i.width, height:i.height, naturalWidth:i.naturalWidth, naturalHeight:i.naturalHeight}));
      assert.ok(Math.abs(dimensions.width / dimensions.height - dimensions.naturalWidth / dimensions.naturalHeight) < .02, "Editorial illustration must not be cropped or distorted");
    }
    await page.goto(base + "/publications/");
    await page.locator("summary").first().click();
    assert.equal(await page.locator("details").first().getAttribute("open"), "");
    assert.ok((await page.locator("pre").first().innerText()).includes("10.1145/3785022.3785058"));
    await page.goto(base + "/writing/simulation-and-evidence/");
    if (width <= 950) {
      const contents = page.locator(".note-mobile-toc");
      assert.equal(await contents.getAttribute("open"), null);
      await contents.locator("summary").focus();
      await page.keyboard.press("Enter");
      assert.equal(await contents.getAttribute("open"), "");
      await contents.getByRole("link").first().click();
      assert.ok(page.url().endsWith("#words-events-and-possible-futures"));
      await contents.locator("summary").click();
      await page.goto(base + "/writing/simulation-and-evidence/");
    }
    const example = page.locator(".evidence-example");
    const originalHeight = (await example.boundingBox()).height;
    if ([1440, 390].includes(width)) {
      await page.screenshot({ path: `test-results/${width}-note-viewport.png` });
      await example.screenshot({ path: `test-results/${width}-evidence-example.png` });
    }
    for (const [id, kind] of [["evidence-event", "event"], ["evidence-future", "future"], ["evidence-dialogue", "dialogue"]]) {
      await page.locator(`label[for="${id}"]`).click();
      assert.ok(await page.locator(`#${id}`).isChecked());
      for (const candidate of ["dialogue", "event", "future"]) {
        assert.equal(await page.locator(`[data-evidence="${candidate}"]`).isVisible(), candidate === kind);
      }
      const selectedHeight = (await example.boundingBox()).height;
      assert.ok(Math.abs(selectedHeight - originalHeight) < 1, `${width}px ${kind}: evidence height changed from ${originalHeight} to ${selectedHeight}`);
      if (width === 1440) {
        const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
        assert.deepEqual(accessibility.violations.map(v => v.id), [], `${kind}: accessibility`);
      }
    }
    await page.getByRole("radio", { name: "Dialogue", exact: true }).focus();
    await page.keyboard.press("ArrowRight");
    assert.ok(await page.getByRole("radio", { name: "World event", exact: true }).isChecked());
    assert.equal(await page.locator('label[for="evidence-event"]').evaluate(e => getComputedStyle(e).outlineStyle), "solid");
    await page.keyboard.press("ArrowRight");
    assert.ok(await page.getByRole("radio", { name: "Projection", exact: true }).isChecked());
    await page.locator(".figure-links a").first().click();
    assert.ok(page.url().endsWith("/assets/project-thumbnails/motiverse.webp"));
    assert.deepEqual(errors, []);
    await context.close();
    console.log(`Passed ${width}px: all routes, images, overflow, keyboard navigation, citations, and evidence controls.`);
  }
  const noScript = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce" });
  const article = await noScript.newPage();
  await article.goto(base + "/writing/simulation-and-evidence/");
  await article.locator('label[for="evidence-future"]').click();
  assert.ok(await article.locator('[data-evidence="future"]').isVisible());
  assert.equal(await article.locator('[data-evidence="dialogue"]').isVisible(), false);
  await article.emulateMedia({ media: "print" });
  for (const kind of ["dialogue", "event", "future"]) {
    assert.ok(await article.locator(`[data-evidence="${kind}"]`).isVisible(), `${kind}: print must include every explanation`);
  }
  await noScript.close();
  console.log("Passed no-JavaScript interaction and complete print explanations.");
  const reading = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce" });
  const readingPage = await reading.newPage();
  for (const width of [320, 390, 768, 1440]) {
    await readingPage.setViewportSize({ width, height: 960 });
    for (const slug of ["two-hard-problems", "answer-outruns-understanding"]) {
      await readingPage.emulateMedia({ media: "screen" });
      await readingPage.goto(`${base}/writing/${slug}/`);
      const reasoning = readingPage.locator(".reading-case");
      assert.equal(await reasoning.getAttribute("open"), null);
      await reasoning.locator("summary").focus();
      await readingPage.keyboard.press("Enter");
      assert.equal(await reasoning.getAttribute("open"), "");
      assert.ok(await reasoning.locator("p").first().isVisible(), `${slug}: keyboard expansion`);
      if ([390, 1440].includes(width)) await reasoning.screenshot({ path: `test-results/${width}-${slug}-example.png` });
      await readingPage.keyboard.press("Enter");
      assert.equal(await reasoning.getAttribute("open"), null);
      await readingPage.emulateMedia({ media: "print" });
      assert.ok(await reasoning.locator("p").first().isVisible(), `${slug}: print must expose the closed explanation`);
      assert.equal(await reasoning.evaluate(e => getComputedStyle(e, "::details-content").contentVisibility), "visible");
    }
  }
  await reading.close();
  console.log("Passed both new reasoning examples at all widths, without JavaScript and in print.");
  await writeFile("test-results/browser-report.json", JSON.stringify(report, null, 2));
} finally {
  await browser.close();
}
