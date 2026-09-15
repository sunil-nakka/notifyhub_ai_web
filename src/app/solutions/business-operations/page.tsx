import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/solutions/business-operations",
  title: "Business Operations",
  description:
    "The operating workflows NotifyHub shares across every industry it builds for: identity, organizations, permissions, workflow, data and intelligence.",
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
      title="Business Operations"
      lede="Some things are the same in every organization: who has access, what changed, what is owed, and what needs attention. Those live in the platform, not in any single vertical."
      note="A dedicated business operations page is in progress."
      covering={[
        "Identity, organizations, roles, and permissions",
        "Receivables and financial operations",
        "Auditability and operational reporting",
        "How a new vertical inherits all of it",
      ]}
      related={[
        { label: "Platform", href: "/platform", detail: "The shared foundation." },
        { label: "AI Intelligence", href: "/ai", detail: "The reasoning layer above it." },
      ]}
    />
  );
}
