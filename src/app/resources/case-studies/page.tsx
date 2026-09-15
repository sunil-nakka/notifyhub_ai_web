import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/resources/case-studies",
  title: "Case Studies",
  description:
    "Customer stories from organizations using NotifyHub. Published only once there are real ones to publish.",
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
      title="Customer stories coming soon."
      lede="NotifyHub publishes customer stories only when the organizations involved have approved them. Until then this page stays empty rather than filled with examples that were never real."
      note="No customer stories have been published yet."
      covering={[
        "What the organization was doing before",
        "What changed operationally",
        "What the institution says about it, in their own words",
      ]}
      related={[
        { label: "Contact", href: "/contact", detail: "Talk to us about a pilot." },
        { label: "School", href: "/school" },
        { label: "College", href: "/college" },
      ]}
    />
  );
}
