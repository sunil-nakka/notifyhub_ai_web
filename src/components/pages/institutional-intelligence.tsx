import type { ReactNode } from "react";
import {
  Container,
  Section,
  SectionHeading,
  cx,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import {
  IconAi,
  IconAnalytics,
  IconAttendance,
  IconFees,
} from "@/components/ui/icons";

const CAPABILITIES = [
  {
    icon: IconAttendance,
    title: "Attendance",
    detail:
      "Course and section attendance capture, with the trends and patterns that follow from it.",
  },
  {
    icon: IconFees,
    title: "Fee Management",
    detail:
      "Structured fee tracking, installment status, dues, collections, and related financial workflows.",
  },
  {
    icon: IconAnalytics,
    title: "Institutional Analytics",
    detail:
      "Department- and institution-level indicators derived from operational and academic records.",
  },
  {
    icon: IconAi,
    title: "AI Insights",
    detail:
      "Context-aware intelligence that connects signals across academics, attendance, fees, and institutional operations to surface important patterns, risks, and areas requiring attention.",
  },
];

/**
 * Core product capability section for the education products.
 * Capabilities are described as part of the product experience. Status is a
 * product-level concept only — nothing here carries a capability-level label.
 */
export function InstitutionalIntelligence({
  tone = "light",
  aside,
  className,
}: {
  tone?: "light" | "subtle";
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <Section tone={tone} className={className}>
      <Container>
        <SectionHeading
          eyebrow="Institutional intelligence"
          title="Built to understand the whole institution."
          lede="NotifyHub brings operational data together to help administrators see what is happening, understand what needs attention, and act with confidence."
        />

        <div
          className={cx(
            "mt-12 grid gap-10",
            aside
              ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-14"
              : "",
          )}
        >
          <ul
            className={cx(
              "grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200",
              aside ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-4",
            )}
          >
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} as="li" delay={i * 60} className="bg-white">
                <div className="h-full p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-200 bg-ink-50 text-ink-700">
                    <c.icon className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="mt-4 text-[16px] leading-tight font-semibold text-ink-950">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
                    {c.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          {aside ? <div className="min-w-0">{aside}</div> : null}
        </div>
      </Container>
    </Section>
  );
}
