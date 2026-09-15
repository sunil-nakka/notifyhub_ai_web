import type { Metadata } from "next";
import { PageHero, FeatureGrid } from "@/components/pages/page-hero";
import { Card, Container, Section, SectionHeading } from "@/components/ui/primitives";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Security",
  description:
    "How NotifyHub approaches access control, authentication, tenant isolation, auditability, data protection, reliability, and responsible AI architecture.",
  alternates: { canonical: "/legal/security" },
};

const PRACTICES = [
  {
    title: "Access control",
    detail:
      "Roles carry permission codes that determine which records and operations a person can reach. Access is defined per organization, not globally.",
  },
  {
    title: "Authentication",
    detail:
      "Sign-in, session handling, and credential management are part of the platform rather than each product.",
  },
  {
    title: "Authorization",
    detail:
      "Permission checks are applied in the application and data layers, so hiding a control in the interface is never the only barrier.",
  },
  {
    title: "Tenant isolation",
    detail:
      "Every record belongs to a tenant, and tenant scope is the primary isolation boundary throughout the platform.",
  },
  {
    title: "Audit trails",
    detail:
      "Significant system activity is recorded so that it can be reviewed afterwards.",
  },
  {
    title: "Data protection",
    detail:
      "Data is transmitted over encrypted connections and stored in managed infrastructure.",
  },
  {
    title: "Backups",
    detail:
      "Operational data is backed up as part of platform operations.",
  },
  {
    title: "Reliability",
    detail:
      "Services are designed to degrade predictably and to recover without losing operational records.",
  },
  {
    title: "Responsible AI architecture",
    detail:
      "Calculations that can be deterministic are computed deterministically. AI explains findings and proposes actions within the permissions of the person viewing them.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust"
        title="Built for organizations that depend on their data."
        lede="This page describes how the platform is built. Where a formal certification is not held, it is not claimed."
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <SectionHeading eyebrow="Practices" title="How the platform handles access and data." />
          <div className="mt-12">
            <FeatureGrid items={PRACTICES} columns={3} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="max-w-3xl p-6 lg:p-8">
            <h2 className="text-[17px] font-semibold text-ink-950">
              On certifications
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-600">
              NotifyHub does not currently claim SOC 2, ISO, HIPAA, or any other
              formal certification, and does not use phrases like
              &ldquo;bank-grade&rdquo; or &ldquo;military-grade&rdquo; security.
              If your organization requires a specific attestation, contact us at{" "}
              {SITE.contactEmail} and we will tell you plainly where we stand.
            </p>
          </Card>
        </Container>
      </Section>
    </>
  );
}
