import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

const links = [
  { label: "Menu", href: "#featured" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Custom Cakes", href: "#custom" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar({ onBookCake }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5" data-testid="navbar-logo">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C7A17A] to-[#E39A52] grid place-items-center text-[#0F0C0B] font-display font-semibold">R</span>
          <span className="font-display text-xl tracking-tight text-cream">Retro Bakes</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm tracking-wide text-mute hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="text-sm text-mute hover:text-gold transition-colors flex items-center gap-2"
            data-testid="navbar-call-link"
          >
            <Phone className="w-4 h-4" /> {SITE.phone}
          </a>
          <button onClick={onBookCake} className="btn-primary !py-2.5 !px-5 text-sm" data-testid="navbar-book-cake-btn">
            Book Cake
          </button>
        </div>

        <button
          className="md:hidden p-2 text-cream"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          data-testid="navbar-mobile-toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden overflow-hidden glass-strong border-t border-white/[0.05]"
          >
            <div className="px-6 py-6 flex flex-col gap-4" data-testid="navbar-mobile-menu">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-cream/90 text-base tracking-wide"
                  data-testid={`nav-link-mobile-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <a href={`tel:${SITE.phoneIntl}`} className="btn-ghost-gold flex-1 !py-2.5 text-sm" data-testid="navbar-mobile-call">
                  <Phone className="w-4 h-4" /> Call
                </a>
                <button onClick={() => { setOpen(false); onBookCake(); }} className="btn-primary flex-1 !py-2.5 text-sm" data-testid="navbar-mobile-book-cake">
                  Book Cake
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
