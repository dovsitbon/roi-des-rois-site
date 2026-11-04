// Prépare les photos classées dans assets/<catégorie>/ pour le web :
// public/media/<catégorie>/<nom>.jpg (côté long 1600 px max, sans agrandissement).
// next/image sert ensuite des variantes AVIF/WebP à la bonne taille.
//   npm run media
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const CATS = ["hero", "salons-marocains", "henne", "allee-ceremonie", "details", "galerie", "location"];

const sizes = {};
let n = 0;
for (const cat of CATS) {
  const src = path.join(ROOT, "assets", cat);
  const out = path.join(ROOT, "public/media", cat);
  await mkdir(out, { recursive: true });
  const files = (await readdir(src).catch(() => [])).filter((f) => /\.jpe?g$/i.test(f));
  for (const f of files) {
    const name = f.replace(/\.jpe?g$/i, ".jpg");
    const info = await sharp(path.join(src, f))
      .rotate()
      .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 86, mozjpeg: true })
      .toFile(path.join(out, name));
    sizes[`/media/${cat}/${name}`] = [info.width, info.height];
    n += 1;
  }
}
await writeFile(path.join(ROOT, "data/images.json"), JSON.stringify(sizes, null, 1));

// Image Open Graph 1200×630 : le salon bordeaux sous le lustre, posé sur fond noir avec le nom
const hero = await sharp(path.join(ROOT, "assets/hero/salon-bordeaux-lustre.jpg")).resize(472, 630, { fit: "cover" }).toBuffer();
const crown = await sharp(path.join(ROOT, "public/logo.svg"), { density: 220 }).resize(560, 560, { fit: "inside" }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#0E0C0A" } })
  .composite([
    { input: hero, left: 728, top: 0 },
    { input: crown, left: 84, top: 35 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(path.join(ROOT, "public/og.jpg"));

// Icônes (favicon vectoriel = couronne ; Apple 180×180 sur fond noir)
const icon = await sharp(path.join(ROOT, "app/icon.svg"), { density: 400 }).resize(150, 150, { fit: "inside" }).png().toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 3, background: "#0E0C0A" } })
  .composite([{ input: icon, gravity: "center" }])
  .png()
  .toFile(path.join(ROOT, "app/apple-icon.png"));

console.log(`${n} images prêtes`);
