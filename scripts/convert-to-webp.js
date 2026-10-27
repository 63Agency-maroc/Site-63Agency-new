/**
 * Convert heavy PNGs (no .webp sibling yet) to WebP @ quality 80.
 * Resizes width > 1600px down to 1600px (aspect ratio preserved) before encode.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.join(__dirname, "..");
const IMAGES = path.join(ROOT, "src", "images");
const MAX_WIDTH = 1600;
const QUALITY = 80;

const EXPLICIT = [
  "avis/Samir.png",
  "avis/Tarik.png",
  "avis/kenza.png",
  "founder/image.png",
  "image.png",
].map((p) => path.join(IMAGES, p));

function collectTargets() {
  const set = new Set(EXPLICIT.map((p) => path.normalize(p)));

  // All partner-logos PNGs
  const partnersDir = path.join(IMAGES, "partner-logos");
  for (const name of fs.readdirSync(partnersDir)) {
    if (name.toLowerCase().endsWith(".png")) {
      set.add(path.normalize(path.join(partnersDir, name)));
    }
  }

  // Any PNG under src/images over 100 KB without an existing .webp sibling
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      if (!entry.name.toLowerCase().endsWith(".png")) continue;
      const stat = fs.statSync(full);
      if (stat.size <= 100 * 1024) continue;
      const webp = full.replace(/\.png$/i, ".webp");
      if (fs.existsSync(webp)) continue;
      set.add(path.normalize(full));
    }
  }
  walk(IMAGES);

  return [...set].filter((p) => fs.existsSync(p)).sort();
}

function kb(bytes) {
  return (bytes / 1024).toFixed(1);
}

async function convertOne(pngPath) {
  const webpPath = pngPath.replace(/\.png$/i, ".webp");
  const before = fs.statSync(pngPath).size;
  const meta = await sharp(pngPath).metadata();
  const width = meta.width || 0;

  let pipeline = sharp(pngPath);
  let resized = false;
  if (width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    resized = true;
  }

  await pipeline.webp({ quality: QUALITY }).toFile(webpPath);
  const after = fs.statSync(webpPath).size;
  const rel = path.relative(ROOT, pngPath).replace(/\\/g, "/");
  const relWebp = path.relative(ROOT, webpPath).replace(/\\/g, "/");

  console.log(
    `${rel}  ${kb(before)} KB PNG` +
      (resized ? ` (resized ${width}→${MAX_WIDTH}w)` : ` (${width}w)`) +
      `  →  ${relWebp}  ${kb(after)} KB WebP  (−${kb(before - after)} KB / ${Math.round(
        (1 - after / before) * 100
      )}%)`
  );

  return { before, after, resized };
}

async function main() {
  const targets = collectTargets();
  console.log(`Converting ${targets.length} PNG(s) → WebP (q=${QUALITY}, maxW=${MAX_WIDTH})\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const png of targets) {
    const webp = png.replace(/\.png$/i, ".webp");
    if (fs.existsSync(webp)) {
      console.log(`SKIP (webp exists): ${path.relative(ROOT, png).replace(/\\/g, "/")}`);
      continue;
    }
    const { before, after } = await convertOne(png);
    totalBefore += before;
    totalAfter += after;
  }

  console.log(
    `\nTOTAL  ${kb(totalBefore)} KB PNG  →  ${kb(totalAfter)} KB WebP  (saved ${kb(
      totalBefore - totalAfter
    )} KB)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
