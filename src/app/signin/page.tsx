import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/pages/page-hero";
import { Container, Section, StatusPill } from "@/components/ui/primitives";
import { PRODUCT_ICONS, IconExternal } from "@/components/ui/icons";
import { PRODUCTS, STATUS_LABEL } from "@/lib/products";

export const metadata: Metadata = {
  ...pageMetadata({
    path: "/signin",
    title: "Sign in",
    description: "Sign in to your NotifyHub product.",
  }),
  // Also disallowed in robots.ts. Nothing here is worth crawling or following.
  robots: { index: false, follow: false },
};

export default function SignInPage() {
  return (
    <>
      <PageHero
        eyebrow="Sign in"
        title="Sign in to your product."
        lede="NotifyHub products each run on their own domain. Choose the one your organization uses."
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <ul className="grid max-w-3xl gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200">
            {PRODUCTS.map((p) => {
              const Icon = PRODUCT_ICONS[p.icon];
              const live = p.status === "available";
              return (
                <li key={p.key} className="bg-white">
                  {live ? (
                    <a
                      href={p.externalUrl}
                      rel="noopener"
                      className="group flex items-center gap-4 p-5 transition-colors hover:bg-ink-50"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-ink-200 bg-ink-50 text-ink-600">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-semibold text-ink-950">
                          {p.name}
                        </span>
                        <span className="mt-0.5 block text-[13px] text-ink-500">
                          {p.externalUrl.replace("https://", "")}
                        </span>
                      </span>
                      <IconExternal className="h-4 w-4 text-ink-400" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-5 opacity-70">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-ink-200 bg-ink-50 text-ink-400">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-semibold text-ink-700">
                          {p.name}
                        </span>
                        <span className="mt-0.5 block text-[13px] text-ink-500">
                          Not yet available
                        </span>
                      </span>
                      <StatusPill status={p.status} label={STATUS_LABEL[p.status]} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </>
  );
}
