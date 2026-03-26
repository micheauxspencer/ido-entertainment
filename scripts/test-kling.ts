import jwt from "jsonwebtoken";
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import path from "path";

const ACCESS_KEY = "AkhrgegepmQnTFDmPkCYkbNnfmYG3EFQ";
const SECRET_KEY = "AhgeEYEHrdTJeGBJTTYEbfrbmQp9nebG";

function generateToken(): string {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: ACCESS_KEY,
    exp: now + 1800, // 30 min
    nbf: now - 5,
  };
  return jwt.sign(payload, SECRET_KEY, {
    algorithm: "HS256",
    header: { alg: "HS256", typ: "JWT" },
  });
}

async function main() {
  const token = generateToken();
  console.log("JWT generated");

  // Submit image generation
  console.log("Submitting image generation...");
  const submitRes = await fetch(
    "https://api.klingai.com/v1/images/generations",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        model: "kling-v1",
        prompt:
          "Professional DJ at an elegant wedding reception, mixing on turntables with warm gold uplighting reflecting off crystal chandeliers, dance floor full of guests, cinematic shallow depth of field, luxury event photography. No text, no watermarks.",
        aspect_ratio: "16:9",
        n: 1,
      }),
    }
  );

  const submitData = await submitRes.json();
  console.log("Submit response:", JSON.stringify(submitData, null, 2));

  if (!submitRes.ok) {
    console.error(`Failed: ${submitRes.status}`);
    return;
  }

  const taskId = submitData.data?.task_id;
  if (!taskId) {
    console.error("No task_id in response");
    return;
  }

  // Poll for completion
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 5000));
    console.log(`Polling... (${(i + 1) * 5}s)`);

    const freshToken = generateToken();
    const statusRes = await fetch(
      `https://api.klingai.com/v1/images/generations/${taskId}`,
      {
        headers: { Authorization: `Bearer ${freshToken}` },
      }
    );

    const statusData = await statusRes.json();

    const status = statusData.data?.task_status;
    if (status === "succeed") {
      console.log(
        "Completed:",
        JSON.stringify(statusData.data, null, 2)
      );

      const imageUrl =
        statusData.data?.task_result?.images?.[0]?.url;
      if (!imageUrl) {
        console.error("No image URL found");
        return;
      }

      // Download and convert to WebP
      const imgRes = await fetch(imageUrl);
      const buffer = Buffer.from(await imgRes.arrayBuffer());

      const outputDir = path.join(process.cwd(), "public", "blog");
      mkdirSync(outputDir, { recursive: true });

      const webp = await sharp(buffer)
        .resize(1200, 630, { fit: "cover" })
        .webp({ quality: 85 })
        .toBuffer();

      const outputPath = path.join(outputDir, "kling-test.webp");
      writeFileSync(outputPath, webp);
      console.log(`Saved: kling-test.webp (${(webp.length / 1024).toFixed(0)} KB)`);
      return;
    }

    if (status === "failed") {
      console.error("Failed:", statusData.data?.task_status_msg);
      return;
    }

    console.log(`Status: ${status}`);
  }

  console.error("Timed out");
}

main();
