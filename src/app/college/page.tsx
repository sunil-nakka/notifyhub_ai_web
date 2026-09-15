import type { Metadata } from "next";
import { PageHero, FeatureGrid } from "@/components/pages/page-hero";
import { InstitutionalIntelligence } from "@/components/pages/institutional-intelligence";
import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { IconArrow, IconExternal } from "@/components/ui/icons";
import { CollegeDashboard } from "@/components/product-ui/mockups";
import { InsightPanel } from "@/components/product-ui/insight";
import { getProduct } from "@/lib/products";
import { SITE } from "@/lib/constants";

const product = getProduct("college");

export const metadata: Metadata = {
  title: "College ERP + AI — college management software",
  description:
    "A connected operating platform for colleges, bringing academic, student, administrative, and institutional operations into one intelligent system.",
  alternates: { canonical: "/college" },
  openGraph: {
    title: "NotifyHub College — College ERP + AI",
    description: product.description,
    url: `${SITE.url}/college`,
  },
};

const CAPABILITIES = [
  {
    title: "Academic structure",
    detail:
      "Academic years, departments, programmes, courses, batches, sections, semesters, and faculty assignment.",
  },
  {
    title: "Student management",
    detail:
      "Student records, enrollment into batches and sections, and the academic history that follows.",
  },
  {
    title: "Student import",
    detail:
      "Bring an existing student list in from Excel or CSV instead of typing it again.",
  },
  {
    title: "Attendance",
    detail:
      "Course and section attendance capture, with the trends and patterns that follow from it.",
  },
  {
    title: "Fees & collections",
    detail:
      "Fee categories, versioned fee structures, assignment, invoices, payments, discounts, receipts, and outstanding balances.",
  },
  {
    title: "Administration",
    detail:
      "Roles, permissions, and the institutional configuration each college runs on.",
  },
];

export default function CollegePage() {
  return (
    <>
      <PageHero
        status={product.status}
        eyebrow="College"
        title="A college ERP that turns operations into intelligence."
        lede="A connected operating platform for colleges, bringing academic, student, administrative, and institutional operations into one system — designed for degree, engineering, and small to mid-sized private colleges."
        actions={
          <>
            <ButtonLink href={product.externalUrl} size="lg">
              Explore College
              <IconExternal className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Talk to us
            </ButtonLink>
          </>
        }
        aside={<CollegeDashboard />}
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything the college runs on."
            lede="NotifyHub College is deliberately not an all-in-one university ERP. It covers academic setup, student management, attendance, and fee collections properly rather than covering everything shallowly."
          />
          <div className="mt-12">
            <FeatureGrid items={CAPABILITIES} columns={3} />
          </div>
        </Container>
      </Section>

      <InstitutionalIntelligence
        aside={
          <InsightPanel
            title="Institution insight"
            whatChanged="Enrollment, attendance, and academic indicators are changing differently across departments."
            whyItMatters="A single institution-level average hides the departments that are moving in the wrong direction."
            recommendedAction="Compare the departments that diverged from their own baseline, starting with the largest change."
            signals={[
              { label: "Departments above baseline", value: "4", tone: "positive" },
              { label: "Departments below baseline", value: "3", tone: "attention" },
              { label: "Period compared", value: "This semester", tone: "neutral" },
            ]}
          />
        }
      />

      <Section tone="dark">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-[1.9rem] leading-tight font-semibold text-white sm:text-[2.4rem]">
              A simpler way to run the college.
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-400">
              Explore NotifyHub College, or talk to us about your institution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={product.externalUrl} size="lg">
                Explore College
                <IconExternal className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/contact" variant="inverse" size="lg">
                Talk to us
                <IconArrow className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
