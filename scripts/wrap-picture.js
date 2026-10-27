/**
 * Wrap <img src="....png"> in <picture> when a sibling .webp exists.
 * Skips tracking pixels / data URIs / already-wrapped imgs.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PAGES = [
  "Aceuil.html",
  "About.html",
  "Services.html",
  "Contact.html",
  "Navbare.html",
];

const IMG_RE =
  /<img\b([^>]*?)\bsrc=["']([^"']+\.png)["']([^>]*)>/gi;

function webpExists(src) {
  const file = path.join(ROOT, src.replace(/\//g, path.sep));
  const webp = file.replace(/\.png$/i, ".webp");
  return fs.existsSync(webp);
}

function alreadyInPicture(html, matchIndex) {
  const before = html.slice(Math.max(0, matchIndex - 120), matchIndex);
  return /<picture[^>]*>\s*$/i.test(before) || /<source[^>]+type=["']image\/webp["'][^>]*>\s*$/i.test(before);
}

function isTrackingPixel(attrs) {
  return /height=["']1["']/i.test(attrs) && /width=["']1["']/i.test(attrs);
}

function wrapFile(rel) {
  const full = path.join(ROOT, rel);
  if (!fs.existsSync(full)) return { rel, changed: 0 };
  let html = fs.readFileSync(full, "utf8");
  let changed = 0;

  html = html.replace(IMG_RE, (match, pre, src, post, offset) => {
    if (alreadyInPicture(html, offset)) return match;
    if (isTrackingPixel(pre + post)) return match;
    if (!webpExists(src)) return match;

    const webpSrc = src.replace(/\.png$/i, ".webp");
    changed += 1;
    return `<picture>\n                <source srcset="${webpSrc}" type="image/webp">\n                <img${pre}src="${src}"${post}>\n              </picture>`;
  });

  if (changed) fs.writeFileSync(full, html, "utf8");
  return { rel, changed };
}

for (const page of PAGES) {
  const { rel, changed } = wrapFile(page);
  console.log(`${rel}: wrapped ${changed} <img> tag(s)`);
}
