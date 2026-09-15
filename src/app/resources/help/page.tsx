import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/resources/help",
  title: "Help Center",
  description:
    "Support and help resources for NotifyHub products. Until this is live, write to us and we will answer directly.",
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
      title="Help Center"
      lede="Answers to the questions that come up while running NotifyHub day to day."
      note="We're building this resource library."
      covering={[
        "Common questions by product",
        "Account, access, and permission issues",
        "How to reach support",
      ]}
      related={[
        { label: "Contact", href: "/contact", detail: "Reach us directly in the meantime." },
        { label: "Documentation", href: "/resources/documentation" },
      ]}
    />
  );
}
