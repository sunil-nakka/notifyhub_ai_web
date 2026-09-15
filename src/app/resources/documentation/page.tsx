import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/resources/documentation",
  title: "Documentation",
  description:
    "Technical and product documentation for the NotifyHub platform and its industry products.",
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
      title="Documentation"
      lede="Product and technical documentation for teams implementing and operating NotifyHub."
      note="We're building this resource library."
      covering={[
        "Getting started for each product",
        "Roles, permissions, and access model",
        "Data model and API reference",
        "Integration guides",
      ]}
      related={[
        { label: "Platform", href: "/platform" },
        { label: "Contact", href: "/contact", detail: "Ask us directly in the meantime." },
      ]}
    />
  );
}
