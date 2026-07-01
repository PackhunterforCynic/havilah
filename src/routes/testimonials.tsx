import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star, Award } from "lucide-react";
import { PageHero } from "@/components/cinematic/PageHero";

import heroImg from "@/assets/proj-event.jpg";
import projBrand from "@/assets/proj-brand.jpg";
import projMusic from "@/assets/proj-music.jpg";
import projWedding from "@/assets/proj-wedding.jpg";
import projDoc from "@/assets/proj-doc.jpg";
import projCorporate from "@/assets/proj-corporate.jpg";
import projCommercial from "@/assets/proj-commercial.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Words from Havilah Clients" },
      { name: "description", content: "What brands, artists, producers and couples say about working with Havilah — cinematic craft, calm sets and human partnership." },
      { property: "og:title", content: "Testimonials — Havilah" },
      { property: "og:description", content: "Words from the people we've made films with." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: TestimonialsPage,
});

const FEATURED = {
  name: "Sofía Lima",
  role: "Creative Director, Maison Or",
  quote: "Havilah turned our brand story into a film I'd buy a ticket for. The restraint, the color, the silence between cuts — it's the closest thing to seeing your own brand in a theatre. Three campaigns in, we don't brief anyone else.",
  img: projBrand,
};

const QUOTES = [
  { name: "Daniel Cole", brand: "Northwind Records", role: "Producer", quote: "The grade. The pacing. The light. They saw what I felt before I could say it. Two of our last three videos broke a million views in the first week.", img: projMusic },
  { name: "Anaya & Vir", brand: "Wedding Film", role: "Clients", quote: "We cried watching the cut. They captured the unspoken — the look between vows, the rain on the windowpane, the way our grandmothers held hands at the end.", img: projWedding },
  { name: "Hiroshi Tanaka", brand: "Field Films", role: "Executive Producer", quote: "Six months on the road in three countries. Havilah's crew never broke focus, never missed a call sheet, and the footage shows it. They are the calmest set I've ever worked.", img: projDoc },
  { name: "Margaret Lin", brand: "Helios Group", role: "VP Marketing", quote: "Our quarterly vision film became the most-watched internal asset of the year. It re-aligned 4,000 employees in seven minutes. I've never seen a video do that.", img: projCorporate },
  { name: "Pierre Atelier", brand: "Atelier Ten", role: "Founder", quote: "From the first treatment, we knew. They speak the language of light — and they listen before they speak.", img: projCommercial },
  { name: "Naveen Roy", brand: "Arena Co.", role: "Head of Live", quote: "Eight cameras, 12 territories, one switch. They directed a 90-minute live broadcast like a feature. No one in the room flinched.", img: projWedding },
];

const LOGOS = ["NETFLIX", "SONY", "APPLE", "VOGUE", "BMW", "NIKE", "ADIDAS", "MERCEDES", "DIOR", "HBO", "PRADA", "TIFFANY & CO."];

function TestimonialsPage() {
  return (
    <main className="relative">
      <PageHero
        eyebrow="Kind Words · 180+ Clients"
        title={<>What people <span className="gradient-gold-text">say.</span></>}
        subtitle="Trust, earned one frame at a time — from global brands and unrepeatable family moments alike."
        image={heroImg}
        alt="A cultural event captured by Havilah"
      />

      {/* Featured */}
      <section className="relative border-b border-border bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-16 px-6 lg:px-12 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={FEATURED.img} alt={`${FEATURED.role} project still`} className="h-full w-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
              <Award className="h-4 w-4" /> Featured Testimonial
            </div>
            <Quote className="mt-8 h-10 w-10 text-gold/70" />
            <p className="font-serif mt-6 text-2xl leading-relaxed italic text-foreground/90 md:text-3xl">
              "{FEATURED.quote}"
            </p>
            <div className="mt-10 border-t border-border pt-6">
              <div className="font-display text-xl">{FEATURED.name}</div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-gold-soft">{FEATURED.role}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid gap-px overflow-hidden border border-border md:grid-cols-2 bg-border">
            {QUOTES.map((q) => (
              <article key={q.name} className="relative bg-background p-10 md:p-14">
                <Quote className="h-8 w-8 text-gold/70" />
                <p className="font-serif mt-6 text-xl leading-relaxed italic text-foreground/85 md:text-2xl">
                  "{q.quote}"
                </p>
                <div className="mt-10 flex items-center gap-5 border-t border-border pt-6">
                  <img
                    src={q.img}
                    alt={`${q.brand} project still`}
                    loading="lazy"
                    className="h-14 w-14 object-cover ring-1 ring-gold/40"
                  />
                  <div>
                    <div className="font-display text-lg">{q.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-gold-soft">
                      {q.role} · {q.brand}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-background py-20">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:px-12 md:grid-cols-4 text-center">
          {[
            { k: "98%", v: "Clients return" },
            { k: "4.97/5", v: "Avg. project rating" },
            { k: "27", v: "International awards" },
            { k: "180+", v: "Global clients" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl text-gold">{s.k}</div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background py-16 overflow-hidden">
        <p className="text-center text-[10px] uppercase tracking-[0.5em] text-gold-soft">In good company</p>
        <div className="marquee-track mt-10 flex w-max gap-16 whitespace-nowrap px-6">
          {[...LOGOS, ...LOGOS].map((c, i) => (
            <span key={`${c}-${i}`} className="font-display text-2xl tracking-[0.4em] text-foreground/40">
              {c}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
