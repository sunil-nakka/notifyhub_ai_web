import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Technical and product documentation for NotifyHub.",
  alternates: { canonical: "/resources/documentation" },
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Resources"
      title="Documentation"
      lede="Product and technical documentation for teams implementing and operating NotifyHub."
      note="We're building this resource library."
      covering={[
        "Getting started for each product",
        "Roles, permissions, and access model",
        "Data model and API reference",
        "Integration guides",
      ]}
      related={[
        { label: "Platform", href: "/platform" },
        { label: "Contact", href: "/contact", detail: "Ask us directly in the meantime." },
      ]}
    />
  );
}
