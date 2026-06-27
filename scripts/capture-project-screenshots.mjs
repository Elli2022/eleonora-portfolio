#!/usr/bin/env node
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, "../public/previews");

const captures = [
  {
    slug: "nordstrand-commerce",
    url: "https://nordstrand-commerce.netlify.app/",
    ready: async (page) => {
      await page.getByRole("link", { name: /Linnekudde Nord/i }).first().waitFor({
        state: "visible",
        timeout: 90_000,
      });
    },
  },
  {
    slug: "trygg-vardag-skane",
    url: "https://trygg-vardag-skane.netlify.app/",
    ready: async (page) => {
      await page.getByRole("heading", { level: 1 }).first().waitFor({
        state: "visible",
        timeout: 90_000,
      });
    },
  },
  {
    slug: "nordflux-ebook",
    url: "https://nordflux-ebook-2026.netlify.app/",
    ready: async (page) => {
      await page.getByRole("heading", { level: 1 }).first().waitFor({
        state: "visible",
        timeout: 90_000,
      });
    },
  },
  {
    slug: "w-advokatbyra",
    url: "https://w-advokatbyra-malmo.netlify.app/",
    ready: async (page) => {
      await page.getByRole("heading", { level: 1 }).first().waitFor({
        state: "visible",
        timeout: 90_000,
      });
    },
  },
  {
    slug: "tidspuls",
    url: "https://tidspuls-app.netlify.app/",
    ready: async (page) => {
      await page.locator("body").waitFor({ state: "visible", timeout: 30_000 });
    },
  },
  {
    slug: "italidea",
    url: "https://italidea.netlify.app/",
    ready: async (page) => {
      await page.getByRole("heading", { level: 1 }).first().waitFor({
        state: "visible",
        timeout: 90_000,
      });
    },
  },
  {
    slug: "ferry-arrivals-sweden",
    url: "https://ferry-arrivals-sweden-elli.netlify.app/",
    ready: async (page) => {
      await page.locator("body").waitFor({ state: "visible", timeout: 30_000 });
    },
  },
];

async function captureOne(page, capture) {
  await page.goto(capture.url, {
    waitUntil: "domcontentloaded",
    timeout: 120_000,
  });

  await capture.ready(page);
  await page.waitForTimeout(1200);

  const outputPath = path.join(outDir, `${capture.slug}.jpg`);
  await page.screenshot({
    path: outputPath,
    type: "jpeg",
    quality: 88,
    fullPage: false,
  });

  console.log("Saved:", outputPath);
}

async function run() {
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    locale: "sv-SE",
    deviceScaleFactor: 2,
  });

  const page = await context.newPage();
  page.setDefaultTimeout(60_000);

  try {
    for (const capture of captures) {
      await captureOne(page, capture);
    }
  } finally {
    await context.close();
    await browser.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
