import { Container, Section, SectionHeading, cx } from "@/components/ui/primitives";
import type { FaqItem } from "@/lib/seo";

/**
 * FAQ section.
 *
 * Every question and answer is rendered as plain, always-visible text. No
 * accordion, no client JavaScript: the answers a search engine or an AI
 * answer engine needs are in the server-rendered HTML, and the FAQPage
 * structured data on the page describes exactly what a reader can see.
 */
export function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Questions we get asked.",
  lede,
  tone = "light",
  id = "faq",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  lede?: string;
  tone?: "light" | "subtle" | "dark";
  id?: string;
}) {
  const dark = tone === "dark";
  return (
    <Section tone={tone} id={id}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          lede={lede}
          tone={dark ? "dark" : "light"}
        />
        <dl className="mt-12 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.question}>
              <dt
                className={cx(
                  "text-[15.5px] leading-snug font-semibold",
                  dark ? "text-white" : "text-ink-950",
                )}
              >
                {item.question}
              </dt>
              <dd
                className={cx(
                  "mt-2.5 text-[14px] leading-relaxed",
                  dark ? "text-ink-400" : "text-ink-600",
                )}
              >
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
