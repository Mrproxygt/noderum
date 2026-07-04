// Penguin Capital — comprehensive site scraper
// Captures: screenshots, CSS, fonts, images, SVGs, layout measurements

const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const OUT = "C:/Users/O3/noderum/penguin-scrape";
const BASE = "https://www.penguin-capital.co.jp";

const PAGES = [
  "/en",
  "/en/about/vision-way",
  "/en/about/team",
  "/en/about/company",
  "/en/business/asset_management",
  "/en/business/brokerage",
  "/en/business/advisory",
  "/en/knowledge",
  "/en/news",
  "/en/contact",
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 375, height: 812 },
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest)) return resolve();
    const proto = url.startsWith("https") ? https : http;
    proto.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(new URL(res.headers.location, url).href, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return resolve(); // skip failures
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
      file.on("error", (e) => { fs.unlink(dest, () => {}); reject(e); });
    }).on("error", (e) => { fs.unlink(dest, () => {}); reject(e); });
  });
}

async function scrape() {
  ensureDir(OUT);
  ensureDir(path.join(OUT, "screenshots"));
  ensureDir(path.join(OUT, "css"));
  ensureDir(path.join(OUT, "assets"));
  ensureDir(path.join(OUT, "assets", "fonts"));
  ensureDir(path.join(OUT, "assets", "images"));
  ensureDir(path.join(OUT, "assets", "svg"));
  ensureDir(path.join(OUT, "layout"));

  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const collectedAssets = new Set();
  const allStyles = [];

  for (const pageUrl of PAGES) {
    const slug = pageUrl.replace(/\//g, "_").replace(/^_/, "");
    console.log(`\n===== ${pageUrl} =====`);

    // Screenshots at each viewport
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });

      try {
        await page.goto(BASE + pageUrl, { waitUntil: "networkidle2", timeout: 30000 });
        // Wait for loader to finish
        await page.waitForFunction(() => {
          const loader = document.querySelector("[class*='loader']");
          return !loader || loader.style.opacity === "0" || loader.style.display === "none" || getComputedStyle(loader).opacity === "0";
        }, { timeout: 15000 }).catch(() => {});
        await new Promise(r => setTimeout(r, 1000));

        // Full-page screenshot
        await page.screenshot({
          path: path.join(OUT, "screenshots", `${slug}_${vp.name}.png`),
          fullPage: true,
        });
        console.log(`  Screenshot: ${vp.name}`);

        // On desktop, extract styles and assets
        if (vp.name === "desktop") {
          // Extract all CSS custom properties
          const customProps = await page.evaluate(() => {
            const root = document.documentElement;
            const styles = getComputedStyle(root);
            const props = {};
            for (let i = 0; i < styles.length; i++) {
              const prop = styles[i];
              if (prop.startsWith("--")) {
                props[prop] = styles.getPropertyValue(prop).trim();
              }
            }
            return props;
          });
          fs.writeFileSync(
            path.join(OUT, "css", `${slug}_custom-props.json`),
            JSON.stringify(customProps, null, 2)
          );

          // Extract all stylesheets content
          const cssText = await page.evaluate(() => {
            const sheets = [];
            for (const sheet of document.styleSheets) {
              try {
                let text = "";
                for (const rule of sheet.cssRules) {
                  text += rule.cssText + "\n";
                }
                if (text) sheets.push(text);
              } catch (e) {
                // Cross-origin stylesheet — capture via link href
                if (sheet.href) sheets.push(`/* EXTERNAL: ${sheet.href} */`);
              }
            }
            return sheets.join("\n\n");
          });
          fs.writeFileSync(path.join(OUT, "css", `${slug}_styles.css`), cssText);

          // Extract computed styles of key elements
          const computedStyles = await page.evaluate(() => {
            function getStyles(selector) {
              const el = document.querySelector(selector);
              if (!el) return null;
              const s = getComputedStyle(el);
              return {
                selector,
                tag: el.tagName,
                classes: el.className,
                display: s.display,
                position: s.position,
                width: s.width,
                height: s.height,
                margin: s.margin,
                padding: s.padding,
                fontSize: s.fontSize,
                fontWeight: s.fontWeight,
                fontFamily: s.fontFamily,
                lineHeight: s.lineHeight,
                letterSpacing: s.letterSpacing,
                color: s.color,
                backgroundColor: s.backgroundColor,
                border: s.border,
                borderRadius: s.borderRadius,
                boxShadow: s.boxShadow,
                opacity: s.opacity,
                transform: s.transform,
                transition: s.transition,
                textTransform: s.textTransform,
                maxWidth: s.maxWidth,
                gap: s.gap,
                zIndex: s.zIndex,
                backdropFilter: s.backdropFilter,
                overflow: s.overflow,
                textAlign: s.textAlign,
              };
            }
            return {
              body: getStyles("body"),
              header: getStyles("header"),
              nav: getStyles("nav"),
              hero: getStyles("section:first-of-type"),
              h1: getStyles("h1"),
              h2: getStyles("h2"),
              h3: getStyles("h3"),
              p: getStyles("p"),
              a: getStyles("a"),
              button: getStyles("button"),
              cards: [...document.querySelectorAll("[class*='card'], [class*='Card'], [class*='box'], [class*='Box']")].slice(0, 5).map(el => {
                const s = getComputedStyle(el);
                return {
                  classes: el.className,
                  width: s.width, height: s.height,
                  padding: s.padding, margin: s.margin,
                  backgroundColor: s.backgroundColor,
                  border: s.border, borderRadius: s.borderRadius,
                  boxShadow: s.boxShadow,
                };
              }),
            };
          });
          fs.writeFileSync(
            path.join(OUT, "layout", `${slug}_computed.json`),
            JSON.stringify(computedStyles, null, 2)
          );

          // Collect all image URLs
          const imageUrls = await page.evaluate(() => {
            const urls = [];
            document.querySelectorAll("img").forEach(img => {
              if (img.src) urls.push(img.src);
              if (img.srcset) urls.push(...img.srcset.split(",").map(s => s.trim().split(" ")[0]));
            });
            // Also check SVG objects/inline SVGs
            document.querySelectorAll("svg").forEach(svg => {
              const clone = svg.cloneNode(true);
              urls.push("data:image/svg+xml," + encodeURIComponent(clone.outerHTML));
            });
            return urls;
          });
          imageUrls.forEach(u => collectedAssets.add(u));

          // Collect all font URLs
          const fontUrls = await page.evaluate(() => {
            const fonts = [];
            for (const sheet of document.styleSheets) {
              try {
                for (const rule of sheet.cssRules) {
                  if (rule instanceof CSSFontFaceRule) {
                    const src = rule.style.getPropertyValue("src");
                    if (src) fonts.push(src);
                  }
                }
              } catch (e) {}
            }
            return fonts;
          });
          fontUrls.forEach(u => collectedAssets.add(u));

          // Collect external stylesheet URLs
          const cssUrls = await page.evaluate(() => {
            const urls = [];
            for (const sheet of document.styleSheets) {
              if (sheet.href) urls.push(sheet.href);
            }
            return urls;
          });
          cssUrls.forEach(u => collectedAssets.add(u));

          // Extract full text content (for reference)
          const textContent = await page.evaluate(() => {
            function getText(el, depth = 0) {
              if (depth > 3) return "";
              let result = [];
              for (const child of el.children) {
                const tag = child.tagName.toLowerCase();
                const text = child.childNodes.length === 1 && child.childNodes[0].nodeType === 3
                  ? child.textContent.trim()
                  : "";
                const classes = child.className && typeof child.className === "string" ? child.className : "";
                if (tag === "img") {
                  result.push(`[IMG: ${child.getAttribute("src") || child.getAttribute("srcset")}]`);
                } else if (tag === "svg") {
                  result.push("[SVG inline]");
                } else if (text && !["script", "style", "noscript"].includes(tag)) {
                  result.push(`<${tag} class="${classes}">${text}</${tag}>`);
                }
                if (child.children.length > 0) result.push(getText(child, depth + 1));
              }
              return result.filter(Boolean).join("\n");
            }
            // Get nav structure
            const nav = document.querySelector("nav") || document.querySelector("header");
            const main = document.querySelector("main") || document.body;
            return {
              nav: nav ? getText(nav, 0) : "none",
              main: getText(main, 0).slice(0, 5000),
            };
          });
          fs.writeFileSync(
            path.join(OUT, "layout", `${slug}_text-structure.txt`),
            JSON.stringify(textContent, null, 2)
          );
        }
      } catch (err) {
        console.error(`  Error on ${pageUrl} @ ${vp.name}:`, err.message);
      } finally {
        await page.close();
      }
    }
  }

  // Download all unique assets
  console.log(`\n===== Downloading ${collectedAssets.size} assets =====`);
  let downloaded = 0;
  for (const url of collectedAssets) {
    if (!url || !url.startsWith("http")) continue;
    try {
      const urlObj = new URL(url);
      const filename = urlObj.pathname.split("/").pop() || "unknown";
      const ext = path.extname(filename) || ".bin";
      const assetDir = [".woff", ".woff2", ".ttf", ".otf", ".eot"].includes(ext)
        ? "fonts"
        : [".svg"].includes(ext) ? "svg" : "images";
      const dest = path.join(OUT, "assets", assetDir, filename);
      await downloadFile(url, dest);
      downloaded++;
      if (downloaded % 10 === 0) console.log(`  ${downloaded}/${collectedAssets.size}`);
    } catch (e) {
      // skip failed downloads
    }
  }
  console.log(`  Done: ${downloaded} assets downloaded`);

  await browser.close();

  // Write manifest
  fs.writeFileSync(
    path.join(OUT, "manifest.json"),
    JSON.stringify({
      baseUrl: BASE,
      pages: PAGES,
      viewports: VIEWPORTS.map(v => v.name),
      assetsDownloaded: downloaded,
      timestamp: new Date().toISOString(),
    }, null, 2)
  );

  console.log("\n===== SCRAPE COMPLETE =====");
  console.log(`Output: ${OUT}`);
}

scrape().catch(err => {
  console.error("Fatal error:", err);
  process.exit(1);
});
