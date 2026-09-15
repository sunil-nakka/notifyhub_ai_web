import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";

export const metadata: Metadata = {
  title: "Resources",
  description: "Product overview, documentation, case studies, and help for NotifyHub.",
  alternates: { canonical: "/resources" },
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Resources"
      title="Product overview"
      lede="A single place to understand what NotifyHub builds, how the platform is put together, and how each product works."
      note="We're building this resource library."
      covering={[
        "Product overviews for each vertical",
        "Platform and architecture documentation",
        "Implementation and onboarding guides",
        "Release notes",
      ]}
      related={[
        { label: "Platform", href: "/platform", detail: "How the shared foundation works." },
        { label: "AI Intelligence", href: "/ai", detail: "How the AI layer is structured." },
        { label: "School", href: "/school", detail: "The most complete product today." },
      ]}
    />
  );
}
