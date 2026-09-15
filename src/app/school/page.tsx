import type { Metadata } from "next";
import { PageHero } from "@/components/pages/page-hero";
import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui/primitives";
import { IconArrow, IconExternal } from "@/components/ui/icons";
import { SchoolDashboard } from "@/components/product-ui/mockups";
import { InsightPanel } from "@/components/product-ui/insight";
import { FeatureGrid } from "@/components/pages/page-hero";
import { getProduct } from "@/lib/products";
import { FaqSection } from "@/components/pages/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { SCHOOL_FAQ } from "@/lib/faq";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  softwareApplicationSchema,
  webPageSchema,
} from "@/lib/seo";

const product = getProduct("school");

export const metadata: Metadata = pageMetadata({
  path: "/school",
  title: "School Management Software & School ERP",
  description:
    "NotifyHub School is school management software with AI built in — admissions, academics, attendance, fees, staff and institutional analytics in one school ERP.",
  socialTitle: "NotifyHub School — School management software with AI",
  image: "/og/school.png",
});

const SCHEMA = [
  webPageSchema({
    path: "/school",
    name: "School Management Software & School ERP | NotifyHub.ai",
    description:
      "School management software with AI intelligence: admissions, academics, attendance, fees, staff and institutional analytics.",
  }),
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "School", path: "/school" },
  ]),
  softwareApplicationSchema(product, {
    alternateName: "School management software",
    featureList: [
      "Admissions and enquiry management",
      "Student records and academics",
      "Attendance capture and trends",
      "Fee structures, invoices, installments and receipts",
      "Staff records, roles and permissions",
      "Institutional analytics",
      "Institution Intelligence for management",
      "My Class / My Students for teachers",
      "Fee Collection Intelligence",
    ],
  }),
  faqSchema(SCHOOL_FAQ, "/school"),
];

const OPERATIONS = [
  {
    title: "Admissions & enquiries",
    detail:
      "Capture enquiries, move applicants through the admission process, and keep the record from first contact to enrolled student.",
  },
  {
    title: "Students & academics",
    detail:
      "Classes, sections, subjects, and the academic structure the school actually runs on.",
  },
  {
    title: "Attendance",
    detail:
      "Daily attendance captured by the people who take it, aggregated into the trends management needs.",
  },
  {
    title: "Fees & finance",
    detail:
      "Fee structures, invoices, installments, payments, discounts, receipts, and outstanding balances.",
  },
  {
    title: "Staff & administration",
    detail:
      "Employee records, roles, and the access those roles carry across the product.",
  },
  {
    title: "Institutional analytics",
    detail:
      "School- and class-level indicators derived from the operational and academic record.",
  },
];

const AI_CAPABILITIES = [
  {
    title: "Institution Intelligence",
    detail:
      "A management-level view of attendance trends, fee collection, academic indicators, operational changes, and the areas that need attention this week.",
    href: "/ai/institution-intelligence",
  },
  {
    title: "My Class / My Students",
    detail:
      "Teacher-level context: attendance patterns, academic changes, class-level trends, and the students whose patterns are worth a closer look.",
    href: "/ai/operational-intelligence",
  },
  {
    title: "Fee Collection Intelligence",
    detail:
      "Collection trends, overdue patterns, payment-risk signals, priority accounts, and recommended follow-up before the next cycle.",
    href: "/ai/risk-insights",
  },
];

export default function SchoolPage() {
  return (
    <>
      <PageHero
        status={product.status}
        eyebrow="School"
        title="For schools, intelligence starts with knowing what needs attention."
        lede="NotifyHub School combines everyday school operations with intelligence designed for principals, administrators, teachers, and management teams."
        actions={
          <>
            <ButtonLink href={product.externalUrl} size="lg">
              Explore School
              <IconExternal className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Talk to us
            </ButtonLink>
          </>
        }
        aside={<SchoolDashboard />}
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <SectionHeading
            eyebrow="Operations"
            title="The work a school does every day."
            lede="Operational modules come first. Intelligence is only useful when the underlying records are real."
          />
          <div className="mt-12">
            <FeatureGrid items={OPERATIONS} columns={3} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Intelligence"
                title="What the data is telling you this week."
                lede="Three capabilities, each built for a different person in the school."
              />

              <ul className="mt-10 space-y-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200">
                {AI_CAPABILITIES.map((c) => (
                  <li key={c.title} className="bg-white p-6">
                    <h3 className="text-[16px] font-semibold text-ink-950">
                      {c.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-ink-600">
                      {c.detail}
                    </p>
                    <div className="mt-4">
                      <TextLink href={c.href}>Read more</TextLink>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pt-24">
              <InsightPanel
                title="Fee Collection Insight"
                whatChanged="Collection performance for this period is below the expected trend."
                whyItMatters="Several accounts are showing increasing overdue patterns."
                recommendedAction="Review the highest-risk accounts and prioritize follow-up before the next collection cycle."
              />
            </div>
          </div>
        </Container>
      </Section>

      <FaqSection
        items={SCHOOL_FAQ}
        tone="subtle"
        title="School ERP questions, answered."
        lede="What institutions ask when they are comparing school management software."
      />

      <Section tone="dark">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-[1.9rem] leading-tight font-semibold text-white sm:text-[2.4rem]">
              Run your school on one system.
            </h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-400">
              Explore NotifyHub School, or talk to us about what your institution
              needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={product.externalUrl} size="lg">
                Explore School
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

      <JsonLd id="school-jsonld" data={SCHEMA} />
    </>
  );
}