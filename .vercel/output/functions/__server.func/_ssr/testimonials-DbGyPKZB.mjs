import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-KO0_9A3L.mjs";
import { a as Star, s as Quote, w as Award } from "../_libs/lucide-react.mjs";
import { n as proj_event_default, t as proj_commercial_default } from "./proj-commercial-Y9G_jUhl.mjs";
import { a as proj_wedding_default, i as proj_music_default, n as proj_corporate_default, r as proj_doc_default, t as proj_brand_default } from "./proj-corporate-Cb_-StMC.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/testimonials-DbGyPKZB.js
var import_jsx_runtime = require_jsx_runtime();
var FEATURED = {
	name: "Sofía Lima",
	role: "Creative Director, Maison Or",
	quote: "Havilah turned our brand story into a film I'd buy a ticket for. The restraint, the color, the silence between cuts — it's the closest thing to seeing your own brand in a theatre. Three campaigns in, we don't brief anyone else.",
	img: proj_brand_default
};
var QUOTES = [
	{
		name: "Daniel Cole",
		brand: "Northwind Records",
		role: "Producer",
		quote: "The grade. The pacing. The light. They saw what I felt before I could say it. Two of our last three videos broke a million views in the first week.",
		img: proj_music_default
	},
	{
		name: "Anaya & Vir",
		brand: "Wedding Film",
		role: "Clients",
		quote: "We cried watching the cut. They captured the unspoken — the look between vows, the rain on the windowpane, the way our grandmothers held hands at the end.",
		img: proj_wedding_default
	},
	{
		name: "Hiroshi Tanaka",
		brand: "Field Films",
		role: "Executive Producer",
		quote: "Six months on the road in three countries. Havilah's crew never broke focus, never missed a call sheet, and the footage shows it. They are the calmest set I've ever worked.",
		img: proj_doc_default
	},
	{
		name: "Margaret Lin",
		brand: "Helios Group",
		role: "VP Marketing",
		quote: "Our quarterly vision film became the most-watched internal asset of the year. It re-aligned 4,000 employees in seven minutes. I've never seen a video do that.",
		img: proj_corporate_default
	},
	{
		name: "Pierre Atelier",
		brand: "Atelier Ten",
		role: "Founder",
		quote: "From the first treatment, we knew. They speak the language of light — and they listen before they speak.",
		img: proj_commercial_default
	},
	{
		name: "Naveen Roy",
		brand: "Arena Co.",
		role: "Head of Live",
		quote: "Eight cameras, 12 territories, one switch. They directed a 90-minute live broadcast like a feature. No one in the room flinched.",
		img: proj_wedding_default
	}
];
var LOGOS = [
	"NETFLIX",
	"SONY",
	"APPLE",
	"VOGUE",
	"BMW",
	"NIKE",
	"ADIDAS",
	"MERCEDES",
	"DIOR",
	"HBO",
	"PRADA",
	"TIFFANY & CO."
];
function TestimonialsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Kind Words · 180+ Clients",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["What people ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-gold-text",
					children: "say."
				})] }),
				subtitle: "Trust, earned one frame at a time — from global brands and unrepeatable family moments alike.",
				image: proj_event_default,
				alt: "A cultural event captured by Havilah"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative border-b border-border bg-background py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1500px] gap-16 px-6 lg:px-12 md:grid-cols-[1fr_1.4fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: FEATURED.img,
							alt: `${FEATURED.role} project still`,
							className: "h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 ring-1 ring-inset ring-gold/20" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4" }), " Featured Testimonial"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mt-8 h-10 w-10 text-gold/70" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif mt-6 text-2xl leading-relaxed italic text-foreground/90 md:text-3xl",
							children: [
								"\"",
								FEATURED.quote,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 border-t border-border pt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-xl",
								children: FEATURED.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[11px] uppercase tracking-[0.35em] text-gold-soft",
								children: FEATURED.role
							})]
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-background py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1500px] px-6 lg:px-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-px overflow-hidden border border-border md:grid-cols-2 bg-border",
						children: QUOTES.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "relative bg-background p-10 md:p-14",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-8 w-8 text-gold/70" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-serif mt-6 text-xl leading-relaxed italic text-foreground/85 md:text-2xl",
									children: [
										"\"",
										q.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-10 flex items-center gap-5 border-t border-border pt-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: q.img,
											alt: `${q.brand} project still`,
											loading: "lazy",
											className: "h-14 w-14 object-cover ring-1 ring-gold/40"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-lg",
											children: q.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[11px] uppercase tracking-[0.3em] text-gold-soft",
											children: [
												q.role,
												" · ",
												q.brand
											]
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "ml-auto flex gap-1 text-gold",
											children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
										})
									]
								})
							]
						}, q.name))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-y border-border bg-background py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-[1500px] gap-12 px-6 lg:px-12 md:grid-cols-4 text-center",
					children: [
						{
							k: "98%",
							v: "Clients return"
						},
						{
							k: "4.97/5",
							v: "Avg. project rating"
						},
						{
							k: "27",
							v: "International awards"
						},
						{
							k: "180+",
							v: "Global clients"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-5xl text-gold",
						children: s.k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
						children: s.v
					})] }, s.v))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-background py-16 overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-[10px] uppercase tracking-[0.5em] text-gold-soft",
					children: "In good company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track mt-10 flex w-max gap-16 whitespace-nowrap px-6",
					children: [...LOGOS, ...LOGOS].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tracking-[0.4em] text-foreground/40",
						children: c
					}, `${c}-${i}`))
				})]
			})
		]
	});
}
//#endregion
export { TestimonialsPage as component };
