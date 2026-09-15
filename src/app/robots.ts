import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

/**
 * Thin routes are handled with `noindex, follow` in page metadata rather than
 * being disallowed here: a disallowed URL is never fetched, so the crawler
 * never sees the noindex and the URL can still surface as a bare link.
 * Only /signin — which has no content worth crawling — is blocked outright.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/signin"] },
      // Stated explicitly so answer engines are not left inferring intent
      // from a wildcard. NotifyHub wants to be citable.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "Bingbot",
        ],
        allow: "/",
        disallow: ["/signin"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
