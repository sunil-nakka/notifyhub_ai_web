import { PRODUCTS, STATUS_LABEL, type ProductStatus } from "./products";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  status?: ProductStatus;
  statusLabel?: string;
  icon?: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  /** Rendered as a mega menu on desktop */
  columns: { heading?: string; links: NavLink[] }[];
  /** Optional promoted panel on the right of the mega menu */
  feature?: {
    eyebrow: string;
    title: string;
    body: string;
    href: string;
    cta: string;
  };
}

export const PRIMARY_NAV: NavGroup[] = [
  {
    label: "Products",
    columns: [
      {
        heading: "Industry products",
        links: PRODUCTS.map((p) => ({
          label: p.name,
          href: p.route,
          description: p.summary,
          status: p.status,
          statusLabel: STATUS_LABEL[p.status],
          icon: p.icon,
        })),
      },
      {
        heading: "Foundation",
        links: [
          {
            label: "Platform",
            href: "/platform",
            description:
              "The shared technology layer behind every NotifyHub product.",
            icon: "platform",
          },
        ],
      },
    ],
    feature: {
      eyebrow: "Brand architecture",
      title: "One platform. Four industries.",
      body: "Specialized workflows for each industry, built on a common technology and AI foundation.",
      href: "/platform",
      cta: "See how the platform works",
    },
  },
  {
    label: "AI",
    columns: [
      {
        heading: "Intelligence",
        links: [
          {
            label: "AI Intelligence",
            href: "/ai",
            description:
              "How AI is built into NotifyHub products at the architecture level.",
            icon: "ai",
          },
          {
            label: "Institution Intelligence",
            href: "/ai/institution-intelligence",
            description:
              "A management view of what is changing across the institution.",
            icon: "institution",
          },
          {
            label: "Operational Intelligence",
            href: "/ai/operational-intelligence",
            description:
              "Day-to-day signals for the people running the operation.",
            icon: "operations",
          },
          {
            label: "Risk & Insights",
            href: "/ai/risk-insights",
            description:
              "Deterministic risk scoring, explained in operational context.",
            icon: "risk",
          },
        ],
      },
    ],
    feature: {
      eyebrow: "Architecture",
      title: "AI with structure, not magic.",
      body: "Deterministic analytics produce the signals. AI interprets them, explains them, and recommends next steps.",
      href: "/ai",
      cta: "Read the AI architecture",
    },
  },
  {
    label: "Solutions",
    columns: [
      {
        heading: "By sector",
        links: [
          {
            label: "Education",
            href: "/solutions/education",
            description: "Schools and colleges.",
            icon: "education",
          },
          {
            label: "Healthcare",
            href: "/solutions/healthcare",
            description: "Hospitals and clinical administration.",
            icon: "healthcare",
          },
          {
            label: "Hospitality",
            href: "/solutions/hospitality",
            description: "Restaurants and multi-outlet operations.",
            icon: "hospitality",
          },
          {
            label: "Business Operations",
            href: "/solutions/business-operations",
            description: "Operating workflows shared across industries.",
            icon: "operations",
          },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        heading: "Learn",
        links: [
          { label: "Product Overview", href: "/resources" },
          { label: "Documentation", href: "/resources/documentation" },
          { label: "Case Studies", href: "/resources/case-studies" },
          { label: "Blog", href: "/resources/blog" },
          { label: "Help Center", href: "/resources/help" },
        ],
      },
    ],
  },
  {
    label: "Company",
    columns: [
      {
        heading: "NotifyHub",
        links: [
          { label: "About", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
  },
];

export const FOOTER_NAV: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Products",
    links: [
      ...PRODUCTS.map((p) => ({ label: p.name, href: p.route })),
      { label: "Platform", href: "/platform" },
    ],
  },
  {
    heading: "AI",
    links: [
      { label: "AI Intelligence", href: "/ai" },
      { label: "Institution Intelligence", href: "/ai/institution-intelligence" },
      { label: "Operational Intelligence", href: "/ai/operational-intelligence" },
      { label: "Risk & Insights", href: "/ai/risk-insights" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Education", href: "/solutions/education" },
      { label: "Healthcare", href: "/solutions/healthcare" },
      { label: "Hospitality", href: "/solutions/hospitality" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "/resources/documentation" },
      { label: "Blog", href: "/resources/blog" },
      { label: "Help Center", href: "/resources/help" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy", href: "/legal/privacy" },
      { label: "Terms", href: "/legal/terms" },
      { label: "Security", href: "/legal/security" },
    ],
  },
];
