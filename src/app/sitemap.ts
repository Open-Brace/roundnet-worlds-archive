import type { MetadataRoute } from "next";
import { editions } from "@/data/worlds";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://roundnet-worlds-archive.vercel.app";

  return [
    { url: origin, priority: 1, changeFrequency: "monthly" },
    { url: `${origin}/history`, priority: 0.8, changeFrequency: "monthly" },
    ...editions.map((edition) => ({
      url: `${origin}/editions/${edition.year}`,
      priority: 0.9,
      changeFrequency: "yearly" as const,
    })),
  ];
}
