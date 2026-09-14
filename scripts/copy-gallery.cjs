const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const SRC   = path.join(root, "assets-source", "gallery");
const OPT   = path.join(root, "public", "images-opt");
const THUMB = path.join(root, "public", "images-thumb");

const SKIP = new Set(["Avalanche Logo.png", "icon.png", "logo.png"]);

const files = fs.readdirSync(SRC).filter(f => !SKIP.has(f));

let count = 0;
for (const f of files) {
  const src = path.join(SRC, f);
  fs.copyFileSync(src, path.join(OPT,   f));
  fs.copyFileSync(src, path.join(THUMB, f));
  console.log("Copied:", f);
  count++;
}
console.log("\nDone! Copied", count, "files.");
