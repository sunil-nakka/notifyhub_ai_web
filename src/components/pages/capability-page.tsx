import Link from "next/link";
import type { ReactNode } from "react";
import { PageHero, FeatureGrid } from "./page-hero";
import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { IconArrow } from "@/components/ui/icons";

/** Shared layout for the AI capability pages. */
export function CapabilityPage({
  title,
  lede,
  visual,
  howItWorks,
  inProduct,
  related,
}: {
  title: string;
  lede: string;
  visual: ReactNode;
  howItWorks: { title: string; detail: string }[];
  inProduct: { heading: string; lede: string; points: string[] };
  related: { label: string; href: string; detail?: string }[];
}) {
  return (
    <>
      <PageHero
        eyebrow="AI Intelligence"
        title={title}
        lede={lede}
        actions={
          <>
            <ButtonLink href="/contact" size="lg">
              Talk to us
              <IconArrow className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/ai" variant="secondary" size="lg">
              The AI architecture
            </ButtonLink>
          </>
        }
        aside={visual}
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <SectionHeading eyebrow="How it works" title="Signals first, then reasoning." />
          <div className="mt-12">
            <FeatureGrid items={howItWorks} columns={3} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
            <div>
              <SectionHeading eyebrow="In the product" title={inProduct.heading} lede={inProduct.lede} />
              <ul className="mt-9 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {inProduct.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 border-b border-ink-100 pb-3 text-[14px] text-ink-700"
                  >
                    <span
                      aria-hidden
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cobalt-500"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading eyebrow="Related" title="Where to go next" />
              <ul className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200">
                {related.map((r) => (
                  <li key={r.href} className="bg-white">
                    <Link
                      href={r.href}
                      className="group flex items-start justify-between gap-4 p-5 transition-colors hover:bg-ink-50"
                    >
                      <span className="min-w-0">
                        <span className="block text-[14.5px] font-medium text-ink-950">
                          {r.label}
                        </span>
                        {r.detail ? (
                          <span className="mt-1 block text-[13px] leading-relaxed text-ink-500">
                            {r.detail}
                          </span>
                        ) : null}
                      </span>
                      <IconArrow className="mt-1 h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
