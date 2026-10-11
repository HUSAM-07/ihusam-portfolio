import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

// Everything is public: search engines and AI crawlers (GPTBot, ClaudeBot, PerplexityBot, ...) are all welcome.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${DATA.url}/sitemap.xml`,
    host: DATA.url,
  };
}
