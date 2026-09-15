import {
  Container,
  Section,
  SectionHeading,
  TextLink,
  cx,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { AppFrame, DataTable, StatusDot, Tag } from "@/components/product-ui/shell";
import { BarChart, DonutGauge, ProgressBar } from "@/components/product-ui/charts";

/**
 * Section 11 — School is the primary product today, so it gets the deepest
 * treatment on the homepage.
 *
 * Naming note: this capability is called Institution Intelligence across the
 * site, matching the product naming used inside the platform.
 */
const CAPABILITIES = [
  {
    key: "institution",
    title: "Institution Intelligence",
    blurb: "A management-level view of what is changing across the institution.",
    points: [
      "Attendance trends",
      "Fee collection",
      "Academic indicators",
      "Operational changes",
      "Areas requiring attention",
    ],
    cta: { label: "Explore Institution Intelligence", href: "/ai/institution-intelligence" },
  },
  {
    key: "students",
    title: "My Class / My Students",
    blurb: "Help teachers understand student-level patterns in their own classes.",
    points: [
      "Attendance patterns",
      "Academic changes",
      "Students requiring attention",
      "Class-level trends",
      "Contextual insights",
    ],
    cta: { label: "Explore My Students", href: "/ai/operational-intelligence" },
  },
  {
    key: "fees",
    title: "Fee Collection Intelligence",
    blurb: "Help school management understand collection performance and risk.",
    points: [
      "Collection trends",
      "Overdue patterns",
      "Payment-risk signals",
      "Priority accounts",
      "Follow-up recommendations",
    ],
    cta: { label: "Explore Fee Intelligence", href: "/ai/risk-insights" },
  },
] as const;

export function SchoolAi() {
  return (
    <Section tone="subtle">
      <Container>
        <SectionHeading
          eyebrow="School"
          title="For schools, intelligence starts with knowing what needs attention."
          lede="NotifyHub School combines everyday school operations with intelligence designed for principals, administrators, teachers, and management teams."
        />

        <div className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.key} delay={i * 70}>
              <article className="flex h-full flex-col rounded-xl border border-ink-200 bg-white">
                <div className="border-b border-ink-200 p-5">
                  <h3 className="text-[17px] leading-tight font-semibold text-ink-950">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
                    {c.blurb}
                  </p>
                </div>

                <div className="border-b border-ink-200 p-5">
                  <CapabilityVisual which={c.key} />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <ul className="flex-1 space-y-2">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2.5 text-[13px] text-ink-600"
                      >
                        <span
                          aria-hidden
                          className="h-1 w-1 rounded-full bg-cobalt-400"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <TextLink href={c.cta.href}>{c.cta.label}</TextLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

function CapabilityVisual({ which }: { which: (typeof CAPABILITIES)[number]["key"] }) {
  if (which === "institution") {
    return (
      <AppFrame
        title="Institution Intelligence"
        breadcrumb={["School", "Institution"]}
        elevated={false}
        demoLabel="Demo data"
      >
        <div className="flex items-center gap-4 p-4">
          <DonutGauge value={78} tone="attention" label="78" />
          <div className="min-w-0 flex-1 space-y-2.5">
            {[
              { label: "Attendance", value: 91, tone: "base" as const },
              { label: "Collection", value: 82, tone: "attention" as const },
              { label: "Academics", value: 88, tone: "base" as const },
            ].map((r) => (
              <div key={r.label}>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-ink-600">{r.label}</span>
                  <span className="nh-num font-medium text-ink-800">{r.value}</span>
                </div>
                <ProgressBar className="mt-1" value={r.value} tone={r.tone} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-ink-200 px-4 py-2.5">
          <StatusDot tone="attention" />
          <span className="text-[11.5px] text-ink-600">
            2 areas moved outside their usual range
          </span>
        </div>
      </AppFrame>
    );
  }

  if (which === "students") {
    return (
      <AppFrame
        title="My Students"
        breadcrumb={["Teacher", "Grade 8-A"]}
        elevated={false}
        demoLabel="Demo data"
      >
        <DataTable
          columns={["Student", "Attendance", "Trend"]}
          rows={[
            ["S. Rao", "78%", <Tag key="1" tone="risk">Review</Tag>],
            ["A. Kumar", "84%", <Tag key="2" tone="attention">Watch</Tag>],
            ["M. Reddy", "92%", <Tag key="3" tone="positive">Stable</Tag>],
            ["P. Sharma", "95%", <Tag key="4" tone="positive">Stable</Tag>],
          ]}
        />
        <div className="border-t border-ink-200 px-4 py-2.5 text-[11px] text-ink-500">
          Teacher views show academic and attendance context only.
        </div>
      </AppFrame>
    );
  }

  return (
    <AppFrame
      title="Fee Intelligence"
      breadcrumb={["School", "Fees"]}
      elevated={false}
      demoLabel="Demo data"
    >
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <span className="text-[11.5px] text-ink-500">Overdue by ageing</span>
          <span className="nh-num text-[11.5px] font-medium text-ink-800">
            37 accounts
          </span>
        </div>
        <BarChart
          className="mt-3"
          height={72}
          bars={[
            { label: "0-30", value: 14 },
            { label: "31-60", value: 11, tone: "attention" },
            { label: "61-90", value: 8, tone: "attention" },
            { label: "90+", value: 4, tone: "risk" },
          ]}
        />
      </div>
      <div className="flex items-center gap-2 border-t border-ink-200 px-4 py-2.5">
        <StatusDot tone="risk" />
        <span className="text-[11.5px] text-ink-600">
          4 accounts past 90 days — recommend priority follow-up
        </span>
      </div>
    </AppFrame>
  );
}

/** Shared helper for the value section's numbered steps. */
export function StepCard({
  index,
  title,
  detail,
  className,
}: {
  index: number;
  title: string;
  detail: string;
  className?: string;
}) {
  return (
    <div className={cx("rounded-xl border border-ink-200 bg-white p-6", className)}>
      <span className="nh-num flex h-7 w-7 items-center justify-center rounded-full border border-cobalt-200 bg-cobalt-50 text-[12px] font-medium text-cobalt-700">
        {index}
      </span>
      <h3 className="mt-4 text-[17px] font-semibold text-ink-950">{title}</h3>
      <p className="mt-2 text-[14px] leading-relaxed text-ink-600">{detail}</p>
    </div>
  );
}
