import Link from "next/link";
import { PRODUCTS, STATUS_LABEL } from "@/lib/products";
import { PRODUCT_ICONS, IconArrow, IconExternal } from "@/components/ui/icons";
import {
  Container,
  Section,
  SectionHeading,
  StatusPill,
  cx,
} from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { DashboardPreview } from "@/components/product-ui/mockups";

const SECTORS = ["Education", "Healthcare", "Hospitality"] as const;

/** Section 6 — the vertical platform concept. */
export function VerticalsIntro() {
  return (
    <Section tone="subtle" className="border-t-0">
      <Container>
        <SectionHeading
          eyebrow="The platform"
          title="Software built around how your industry actually works."
          lede="One technology platform. Specialized products for the organizations that depend on it."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3">
          {SECTORS.map((sector) => {
            const items = PRODUCTS.filter((p) => p.sector === sector);
            return (
              <div key={sector} className="bg-white p-6 lg:p-7">
                <p className="nh-eyebrow text-ink-400">{sector}</p>
                <ul className="mt-5 space-y-5">
                  {items.map((p) => {
                    const Icon = PRODUCT_ICONS[p.icon];
                    return (
                      <li key={p.key}>
                        <Link
                          href={p.route}
                          className="group flex gap-3.5 rounded-md -m-2 p-2 transition-colors hover:bg-ink-50"
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-ink-200 bg-white text-ink-600 transition-colors group-hover:border-cobalt-200 group-hover:text-cobalt-600">
                            <Icon className="h-[18px] w-[18px]" />
                          </span>
                          <span className="min-w-0">
                            <span className="flex flex-wrap items-center gap-2">
                              <span className="text-[15px] font-semibold text-ink-950">
                                {p.name}
                              </span>
                              <StatusPill
                                status={p.status}
                                label={STATUS_LABEL[p.status]}
                              />
                            </span>
                            <span className="mt-1.5 block text-[13px] leading-relaxed text-ink-600">
                              {p.summary}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/** Section 8 — the four vertical products. */
export function ProductCards() {
  return (
    <Section id="products">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="One platform. Built around your industry."
          lede="Each product carries the operational workflows its sector depends on, and the same intelligence layer underneath."
        />

        <div className="mt-12 grid gap-6 grid-cols-1 lg:grid-cols-2">
          {PRODUCTS.map((p, i) => {
            const Icon = PRODUCT_ICONS[p.icon];
            const isExternal = /^https?:\/\//.test(p.ctaHref);
            return (
              <Reveal key={p.key} delay={i * 60}>
                <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-200 bg-white transition-[border-color,box-shadow] duration-300 hover:border-ink-300 hover:shadow-[0_2px_4px_rgba(10,14,20,0.04),0_20px_44px_-30px_rgba(10,14,20,0.35)]">
                  <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-ink-50 text-ink-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <StatusPill status={p.status} label={STATUS_LABEL[p.status]} />
                    </div>

                    <h3 className="mt-5 text-[1.35rem] leading-tight font-semibold text-ink-950">
                      {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-600">
                      {p.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                      <a
                        href={p.ctaHref}
                        rel={isExternal ? "noopener" : undefined}
                        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-cobalt-600 transition-colors hover:text-cobalt-700"
                      >
                        {p.ctaLabel}
                        {isExternal ? (
                          <IconExternal className="h-3.5 w-3.5" />
                        ) : (
                          <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        )}
                      </a>
                      {isExternal ? (
                        <Link
                          href={p.route}
                          className="text-[13.5px] text-ink-500 transition-colors hover:text-ink-800"
                        >
                          Product overview
                        </Link>
                      ) : (
                        <span className="text-[13px] text-ink-400">
                          {p.externalUrl.replace("https://", "")}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className={cx(
                      "relative mx-6 mb-6 overflow-hidden rounded-lg border border-ink-200 lg:mx-7 lg:mb-7",
                      p.status !== "available" && "opacity-[0.92]",
                    )}
                  >
                    <DashboardPreview product={p.key} />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
