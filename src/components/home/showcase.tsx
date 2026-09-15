import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
  cx,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { AppFrame, KpiCard, StatusDot, Tag } from "@/components/product-ui/shell";
import { Sparkline, LineChart } from "@/components/product-ui/charts";
import { AskPanel, InsightPanel } from "@/components/product-ui/insight";
import { IconArrow } from "@/components/ui/icons";

/** Section 9 — the kind of interfaces NotifyHub builds. */
export function ProductShowcase() {
  return (
    <Section tone="subtle">
      <Container>
        <SectionHeading
          eyebrow="Product"
          title="Designed for decisions, not just data entry."
          lede="Operational software should answer the question a person actually opened it with. These are illustrative interfaces, not customer data."
        />

        <div className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-3">
          <Reveal className="lg:col-span-1">
            <ExecutiveView />
          </Reveal>

          <Reveal delay={80}>
            <InsightPanel
              className="h-full"
              title="Fee Collection Insight"
              whatChanged="Collection performance for this period is below the expected trend."
              whyItMatters="Several accounts are showing increasing overdue patterns."
              recommendedAction="Review the highest-risk accounts and prioritize follow-up before the next collection cycle."
            />
          </Reveal>

          <Reveal delay={160}>
            <AskPanel
              className="h-full"
              question="Which classes need attention this week?"
              answer="3 classes may require attention"
              signals={[
                { label: "Attendance trend", value: "Declining", tone: "risk" },
                { label: "Academic trend", value: "Flat", tone: "attention" },
                { label: "Recent changes", value: "2 this week", tone: "neutral" },
              ]}
              cta={
                <ButtonLink href="/ai" variant="secondary" size="sm" className="w-full">
                  View insights
                  <IconArrow className="h-3.5 w-3.5" />
                </ButtonLink>
              }
            />
          </Reveal>
        </div>

        <p className="mt-6 text-[12.5px] text-ink-500">
          Natural-language questions are one capability inside the ERP. Answers
          resolve to the same structured records and signals the rest of the
          product uses.
        </p>
      </Container>
    </Section>
  );
}

function ExecutiveView() {
  return (
    <AppFrame
      title="Executive view"
      breadcrumb={["School", "Overview"]}
      className="h-full"
      elevated={false}
      footer="Signals refresh with the operational data behind them."
    >
      <div className="grid grid-cols-2 divide-x divide-ink-200 border-b border-ink-200">
        <KpiCard
          label="Fee collection"
          value="82.4%"
          delta="1.8% vs. plan"
          deltaTone="down"
          spark={<Sparkline values={[88, 86, 85, 84, 83, 82]} className="h-5 w-full text-ink-300" />}
        />
        <KpiCard
          label="Attendance"
          value="91.2%"
          delta="0.4% MoM"
          deltaTone="down"
          spark={<Sparkline values={[93, 92, 92, 91, 92, 91]} className="h-5 w-full text-ink-300" />}
        />
      </div>

      <div className="p-4">
        <p className="nh-eyebrow mb-3 text-ink-400">Today&rsquo;s priorities</p>
        <ul className="space-y-2">
          {[
            {
              text: "Fee collection is trending below target in Grade 8.",
              tone: "risk" as const,
              tag: "Fees",
            },
            {
              text: "Attendance has declined across 3 classes this month.",
              tone: "attention" as const,
              tag: "Attendance",
            },
            {
              text: "12 students show patterns that may require attention.",
              tone: "attention" as const,
              tag: "Students",
            },
          ].map((item) => (
            <li
              key={item.text}
              className="flex items-start gap-2.5 rounded-md border border-ink-200 px-3 py-2.5"
            >
              <StatusDot tone={item.tone} className="mt-1.5" />
              <span className="flex-1 text-[12.5px] leading-snug text-ink-700">
                {item.text}
              </span>
              <Tag tone="neutral">{item.tag}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-4 rounded-md border border-ink-200 p-3">
          <div className="flex items-center justify-between">
            <p className="text-[12px] font-semibold text-ink-900">
              Operational trend
            </p>
            <span className="text-[10.5px] text-ink-400">Last 6 periods</span>
          </div>
          <LineChart
            className="mt-2.5"
            height={86}
            showGrid={false}
            series={[
              {
                name: "Expected",
                values: [60, 62, 64, 66, 68, 70],
                color: "var(--color-ink-300)",
                dashed: true,
              },
              {
                name: "Actual",
                values: [61, 60, 63, 62, 61, 59],
                color: "var(--color-cobalt-500)",
              },
            ]}
          />
        </div>
      </div>
    </AppFrame>
  );
}

/** Section 10 — AI capabilities. */
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
    detail:
      "Suggest practical next actions based on the organization's context.",
  },
];

export function AiCapabilities() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="AI Intelligence"
              title="AI that understands your operations."
              lede="NotifyHub AI is designed to work with the operational context of the organization — not simply generate text."
            />

            <ol className="mt-10 space-y-px overflow-hidden rounded-lg border border-ink-200 bg-ink-200">
              {CAPABILITIES.map((c, i) => (
                <li key={c.name} className="bg-white px-5 py-4">
                  <div className="flex items-baseline gap-3">
                    <span className="nh-num text-[11px] font-medium text-cobalt-600">
                      0{i + 1}
                    </span>
                    <h3 className="text-[15px] font-semibold text-ink-950">
                      {c.name}
                    </h3>
                  </div>
                  <p className="mt-1.5 pl-[26px] text-[13.5px] leading-relaxed text-ink-600">
                    {c.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <Reveal className="lg:pt-10">
            <CapabilityDiagram />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

function CapabilityDiagram() {
  const rows = [
    {
      stage: "Understand",
      input: "Students · Invoices · Attendance · Staff",
      output: "Entities and relationships resolved",
      tone: "neutral" as const,
    },
    {
      stage: "Detect",
      input: "Collection rate vs. expected trend",
      output: "Deviation identified in Grade 8",
      tone: "attention" as const,
    },
    {
      stage: "Explain",
      input: "Overdue accounts, payment history",
      output: "Two cycles of increasing overdue balances",
      tone: "attention" as const,
    },
    {
      stage: "Recommend",
      input: "Priority accounts, next collection date",
      output: "Follow up before the next cycle",
      tone: "risk" as const,
    },
  ];

  return (
    <AppFrame
      title="Reasoning trace"
      breadcrumb={["Intelligence", "How a finding is produced"]}
      demoLabel="Example"
      footer="Deterministic analytics produce every number. AI interprets and explains them."
    >
      <ol className="divide-y divide-ink-100">
        {rows.map((r, i) => (
          <li key={r.stage} className="px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <span className="nh-num flex h-5 w-5 items-center justify-center rounded-full border border-ink-200 text-[10px] font-medium text-ink-500">
                {i + 1}
              </span>
              <span className="text-[12.5px] font-semibold text-ink-950">
                {r.stage}
              </span>
            </div>
            <div className="mt-2.5 grid gap-2 pl-[30px] grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:items-center">
              <span className="rounded border border-ink-200 bg-ink-50 px-2.5 py-1.5 text-[11.5px] text-ink-600">
                {r.input}
              </span>
              <IconArrow className="hidden h-3.5 w-3.5 text-ink-300 sm:block" />
              <span
                className={cx(
                  "rounded border px-2.5 py-1.5 text-[11.5px] font-medium",
                  r.tone === "risk"
                    ? "border-risk-500/25 bg-risk-50 text-risk-700"
                    : r.tone === "attention"
                      ? "border-attention-500/25 bg-attention-50 text-attention-700"
                      : "border-cobalt-200 bg-cobalt-50 text-cobalt-700",
                )}
              >
                {r.output}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </AppFrame>
  );
}
