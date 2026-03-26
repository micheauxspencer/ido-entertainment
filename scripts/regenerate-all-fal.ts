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
      "Shot on Canon 5D Mark IV, 85mm f/1.4, a DJ performing at a wedding reception in a mid-range banquet hall, one hand on headphone and the other adjusting the mixer, small LED wash lights behind the booth casting soft blue and warm tones on the wall, guests visible in the blurred background seated at round tables with white linens, shallow depth of field with the DJ sharp and background creamy bokeh, natural indoor ambient lighting mixed with subtle venue uplighting, candid unposed moment, photojournalistic wedding photography style, slight natural grain",
  },
  {
    slug: "wedding-uplighting-myths-toronto",
    prompt:
      "Shot on Sony A7III, 35mm f/1.8, interior of a wedding reception venue with soft amber and lavender LED uplighting washing the plain white walls, round tables with simple centerpieces and tea lights visible in the mid-ground, a few guests walking between tables in soft motion blur, the ceiling has exposed beams with warm string lights draped across, available light only with no flash, the mood is warm and intimate not extravagant, documentary wedding photography, natural color grading with warm shadows",
  },
  {
    slug: "10-photo-booth-features-toronto-events",
    prompt:
      "Shot on Canon 5D Mark IV, 50mm f/1.8, three friends crowded together inside a simple photo booth backdrop laughing and holding oversized novelty sunglasses and a happy birthday sign, the photo booth flash is firing creating that slightly overexposed pop on their faces with soft shadows behind, one person is mid-laugh with eyes squinted, casual clothing, birthday party at a rented community hall with balloons visible in the periphery, genuine candid joy, the look of a real photo booth capture seen from slightly outside the booth",
  },
  {
    slug: "how-to-plan-wedding-cocktail-hour-toronto",
    prompt:
      "Shot on Sony A7III, 24-70mm f/2.8 at 35mm, outdoor garden cocktail hour at a modest wedding venue, a small group of four guests standing in a loose circle chatting and holding wine glasses, a simple wooden bar cart with bottles and a vase of wildflowers visible to the right, late afternoon golden hour sunlight filtering through leafy trees creating dappled light on the grass, one guest is gesturing while telling a story, relaxed smart casual attire, shallow depth of field with the group sharp and the garden softly blurred behind, warm natural tones, documentary wedding photography style",
  },
];

async function main() {
  const outputDir = path.join(process.cwd(), "public", "blog");
  mkdirSync(outputDir, { recursive: true });

  for (const img of blogImages) {
    console.log(`\nGenerating: ${img.slug}`);
    try {
      const result = await fal.subscribe("fal-ai/recraft-v3", {
        input: {
          prompt: img.prompt,
          image_size: "landscape_16_9",
          style: "realistic_image",
        },
      });

      const imageUrl = result.data?.images?.[0]?.url;
      if (!imageUrl) {
        console.error("No URL in response");
        continue;
      }

      const imgRes = await fetch(imageUrl);
      const buffer = Buffer.from(await imgRes.arrayBuffer());

      const webp = await sharp(buffer)
        .resize(1200, 630, { fit: "cover" })
        .webp({ quality: 85 })
        .toBuffer();

      writeFileSync(path.join(outputDir, `${img.slug}.webp`), webp);
      console.log(`Saved: ${img.slug}.webp (${(webp.length / 1024).toFixed(0)} KB)`);
    } catch (err: any) {
      console.error(`Error: ${err.message}`);
    }
  }
  console.log("\nDone!");
}

main().catch(console.error);
