import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

// Already generated images from Higgsfield
const images = [
  {
    slug: "hiring-the-right-dj-for-your-event",
    url: "https://d3u0tzju9qaucj.cloudfront.net/01182454-922e-47fd-b521-8f4dfc66aeb3/f5fbc742-8535-4f29-80b4-b6d85084182a.png",
  },
  {
    slug: "wedding-uplighting-myths-toronto",
    url: "https://d3u0tzju9qaucj.cloudfront.net/01182454-922e-47fd-b521-8f4dfc66aeb3/63a3e741-7e5e-45c0-ae59-89b038c4750d.png",
  },
  {
    slug: "10-photo-booth-features-toronto-events",
    url: "https://d3u0tzju9qaucj.cloudfront.net/01182454-922e-47fd-b521-8f4dfc66aeb3/a5f8ca4e-33e9-4436-83c6-93231e1940fe.png",
  },
];

async function main() {
  const outputDir = path.join(process.cwd(), "public", "blog");
  mkdirSync(outputDir, { recursive: true });

  for (const img of images) {
    console.log(`Downloading: ${img.slug}`);
    const res = await fetch(img.url);
    const buffer = Buffer.from(await res.arrayBuffer());

    const webp = await sharp(buffer)
      .resize(1200, 630, { fit: "cover" })
      .webp({ quality: 85 })
      .toBuffer();

    const outputPath = path.join(outputDir, `${img.slug}.webp`);
    writeFileSync(outputPath, webp);
    console.log(`Saved: ${img.slug}.webp (${(webp.length / 1024).toFixed(0)} KB)`);
  }
  console.log("Done!");
}

main();
