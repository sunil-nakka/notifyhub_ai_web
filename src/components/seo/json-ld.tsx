/**
 * Renders JSON-LD directly into the server-rendered HTML.
 *
 * Deliberately a plain <script> and not next/script: next/script with
 * strategy="afterInteractive" injects the tag only after hydration, so the
 * structured data is absent from the HTML a crawler receives first and is
 * only picked up if and when that crawler chooses to render JavaScript.
 * Structured data is cheap to inline and must never depend on hydration.
 */
export function JsonLd({
  id,
  data,
}: {
  id: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      id={id}
      type="application/ld+json"
      // JSON.stringify output is escaped so a "</script>" inside any string
      // value cannot terminate the tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
