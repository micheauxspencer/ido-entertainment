import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

const API_KEY = process.env.HIGGSFIELD_API_KEY || "1333b4d3-09a2-4913-90d4-cf852b0566dd";
const API_SECRET = process.env.HIGGSFIELD_API_SECRET || "21ba1a470e52636cb92776aa9a240ea85cf887a40a16b46489aadd3b00078ac8";
const AUTH = `Key ${API_KEY}:${API_SECRET}`;

export async function generateBlogImage(
  prompt: string,
  slug: string
): Promise<string> {
  const outputDir = path.join(process.cwd(), "public", "blog");
  mkdirSync(outputDir, { recursive: true });

  console.log(`Generating image for: ${slug}`);

  // Submit job
  const submitRes = await fetch(
    "https://platform.higgsfield.ai/higgsfield-ai/soul/standard",
    {
      method: "POST",
      headers: {
        Authorization: AUTH,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: `Professional editorial photograph, high-end event photography style: ${prompt}. No text, no watermarks, no logos.`,
        aspect_ratio: "16:9",
      }),
    }
  );

  const submitData = await submitRes.json();

  if (!submitRes.ok) {
    throw new Error(`Submit failed: ${submitRes.status} ${JSON.stringify(submitData)}`);
  }

  const statusUrl = submitData.status_url;

  // Poll for completion (max 2 minutes)
  for (let i = 0; i < 24; i++) {
    await new Promise((r) => setTimeout(r, 5000));

    const statusRes = await fetch(statusUrl, {
      headers: { Authorization: AUTH },
    });
    const statusData = await statusRes.json();

    if (statusData.status === "completed") {
      const imageUrl = statusData.images?.[0]?.url;
      if (!imageUrl) throw new Error("No image URL in response");

      // Download and convert to WebP
      const imgRes = await fetch(imageUrl);
      const buffer = Buffer.from(await imgRes.arrayBuffer());

      const webp = await sharp(buffer)
        .resize(1200, 630, { fit: "cover" })
        .webp({ quality: 85 })
        .toBuffer();

      const outputPath = path.join(outputDir, `${slug}.webp`);
      writeFileSync(outputPath, webp);
      console.log(`Saved: ${slug}.webp (${(webp.length / 1024).toFixed(0)} KB)`);

      return `/blog/${slug}.webp`;
    }

    if (statusData.status === "failed" || statusData.status === "nsfw") {
      throw new Error(`Generation ${statusData.status}: ${statusData.error || ""}`);
    }
  }

  throw new Error("Generation timed out after 2 minutes");
}
