import { cx } from "@/components/ui/primitives";

/* Inline SVG chart primitives. Deterministic, server-rendered, no chart library. */

function toPoints(values: number[], width: number, height: number, pad = 2) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const stepX = values.length > 1 ? (width - pad * 2) / (values.length - 1) : 0;
  return values.map((v, i) => {
    const x = pad + i * stepX;
    const y = pad + (height - pad * 2) * (1 - (v - min) / span);
    return [x, y] as const;
  });
}

function smoothPath(points: readonly (readonly [number, number])[]) {
  if (points.length === 0) return "";
  if (points.length === 1) return `M${points[0][0]},${points[0][1]}`;
  let d = `M${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i += 1) {
    const [px, py] = points[i - 1];
    const [x, y] = points[i];
    const cx1 = px + (x - px) / 2;
    d += ` C${cx1},${py} ${cx1},${y} ${x},${y}`;
  }
  return d;
}

export function Sparkline({
  values,
  className,
  stroke = "currentColor",
  width = 96,
  height = 28,
  fill,
}: {
  values: number[];
  className?: string;
  stroke?: string;
  width?: number;
  height?: number;
  fill?: string;
}) {
  const pts = toPoints(values, width, height, 2);
  const d = smoothPath(pts);
  const area = `${d} L${pts[pts.length - 1][0]},${height} L${pts[0][0]},${height} Z`;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cx("overflow-visible", className)}
      preserveAspectRatio="none"
      aria-hidden
    >
      {fill ? <path d={area} fill={fill} /> : null}
      <path
        d={d}
        fill="none"
        stroke={stroke}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export function LineChart({
  series,
  labels,
  height = 150,
  className,
  showGrid = true,
}: {
  series: { name: string; values: number[]; color: string; dashed?: boolean }[];
  labels?: string[];
  height?: number;
  className?: string;
  showGrid?: boolean;
}) {
  const width = 320;
  const all = series.flatMap((s) => s.values);
  const min = Math.min(...all);
  const max = Math.max(...all);
  const span = max - min || 1;
  const pad = 6;

  const project = (values: number[]) =>
    values.map((v, i) => {
      const x = pad + (i * (width - pad * 2)) / (values.length - 1 || 1);
      const y = pad + (height - pad * 2 - 16) * (1 - (v - min) / span);
      return [x, y] as const;
    });

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full"
        role="img"
        aria-label="Example trend chart"
        preserveAspectRatio="none"
      >
        {showGrid
          ? [0, 0.25, 0.5, 0.75, 1].map((t) => (
              <line
                key={t}
                x1={0}
                x2={width}
                y1={pad + (height - pad * 2 - 16) * t}
                y2={pad + (height - pad * 2 - 16) * t}
                stroke="currentColor"
                strokeWidth={1}
                className="text-ink-200"
                vectorEffect="non-scaling-stroke"
              />
            ))
          : null}
        {series.map((s) => {
          const pts = project(s.values);
          return (
            <g key={s.name}>
              <path
                d={smoothPath(pts)}
                fill="none"
                stroke={s.color}
                strokeWidth={1.8}
                strokeDasharray={s.dashed ? "4 4" : undefined}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              {!s.dashed ? (
                <circle
                  cx={pts[pts.length - 1][0]}
                  cy={pts[pts.length - 1][1]}
                  r={2.6}
                  fill={s.color}
                />
              ) : null}
            </g>
          );
        })}
      </svg>
      {labels ? (
        <div className="nh-num mt-2 flex justify-between text-[10px] text-ink-400">
          {labels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function BarChart({
  bars,
  className,
  height = 108,
}: {
  bars: { label: string; value: number; tone?: "base" | "attention" | "risk" | "positive" }[];
  className?: string;
  height?: number;
}) {
  const max = Math.max(...bars.map((b) => b.value)) || 1;
  const tones = {
    base: "bg-cobalt-500",
    attention: "bg-attention-500",
    risk: "bg-risk-500",
    positive: "bg-positive-500",
  };
  return (
    <div className={className}>
      <div className="flex items-stretch gap-1.5" style={{ height }}>
        {bars.map((b) => (
          <div key={b.label} className="flex h-full flex-1 flex-col justify-end">
            <div
              className={cx("w-full rounded-t-[2px]", tones[b.tone ?? "base"])}
              style={{ height: `${Math.max(6, (b.value / max) * 100)}%` }}
            />
          </div>
        ))}
      </div>
      <div className="nh-num mt-2 flex gap-1.5 text-[10px] text-ink-400">
        {bars.map((b) => (
          <span key={b.label} className="flex-1 text-center">
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ProgressBar({
  value,
  target,
  tone = "base",
  className,
}: {
  value: number;
  target?: number;
  tone?: "base" | "attention" | "risk" | "positive";
  className?: string;
}) {
  const tones = {
    base: "bg-cobalt-500",
    attention: "bg-attention-500",
    risk: "bg-risk-500",
    positive: "bg-positive-500",
  };
  return (
    <div className={cx("relative h-1.5 w-full rounded-full bg-ink-100", className)}>
      <div
        className={cx("h-full rounded-full", tones[tone])}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
      {typeof target === "number" ? (
        <span
          aria-hidden
          className="absolute top-[-3px] h-[12px] w-px bg-ink-400"
          style={{ left: `${Math.min(100, Math.max(0, target))}%` }}
        />
      ) : null}
    </div>
  );
}

export function DonutGauge({
  value,
  size = 64,
  tone = "base",
  label,
}: {
  value: number;
  size?: number;
  tone?: "base" | "attention" | "risk" | "positive";
  label?: string;
}) {
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const colors = {
    base: "var(--color-cobalt-500)",
    attention: "var(--color-attention-500)",
    risk: "var(--color-risk-500)",
    positive: "var(--color-positive-500)",
  };
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} aria-hidden className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={5}
          className="stroke-ink-100"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          strokeWidth={5}
          strokeLinecap="round"
          stroke={colors[tone]}
          strokeDasharray={c}
          strokeDashoffset={c - (c * Math.min(100, value)) / 100}
        />
      </svg>
      <span className="nh-num absolute text-[13px] font-semibold text-ink-900">
        {label ?? `${value}%`}
      </span>
    </div>
  );
}
