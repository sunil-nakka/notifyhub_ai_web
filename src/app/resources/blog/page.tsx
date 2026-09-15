import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing from the NotifyHub team on vertical ERP and applied intelligence.",
  alternates: { canonical: "/resources/blog" },
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Resources"
      title="Blog"
      lede="Notes from building vertical software: what we learned, what we got wrong, and how the platform is put together."
      note="We're building this resource library."
      covering={[
        "Engineering and architecture notes",
        "How we decide what belongs in a vertical and what belongs in the platform",
        "Product updates",
      ]}
      related={[
        { label: "AI Intelligence", href: "/ai", detail: "How the AI layer is structured." },
        { label: "Platform", href: "/platform" },
      ]}
    />
  );
}
