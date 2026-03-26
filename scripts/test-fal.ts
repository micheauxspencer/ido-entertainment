import { fal } from "@fal-ai/client";
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

fal.config({
  credentials: "ee583ee3-1631-4d0a-b308-fdeb2cc11204:bebb3a664fcfca1a35c5186a270bdd98",
});

async function main() {
  console.log("Generating test image via fal.ai FLUX...");

  const result = await fal.subscribe("fal-ai/flux/dev", {
    input: {
      prompt:
        "Professional DJ at an elegant wedding reception, mixing on turntables with warm gold uplighting reflecting off crystal chandeliers, dance floor full of guests in formal attire, cinematic shallow depth of field, luxury event photography. No text, no watermarks, no logos.",
      image_size: "landscape_16_9",
      num_images: 1,
    },
    logs: true,
    onQueueUpdate: (update) => {
      if (update.status === "IN_QUEUE") {
        console.log(`Queue position: ${update.queue_position}`);
      } else if (update.status === "IN_PROGRESS") {
        console.log("Generating...");
      }
    },
  });

  console.log("Result:", JSON.stringify(result.data, null, 2));

  const imageUrl = result.data?.images?.[0]?.url;
  if (!imageUrl) {
    console.error("No image URL found");
    return;
  }

  console.log(`Image URL: ${imageUrl}`);

  // Download and convert to WebP
  const imgRes = await fetch(imageUrl);
  const buffer = Buffer.from(await imgRes.arrayBuffer());

  const outputDir = path.join(process.cwd(), "public", "blog");
  mkdirSync(outputDir, { recursive: true });

  const webp = await sharp(buffer)
    .resize(1200, 630, { fit: "cover" })
    .webp({ quality: 85 })
    .toBuffer();

  const outputPath = path.join(outputDir, "fal-test.webp");
  writeFileSync(outputPath, webp);
  console.log(`Saved: fal-test.webp (${(webp.length / 1024).toFixed(0)} KB)`);
}

main().catch(console.error);
