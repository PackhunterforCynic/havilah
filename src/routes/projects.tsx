import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, Award } from "lucide-react";
import { PageHero } from "@/components/cinematic/PageHero";

import heroImg from "@/assets/proj-commercial.jpg";
import projWedding from "@/assets/proj-wedding.jpg";
import projCommercial from "@/assets/proj-commercial.jpg";
import projMusic from "@/assets/proj-music.jpg";
import projDoc from "@/assets/proj-doc.jpg";
import projBrand from "@/assets/proj-brand.jpg";
import projLive from "@/assets/proj-live.jpg";
import projCorporate from "@/assets/proj-corporate.jpg";
import projEvent from "@/assets/proj-event.jpg";
import projDrone from "@/assets/proj-drone.jpg";
import projPodcast from "@/assets/proj-podcast.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Havilah Cinematic Works & Case Studies" },
      { name: "description", content: "Selected cinematic work by Havilah — commercials, brand films, weddings, music videos, documentaries and live productions for global clients." },
      { property: "og:title", content: "Projects — Havilah" },
      { property: "og:description", content: "A decade of frames. Each one a chapter." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  category: string;
  year: string;
  client: string;
  location: string;
  img: string;
  blurb: string;
};

const PROJECTS: Project[] = [
  { title: "Eternal Vows", category: "Wedding", year: "2025", client: "Private Commission", location: "Udaipur", img: projWedding, blurb: "A two-day film shot across palace courtyards — anamorphic glass, candlelight, the silence of a vow." },
  { title: "Midnight Drive", category: "Commercial", year: "2025", client: "Maison Or", location: "Los Angeles", img: projCommercial, blurb: "A 60-second luxury spot pairing a vintage coupé with a single tracking shot through neon." },
  { title: "Amber Tour", category: "Music Video", year: "2024", client: "Northwind Records", location: "Berlin → Tokyo", img: projMusic, blurb: "Live concert documentary cut to a single unreleased track — six cities, one band, no second takes." },
  { title: "The Last Craftsman", category: "Documentary", year: "2024", client: "Field Films", location: "Kyoto", img: projDoc, blurb: "An intimate portrait of a swordsmith — six months of trust before a single roll." },
  { title: "Maison Or", category: "Brand Film", year: "2024", client: "Maison Or", location: "Paris", img: projBrand, blurb: "The flagship brand film — a manifesto in slow motion and gold leaf." },
  { title: "Live Broadcast 24", category: "Live", year: "2024", client: "Arena Co.", location: "Mumbai", img: projLive, blurb: "Eight-camera live broadcast to 12 territories — direction, switching and finish in 90 minutes." },
  { title: "Quarterly Vision", category: "Corporate", year: "2025", client: "Helios Group", location: "London", img: projCorporate, blurb: "An internal film that became the most-watched asset of the fiscal year." },
  { title: "Skybound", category: "Aerial", year: "2025", client: "Adventure Co.", location: "Iceland", img: projDrone, blurb: "Cinema drones across glaciers — a one-week schedule, one weather window." },
  { title: "Night Of Light", category: "Event", year: "2024", client: "Cultural Trust", location: "Jaipur", img: projEvent, blurb: "Multi-camera coverage of a festival of lanterns — finished overnight for next-day release." },
  { title: "Long Form", category: "Podcast", year: "2025", client: "Signal Studio", location: "Mumbai", img: projPodcast, blurb: "A four-camera podcast series — designed, lit and run from our in-house studio." },
];

const CATS = ["All", "Wedding", "Commercial", "Music Video", "Documentary", "Brand Film", "Live", "Corporate", "Aerial", "Event", "Podcast"];

const FEATURED = PROJECTS[1]; // Midnight Drive

function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <main className="relative">
      <PageHero
        eyebrow="Selected Works · 2014 – 2025"
        title={<>The <span className="gradient-gold-text">Archive.</span></>}
        subtitle="A decade of frames — assembled film by film, for the brands, artists and families who trusted us with their unrepeatable moments."
        image={heroImg}
        alt="A cinematic still from a Havilah commercial"
      />

      {/* Featured case study */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1500px] gap-0 px-0 md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <img src={FEATURED.img} alt={FEATURED.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent 50%, rgba(8,8,8,0.6) 100%)" }} />
          </div>
          <div className="flex flex-col justify-center p-10 md:p-16 lg:p-24">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-gold">
              <Award className="h-4 w-4" /> Featured · Cannes Lions Shortlist 2025
            </div>
            <h2 className="mt-6 font-display text-4xl md:text-6xl">{FEATURED.title}</h2>
            <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-gold-soft">
              {FEATURED.category} · {FEATURED.client} · {FEATURED.location}
            </p>
            <p className="font-serif mt-8 text-lg leading-relaxed text-foreground/75 md:text-xl">
              {FEATURED.blurb} Directed in-house, shot on Arri Alexa 35 with Cooke S4 primes, finished in our Mumbai grading suite.
            </p>
            <div className="mt-10 flex flex-wrap gap-8 border-t border-border pt-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              <div><span className="text-gold">12 days</span> · production</div>
              <div><span className="text-gold">4.2M</span> · views in 30 days</div>
              <div><span className="text-gold">+38%</span> · brand lift</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Browse</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">By <span className="gradient-gold-text">discipline.</span></h2>
            </div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Showing <span className="text-gold">{list.length}</span> of {PROJECTS.length}
            </p>
          </div>

          <div className="mb-14 flex flex-wrap gap-3 border-b border-border pb-6">
            {CATS.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-[0.35em] transition-colors ${
                    active
                      ? "bg-gold text-primary-foreground"
                      : "border border-border text-foreground/70 hover:border-gold hover:text-gold"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <article key={p.title} className="group relative overflow-hidden">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.category}`}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 30%, rgba(8,8,8,0.95) 100%)" }}
                  />
                  <PlayCircle className="absolute right-5 top-5 h-6 w-6 text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="absolute left-6 bottom-6 right-6">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gold-soft">
                    {p.category} · {p.year} · {p.location}
                  </span>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{p.title}</h3>
                  <p className="font-serif mt-2 text-sm text-foreground/65 line-clamp-2 italic">{p.blurb}</p>
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15" />
              </article>
            ))}
          </div>

          {list.length === 0 && (
            <p className="py-20 text-center font-serif text-foreground/60 italic">
              No films in this chapter — yet.
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-border bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Have a <span className="gradient-gold-text">story</span> to tell?
          </h2>
          <p className="font-serif mt-6 text-lg italic text-foreground/70">
            Every project starts with a single conversation. Yours is next.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.4em] text-primary-foreground hover:bg-gold-soft shadow-gold"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
