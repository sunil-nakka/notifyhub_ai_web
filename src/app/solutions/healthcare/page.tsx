import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/solutions/healthcare",
  title: "Healthcare",
  description:
    "NotifyHub for healthcare: a hospital operating platform focused on operational intelligence. Coming soon.",
  // Placeholder route. Crawlable and link-following, but out of the index
  // until it carries real content — and absent from the sitemap for the
  // same reason. Remove `noindex` and re-add the route to src/app/sitemap.ts
  // on the day this page is written.
  noindex: true,
});

export default function Page() {
  return (
    <StubPage
      eyebrow="Solutions"
      title="Healthcare"
      lede="Hospital administration is an operations problem before it is anything else: admissions, departments, billing, staff, and the receivables behind them."
      status="coming-soon"
      note="The healthcare product is coming soon. This solutions page will follow it."
      covering={[
        "Operational scope, and what stays deliberately out of scope",
        "How administrative intelligence differs from clinical decision support",
        "Multi-location hospital groups",
      ]}
      related={[
        { label: "Hospital", href: "/hospital", detail: "Product direction and early interest." },
        { label: "Platform", href: "/platform", detail: "The shared foundation." },
      ]}
    />
  );
}
