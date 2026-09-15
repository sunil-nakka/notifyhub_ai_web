import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";

export const metadata: Metadata = {
  title: "Healthcare",
  description:
    "NotifyHub for healthcare: a hospital operating platform focused on operational intelligence. Coming soon.",
  alternates: { canonical: "/solutions/healthcare" },
};

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
