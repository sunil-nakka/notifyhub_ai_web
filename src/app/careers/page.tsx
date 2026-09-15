import type { Metadata } from "next";
import { StubPage } from "@/components/pages/stub-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/careers",
  title: "Careers",
  description:
    "NotifyHub is a small team building vertical ERP software for real operations. No roles are open right now — introduce yourself anyway.",
  // Placeholder route. Crawlable and link-following, but out of the index
  // until it carries real content — and absent from the sitemap for the
  // same reason. Remove `noindex` and re-add the route to src/app/sitemap.ts
  // on the day this page is written.
  noindex: true,
});

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
