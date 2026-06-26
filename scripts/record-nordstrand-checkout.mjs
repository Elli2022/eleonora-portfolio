#!/usr/bin/env node
import { chromium } from "playwright";
import { mkdir, readdir, rename, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, "../public/demos");
const rawDir = path.join(outDir, ".raw");
const outputWebm = path.join(outDir, "nordstrand-checkout.webm");
const outputMp4 = path.join(outDir, "nordstrand-checkout.mp4");
const poster = path.join(outDir, "nordstrand-checkout-poster.jpg");

async function run() {
  await mkdir(rawDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    recordVideo: {
      dir: rawDir,
      size: { width: 1280, height: 720 }
    },
    viewport: { width: 1280, height: 720 },
    locale: "sv-SE"
  });

  const page = await context.newPage();
  page.setDefaultTimeout(60_000);

  try {
    await page.goto("https://nordstrand-commerce.netlify.app/", {
      waitUntil: "domcontentloaded",
      timeout: 120_000
    });

    await page.getByRole("link", { name: "Linnekudde Nord" }).first().waitFor({
      timeout: 90_000
    });

    await page.getByRole("link", { name: "Linnekudde Nord" }).first().click();
    await page.waitForTimeout(800);
    await page.getByRole("button", { name: "Lägg i varukorg" }).click();
    await page.waitForTimeout(600);
    await page.getByRole("link", { name: "Varukorg" }).click();
    await page.waitForTimeout(800);
    await page.getByRole("button", { name: "Gå till betalning" }).click();

    await page.waitForURL(/checkout\.stripe\.com/, { timeout: 120_000 });
    await page.waitForTimeout(1500);

    await page.locator("#email").fill("portfolio@nordstrand.dev");
    await page.locator("#payment-method-accordion-item-title-card").check({ force: true });

    const cardNumber = page.getByPlaceholder("1234 1234 1234 1234");
    await cardNumber.waitFor({ state: "visible", timeout: 30_000 });
    await cardNumber.click();
    await cardNumber.fill("4242 4242 4242 4242");
    await page.keyboard.press("Tab");
    await page.keyboard.type("1230");
    await page.keyboard.press("Tab");
    await page.keyboard.type("123");
    await page.keyboard.press("Tab");
    await page.keyboard.type("Eleonora Nocentini");

    await page.getByTestId("hosted-payment-submit-button").click();
    await page.waitForURL(/checkout\/success/, { timeout: 120_000 });
    await page.getByText(/tack|bekräft|order/i).first().waitFor({ timeout: 30_000 });
    await page.waitForTimeout(2500);
  } finally {
    await context.close();
    await browser.close();
  }

  const rawFiles = await readdir(rawDir);
  const rawVideo = rawFiles.find((file) => file.endsWith(".webm"));

  if (!rawVideo) {
    throw new Error("No Playwright recording found");
  }

  const rawPath = path.join(rawDir, rawVideo);
  await rename(rawPath, outputWebm);

  await execFileAsync("ffmpeg", [
    "-y",
    "-i",
    outputWebm,
    "-vf",
    "scale=1280:720",
    "-t",
    "35",
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    outputMp4
  ]);

  await execFileAsync("ffmpeg", [
    "-y",
    "-i",
    outputMp4,
    "-ss",
    "00:00:02",
    "-vframes",
    "1",
    poster
  ]);

  for (const file of await readdir(rawDir)) {
    await unlink(path.join(rawDir, file)).catch(() => undefined);
  }

  console.log("Saved:", outputMp4);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
