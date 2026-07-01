import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-KO0_9A3L.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, subtitle, image, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[70svh] min-h-[520px] w-full overflow-hidden noise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt,
				className: "absolute inset-0 h-full w-full object-cover",
				style: { filter: "saturate(1.05)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.95) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-spot)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-6 pb-20 lg:px-12 lg:pb-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] uppercase tracking-[0.5em] text-gold",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl",
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif mt-6 max-w-2xl text-lg italic text-foreground/80 md:text-xl",
						children: subtitle
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
