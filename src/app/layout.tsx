import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { SITE } from "@/lib/constants";
import "./globals.css";

/* Fonts are self-hosted so the site has no runtime dependency on a font CDN. */
const inter = localFont({
  src: [{ path: "../fonts/inter-var-latin.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-inter",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "sans-serif"],
});

const plexMono = localFont({
  src: [
    { path: "../fonts/plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
});

export const viewport: Viewport = {
  themeColor: "#0a0e14",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "NotifyHub.ai — AI-Powered ERP & Business Software",
    template: "%s | NotifyHub.ai",
  },
  description: SITE.descriptor,
  applicationName: SITE.brand,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.brand,
    url: SITE.url,
    title: "NotifyHub.ai — AI-Powered ERP & Business Software",
    description: SITE.descriptor,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NotifyHub.ai — AI-Powered ERP & Business Software",
    description: SITE.descriptor,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.brand,
  legalName: SITE.legalName,
  url: SITE.url,
  description: SITE.descriptor,
  slogan: SITE.tagline,
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <Script
          id="org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
