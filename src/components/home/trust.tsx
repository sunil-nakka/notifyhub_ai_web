import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
  cx,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import {
  IconApi,
  IconAudit,
  IconGovernance,
  IconIsolation,
  IconKey,
  IconOrg,
  IconRole,
  IconScale,
  IconArrow,
} from "@/components/ui/icons";
import { FUTURE_VERTICALS } from "@/lib/products";
import { StepCard } from "./school-ai";

/** Section 17 — why NotifyHub is built the way it is. */
const PILLARS = [
  {
    title: "Industry-first",
    detail:
      "Workflows are designed around how each industry actually operates.",
  },
  {
    title: "Intelligence-native",
    detail:
      "AI is designed into the product architecture rather than added as a generic chatbot.",
  },
  {
    title: "Simple for teams",
    detail:
      "Complex operational information is presented through clear interfaces.",
  },
  {
    title: "Built to evolve",
    detail:
      "A shared platform allows NotifyHub to expand into new verticals while maintaining a common technology foundation.",
  },
];

export function WhyNotifyHub() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Approach"
          title="Built differently from traditional ERP."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="bg-white p-6 lg:p-7">
              <span className="nh-num text-[11px] font-medium text-cobalt-600">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-[17px] leading-tight font-semibold text-ink-950">
                {p.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-600">
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Section 18 — enterprise capabilities. */
const ENTERPRISE = [
  {
    icon: IconRole,
    title: "Role-based access",
    detail:
      "Different users see and interact with the information appropriate to their role.",
  },
  {
    icon: IconOrg,
    title: "Multi-organization architecture",
    detail:
      "Support organizations and their operational structures within a scalable platform.",
  },
  {
    icon: IconAudit,
    title: "Auditability",
    detail: "Important system activity can be tracked and reviewed.",
  },
  {
    icon: IconKey,
    title: "Secure authentication",
    detail: "Modern authentication and access controls.",
  },
  {
    icon: IconIsolation,
    title: "Data isolation",
    detail:
      "Tenant-aware architecture designed to keep organizational data separated.",
  },
  {
    icon: IconScale,
    title: "Scalable infrastructure",
    detail:
      "Architecture designed to grow with organizations and product usage.",
  },
  {
    icon: IconApi,
    title: "API & integrations",
    detail: "Build integrations with external systems as products mature.",
  },
  {
    icon: IconGovernance,
    title: "AI governance",
    detail:
      "AI experiences respect permissions, organizational context, and deterministic business logic.",
  },
];

export function EnterpriseCapabilities() {
  return (
    <Section tone="subtle">
      <Container>
        <SectionHeading
          eyebrow="Enterprise"
          title="Capabilities the platform is built on."
          lede="The foundation every NotifyHub product inherits."
        />
        <div className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4">
          {ENTERPRISE.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 50}>
              <div>
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-600">
                  <c.icon className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mt-4 text-[14.5px] font-semibold text-ink-950">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-600">
                  {c.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/** Section 19 — security and trust, stated plainly. */
const TRUST_ITEMS = [
  {
    title: "Access control",
    detail:
      "Roles determine which records and operations a person can reach inside a product.",
  },
  {
    title: "Authentication",
    detail: "Modern sign-in with session and credential handling built into the platform.",
  },
  {
    title: "Authorization",
    detail:
      "Permission checks are applied at the application and data layers, not only in the interface.",
  },
  {
    title: "Tenant isolation",
    detail:
      "Each organization's data is scoped to its own tenant boundary throughout the platform.",
  },
  {
    title: "Audit trails",
    detail: "Significant activity is recorded so it can be reviewed later.",
  },
  {
    title: "Data protection",
    detail: "Data is transmitted over encrypted connections and stored in managed infrastructure.",
  },
  {
    title: "Backups",
    detail: "Operational data is backed up as part of platform operations.",
  },
  {
    title: "Reliability",
    detail:
      "Services are designed to degrade predictably and recover without data loss.",
  },
  {
    title: "Responsible AI architecture",
    detail:
      "Calculations stay deterministic. AI explains and recommends; it does not silently decide.",
  },
];

export function SecurityTrust() {
  return (
    <Section tone="dark">
      <Container>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Trust"
              title="Built for organizations that depend on their data."
              lede="NotifyHub describes what the platform does, not what sounds impressive. Where a certification is not held, it is not claimed."
            />
            <div className="mt-8">
              <ButtonLink href="/legal/security" variant="inverse" size="md">
                Security overview
                <IconArrow className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <ul className="grid gap-x-8 gap-y-7 grid-cols-1 sm:grid-cols-2">
            {TRUST_ITEMS.map((t) => (
              <li key={t.title}>
                <h3 className="text-[14.5px] font-semibold text-white">
                  {t.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-400">
                  {t.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

/** Verticals under exploration. Never presented as products, never dated. */
export function FutureVerticals() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Expansion"
            title="The platform keeps expanding."
            lede="The same foundation can carry other operational industries. These are directions under consideration, not products."
          />
          <ul className="flex flex-wrap gap-2">
            {FUTURE_VERTICALS.map((v) => (
              <li
                key={v}
                className="flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-3.5 py-2"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-ink-300" />
                <span className="text-[13.5px] text-ink-700">{v}</span>
                <span className="nh-eyebrow text-ink-400">Exploring</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

/** Section 21 — customer value. */
export function CustomerValue() {
  return (
    <Section tone="subtle">
      <Container>
        <SectionHeading
          eyebrow="Outcome"
          title="Less time searching for answers. More time acting on them."
        />
        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-3">
          <StepCard
            index={1}
            title="See"
            detail="Understand the current state of your organization."
          />
          <StepCard
            index={2}
            title="Know"
            detail="Identify risks, trends, and priorities."
          />
          <StepCard
            index={3}
            title="Act"
            detail="Move from insight to practical action."
          />
        </div>
      </Container>
    </Section>
  );
}

/** Section 22 — no customer stories exist yet, so none are invented. */
export function CustomerStories() {
  return (
    <Section>
      <Container>
        <div className="overflow-hidden rounded-xl border border-ink-200">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
            <div className="p-8 lg:p-10">
              <SectionHeading
                eyebrow="Customer stories"
                title="Customer stories coming soon."
                lede="NotifyHub publishes customer stories only when the organizations involved have approved them. Until then, this space stays empty rather than filled with examples that were never real."
              />
              <div className="mt-8">
                <ButtonLink href="/contact" variant="secondary" size="md">
                  Talk to us about a pilot
                </ButtonLink>
              </div>
            </div>

            <div
              className={cx(
                "relative min-h-[220px] border-t border-ink-200 bg-ink-50 lg:border-t-0 lg:border-l",
              )}
            >
              <div
                aria-hidden
                className="nh-grid-light absolute inset-0 opacity-60"
              />
              <div className="relative flex h-full flex-col justify-center gap-3 p-8">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border border-dashed border-ink-300 bg-white/70 px-4 py-3"
                  >
                    <span className="h-7 w-7 rounded-md border border-dashed border-ink-300" />
                    <span className="h-2 flex-1 rounded-full bg-ink-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/** Section 35 — closing call to action. */
export function FinalCta() {
  return (
    <Section tone="dark" className="overflow-hidden">
      <div
        aria-hidden
        className="nh-grid-dark nh-fade-edges pointer-events-none absolute inset-0 opacity-50"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <h2 className="text-[2rem] leading-[1.12] font-semibold tracking-[-0.025em] text-white sm:text-[2.75rem]">
            Build a smarter operation with NotifyHub.
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-400">
            Explore software built for your industry — with intelligence
            designed into the experience.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#products" size="lg">
              Explore products
              <IconArrow className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="inverse" size="lg">
              Talk to us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
