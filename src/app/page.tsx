import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { VerticalsIntro, ProductCards } from "@/components/home/verticals";
import { CoreIdea } from "@/components/home/core-idea";
import { ProductShowcase, AiCapabilities } from "@/components/home/showcase";
import { SchoolAi } from "@/components/home/school-ai";
import { PlatformTeaser } from "@/components/home/platform-teaser";
import {
  WhyNotifyHub,
  EnterpriseCapabilities,
  SecurityTrust,
  FutureVerticals,
  CustomerValue,
  CustomerStories,
  FinalCta,
} from "@/components/home/trust";
import { FaqSection } from "@/components/pages/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { HOME_FAQ } from "@/lib/faq";
import { faqSchema, pageMetadata, webPageSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  path: "/",
  // Stated in full: the layout title template does not apply to the root
  // page's own title, and a new domain needs the brand in its SERP title.
  title: "School ERP & College ERP Software with AI | NotifyHub.ai",
  description:
    "AI-powered school ERP and college ERP software for institutions in India. Run admissions, academics, attendance, fees and staff — with intelligence built in.",
  socialTitle: "NotifyHub.ai — School & College ERP Software with AI",
  image: "/og/default.png",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <VerticalsIntro />
      <CoreIdea />
      <ProductCards />
      <ProductShowcase />
      <AiCapabilities />
      <SchoolAi />
      <PlatformTeaser />
      <WhyNotifyHub />
      <EnterpriseCapabilities />
      <SecurityTrust />
      <CustomerValue />
      <FutureVerticals />
      <CustomerStories />
      <FaqSection
        items={HOME_FAQ}
        title="What NotifyHub is, in plain terms."
        lede="The questions institutions ask before they get in touch."
      />
      <FinalCta />
      <JsonLd
        id="home-jsonld"
        data={[
          webPageSchema({
            path: "/",
            name: "NotifyHub.ai — School & College ERP Software with AI",
            description:
              "AI-powered school ERP and college ERP software for institutions in India.",
          }),
          faqSchema(HOME_FAQ, "/"),
        ]}
      />
    </>
  );
}
