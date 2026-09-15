import { PRODUCTS, STATUS_LABEL } from "@/lib/products";
import { PRODUCT_ICONS } from "@/components/ui/icons";
import { StatusPill, cx } from "@/components/ui/primitives";

const PLATFORM_CAPABILITIES = [
  "Identity",
  "Organizations",
  "Roles & permissions",
  "Multi-tenant architecture",
  "Workflow engine",
  "Data platform",
  "Analytics",
  "AI intelligence",
  "Auditability",
  "Integrations",
  "Billing",
];

function Connector({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div aria-hidden className="flex justify-center py-3">
      <span
        className={cx(
          "block h-8 w-px",
          tone === "dark"
            ? "bg-gradient-to-b from-white/10 via-white/25 to-white/10"
            : "bg-gradient-to-b from-ink-200 via-ink-300 to-ink-200",
        )}
      />
    </div>
  );
}

function Band({
  label,
  children,
  tone = "light",
  accent,
}: {
  label: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  accent?: boolean;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cx(
        "rounded-xl border p-5 sm:p-6",
        dark
          ? accent
            ? "border-cobalt-500/35 bg-cobalt-500/[0.07]"
            : "border-white/12 bg-white/[0.03]"
          : accent
            ? "border-cobalt-200 bg-cobalt-50/60"
            : "border-ink-200 bg-white",
      )}
    >
      <p
        className={cx(
          "nh-eyebrow mb-4",
          dark ? (accent ? "text-cobalt-300" : "text-ink-500") : accent ? "text-cobalt-600" : "text-ink-400",
        )}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

/**
 * The brand and platform architecture: one company, one shared platform,
 * specialized products, one intelligence layer across all of them.
 */
export function PlatformArchitecture({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <div className={className}>
      {/* Brand */}
      <div
        className={cx(
          "mx-auto max-w-md rounded-xl border px-6 py-5 text-center",
          dark ? "border-white/15 bg-white/[0.04]" : "border-ink-300 bg-ink-950",
        )}
      >
        <p className="text-[17px] font-semibold text-white">NotifyHub.ai</p>
        <p className="mt-1 text-[12.5px] text-ink-400">
          AI software platform and company
        </p>
      </div>

      <Connector tone={tone} />

      {/* Products */}
      <Band label="Vertical products" tone={tone}>
        <ul className="grid gap-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
          {PRODUCTS.map((p) => {
            const Icon = PRODUCT_ICONS[p.icon];
            return (
              <li
                key={p.key}
                className={cx(
                  "rounded-lg border p-4",
                  dark ? "border-white/10 bg-ink-950" : "border-ink-200 bg-white",
                )}
              >
                <span
                  className={cx(
                    "flex h-8 w-8 items-center justify-center rounded-md border",
                    dark
                      ? "border-white/12 text-ink-300"
                      : "border-ink-200 bg-ink-50 text-ink-600",
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <p
                  className={cx(
                    "mt-3 text-[14px] font-semibold",
                    dark ? "text-white" : "text-ink-950",
                  )}
                >
                  {p.name}
                </p>
                <p
                  className={cx(
                    "mt-1 text-[11.5px]",
                    dark ? "text-ink-500" : "text-ink-500",
                  )}
                >
                  {p.sector}
                </p>
                <StatusPill
                  status={p.status}
                  label={STATUS_LABEL[p.status]}
                  tone={dark ? "dark" : "light"}
                  className="mt-3"
                />
              </li>
            );
          })}
        </ul>
      </Band>

      <Connector tone={tone} />

      {/* Industry workflows */}
      <Band label="Industry workflows" tone={tone}>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-3">
          {[
            { sector: "Education", detail: "Students, academics, attendance, fees, staff" },
            { sector: "Healthcare", detail: "Patients, admissions, departments, billing" },
            { sector: "Hospitality", detail: "Orders, sales, inventory, staff, customers" },
          ].map((w) => (
            <div
              key={w.sector}
              className={cx(
                "rounded-lg border px-4 py-3.5",
                dark ? "border-white/10 bg-ink-950" : "border-ink-200 bg-ink-50",
              )}
            >
              <p
                className={cx(
                  "text-[13.5px] font-semibold",
                  dark ? "text-white" : "text-ink-950",
                )}
              >
                {w.sector}
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-ink-500">
                {w.detail}
              </p>
            </div>
          ))}
        </div>
      </Band>

      <Connector tone={tone} />

      {/* Common platform */}
      <Band label="Common platform layer" tone={tone}>
        <ul className="flex flex-wrap gap-2">
          {PLATFORM_CAPABILITIES.map((c) => (
            <li
              key={c}
              className={cx(
                "rounded-md border px-3 py-1.5 text-[12.5px]",
                dark
                  ? "border-white/12 bg-ink-950 text-ink-300"
                  : "border-ink-200 bg-ink-50 text-ink-700",
              )}
            >
              {c}
            </li>
          ))}
        </ul>
      </Band>

      <Connector tone={tone} />

      {/* AI layer */}
      <Band label="AI intelligence" tone={tone} accent>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {["Understand", "Detect", "Explain", "Recommend"].map((s, i) => (
            <span key={s} className="flex items-center gap-3">
              {i > 0 ? (
                <span aria-hidden className="text-ink-400">
                  →
                </span>
              ) : null}
              <span
                className={cx(
                  "rounded-md border px-3 py-1.5 text-[13px] font-medium",
                  dark
                    ? "border-cobalt-500/30 bg-ink-950 text-cobalt-200"
                    : "border-cobalt-200 bg-white text-cobalt-700",
                )}
              >
                {s}
              </span>
            </span>
          ))}
          <span aria-hidden className="text-ink-400">
            →
          </span>
          <span
            className={cx(
              "rounded-md border px-3 py-1.5 text-[13px] font-semibold",
              dark
                ? "border-white/15 bg-white/10 text-white"
                : "border-ink-300 bg-ink-950 text-white",
            )}
          >
            Action
          </span>
        </div>
        <p
          className={cx(
            "mt-4 text-[12.5px] leading-relaxed",
            dark ? "text-ink-400" : "text-ink-600",
          )}
        >
          One intelligence layer serves every vertical. Each product contributes
          its own operational data and receives insight in its own language.
        </p>
      </Band>
    </div>
  );
}

/* ---------- Section 16: AI architecture layers ------------------------- */

export const AI_LAYERS = [
  {
    index: "1",
    title: "Operational Data",
    detail: "Structured ERP and transactional data.",
    examples: ["Students", "Invoices", "Attendance", "Staff", "Departments"],
  },
  {
    index: "2",
    title: "Deterministic Intelligence",
    detail:
      "Metrics, rules, calculations, thresholds, trends, anomalies, and risk scoring.",
    examples: ["Collection rate", "Ageing buckets", "Variance vs. expected", "Risk score"],
  },
  {
    index: "3",
    title: "AI Reasoning",
    detail:
      "AI interprets the signals, explains findings, summarizes context, and generates recommendations.",
    examples: ["What changed", "Why it matters", "Recommended action"],
  },
  {
    index: "4",
    title: "Knowledge Layer",
    detail:
      "Optional retrieval capabilities for institutional documents and other unstructured organizational knowledge.",
    examples: ["Policies", "Handbooks", "Standard procedures"],
  },
];

export const AI_PIPELINE = [
  "Operational Data",
  "Analytics / Rules / Signals",
  "Risk & Intelligence Engine",
  "AI Reasoning",
  "Contextual Insights",
  "Recommended Actions",
];

export function AiArchitecture({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="grid gap-10 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,340px)] lg:gap-14">
      <ol className="space-y-3">
        {AI_LAYERS.map((layer) => (
          <li
            key={layer.title}
            className={cx(
              "rounded-xl border p-5",
              dark ? "border-white/10 bg-white/[0.03]" : "border-ink-200 bg-white",
            )}
          >
            <div className="flex items-baseline gap-3">
              <span
                className={cx(
                  "nh-num text-[11px] font-medium",
                  dark ? "text-cobalt-300" : "text-cobalt-600",
                )}
              >
                {layer.index}
              </span>
              <h3
                className={cx(
                  "text-[16px] font-semibold",
                  dark ? "text-white" : "text-ink-950",
                )}
              >
                {layer.title}
              </h3>
            </div>
            <p
              className={cx(
                "mt-2 pl-[22px] text-[13.5px] leading-relaxed",
                dark ? "text-ink-400" : "text-ink-600",
              )}
            >
              {layer.detail}
            </p>
            <ul className="mt-3 flex flex-wrap gap-1.5 pl-[22px]">
              {layer.examples.map((e) => (
                <li
                  key={e}
                  className={cx(
                    "rounded border px-2 py-1 text-[11px]",
                    dark
                      ? "border-white/10 bg-ink-950 text-ink-400"
                      : "border-ink-200 bg-ink-50 text-ink-600",
                  )}
                >
                  {e}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div>
        <div
          className={cx(
            "rounded-xl border p-5",
            dark ? "border-white/10 bg-white/[0.03]" : "border-ink-200 bg-white",
          )}
        >
          <p
            className={cx(
              "nh-eyebrow mb-5",
              dark ? "text-ink-500" : "text-ink-400",
            )}
          >
            Processing order
          </p>
          <ol className="relative">
            <span
              aria-hidden
              className={cx(
                "absolute top-2 bottom-2 left-[5px] w-px",
                dark ? "bg-white/12" : "bg-ink-200",
              )}
            />
            {AI_PIPELINE.map((step, i) => (
              <li key={step} className="relative pb-5 pl-7 last:pb-0">
                <span
                  aria-hidden
                  className={cx(
                    "absolute top-[5px] left-0 h-[11px] w-[11px] rounded-full border",
                    i === AI_PIPELINE.length - 1
                      ? dark
                        ? "border-cobalt-400 bg-cobalt-400"
                        : "border-cobalt-500 bg-cobalt-500"
                      : dark
                        ? "border-white/25 bg-ink-950"
                        : "border-ink-300 bg-white",
                  )}
                />
                <span
                  className={cx(
                    "text-[13.5px] font-medium",
                    dark ? "text-ink-200" : "text-ink-800",
                  )}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <p
          className={cx(
            "mt-5 rounded-lg border px-4 py-3.5 text-[12.5px] leading-relaxed",
            dark
              ? "border-white/10 bg-white/[0.02] text-ink-400"
              : "border-ink-200 bg-ink-50 text-ink-600",
          )}
        >
          A language model never performs a calculation that can be computed
          deterministically, and never acts on a business decision without the
          rules and permissions that govern it.
        </p>
      </div>
    </div>
  );
}
