import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return siteConfig.paths.map((path, index) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/actualites" ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}