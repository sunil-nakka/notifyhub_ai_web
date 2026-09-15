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
import { RestaurantDashboard } from "@/components/product-ui/mockups";
import { InterestForm } from "@/components/pages/forms";
import { getProduct } from "@/lib/products";
import { SITE } from "@/lib/constants";

const product = getProduct("restaurant");

export const metadata: Metadata = {
  title: "Restaurant ERP + AI — coming soon",
  description:
    "An industry-specific platform for restaurant operations, helping teams manage daily workflows and understand performance through intelligent insights. Coming soon.",
  alternates: { canonical: "/restaurant" },
  openGraph: {
    title: "NotifyHub Restaurant — coming soon",
    description: product.description,
    url: `${SITE.url}/restaurant`,
  },
};

const CAPABILITIES = [
  {
    title: "Restaurant operations",
    detail: "The daily flow of service, from order to settlement.",
  },
  {
    title: "Sales",
    detail: "Sales by period, outlet, channel, and item.",
  },
  {
    title: "Inventory",
    detail: "Stock levels, consumption, and reorder points.",
  },
  {
    title: "Staff",
    detail: "Staff records, shifts, and role-based access.",
  },
  {
    title: "Customers",
    detail: "Customer records and order history.",
  },
  {
    title: "Performance",
    detail: "Covers, average ticket, item mix, and outlet comparison.",
  },
  {
    title: "Analytics",
    detail: "Deterministic operational metrics computed from the day's records.",
  },
  {
    title: "AI insights",
    detail:
      "Explanation of what changed in the operation and what is worth acting on.",
  },
];

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        status={product.status}
        eyebrow="Restaurant"
        title="A smarter operating system for restaurants."
        lede="NotifyHub Restaurant carries the daily operational workflows a restaurant runs on, and explains what the numbers behind them are doing. It is coming soon."
        actions={
          <ButtonLink href="/contact" size="lg">
            Talk to us
            <IconArrow className="h-4 w-4" />
          </ButtonLink>
        }
        aside={<RestaurantDashboard />}
      />

      <Section tone="subtle" className="border-t-0">
        <Container>
          <Card className="mb-12 border-attention-500/25 bg-attention-50/60 p-5">
            <p className="text-[14px] leading-relaxed text-ink-800">
              <span className="font-semibold">
                NotifyHub Restaurant is not yet commercially available.
              </span>{" "}
              The capabilities below describe the product we are building, and
              the interfaces shown are illustrative.
            </p>
          </Card>

          <SectionHeading
            eyebrow="Capabilities"
            title="What NotifyHub Restaurant does."
          />
          <div className="mt-12">
            <FeatureGrid items={CAPABILITIES} columns={4} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 lg:gap-16">
            <SectionHeading
              eyebrow="Early access"
              title="Built with the restaurants that use it."
              lede="The first version will be shaped by a small group of operators. If running a restaurant is your day job, we would rather hear from you before the product is finished than after."
            />
            <Card className="p-6 lg:p-8">
              <InterestForm
                product="Restaurant"
                label="Join the early access list"
              />
              <p className="mt-5 border-t border-ink-200 pt-4 text-[12.5px] leading-relaxed text-ink-500">
                We&rsquo;ll use your email only to contact you about early
                access.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
