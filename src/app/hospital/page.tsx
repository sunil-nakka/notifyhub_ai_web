import type { Metadata } from "next";
import { PageHero, FeatureGrid } from "@/components/pages/page-hero";
import {
  ButtonLink,
  Card,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { IconArrow } from "@/components/ui/icons";
import { HospitalDashboard } from "@/components/product-ui/mockups";
import { InterestForm } from "@/components/pages/forms";
import { getProduct } from "@/lib/products";
import { SITE } from "@/lib/constants";

const product = getProduct("hospital");

export const metadata: Metadata = {
  title: "Hospital Management + AI — coming soon",
  description:
    "A specialized hospital operating platform designed to connect patients, admissions, departments, billing, staff, and operational intelligence. Coming soon.",
  alternates: { canonical: "/hospital" },
  openGraph: {
    title: "NotifyHub Hospital — coming soon",
    description: product.description,
    url: `${SITE.url}/hospital`,
  },
};

const CAPABILITIES = [
  {
    title: "Patient management",
    detail:
      "Patient records and the administrative history attached to them across visits.",
  },
  {
    title: "Admissions",
    detail: "Admission, transfer, and discharge as an operational workflow.",
  },
  {
    title: "Departments",
    detail: "Departmental structure, capacity, and day-to-day load.",
  },
  {
    title: "Billing",
    detail: "Charges, invoices, payments, and outstanding accounts.",
  },
  {
    title: "Staff",
    detail: "Staff records, roles, and the access each role carries.",
  },
  {
    title: "Operational dashboards",
    detail: "The day's operational picture for the people running the hospital.",
  },
  {
    title: "Analytics",
    detail:
      "Deterministic operational metrics — occupancy, turnaround, receivables, throughput.",
  },
  {
    title: "AI-assisted operational insights",
    detail:
      "Explanation and prioritization of operational signals, in the same structure used across the platform.",
  },
];

export default function HospitalPage() {
  return (
    <>
      <PageHero
        status={product.status}
        eyebrow="Hospital"
        title="Hospital operations, connected and intelligent."
        lede={
          <>
            <p>
              NotifyHub Hospital connects patients, admissions, departments,
              billing, and staff into one operating platform, with the same
              intelligence layer used across NotifyHub products. It is coming
              soon.
            </p>
          </>
        }
        actions={
          <>
            <ButtonLink href="/contact" size="lg">
              Talk to us
              <IconArrow className="h-4 w-4" />
            </ButtonLink>
          </>
        }
        aside={<HospitalDashboard />}
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <Card className="mb-12 border-attention-500/25 bg-attention-50/60 p-5">
            <p className="text-[14px] leading-relaxed text-ink-800">
              <span className="font-semibold">
                NotifyHub Hospital is not yet available.
              </span>{" "}
              The capabilities below describe the product we are building, and
              the interfaces shown are illustrative.
            </p>
          </Card>

          <SectionHeading
            eyebrow="Capabilities"
            title="What NotifyHub Hospital does."
          />
          <div className="mt-12">
            <FeatureGrid items={CAPABILITIES} columns={4} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Scope"
                title="Operational intelligence, not clinical decision-making."
                lede={
                  <>
                    <p>
                      The initial NotifyHub Hospital AI direction is operational:
                      occupancy, admissions flow, discharge turnaround,
                      receivables, and the administrative work that surrounds
                      care.
                    </p>
                    <p className="mt-4">
                      NotifyHub does not make clinical decisions, produce
                      diagnoses, or recommend treatment, and does not claim any
                      medical or regulatory certification.
                    </p>
                  </>
                }
              />
            </div>

            <Card className="p-6 lg:p-8">
              <InterestForm
                product="Hospital"
                label="Notify me when Hospital is available"
              />
              <p className="mt-5 border-t border-ink-200 pt-4 text-[12.5px] leading-relaxed text-ink-500">
                We&rsquo;ll use your email only to tell you when the product is
                ready for its first organizations.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
