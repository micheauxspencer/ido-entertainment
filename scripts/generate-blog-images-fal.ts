import { fal } from "@fal-ai/client";
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

fal.config({
  credentials: "ee583ee3-1631-4d0a-b308-fdeb2cc11204:bebb3a664fcfca1a35c5186a270bdd98",
});

const blogImages = [
  {
    slug: "hiring-the-right-dj-for-your-event",
    prompt:
      "Professional DJ at an elegant wedding reception, mixing on turntables with warm gold uplighting reflecting off crystal chandeliers, dance floor full of guests in formal attire, cinematic shallow depth of field, luxury event photography",
  },
  {
    slug: "wedding-uplighting-myths-toronto",
    prompt:
      "Stunning wedding venue transformed with dramatic amber and gold LED uplighting on white stone walls and tall columns, elegant table settings with candles in foreground, romantic warm atmosphere, grand architectural event space",
  },
  {
    slug: "10-photo-booth-features-toronto-events",
    prompt:
      "Modern 360 photo booth at a luxury corporate gala, guests posing on a circular platform with a bright ring light overhead, gold and black decor, confetti floating in the air, professional event photography",
  },
];

async function main() {
  const outputDir = path.join(process.cwd(), "public", "blog");
  mkdirSync(outputDir, { recursive: true });

  for (const img of blogImages) {
    console.log(`\n--- Generating: ${img.slug} ---`);

    const result = await fal.subscribe("fal-ai/flux/dev", {
      input: {
        prompt: `${img.prompt}. No text, no watermarks, no logos, no overlays.`,
        image_size: "landscape_16_9",
        num_images: 1,
      },
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_QUEUE") {
          console.log(`Queue: ${update.queue_position}`);
        } else if (update.status === "IN_PROGRESS") {
          console.log("Generating...");
        }
      },
    });

    const imageUrl = result.data?.images?.[0]?.url;
    if (!imageUrl) {
      console.error("No image URL");
      continue;
    }

    console.log(`Generated in ${result.data?.timings?.inference?.toFixed(1)}s`);

    const imgRes = await fetch(imageUrl);
    const buffer = Buffer.from(await imgRes.arrayBuffer());

    const webp = await sharp(buffer)
      .resize(1200, 630, { fit: "cover" })
      .webp({ quality: 85 })
      .toBuffer();

    const outputPath = path.join(outputDir, `${img.slug}.webp`);
    writeFileSync(outputPath, webp);
    console.log(`Saved: ${img.slug}.webp (${(webp.length / 1024).toFixed(0)} KB)`);
  }

  // Clean up test file
  try {
    const { unlinkSync } = require("fs");
    unlinkSync(path.join(outputDir, "fal-test.webp"));
    console.log("\nCleaned up fal-test.webp");
  } catch {}

  console.log("\nDone!");
}

main().catch(console.error);
