import type { Metadata } from "next";
import { PageHero } from "@/components/pages/page-hero";
import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui/primitives";
import { IconArrow } from "@/components/ui/icons";
import { AiArchitecture } from "@/components/architecture/platform-architecture";
import { IntelligenceFlow } from "@/components/architecture/intelligence-flow";
import { InsightPanel } from "@/components/product-ui/insight";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AI Intelligence — AI built into the product architecture",
  description:
    "How NotifyHub builds AI into vertical ERP: deterministic analytics produce the signals, AI interprets them, explains what changed, and recommends what to do next.",
  alternates: { canonical: "/ai" },
  openGraph: {
    title: "NotifyHub AI Intelligence",
    description:
      "Deterministic analytics produce the signals. AI interprets, explains, and recommends.",
    url: `${SITE.url}/ai`,
  },
};

const CAPABILITIES = [
  {
    name: "Understand",
    detail:
      "Understand structured operational data, entities, workflows, and relationships.",
  },
  {
    name: "Detect",
    detail: "Identify patterns, anomalies, risks, and important changes.",
  },
  {
    name: "Explain",
    detail: "Turn complex operational information into clear explanations.",
  },
  {
    name: "Recommend",
    detail: "Suggest practical next actions based on the organization's context.",
  },
];

const SURFACES = [
  {
    title: "Institution Intelligence",
    href: "/ai/institution-intelligence",
    detail:
      "A management-level view of what changed across the institution and which areas need attention.",
  },
  {
    title: "Operational Intelligence",
    href: "/ai/operational-intelligence",
    detail:
      "Day-to-day context for the people running the operation — classes, departments, shifts, wards.",
  },
  {
    title: "Risk & Insights",
    href: "/ai/risk-insights",
    detail:
      "Deterministic risk scoring over receivables and operational exposure, explained in context.",
  },
];

export default function AiPage() {
  return (
    <>
      <PageHero
        eyebrow="AI Intelligence"
        title="AI that understands your operations."
        lede="NotifyHub AI is designed to work with the operational context of the organization — not simply generate text. It reads the same structured records the rest of the product runs on, and it explains what those records are doing."
        actions={
          <>
            <ButtonLink href="/platform" size="lg">
              See the platform
              <IconArrow className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Talk to us
            </ButtonLink>
          </>
        }
        aside={
          <InsightPanel
            title="Fee Collection Insight"
            whatChanged="Collection performance for this period is below the expected trend."
            whyItMatters="Several accounts are showing increasing overdue patterns."
            recommendedAction="Review the highest-risk accounts and prioritize follow-up before the next collection cycle."
          />
        }
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Four things the intelligence layer does."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
            {CAPABILITIES.map((c, i) => (
              <li key={c.name} className="bg-white p-6">
                <span className="nh-num text-[11px] font-medium text-cobalt-600">
                  0{i + 1}
                </span>
                <h3 className="mt-3.5 text-[17px] font-semibold text-ink-950">
                  {c.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
                  {c.detail}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="Architecture"
            title="AI with structure, not magic."
            lede="Four layers, in a fixed order. Every number is computed before a model ever sees it."
          />
          <div className="mt-14">
            <AiArchitecture tone="dark" />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Path"
            title="From operations to action."
            lede="The same sequence runs in every vertical, whatever the records happen to be."
          />
          <div className="mt-14">
            <IntelligenceFlow tone="light" />
          </div>
        </Container>
      </Section>

      <Section tone="subtle">
        <Container>
          <SectionHeading
            eyebrow="Surfaces"
            title="Where intelligence shows up in the product."
          />
          <div className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-3">
            {SURFACES.map((s) => (
              <article
                key={s.title}
                className="flex h-full flex-col rounded-xl border border-ink-200 bg-white p-6"
              >
                <h3 className="text-[17px] font-semibold text-ink-950">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-600">
                  {s.detail}
                </p>
                <div className="mt-5">
                  <TextLink href={s.href}>Read more</TextLink>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
