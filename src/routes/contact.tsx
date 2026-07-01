import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Mail, Phone, MapPin, Send, Instagram, Youtube, Linkedin, Clock, Calendar, Plus, Minus,
} from "lucide-react";
import { PageHero } from "@/components/cinematic/PageHero";

import heroImg from "@/assets/contact-aerial.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Begin Your Film with Havilah Studio" },
      { name: "description", content: "Brief Havilah for cinematic film, commercials, weddings, music videos, brand & live productions. Studios in Mumbai, Los Angeles & London. Reply within one business day." },
      { property: "og:title", content: "Contact — Havilah" },
      { property: "og:description", content: "Let's frame your story together." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ContactPage,
});

const SERVICES = [
  "Film Production", "Commercial", "Wedding", "Music Video",
  "Documentary", "Brand Film", "Live / Event", "Photography", "Podcast", "Other",
];

const BUDGETS = ["< $5K", "$5K – $15K", "$15K – $50K", "$50K – $150K", "$150K+"];

const STUDIOS = [
  { city: "Mumbai", line1: "Bandra West", line2: "Maharashtra, India", tz: "GMT+5:30" },
  { city: "Los Angeles", line1: "Silver Lake", line2: "California, USA", tz: "GMT-8" },
  { city: "London", line1: "Shoreditch", line2: "United Kingdom", tz: "GMT+0" },
];

const NEXT = [
  { n: "01", t: "We read your brief", d: "Every brief is read by a director, not a bot. Within one business day." },
  { n: "02", t: "30-min discovery call", d: "We talk story, audience, dates and budget. You leave with clarity." },
  { n: "03", t: "Written treatment", d: "A bespoke treatment with references, timeline and fixed-quote pricing within one week." },
];

const FAQ = [
  { q: "How quickly will you reply?", a: "Within one business day, every time. Urgent? Mark the subject line and we'll respond same-day." },
  { q: "Do I need a finalised budget to brief you?", a: "No — a rough band is enough. We'll help you understand what each tier delivers before you commit." },
  { q: "Can you sign an NDA?", a: "Yes. We sign mutual NDAs as standard for any project under active development." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <main className="relative">
      <PageHero
        eyebrow="Begin · Reply within 1 business day"
        title={<>Let's frame your <span className="gradient-gold-text">story.</span></>}
        subtitle="Tell us about the project — the audience, the feeling, the deadline. We'll respond with a treatment, not a templated reply."
        image={heroImg}
        alt="Aerial drone view at golden hour"
      />

      {/* Promise strip */}
      <section className="border-b border-border bg-background py-6">
        <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-center gap-x-12 gap-y-3 px-6 text-[10px] uppercase tracking-[0.4em] text-muted-foreground lg:px-12">
          <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-gold" /> 24h reply window</span>
          <span className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-gold" /> Fixed-quote engagements</span>
          <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gold" /> Worldwide travel</span>
          <span className="flex items-center gap-2"><Send className="h-3.5 w-3.5 text-gold" /> NDAs welcome</span>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 lg:px-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.5em] text-gold">The Brief</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">Tell us everything.</h2>
              <p className="font-serif mt-3 text-foreground/65 italic">All fields marked * are required.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Field label="Your Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Company / Brand" name="company" type="text" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Select label="Service" name="service" options={SERVICES} />
              <Select label="Budget" name="budget" options={BUDGETS} />
            </div>

            <Field label="Project Date" name="date" type="date" />

            <div>
              <label className="block text-[10px] uppercase tracking-[0.4em] text-gold-soft mb-3">
                Tell us about your project *
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full border border-border bg-transparent px-4 py-3 font-serif text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-0"
                placeholder="The story, the feeling, the audience. References welcome."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-gold px-10 py-4 text-[11px] uppercase tracking-[0.4em] text-primary-foreground hover:bg-gold-soft shadow-gold transition-colors"
            >
              {sent ? "Brief Received" : "Send Brief"} <Send className="h-4 w-4" />
            </button>
            {sent && (
              <p className="font-serif text-sm italic text-gold">
                Thank you. A director will reply personally within one business day.
              </p>
            )}
          </form>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Reach Us Directly</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Direct lines.</h2>
              <ul className="mt-8 space-y-5 font-serif text-foreground/80">
                <li className="flex items-center gap-4">
                  <Mail className="h-4 w-4 text-gold" />
                  <a href="mailto:hello@havilah.studio" className="hover:text-gold">hello@havilah.studio</a>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="h-4 w-4 text-gold" />
                  <a href="tel:+919999999999" className="hover:text-gold">+91 99999 99999</a>
                </li>
                <li className="flex items-center gap-4">
                  <Clock className="h-4 w-4 text-gold" />
                  <span>Mon – Fri · 09:00 – 19:00 IST</span>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Studios</span>
              <ul className="mt-6 space-y-6">
                {STUDIOS.map((s) => (
                  <li key={s.city} className="flex items-start gap-4 border-l border-gold/40 pl-5">
                    <MapPin className="mt-1 h-4 w-4 text-gold" />
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <div className="font-display text-xl">{s.city}</div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.tz}</div>
                      </div>
                      <div className="font-serif text-sm text-foreground/65">{s.line1}</div>
                      <div className="font-serif text-sm text-foreground/65">{s.line2}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Follow</span>
              <div className="mt-6 flex gap-4">
                {[
                  { Icon: Instagram, href: "#", label: "Instagram" },
                  { Icon: Youtube, href: "#", label: "YouTube" },
                  { Icon: Linkedin, href: "#", label: "LinkedIn" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* What happens next */}
      <section className="border-t border-border bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mb-16 text-center">
            <span className="text-[11px] uppercase tracking-[0.5em] text-gold">What happens next</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              The next <span className="gradient-gold-text">seven days.</span>
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {NEXT.map((s) => (
              <div key={s.n} className="border-l border-gold/40 pl-6">
                <div className="font-display text-4xl text-gold/50">{s.n}</div>
                <h3 className="mt-4 font-display text-xl">{s.t}</h3>
                <p className="font-serif mt-3 text-sm leading-relaxed text-foreground/65">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Quick answers</span>
            <h2 className="mt-6 font-display text-4xl">Before you write.</h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {FAQ.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({
  label, name, type, required,
}: { label: string; name: string; type: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.4em] text-gold-soft mb-3">
        {label}{required && " *"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border-0 border-b border-border bg-transparent px-0 py-2 font-serif text-foreground placeholder:text-foreground/30 focus:border-gold focus:outline-none focus:ring-0"
      />
    </div>
  );
}

function Select({
  label, name, options,
}: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.4em] text-gold-soft mb-3">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full border-0 border-b border-border bg-transparent px-0 py-2 font-serif text-foreground focus:border-gold focus:outline-none focus:ring-0"
      >
        <option value="" disabled className="bg-background">Select…</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">{o}</option>
        ))}
      </select>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg">{q}</span>
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center border border-gold/50 text-gold">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className={`grid overflow-hidden font-serif text-foreground/70 transition-all duration-500 ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-base leading-relaxed">{a}</p>
      </div>
    </div>
  );
}
