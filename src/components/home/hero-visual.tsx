"use client";

import { useEffect, useState } from "react";
import { cx, DemoLabel } from "@/components/ui/primitives";
import { IconAi, IconArrow } from "@/components/ui/icons";
import { Sparkline, LineChart } from "@/components/product-ui/charts";
import { StatusDot, Tag } from "@/components/product-ui/shell";
import { usePrefersReducedMotion } from "@/components/ui/reveal";

/* The six stages of the NotifyHub intelligence pipeline. */
const STAGES = [
  { label: "Operational Data", note: "Workflows in use" },
  { label: "ERP", note: "Structured records" },
  { label: "Analytics & Signals", note: "Metrics, trends, thresholds" },
  { label: "AI Intelligence", note: "Interpreted in context" },
  { label: "Insights", note: "What changed and why" },
  { label: "Recommended Actions", note: "What to do next" },
];

const METRIC_FRAMES = [
  { collection: "82.4%", attendance: "91.2%", attention: "12", overdue: "37" },
  { collection: "81.9%", attendance: "90.6%", attention: "14", overdue: "41" },
  { collection: "83.1%", attendance: "91.8%", attention: "11", overdue: "35" },
];

const TREND_A = [58, 61, 60, 64, 67, 66, 70, 69, 73, 74, 72, 76];
const TREND_B = [60, 62, 63, 65, 66, 68, 70, 72, 74, 76, 78, 80];

export function HeroVisual() {
  const reduced = usePrefersReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setTick((t) => t + 1), 1250);
    return () => clearInterval(id);
  }, [reduced]);

  // With reduced motion the pipeline rests at its final stage and the
  // dashboard shows a single stable frame.
  const stage = reduced ? STAGES.length - 1 : tick % STAGES.length;
  const frame = reduced
    ? 0
    : Math.floor(tick / STAGES.length) % METRIC_FRAMES.length;

  const metrics = METRIC_FRAMES[frame];
  const insightVisible = reduced || stage >= 4;

  return (
    <div className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-[0_1px_2px_rgba(10,14,20,0.05),0_24px_64px_-28px_rgba(10,14,20,0.3)]">
      {/* Application title bar */}
      <div className="flex items-center gap-3 border-b border-ink-200 bg-ink-50/80 px-4 py-2.5">
        <div aria-hidden className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ink-300" />
          <span className="h-2 w-2 rounded-full bg-ink-200" />
          <span className="h-2 w-2 rounded-full bg-ink-200" />
        </div>
        <p className="min-w-0 flex-1 truncate text-[12px] font-medium text-ink-600">
          NotifyHub <span className="text-ink-300">/</span> Intelligence{" "}
          <span className="text-ink-300">/</span>{" "}
          <span className="text-ink-800">Overview</span>
        </p>
        <DemoLabel>Demo data</DemoLabel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[212px_minmax(0,1fr)_268px]">
        {/* Pipeline rail */}
        <div className="border-b border-ink-200 p-4 lg:border-r lg:border-b-0">
          <p className="nh-eyebrow mb-4 text-ink-400">Intelligence pipeline</p>

          <div className="relative pl-[18px]">
            <span
              aria-hidden
              className="absolute top-1 bottom-1 left-[4px] w-px bg-ink-200"
            />
            <span
              aria-hidden
              className="absolute left-[1.5px] h-[7px] w-[7px] rounded-full bg-cobalt-500 transition-[top] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{ top: `calc(${(stage + 0.5) * (100 / STAGES.length)}% - 3.5px)` }}
            />
            <ol className="space-y-[13px]">
              {STAGES.map((s, i) => {
                const active = i === stage;
                const passed = i < stage;
                return (
                  <li key={s.label} className="relative">
                    <span
                      aria-hidden
                      className={cx(
                        "absolute top-[6px] -left-[18px] h-[7px] w-[7px] rounded-full border transition-colors duration-500",
                        active
                          ? "border-cobalt-500 bg-cobalt-500"
                          : passed
                            ? "border-cobalt-300 bg-cobalt-200"
                            : "border-ink-300 bg-white",
                      )}
                    />
                    <p
                      className={cx(
                        "text-[12.5px] leading-tight font-medium transition-colors duration-500",
                        active ? "text-ink-950" : passed ? "text-ink-700" : "text-ink-400",
                      )}
                    >
                      {s.label}
                    </p>
                    <p
                      className={cx(
                        "mt-0.5 text-[10.5px] leading-tight transition-colors duration-500",
                        active ? "text-ink-500" : "text-ink-400",
                      )}
                    >
                      {s.note}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="border-b border-ink-200 lg:border-r lg:border-b-0">
          <div className="grid grid-cols-2 divide-x divide-ink-200 border-b border-ink-200 sm:grid-cols-4">
            <Metric
              label="Fee collection"
              value={metrics.collection}
              delta="1.8% vs. plan"
              tone="down"
              spark={TREND_A}
            />
            <Metric
              label="Attendance"
              value={metrics.attendance}
              delta="0.4% MoM"
              tone="down"
              spark={TREND_B}
            />
            <Metric
              label="Needs attention"
              value={metrics.attention}
              delta="students"
              tone="neutral"
            />
            <Metric
              label="Overdue accounts"
              value={metrics.overdue}
              delta="open"
              tone="neutral"
            />
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-[13px] font-semibold text-ink-900">
                  Collection performance
                </h3>
                <p className="mt-0.5 text-[11.5px] text-ink-500">
                  Actual against expected trend
                </p>
              </div>
              <div className="flex items-center gap-3 text-[10.5px] text-ink-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-[2px] w-4 rounded bg-cobalt-500" /> Actual
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-[2px] w-4 rounded bg-ink-300" /> Expected
                </span>
              </div>
            </div>

            <LineChart
              className="mt-4"
              height={132}
              labels={["Apr", "Jun", "Aug", "Oct", "Dec", "Feb"]}
              series={[
                { name: "Expected", values: TREND_B, color: "var(--color-ink-300)", dashed: true },
                { name: "Actual", values: TREND_A, color: "var(--color-cobalt-500)" },
              ]}
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink-200 px-4 py-2.5 text-[11.5px] text-ink-500">
            <span className="flex items-center gap-1.5">
              <StatusDot tone="attention" /> 3 classes below attendance threshold
            </span>
            <span className="flex items-center gap-1.5">
              <StatusDot tone="positive" /> Academic indicators stable
            </span>
          </div>
        </div>

        {/* Insight column */}
        <div className="p-4">
          <p className="nh-eyebrow mb-3 text-ink-400">Today&rsquo;s priorities</p>

          <div
            className={cx(
              "rounded-lg border border-cobalt-200 bg-gradient-to-b from-cobalt-50/80 to-white p-3.5 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
              insightVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
            )}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded border border-cobalt-200 bg-white text-cobalt-600">
                <IconAi className="h-3 w-3" />
              </span>
              <p className="nh-eyebrow text-cobalt-600">AI insight</p>
            </div>
            <p className="mt-2.5 text-[12.5px] leading-relaxed font-medium text-ink-900">
              Fee collection is trending below target in Grade 8.
            </p>
            <p className="mt-2 text-[11.5px] leading-relaxed text-ink-600">
              Overdue accounts increased over the last two cycles. Review the
              highest-risk accounts before the next collection date.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-[11.5px] font-medium text-cobalt-600">
              View details <IconArrow className="h-3 w-3" />
            </span>
          </div>

          <ul className="mt-3.5 space-y-2">
            {[
              { text: "Attendance declined across 3 classes", tag: "Review", tone: "attention" as const },
              { text: "12 students show patterns needing attention", tag: "Teachers", tone: "neutral" as const },
              { text: "Staff records complete for the term", tag: "Clear", tone: "positive" as const },
            ].map((item, i) => (
              <li
                key={item.text}
                className={cx(
                  "flex items-start justify-between gap-2 rounded-md border border-ink-200 px-3 py-2.5 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
                  insightVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                )}
                style={{ transitionDelay: insightVisible ? `${120 + i * 90}ms` : "0ms" }}
              >
                <span className="text-[11.5px] leading-snug text-ink-700">
                  {item.text}
                </span>
                <Tag tone={item.tone}>{item.tag}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Metric({
  label,
  value,
  delta,
  tone,
  spark,
}: {
  label: string;
  value: string;
  delta: string;
  tone: "up" | "down" | "neutral";
  spark?: number[];
}) {
  const toneClass =
    tone === "up"
      ? "text-positive-500"
      : tone === "down"
        ? "text-risk-500"
        : "text-ink-500";
  return (
    <div className="min-w-0 px-3.5 py-3">
      <p className="truncate text-[11px] font-medium text-ink-500">{label}</p>
      <p className="nh-num mt-1.5 text-[18px] leading-none font-semibold text-ink-950 transition-opacity duration-500">
        {value}
      </p>
      <div className="mt-1.5 flex items-end justify-between gap-2">
        <p className={cx("nh-num text-[10.5px] font-medium", toneClass)}>
          {tone === "up" ? "▲" : tone === "down" ? "▼" : ""} {delta}
        </p>
        {spark ? (
          <Sparkline values={spark} className="h-4 w-12 text-ink-300" />
        ) : null}
      </div>
    </div>
  );
}
