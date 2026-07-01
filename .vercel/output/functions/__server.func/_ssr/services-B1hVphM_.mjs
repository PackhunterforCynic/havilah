import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-KO0_9A3L.mjs";
import { D as Aperture, O as Sparkles, S as Camera, T as ArrowRight, c as Plus, d as Minus, f as Mic, i as Tv, r as Video, u as Music, v as Film } from "../_libs/lucide-react.mjs";
import { t as about_studio_default } from "./about-studio-DyATaaLe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-B1hVphM_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = [
	{
		icon: Film,
		title: "Film Production",
		body: "Narrative shorts, commercials and brand films — directing, producing and post under one roof. We score, sound-design and grade in-house.",
		price: "From $12K",
		deliv: "2 – 8 weeks"
	},
	{
		icon: Camera,
		title: "Photography",
		body: "Editorial, lookbook and campaign stills shot alongside motion crews. One trip, two formats, unified art direction.",
		price: "From $3K",
		deliv: "5 – 10 days"
	},
	{
		icon: Video,
		title: "Cinematography",
		body: "Crewed shoots with Arri / Sony cinema bodies, prime glass and seasoned operators. Day-rated or full package.",
		price: "Day rate",
		deliv: "On request"
	},
	{
		icon: Mic,
		title: "Podcast & Audio",
		body: "In-studio recordings, location sound, sound design and dialog editing. Designed-for-discovery from the first cue.",
		price: "From $1.5K",
		deliv: "1 – 3 weeks"
	},
	{
		icon: Aperture,
		title: "Color Grading",
		body: "DaVinci Resolve grades — from filmic naturalism to high-fashion punch. ACES pipeline, HDR-ready, broadcast-safe.",
		price: "Per finish",
		deliv: "3 – 7 days"
	},
	{
		icon: Tv,
		title: "Live Streaming",
		body: "Multi-cam broadcasts, hybrid events and direct-to-platform delivery. Up to 8 angles, simulcast to every major channel.",
		price: "Per event",
		deliv: "Same-day"
	},
	{
		icon: Music,
		title: "Music Videos",
		body: "Full visual identity for artists — concept, treatment, production, post. From debut singles to global tours.",
		price: "From $8K",
		deliv: "3 – 6 weeks"
	},
	{
		icon: Sparkles,
		title: "VFX & Motion",
		body: "Title design, compositing, 3D and motion graphics. The finishing touch that lifts good to remarkable.",
		price: "Per scope",
		deliv: "2 – 4 weeks"
	}
];
var PROCESS = [
	{
		n: "01",
		t: "Discovery",
		d: "We listen. We ask the hard questions. We define the story and the audience before a single frame."
	},
	{
		n: "02",
		t: "Pre-Production",
		d: "Treatments, storyboards, locations, casting, crews — every detail rehearsed on paper so the set runs silent."
	},
	{
		n: "03",
		t: "Production",
		d: "Cinema-grade capture anywhere in the world. Lean crews. Long lenses. Unhurried takes."
	},
	{
		n: "04",
		t: "Post & Finishing",
		d: "Edit, sound, color, VFX — finished to broadcast and cinema-release standard in our in-house suites."
	},
	{
		n: "05",
		t: "Delivery",
		d: "Master files, social cuts, archives — packaged and versioned for every platform and territory."
	}
];
var FAQ = [
	{
		q: "What does a typical engagement look like?",
		a: "Most projects begin with a 30-minute discovery call, followed by a written treatment within a week. Production timelines run 4 – 12 weeks depending on scope; we work to fixed quotes, not open-ended retainers."
	},
	{
		q: "Do you travel?",
		a: "Yes — Havilah crews regularly shoot across Asia, Europe and the Americas. Travel and per-diems are quoted transparently on a per-project basis."
	},
	{
		q: "Can you handle the entire post-production?",
		a: "Yes. Editorial, sound, color, VFX and motion graphics are all delivered in-house from our Mumbai and LA suites — no third-party finishing."
	},
	{
		q: "Do you own your gear?",
		a: "We own a complete Arri Alexa 35 / Sony VENICE 2 package with Cooke and Zeiss primes, plus DJI Inspire 3 drones. Specialist gear is rented per project."
	},
	{
		q: "What's the smallest project you take on?",
		a: "Single-day shoots from around $3K. We're equally comfortable on a one-camera podcast as we are on a multi-territory campaign."
	}
];
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "What we do · End-to-end",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Cinema-grade ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-gold-text",
					children: "craft."
				})] }),
				subtitle: "From a single still to a full feature — one studio, every discipline, fixed-quote engagements.",
				image: about_studio_default,
				alt: "Havilah crew on a cinematic set"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-background py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1500px] px-6 lg:px-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-px overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-4 bg-border",
						children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group relative bg-background p-10 transition-colors hover:bg-secondary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-8 w-8 text-gold transition-transform duration-500 group-hover:-translate-y-1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 font-display text-2xl",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif mt-4 text-sm leading-relaxed text-foreground/70",
									children: s.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex items-center justify-between border-t border-border pt-5 text-[10px] uppercase tracking-[0.35em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold-soft",
										children: s.price
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: s.deliv
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 origin-left bg-gold transition-transform duration-500 group-hover:scale-x-100" })
							]
						}, s.title))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-background py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1500px] px-6 lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-[0.5em] text-gold",
								children: "How we work"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-6 font-display text-5xl md:text-6xl",
								children: ["The ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-gold-text",
									children: "Process."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif mx-auto mt-6 max-w-2xl text-lg italic text-foreground/65",
								children: "Five chapters. No surprises. Every milestone signed off before we move."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative grid gap-12 md:grid-cols-5",
						children: PROCESS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-5xl text-gold/40",
									children: p.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl",
									children: p.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif mt-3 text-sm leading-relaxed text-foreground/65",
									children: p.d
								})
							]
						}, p.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-background py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-6 lg:px-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-14 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.5em] text-gold",
							children: "Common Questions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl md:text-5xl",
							children: ["Before you ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-gold-text",
								children: "brief us."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border border-y border-border",
						children: FAQ.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
							q: item.q,
							a: item.a
						}, i))
					})]
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
								"Ready to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gradient-gold-text",
									children: "begin"
								}),
								"?"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif mt-6 text-lg italic text-foreground/70",
							children: "One brief. One quote. One unforgettable film."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/contact",
							className: "mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.4em] text-primary-foreground hover:bg-gold-soft shadow-gold",
							children: ["Request a Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			})
		]
	});
}
function FAQItem({ q, a }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen((o) => !o),
			className: "flex w-full items-center justify-between gap-6 text-left",
			"aria-expanded": open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg md:text-xl",
				children: q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex h-9 w-9 flex-shrink-0 items-center justify-center border border-gold/50 text-gold",
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `grid overflow-hidden font-serif text-foreground/70 transition-all duration-500 ${open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "overflow-hidden text-base leading-relaxed",
				children: a
			})
		})]
	});
}
//#endregion
export { ServicesPage as component };
