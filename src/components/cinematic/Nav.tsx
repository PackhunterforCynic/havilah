import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../providers/ThemeProvider";

const links = [
  { label: "Home", to: "/" as const },
  { label: "Projects", to: "/projects" as const },
  { label: "Services", to: "/services" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "py-3 backdrop-blur-xl bg-background/75 border-b border-border"
          : "py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 lg:px-12">
        <Link
          to="/"
          className="font-display text-xl tracking-[0.45em] gold-sweep"
          onClick={() => setOpen(false)}
        >
          HAVILAH
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className="group relative text-[11px] uppercase tracking-[0.3em] text-foreground/70 transition hover:text-gold"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
                <span className="absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center text-foreground/70 transition hover:text-gold"
            aria-label="Toggle theme"
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <Sun className={`absolute h-5 w-5 transition-all duration-500 ${theme === 'dark' ? 'scale-0 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'}`} />
              <Moon className={`absolute h-5 w-5 transition-all duration-500 ${theme === 'light' ? 'scale-0 opacity-0 -rotate-90' : 'scale-100 opacity-100 rotate-0'}`} />
            </div>
          </button>
          
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-gold/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.3em] text-gold transition hover:bg-gold hover:text-primary-foreground"
          >
            Book Consultation
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center text-foreground/70 transition hover:text-gold"
            aria-label="Toggle theme"
          >
            <div className="relative flex h-5 w-5 items-center justify-center">
              <Sun className={`absolute h-5 w-5 transition-all duration-500 ${theme === 'dark' ? 'scale-0 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'}`} />
              <Moon className={`absolute h-5 w-5 transition-all duration-500 ${theme === 'light' ? 'scale-0 opacity-0 -rotate-90' : 'scale-100 opacity-100 rotate-0'}`} />
            </div>
          </button>
          
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-px w-6 bg-gold transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-6 bg-gold transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile */}
      <div
        className={`overflow-hidden md:hidden transition-[max-height] duration-500 ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-[12px] uppercase tracking-[0.35em] text-foreground/80 hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 mt-2 border-t border-border/50">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 border border-gold/60 px-5 py-3 text-[11px] uppercase tracking-[0.3em] text-gold transition hover:bg-gold hover:text-primary-foreground"
            >
              Book Consultation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

