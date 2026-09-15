import type { Metadata } from "next";
import { PageHero } from "@/components/pages/page-hero";
import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { IconArrow } from "@/components/ui/icons";
import { PlatformArchitecture } from "@/components/architecture/platform-architecture";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "NotifyHub builds specialized software for real-world operations, combining vertical ERP systems with AI-native intelligence.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About NotifyHub", url: `${SITE.url}/about` },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Software for the work organizations actually do."
        lede="NotifyHub builds specialized software for real-world operations, combining vertical ERP systems with AI-native intelligence."
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <div className="grid gap-12 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
            <div className="space-y-5 text-[15.5px] leading-relaxed text-ink-700">
              <p>
                Most organizations already have systems. What they usually do not
                have is software that fits the way their industry actually
                operates, and that can tell them something useful about what it
                has recorded.
              </p>
              <p>
                NotifyHub builds industry-specific products — School, College,
                and next Hospital and Restaurant — on one shared technology
                platform. The workflows change from industry to industry. The
                foundation underneath does not: identity, organizations,
                permissions, tenancy, data, analytics, and intelligence.
              </p>
              <p>
                Intelligence is part of the product architecture rather than a
                feature added on top. Deterministic analytics compute the
                metrics, trends, and risk signals. AI interprets those signals in
                context, explains what changed, and proposes what to do about it.
                The distinction matters: a calculation that can be exact should
                never be produced by a language model.
              </p>
              <p>
                The company is early. School and College are available today;
                Hospital and Restaurant are coming next. We would rather say
                that plainly than describe a company that does not exist yet.
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="How it fits together"
                title="One company, one platform, several products."
              />
              <div className="mt-8 rounded-xl border border-ink-200 bg-white p-5">
                <PlatformArchitecture />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 rounded-xl border border-ink-200 p-8 grid-cols-1 sm:grid-cols-2 lg:p-10">
            <div>
              <p className="nh-eyebrow text-ink-400">Legal entity</p>
              <p className="mt-2.5 text-[15px] font-medium text-ink-900">
                {SITE.legalName}
              </p>
            </div>
            <div>
              <p className="nh-eyebrow text-ink-400">Get in touch</p>
              <p className="mt-2.5 text-[15px] text-ink-700">
                {SITE.contactEmail}
              </p>
              <div className="mt-5">
                <ButtonLink href="/contact" size="md">
                  Talk to us
                  <IconArrow className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
