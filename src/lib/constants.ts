export const SITE = {
  name: "NotifyHub",
  brand: "NotifyHub.ai",
  legalName: "NotifyHub Technologies Pvt Ltd",
  url: "https://notifyhub.ai",
  tagline: "AI-powered software for real-world operations",
  descriptor:
    "NotifyHub builds industry-specific ERP software with AI-native intelligence for schools, colleges, hospitals, restaurants, and modern organizations.",
  contactEmail: "hello@notifyhub.ai",

  /* ---- Search / locale signals -------------------------------------- */
  /** BCP-47 tag for the single language edition this site publishes. */
  locale: "en-IN",
  /** OpenGraph locale form of the same thing. */
  ogLocale: "en_IN",
  /** Primary market. Used for schema areaServed, not as a hard geo-restriction. */
  primaryMarket: "IN",
  /** Stable brand mark URL for structured data. Static file, not a hashed route. */
  logoPath: "/logo.png",
  /**
   * Bump when site content materially changes. A fixed date is deliberate:
   * emitting `new Date()` tells every crawl that every page changed just now,
   * which search engines learn to discount.
   */
  contentRevision: "2026-09-15T00:00:00.000Z",

  /**
   * Verified brand profiles for schema `sameAs`. Deliberately empty until real
   * profiles exist — an unverified or placeholder URL is worse than none.
   */
  sameAs: [] as string[],
} as const;

export const PRODUCT_DOMAINS = {
  school: "https://school.notifyhub.ai",
  college: "https://college.notifyhub.ai",
  hospital: "https://hms.notifyhub.ai",
  restaurant: "https://restaurant.notifyhub.ai",
  corporate: "https://notifyhub.ai",
} as const;
