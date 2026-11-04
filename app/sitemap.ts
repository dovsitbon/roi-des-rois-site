import type { MetadataRoute } from "next";
import site from "@/data/site.json";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/legal"].flatMap((path) =>
    locales.map((lang) => ({
      url: `${site.url}/${lang}${path}`,
      lastModified: new Date(),
      changeFrequency: path ? ("yearly" as const) : ("monthly" as const),
      priority: path ? 0.3 : 1,
      alternates: { languages: { ...Object.fromEntries(locales.map((l) => [l, `${site.url}/${l}${path}`])), "x-default": `${site.url}/fr${path}` } },
    })),
  );
}
