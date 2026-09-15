import Link from "next/link";
import { PageHero } from "./page-hero";
import {
  ButtonLink,
  Container,
  Section,
  SectionHeading,
  StatusPill,
} from "@/components/ui/primitives";
import { IconArrow } from "@/components/ui/icons";

/**
 * Used for routes that are wired and reachable but not yet written.
 * States plainly that the page is in progress rather than filling it with
 * content that was never true.
 */
export function StubPage({
  eyebrow,
  title,
  lede,
  covering,
  note = "We're building this resource library.",
  related,
  status,
  statusLabel,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  covering?: string[];
  note?: string;
  related?: { label: string; href: string; detail?: string }[];
  status?: "available" | "coming-soon" | "future";
  statusLabel?: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        lede={lede}
        status={status}
        statusLabel={statusLabel}
        actions={
          <>
            <ButtonLink href="/contact" size="lg">
              Talk to us
              <IconArrow className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/platform" variant="secondary" size="lg">
              Explore the platform
            </ButtonLink>
          </>
        }
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <div className="grid gap-12 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-16">
            <div>
              <div className="rounded-xl border border-dashed border-ink-300 bg-white p-6 lg:p-8">
                <StatusPill status="coming-soon" label="In progress" />
                <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
                  {note}
                </p>
                {covering?.length ? (
                  <>
                    <p className="nh-eyebrow mt-7 mb-3 text-ink-400">
                      What this page will cover
                    </p>
                    <ul className="space-y-2.5">
                      {covering.map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2.5 text-[14px] text-ink-600"
                        >
                          <span
                            aria-hidden
                            className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-ink-300"
                          />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            </div>

            {related?.length ? (
              <div>
                <SectionHeading eyebrow="Meanwhile" title="Where to look instead" />
                <ul className="mt-8 space-y-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200">
                  {related.map((r) => (
                    <li key={r.href} className="bg-white">
                      <Link
                        href={r.href}
                        className="group flex items-start justify-between gap-4 p-5 transition-colors hover:bg-ink-50"
                      >
                        <span className="min-w-0">
                          <span className="block text-[14.5px] font-medium text-ink-950">
                            {r.label}
                          </span>
                          {r.detail ? (
                            <span className="mt-1 block text-[13px] leading-relaxed text-ink-500">
                              {r.detail}
                            </span>
                          ) : null}
                        </span>
                        <IconArrow className="mt-1 h-4 w-4 shrink-0 text-ink-400 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Container>
      </Section>
    </>
  );
}
