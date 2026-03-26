import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "4mn38mw1",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  imageAlt: string;
  tags: string[];
  readingTime: string;
  searchContent: string;
}

export interface PostFull extends PostMeta {
  body: string;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const posts = await sanityClient.fetch<PostMeta[]>(
    `*[_type == "blogPost"] | order(date desc) {
      "slug": slug.current,
      title,
      description,
      date,
      author,
      image,
      imageAlt,
      tags,
      readingTime,
      searchContent
    }`
  );
  return posts;
}

export async function getPostBySlug(slug: string): Promise<PostFull | null> {
  const post = await sanityClient.fetch<PostFull | null>(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      "slug": slug.current,
      title,
      description,
      date,
      author,
      image,
      imageAlt,
      tags,
      readingTime,
      searchContent,
      body
    }`,
    { slug }
  );
  return post;
}

export async function getAllSlugs(): Promise<string[]> {
  const slugs = await sanityClient.fetch<string[]>(
    `*[_type == "blogPost"].slug.current`
  );
  return slugs;
}
