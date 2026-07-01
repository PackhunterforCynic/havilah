import { MessageCircle, Instagram, Phone, Mail } from "lucide-react";

const items = [
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/10000000000" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Phone, label: "Call", href: "tel:+10000000000" },
  { icon: Mail, label: "Email", href: "mailto:hello@havilah.com" },
];

export function FloatingSocials() {
  return (
    <ul className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
      {items.map((it) => (
        <li key={it.label}>
          <a
            href={it.href}
            aria-label={it.label}
            className="group flex h-11 w-11 items-center justify-center rounded-full glass text-gold-soft transition hover:bg-gold hover:text-primary-foreground"
          >
            <it.icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
