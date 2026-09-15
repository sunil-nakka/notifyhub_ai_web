import { Container, Section, SectionHeading } from "@/components/ui/primitives";
import { IntelligenceFlow } from "@/components/architecture/intelligence-flow";

/** Section 7 — the central NotifyHub idea. */
export function CoreIdea() {
  return (
    <Section tone="dark" className="overflow-hidden">
      <div
        aria-hidden
        className="nh-grid-dark nh-fade-edges pointer-events-none absolute inset-0 opacity-60"
      />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="The core idea"
          title="ERP gives you the data. Intelligence tells you what matters."
          lede={
            <>
              <p>
                Traditional ERP systems are excellent at recording operations.
                NotifyHub is designed to go further.
              </p>
              <p className="mt-4">
                The platform combines operational workflows, structured data,
                analytics, deterministic signals, and AI reasoning to help
                organizations understand what is happening, identify what needs
                attention, and decide what to do next.
              </p>
            </>
          }
        />

        <div className="mt-16 lg:mt-20">
          <IntelligenceFlow tone="dark" />
        </div>
      </Container>
    </Section>
  );
}
