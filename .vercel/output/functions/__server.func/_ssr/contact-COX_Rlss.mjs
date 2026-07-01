import { r as __toESM } from "../_runtime.mjs";
import { t as contact_aerial_default } from "./contact-aerial-BbAPaEi2.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-KO0_9A3L.mjs";
import { C as Calendar, _ as Instagram, c as Plus, d as Minus, g as Linkedin, h as Mail, l as Phone, m as MapPin, o as Send, t as Youtube, y as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-COX_Rlss.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SERVICES = [
	"Film Production",
	"Commercial",
	"Wedding",
	"Music Video",
	"Documentary",
	"Brand Film",
	"Live / Event",
	"Photography",
	"Podcast",
	"Other"
];
var BUDGETS = [
	"< $5K",
	"$5K – $15K",
	"$15K – $50K",
	"$50K – $150K",
	"$150K+"
];
var STUDIOS = [
	{
		city: "Mumbai",
		line1: "Bandra West",
		line2: "Maharashtra, India",
		tz: "GMT+5:30"
	},
	{
		city: "Los Angeles",
		line1: "Silver Lake",
		line2: "California, USA",
		tz: "GMT-8"
	},
	{
		city: "London",
		line1: "Shoreditch",
		line2: "United Kingdom",
		tz: "GMT+0"
	}
];
var NEXT = [
	{
		n: "01",
		t: "We read your brief",
		d: "Every brief is read by a director, not a bot. Within one business day."
	},
	{
		n: "02",
		t: "30-min discovery call",
		d: "We talk story, audience, dates and budget. You leave with clarity."
	},
	{
		n: "03",
		t: "Written treatment",
		d: "A bespoke treatment with references, timeline and fixed-quote pricing within one week."
	}
];
var FAQ = [
	{
		q: "How quickly will you reply?",
		a: "Within one business day, every time. Urgent? Mark the subject line and we'll respond same-day."
	},
	{
		q: "Do I need a finalised budget to brief you?",
		a: "No — a rough band is enough. We'll help you understand what each tier delivers before you commit."
	},
	{
		q: "Can you sign an NDA?",
		a: "Yes. We sign mutual NDAs as standard for any project under active development."
	}
];
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		setSent(true);
		e.target.reset();
		setTimeout(() => setSent(false), 6e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
				eyebrow: "Begin · Reply within 1 business day",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Let's frame your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "gradient-gold-text",
					children: "story."
				})] }),
				subtitle: "Tell us about the project — the audience, the feeling, the deadline. We'll respond with a treatment, not a templated reply.",
				image: contact_aerial_default,
				alt: "Aerial drone view at golden hour"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-background py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 text-[10px] uppercase tracking-[0.4em] text-muted-foreground lg:px-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-gold" }), " 24h reply window"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-gold" }), " Fixed-quote engagements"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-gold" }), " Worldwide travel"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5 text-gold" }), " NDAs welcome"]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-background py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-[1500px] gap-16 px-6 lg:px-12 lg:grid-cols-[1.3fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-[0.5em] text-gold",
									children: "The Brief"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-3xl md:text-4xl",
									children: "Tell us everything."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif mt-3 text-foreground/65 italic",
									children: "All fields marked * are required."
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 md:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Your Name",
										name: "name",
										type: "text",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Email",
										name: "email",
										type: "email",
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Phone",
										name: "phone",
										type: "tel"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Company / Brand",
										name: "company",
										type: "text"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-8 md:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									label: "Service",
									name: "service",
									options: SERVICES
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									label: "Budget",
									name: "budget",
									options: BUDGETS
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Project Date",
								name: "date",
								type: "date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-[10px] uppercase tracking-[0.4em] text-gold-soft mb-3",
								children: "Tell us about your project *"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "message",
								required: true,
								rows: 6,
								className: "w-full border border-border bg-transparent px-4 py-3 font-serif text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-0",
								placeholder: "The story, the feeling, the audience. References welcome."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								className: "inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.4em] text-primary-foreground hover:bg-gold-soft shadow-gold transition-colors",
								children: [
									sent ? "Brief Received" : "Send Brief",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })
								]
							}),
							sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-sm italic text-gold",
								children: "Thank you. A director will reply personally within one business day."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "space-y-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-[0.5em] text-gold",
									children: "Reach Us Directly"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl md:text-4xl",
									children: "Direct lines."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "mt-8 space-y-5 font-serif text-foreground/80",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "mailto:hello@havilah.studio",
												className: "hover:text-gold",
												children: "hello@havilah.studio"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "tel:+919999999999",
												className: "hover:text-gold",
												children: "+91 99999 99999"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Mon – Fri · 09:00 – 19:00 IST" })]
										})
									]
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-[0.5em] text-gold",
								children: "Studios"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-6",
								children: STUDIOS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-4 border-l border-gold/40 pl-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-1 h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-baseline justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-display text-xl",
													children: s.city
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
													children: s.tz
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-serif text-sm text-foreground/65",
												children: s.line1
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-serif text-sm text-foreground/65",
												children: s.line2
											})
										]
									})]
								}, s.city))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] uppercase tracking-[0.5em] text-gold",
								children: "Follow"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 flex gap-4",
								children: [
									{
										Icon: Instagram,
										href: "#",
										label: "Instagram"
									},
									{
										Icon: Youtube,
										href: "#",
										label: "YouTube"
									},
									{
										Icon: Linkedin,
										href: "#",
										label: "LinkedIn"
									}
								].map(({ Icon, href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href,
									"aria-label": label,
									className: "inline-flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
								}, label))
							})] })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-background py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[1500px] px-6 lg:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-16 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.5em] text-gold",
							children: "What happens next"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl md:text-5xl",
							children: ["The next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gradient-gold-text",
								children: "seven days."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-10 md:grid-cols-3",
						children: NEXT.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-l border-gold/40 pl-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-4xl text-gold/50",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 font-display text-xl",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif mt-3 text-sm leading-relaxed text-foreground/65",
									children: s.d
								})
							]
						}, s.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border bg-background py-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] uppercase tracking-[0.5em] text-gold",
							children: "Quick answers"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-4xl",
							children: "Before you write."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "divide-y divide-border border-y border-border",
						children: FAQ.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
							q: item.q,
							a: item.a
						}, i))
					})]
				})
			})
		]
	});
}
function Field({ label, name, type, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-[10px] uppercase tracking-[0.4em] text-gold-soft mb-3",
		children: [label, required && " *"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		name,
		required,
		className: "w-full border-0 border-b border-border bg-transparent px-0 py-2 font-serif text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-0"
	})] });
}
function Select({ label, name, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "block text-[10px] uppercase tracking-[0.4em] text-gold-soft mb-3",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		name,
		defaultValue: "",
		className: "w-full border-0 border-b border-border bg-transparent px-0 py-2 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			disabled: true,
			className: "bg-background",
			children: "Select…"
		}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: o,
			className: "bg-background",
			children: o
		}, o))]
	})] });
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
				className: "font-display text-lg",
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
export { ContactPage as component };
