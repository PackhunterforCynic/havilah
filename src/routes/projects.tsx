import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayCircle, ArrowRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
            {filteredProjects.map((project, idx) => (
              <Link 
                key={project.id} 
                to="/gallery" 
                className="group relative flex aspect-[16/10] flex-col overflow-hidden rounded-md bg-surface shadow-cinematic transition-all duration-500 hover:scale-[1.02] hover:shadow-hover hover:z-10 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  loading={idx < 4 ? "eager" : "lazy"}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                
                {/* Netflix-style gradient overlay that rises on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Metadata */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-6 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-gold-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span>{project.category}</span>
                    <span className="h-1 w-1 rounded-full bg-gold/50" />
                    <span>{project.year}</span>
                  </div>
                  
                  <h3 className="mt-1 font-display text-2xl md:text-3xl text-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="mt-2 text-sm font-serif text-foreground/70 line-clamp-2 opacity-0 transition-opacity duration-700 delay-100 group-hover:opacity-100">
                    {project.description}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold opacity-0 transition-opacity duration-500 delay-200 group-hover:opacity-100">
                    Explore Case Study <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
