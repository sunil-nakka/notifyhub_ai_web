import type { Metadata } from "next";
import { SITE } from "./constants";
import type { Product } from "./products";

/* ---------------------------------------------------------------------- *
 * Stable @id values.
 *
 * Every graph node the site emits points back at these two, so Google and
 * the AI answer engines resolve one NotifyHub entity across all pages
 * instead of one anonymous Organization per page.
 * ---------------------------------------------------------------------- */

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export const absoluteUrl = (path: string): string =>
  path.startsWith("http") ? path : `${SITE.url}${path === "/" ? "" : path}`;

type Node = Record<string, unknown>;

/* ---------------------------------------------------------------------- *
 * Organization
 * ---------------------------------------------------------------------- */

export function organizationSchema(): Node {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.brand,
    alternateName: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(SITE.logoPath),
      width: 512,
      height: 512,
      caption: `${SITE.brand} logo`,
    },
    image: absoluteUrl(SITE.logoPath),
    description: SITE.descriptor,
    slogan: SITE.tagline,
    email: SITE.contactEmail,
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "School management software",
      "School ERP",
      "College ERP",
      "Hospital management software",
      "Restaurant management software",
      "Vertical ERP",
      "Multi-tenant SaaS",
      "AI for business operations",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.contactEmail,
        areaServed: "IN",
        availableLanguage: ["English"],
        url: `${SITE.url}/contact`,
      },
    ],
    // Populated only when verified brand profiles exist.
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

/* ---------------------------------------------------------------------- *
 * WebSite
 * ---------------------------------------------------------------------- */

export function websiteSchema(): Node {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE.brand,
    url: SITE.url,
    description: SITE.descriptor,
    inLanguage: SITE.locale,
    publisher: { "@id": ORG_ID },
  };
}

/* ---------------------------------------------------------------------- *
 * Breadcrumbs
 *
 * The site has no visible breadcrumb UI, but nested routes (/ai/*,
 * /solutions/*, /legal/*) still need their hierarchy stated explicitly or
 * search engines infer it from URL shape alone.
 * ---------------------------------------------------------------------- */

export function breadcrumbSchema(
  trail: { name: string; path: string }[],
): Node {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(trail[trail.length - 1]!.path)}#breadcrumb`,
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/* ---------------------------------------------------------------------- *
 * SoftwareApplication
 *
 * No `offers` and no `aggregateRating`: the site publishes no pricing and
 * has no collected reviews, and inventing either to chase a rich result is
 * exactly the kind of claim this site does not make.
 * ---------------------------------------------------------------------- */

export function softwareApplicationSchema(
  product: Product,
  opts: { featureList: string[]; alternateName?: string },
): Node {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${absoluteUrl(product.route)}#software`,
    name: `NotifyHub ${product.name}`,
    ...(opts.alternateName ? { alternateName: opts.alternateName } : {}),
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Enterprise Resource Planning",
    operatingSystem: "Web browser, Android, iOS",
    url: absoluteUrl(product.route),
    description: product.description,
    inLanguage: SITE.locale,
    featureList: opts.featureList,
    provider: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    audience: {
      "@type": "BusinessAudience",
      audienceType: product.sector,
      geographicArea: { "@type": "Country", name: "India" },
    },
  };
}

/* ---------------------------------------------------------------------- *
 * FAQ
 * ---------------------------------------------------------------------- */

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FaqItem[], pagePath: string): Node {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(pagePath)}#faq`,
    inLanguage: SITE.locale,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/* ---------------------------------------------------------------------- *
 * WebPage — ties an individual page to the site and the organization.
 * ---------------------------------------------------------------------- */

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}): Node {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(opts.path)}#webpage`,
    url: absoluteUrl(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: SITE.locale,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

/* ---------------------------------------------------------------------- *
 * Per-page metadata
 *
 * Next replaces — it does not merge — a parent's `openGraph` object when a
 * child page declares its own. Every page that set `openGraph: { title,
 * description, url }` was therefore silently dropping og:type, og:site_name,
 * og:locale and og:image, and inheriting the HOMEPAGE's twitter:title.
 * Building page metadata through one helper makes that impossible.
 * ---------------------------------------------------------------------- */


export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export function pageMetadata(opts: {
  /** Route path, e.g. "/school". Used for canonical and og:url. */
  path: string;
  /** Title before the "| NotifyHub.ai" template is applied. */
  title: string;
  description: string;
  /** Full, self-contained title for social cards (no template is applied). */
  socialTitle?: string;
  socialDescription?: string;
  /** Static card under /public/og. Defaults to the site card. */
  image?: string;
  imageAlt?: string;
  /**
   * Thin or placeholder pages: keep them crawlable and link-following, but
   * out of the index until they carry real content.
   */
  noindex?: boolean;
}): Metadata {
  const url = absoluteUrl(opts.path);
  const image = opts.image ?? "/og/default.png";
  const socialTitle = opts.socialTitle ?? `${opts.title} | ${SITE.brand}`;
  const socialDescription = opts.socialDescription ?? opts.description;
  const imageAlt = opts.imageAlt ?? socialTitle;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: "website",
      siteName: SITE.brand,
      locale: SITE.ogLocale,
      url,
      title: socialTitle,
      description: socialDescription,
      images: [{ url: image, ...OG_IMAGE_SIZE, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [{ url: image, alt: imageAlt }],
    },
    ...(opts.noindex
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: { index: false, follow: true },
          },
        }
      : {}),
  };
}
