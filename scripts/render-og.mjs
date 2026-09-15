/**
 * Renders the static OpenGraph cards into public/og/.
 *
 * Deliberately a one-off script rather than a Next `opengraph-image.tsx`
 * route: any page that declares its own `openGraph` object replaces the
 * parent's, and the file-convention image is not re-injected, so sub-pages
 * silently lose their card. Static files under public/ give every page a
 * stable, un-hashed, cacheable image URL that social platforms can pin.
 *
 * Run with:  node scripts/render-og.mjs
 */
import { ImageResponse } from "next/og.js";
import { writeFile } from "node:fs/promises";

const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 545" width="520" height="545"><polygon points="0,0 0,545 247,545 247,358 164,269 164,470 89,470 88,103 92,101 225,251 332,250 127,0" fill="#ffffff"/><polygon points="312,0 312,174 376,249 376,70 449,70 449,413 337,294 237,295 462,545 520,545 520,0" fill="#80c43d"/></svg>`;
const MARK = `data:image/svg+xml;base64,${Buffer.from(MARK_SVG).toString("base64")}`;

const h = (type, props = {}, ...children) => ({
  type,
  key: props.key ?? null,
  props: { ...props, children: children.length <= 1 ? children[0] : children },
});

function card({ eyebrow, title, note }) {
  return h(
    "div",
    {
      style: {
        width: "100%", height: "100%", display: "flex", flexDirection: "column",
        justifyContent: "space-between", background: "#0a0e14",
        padding: "72px 80px", fontFamily: "sans-serif",
      },
    },
    h("div", { style: { display: "flex", position: "absolute", top: 0, left: 0, width: "100%", height: 8, background: "#2f5bea" } }),
    h(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 18 } },
      h("img", { src: MARK, width: 40, height: 42 }),
      h(
        "div",
        { style: { display: "flex", fontSize: 30, fontWeight: 600, color: "#ffffff" } },
        h("span", {}, "Notify"),
        h("span", { style: { color: "#80c43d" } }, "Hub"),
        h("span", { style: { color: "#6b7787" } }, ".ai"),
      ),
    ),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      h("div", { style: { display: "flex", fontSize: 21, letterSpacing: 3, color: "#92aeff", marginBottom: 22 } }, eyebrow.toUpperCase()),
      h("div", { style: { display: "flex", fontSize: 60, lineHeight: 1.1, fontWeight: 600, letterSpacing: -1.6, color: "#ffffff", maxWidth: 950 } }, title),
      note
        ? h("div", { style: { display: "flex", marginTop: 26, fontSize: 25, lineHeight: 1.4, color: "#9aa5b3", maxWidth: 900 } }, note)
        : null,
    ),
    h(
      "div",
      { style: { display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 21, color: "#6b7787" } },
      h("span", {}, "AI-powered software for real-world operations"),
      h("span", {}, "notifyhub.ai"),
    ),
  );
}

const CARDS = [
  { file: "default", eyebrow: "Vertical ERP + AI", title: "School & college ERP software with intelligence built in.", note: "Operations → ERP → Data → Intelligence → Insights → Action" },
  { file: "school", eyebrow: "School · Available", title: "School management software with AI intelligence.", note: "Admissions, academics, attendance, fees, staff and institutional analytics." },
  { file: "college", eyebrow: "College · Available", title: "College ERP built for how institutions actually run.", note: "Programs, students, academics, fees, administration and institutional intelligence." },
  { file: "hospital", eyebrow: "Hospital · Coming soon", title: "Hospital management, designed around operations.", note: "Patients, admissions, departments, billing, staff and operational intelligence." },
  { file: "restaurant", eyebrow: "Restaurant · Coming soon", title: "Restaurant operations, understood as they happen.", note: "Daily workflows and performance, read through intelligent insights." },
  { file: "platform", eyebrow: "Platform", title: "One foundation under every NotifyHub product.", note: "Identity, organizations, permissions, tenancy, data, analytics and AI." },
  { file: "ai", eyebrow: "AI Intelligence", title: "Deterministic signals. AI that explains them.", note: "What changed, why it matters, and what to do next." },
];

for (const c of CARDS) {
  const res = new ImageResponse(card(c), { width: 1200, height: 630 });
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(new URL(`../public/og/${c.file}.png`, import.meta.url), buf);
  console.log(`public/og/${c.file}.png  ${buf.length} bytes`);
}
