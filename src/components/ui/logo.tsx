import Link from "next/link";
import { cx } from "./primitives";

/**
 * NotifyHub mark: two interlocking halves of an N — the navy half and the
 * green half meeting at the centre. Flat geometry, no gradients, no glow.
 *
 * On dark surfaces the navy half is reversed to white, because brand navy
 * against ink-950 is effectively invisible. The green half is unchanged in
 * both tones, so the mark reads as the same logo either way.
 */
export function LogoMark({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 520 545"
      className={cx("h-7 w-7", className)}
      role="img"
      aria-hidden
      focusable="false"
    >
      <polygon
        points="0,0 0,545 247,545 247,358 164,269 164,470 89,470 88,103 92,101 225,251 332,250 127,0"
        fill={tone === "dark" ? "#ffffff" : "#143359"}
      />
      <polygon
        points="312,0 312,174 376,249 376,70 449,70 449,413 337,294 237,295 462,545 520,545 520,0"
        fill="#80c43d"
      />
    </svg>
  );
}

/**
 * The NotifyHub.ai wordmark. "Hub" carries the brand green in both tones;
 * ".ai" stays muted so the company name reads first.
 */
export function Wordmark({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cx(
        "text-[15px] font-semibold tracking-[-0.02em]",
        tone === "dark" ? "text-white" : "text-ink-950",
        className,
      )}
    >
      Notify
      <span className="text-brand-green">Hub</span>
      <span className={tone === "dark" ? "text-ink-500" : "text-ink-400"}>
        .ai
      </span>
    </span>
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
      <LogoMark tone={tone} />
      <Wordmark tone={tone} />
    </Link>
  );
}
