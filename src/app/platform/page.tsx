import type { Metadata } from "next";
import { PageHero } from "@/components/pages/page-hero";
import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui/primitives";
import { IconArrow } from "@/components/ui/icons";
import { PlatformArchitecture } from "@/components/architecture/platform-architecture";
import { IntelligenceFlow } from "@/components/architecture/intelligence-flow";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Platform — one foundation for specialized business software",
  description:
    "One technology platform powering NotifyHub's vertical ERP products: identity, organizations, permissions, multi-tenant architecture, workflow, data, analytics, and AI intelligence.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "NotifyHub Platform",
    description:
      "One technology platform powering NotifyHub's vertical ERP products, with AI intelligence built into the foundation.",
    url: `${SITE.url}/platform`,
  },
};

const CAPABILITIES = [
  {
    name: "Identity",
    detail:
      "One account model for the people who use NotifyHub, across every product they have access to.",
  },
  {
    name: "Organizations",
    detail:
      "A commercial customer can operate several institutions or locations, each with its own data boundary.",
  },
  {
    name: "Roles & permissions",
    detail:
      "Permission codes govern what each role can read and change, enforced in the application and data layers.",
  },
  {
    name: "Multi-tenant architecture",
    detail:
      "Every record belongs to a tenant. Tenant scope is the primary isolation boundary across the platform.",
  },
  {
    name: "Workflow engine",
    detail:
      "The operational sequences each industry depends on — states, transitions, approvals, and events.",
  },
  {
    name: "Data platform",
    detail:
      "Structured operational records, versioned schemas, and migrations shared by every vertical.",
  },
  {
    name: "Analytics",
    detail:
      "Deterministic metrics, trends, thresholds, and anomaly detection computed from operational data.",
  },
  {
    name: "AI intelligence",
    detail:
      "The reasoning layer that interprets analytics output, explains it, and recommends next steps.",
  },
  {
    name: "Auditability",
    detail: "Significant activity is recorded so it can be reviewed afterwards.",
  },
  {
    name: "Integrations",
    detail:
      "Interfaces for connecting external systems as each product matures.",
  },
  {
    name: "Billing",
    detail:
      "Subscriptions, plans, and entitlements that determine what each organization has access to.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One platform powering specialized business software."
        lede={
          <>
            <p>
              Every NotifyHub product is a specialized application built on the
              same foundation. The workflows differ by industry. Identity,
              permissions, tenancy, data, analytics, and intelligence do not.
            </p>
          </>
        }
        actions={
          <>
            <ButtonLink href="/ai" size="lg">
              See the AI architecture
              <IconArrow className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Talk to us
            </ButtonLink>
          </>
        }
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <SectionHeading
            eyebrow="Architecture"
            title="Specialized above. Shared below."
            lede="Each vertical receives workflows designed for its industry, on top of a technology foundation that does not change from product to product."
          />
          <div className="mt-14">
            <PlatformArchitecture />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Common platform layer"
            title="What every product inherits."
          />
          <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <div key={c.name} className="bg-white p-6">
                <dt className="text-[15px] font-semibold text-ink-950">
                  {c.name}
                </dt>
                <dd className="mt-2 text-[13.5px] leading-relaxed text-ink-600">
                  {c.detail}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <SectionHeading
            tone="dark"
            eyebrow="How work becomes insight"
            title="The same path, in every vertical."
            lede="A hospital and a school record very different things. What happens to those records afterwards is identical."
          />
          <div className="mt-16">
            <IntelligenceFlow tone="dark" />
          </div>
          <div className="mt-12">
            <TextLink href="/ai" tone="dark">
              Read how the AI layer is structured
            </TextLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
