"use client";

import { useState, type ReactNode } from "react";
import { cx, DemoLabel } from "@/components/ui/primitives";
import { IconAi, IconChevron, IconSearch } from "@/components/ui/icons";
import { StatusDot, Tag } from "./shell";

/**
 * The AI insight panel. Three fixed parts — what changed, why it matters,
 * recommended action — so an insight is always explainable and never a
 * bare assertion.
 */
export function InsightPanel({
  title,
  whatChanged,
  whyItMatters,
  recommendedAction,
  signals,
  className,
  demoLabel = "Example insight",
}: {
  title: string;
  whatChanged: string;
  whyItMatters: string;
  recommendedAction: string;
  signals?: { label: string; value: string; tone?: "positive" | "attention" | "risk" | "neutral" }[];
  className?: string;
  demoLabel?: string | false;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cx(
        "overflow-hidden rounded-lg border border-ink-200 bg-white",
        className,
      )}
    >
      <div className="flex items-start gap-3 border-b border-ink-100 bg-gradient-to-b from-cobalt-50/70 to-white px-4 py-3">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-cobalt-200 bg-white text-cobalt-600">
          <IconAi className="h-3.5 w-3.5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="nh-eyebrow text-cobalt-600">AI insight</p>
          <h4 className="mt-1.5 text-[13.5px] font-semibold text-ink-950">{title}</h4>
        </div>
        {demoLabel ? <DemoLabel>{demoLabel}</DemoLabel> : null}
      </div>

      <dl className="divide-y divide-ink-100">
        <Row term="What changed" detail={whatChanged} />
        <Row term="Why it matters" detail={whyItMatters} />
        <Row term="Recommended action" detail={recommendedAction} accent />
      </dl>

      <div className="border-t border-ink-100">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between px-4 py-2.5 text-[12.5px] font-medium text-cobalt-600 transition-colors hover:bg-cobalt-50/60"
        >
          <span>{open ? "Hide details" : "View details"}</span>
          <IconChevron
            className={cx(
              "h-4 w-4 transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </button>

        <div
          className={cx(
            "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="border-t border-ink-100 bg-ink-50/60 px-4 py-3">
              <p className="nh-eyebrow mb-2.5 text-ink-500">Supporting signals</p>
              <ul className="space-y-2">
                {(signals ?? DEFAULT_SIGNALS).map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between gap-3 text-[12px]"
                  >
                    <span className="flex items-center gap-2 text-ink-600">
                      <StatusDot tone={s.tone ?? "neutral"} />
                      {s.label}
                    </span>
                    <span className="nh-num font-medium text-ink-800">{s.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-ink-200 pt-2.5 text-[11px] text-ink-400">
                Signals are produced by deterministic analytics. AI explains them
                and proposes an action; it does not compute them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DEFAULT_SIGNALS = [
  { label: "Collection rate vs. expected trend", value: "Below", tone: "attention" as const },
  { label: "Accounts moving into overdue", value: "Increasing", tone: "risk" as const },
  { label: "Period compared", value: "Last 30 days", tone: "neutral" as const },
];

function Row({
  term,
  detail,
  accent,
}: {
  term: string;
  detail: string;
  accent?: boolean;
}) {
  return (
    <div className="px-4 py-3">
      <dt className="nh-eyebrow text-ink-400">{term}</dt>
      <dd
        className={cx(
          "mt-1.5 text-[13px] leading-relaxed",
          accent ? "font-medium text-ink-900" : "text-ink-600",
        )}
      >
        {detail}
      </dd>
    </div>
  );
}

/**
 * Natural-language query surface. Presented as one capability inside the ERP —
 * the answer resolves to structured signals, not free-form chat.
 */
export function AskPanel({
  question,
  answer,
  signals,
  cta,
  className,
}: {
  question: string;
  answer: string;
  signals: { label: string; value: string; tone?: "positive" | "attention" | "risk" | "neutral" }[];
  cta?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "overflow-hidden rounded-lg border border-ink-200 bg-white",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-ink-100 px-4 py-2.5">
        <p className="text-[12px] font-medium text-ink-600">Ask about your institution</p>
        <DemoLabel>Example</DemoLabel>
      </div>

      <div className="px-4 py-3.5">
        <div className="flex items-center gap-2.5 rounded-md border border-ink-200 bg-ink-50/70 px-3 py-2">
          <IconSearch className="h-4 w-4 shrink-0 text-ink-400" />
          <span className="truncate text-[13px] text-ink-800">{question}</span>
        </div>

        <div className="mt-3.5 rounded-md border border-ink-200">
          <div className="flex items-center gap-2 border-b border-ink-100 px-3 py-2.5">
            <StatusDot tone="attention" />
            <span className="text-[13px] font-semibold text-ink-950">{answer}</span>
          </div>
          <ul className="divide-y divide-ink-100">
            {signals.map((s) => (
              <li
                key={s.label}
                className="flex items-center justify-between gap-3 px-3 py-2 text-[12px]"
              >
                <span className="text-ink-600">{s.label}</span>
                <Tag tone={s.tone === "neutral" ? "neutral" : (s.tone ?? "neutral")}>
                  {s.value}
                </Tag>
              </li>
            ))}
          </ul>
        </div>

        {cta ? <div className="mt-3.5">{cta}</div> : null}
      </div>
    </div>
  );
}
