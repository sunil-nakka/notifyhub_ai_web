import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { IconArrow } from "@/components/ui/icons";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-0 sm:pt-20">
      {/* Hairline grid, faded at the edges */}
      <div
        aria-hidden
        className="nh-grid-light nh-fade-edges pointer-events-none absolute inset-0 opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-cobalt-50/50 to-transparent"
      />

      <Container className="relative">
        <div className="max-w-[760px]">
          <Eyebrow>Vertical ERP. Intelligent by design.</Eyebrow>

          <h1 className="text-[2.35rem] leading-[1.06] font-semibold tracking-[-0.03em] text-ink-950 sm:text-[3.25rem] lg:text-[3.85rem]">
            The intelligence layer for modern operations.
          </h1>

          <p className="mt-6 max-w-[640px] text-[1.0625rem] leading-relaxed text-ink-600 sm:text-[1.125rem]">
            NotifyHub builds industry-specific ERP software with AI-native
            intelligence for schools, colleges, hospitals, restaurants, and
            growing organizations.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#products" size="lg">
              Explore products
              <IconArrow className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary" size="lg">
              Talk to us
            </ButtonLink>
          </div>

          <dl className="mt-12 grid max-w-[640px] grid-cols-1 gap-x-8 gap-y-5 border-t border-ink-200 pt-7 sm:grid-cols-3">
            {[
              {
                term: "Industry-specific",
                detail: "Workflows built for how each sector actually operates.",
              },
              {
                term: "Intelligence-native",
                detail: "AI designed into the product, not bolted on.",
              },
              {
                term: "One platform",
                detail: "A shared foundation behind every vertical product.",
              },
            ].map((item) => (
              <div key={item.term}>
                <dt className="text-[13px] font-semibold text-ink-900">
                  {item.term}
                </dt>
                <dd className="mt-1 text-[12.5px] leading-relaxed text-ink-500">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <Container className="relative mt-14 sm:mt-16">
        <HeroVisual />
      </Container>

      {/* Visual bridge into the next section */}
      <div aria-hidden className="relative -mt-20 h-20 bg-gradient-to-b from-transparent to-ink-50" />
    </section>
  );
}
