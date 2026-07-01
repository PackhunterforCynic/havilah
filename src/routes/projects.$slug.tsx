import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { VideoPlayer } from "@/components/cinematic/VideoPlayer";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title} — Havilah Case Study` },
      { name: "description", content: loaderData?.project.description },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const [openLightbox, setOpenLightbox] = useState<number | null>(null);

  const nextImage = () => {
    if (openLightbox !== null) {
      setOpenLightbox((openLightbox + 1) % project.galleryImages.length);
    }
  };

  const prevImage = () => {
    if (openLightbox !== null) {
      setOpenLightbox((openLightbox - 1 + project.galleryImages.length) % project.galleryImages.length);
    }
  };

  return (
    <main className="relative min-h-screen bg-background pb-32">
      {/* Navigation Back */}
      <div className="absolute top-8 left-6 lg:left-12 z-50">
        <Link
          to="/projects"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-background/50 backdrop-blur-md border border-border/50 text-foreground transition-all hover:bg-gold hover:text-primary-foreground hover:border-gold hover:scale-110"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
      </div>

      {/* Hero Video */}
      <section className="relative h-[100svh] w-full bg-black">
        {project.heroVideo ? (
          <VideoPlayer
            src={project.heroVideo}
            poster={project.poster}
            autoPlay
            muted
            loop
            className="h-full w-full"
          />
        ) : (
          <img 
            src={project.poster} 
            alt={project.title} 
            className="h-full w-full object-cover opacity-80"
          />
        )}
      </section>

      {/* Overview & Credits */}
      <section className="mx-auto max-w-[1500px] px-6 py-24 lg:px-12">
        <div className="grid gap-16 md:grid-cols-12">
          
          {/* Main Overview */}
          <div className="md:col-span-8 lg:col-span-9">
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold shadow-sm">
              {project.category} · {project.year}
            </span>
            <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-8xl">
              {project.title}
            </h1>
            <p className="mt-8 font-serif text-xl leading-relaxed text-foreground/80 md:text-2xl lg:max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Sidebar Metadata */}
          <div className="md:col-span-4 lg:col-span-3 space-y-10 border-t border-border/50 pt-10 md:border-t-0 md:pt-0">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">Client</h3>
              <p className="mt-2 text-sm text-foreground">{project.client}</p>
            </div>
            
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">Credits</h3>
              <ul className="mt-2 space-y-3">
                {project.credits.map(c => (
                  <li key={c.role}>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-gold-soft">{c.role}</span>
                    <span className="text-sm text-foreground">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/50">Tech Specs</h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map(t => (
                  <li key={t} className="rounded-sm border border-border bg-surface px-2 py-1 text-[10px] uppercase tracking-[0.1em] text-foreground/70">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Image Gallery */}
      {project.galleryImages.length > 0 && (
        <section className="mx-auto max-w-[1500px] px-6 py-12 lg:px-12">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground/90">
              Selected Frames
            </h2>
          </div>
          
          {/* Netflix-style responsive gallery grid with equal sizes */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {project.galleryImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setOpenLightbox(idx)}
                className="group relative aspect-[16/10] w-full overflow-hidden rounded-md bg-surface border border-border shadow-cinematic transition-all duration-500 hover:scale-[1.03] hover:shadow-hover hover:z-10 focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Enlarge image"
              >
                <img
                  src={img}
                  alt={`Frame ${idx + 1} from ${project.title}`}
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
              src={project.galleryImages[openLightbox]}
              alt={`Frame ${openLightbox + 1}`}
              className="max-h-[85vh] w-auto max-w-full rounded-md shadow-2xl object-contain"
            />
          </figure>
        </div>
      )}
    </main>
  );
}
