import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-KO0_9A3L.mjs";
import { b as ChevronRight, n as X, x as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as proj_event_default, t as proj_commercial_default } from "./proj-commercial-Y9G_jUhl.mjs";
import { t as about_studio_default } from "./about-studio-DyATaaLe.mjs";
import { t as proj_drone_default } from "./proj-drone-CFamKc18.mjs";
import { a as proj_wedding_default, i as proj_music_default, n as proj_corporate_default, r as proj_doc_default, t as proj_brand_default } from "./proj-corporate-Cb_-StMC.mjs";
import { n as proj_podcast_default, t as proj_live_default } from "./proj-podcast-CSZoV9lP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DmTLmp8l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var IMAGES = [
	{
		src: proj_wedding_default,
		alt: "Eternal Vows — wedding film still",
		caption: "Eternal Vows · Udaipur",
		cat: "Stills",
		span: "row-span-2"
	},
	{
		src: proj_commercial_default,
		alt: "Midnight Drive — commercial still",
		caption: "Midnight Drive · LA",
		cat: "Stills",
		span: ""
	},
	{
		src: proj_music_default,
		alt: "Amber Tour — music video still",
		caption: "Amber Tour · Berlin",
		cat: "Stills",
		span: ""
	},
	{
		src: proj_doc_default,
		alt: "The Last Craftsman — documentary still",
		caption: "The Last Craftsman · Kyoto",
		cat: "Stills",
		span: "row-span-2"
	},
	{
		src: proj_brand_default,
		alt: "Maison Or — brand film still",
		caption: "Maison Or · Paris",
		cat: "Stills",
		span: ""
	},
	{
		src: proj_live_default,
		alt: "Live broadcast still",
		caption: "Live Broadcast 24 · Mumbai",
		cat: "On Set",
		span: ""
	},
	{
		src: proj_corporate_default,
		alt: "Corporate vision film still",
		caption: "Quarterly Vision · London",
		cat: "Stills",
		span: ""
	},
	{
		src: proj_drone_default,
		alt: "Aerial cinematography still",
		caption: "Skybound · Iceland",
		cat: "Aerial",
		span: "row-span-2"
	},
	{
		src: proj_event_default,
		alt: "Cultural event still",
		caption: "Night Of Light · Jaipur",
		cat: "On Set",
		span: ""
	},
	{
		src: proj_podcast_default,
		alt: "Podcast studio still",
		caption: "Long Form · Mumbai Studio",
		cat: "Studio",
		span: ""
	},
	{
		src: about_studio_default,
		alt: "Crew on location at golden hour",
		caption: "Crew at golden hour",
		cat: "Behind the Scenes",
		span: ""
	}
];
var CATS = [
	"All",
	"Stills",
	"On Set",
	"Behind the Scenes",
	"Aerial",
	"Studio"
];
function GalleryPage() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const [cat, setCat] = (0, import_react.useState)("All");
	const filtered = cat === "All" ? IMAGES : IMAGES.filter((i) => i.cat === cat);
	const close = () => setOpen(null);
	const next = () => setOpen((o) => o === null ? null : (o + 1) % filtered.length);
	const prev = () => setOpen((o) => o === null ? null : (o - 1 + filtered.length) % filtered.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Visual Archive · 1,200+ frames",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Frames & ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-gold-text",
					children: "Light."
				})] }),
				subtitle: "A scrolling album of moments — caught, composed, kept. Click any frame to enlarge.",
				image: proj_drone_default,
				alt: "Aerial cinematic still"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-background py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1500px] px-6 lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-12 flex flex-wrap gap-3 border-b border-border pb-6",
						children: CATS.map((c) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									setCat(c);
									setOpen(null);
								},
								className: `px-4 py-2 text-[10px] uppercase tracking-[0.35em] transition-colors ${cat === c ? "bg-gold text-primary-foreground" : "border border-border text-foreground/70 hover:border-gold hover:text-gold"}`,
								children: c
							}, c);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4",
						children: filtered.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(i),
							className: `group relative overflow-hidden ${img.span}`,
							"aria-label": `Open ${img.alt}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img.src,
									alt: img.alt,
									loading: i < 4 ? "eager" : "lazy",
									className: "h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-[10px] uppercase tracking-[0.35em] text-gold-soft",
										children: img.cat
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-display text-sm text-foreground",
										children: img.caption
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/40" })
							]
						}, `${img.src}-${i}`))
					})]
				})
			}),
			open !== null && filtered[open] && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[120] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm",
				onClick: close,
				role: "dialog",
				"aria-modal": "true",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: close,
						className: "absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground",
						"aria-label": "Close",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							prev();
						},
						className: "absolute left-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground",
						"aria-label": "Previous",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							next();
						},
						className: "absolute right-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground",
						"aria-label": "Next",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						onClick: (e) => e.stopPropagation(),
						className: "flex max-h-[88vh] max-w-[92vw] flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: filtered[open].src,
							alt: filtered[open].alt,
							className: "max-h-[80vh] max-w-full object-contain ring-1 ring-gold/30"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-[0.4em] text-gold-soft",
								children: filtered[open].cat
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display mt-2 text-lg",
								children: filtered[open].caption
							})]
						})]
					})
				]
			})
		]
	});
}
//#endregion
export { GalleryPage as component };
