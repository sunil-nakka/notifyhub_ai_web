import { PRODUCT_DOMAINS } from "./constants";

export type ProductStatus = "available" | "coming-soon" | "future";

export type ProductKey = "school" | "college" | "hospital" | "restaurant";

export interface Product {
  key: ProductKey;
  /** Short name used in navigation */
  name: string;
  /** Full product title used on cards and page headings */
  title: string;
  sector: "Education" | "Healthcare" | "Hospitality";
  status: ProductStatus;
  /** One line for navigation and compact cards */
  summary: string;
  /** Longer description for the homepage product cards */
  description: string;
  /** Route on this corporate site */
  route: string;
  /** Destination product domain */
  externalUrl: string;
  /**
   * Where the primary card CTA should point.
   * Available products link straight to the product domain.
   * Products that are not yet released link to their page on this site,
   * which states plainly that they are not available.
   */
  ctaHref: string;
  ctaLabel: string;
  icon: ProductKey;
}

export const STATUS_LABEL: Record<ProductStatus, string> = {
  available: "Available",
  "coming-soon": "Coming soon",
  future: "Exploring",
};

export const PRODUCTS: Product[] = [
  {
    key: "school",
    name: "School",
    title: "School ERP + AI",
    sector: "Education",
    status: "available",
    summary: "AI-powered school ERP.",
    description:
      "A complete operating platform for schools, with intelligent insights across students, academics, attendance, fees, staff, and institutional operations.",
    route: "/school",
    externalUrl: PRODUCT_DOMAINS.school,
    ctaHref: PRODUCT_DOMAINS.school,
    ctaLabel: "Explore School",
    icon: "school",
  },
  {
    key: "college",
    name: "College",
    title: "College ERP + AI",
    sector: "Education",
    status: "available",
    summary: "AI-powered college ERP.",
    description:
      "A connected operating platform for colleges, bringing academic, student, administrative, and institutional operations into one intelligent system.",
    route: "/college",
    externalUrl: PRODUCT_DOMAINS.college,
    ctaHref: PRODUCT_DOMAINS.college,
    ctaLabel: "Explore College",
    icon: "college",
  },
  {
    key: "hospital",
    name: "Hospital",
    title: "Hospital Management + AI",
    sector: "Healthcare",
    status: "coming-soon",
    summary: "Hospital management software with AI-native intelligence.",
    description:
      "A specialized hospital operating platform designed to connect patients, admissions, departments, billing, staff, and operational intelligence.",
    route: "/hospital",
    externalUrl: PRODUCT_DOMAINS.hospital,
    ctaHref: "/hospital",
    ctaLabel: "Explore Hospital",
    icon: "hospital",
  },
  {
    key: "restaurant",
    name: "Restaurant",
    title: "Restaurant ERP + AI",
    sector: "Hospitality",
    status: "coming-soon",
    summary: "Restaurant operations software with AI-native intelligence.",
    description:
      "An industry-specific platform for restaurant operations, helping teams manage daily workflows and understand performance through intelligent insights.",
    route: "/restaurant",
    externalUrl: PRODUCT_DOMAINS.restaurant,
    ctaHref: "/restaurant",
    ctaLabel: "Explore Restaurant",
    icon: "restaurant",
  },
];

export const getProduct = (key: ProductKey): Product =>
  PRODUCTS.find((p) => p.key === key)!;

/** Verticals under exploration. Never presented as products, and never given
 * a date, a price, or an availability claim. */
export const FUTURE_VERTICALS = [
  "Clinics",
  "Gyms",
  "Apartment communities",
  "Service businesses",
  "Insurance",
  "Finance",
  "Retail",
] as const;

/**
 * Status is a PRODUCT-level concept only. Individual capabilities inside a
 * product are described as part of the product experience and never carry a
 * status badge of their own.
 */
