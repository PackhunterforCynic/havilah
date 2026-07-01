import { r as __toESM } from "../_runtime.mjs";
import { t as contact_aerial_default } from "./contact-aerial-BbAPaEi2.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Instagram, h as Mail, l as Phone, p as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as proj_event_default, t as proj_commercial_default } from "./proj-commercial-Y9G_jUhl.mjs";
import { t as about_studio_default } from "./about-studio-DyATaaLe.mjs";
import { t as proj_drone_default } from "./proj-drone-CFamKc18.mjs";
import { t as hero_cinema_default } from "./hero-cinema-DFMLvukT.mjs";
import { M as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-ADJ0ycAA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-54WWXb1o.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function CustomCursor() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let x = window.innerWidth / 2;
		let y = window.innerHeight / 2;
		let tx = x;
		let ty = y;
		let raf = 0;
		const onMove = (e) => {
			tx = e.clientX;
			ty = e.clientY;
		};
		const tick = () => {
			x += (tx - x) * .18;
			y += (ty - y) * .18;
			el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
			raf = requestAnimationFrame(tick);
		};
		const onOver = (e) => {
			if (e.target?.closest("a, button, [data-cursor='hover']")) el.classList.add("hover");
		};
		const onOut = (e) => {
			if (e.target?.closest("a, button, [data-cursor='hover']")) el.classList.remove("hover");
		};
		window.addEventListener("mousemove", onMove);
		window.addEventListener("mouseover", onOver);
		window.addEventListener("mouseout", onOut);
		raf = requestAnimationFrame(tick);
		return () => {
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("mouseover", onOver);
			window.removeEventListener("mouseout", onOut);
			cancelAnimationFrame(raf);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "havilah-cursor",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tick t" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tick b" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tick l" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "tick r" })
		]
	});
}
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.25,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let raf = 0;
		const tick = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
		};
	}, []);
	return null;
}
/** Lightweight canvas gold-dust particle field (Three-free). */
function ParticleField() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let w = canvas.width = window.innerWidth;
		let h = canvas.height = window.innerHeight;
		const count = Math.min(90, Math.floor(w * h / 22e3));
		const particles = Array.from({ length: count }, () => ({
			x: Math.random() * w,
			y: Math.random() * h,
			r: Math.random() * 1.4 + .3,
			vx: (Math.random() - .5) * .15,
			vy: -(Math.random() * .25 + .05),
			a: Math.random() * .6 + .2
		}));
		const onResize = () => {
			w = canvas.width = window.innerWidth;
			h = canvas.height = window.innerHeight;
		};
		window.addEventListener("resize", onResize);
		let raf = 0;
		const tick = () => {
			ctx.clearRect(0, 0, w, h);
			for (const p of particles) {
				p.x += p.vx;
				p.y += p.vy;
				if (p.y < -10) {
					p.y = h + 10;
					p.x = Math.random() * w;
				}
				if (p.x < -10) p.x = w + 10;
				if (p.x > w + 10) p.x = -10;
				ctx.beginPath();
				ctx.fillStyle = `rgba(244, 213, 141, ${p.a})`;
				ctx.shadowColor = "rgba(244, 213, 141, 0.8)";
				ctx.shadowBlur = 8;
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fill();
			}
			raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", onResize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		className: "pointer-events-none fixed inset-0 z-[1] opacity-70",
		"aria-hidden": "true"
	});
}
/**
* Cinematic boot sequence:
*  – Black canvas with film-grain
*  – 24fps countdown leader (3 · 2 · 1)
*  – Rotating sweep / aperture iris
*  – HAVILAH logo reveal with gold sweep
*  – Horizontal shutters open from center, then fade out
*/
function Loader() {
	const [stage, setStage] = (0, import_react.useState)(0);
	const [count, setCount] = (0, import_react.useState)(3);
	(0, import_react.useEffect)(() => {
		const t1 = setTimeout(() => setCount(2), 380);
		const t2 = setTimeout(() => setCount(1), 760);
		const t3 = setTimeout(() => setStage(1), 1140);
		const t4 = setTimeout(() => setStage(2), 2e3);
		const t5 = setTimeout(() => setStage(3), 2700);
		return () => [
			t1,
			t2,
			t3,
			t4,
			t5
		].forEach(clearTimeout);
	}, []);
	if (stage === 3) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `havilah-loader pointer-events-none fixed inset-0 z-[9998] overflow-hidden ${stage === 2 ? "is-open" : ""}`,
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hav-shutter hav-shutter-top" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hav-shutter hav-shutter-bottom" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 noise opacity-90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.65) 75%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: stage === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-44 w-44 items-center justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hav-ring hav-ring-1" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hav-ring hav-ring-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hav-ring hav-ring-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hav-cross hav-cross-h" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hav-cross hav-cross-v" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hav-count font-display text-7xl text-gold-soft",
							children: count
						}, count)
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl tracking-[0.6em] gold-sweep md:text-5xl",
							children: "HAVILAH"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-5 h-px w-32 origin-center scale-x-0 bg-gold hav-line" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 text-[10px] uppercase tracking-[0.55em] text-foreground/60",
							children: "Cinematic Multimedia"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        .havilah-loader { background: #050505; }

        /* Shutters cover the screen, then split open from the middle */
        .hav-shutter {
          position: absolute;
          left: 0; right: 0;
          height: 50%;
          background: #050505;
          transition: transform 0.95s cubic-bezier(0.85, 0, 0.15, 1),
                      opacity 0.5s ease 0.6s;
          will-change: transform;
        }
        .hav-shutter-top    { top: 0; }
        .hav-shutter-bottom { bottom: 0; }
        .havilah-loader.is-open .hav-shutter-top    { transform: translateY(-101%); }
        .havilah-loader.is-open .hav-shutter-bottom { transform: translateY(101%); }
        .havilah-loader.is-open { opacity: 0; transition: opacity 0.6s ease 0.45s; }

        /* Iris rings */
        .hav-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid oklch(0.78 0.13 85 / 0.5);
        }
        .hav-ring-1 { inset: 0;  animation: havSpin 6s linear infinite; border-style: dashed; }
        .hav-ring-2 { inset: 14%; animation: havSpin 4s linear infinite reverse; border-color: oklch(0.88 0.10 88 / 0.6); }
        .hav-ring-3 { inset: 30%; animation: havPulse 1.2s ease-in-out infinite; border-color: oklch(0.78 0.13 85 / 0.9); }

        .hav-cross { position: absolute; background: oklch(0.78 0.13 85 / 0.55); }
        .hav-cross-h { top: 50%; left: -20px; right: -20px; height: 1px; transform: translateY(-50%); }
        .hav-cross-v { left: 50%; top: -20px; bottom: -20px; width: 1px; transform: translateX(-50%); }

        .hav-count {
          display: inline-block;
          animation: havCount 0.38s cubic-bezier(0.2, 0.7, 0.2, 1);
          text-shadow: 0 0 30px oklch(0.78 0.13 85 / 0.45);
        }

        .hav-line {
          animation: havLine 0.9s 0.15s cubic-bezier(0.7, 0, 0.2, 1) forwards;
        }

        @keyframes havSpin  { to { transform: rotate(360deg); } }
        @keyframes havPulse {
          0%, 100% { transform: scale(1);    opacity: 0.9; }
          50%      { transform: scale(1.08); opacity: 0.4; }
        }
        @keyframes havCount {
          0%   { opacity: 0; transform: scale(1.6); filter: blur(8px); }
          60%  { opacity: 1; transform: scale(1);   filter: blur(0); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes havLine {
          0%   { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hav-ring, .hav-count, .hav-line { animation: none !important; }
        }
      ` })
		]
	});
}
var links = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "Projects",
		to: "/projects"
	},
	{
		label: "Services",
		to: "/services"
	},
	{
		label: "Gallery",
		to: "/gallery"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 40);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "py-3 backdrop-blur-xl bg-background/75 border-b border-border" : "py-6"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-[1500px] items-center justify-between px-6 lg:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-xl tracking-[0.45em] text-gold",
					onClick: () => setOpen(false),
					children: "HAVILAH"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-9 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: l.to,
						className: "group relative text-[11px] uppercase tracking-[0.3em] text-foreground/70 transition hover:text-gold",
						activeProps: { className: "text-gold" },
						activeOptions: { exact: true },
						children: [l.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" })]
					}) }, l.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "hidden md:inline-flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] text-gold transition hover:bg-gold hover:text-primary-foreground",
					children: "Book Consultation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-6 bg-gold transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-6 bg-gold transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}` })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `overflow-hidden md:hidden transition-[max-height] duration-500 ${open ? "max-h-[400px]" : "max-h-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-1 px-6 py-6",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "block py-3 text-[12px] uppercase tracking-[0.35em] text-foreground/80 hover:text-gold",
					activeProps: { className: "text-gold" },
					children: l.label
				}) }, l.label))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative z-10 border-t border-border bg-background py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1500px] gap-12 px-6 lg:px-12 md:grid-cols-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl tracking-[0.4em] text-gold",
				children: "HAVILAH"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif mt-4 text-sm text-muted-foreground italic",
				children: "Where creativity meets cinematic excellence."
			})] }), [
				{
					title: "Studio",
					items: [
						"About",
						"Team",
						"Awards",
						"Press"
					]
				},
				{
					title: "Work",
					items: [
						"Projects",
						"Services",
						"Gallery",
						"Testimonials"
					]
				},
				{
					title: "Contact",
					items: [
						"+1 (000) 000-0000",
						"hello@havilah.com",
						"Mumbai · LA · London"
					]
				}
			].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "text-[11px] uppercase tracking-[0.35em] text-gold-soft",
				children: col.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-5 space-y-2 text-sm text-foreground/70",
				children: col.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "hover:text-gold transition",
					children: i
				}, i))
			})] }, col.title))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-14 max-w-[1500px] border-t border-border px-6 pt-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground lg:px-12",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Havilah Productions · All Frames Reserved"
			]
		})]
	});
}
var items = [
	{
		icon: MessageCircle,
		label: "WhatsApp",
		href: "https://wa.me/10000000000"
	},
	{
		icon: Instagram,
		label: "Instagram",
		href: "#"
	},
	{
		icon: Phone,
		label: "Call",
		href: "tel:+10000000000"
	},
	{
		icon: Mail,
		label: "Email",
		href: "mailto:hello@havilah.com"
	}
];
function FloatingSocials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex",
		children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: it.href,
			"aria-label": it.label,
			className: "group flex h-11 w-11 items-center justify-center rounded-full glass text-gold-soft transition hover:bg-gold hover:text-primary-foreground",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-4 w-4" })
		}) }, it.label))
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-7xl text-gold",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-xl tracking-[0.3em] text-foreground",
					children: "CUT."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif mt-3 italic text-muted-foreground",
					children: "That scene didn't make the final edit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center border border-gold/60 px-6 py-3 text-[11px] uppercase tracking-[0.4em] text-gold transition hover:bg-gold hover:text-primary-foreground",
						children: "Back to studio"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-xl tracking-[0.3em] text-foreground",
					children: "The reel snapped."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif mt-3 italic text-muted-foreground",
					children: "Something went wrong on our end. Try again, or head back to the studio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.4em] text-primary-foreground transition hover:bg-gold-soft",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center border border-gold/60 px-6 py-3 text-[11px] uppercase tracking-[0.4em] text-gold transition hover:bg-gold hover:text-primary-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Havilah — Cinematic Multimedia Production" },
			{
				name: "description",
				content: "Where Creativity Meets Cinematic Excellence. Films, commercials, music videos and brand stories crafted with award-winning craft."
			},
			{
				name: "author",
				content: "Havilah"
			},
			{
				property: "og:title",
				content: "Havilah — Cinematic Multimedia Production"
			},
			{
				property: "og:description",
				content: "We don't create videos. We create experiences."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingSocials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$7 = () => import("./testimonials-DbGyPKZB.mjs");
var Route$7 = createFileRoute("/testimonials")({
	head: () => ({ meta: [
		{ title: "Testimonials — Words from Havilah Clients" },
		{
			name: "description",
			content: "What brands, artists, producers and couples say about working with Havilah — cinematic craft, calm sets and human partnership."
		},
		{
			property: "og:title",
			content: "Testimonials — Havilah"
		},
		{
			property: "og:description",
			content: "Words from the people we've made films with."
		},
		{
			property: "og:image",
			content: proj_event_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./services-B1hVphM_.mjs");
var Route$6 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Film, Photo, Color & Live by Havilah" },
		{
			name: "description",
			content: "Cinematic production end-to-end: directing, cinematography, photography, color grading, live streaming, podcast, music video and VFX."
		},
		{
			property: "og:title",
			content: "Services — Havilah"
		},
		{
			property: "og:description",
			content: "One studio. Every discipline. Cinema-grade craft."
		},
		{
			property: "og:image",
			content: about_studio_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./projects-Iyj7ANej.mjs");
var Route$5 = createFileRoute("/projects")({
	head: () => ({ meta: [
		{ title: "Projects — Havilah Cinematic Works & Case Studies" },
		{
			name: "description",
			content: "Selected cinematic work by Havilah — commercials, brand films, weddings, music videos, documentaries and live productions for global clients."
		},
		{
			property: "og:title",
			content: "Projects — Havilah"
		},
		{
			property: "og:description",
			content: "A decade of frames. Each one a chapter."
		},
		{
			property: "og:image",
			content: proj_commercial_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./internship-ruD4TM05.mjs");
var Route$4 = createFileRoute("/internship")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./gallery-DmTLmp8l.mjs");
var Route$3 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Stills, Frames & Behind the Scenes" },
		{
			name: "description",
			content: "A visual archive of stills, on-set frames and behind-the-scenes captured across Havilah productions."
		},
		{
			property: "og:title",
			content: "Gallery — Havilah"
		},
		{
			property: "og:description",
			content: "Stills, frames and behind-the-scenes."
		},
		{
			property: "og:image",
			content: proj_drone_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./courses-DhrXBG9T.mjs");
var Route$2 = createFileRoute("/courses")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./contact-COX_Rlss.mjs");
var Route$1 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Begin Your Film with Havilah Studio" },
		{
			name: "description",
			content: "Brief Havilah for cinematic film, commercials, weddings, music videos, brand & live productions. Studios in Mumbai, Los Angeles & London. Reply within one business day."
		},
		{
			property: "og:title",
			content: "Contact — Havilah"
		},
		{
			property: "og:description",
			content: "Let's frame your story together."
		},
		{
			property: "og:image",
			content: contact_aerial_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BLEsRQzu.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Havilah — Where Creativity Meets Cinematic Excellence" },
		{
			name: "description",
			content: "Havilah is a cinematic multimedia production studio crafting commercials, films, music videos, weddings and brand stories with award-winning craft."
		},
		{
			property: "og:title",
			content: "Havilah — Cinematic Multimedia Production"
		},
		{
			property: "og:description",
			content: "We don't create videos. We create experiences."
		},
		{
			property: "og:image",
			content: hero_cinema_default
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
var TestimonialsRoute = Route$7.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$8
});
var ServicesRoute = Route$6.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$8
});
var ProjectsRoute = Route$5.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$8
});
var InternshipRoute = Route$4.update({
	id: "/internship",
	path: "/internship",
	getParentRoute: () => Route$8
});
var GalleryRoute = Route$3.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$8
});
var CoursesRoute = Route$2.update({
	id: "/courses",
	path: "/courses",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$1.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	ContactRoute,
	CoursesRoute,
	GalleryRoute,
	InternshipRoute,
	ProjectsRoute,
	ServicesRoute,
	TestimonialsRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
