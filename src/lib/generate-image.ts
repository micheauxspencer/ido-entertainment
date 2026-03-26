import { fal } from "@fal-ai/client";
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

fal.config({
  credentials:
    process.env.FAL_KEY ||
    "ee583ee3-1631-4d0a-b308-fdeb2cc11204:bebb3a664fcfca1a35c5186a270bdd98",
});

export async function generateBlogImage(
  prompt: string,
  slug: string
): Promise<string> {
  const outputDir = path.join(process.cwd(), "public", "blog");
  mkdirSync(outputDir, { recursive: true });

  console.log(`Generating image for: ${slug}`);

  const result = await fal.subscribe("fal-ai/recraft-v3", {
    input: {
      prompt,
      image_size: "landscape_16_9",
      style: "realistic_image",
    },
  });

  const imageUrl = result.data?.images?.[0]?.url;
  if (!imageUrl) {
    throw new Error("No image URL in fal.ai response");
  }

  // Download and convert to WebP
  const imgRes = await fetch(imageUrl);
  const buffer = Buffer.from(await imgRes.arrayBuffer());

  const webp = await sharp(buffer)
    .resize(1200, 630, { fit: "cover" })
    .webp({ quality: 85 })
    .toBuffer();

  const outputPath = path.join(outputDir, `${slug}.webp`);
  writeFileSync(outputPath, webp);
  console.log(
    `Saved: ${slug}.webp (${(webp.length / 1024).toFixed(0)} KB)`
  );

  return `/blog/${slug}.webp`;
}
