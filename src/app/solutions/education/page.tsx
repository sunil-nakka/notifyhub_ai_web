import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/solutions/education",
  title: "Education — schools and colleges",
  description:
    "NotifyHub for education: school and college operating platforms built on one intelligent foundation, sharing academic and financial workflows.",
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
      title="Education"
      lede="Schools and colleges run different academic structures on the same operational spine: students, academics, attendance, fees, and staff."
      note="A full education solutions page is in progress. The product pages below are complete."
      covering={[
        "How school and college products relate to one another",
        "Shared academic and financial workflows",
        "What an institution group with several campuses looks like",
        "Where intelligence fits for principals, management, and faculty",
      ]}
      related={[
        { label: "School", href: "/school", detail: "School ERP + AI. Available." },
        { label: "College", href: "/college", detail: "College ERP + AI. Available." },
        { label: "Platform", href: "/platform", detail: "The shared foundation." },
      ]}
    />
  );
}
