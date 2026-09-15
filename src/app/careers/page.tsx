import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";

export const metadata: Metadata = {
  title: "Careers",
  description: "Opportunities at NotifyHub.",
  alternates: { canonical: "/careers" },
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Company"
      title="We're building. More opportunities coming soon."
      lede="NotifyHub is a small team building vertical software for real operations. There are no open roles listed right now."
      note="No positions are open at the moment. If you think you should be working here anyway, write to us."
      covering={[
        "Engineering — backend, Flutter, and platform",
        "Product and design",
        "Implementation and customer success",
      ]}
      related={[
        { label: "Contact", href: "/contact", detail: "Introduce yourself." },
        { label: "About", href: "/about", detail: "What we're building and why." },
      ]}
    />
  );
}
