import type { FaqItem } from "./seo";

/**
 * FAQ content for existing routes.
 *
 * Every answer here is a product-capability statement or a plain fact about
 * how the software is built. Nothing here claims a customer, a result, a
 * certification, a price, or a date. Status is stated at product level only,
 * exactly as it is everywhere else on the site.
 */

export const HOME_FAQ: FaqItem[] = [
  {
    question: "What is NotifyHub.ai?",
    answer:
      "NotifyHub.ai builds industry-specific ERP software with AI intelligence built into the product architecture. Each product handles the everyday operations of one industry — a school, a college, a hospital, a restaurant — and the intelligence layer reads the record those operations produce to explain what changed and what needs attention.",
  },
  {
    question: "Is NotifyHub one product or several?",
    answer:
      "Several products on one shared technology platform. School and College are available today. Hospital and Restaurant are coming soon. The workflows differ by industry; the foundation underneath — identity, organizations, permissions, tenancy, data, analytics and intelligence — is the same in every product.",
  },
  {
    question: "Is NotifyHub an ERP or a notification tool?",
    answer:
      "NotifyHub is vertical ERP software with AI intelligence. It manages the operational record of an institution — students, academics, attendance, fees, staff, administration — and turns that record into insight. It is not a messaging, campaign or marketing-automation product.",
  },
  {
    question: "How is AI used inside NotifyHub?",
    answer:
      "Deterministic analytics compute the metrics, trends and risk signals from the operational data. AI interprets those signals in context, explains what changed, and recommends what to do next. A calculation that can be exact is never produced by a language model.",
  },
  {
    question: "Can NotifyHub run a group with several institutions or branches?",
    answer:
      "The platform is multi-tenant by design. Every record belongs to a tenant, and tenant scope is the primary isolation boundary throughout the system, so separate institutions can be operated on the same platform with their data kept apart.",
  },
  {
    question: "How do we evaluate NotifyHub for our organization?",
    answer:
      "Explore the School or College product directly, or get in touch through the contact page and describe how your institution operates. Every organization runs a slightly different structure, and that conversation is how we work out what fits.",
  },
];

export const SCHOOL_FAQ: FaqItem[] = [
  {
    question: "What does NotifyHub School cover?",
    answer:
      "Admissions and enquiries, students and academics, attendance, fees and finance, staff and administration, and institutional analytics. It is a complete school ERP: the daily operational record first, and intelligence derived from that record on top of it.",
  },
  {
    question: "Does it handle fee collection, invoices and receipts?",
    answer:
      "Yes. Fee structures, invoices, installments, payments, discounts, receipts and outstanding balances are part of the product, and Fee Collection Intelligence reads that record to surface collection trends, overdue patterns and the accounts worth following up first.",
  },
  {
    question: "Can teachers use it, or is it only for administrators?",
    answer:
      "Both. Attendance is captured by the people who take it, and teachers get class-level context through My Class / My Students — attendance patterns, academic changes and the students whose patterns are worth a closer look. Roles carry permission codes that determine what each person can reach.",
  },
  {
    question: "What does the AI actually do in a school?",
    answer:
      "Three things, each for a different person. Institution Intelligence gives management a view of what changed across the school. My Class / My Students gives teachers context scoped to their responsibility. Fee Collection Intelligence turns payment-risk signals into a prioritized follow-up list.",
  },
  {
    question: "Does NotifyHub School work for a school group with several branches?",
    answer:
      "Yes. Access is defined per organization rather than globally, and every record belongs to a tenant, so a group can run multiple schools on the platform with each institution's data scoped to itself.",
  },
  {
    question: "Is NotifyHub School available now?",
    answer:
      "Yes. School is available today. You can explore the product directly, or talk to us about what your institution needs.",
  },
];

export const COLLEGE_FAQ: FaqItem[] = [
  {
    question: "What does NotifyHub College cover?",
    answer:
      "Academic, student, administrative and institutional operations in one connected college ERP — programs and departments, student records, academics, attendance, fees and finance, staff and administration, and institutional analytics.",
  },
  {
    question: "How is the College product different from the School product?",
    answer:
      "Schools and colleges run different academic structures on the same operational spine. College models programs, departments and the academic structure a higher-education institution actually uses, while sharing the platform's identity, permissions, tenancy, data and intelligence layers with every other NotifyHub product.",
  },
  {
    question: "Does it include fee management and collection follow-up?",
    answer:
      "Yes. Fee structures, invoices, installments, payments and outstanding balances are part of the product, and the intelligence layer reads that record to show collection trends, overdue patterns and the accounts to prioritize before the next cycle.",
  },
  {
    question: "What intelligence do college management teams get?",
    answer:
      "Institution Intelligence gives a management-level view of what changed across the institution and which areas moved outside their usual range. Operational Intelligence scopes the same record to the departments and faculty responsible for it.",
  },
  {
    question: "Can a group operate multiple campuses on NotifyHub College?",
    answer:
      "Yes. The platform is multi-tenant, access is defined per organization, and tenant scope is the primary isolation boundary, so several campuses can run on the platform with their records kept separate.",
  },
  {
    question: "Is NotifyHub College available now?",
    answer:
      "Yes. College is available today. Explore the product directly, or talk to us about your institution's structure.",
  },
];

export const PLATFORM_FAQ: FaqItem[] = [
  {
    question: "What is the NotifyHub platform?",
    answer:
      "One technology foundation underneath every NotifyHub product: identity, organizations, permissions, multi-tenant architecture, workflow, data, analytics and AI intelligence. The industry products are built on it rather than beside it.",
  },
  {
    question: "Why build vertical products instead of one configurable ERP?",
    answer:
      "Because the workflows genuinely differ between a school, a college, a hospital and a restaurant, while identity, permissions, tenancy, data and intelligence do not. Verticalizing the workflow and sharing the foundation gives each industry software that fits it without rebuilding the foundation four times.",
  },
  {
    question: "How is one organization's data kept separate from another's?",
    answer:
      "Every record belongs to a tenant, and tenant scope is the primary isolation boundary throughout the platform. Permission checks are applied in both the application and the data layers, so hiding a control in the interface is never the only barrier.",
  },
  {
    question: "Is AI part of the platform or part of each product?",
    answer:
      "Part of the platform. Deterministic analytics and the AI interpretation layer sit in the foundation, so every product inherits the same intelligence architecture instead of each one implementing its own.",
  },
];

export const AI_FAQ: FaqItem[] = [
  {
    question: "Is NotifyHub AI a chatbot bolted onto the ERP?",
    answer:
      "No. Intelligence is part of the product architecture. The system computes signals from the operational record, and AI interprets those signals in place — inside the screens people already work in — rather than acting as a separate assistant you have to go and ask.",
  },
  {
    question: "Are the numbers calculated by AI?",
    answer:
      "No. Metrics, trends and risk scores are computed deterministically. AI explains what those computed signals mean in operational context and recommends what to do next. A calculation that can be exact should never be produced by a language model.",
  },
  {
    question: "What does the AI layer actually produce?",
    answer:
      "Three things for each finding: what changed, why it matters, and a recommended action. That shape is consistent across Institution Intelligence, Operational Intelligence, and Risk & Insights.",
  },
  {
    question: "Does the AI respect who is allowed to see what?",
    answer:
      "Yes. AI explains findings and proposes actions within the permissions of the person viewing them, using the same role and tenant scoping the rest of the platform enforces.",
  },
];

export const HOSPITAL_FAQ: FaqItem[] = [
  {
    question: "Is NotifyHub Hospital available?",
    answer:
      "NotifyHub Hospital is coming soon. School and College are the products available today. If hospital operations are what you need, get in touch and tell us how your organization runs.",
  },
  {
    question: "What will the hospital product cover?",
    answer:
      "A specialized hospital operating platform designed to connect patients, admissions, departments, billing, staff and operational intelligence on the same foundation the other NotifyHub products use.",
  },
  {
    question: "Are the hospital screens shown on this page real?",
    answer:
      "The interfaces on this page are illustrative and use demo data. They show how the product is designed to work, not a customer's system.",
  },
];

export const RESTAURANT_FAQ: FaqItem[] = [
  {
    question: "Is NotifyHub Restaurant available?",
    answer:
      "NotifyHub Restaurant is coming soon. School and College are the products available today. If restaurant operations are what you need, get in touch and tell us how your business runs.",
  },
  {
    question: "What will the restaurant product cover?",
    answer:
      "An industry-specific platform for restaurant operations, designed to help teams manage daily workflows and understand performance through intelligent insights, built on the same platform as every other NotifyHub product.",
  },
  {
    question: "Are the restaurant screens shown on this page real?",
    answer:
      "The interfaces on this page are illustrative and use demo data. They show how the product is designed to work, not a customer's system.",
  },
];
