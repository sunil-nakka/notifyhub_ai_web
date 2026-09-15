/**
 * Renders the static brand raster assets into public/.
 *
 *   logo.png            512x512  light   -> schema.org Organization.logo
 *   icon-192.png        192x192  dark    -> web app manifest
 *   icon-512.png        512x512  dark    -> web app manifest
 *   apple-touch-icon.png 180x180 dark    -> iOS home screen
 *
 * These are static files with stable URLs on purpose: structured data and a
 * web manifest both need URLs that do not change between builds, which rules
 * out Next's content-hashed icon routes.
 *
 * Run with:  node scripts/render-icons.mjs
 */
import { ImageResponse } from "next/og.js";
import { writeFile } from "node:fs/promises";

const mark = (navy) =>
  `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 545" width="520" height="545"><polygon points="0,0 0,545 247,545 247,358 164,269 164,470 89,470 88,103 92,101 225,251 332,250 127,0" fill="${navy}"/><polygon points="312,0 312,174 376,249 376,70 449,70 449,413 337,294 237,295 462,545 520,545 520,0" fill="#80c43d"/></svg>`,
  ).toString("base64")}`;

const h = (type, props = {}, ...children) => ({
  type,
  key: null,
  props: { ...props, children: children.length <= 1 ? children[0] : children },
});

function icon({ size, background, navy, pad }) {
  const inner = size - pad * 2;
  return h(
    "div",
    {
      style: {
        width: "100%", height: "100%", display: "flex",
        alignItems: "center", justifyContent: "center", background,
      },
    },
    h("img", { src: mark(navy), width: Math.round(inner * 0.955), height: inner }),
  );
}

const ASSETS = [
  { file: "logo.png", size: 512, background: "#ffffff", navy: "#143359", pad: 96 },
  { file: "icon-512.png", size: 512, background: "#0a0e14", navy: "#ffffff", pad: 104 },
  { file: "icon-192.png", size: 192, background: "#0a0e14", navy: "#ffffff", pad: 39 },
  { file: "apple-touch-icon.png", size: 180, background: "#0a0e14", navy: "#ffffff", pad: 36 },
];

for (const a of ASSETS) {
  const res = new ImageResponse(icon(a), { width: a.size, height: a.size });
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(new URL(`../public/${a.file}`, import.meta.url), buf);
  console.log(`public/${a.file}  ${a.size}x${a.size}  ${buf.length} bytes`);
}
