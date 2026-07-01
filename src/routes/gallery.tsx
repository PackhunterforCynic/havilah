import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/gallery";
// import { VideoPlayer } from "@/components/cinematic/VideoPlayer";
const bgVideoUrl = "https://www.youtube.com/embed/cEWwJxEq9Lg?autoplay=1&mute=1&loop=1&playlist=cEWwJxEq9Lg&controls=0&modestbranding=1&rel=0";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Project Gallery — Havilah" },
      { name: "description", content: "Cinematic gallery" },
    ],
  }),
  component: ProjectGallery,
});

function ProjectGallery() {
  const [openLightbox, setOpenLightbox] = useState<number | null>(null);

  const nextImage = () => {
    if (openLightbox !== null) {
      setOpenLightbox((openLightbox + 1) % GALLERY_IMAGES.length);
    }
  };

  const prevImage = () => {
    if (openLightbox !== null) {
      setOpenLightbox((openLightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    }
  };

  return (
    <main className="relative min-h-screen bg-background pb-32">
      {/* Navigation Back */}
      <div className="absolute top-8 left-6 lg:left-12 z-50">
        <Link
          to="/"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/50 backdrop-blur-md border border-border/50 text-foreground transition-all hover:bg-gold hover:text-primary-foreground hover:border-gold hover:scale-110"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      {/* Trailer Video */}
      <section className="relative h-[50svh] md:h-[80svh] lg:h-[100svh] w-full bg-black">
        <iframe
          src={bgVideoUrl}
          title="Havilah Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full object-cover border-0 pointer-events-none"
        />
      </section>

      {/* Overview & Metadata */}
      <section className="mx-auto max-w-[1500px] px-4 py-16 md:px-6 md:py-24 lg:px-12">
        <div className="grid gap-8 md:gap-16 md:grid-cols-12">
          <div className="md:col-span-8 lg:col-span-9">
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-gold shadow-sm">
              Featured Gallery
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-8xl">
              Project Showcase
            </h1>
            <p className="mt-6 font-serif text-lg leading-relaxed text-foreground/80 md:mt-8 md:text-2xl lg:max-w-4xl">
              A curated collection of frames and motion from our latest project, 
              capturing the atmosphere, detail, and emotion of the production.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {GALLERY_IMAGES.length > 0 && (
        <section className="mx-auto max-w-[1500px] px-4 py-8 md:px-6 md:py-12 lg:px-12">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setOpenLightbox(idx)}
                className="group relative aspect-[16/10] w-full overflow-hidden rounded-md bg-surface border border-border shadow-cinematic transition-all duration-500 hover:scale-[1.03] hover:shadow-hover hover:z-10 focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Enlarge image"
              >
                <img
                  src={img}
                  alt={`Frame ${idx + 1}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {openLightbox !== null && (
        <div 
          className="fixed inset-0 z-[120] flex items-center justify-center bg-background/95 p-6 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setOpenLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpenLightbox(null)}
            className="absolute right-6 top-6 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-6 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-6 top-1/2 z-10 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          
          <figure 
            className="flex max-h-[90vh] max-w-[90vw] flex-col items-center p-2 animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={GALLERY_IMAGES[openLightbox]}
              alt={`Frame ${openLightbox + 1}`}
              className="max-h-[85vh] w-auto max-w-full rounded-md shadow-2xl object-contain"
            />
          </figure>
        </div>
      )}
    </main>
  );
}
