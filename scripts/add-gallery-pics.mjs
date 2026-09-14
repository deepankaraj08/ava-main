/**
 * add-gallery-pics.mjs
 * Copies new images from assets-source/gallery/ into
 *   public/images-opt/   (used by Gallery page)
 *   public/images-thumb/ (used by Gallery page thumbnail swap)
 * and prints the JS array entries to paste into src/data.js.
 *
 * Run from project root:
 *   node scripts/add-gallery-pics.mjs
 */

import { copyFile, readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const SRC_DIR   = path.join(root, "assets-source", "gallery");
const OPT_DIR   = path.join(root, "public", "images-opt");
const THUMB_DIR = path.join(root, "public", "images-thumb");

// Files that are logos/icons, not gallery photos — skip them
const SKIP = new Set(["Avalanche Logo.png", "icon.png", "logo.png"]);

async function main() {
  const files = await readdir(SRC_DIR);
  const photos = files.filter(f => !SKIP.has(f));

  await mkdir(OPT_DIR,   { recursive: true });
  await mkdir(THUMB_DIR, { recursive: true });

  const entries = [];

  for (const file of photos) {
    const src  = path.join(SRC_DIR, file);
    const dest = path.join(OPT_DIR, file);       // copy to images-opt
    const destThumb = path.join(THUMB_DIR, file); // copy to images-thumb

    await copyFile(src, dest);
    await copyFile(src, destThumb);

    const urlPath = `/images-opt/${file}`;
    entries.push(`  "${urlPath}"`);
    console.log(`✔  Copied: ${file}`);
  }

  console.log("\n─────────────────────────────────────────");
  console.log("Add these to the galleryPhotos array in src/data.js:\n");
  console.log("export const galleryPhotos = [");
  console.log(entries.join(",\n"));
  console.log("];");
  console.log("─────────────────────────────────────────");
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
