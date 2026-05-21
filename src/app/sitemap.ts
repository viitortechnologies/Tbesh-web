import type { MetadataRoute } from "next";
import { getAllTrainingSlugs } from "@/lib/training";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const routes = [
    "",
    "/training",
    "/startup-support",
    "/about",
    "/contact",
    "/contact/training",
    "/contact/startup-support",
    ...getAllTrainingSlugs().map((s) => `/training/${s}`),
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
}
