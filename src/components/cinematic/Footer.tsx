export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-background py-16">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:px-12 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl tracking-[0.4em] text-gold">HAVILAH</h3>
          <p className="font-serif mt-4 text-sm text-muted-foreground italic">
            Where creativity meets cinematic excellence.
          </p>
        </div>
        {[
          { title: "Studio", items: ["About", "Team", "Awards", "Press"] },
          { title: "Work", items: ["Projects", "Services", "Gallery", "Testimonials"] },
          { title: "Contact", items: ["+1 (000) 000-0000", "hello@havilah.com", "Mumbai · LA · London"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-[11px] uppercase tracking-[0.35em] text-gold-soft">{col.title}</h4>
            <ul className="mt-5 space-y-2 text-sm text-foreground/70">
              {col.items.map((i) => (
                <li key={i} className="hover:text-gold transition">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-14 max-w-[1500px] border-t border-border px-6 pt-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground lg:px-12">
        © {new Date().getFullYear()} Havilah Productions · All Frames Reserved
      </div>
    </footer>
  );
}
