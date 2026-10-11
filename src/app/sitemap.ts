import { DATA } from "@/data/resume";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: DATA.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${DATA.url}/llms.txt`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${DATA.url}/llms-full.txt`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: encodeURI(`${DATA.url}/Mohammed Husamuddin Resume.pdf`), lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
