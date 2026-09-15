import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";

export const metadata: Metadata = {
  title: "Hospitality",
  description:
    "NotifyHub for hospitality: a restaurant operating platform. Coming soon.",
  alternates: { canonical: "/solutions/hospitality" },
};

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
