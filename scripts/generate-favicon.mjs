import sharp from "sharp";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const svg = readFileSync(join(root, "src/app/icon.svg"));

await sharp(svg).resize(32, 32).png().toFile(join(root, "src/app/icon.png"));
await sharp(svg).resize(180, 180).png().toFile(join(root, "src/app/apple-icon.png"));
await sharp(svg).resize(48, 48).png().toFile(join(root, "public/favicon.png"));

console.log("Favicon assets generated.");
