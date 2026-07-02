import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayCircle, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { VideoPlayer } from "@/components/cinematic/VideoPlayer";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Havilah Cinematic Works" },
      { name: "description", content: "Explore the premium cinematic portfolio of Havilah." },
    ],
  }),
  component: ProjectsBrowser,
});

function ProjectsBrowser() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);
    
  const featured = PROJECTS.find(p => p.featured) || PROJECTS[0];

  return (
    <main className="relative min-h-screen bg-background">
      {/* Premium Hero Showreel */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <video
          src={featured.heroVideo}
          poster={featured.poster}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        
        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-6 pb-24 lg:px-12">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold shadow-sm">
            Featured Presentation
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-8xl drop-shadow-2xl">
            {featured.title}
          </h1>
          <p className="mt-4 max-w-xl font-serif text-lg text-foreground/80 drop-shadow-md md:text-xl">
            {featured.description}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 bg-foreground px-8 py-4 text-[12px] font-bold uppercase tracking-[0.3em] text-background transition-colors hover:bg-gold hover:text-background"
            >
              <PlayCircle className="h-5 w-5" /> Play Showreel
            </Link>
          </div>
        </div>
      </section>

      {/* Cinematic Project Browser */}
      <section className="relative z-20 -mt-10 pb-32">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          
          {/* Categories */}
          <div className="mb-10 flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`whitespace-nowrap text-[11px] uppercase tracking-[0.4em] transition-all duration-300 ${
                  activeCategory === c 
                    ? "text-gold border-b-2 border-gold pb-1" 
                    : "text-foreground/50 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
            {filteredProjects.map((p, i) => (
              <div 
                key={p.id} 
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 transition-all duration-700 hover:shadow-2xl hover:shadow-gold/10 md:hover:-translate-y-2 flex flex-col md:grid md:grid-cols-12 gap-0"
              >
                {/* Entire Card Click Overlay */}
                <Link 
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="absolute inset-0 z-0"
                  aria-label={`Explore ${p.title}`}
                >
                  <span className="sr-only">Explore Project {p.title}</span>
                </Link>
                
                {/* Left Column: Hero Video (Span 9) */}
                <div className="relative w-full aspect-video md:h-[600px] md:aspect-auto md:col-span-9 overflow-hidden z-10 bg-black">
                  {p.heroVideo ? (
                    <VideoPlayer 
                      src={p.heroVideo} 
                      poster={p.poster} 
                      className="h-full w-full object-cover" 
                      muted 
                    />
                  ) : (
                    <img src={p.poster} alt={p.title} className="h-full w-full object-cover" />
                  )}
                </div>
                
                {/* Right Column: Preview Images & Info (Span 3) */}
                <div className="flex flex-col md:col-span-3 bg-surface z-10 pointer-events-none">
                  
                  {/* Preview Images (Top Stack) */}
                  <div className="flex h-48 md:h-[200px] border-b border-border/50">
                    <div className="w-1/2 h-full overflow-hidden border-r border-border/50">
                      <img 
                        src={p.galleryImages?.[0] || p.thumbnail} 
                        alt={`${p.title} Preview 1`} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                      />
                    </div>
                    <div className="w-1/2 h-full overflow-hidden">
                      <img 
                        src={p.galleryImages?.[1] || p.thumbnail} 
                        alt={`${p.title} Preview 2`} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 delay-75" 
                      />
                    </div>
                  </div>

                  {/* Project Info Panel */}
                  <div className="p-6 lg:p-8 flex-1 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-gold">{p.category}</span>
                      <span className="h-[1px] w-4 bg-border"></span>
                      <span className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{p.year}</span>
                    </div>
                    <h3 className="font-display text-xl lg:text-2xl text-foreground mb-3 group-hover:text-gold transition-colors duration-500 line-clamp-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-foreground/70 mb-4 line-clamp-3">
                      {p.description}
                    </p>
                    {p.servicesProvided && p.servicesProvided.length > 0 && (
                       <div className="flex flex-wrap gap-2 mb-6">
                         {p.servicesProvided.slice(0, 3).map((service, idx) => (
                           <span key={idx} className="px-2 py-1 bg-background/50 border border-border/50 rounded-sm text-[9px] text-muted-foreground uppercase tracking-wider">
                             {service}
                           </span>
                         ))}
                       </div>
                    )}
                    
                    <div className="mt-auto pointer-events-auto">
                      <Link 
                        to="/projects/$slug"
                        params={{ slug: p.slug }}
                        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground hover:text-gold transition-all duration-300 group-hover:translate-x-2"
                      >
                        Explore Project <ArrowRight className="h-3 w-3 text-gold" />
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
