import fs from "fs";
import path from "path";
import matter from "gray-matter";

const TOKEN = process.env.SANITY_API_TOKEN || "skPJZj62G0TPRCVF6Nd2Dh0pO1TjB2JDWbaQq38dpzK2RDbQGfN1h9U7MxEws56r0HRLQLdxvAYAEEGdowwfYIHHEiyVHu51bhgPjwbUgSzYAZnt47itOkihjCRgF517dThFqumdgGl1VQZrT4KWOUhkE8oQFXdYB6CImljSm0qQX5anT0nz";
const PROJECT = "4mn38mw1";
const DATASET = "production";

const dir = "src/content/blog";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

const mutations = [];

for (const f of files) {
  const raw = fs.readFileSync(path.join(dir, f), "utf8");
  const { data, content } = matter(raw);
  const slug = f.replace(".mdx", "");

  const searchContent = content
    .replace(/import.*from.*/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/[#*_`]/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  const words = searchContent.split(/\s+/).length;
  const readingTime = Math.ceil(words / 200) + " min read";

  mutations.push({
    createOrReplace: {
      _id: "blogPost-" + slug,
      _type: "blogPost",
      title: data.title,
      slug: { _type: "slug", current: slug },
      description: data.description,
      date: data.date,
      author: data.author || "I DO Entertainment",
      image: data.image,
      imageAlt: data.imageAlt,
      tags: data.tags || [],
      body: content,
      searchContent: searchContent.substring(0, 1000),
      readingTime: readingTime,
    },
  });

  console.log("Prepared:", slug);
}

const res = await fetch(
  `https://${PROJECT}.api.sanity.io/v2024-01-01/data/mutate/${DATASET}`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  }
);

const result = await res.json();
console.log("\nResult:", JSON.stringify(result, null, 2));
