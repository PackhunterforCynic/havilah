import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-KO0_9A3L.mjs";
import { T as ArrowRight, k as CirclePlay, w as Award } from "../_libs/lucide-react.mjs";
import { n as proj_event_default, t as proj_commercial_default } from "./proj-commercial-Y9G_jUhl.mjs";
import { t as proj_drone_default } from "./proj-drone-CFamKc18.mjs";
import { a as proj_wedding_default, i as proj_music_default, n as proj_corporate_default, r as proj_doc_default, t as proj_brand_default } from "./proj-corporate-Cb_-StMC.mjs";
import { n as proj_podcast_default, t as proj_live_default } from "./proj-podcast-CSZoV9lP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-Iyj7ANej.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PROJECTS = [
	{
		title: "Eternal Vows",
		category: "Wedding",
		year: "2025",
		client: "Private Commission",
		location: "Udaipur",
		img: proj_wedding_default,
		blurb: "A two-day film shot across palace courtyards — anamorphic glass, candlelight, the silence of a vow."
	},
	{
		title: "Midnight Drive",
		category: "Commercial",
		year: "2025",
		client: "Maison Or",
		location: "Los Angeles",
		img: proj_commercial_default,
		blurb: "A 60-second luxury spot pairing a vintage coupé with a single tracking shot through neon."
	},
	{
		title: "Amber Tour",
		category: "Music Video",
		year: "2024",
		client: "Northwind Records",
		location: "Berlin → Tokyo",
		img: proj_music_default,
		blurb: "Live concert documentary cut to a single unreleased track — six cities, one band, no second takes."
	},
	{
		title: "The Last Craftsman",
		category: "Documentary",
		year: "2024",
		client: "Field Films",
		location: "Kyoto",
		img: proj_doc_default,
		blurb: "An intimate portrait of a swordsmith — six months of trust before a single roll."
	},
	{
		title: "Maison Or",
		category: "Brand Film",
		year: "2024",
		client: "Maison Or",
		location: "Paris",
		img: proj_brand_default,
		blurb: "The flagship brand film — a manifesto in slow motion and gold leaf."
	},
	{
		title: "Live Broadcast 24",
		category: "Live",
		year: "2024",
		client: "Arena Co.",
		location: "Mumbai",
		img: proj_live_default,
		blurb: "Eight-camera live broadcast to 12 territories — direction, switching and finish in 90 minutes."
	},
	{
		title: "Quarterly Vision",
		category: "Corporate",
		year: "2025",
		client: "Helios Group",
		location: "London",
		img: proj_corporate_default,
		blurb: "An internal film that became the most-watched asset of the fiscal year."
	},
	{
		title: "Skybound",
		category: "Aerial",
		year: "2025",
		client: "Adventure Co.",
		location: "Iceland",
		img: proj_drone_default,
		blurb: "Cinema drones across glaciers — a one-week schedule, one weather window."
	},
	{
		title: "Night Of Light",
		category: "Event",
		year: "2024",
		client: "Cultural Trust",
		location: "Jaipur",
		img: proj_event_default,
		blurb: "Multi-camera coverage of a festival of lanterns — finished overnight for next-day release."
	},
	{
		title: "Long Form",
		category: "Podcast",
		year: "2025",
		client: "Signal Studio",
		location: "Mumbai",
		img: proj_podcast_default,
		blurb: "A four-camera podcast series — designed, lit and run from our in-house studio."
	}
];
var CATS = [
	"All",
	"Wedding",
	"Commercial",
	"Music Video",
	"Documentary",
	"Brand Film",
	"Live",
	"Corporate",
	"Aerial",
	"Event",
	"Podcast"
];
var FEATURED = PROJECTS[1];
function ProjectsPage() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Selected Works · 2014 – 2025",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["The ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-gold-text",
					children: "Archive."
				})] }),
				subtitle: "A decade of frames — assembled film by film, for the brands, artists and families who trusted us with their unrepeatable moments.",
				image: proj_commercial_default,
				alt: "A cinematic still from a Havilah commercial"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative overflow-hidden border-b border-border bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1500px] gap-0 px-0 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/3] md:aspect-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: FEATURED.img,
							alt: FEATURED.title,
							className: "absolute inset-0 h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0",
							style: { background: "linear-gradient(90deg, transparent 50%, rgba(8,8,8,0.6) 100%)" }
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center p-10 md:p-16 lg:p-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-4 w-4" }), " Featured · Cannes Lions Shortlist 2025"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-6 font-display text-4xl md:text-6xl",
								children: FEATURED.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-[11px] uppercase tracking-[0.35em] text-gold-soft",
								children: [
									FEATURED.category,
									" · ",
									FEATURED.client,
									" · ",
									FEATURED.location
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-serif mt-8 text-lg leading-relaxed text-foreground/75 md:text-xl",
								children: [FEATURED.blurb, " Directed in-house, shot on Arri Alexa 35 with Cooke S4 primes, finished in our Mumbai grading suite."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-wrap gap-8 border-t border-border pt-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "12 days"
									}), " · production"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "4.2M"
									}), " · views in 30 days"] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "+38%"
									}), " · brand lift"] })
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-background py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1500px] px-6 lg:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-12 flex flex-wrap items-end justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-[0.5em] text-gold",
								children: "Browse"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 font-display text-4xl md:text-5xl",
								children: ["By ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-gold-text",
									children: "discipline."
								})]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
								children: [
									"Showing ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: list.length
									}),
									" of ",
									PROJECTS.length
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-14 flex flex-wrap gap-3 border-b border-border pb-6",
							children: CATS.map((c) => {
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setFilter(c),
									className: `px-4 py-2 text-[10px] uppercase tracking-[0.35em] transition-colors ${filter === c ? "bg-gold text-primary-foreground" : "border border-border text-foreground/70 hover:border-gold hover:text-gold"}`,
									children: c
								}, c);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
							children: list.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "group relative overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-[4/5] overflow-hidden",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: p.img,
												alt: `${p.title} — ${p.category}`,
												loading: i < 3 ? "eager" : "lazy",
												className: "h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute inset-0",
												style: { background: "linear-gradient(180deg, transparent 30%, rgba(8,8,8,0.95) 100%)" }
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "absolute right-5 top-5 h-6 w-6 text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute left-6 bottom-6 right-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] uppercase tracking-[0.4em] text-gold-soft",
												children: [
													p.category,
													" · ",
													p.year,
													" · ",
													p.location
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 font-display text-2xl md:text-3xl",
												children: p.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-serif mt-2 text-sm text-foreground/65 line-clamp-2 italic",
												children: p.blurb
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15" })
								]
							}, p.title))
						}),
						list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "py-20 text-center font-serif text-foreground/60 italic",
							children: "No films in this chapter — yet."
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-background py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-6 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl md:text-5xl",
							children: [
								"Have a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-gold-text",
									children: "story"
								}),
								" to tell?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif mt-6 text-lg italic text-foreground/70",
							children: "Every project starts with a single conversation. Yours is next."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/contact",
							className: "mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.4em] text-primary-foreground hover:bg-gold-soft shadow-gold",
							children: ["Start a Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { ProjectsPage as component };
