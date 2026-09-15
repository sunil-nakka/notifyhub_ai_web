import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/platform", priority: 0.9, changeFrequency: "monthly" },
  { path: "/school", priority: 0.9, changeFrequency: "monthly" },
  { path: "/college", priority: 0.9, changeFrequency: "monthly" },
  { path: "/hospital", priority: 0.7, changeFrequency: "monthly" },
  { path: "/restaurant", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ai", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai/institution-intelligence", priority: 0.5, changeFrequency: "monthly" },
  { path: "/ai/operational-intelligence", priority: 0.5, changeFrequency: "monthly" },
  { path: "/ai/risk-insights", priority: 0.5, changeFrequency: "monthly" },
  { path: "/solutions/education", priority: 0.6, changeFrequency: "monthly" },
  { path: "/solutions/healthcare", priority: 0.5, changeFrequency: "monthly" },
  { path: "/solutions/hospitality", priority: 0.5, changeFrequency: "monthly" },
  { path: "/solutions/business-operations", priority: 0.5, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.5, changeFrequency: "monthly" },
  { path: "/resources/documentation", priority: 0.4, changeFrequency: "monthly" },
  { path: "/resources/case-studies", priority: 0.4, changeFrequency: "monthly" },
  { path: "/resources/blog", priority: 0.4, changeFrequency: "monthly" },
  { path: "/resources/help", priority: 0.4, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.4, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/legal/security", priority: 0.4, changeFrequency: "yearly" },
  { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
