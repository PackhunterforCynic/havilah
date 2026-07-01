import { X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { LucideIcon } from "lucide-react";

type Service = {
  label: string;
  icon: LucideIcon;
};

type ServiceModalProps = {
  service: Service | null;
  onClose: () => void;
};

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  const Icon = service.icon;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 p-4 md:p-6 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border/50 bg-surface/90 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-500 p-8 md:p-12 text-center flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 md:right-6 md:top-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/10 text-gold mb-8">
          <Icon className="h-10 w-10" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl text-foreground">
          {service.label}
        </h2>
        
        <p className="mt-6 font-serif text-lg leading-relaxed text-foreground/80">
          Our {service.label.toLowerCase()} services are tailored to elevate your vision. We bring industry-leading expertise and cinematic quality to every project, ensuring your story is told with maximum impact.
        </p>

        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-[12px] font-bold uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
