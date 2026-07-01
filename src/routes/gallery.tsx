import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/cinematic/PageHero";

import heroImg from "@/assets/proj-drone.jpg";
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
import aboutImg from "@/assets/about-studio.jpg";


export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Stills, Frames & Behind the Scenes" },
      { name: "description", content: "A visual archive of stills, on-set frames and behind-the-scenes captured across Havilah productions." },
      { property: "og:title", content: "Gallery — Havilah" },
      { property: "og:description", content: "Stills, frames and behind-the-scenes." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: GalleryPage,
});

type Img = { src: string; alt: string; caption: string; cat: string; span: string };

const IMAGES: Img[] = [
  { src: projWedding, alt: "Eternal Vows — wedding film still", caption: "Eternal Vows · Udaipur", cat: "Stills", span: "row-span-2" },
  { src: projCommercial, alt: "Midnight Drive — commercial still", caption: "Midnight Drive · LA", cat: "Stills", span: "" },
  { src: projMusic, alt: "Amber Tour — music video still", caption: "Amber Tour · Berlin", cat: "Stills", span: "" },
  { src: projDoc, alt: "The Last Craftsman — documentary still", caption: "The Last Craftsman · Kyoto", cat: "Stills", span: "row-span-2" },
  { src: projBrand, alt: "Maison Or — brand film still", caption: "Maison Or · Paris", cat: "Stills", span: "" },
  { src: projLive, alt: "Live broadcast still", caption: "Live Broadcast 24 · Mumbai", cat: "On Set", span: "" },
  { src: projCorporate, alt: "Corporate vision film still", caption: "Quarterly Vision · London", cat: "Stills", span: "" },
  { src: projDrone, alt: "Aerial cinematography still", caption: "Skybound · Iceland", cat: "Aerial", span: "row-span-2" },
  { src: projEvent, alt: "Cultural event still", caption: "Night Of Light · Jaipur", cat: "On Set", span: "" },
  { src: projPodcast, alt: "Podcast studio still", caption: "Long Form · Mumbai Studio", cat: "Studio", span: "" },
  { src: aboutImg, alt: "Crew on location at golden hour", caption: "Crew at golden hour", cat: "Behind the Scenes", span: "" },
];

const CATS = ["All", "Stills", "On Set", "Behind the Scenes", "Aerial", "Studio"];

function GalleryPage() {
  const [open, setOpen] = useState<number | null>(null);
  const [cat, setCat] = useState("All");

  const filtered = cat === "All" ? IMAGES : IMAGES.filter((i) => i.cat === cat);

  const close = () => setOpen(null);
  const next = () => setOpen((o) => (o === null ? null : (o + 1) % filtered.length));
  const prev = () => setOpen((o) => (o === null ? null : (o - 1 + filtered.length) % filtered.length));

  return (
    <main className="relative">
      <PageHero
        eyebrow="Visual Archive · 1,200+ frames"
        title={<>Frames & <span className="gradient-gold-text">Light.</span></>}
        subtitle="A scrolling album of moments — caught, composed, kept. Click any frame to enlarge."
        image={heroImg}
        alt="Aerial cinematic still"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="mb-12 flex flex-wrap gap-3 border-b border-border pb-6">
            {CATS.map((c) => {
              const active = cat === c;
              return (
                <button
                  key={c}
                  onClick={() => { setCat(c); setOpen(null); }}
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

          <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {filtered.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                onClick={() => setOpen(i)}
                className={`group relative overflow-hidden ${img.span}`}
                aria-label={`Open ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i < 4 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/0 transition-colors duration-500 group-hover:bg-background/40" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <span className="block text-[10px] uppercase tracking-[0.35em] text-gold-soft">{img.cat}</span>
                  <span className="block font-display text-sm text-foreground">{img.caption}</span>
                </div>
                <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/40" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {open !== null && filtered[open] && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-background/95 p-6 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute right-6 top-6 inline-flex h-12 w-12 items-center justify-center border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-6 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-gold/50 text-gold hover:bg-gold hover:text-primary-foreground"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="flex max-h-[88vh] max-w-[92vw] flex-col items-center gap-4">
            <img
              src={filtered[open].src}
              alt={filtered[open].alt}
              className="max-h-[80vh] max-w-full object-contain ring-1 ring-gold/30"
            />
            <figcaption className="text-center">
              <div className="text-[10px] uppercase tracking-[0.4em] text-gold-soft">{filtered[open].cat}</div>
              <div className="font-display mt-2 text-lg">{filtered[open].caption}</div>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
