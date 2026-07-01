import { r as __toESM } from "../_runtime.mjs";
import { t as contact_aerial_default } from "./contact-aerial-BbAPaEi2.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { D as Aperture, E as ArrowDown, O as Sparkles, S as Camera, T as ArrowRight, a as Star, f as Mic, i as Tv, k as CirclePlay, m as MapPin, r as Video, s as Quote, u as Music, v as Film, w as Award } from "../_libs/lucide-react.mjs";
import { n as proj_event_default, t as proj_commercial_default } from "./proj-commercial-Y9G_jUhl.mjs";
import { t as about_studio_default } from "./about-studio-DyATaaLe.mjs";
import { t as proj_drone_default } from "./proj-drone-CFamKc18.mjs";
import { a as proj_wedding_default, i as proj_music_default, n as proj_corporate_default, r as proj_doc_default, t as proj_brand_default } from "./proj-corporate-Cb_-StMC.mjs";
import { n as proj_podcast_default, t as proj_live_default } from "./proj-podcast-CSZoV9lP.mjs";
import { t as hero_cinema_default } from "./hero-cinema-DFMLvukT.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BLEsRQzu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var team_1_default = "/assets/team-1-DCmKViU6.jpg";
var team_2_default = "/assets/team-2-DG8ZM9o2.jpg";
var team_3_default = "/assets/team-3-RcDWN4dP.jpg";
var team_4_default = "/assets/team-4-1dR0T8tS.jpg";
var IMAGES = {
	projWedding: proj_wedding_default,
	projCommercial: proj_commercial_default,
	projMusic: proj_music_default,
	projDoc: proj_doc_default,
	projBrand: proj_brand_default,
	projLive: proj_live_default,
	projCorporate: proj_corporate_default,
	projPodcast: proj_podcast_default,
	projEvent: proj_event_default,
	projDrone: proj_drone_default,
	about: about_studio_default,
	team1: team_1_default,
	team2: team_2_default,
	team3: team_3_default,
	team4: team_4_default
};
var FEATURED_PROJECTS = [
	{
		title: "Eternal Vows",
		category: "Wedding",
		img: proj_wedding_default
	},
	{
		title: "Midnight Drive",
		category: "Commercial",
		img: proj_commercial_default
	},
	{
		title: "Amber Tour",
		category: "Music Video",
		img: proj_music_default
	},
	{
		title: "The Last Craftsman",
		category: "Documentary",
		img: proj_doc_default
	},
	{
		title: "Maison Or",
		category: "Brand Film",
		img: proj_brand_default
	},
	{
		title: "Live Broadcast 24",
		category: "Live Production",
		img: proj_live_default
	}
];
var SERVICE_TILES = [
	{
		icon: Film,
		label: "Film Production"
	},
	{
		icon: Camera,
		label: "Photography"
	},
	{
		icon: Video,
		label: "Cinematography"
	},
	{
		icon: Mic,
		label: "Podcast & Audio"
	},
	{
		icon: Aperture,
		label: "Color Grading"
	},
	{
		icon: Tv,
		label: "Live Streaming"
	},
	{
		icon: Music,
		label: "Music Videos"
	},
	{
		icon: Sparkles,
		label: "VFX & Motion"
	}
];
var TEAM = [
	{
		name: "Arjun Mehta",
		role: "Founder · Director",
		img: team_1_default
	},
	{
		name: "Elena Park",
		role: "Lead Cinematographer",
		img: team_2_default
	},
	{
		name: "Ravi Kapoor",
		role: "Senior Colorist",
		img: team_3_default
	},
	{
		name: "Marcus Hayes",
		role: "Head of Post",
		img: team_4_default
	}
];
var HOME_TESTIMONIALS = [
	{
		name: "Sofía Lima",
		brand: "Maison Or",
		quote: "Havilah turned our brand story into a film I'd buy a ticket for.",
		img: proj_brand_default,
		views: "1.2M",
		likes: "84K"
	},
	{
		name: "Daniel Cole",
		brand: "Northwind Records",
		quote: "The grade. The pacing. The light. They saw what I felt.",
		img: proj_music_default,
		views: "3.4M",
		likes: "210K"
	},
	{
		name: "Anaya & Vir",
		brand: "Wedding Film",
		quote: "We cried watching the cut. They captured the unspoken.",
		img: proj_wedding_default,
		views: "780K",
		likes: "62K"
	}
];
var CLIENTS = [
	"NETFLIX",
	"SONY",
	"APPLE",
	"VOGUE",
	"BMW",
	"NIKE",
	"ADIDAS",
	"MERCEDES",
	"DIOR",
	"HBO"
];
var aboutImg = IMAGES.about;
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProjects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientsMarquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Team, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsWall, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryPreview, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactCTA, {})
		]
	});
}
function Hero() {
	const taglineRef = (0, import_react.useRef)(null);
	const fullText = "We Don't Create Videos. We Create Experiences.";
	(0, import_react.useEffect)(() => {
		const el = taglineRef.current;
		if (!el) return;
		let i = 0;
		el.textContent = "";
		const timer = window.setInterval(() => {
			i++;
			el.textContent = fullText.slice(0, i);
			if (i >= 46) window.clearInterval(timer);
		}, 45);
		return () => window.clearInterval(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative h-[100svh] w-full overflow-hidden noise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_cinema_default,
				alt: "Cinematic camera in golden light",
				className: "absolute inset-0 h-full w-full object-cover scale-110",
				style: { filter: "saturate(1.05) contrast(1.05)" },
				width: 1920,
				height: 1080
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-overlay)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "var(--gradient-spot)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-6 text-[10px] uppercase tracking-[0.6em] text-gold-soft/80",
						children: "Est. Mumbai · Los Angeles · London"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-[14vw] leading-none gold-sweep md:text-[10rem]",
						children: "HAVILAH"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-serif mt-8 max-w-2xl text-lg italic text-foreground/85 md:text-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { ref: taglineRef }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 inline-block h-5 w-px animate-pulse bg-gold align-middle" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-col items-center gap-4 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							variant: "primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "h-4 w-4" }), "View Projects"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							variant: "ghost",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/contact",
								children: "Book Consultation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-[10px] uppercase tracking-[0.4em] text-gold-soft/70",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "scroll-arrow mx-auto mt-2 h-5 w-5 text-gold" })]
			})
		]
	});
}
function MagneticButton({ children, variant = "primary" }) {
	const ref = (0, import_react.useRef)(null);
	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - r.left - r.width / 2) * .25;
		const y = (e.clientY - r.top - r.height / 2) * .4;
		el.style.transform = `translate(${x}px, ${y}px)`;
	};
	const onLeave = () => {
		if (ref.current) ref.current.style.transform = "translate(0,0)";
	};
	const base = "magnet relative inline-flex items-center gap-3 px-8 py-4 text-[11px] uppercase tracking-[0.4em] transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		onMouseMove: onMove,
		onMouseLeave: onLeave,
		className: variant === "primary" ? `${base} bg-gold text-primary-foreground hover:bg-gold-soft shadow-gold` : `${base} border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground`,
		children
	});
}
function About() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".about-img", {
				yPercent: 18,
				scrollTrigger: {
					trigger: ref.current,
					start: "top bottom",
					end: "bottom top",
					scrub: true
				}
			});
			gsapWithCSS.from(".about-line", {
				y: 60,
				opacity: 0,
				stagger: .12,
				duration: 1.1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: ref.current,
					start: "top 70%"
				}
			});
		}, ref);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "relative overflow-hidden bg-background py-32 md:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1500px] gap-16 px-6 lg:px-12 md:grid-cols-2 md:gap-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/5] overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: aboutImg,
					alt: "Havilah crew on location at golden hour",
					loading: "lazy",
					className: "about-img h-[120%] w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 ring-1 ring-inset ring-gold/20" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "about-line text-[11px] uppercase tracking-[0.5em] text-gold",
						children: "About Havilah"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "about-line mt-6 font-display text-4xl leading-tight md:text-6xl",
						children: [
							"A studio built on ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-gold-text",
								children: "light, story"
							}),
							" and silence between frames."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "about-line font-serif mt-8 text-lg leading-relaxed text-foreground/75 md:text-xl",
						children: "For a decade, Havilah has crafted cinema-grade work for global brands, artists, and unrepeatable moments. We obsess over restraint, color, and the millisecond before a cut."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "about-line mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8",
						children: [
							{
								k: "12+",
								v: "Years"
							},
							{
								k: "320",
								v: "Films"
							},
							{
								k: "27",
								v: "Awards"
							}
						].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl text-gold md:text-4xl",
							children: s.k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
							children: s.v
						})] }, s.v))
					})
				]
			})]
		})
	});
}
function FeaturedProjects() {
	const trackRef = (0, import_react.useRef)(null);
	const sectionRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!sectionRef.current || !trackRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			const track = trackRef.current;
			const scrollAmount = track.scrollWidth - window.innerWidth + 80;
			gsapWithCSS.to(track, {
				x: -scrollAmount,
				ease: "none",
				scrollTrigger: {
					trigger: sectionRef.current,
					pin: true,
					scrub: 1,
					start: "top top",
					end: () => `+=${scrollAmount}`
				}
			});
		}, sectionRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: sectionRef,
		className: "relative overflow-hidden bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute left-6 top-32 z-10 lg:left-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] uppercase tracking-[0.5em] text-gold",
				children: "Featured"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-4 font-display text-5xl md:text-7xl",
				children: ["The ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-gold-text",
					children: "Reel."
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-[100svh] flex items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: trackRef,
				className: "flex gap-8 pl-6 lg:pl-12 will-change-transform",
				children: [FEATURED_PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative h-[70vh] w-[78vw] flex-shrink-0 overflow-hidden md:w-[55vw] lg:w-[42vw]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0",
							style: { background: "linear-gradient(180deg, transparent 30%, rgba(8,8,8,0.85) 100%)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute left-8 bottom-10 right-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] uppercase tracking-[0.4em] text-gold-soft",
									children: [
										String(i + 1).padStart(2, "0"),
										" · ",
										p.category
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-3xl md:text-5xl",
									children: p.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100",
									children: ["Watch film ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15" })
					]
				}, p.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-[20vw] flex-shrink-0" })]
			})
		})]
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-background py-32 md:py-44",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-60",
			style: { background: "var(--gradient-spot)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px] px-6 text-center lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] uppercase tracking-[0.5em] text-gold",
					children: "What we do"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-6 font-display text-5xl md:text-7xl",
					children: ["Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-gold-text",
						children: "Craft."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif mx-auto mt-6 max-w-2xl text-lg text-foreground/70 italic",
					children: "End-to-end production — from the first scribble on a napkin to the final master."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative mx-auto mt-24 grid max-w-5xl grid-cols-2 gap-px overflow-hidden border border-border md:grid-cols-4",
					children: SERVICE_TILES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative bg-background p-8 md:p-12 transition-colors hover:bg-secondary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mx-auto h-8 w-8 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-[12px] uppercase tracking-[0.25em] text-foreground/80",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 origin-left bg-gold transition-transform duration-500 group-hover:scale-x-100" })
						]
					}, s.label))
				})
			]
		})]
	});
}
function ClientsMarquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden border-y border-border bg-background py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max gap-16 whitespace-nowrap px-6",
			children: [...CLIENTS, ...CLIENTS].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-2xl tracking-[0.4em] text-foreground/40 hover:text-gold transition",
				children: c
			}, `${c}-${i}`))
		})
	});
}
function Counter({ to, suffix = "" }) {
	const [n, setN] = (0, import_react.useState)(0);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!ref.current) return;
		const obj = { v: 0 };
		const st = ScrollTrigger.create({
			trigger: ref.current,
			start: "top 80%",
			once: true,
			onEnter: () => {
				gsapWithCSS.to(obj, {
					v: to,
					duration: 2.2,
					ease: "power2.out",
					onUpdate: () => setN(Math.round(obj.v))
				});
			}
		});
		return () => st.kill();
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n.toLocaleString(), suffix]
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-[1500px] gap-12 px-6 lg:px-12 md:grid-cols-4",
			children: [
				{
					v: 320,
					s: "+",
					l: "Films Produced"
				},
				{
					v: 27,
					s: "",
					l: "International Awards"
				},
				{
					v: 180,
					s: "+",
					l: "Global Clients"
				},
				{
					v: 12,
					s: "M",
					l: "Audience Reach"
				}
			].map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center md:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-6xl text-gold md:text-7xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: it.v,
						suffix: it.s
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground",
					children: it.l
				})]
			}, it.l))
		})
	});
}
function Team() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-background py-32 md:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] uppercase tracking-[0.5em] text-gold",
					children: "Crew"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-5xl md:text-7xl",
					children: ["Meet the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-gold-text",
						children: "Makers."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold-soft hover:text-gold",
					children: ["Full team ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: TEAM.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "group relative overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[3/4] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: m.img,
								alt: m.name,
								loading: "lazy",
								className: "h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 ring-1 ring-inset ring-gold/15" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 opacity-80",
								style: { background: "linear-gradient(180deg, transparent 50%, rgba(8,8,8,0.9) 100%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-xl",
									children: m.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-[11px] uppercase tracking-[0.3em] text-gold-soft",
									children: m.role
								})]
							})
						]
					})
				}, m.name))
			})]
		})
	});
}
function TestimonialsWall() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-32 md:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-16 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] uppercase tracking-[0.5em] text-gold",
					children: "Voices"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-5xl md:text-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-gold-text",
						children: "Loved"
					}), " by people we admire."]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: HOME_TESTIMONIALS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative overflow-hidden border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-video overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: t.img,
								alt: t.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, { className: "absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-gold transition-transform group-hover:scale-110" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-3 right-3 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold-soft",
								children: ["▶ ", t.views]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-5 w-5 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-serif mt-3 text-lg leading-relaxed italic text-foreground/85",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between border-t border-border pt-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm text-foreground",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] uppercase tracking-[0.3em] text-muted-foreground",
									children: t.brand
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 text-gold",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-current" }, i))
								})]
							})
						]
					})]
				}, t.name))
			})]
		})
	});
}
function GalleryPreview() {
	const tiles = [
		{
			img: IMAGES.projWedding,
			span: "row-span-2"
		},
		{
			img: IMAGES.projCommercial,
			span: ""
		},
		{
			img: IMAGES.projMusic,
			span: ""
		},
		{
			img: IMAGES.projDoc,
			span: "row-span-2"
		},
		{
			img: IMAGES.projBrand,
			span: ""
		},
		{
			img: IMAGES.projLive,
			span: ""
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-32 md:py-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1500px] px-6 lg:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] uppercase tracking-[0.5em] text-gold",
					children: "Gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-5xl md:text-7xl",
					children: ["Stills, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "gradient-gold-text",
						children: "unedited."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold hover:text-gold-soft",
					children: ["Open full gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[220px]",
				children: tiles.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: `group relative overflow-hidden ${t.span}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: t.img,
							alt: "",
							loading: "lazy",
							className: "h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-110"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/30" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 ring-1 ring-inset ring-gold/10" })
					]
				}, i))
			})]
		})
	});
}
function ContactCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "relative h-[90vh] overflow-hidden noise",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: contact_aerial_default,
				alt: "Cinematic coastal aerial at golden hour",
				loading: "lazy",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.95) 90%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex h-full max-w-[1500px] flex-col items-center justify-center px-6 text-center lg:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "h-10 w-10 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-8 font-display text-5xl leading-tight md:text-8xl",
						children: [
							"Let's make something ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-gold-text",
								children: "unforgettable."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif mt-6 max-w-xl text-lg italic text-foreground/80 md:text-2xl",
						children: "Tell us about your story. We'll bring the camera, the crew, and the colour."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 flex flex-col items-center gap-4 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
							variant: "primary",
							children: ["Start a Project", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+10000000000",
							className: "inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold-soft hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), "Mumbai · LA · London"]
						})]
					})
				]
			})
		]
	});
}
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
//#endregion
export { Home as component };
