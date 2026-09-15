import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms",
  description: "NotifyHub terms of service.",
  alternates: { canonical: "/legal/terms" },
};

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
