import { MetadataRoute } from "next";
import { brandConfig } from "@/data/product";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${brandConfig.meta.canonicalDomain}/sitemap.xml`,
  };
}
