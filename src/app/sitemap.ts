import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.contextor.cc/en", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://www.contextor.cc/ko", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://www.contextor.cc/en/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: "https://www.contextor.cc/ko/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
