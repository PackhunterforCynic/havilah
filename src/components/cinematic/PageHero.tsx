import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  image: string;
  alt: string;
}

export function PageHero({ eyebrow, title, subtitle, image, alt }: PageHeroProps) {
  return (
    <section className="relative h-[70svh] min-h-[520px] w-full overflow-hidden noise">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ filter: "saturate(1.05)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.95) 100%)",
        }}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-spot)" }} />
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col justify-end px-6 pb-20 lg:px-12 lg:pb-28">
        <span className="text-[11px] uppercase tracking-[0.5em] text-gold">{eyebrow}</span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-serif mt-6 max-w-2xl text-lg italic text-foreground/80 md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
