import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = pageMetadata({
  path: "/legal/privacy",
  title: "Privacy",
  description:
    "The NotifyHub privacy policy is being prepared for publication. Write to us in the meantime with any question about how data is handled.",
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
      title="Privacy"
      lede="Our privacy policy is being prepared for publication."
      note={`The published policy will be the authoritative version. Until it is live, write to ${SITE.contactEmail} with any question about how data is handled and we will answer it directly.`}
      covering={[
        "What data NotifyHub collects, and why",
        "How customer organizational data is stored and separated",
        "Processing, retention, and deletion",
        "Sub-processors and infrastructure providers",
        "How to exercise data rights",
      ]}
      related={[
        { label: "Security", href: "/legal/security", detail: "How the platform handles access and data." },
        { label: "Contact", href: "/contact" },
      ]}
    />
  );
}
