import type { Metadata } from "next";
import { CapabilityPage } from "@/components/pages/capability-page";
import { SITE } from "@/lib/constants";
import { InsightPanel } from "@/components/product-ui/insight";

export const metadata: Metadata = {
  title: "Institution Intelligence",
  description:
    "A management-level view of what changed across the institution, which areas moved outside their usual range, and what needs attention.",
  alternates: { canonical: "/ai/institution-intelligence" },
  openGraph: {
    title: "Institution Intelligence — NotifyHub.ai",
    description:
      "A management-level view of what changed across the institution, which areas moved outside their usual range, and what needs attention.",
    url: `${SITE.url}/ai/institution-intelligence`,
  },
};

export default function Page() {
  return (
    <CapabilityPage
      title="Institution Intelligence"
      lede="A management-level view of what changed across the institution, which areas moved outside their usual range, and what is worth attention this week — built for principals, management, and academic heads."
      visual={
        <InsightPanel
          title="Institution insight"
          whatChanged="Attendance and collection indicators moved in different directions this period."
          whyItMatters="An institution-level average hides the classes and departments that are actually moving."
          recommendedAction="Start with the groups that diverged furthest from their own baseline, not from the institution average."
          signals={[
            { label: "Groups above baseline", value: "6", tone: "positive" },
            { label: "Groups below baseline", value: "3", tone: "attention" },
            { label: "Period compared", value: "Last 30 days", tone: "neutral" },
          ]}
        />
      }
      howItWorks={[
        {
          title: "Baselines, not averages",
          detail:
            "Every class, department, and cohort is compared against its own history. A group that has always run at 88% is not an exception; a group that just moved from 94% to 88% is.",
        },
        {
          title: "Exception detection",
          detail:
            "The platform surfaces what moved outside its usual range, rather than listing every metric it holds and leaving the reading to you.",
        },
        {
          title: "Cross-signal correlation",
          detail:
            "Attendance, academic, and operational indicators are read together, so a finding carries the other signals that moved with it.",
        },
        {
          title: "Explained, not asserted",
          detail:
            "Each finding states what changed, why it matters, and the supporting signals behind it — traceable back to the records that produced them.",
        },
        {
          title: "Scoped by role",
          detail:
            "Management sees the institution. Other roles see only the part of it their permissions cover.",
        },
        {
          title: "Deterministic underneath",
          detail:
            "Every number comes from the analytics layer. AI interprets and explains; it never performs the calculation.",
        },
      ]}
      inProduct={{
        heading: "What a principal opens it for.",
        lede: "One screen that answers the question most people open an ERP to ask: what needs me today?",
        points: [
          "Attendance trends across classes and departments",
          "Fee collection against the expected trend",
          "Academic indicators by group",
          "Operational changes since the last period",
          "Areas that moved outside their usual range",
          "Supporting signals behind every finding",
        ],
      }}
      related={[
        { label: "AI Intelligence", href: "/ai", detail: "The architecture behind every capability." },
        { label: "School", href: "/school", detail: "Where institution-level intelligence lands first." },
        { label: "College", href: "/college", detail: "Department-level intelligence." },
      ]}
    />
  );
}
