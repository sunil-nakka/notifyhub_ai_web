import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/**
 * Only indexable routes belong here.
 *
 * The twelve placeholder routes (/resources/*, /solutions/*, /careers,
 * /legal/privacy, /legal/terms) carry
 * `noindex, follow` and are deliberately absent: submitting a URL you have
 * asked not to be indexed is a contradictory signal, and listing pages that
 * say "we're building this" alongside real product pages spends crawl budget
 * on nothing. Add a route back the moment it has real content.
 *
 * `lastModified` is a fixed revision date, not `new Date()`. Recomputing it
 * per request told every crawl that all 25 pages changed seconds ago, which
 * search engines learn to ignore. Bump SITE.contentRevision when content
 * actually changes.
 */

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const ROUTES: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },

  // Revenue pages first: these are what commercial search should land on.
  { path: "/school", priority: 0.9, changeFrequency: "monthly" },
  { path: "/college", priority: 0.9, changeFrequency: "monthly" },
  { path: "/platform", priority: 0.8, changeFrequency: "monthly" },
  { path: "/ai", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },

  { path: "/hospital", priority: 0.7, changeFrequency: "monthly" },
  { path: "/restaurant", priority: 0.7, changeFrequency: "monthly" },

  { path: "/ai/institution-intelligence", priority: 0.6, changeFrequency: "monthly" },
  { path: "/ai/operational-intelligence", priority: 0.6, changeFrequency: "monthly" },
  { path: "/ai/risk-insights", priority: 0.6, changeFrequency: "monthly" },

  { path: "/about", priority: 0.6, changeFrequency: "yearly" },
  { path: "/legal/security", priority: 0.5, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(SITE.contentRevision);
  return ROUTES.map((r) => ({
    url: `${SITE.url}${r.path === "/" ? "" : r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
