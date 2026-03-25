import type { MetadataRoute } from "next";

const BASE_URL = "https://idoentertainment.ca";

const services = [
  "dj-services",
  "photo-booths",
  "catering",
  "event-rentals",
  "bar-services",
  "lighting-audio",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...servicePages,
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
