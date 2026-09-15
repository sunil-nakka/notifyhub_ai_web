import type { ReactNode } from "react";
import {
  Container,
  Eyebrow,
  StatusPill,
  cx,
} from "@/components/ui/primitives";
import type { ProductStatus } from "@/lib/products";

export function PageHero({
  eyebrow,
  title,
  lede,
  status,
  statusLabel,
  actions,
  aside,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  status?: ProductStatus;
  statusLabel?: string;
  actions?: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      className={cx(
        "relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-20",
        dark ? "bg-ink-950" : "bg-white",
      )}
    >
      <div
        aria-hidden
        className={cx(
          "nh-fade-edges pointer-events-none absolute inset-0 opacity-60",
          dark ? "nh-grid-dark" : "nh-grid-light",
        )}
      />
      {!dark ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-cobalt-50/45 to-transparent"
        />
      ) : null}

      <Container className="relative">
        <div
          className={cx(
            aside
              ? "grid gap-10 grid-cols-1 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:items-center lg:gap-16"
              : "",
          )}
        >
          <div className={aside ? "" : "max-w-[720px]"}>
            {status ? (
              <StatusPill
                status={status}
                label={statusLabel}
                tone={dark ? "dark" : "light"}
                className="mb-5"
              />
            ) : null}
            {eyebrow ? <Eyebrow tone={dark ? "dark" : "light"}>{eyebrow}</Eyebrow> : null}

            <h1
              className={cx(
                "text-[2.1rem] leading-[1.08] font-semibold tracking-[-0.03em] sm:text-[2.9rem] lg:text-[3.2rem]",
                dark ? "text-white" : "text-ink-950",
              )}
            >
              {title}
            </h1>

            {lede ? (
              <div
                className={cx(
                  "mt-5 max-w-[620px] text-[1.0625rem] leading-relaxed",
                  dark ? "text-ink-400" : "text-ink-600",
                )}
              >
                {lede}
              </div>
            ) : null}

            {actions ? (
              <div className="mt-8 flex flex-wrap items-center gap-3">{actions}</div>
            ) : null}
          </div>

          {aside ? <div className="min-w-0">{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}

export function FeatureGrid({
  items,
  columns = 3,
  tone = "light",
}: {
  items: { title: string; detail: string }[];
  columns?: 2 | 3 | 4;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cx(
        "grid gap-x-8 gap-y-9",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        columns === 4 && "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {items.map((item) => (
        <div key={item.title}>
          <h3
            className={cx(
              "text-[15px] font-semibold",
              dark ? "text-white" : "text-ink-950",
            )}
          >
            {item.title}
          </h3>
          <p
            className={cx(
              "mt-2 text-[13.5px] leading-relaxed",
              dark ? "text-ink-400" : "text-ink-600",
            )}
          >
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

export function CapabilityList({
  items,
  tone = "light",
  columns = 2,
}: {
  items: string[];
  tone?: "light" | "dark";
  columns?: 1 | 2 | 3;
}) {
  const dark = tone === "dark";
  return (
    <ul
      className={cx(
        "grid gap-x-8 gap-y-3",
        columns === 2 && "sm:grid-cols-2",
        columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className={cx(
            "flex items-start gap-2.5 border-b pb-3 text-[14px]",
            dark ? "border-white/10 text-ink-300" : "border-ink-100 text-ink-700",
          )}
        >
          <span
            aria-hidden
            className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cobalt-500"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
