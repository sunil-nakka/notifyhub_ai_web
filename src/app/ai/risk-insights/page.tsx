import type { Metadata } from "next";
import { CapabilityPage } from "@/components/pages/capability-page";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, pageMetadata, webPageSchema } from "@/lib/seo";
import { InsightPanel } from "@/components/product-ui/insight";

export const metadata: Metadata = pageMetadata({
  path: "/ai/risk-insights",
  title: "Risk & Insights",
  description:
    "Deterministic risk scoring over receivables and operational exposure, explained in operational context and turned into a prioritized follow-up list.",
  socialTitle: "Risk & Insights — NotifyHub.ai",
  image: "/og/ai.png",
});

const SCHEMA = [
  webPageSchema({
    path: "/ai/risk-insights",
    name: "Risk & Insights | NotifyHub.ai",
    description:
      "Deterministic risk scoring over receivables and operational exposure, explained in operational context and turned into a prioritized follow-up list.",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "AI Intelligence", path: "/ai" },
    { name: "Risk & Insights", path: "/ai/risk-insights" },
  ]),
];

export default function Page() {
  return (
    <>
      <CapabilityPage
        title="Risk & Insights"
        lede="Payment and operational risk, scored from the ledger and the operational record — then explained, prioritized, and turned into a follow-up list someone can actually work through."
        visual={
          <InsightPanel
            title="Fee Collection Insight"
            whatChanged="Collection performance for this period is below the expected trend."
            whyItMatters="Several accounts are showing increasing overdue patterns."
            recommendedAction="Review the highest-risk accounts and prioritize follow-up before the next collection cycle."
          />
        }
        howItWorks={[
          {
            title: "Amounts come from the ledger",
            detail:
              "Every monetary figure is read from the financial record. Nothing about an amount is inferred, estimated, or generated.",
          },
          {
            title: "Ageing from the record",
            detail:
              "Outstanding balances are placed into ageing buckets from the dates the ledger holds, using the same logic the product uses everywhere else.",
          },
          {
            title: "Scoring before reasoning",
            detail:
              "Risk is scored deterministically from payment behaviour and exposure. AI explains the score and drafts the follow-up; it does not produce the score.",
          },
          {
            title: "Prioritized, not listed",
            detail:
              "The output is an ordered set of accounts worth acting on before the next cycle, not a full export of everything outstanding.",
          },
          {
            title: "Recommend, never act",
            detail:
              "The capability proposes follow-up. Whether and how to act stays with the person responsible for the account.",
          },
          {
            title: "Handled with care",
            detail:
              "Financial context is kept separate from academic views by default, and is never surfaced to roles that have no business seeing it.",
          },
        ]}
        inProduct={{
          heading: "Where the money actually is.",
          lede: "Most institutions know their outstanding total. Far fewer know which part of it is about to become a problem.",
          points: [
            "Collection performance against the expected trend",
            "Outstanding balances by ageing bucket",
            "Accounts moving into overdue",
            "Deterministic payment-risk scoring",
            "Priority accounts for the next cycle",
            "Recommended follow-up, with the signals behind it",
          ],
        }}
        related={[
          { label: "AI Intelligence", href: "/ai", detail: "The architecture behind every capability." },
          { label: "School", href: "/school", detail: "Fee collection intelligence." },
          { label: "College", href: "/college", detail: "Fees and collections." },
        ]}
      />

      <JsonLd id="capability-jsonld" data={SCHEMA} />
    </>
  );
}
