import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { IconArrow } from "./icons";

export const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

/* ---------- Layout ---------------------------------------------------- */

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  tone = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "subtle" | "dark";
  id?: string;
}) {
  const tones = {
    light: "bg-white text-ink-900",
    subtle: "bg-ink-50 text-ink-900",
    dark: "bg-ink-950 text-ink-100",
  };
  return (
    <section
      id={id}
      className={cx(
        "relative border-t py-20 sm:py-24 lg:py-28",
        tone === "dark" ? "border-white/10" : "border-ink-200",
        tones[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}

/* ---------- Typography ------------------------------------------------ */

export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cx(
        "nh-eyebrow mb-4 flex items-center gap-2.5",
        tone === "dark" ? "text-cobalt-300" : "text-cobalt-600",
        className,
      )}
    >
      <span
        aria-hidden
        className={cx(
          "inline-block h-px w-6",
          tone === "dark" ? "bg-cobalt-400/60" : "bg-cobalt-300",
        )}
      />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = "light",
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cx(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone} className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cx(
          "text-[1.75rem] leading-[1.15] font-semibold sm:text-4xl lg:text-[2.6rem]",
          tone === "dark" ? "text-white" : "text-ink-950",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <div
          className={cx(
            "mt-5 text-base leading-relaxed sm:text-[1.0625rem]",
            tone === "dark" ? "text-ink-300" : "text-ink-600",
          )}
        >
          {lede}
        </div>
      ) : null}
      {children}
    </div>
  );
}

/* ---------- Actions --------------------------------------------------- */

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[background-color,border-color,color,box-shadow] duration-150 whitespace-nowrap disabled:opacity-50";

const buttonVariants: Record<ButtonVariant, string> = {
  primary:
    "bg-cobalt-600 text-white hover:bg-cobalt-700 shadow-[0_1px_2px_rgba(10,14,20,0.16)]",
  secondary:
    "border border-ink-300 bg-white text-ink-800 hover:border-ink-400 hover:bg-ink-50",
  ghost: "text-ink-700 hover:bg-ink-100",
  inverse:
    "border border-white/25 bg-white/5 text-white hover:border-white/45 hover:bg-white/10",
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-[13px]",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-[15px]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const cls = cx(buttonBase, buttonVariants[variant], buttonSizes[size], className);

  if (isExternal) {
    return (
      <a href={href} className={cls} rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const isExternal = /^https?:\/\//.test(href);
  const cls = cx(
    "group inline-flex items-center gap-1.5 text-sm font-medium transition-colors",
    tone === "dark"
      ? "text-cobalt-300 hover:text-cobalt-200"
      : "text-cobalt-600 hover:text-cobalt-700",
    className,
  );
  const inner = (
    <>
      {children}
      <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </>
  );
  return isExternal ? (
    <a href={href} className={cls} rel="noopener">
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* ---------- Status ---------------------------------------------------- */

export function StatusPill({
  status,
  label,
  tone = "light",
  className,
}: {
  status: "available" | "coming-soon" | "future";
  label?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const text =
    label ??
    (status === "available"
      ? "Available"
      : status === "coming-soon"
        ? "Coming soon"
        : "Exploring");

  const dot =
    status === "available"
      ? "bg-positive-500"
      : status === "coming-soon"
        ? "bg-attention-500"
        : "bg-ink-400";

  return (
    <span
      className={cx(
        "nh-eyebrow inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1",
        tone === "dark"
          ? "border-white/15 bg-white/5 text-ink-300"
          : "border-ink-200 bg-white text-ink-600",
        className,
      )}
    >
      <span aria-hidden className={cx("h-1.5 w-1.5 rounded-full", dot)} />
      {text}
    </span>
  );
}

/** Marks every mocked interface on the site as illustrative, never as a customer metric. */
export function DemoLabel({
  children = "Demo data",
  tone = "light",
  className,
}: {
  children?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "nh-eyebrow inline-flex items-center gap-1.5 rounded border px-1.5 py-1",
        tone === "dark"
          ? "border-white/15 bg-white/5 text-ink-400"
          : "border-ink-200 bg-ink-50 text-ink-500",
        className,
      )}
    >
      <span aria-hidden className="h-1 w-1 rounded-full bg-current opacity-60" />
      {children}
    </span>
  );
}

/* ---------- Surfaces -------------------------------------------------- */

export function Card({
  children,
  className,
  tone = "light",
  interactive,
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "dark";
  interactive?: boolean;
}) {
  return (
    <div
      className={cx(
        "rounded-lg border",
        tone === "dark"
          ? "border-white/10 bg-white/[0.03]"
          : "border-ink-200 bg-white",
        interactive &&
          (tone === "dark"
            ? "transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.06]"
            : "transition-[border-color,box-shadow] duration-200 hover:border-ink-300 hover:shadow-[0_1px_3px_rgba(10,14,20,0.06)]"),
        className,
      )}
    >
      {children}
    </div>
  );
}
