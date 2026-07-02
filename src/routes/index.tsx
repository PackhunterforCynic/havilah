import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  PlayCircle, Award, ArrowDown, ArrowRight, Quote, Star, MapPin,
} from "lucide-react";

import heroImg from "@/assets/hero-cinema.jpg";
import {
  IMAGES,
  FEATURED_PROJECTS as PROJECTS,
  SERVICE_TILES as SERVICES,
  TEAM,
  HOME_TESTIMONIALS as TESTIMONIALS,
  CLIENTS,
} from "@/data/content";
import { TeamModal } from "@/components/cinematic/TeamModal";
import { ServiceModal } from "@/components/cinematic/ServiceModal";
import { VideoPlayer } from "@/components/cinematic/VideoPlayer";
import { PROJECTS as PORTFOLIO_PROJECTS } from "@/data/projects";

import contactAerial from "@/assets/contact-aerial.jpg";
import demoVideo from "@/assets/video.mp4";
const aboutImg = IMAGES.about;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Havilah — Where Creativity Meets Cinematic Excellence" },
      {
        name: "description",
        content:
          "Havilah is a cinematic multimedia production studio crafting commercials, films, music videos, weddings and brand stories with award-winning craft.",
      },
      { property: "og:title", content: "Havilah — Cinematic Multimedia Production" },
      {
        property: "og:description",
        content: "We don't create videos. We create experiences.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});


function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <ClientsMarquee />
      <Stats />
      <Team />
      <TestimonialsWall />

      <ContactCTA />
    </main>
  );
}

/* ───────────────────────── 1. HERO ───────────────────────── */
function Hero() {
  const taglineRef = useRef<HTMLSpanElement>(null);
  const fullText = "We Don't Create Videos. We Create Experiences.";

  useEffect(() => {
    const el = taglineRef.current;
    if (!el) return;
    let i = 0;
    el.textContent = "";
    const timer = window.setInterval(() => {
      i++;
      el.textContent = fullText.slice(0, i);
      if (i >= fullText.length) window.clearInterval(timer);
    }, 45);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden noise">
      <img
        src={heroImg}
        alt="Cinematic camera in golden light"
        className="absolute inset-0 h-full w-full object-cover scale-110"
        style={{ filter: "saturate(1.05) contrast(1.05)" }}
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
      <div className="absolute inset-0" style={{ background: "var(--gradient-spot)" }} />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="mb-4 text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-gold-soft/80">
          Est. Mumbai · Los Angeles · London
        </span>
        <h1 className="font-display text-[18vw] leading-none gold-sweep md:text-[10rem]">
          HAVILAH
        </h1>
        <p className="font-serif mt-8 max-w-2xl text-lg italic text-foreground/85 md:text-2xl">
          <span ref={taglineRef} />
          <span className="ml-1 inline-block h-5 w-px animate-pulse bg-gold align-middle" />
        </p>
        <div className="mt-12 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
          <MagneticButton variant="primary">
            <PlayCircle className="h-4 w-4" />
            View Projects
          </MagneticButton>
          <MagneticButton variant="ghost" >
            <a href="/contact">Book Consultation</a>
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center">
        <span className="block text-[10px] uppercase tracking-[0.4em] text-gold-soft/70">
          Scroll
        </span>
        <ArrowDown className="scroll-arrow mx-auto mt-2 h-5 w-5 text-gold" />
      </div>
    </section>
  );
}

function MagneticButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * 0.25;
    const y = (e.clientY - r.top - r.height / 2) * 0.4;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };
  const base =
    "magnet relative inline-flex items-center gap-3 px-8 py-4 text-[11px] uppercase tracking-[0.4em] transition-colors";
  const cls =
    variant === "primary"
      ? `${base} bg-gold text-primary-foreground hover:bg-gold-soft shadow-gold`
      : `${base} border border-gold/60 text-gold hover:bg-gold hover:text-primary-foreground`;
  return (
    <button ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={cls}>
      {children}
    </button>
  );
}

/* ───────────────────────── 2. ABOUT ───────────────────────── */
function About() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".about-img", {
        yPercent: 18,
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.from(".about-line", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-24 md:py-44">
      <div className="mx-auto grid max-w-[1500px] gap-16 px-6 lg:px-12 md:grid-cols-2 md:gap-24">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={aboutImg}
            alt="Havilah crew on location at golden hour"
            loading="lazy"
            className="about-img h-[120%] w-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="about-line text-[11px] uppercase tracking-[0.5em] text-gold">
            About Havilah
          </span>
          <h2 className="about-line mt-6 font-display text-4xl leading-tight md:text-6xl">
            A studio built on <span className="gradient-gold-text">light, story</span> and silence between frames.
          </h2>
          <p className="about-line font-serif mt-8 text-lg leading-relaxed text-foreground/75 md:text-xl">
            For a decade, Havilah has crafted cinema-grade work for global brands,
            artists, and unrepeatable moments. We obsess over restraint, color, and
            the millisecond before a cut.
          </p>
          <div className="about-line mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "12+", v: "Years" },
              { k: "320", v: "Films" },
              { k: "27", v: "Awards" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-gold md:text-4xl">{s.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── 3. FEATURED PROJECTS (filmstrip) ─────────────────── */
function FeaturedProjects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;
    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const scrollAmount = track.scrollWidth - window.innerWidth + 80;
      gsap.to(track, {
        x: -scrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: () => `+=${scrollAmount}`,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      <div className="absolute left-6 top-32 z-10 lg:left-12">
        <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Featured</span>
        <h2 className="mt-4 font-display text-5xl md:text-7xl">
          The <span className="gradient-gold-text">Reel.</span>
        </h2>
      </div>
      <div className="h-[100svh] flex items-center">
        <div ref={trackRef} className="flex gap-8 pl-6 lg:pl-12 will-change-transform">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="group relative h-[70vh] w-[78vw] flex-shrink-0 overflow-hidden md:w-[55vw] lg:w-[42vw]"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 30%, rgba(8,8,8,0.85) 100%)" }}
              />
              <div className="absolute left-8 bottom-10 right-8">
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold-soft">
                  {String(i + 1).padStart(2, "0")} · {p.category}
                </span>
                <h3 className="mt-3 font-display text-3xl md:text-5xl">{p.title}</h3>
                <div className="mt-5 flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Watch film <ArrowRight className="h-3 w-3" />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15" />
            </article>
          ))}
          <div className="w-[20vw] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 4. SERVICES (radial) ───────────────────────── */
function Services() {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-44">
      <div
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-spot)" }}
      />
      <div className="mx-auto max-w-[1500px] px-6 text-center lg:px-12">
        <span className="text-[11px] uppercase tracking-[0.5em] text-gold">What we do</span>
        <h2 className="mt-6 font-display text-5xl md:text-7xl">
          Our <span className="gradient-gold-text">Craft.</span>
        </h2>
        <p className="font-serif mx-auto mt-6 max-w-2xl text-lg text-foreground/70 italic">
          End-to-end production — from the first scribble on a napkin to the final master.
        </p>

        <div className="relative mx-auto mt-24 grid max-w-5xl grid-cols-2 gap-px overflow-hidden border border-border md:grid-cols-4">
          {SERVICES.map((s) => (
            <button
              key={s.label}
              onClick={() => setSelectedService(s)}
              className="group relative bg-background p-8 md:p-12 transition-colors hover:bg-surface/50 text-center flex flex-col items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <s.icon className="mx-auto h-8 w-8 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
              <p className="mt-5 text-[12px] uppercase tracking-[0.25em] text-foreground/80 group-hover:text-gold transition-colors">
                {s.label}
              </p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 origin-left bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </button>
          ))}
        </div>
      </div>
      
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </section>
  );
}

/* ─────────────────── 5. CLIENTS marquee ─────────────────── */
function ClientsMarquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-10">
      <div className="marquee-track flex w-max gap-16 whitespace-nowrap px-6">
        {items.map((c, i) => (
          <span
            key={`${c}-${i}`}
            className="font-display text-2xl tracking-[0.4em] text-foreground/40 hover:text-gold transition"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────── 6. STATS (counters) ─────────────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obj = { v: 0 };
    const st = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: to,
          duration: 2.2,
          ease: "power2.out",
          onUpdate: () => setN(Math.round(obj.v)),
        });
      },
    });
    return () => st.kill();
  }, [to]);
  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

function Stats() {
  const items = [
    { v: 320, s: "+", l: "Films Produced" },
    { v: 27, s: "", l: "International Awards" },
    { v: 180, s: "+", l: "Global Clients" },
    { v: 12, s: "M", l: "Audience Reach" },
  ];
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:px-12 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.l} className="text-center md:text-left">
            <div className="font-display text-6xl text-gold md:text-7xl">
              <Counter to={it.v} suffix={it.s} />
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
              {it.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────── 7. TEAM ─────────────────── */
function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM[0] | null>(null);

  return (
    <section className="relative bg-background py-24 md:py-44">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="flex items-end justify-between gap-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Crew</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl">
              Meet the <span className="gradient-gold-text">Makers.</span>
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold-soft hover:text-gold transition-colors">
            Full team <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <button 
              key={m.name} 
              onClick={() => setSelectedMember(m)}
              className="team-card group relative overflow-hidden rounded-xl border border-border/50 text-left focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-500 hover:-translate-y-2 hover:shadow-hover"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gold/15" />
                <div
                  className="absolute inset-0 opacity-80"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(8,8,8,0.9) 100%)" }}
                />
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                  <h3 className="font-display text-xl text-foreground">{m.name}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.3em] text-gold-soft">
                    {m.role}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </section>
  );
}


/* ─────────────────── 10. TESTIMONIALS WALL ─────────────────── */
function TestimonialsWall() {
  return (
    <section className="bg-background py-32 md:py-44">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="mb-16 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.5em] text-gold">Voices</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">
            <span className="gradient-gold-text">Loved</span> by people we admire.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className="group relative overflow-hidden border border-border bg-card"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40" />
                <PlayCircle className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 text-gold transition-transform group-hover:scale-110" />
                <div className="absolute bottom-3 right-3 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold-soft">
                  ▶ {t.views}
                </div>
              </div>
              <div className="p-7">
                <Quote className="h-5 w-5 text-gold" />
                <p className="font-serif mt-3 text-lg leading-relaxed italic text-foreground/85">
                  "{t.quote}"
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div>
                    <div className="text-sm text-foreground">{t.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                      {t.brand}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ─────────────────── 12. CONTACT CTA ─────────────────── */
function ContactCTA() {
  return (
    <section id="contact" className="relative h-[90vh] overflow-hidden noise">
      <img
        src={contactAerial}
        alt="Cinematic coastal aerial at golden hour"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.95) 90%)" }}
      />
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] flex-col items-center justify-center px-6 text-center lg:px-12">
        <Award className="h-10 w-10 text-gold" />
        <h2 className="mt-8 font-display text-5xl leading-tight md:text-8xl">
          Let's make something <br />
          <span className="gradient-gold-text">unforgettable.</span>
        </h2>
        <p className="font-serif mt-6 max-w-xl text-lg italic text-foreground/80 md:text-2xl">
          Tell us about your story. We'll bring the camera, the crew, and the colour.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <MagneticButton variant="primary">
            Start a Project
            <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <a
            href="tel:+10000000000"
            className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold-soft hover:text-gold"
          >
            <MapPin className="h-4 w-4" />
            Mumbai · LA · London
          </a>
        </div>
      </div>
    </section>
  );
}

/* Register GSAP plugin once, client-side. */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
