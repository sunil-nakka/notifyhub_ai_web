import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/resources",
  title: "Resources",
  description:
    "Product overviews, platform documentation, implementation guides and release notes for NotifyHub. This library is being built.",
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
      title="Product overview"
      lede="A single place to understand what NotifyHub builds, how the platform is put together, and how each product works."
      note="We're building this resource library."
      covering={[
        "Product overviews for each vertical",
        "Platform and architecture documentation",
        "Implementation and onboarding guides",
        "Release notes",
      ]}
      related={[
        { label: "Platform", href: "/platform", detail: "How the shared foundation works." },
        { label: "AI Intelligence", href: "/ai", detail: "How the AI layer is structured." },
        { label: "School", href: "/school", detail: "The most complete product today." },
      ]}
    />
  );
}
