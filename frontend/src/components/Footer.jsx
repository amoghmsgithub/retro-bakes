import { Instagram, MapPin, Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function Footer() {
  const quick = [
    { label: "Menu", href: "#featured" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Custom Cakes", href: "#custom" },
    { label: "Visit Store", href: "#visit" },
  ];
  return (
    <footer className="relative bg-[#0B0807] border-t border-white/5 pt-20 pb-10" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C7A17A] to-[#E39A52] grid place-items-center text-[#0F0C0B] font-display font-semibold">R</span>
              <span className="font-display text-2xl text-cream">Retro Bakes</span>
            </div>
            <p className="text-mute max-w-sm leading-relaxed">
              Handcrafted cakes, cheesecakes & brownies — baked daily in Vijayanagar, Bengaluru. Premium taste at fair pricing.
            </p>
            <div className="hairline my-7" />
            <div className="flex items-center gap-3">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="glass w-10 h-10 grid place-items-center rounded-full text-cream hover:text-gold transition-colors" aria-label="Instagram" data-testid="footer-instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="glass w-10 h-10 grid place-items-center rounded-full text-cream hover:text-gold transition-colors" aria-label="WhatsApp" data-testid="footer-whatsapp">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href={`tel:${SITE.phoneIntl}`} className="glass w-10 h-10 grid place-items-center rounded-full text-cream hover:text-gold transition-colors" aria-label="Call" data-testid="footer-call">
                <Phone className="w-4 h-4" />
              </a>
              <a href={SITE.mapsLink} target="_blank" rel="noreferrer" className="glass w-10 h-10 grid place-items-center rounded-full text-cream hover:text-gold transition-colors" aria-label="Location" data-testid="footer-location">
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="overline mb-5">Quick links</div>
            <ul className="space-y-3">
              {quick.map((q) => (
                <li key={q.href}>
                  <a href={q.href} className="text-mute hover:text-cream transition-colors text-sm" data-testid={`footer-link-${q.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="overline mb-5">Visit us</div>
            <p className="text-mute text-sm leading-relaxed">{SITE.address}</p>
            <p className="text-mute text-sm mt-2">
              <a href={`tel:${SITE.phoneIntl}`} className="hover:text-cream transition-colors">{SITE.phone}</a>
            </p>
            <div className="mt-5 space-y-1">
              {SITE.hours.map((h) => (
                <div key={h.day} className="text-mute text-xs">
                  <span className="tracking-[0.18em] uppercase">{h.day}</span> · {h.time}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-mute">
          <div>© {new Date().getFullYear()} Retro Bakes Store · All cakes baked in Bengaluru.</div>
          <div className="tracking-[0.22em] uppercase">Crafted with warmth · since 2018</div>
        </div>
      </div>
    </footer>
  );
}
