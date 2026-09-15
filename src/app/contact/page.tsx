import type { Metadata } from "next";
import { PageHero } from "@/components/pages/page-hero";
import { Card, Container, Section } from "@/components/ui/primitives";
import { ContactForm } from "@/components/pages/forms";
import { PRODUCTS, STATUS_LABEL } from "@/lib/products";
import { StatusPill } from "@/components/ui/primitives";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to NotifyHub about School, College, Hospital, Restaurant, or the platform.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact NotifyHub", url: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us."
        lede="Tell us about your organization and what you are trying to improve. We'll point you at the right product — or tell you honestly if it isn't ready yet."
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-16">
            <Card className="p-6 lg:p-8">
              <ContactForm />
            </Card>

            <div className="space-y-8">
              <div>
                <p className="nh-eyebrow text-ink-400">Email</p>
                <p className="mt-2.5 text-[15px] text-ink-800">
                  {SITE.contactEmail}
                </p>
              </div>

              <div>
                <p className="nh-eyebrow text-ink-400">Product availability</p>
                <ul className="mt-4 space-y-2.5">
                  {PRODUCTS.map((p) => (
                    <li
                      key={p.key}
                      className="flex items-center justify-between gap-3 border-b border-ink-200 pb-2.5"
                    >
                      <span className="text-[14px] font-medium text-ink-900">
                        {p.name}
                      </span>
                      <StatusPill status={p.status} label={STATUS_LABEL[p.status]} />
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="nh-eyebrow text-ink-400">Company</p>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-600">
                  {SITE.legalName}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
