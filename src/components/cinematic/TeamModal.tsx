import { X, Instagram, Mail, MapPin, Clock } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  img: string;
  bio: string;
  experience: string;
  origin: string;
  instagram: string;
  email: string;
  specialties: string[];
};

type TeamModalProps = {
  member: TeamMember | null;
  onClose: () => void;
};

export function TeamModal({ member, onClose }: TeamModalProps) {
  if (!member) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-background/80 p-0 md:p-6 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl overflow-hidden rounded-t-3xl md:rounded-2xl border-t md:border border-border/50 bg-surface/90 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-full md:zoom-in-95 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold transition-all hover:bg-gold hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col md:flex-row h-[80vh] md:h-auto max-h-[800px] overflow-y-auto md:overflow-hidden">
          {/* Portrait */}
          <div className="w-full md:w-5/12 shrink-0 relative h-96 md:h-auto">
            <img 
              src={member.img} 
              alt={member.name}
              className="absolute inset-0 h-full w-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent md:hidden" />
          </div>

          {/* Details */}
          <div className="p-8 md:p-12 w-full md:w-7/12 flex flex-col justify-center bg-gradient-to-br from-surface to-background/50 -mt-10 md:mt-0 relative z-10 rounded-t-3xl md:rounded-none">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              {member.name}
            </h2>
            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.4em] text-gold shadow-sm">
              {member.role}
            </p>

            <div className="mt-8 flex flex-col gap-4 text-xs font-mono text-foreground/70 border-b border-border/50 pb-8">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-gold-soft" /> {member.experience}
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-gold-soft" /> {member.origin}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-3">Biography</h3>
              <p className="font-serif text-lg leading-relaxed text-foreground/80 italic">
                "{member.bio}"
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40 mb-3">Specialties</h3>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map(s => (
                  <span key={s} className="rounded-sm border border-border/60 bg-background/50 px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-foreground/80">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex gap-4 pt-6 border-t border-border/50">
              <a href="#" className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={`mailto:${member.email}`} className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-primary-foreground transition-all">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
