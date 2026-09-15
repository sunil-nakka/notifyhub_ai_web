import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/solutions/hospitality",
  title: "Hospitality",
  description:
    "NotifyHub for hospitality: a restaurant operating platform built on the same foundation as every other NotifyHub product. Coming soon.",
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
      title="Hospitality"
      lede="Restaurants generate a dense operational record every single day. Most of it is never read back."
      status="coming-soon"
      note="The hospitality product is coming soon. This solutions page will follow it."
      covering={[
        "Daily operations, sales, inventory, and staff",
        "Multi-outlet comparison",
        "What operational intelligence looks like in a service business",
      ]}
      related={[
        { label: "Restaurant", href: "/restaurant", detail: "Product direction and early access." },
        { label: "Platform", href: "/platform", detail: "The shared foundation." },
      ]}
    />
  );
}
