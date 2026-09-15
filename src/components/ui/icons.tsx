import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const IconSchool = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z" />
    <path d="M6.5 11.6V16c0 1.2 2.5 2.6 5.5 2.6s5.5-1.4 5.5-2.6v-4.4" />
    <path d="M20.5 10v4.5" />
  </svg>
);

export const IconCollege = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 10.5 12 6l8 4.5" />
    <path d="M5.5 10.8V19" />
    <path d="M9.5 12.2V19" />
    <path d="M14.5 12.2V19" />
    <path d="M18.5 10.8V19" />
    <path d="M3.5 19h17" />
  </svg>
);

export const IconHospital = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="4.5" width="16" height="15" rx="1.5" />
    <path d="M12 8.5v6" />
    <path d="M9 11.5h6" />
    <path d="M8 19.5v-2.2h8v2.2" />
  </svg>
);

export const IconRestaurant = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 4v7a2 2 0 0 0 2 2v7" />
    <path d="M5 4v4.5" />
    <path d="M9 4v4.5" />
    <path d="M16.5 4c-1.4 1.3-2 3-2 5s.7 3 2 3.2V20" />
  </svg>
);

export const IconPlatform = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3.5 20 8l-8 4.5L4 8l8-4.5Z" />
    <path d="m4 12 8 4.5L20 12" />
    <path d="m4 16 8 4.5L20 16" />
  </svg>
);

export const IconAi = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M10.5 10.8h3M10.5 13.4h3" />
    <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" />
  </svg>
);

export const IconInstitution = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3.5 20.5h17" />
    <path d="M5.5 20.5V9.5M9.5 20.5V9.5M14.5 20.5V9.5M18.5 20.5V9.5" />
    <path d="M3.5 9.5 12 4l8.5 5.5" />
  </svg>
);

export const IconOperations = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="m7.5 15 3.5-4 3 2.5 4.5-6" />
  </svg>
);

export const IconRisk = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4.2 3.8 18.4h16.4L12 4.2Z" />
    <path d="M12 10v3.6" />
    <path d="M12 16.2h.01" />
  </svg>
);

export const IconEducation = IconSchool;
export const IconHealthcare = IconHospital;
export const IconHospitality = IconRestaurant;

export const IconArrow = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h13" />
    <path d="m12.5 6.5 5.5 5.5-5.5 5.5" />
  </svg>
);

export const IconChevron = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m7 10 5 5 5-5" />
  </svg>
);

export const IconExternal = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M13.5 5.5H18.5V10.5" />
    <path d="M18.5 5.5 11 13" />
    <path d="M17 14.5v3a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 5 17.5v-9A1.5 1.5 0 0 1 6.5 7h3" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m5.5 12.5 4 4 9-9" />
  </svg>
);

export const IconSearch = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="6" />
    <path d="m15.5 15.5 4 4" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3.5 5 6v6c0 4 3 6.8 7 8.5 4-1.7 7-4.5 7-8.5V6l-7-2.5Z" />
  </svg>
);

export const IconKey = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="8" cy="12" r="3.5" />
    <path d="M11.5 12H20" />
    <path d="M17 12v3M14 12v2" />
  </svg>
);

export const IconLayers = IconPlatform;

export const IconAudit = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 3.5h8.5L19 8v12.5H6z" />
    <path d="M14 3.5V8h5" />
    <path d="M9 12h6M9 15.5h4" />
  </svg>
);

export const IconIsolation = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5" width="7" height="14" rx="1.5" />
    <rect x="13.5" y="5" width="7" height="14" rx="1.5" />
    <path d="M12 3v18" strokeDasharray="2 3" />
  </svg>
);

export const IconScale = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="4.5" width="17" height="5" rx="1.5" />
    <rect x="3.5" y="14.5" width="17" height="5" rx="1.5" />
    <path d="M7 7h.01M7 17h.01" />
  </svg>
);

export const IconApi = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m9 8-4 4 4 4" />
    <path d="m15 8 4 4-4 4" />
  </svg>
);

export const IconGovernance = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3.5 5 6v6c0 4 3 6.8 7 8.5 4-1.7 7-4.5 7-8.5V6l-7-2.5Z" />
    <path d="m9.2 12.2 2 2 3.6-3.8" />
  </svg>
);

export const IconRole = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8.5" r="3.2" />
    <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
  </svg>
);

export const IconOrg = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="9.5" y="3.5" width="5" height="4" rx="1" />
    <rect x="3" y="16.5" width="5" height="4" rx="1" />
    <rect x="16" y="16.5" width="5" height="4" rx="1" />
    <path d="M12 7.5v4M5.5 16.5v-2.5h13v2.5M12 11.5v2.5" />
  </svg>
);

export const PRODUCT_ICONS = {
  school: IconSchool,
  college: IconCollege,
  hospital: IconHospital,
  restaurant: IconRestaurant,
  platform: IconPlatform,
  ai: IconAi,
  institution: IconInstitution,
  operations: IconOperations,
  risk: IconRisk,
  education: IconEducation,
  healthcare: IconHealthcare,
  hospitality: IconHospitality,
} as const;

export type IconName = keyof typeof PRODUCT_ICONS;

export const IconAttendance = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="5.5" width="17" height="15" rx="1.5" />
    <path d="M3.5 10h17" />
    <path d="M8 3.5v4M16 3.5v4" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

export const IconFees = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="6" width="18" height="12" rx="1.5" />
    <circle cx="12" cy="12" r="2.6" />
    <path d="M6.5 9.5h.01M17.5 14.5h.01" />
  </svg>
);

export const IconAnalytics = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <rect x="7" y="12" width="3" height="5" rx="0.6" />
    <rect x="12" y="8.5" width="3" height="8.5" rx="0.6" />
    <rect x="17" y="10.5" width="3" height="6.5" rx="0.6" />
  </svg>
);
