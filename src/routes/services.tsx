import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Film, Camera, Video, Mic, Aperture, Tv, Music, Sparkles, ArrowRight, Plus, Minus,
} from "lucide-react";
import { PageHero } from "@/components/cinematic/PageHero";
import { ServiceModal } from "@/components/cinematic/ServiceModal";

import heroImg from "@/assets/about-studio.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Film, Photo, Color & Live by Havilah" },
      { name: "description", content: "Cinematic production end-to-end: directing, cinematography, photography, color grading, live streaming, podcast, music video and VFX." },
      { property: "og:title", content: "Services — Havilah" },
      { property: "og:description", content: "One studio. Every discipline. Cinema-grade craft." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  { icon: Film, title: "Film Production", body: "Narrative shorts, commercials and brand films — directing, producing and post under one roof. We score, sound-design and grade in-house.", price: "From $12K", deliv: "2 – 8 weeks" },
  { icon: Camera, title: "Photography", body: "Editorial, lookbook and campaign stills shot alongside motion crews. One trip, two formats, unified art direction.", price: "From $3K", deliv: "5 – 10 days" },
  { icon: Video, title: "Cinematography", body: "Crewed shoots with Arri / Sony cinema bodies, prime glass and seasoned operators. Day-rated or full package.", price: "Day rate", deliv: "On request" },
  { icon: Mic, title: "Podcast & Audio", body: "In-studio recordings, location sound, sound design and dialog editing. Designed-for-discovery from the first cue.", price: "From $1.5K", deliv: "1 – 3 weeks" },
  { icon: Aperture, title: "Color Grading", body: "DaVinci Resolve grades — from filmic naturalism to high-fashion punch. ACES pipeline, HDR-ready, broadcast-safe.", price: "Per finish", deliv: "3 – 7 days" },
  { icon: Tv, title: "Live Streaming", body: "Multi-cam broadcasts, hybrid events and direct-to-platform delivery. Up to 8 angles, simulcast to every major channel.", price: "Per event", deliv: "Same-day" },
  { icon: Music, title: "Music Videos", body: "Full visual identity for artists — concept, treatment, production, post. From debut singles to global tours.", price: "From $8K", deliv: "3 – 6 weeks" },
  { icon: Sparkles, title: "VFX & Motion", body: "Title design, compositing, 3D and motion graphics. The finishing touch that lifts good to remarkable.", price: "Per scope", deliv: "2 – 4 weeks" },
];

const PROCESS = [
  { n: "01", t: "Discovery", d: "We listen. We ask the hard questions. We define the story and the audience before a single frame." },
  { n: "02", t: "Pre-Production", d: "Treatments, storyboards, locations, casting, crews — every detail rehearsed on paper so the set runs silent." },
  { n: "03", t: "Production", d: "Cinema-grade capture anywhere in the world. Lean crews. Long lenses. Unhurried takes." },
  { n: "04", t: "Post & Finishing", d: "Edit, sound, color, VFX — finished to broadcast and cinema-release standard in our in-house suites." },
  { n: "05", t: "Delivery", d: "Master files, social cuts, archives — packaged and versioned for every platform and territory." },
];

const FAQ = [
  { q: "What does a typical engagement look like?", a: "Most projects begin with a 30-minute discovery call, followed by a written treatment within a week. Production timelines run 4 – 12 weeks depending on scope; we work to fixed quotes, not open-ended retainers." },
  { q: "Do you travel?", a: "Yes — Havilah crews regularly shoot across Asia, Europe and the Americas. Travel and per-diems are quoted transparently on a per-project basis." },
  { q: "Can you handle the entire post-production?", a: "Yes. Editorial, sound, color, VFX and motion graphics are all delivered in-house from our Mumbai and LA suites — no third-party finishing." },
  { q: "Do you own your gear?", a: "We own a complete Arri Alexa 35 / Sony VENICE 2 package with Cooke and Zeiss primes, plus DJI Inspire 3 drones. Specialist gear is rented per project." },
  { q: "What's the smallest project you take on?", a: "Single-day shoots from around $3K. We're equally comfortable on a one-camera podcast as we are on a multi-territory campaign." },
];

function ServicesPage() {
  const [selectedService, setSelectedService] = useState<{ label: string; icon: any } | null>(null);

  return (
    <main className="relative">
      <PageHero
        eyebrow="What we do · End-to-end"
        title={<>Cinema-grade <span className="gradient-gold-text">craft.</span></>}
        subtitle="From a single still to a full feature — one studio, every discipline, fixed-quote engagements."
        image={heroImg}
        alt="Havilah crew on a cinematic set"
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid gap-px overflow-hidden border border-border md:grid-cols-2 lg:grid-cols-4 bg-border">
            {SERVICES.map((s) => (
              <button 
                key={s.title} 
                onClick={() => setSelectedService({ label: s.title, icon: s.icon })}
                className="group relative bg-background p-10 transition-colors hover:bg-secondary text-left w-full focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <s.icon className="h-8 w-8 text-gold transition-transform duration-500 group-hover:-translate-y-1" />
                <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                <p className="font-serif mt-4 text-sm leading-relaxed text-foreground/70">{s.body}</p>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-[10px] uppercase tracking-[0.35em]">
                  <span className="text-gold-soft">{s.price}</span>
                  <span className="text-muted-foreground">{s.deliv}</span>
                </div>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 origin-left bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mb-16 text-center">
            <span className="text-[11px] uppercase tracking-[0.5em] text-gold">How we work</span>
            <h2 className="mt-6 font-display text-5xl md:text-6xl">
              The <span className="gradient-gold-text">Process.</span>
            </h2>
            <p className="font-serif mx-auto mt-6 max-w-2xl text-lg italic text-foreground/65">
              Five chapters. No surprises. Every milestone signed off before we move.
            </p>
          </div>
          <div className="relative grid gap-12 md:grid-cols-5">
            {PROCESS.map((p) => (
              <div key={p.n} className="relative">
                <div className="font-display text-5xl text-gold/40">{p.n}</div>
                <h3 className="mt-4 font-display text-xl">{p.t}</h3>
                <p className="font-serif mt-3 text-sm leading-relaxed text-foreground/65">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-0">
          <div className="mb-14 text-center">
            <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Common Questions</span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl">
              Before you <span className="gradient-gold-text">brief us.</span>
            </h2>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {FAQ.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Ready to <span className="gradient-gold-text">begin</span>?
          </h2>
          <p className="font-serif mt-6 text-lg italic text-foreground/70">
            One brief. One quote. One unforgettable film.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.4em] text-primary-foreground hover:bg-gold-soft shadow-gold"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </main>
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
        <span className="font-display text-lg md:text-xl">{q}</span>
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
