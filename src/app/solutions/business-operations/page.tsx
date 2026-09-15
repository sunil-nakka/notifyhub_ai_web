import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";

export const metadata: Metadata = {
  title: "Business Operations",
  description:
    "The operating workflows NotifyHub shares across every industry it builds for.",
  alternates: { canonical: "/solutions/business-operations" },
};

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
