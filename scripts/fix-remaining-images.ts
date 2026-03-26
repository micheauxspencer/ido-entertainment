import { fal } from "@fal-ai/client";
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

fal.config({
  credentials: "ee583ee3-1631-4d0a-b308-fdeb2cc11204:bebb3a664fcfca1a35c5186a270bdd98",
});

const images = [
  {
    slug: "10-photo-booth-features-toronto-events",
    prompt:
      "Modern 360 photo booth at a luxury corporate gala, guests posing on a circular platform with a bright ring light overhead, gold and black decor, confetti floating in the air, professional event photography",
  },
  {
    slug: "how-to-plan-wedding-cocktail-hour-toronto",
    prompt:
      "Elegant wedding cocktail hour on a rooftop terrace at sunset, professional bartender crafting cocktails at a sleek mobile bar, guests mingling with champagne, string lights overhead, warm golden hour lighting, Toronto skyline in the background",
  },
];

async function main() {
  const outputDir = path.join(process.cwd(), "public", "blog");
  mkdirSync(outputDir, { recursive: true });

  for (const img of images) {
    console.log(`\nGenerating: ${img.slug}`);
    const result = await fal.subscribe("fal-ai/flux/dev", {
      input: {
        prompt: `${img.prompt}. No text, no watermarks, no logos.`,
        image_size: "landscape_16_9",
        num_images: 1,
      },
    });

    const imageUrl = result.data?.images?.[0]?.url;
    if (!imageUrl) { console.error("No URL"); continue; }

    const imgRes = await fetch(imageUrl);
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    const webp = await sharp(buffer).resize(1200, 630, { fit: "cover" }).webp({ quality: 85 }).toBuffer();

    writeFileSync(path.join(outputDir, `${img.slug}.webp`), webp);
    console.log(`Saved: ${img.slug}.webp (${(webp.length / 1024).toFixed(0)} KB)`);
  }
  console.log("\nDone!");
}

main().catch(console.error);
