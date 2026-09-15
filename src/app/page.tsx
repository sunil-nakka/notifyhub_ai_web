import type { Metadata } from "next";
import Script from "next/script";
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
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "NotifyHub.ai — AI-Powered ERP & Business Software",
  description: SITE.descriptor,
  alternates: { canonical: "/" },
  openGraph: {
    title: "NotifyHub.ai — AI-Powered ERP & Business Software",
    description: SITE.descriptor,
    url: SITE.url,
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.brand,
  url: SITE.url,
  description: SITE.descriptor,
};

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
      <FinalCta />
      <Script
        id="website-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
