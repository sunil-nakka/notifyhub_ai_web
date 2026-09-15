import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";

export const metadata: Metadata = {
  title: "Help Center",
  description: "Support and help resources for NotifyHub products.",
  alternates: { canonical: "/resources/help" },
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Resources"
      title="Help Center"
      lede="Answers to the questions that come up while running NotifyHub day to day."
      note="We're building this resource library."
      covering={[
        "Common questions by product",
        "Account, access, and permission issues",
        "How to reach support",
      ]}
      related={[
        { label: "Contact", href: "/contact", detail: "Reach us directly in the meantime." },
        { label: "Documentation", href: "/resources/documentation" },
      ]}
    />
  );
}
