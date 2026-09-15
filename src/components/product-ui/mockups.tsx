import { cx } from "@/components/ui/primitives";
import { BarChart, LineChart, ProgressBar, Sparkline } from "./charts";
import { AppFrame, DataTable, KpiCard, StatusDot, Tag } from "./shell";

/* Compact, realistic dashboard previews. Every value is illustrative. */

function KpiRow({
  items,
}: {
  items: { label: string; value: string; delta?: string; tone?: "up" | "down" | "neutral"; spark?: number[] }[];
}) {
  return (
    <div className="grid divide-x divide-ink-200 border-b border-ink-200 grid-cols-1 sm:grid-cols-3">
      {items.map((k) => (
        <KpiCard
          key={k.label}
          label={k.label}
          value={k.value}
          delta={k.delta}
          deltaTone={k.tone}
          spark={k.spark ? <Sparkline values={k.spark} className="h-4 w-full text-ink-300" /> : undefined}
          className="border-b last:border-b-0 sm:border-b-0"
        />
      ))}
    </div>
  );
}

export function SchoolDashboard({ className }: { className?: string }) {
  return (
    <AppFrame
      title="School"
      breadcrumb={["School", "Institution Intelligence"]}
      tabs={["Overview", "Academics", "Attendance", "Fees"]}
      className={className}
      elevated={false}
    >
      <KpiRow
        items={[
          { label: "Attendance (month)", value: "91.2%", delta: "0.4% MoM", tone: "down", spark: [93, 92, 92, 91, 92, 91] },
          { label: "Fee collection", value: "82.4%", delta: "1.8% vs. plan", tone: "down", spark: [88, 86, 85, 84, 83, 82] },
          { label: "Students flagged", value: "12", delta: "needs review", tone: "neutral" },
        ]}
      />
      <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="text-[12.5px] font-semibold text-ink-900">
            Attendance by grade
          </p>
          <BarChart
            className="mt-3"
            height={92}
            bars={[
              { label: "5", value: 94 },
              { label: "6", value: 93 },
              { label: "7", value: 90, tone: "attention" },
              { label: "8", value: 86, tone: "risk" },
              { label: "9", value: 92 },
              { label: "10", value: 93 },
            ]}
          />
        </div>
        <div>
          <p className="text-[12.5px] font-semibold text-ink-900">
            Classes needing attention
          </p>
          <ul className="mt-3 space-y-2">
            {[
              { name: "Grade 8-A", note: "Attendance down 6%", tone: "risk" as const },
              { name: "Grade 7-C", note: "Attendance down 3%", tone: "attention" as const },
              { name: "Grade 8-B", note: "Fee overdue rising", tone: "attention" as const },
            ].map((r) => (
              <li
                key={r.name}
                className="flex items-center justify-between gap-2 rounded border border-ink-200 px-2.5 py-2"
              >
                <span className="flex items-center gap-2 text-[12px] font-medium text-ink-800">
                  <StatusDot tone={r.tone} />
                  {r.name}
                </span>
                <span className="text-[11px] text-ink-500">{r.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppFrame>
  );
}

export function CollegeDashboard({ className }: { className?: string }) {
  return (
    <AppFrame
      title="College"
      breadcrumb={["College", "Institution Overview"]}
      tabs={["Overview", "Departments", "Students", "Fees"]}
      className={className}
      elevated={false}
    >
      <KpiRow
        items={[
          { label: "Enrolled students", value: "1,284", delta: "42 this term", tone: "up", spark: [1180, 1205, 1230, 1250, 1270, 1284] },
          { label: "Fee outstanding", value: "₹18.4L", delta: "across 213 invoices", tone: "neutral" },
          { label: "Departments", value: "9", delta: "3 need review", tone: "neutral" },
        ]}
      />
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[12.5px] font-semibold text-ink-900">
            Department indicators
          </p>
          <span className="text-[11px] text-ink-400">Current semester</span>
        </div>
        <DataTable
          className="mt-2 -mx-3.5"
          columns={["Department", "Students", "Collection", "Trend"]}
          rows={[
            ["B.Com", "412", "88%", <Tag key="a" tone="positive">Stable</Tag>],
            ["B.Sc", "286", "81%", <Tag key="b" tone="attention">Watch</Tag>],
            ["BBA", "198", "74%", <Tag key="c" tone="risk">Review</Tag>],
            ["B.A", "233", "86%", <Tag key="d" tone="positive">Stable</Tag>],
          ]}
        />
      </div>
    </AppFrame>
  );
}

export function HospitalDashboard({ className }: { className?: string }) {
  return (
    <AppFrame
      title="Hospital"
      breadcrumb={["Hospital", "Operations"]}
      tabs={["Overview", "Admissions", "Departments", "Billing"]}
      className={className}
      demoLabel="Illustrative"
      elevated={false}
    >
      <KpiRow
        items={[
          { label: "Bed occupancy", value: "78%", delta: "4% WoW", tone: "up", spark: [70, 72, 74, 75, 77, 78] },
          { label: "Admissions today", value: "34", delta: "12 pending discharge", tone: "neutral" },
          { label: "Billing open", value: "₹6.2L", delta: "48 accounts", tone: "neutral" },
        ]}
      />
      <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="text-[12.5px] font-semibold text-ink-900">
            Occupancy by department
          </p>
          <ul className="mt-3 space-y-2.5">
            {[
              { name: "General ward", value: 82 },
              { name: "ICU", value: 91, tone: "attention" as const },
              { name: "Maternity", value: 64 },
              { name: "Day care", value: 55 },
            ].map((d) => (
              <li key={d.name}>
                <div className="flex items-center justify-between text-[11.5px]">
                  <span className="text-ink-700">{d.name}</span>
                  <span className="nh-num font-medium text-ink-800">{d.value}%</span>
                </div>
                <ProgressBar className="mt-1.5" value={d.value} tone={d.tone ?? "base"} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[12.5px] font-semibold text-ink-900">
            Discharge turnaround
          </p>
          <LineChart
            className="mt-3"
            height={100}
            labels={["Mon", "Wed", "Fri", "Sun"]}
            series={[
              { name: "Hours", values: [4.2, 4.0, 4.6, 4.4, 3.9, 3.7, 3.8], color: "var(--color-cobalt-500)" },
            ]}
          />
          <p className="mt-2 text-[11px] text-ink-400">
            Operational measure. Not a clinical indicator.
          </p>
        </div>
      </div>
    </AppFrame>
  );
}

export function RestaurantDashboard({ className }: { className?: string }) {
  return (
    <AppFrame
      title="Restaurant"
      breadcrumb={["Restaurant", "Daily Operations"]}
      tabs={["Today", "Sales", "Inventory", "Staff"]}
      className={className}
      demoLabel="Illustrative"
      elevated={false}
    >
      <KpiRow
        items={[
          { label: "Net sales", value: "₹1,42,800", delta: "6.4% WoW", tone: "up", spark: [110, 118, 124, 130, 136, 142] },
          { label: "Covers", value: "318", delta: "avg ticket ₹449", tone: "neutral" },
          { label: "Items low stock", value: "7", delta: "reorder due", tone: "neutral" },
        ]}
      />
      <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <p className="text-[12.5px] font-semibold text-ink-900">Sales by hour</p>
          <BarChart
            className="mt-3"
            height={92}
            bars={[
              { label: "12", value: 42 },
              { label: "14", value: 68 },
              { label: "16", value: 28 },
              { label: "18", value: 54 },
              { label: "20", value: 96 },
              { label: "22", value: 61 },
            ]}
          />
        </div>
        <div>
          <p className="text-[12.5px] font-semibold text-ink-900">Top items</p>
          <DataTable
            className="mt-2 -mx-3.5"
            columns={["Item", "Qty", "Share"]}
            rows={[
              ["Biryani (Chicken)", "64", "18%"],
              ["Paneer Butter Masala", "41", "11%"],
              ["Filter Coffee", "88", "9%"],
              ["Veg Thali", "37", "8%"],
            ]}
          />
        </div>
      </div>
    </AppFrame>
  );
}

export const PRODUCT_DASHBOARDS = {
  school: SchoolDashboard,
  college: CollegeDashboard,
  hospital: HospitalDashboard,
  restaurant: RestaurantDashboard,
} as const;

/** Small framed preview used inside product cards. */
export function DashboardPreview({
  product,
  className,
}: {
  product: keyof typeof PRODUCT_DASHBOARDS;
  className?: string;
}) {
  const Dashboard = PRODUCT_DASHBOARDS[product];
  return (
    <div className={cx("relative overflow-hidden", className)}>
      <Dashboard className="pointer-events-none w-full" />
    </div>
  );
}
