import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/navigation/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";
import { OG_IMAGE_SIZE, organizationSchema, websiteSchema } from "@/lib/seo";
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

const DEFAULT_TITLE = "School ERP & College ERP Software with AI";
const DEFAULT_SOCIAL_TITLE = `${DEFAULT_TITLE} | ${SITE.brand}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${DEFAULT_TITLE} | ${SITE.brand}`,
    template: `%s | ${SITE.brand}`,
  },
  description: SITE.descriptor,
  applicationName: SITE.brand,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  alternates: {
    canonical: "/",
    // One language edition. x-default points at it so search engines do not
    // guess at alternates that do not exist.
    languages: { "x-default": SITE.url, "en-IN": SITE.url },
  },
  openGraph: {
    type: "website",
    siteName: SITE.brand,
    locale: SITE.ogLocale,
    url: SITE.url,
    title: DEFAULT_SOCIAL_TITLE,
    description: SITE.descriptor,
    images: [
      {
        url: "/og/default.png",
        ...OG_IMAGE_SIZE,
        alt: "NotifyHub.ai — vertical ERP software with AI intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SOCIAL_TITLE,
    description: SITE.descriptor,
    images: [{ url: "/og/default.png", alt: "NotifyHub.ai" }],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Phone numbers and addresses are not auto-linked; the site has none in body copy.
  formatDetection: { telephone: false, address: false, email: false },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={SITE.locale} className={`${inter.variable} ${plexMono.variable}`}>
      <body className="min-h-screen antialiased">
        {/* Site-wide entity graph, inlined into the server HTML. */}
        <JsonLd id="site-jsonld" data={[organizationSchema(), websiteSchema()]} />
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
