import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/resources/blog",
  title: "Blog",
  description:
    "Notes from building vertical ERP software: engineering and architecture, how we split vertical from platform, and product updates.",
  // Placeholder route. Crawlable and link-following, but out of the index
  // until it carries real content — and absent from the sitemap for the
  // same reason. Remove `noindex` and re-add the route to src/app/sitemap.ts
  // on the day this page is written.
  noindex: true,
});

export default function Page() {
  return (
    <StubPage
      eyebrow="Resources"
      title="Blog"
      lede="Notes from building vertical software: what we learned, what we got wrong, and how the platform is put together."
      note="We're building this resource library."
      covering={[
        "Engineering and architecture notes",
        "How we decide what belongs in a vertical and what belongs in the platform",
        "Product updates",
      ]}
      related={[
        { label: "AI Intelligence", href: "/ai", detail: "How the AI layer is structured." },
        { label: "Platform", href: "/platform" },
      ]}
    />
  );
}
