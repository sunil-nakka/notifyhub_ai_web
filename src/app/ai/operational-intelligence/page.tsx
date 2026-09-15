import type { Metadata } from "next";
import { CapabilityPage } from "@/components/pages/capability-page";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { AskPanel } from "@/components/product-ui/insight";

export const metadata: Metadata = pageMetadata({
  path: "/ai/operational-intelligence",
  title: "Operational Intelligence",
  description:
    "Day-to-day operational context for the people running classes, departments, shifts and wards — scoped to what each of them is responsible for.",
  socialTitle: "Operational Intelligence — NotifyHub.ai",
  image: "/og/ai.png",
});

const SCHEMA = [
  webPageSchema({
    path: "/ai/operational-intelligence",
    name: "Operational Intelligence | NotifyHub.ai",
    description:
      "Day-to-day operational context for the people running classes, departments, shifts and wards — scoped to what each of them is responsible for.",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "AI Intelligence", path: "/ai" },
    { name: "Operational Intelligence", path: "/ai/operational-intelligence" },
  ]),
];

export default function Page() {
  return (
    <>
      <CapabilityPage
        title="Operational Intelligence"
        lede="Context for the people closest to the work — teachers, faculty, department heads, and operational managers — scoped to the groups they are actually responsible for."
        visual={
          <AskPanel
            question="Which classes need attention this week?"
            answer="3 classes may require attention"
            signals={[
              { label: "Attendance trend", value: "Declining", tone: "risk" },
              { label: "Academic trend", value: "Flat", tone: "attention" },
              { label: "Recent changes", value: "2 this week", tone: "neutral" },
            ]}
          />
        }
        howItWorks={[
          {
            title: "Scoped to responsibility",
            detail:
              "A teacher sees their own classes and students. A department head sees their department. Scope follows the permission model, not a separate configuration.",
          },
          {
            title: "Group-level patterns",
            detail:
              "Attendance and academic patterns are read at the level a person can act on — a section, a course, a shift — rather than as institution-wide aggregates.",
          },
          {
            title: "Prioritization before explanation",
            detail:
              "The ordering is computed deterministically. AI explains why something is near the top, it does not decide the ranking on its own.",
          },
          {
            title: "Deliberately narrow",
            detail:
              "Teacher-facing views carry academic and attendance context only. Fee and payment information is not exposed in them.",
          },
          {
            title: "Asked in plain language",
            detail:
              "Questions can be typed in plain language, but the answer resolves to the same structured records and signals the rest of the product uses.",
          },
          {
            title: "Inside the ERP",
            detail:
              "This is one capability within the product, not a separate assistant sitting beside it. Every answer links back to the record it came from.",
          },
        ]}
        inProduct={{
          heading: "For the person running the group.",
          lede: "The operational half of the intelligence layer: fewer numbers, closer to the work.",
          points: [
            "Attendance patterns within a class or section",
            "Academic changes since the last assessment",
            "Students whose patterns are worth a closer look",
            "Class- and course-level trends",
            "Contextual insights tied to the underlying records",
            "Plain-language questions over structured data",
          ],
        }}
        related={[
          { label: "AI Intelligence", href: "/ai", detail: "The architecture behind every capability." },
          { label: "School", href: "/school", detail: "Teacher and class-level context." },
          { label: "College", href: "/college", detail: "Faculty and department context." },
        ]}
      />

      <JsonLd id="capability-jsonld" data={SCHEMA} />
    </>
  );
}
