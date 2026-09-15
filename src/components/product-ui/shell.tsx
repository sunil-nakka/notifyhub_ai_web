import type { ReactNode } from "react";
import { cx, DemoLabel } from "@/components/ui/primitives";

/* Enterprise application chrome used for every product mockup on the site. */

export function AppFrame({
  title,
  breadcrumb,
  tabs,
  activeTab,
  children,
  footer,
  className,
  demoLabel = "Demo data",
  elevated = true,
}: {
  title: string;
  breadcrumb?: string[];
  tabs?: string[];
  activeTab?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
  demoLabel?: string | false;
  elevated?: boolean;
}) {
  return (
    <div
      className={cx(
        "overflow-hidden rounded-xl border border-ink-200 bg-white",
        elevated && "shadow-[0_1px_2px_rgba(10,14,20,0.04),0_12px_40px_-16px_rgba(10,14,20,0.22)]",
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-ink-200 bg-ink-50/80 px-3.5 py-2.5">
        <div aria-hidden className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ink-300" />
          <span className="h-2 w-2 rounded-full bg-ink-200" />
          <span className="h-2 w-2 rounded-full bg-ink-200" />
        </div>
        <div className="min-w-0 flex-1 truncate text-[12px] font-medium text-ink-600">
          {breadcrumb ? (
            <span className="flex items-center gap-1.5">
              {breadcrumb.map((b, i) => (
                <span key={b} className="flex items-center gap-1.5">
                  {i > 0 ? (
                    <span aria-hidden className="text-ink-300">
                      /
                    </span>
                  ) : null}
                  <span className={i === breadcrumb.length - 1 ? "text-ink-800" : ""}>
                    {b}
                  </span>
                </span>
              ))}
            </span>
          ) : (
            title
          )}
        </div>
        {demoLabel ? <DemoLabel>{demoLabel}</DemoLabel> : null}
      </div>

      {tabs?.length ? (
        <div className="flex items-center gap-1 border-b border-ink-200 px-3 pt-2">
          {tabs.map((t) => (
            <span
              key={t}
              className={cx(
                "-mb-px border-b-2 px-2.5 pb-2 text-[12.5px]",
                t === (activeTab ?? tabs[0])
                  ? "border-cobalt-500 font-medium text-ink-900"
                  : "border-transparent text-ink-500",
              )}
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <div className="bg-white">{children}</div>

      {footer ? (
        <div className="border-t border-ink-200 bg-ink-50/60 px-4 py-2.5 text-[12px] text-ink-500">
          {footer}
        </div>
      ) : null}
    </div>
  );
}

export function PanelHeader({
  title,
  meta,
  action,
  className,
}: {
  title: ReactNode;
  meta?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("flex items-start justify-between gap-3", className)}>
      <div className="min-w-0">
        <h4 className="text-[13px] font-semibold tracking-[-0.01em] text-ink-900">
          {title}
        </h4>
        {meta ? <p className="mt-0.5 text-[11.5px] text-ink-500">{meta}</p> : null}
      </div>
      {action}
    </div>
  );
}

export function KpiCard({
  label,
  value,
  delta,
  deltaTone = "neutral",
  spark,
  note,
  className,
}: {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "up" | "down" | "neutral";
  spark?: ReactNode;
  note?: string;
  className?: string;
}) {
  const tone =
    deltaTone === "up"
      ? "text-positive-500"
      : deltaTone === "down"
        ? "text-risk-500"
        : "text-ink-500";
  return (
    <div className={cx("min-w-0 border-ink-200 px-3.5 py-3", className)}>
      <p className="truncate text-[11.5px] font-medium text-ink-500">{label}</p>
      <div className="mt-1.5 flex items-end justify-between gap-2">
        <div>
          <p className="nh-num text-[19px] leading-none font-semibold text-ink-950">
            {value}
          </p>
          {delta ? (
            <p className={cx("nh-num mt-1.5 text-[11.5px] font-medium whitespace-nowrap", tone)}>
              {deltaTone === "up" ? "▲ " : deltaTone === "down" ? "▼ " : ""}
              {delta}
            </p>
          ) : null}
        </div>
        {spark ? <div className="w-[74px] shrink-0 text-ink-300">{spark}</div> : null}
      </div>
      {note ? <p className="mt-1.5 text-[11px] text-ink-400">{note}</p> : null}
    </div>
  );
}

export function StatusDot({
  tone,
  className,
}: {
  tone: "positive" | "attention" | "risk" | "neutral";
  className?: string;
}) {
  const map = {
    positive: "bg-positive-500",
    attention: "bg-attention-500",
    risk: "bg-risk-500",
    neutral: "bg-ink-300",
  };
  return (
    <span aria-hidden className={cx("h-1.5 w-1.5 shrink-0 rounded-full", map[tone], className)} />
  );
}

export function Tag({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "positive" | "attention" | "risk" | "neutral" | "info";
}) {
  const map = {
    positive: "bg-positive-50 text-positive-700",
    attention: "bg-attention-50 text-attention-700",
    risk: "bg-risk-50 text-risk-700",
    neutral: "bg-ink-100 text-ink-600",
    info: "bg-cobalt-50 text-cobalt-700",
  };
  return (
    <span
      className={cx(
        "inline-flex items-center rounded px-1.5 py-0.5 text-[10.5px] font-medium",
        map[tone],
      )}
    >
      {children}
    </span>
  );
}

export function DataTable({
  columns,
  rows,
  className,
}: {
  columns: string[];
  rows: ReactNode[][];
  className?: string;
}) {
  return (
    <div className={cx("overflow-x-auto", className)}>
      <table className="w-full min-w-[340px] border-collapse text-left">
        <thead>
          <tr className="border-b border-ink-200">
            {columns.map((c, i) => (
              <th
                key={c}
                className={cx(
                  "px-3.5 py-2 text-[11px] font-medium tracking-[0.04em] text-ink-500 uppercase",
                  i > 0 && "text-right",
                )}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-ink-100 last:border-0">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={cx(
                    "px-3.5 py-2.5 text-[12.5px] text-ink-700",
                    ci > 0 && "nh-num text-right",
                    ci === 0 && "font-medium text-ink-900",
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FilterBar({ filters }: { filters: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {filters.map((f, i) => (
        <span
          key={f}
          className={cx(
            "rounded border px-2 py-1 text-[11.5px]",
            i === 0
              ? "border-ink-300 bg-ink-50 font-medium text-ink-800"
              : "border-ink-200 text-ink-500",
          )}
        >
          {f}
        </span>
      ))}
    </div>
  );
}
