import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
} from "@/components/ui/primitives";
import { IconArrow } from "@/components/ui/icons";
import { PlatformArchitecture } from "@/components/architecture/platform-architecture";

/** How the platform works — the multi-vertical architecture, stated visually. */
export function PlatformTeaser() {
  return (
    <Section tone="dark" className="overflow-hidden">
      <div
        aria-hidden
        className="nh-grid-dark nh-fade-edges pointer-events-none absolute inset-0 opacity-50"
      />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Platform"
          title="A common foundation under every product."
          lede="NotifyHub is not a collection of separate applications. Each vertical carries its own workflows on top of one shared technology and intelligence platform."
        />

        <div className="mt-14">
          <PlatformArchitecture tone="dark" />
        </div>

        <div className="mt-12">
          <ButtonLink href="/platform" variant="inverse" size="lg">
            Explore the platform
            <IconArrow className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
