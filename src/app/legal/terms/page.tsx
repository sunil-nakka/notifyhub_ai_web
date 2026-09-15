import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  path: "/legal/terms",
  title: "Terms",
  description:
    "The NotifyHub terms of service are being prepared for publication.",
  // Placeholder route. Crawlable and link-following, but out of the index
  // until it carries real content — and absent from the sitemap for the
  // same reason. Remove `noindex` and re-add the route to src/app/sitemap.ts
  // on the day this page is written.
  noindex: true,
});

export default function Page() {
  return (
    <StubPage
      eyebrow="Legal"
      title="Terms"
      lede="Our terms of service are being prepared for publication."
      note={`Customer agreements are handled directly until the published terms are live. Write to ${SITE.contactEmail} for the current agreement.`}
      covering={[
        "Service description and availability",
        "Customer and NotifyHub responsibilities",
        "Subscriptions, plans, and billing",
        "Data ownership",
        "Limitations and termination",
      ]}
      related={[
        { label: "Security", href: "/legal/security" },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
