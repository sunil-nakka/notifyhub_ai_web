import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.brand} — ${SITE.tagline}`,
    short_name: SITE.name,
    description: SITE.descriptor,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0e14",
    theme_color: "#0a0e14",
    lang: SITE.locale,
    categories: ["business", "productivity", "education"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
