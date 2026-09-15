import Link from "next/link";
import { cx } from "./primitives";

/**
 * NotifyHub mark: a hub node with three vertical branches resolving into
 * one signal. Geometric, flat, no glow.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      className={cx("h-7 w-7", className)}
      fill="none"
      aria-hidden
    >
      <rect
        x="0.75"
        y="0.75"
        width="26.5"
        height="26.5"
        rx="6.5"
        className="fill-ink-950"
      />
      <path
        d="M8 19.5V9.5l6 6.2V9.5"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-white"
      />
      <path
        d="M17.4 9.5v10"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        className="text-cobalt-400"
      />
      <circle cx="20.9" cy="11.4" r="1.6" className="fill-cobalt-400" />
    </svg>
  );
}

export function Logo({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cx(
        "group inline-flex items-center gap-2.5 rounded-sm",
        className,
      )}
      aria-label="NotifyHub.ai — home"
    >
      <LogoMark />
      <span
        className={cx(
          "text-[15px] font-semibold tracking-[-0.02em]",
          tone === "dark" ? "text-white" : "text-ink-950",
        )}
      >
        NotifyHub
        <span className={tone === "dark" ? "text-ink-500" : "text-ink-400"}>
          .ai
        </span>
      </span>
    </Link>
  );
}
