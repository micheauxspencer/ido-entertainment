import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

const API_KEY = "1333b4d3-09a2-4913-90d4-cf852b0566dd";
const API_SECRET =
  "21ba1a470e52636cb92776aa9a240ea85cf887a40a16b46489aadd3b00078ac8";
const AUTH = `Key ${API_KEY}:${API_SECRET}`;

const blogImages = [
  {
    slug: "hiring-the-right-dj-for-your-event",
    prompt:
      "Professional DJ at an elegant wedding reception, mixing on turntables with warm gold uplighting reflecting off crystal chandeliers, dance floor full of guests in formal attire, cinematic shallow depth of field, luxury event photography",
  },
  {
    slug: "wedding-uplighting-myths-toronto",
    prompt:
      "Stunning wedding venue transformed with dramatic amber and gold LED uplighting on white walls and columns, elegant table settings in foreground, romantic warm atmosphere, architectural event space",
  },
  {
    slug: "10-photo-booth-features-toronto-events",
    prompt:
      "Modern 360 photo booth at a luxury corporate gala, guests posing on a circular platform with ring light, gold and black decor, confetti in the air, professional event photography",
  },
];

async function generateImage(prompt: string, slug: string): Promise<boolean> {
  console.log(`\n--- Generating: ${slug} ---`);

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
        prompt: `${prompt}. No text, no watermarks, no logos.`,
        aspect_ratio: "16:9",
      }),
    }
  );

  const submitData = await submitRes.json();
  console.log("Submit response:", JSON.stringify(submitData, null, 2));

  if (!submitRes.ok) {
    console.error(`Submit failed: ${submitRes.status}`);
    return false;
  }

  const statusUrl =
    submitData.status_url ||
    `https://platform.higgsfield.ai/requests/${submitData.request_id}/status`;

  // Poll for completion (max 2 minutes)
  for (let i = 0; i < 24; i++) {
    await new Promise((r) => setTimeout(r, 5000));
    console.log(`Polling... (${(i + 1) * 5}s)`);

    const statusRes = await fetch(statusUrl, {
      headers: { Authorization: AUTH },
    });
    const statusData = await statusRes.json();

    if (statusData.status === "completed") {
      console.log("Completed:", JSON.stringify(statusData, null, 2));

      // Find image URL in response
      const imageUrl =
        statusData.images?.[0]?.url ||
        statusData.result?.url ||
        statusData.result?.sample?.url ||
        statusData.results?.[0]?.url ||
        statusData.output?.url ||
        statusData.url;

      if (!imageUrl) {
        console.error("No image URL found in:", JSON.stringify(statusData));
        return false;
      }

      // Download
      const imgRes = await fetch(imageUrl);
      const buffer = Buffer.from(await imgRes.arrayBuffer());

      // Convert to WebP
      const webp = await sharp(buffer)
        .resize(1200, 630, { fit: "cover" })
        .webp({ quality: 85 })
        .toBuffer();

      const outputPath = path.join(
        process.cwd(),
        "public",
        "blog",
        `${slug}.webp`
      );
      writeFileSync(outputPath, webp);
      console.log(`Saved: ${slug}.webp (${(webp.length / 1024).toFixed(0)} KB)`);
      return true;
    }

    if (statusData.status === "failed" || statusData.status === "nsfw") {
      console.error(`Failed: ${statusData.status}`, statusData.error);
      return false;
    }
  }

  console.error("Timed out after 2 minutes");
  return false;
}

async function main() {
  mkdirSync(path.join(process.cwd(), "public", "blog"), { recursive: true });

  for (const img of blogImages) {
    await generateImage(img.prompt, img.slug);
  }

  console.log("\nDone!");
}

main();
