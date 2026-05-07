import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

const HERO_BG =
  "https://images.unsplash.com/photo-1714328864044-9b3af0a6b48b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxkYXJrJTIwbHV4dXJ5JTIwYmFrZXJ5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzc4MTcwNzA2fDA&ixlib=rb-4.1.0&q=85";

export default function Hero({ onBookCake }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink grain"
      data-testid="hero-section"
    >
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Dark luxury bakery interior with ambient lighting"
          className="w-full h-[115%] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0C0B]/55 via-[#0F0C0B]/65 to-[#0F0C0B]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(227,154,82,0.18),transparent_55%)]" />
      </motion.div>

      {/* Floating dust */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#C7A17A]/40"
            style={{
              width: 3 + (i % 3) * 2,
              height: 3 + (i % 3) * 2,
              left: `${(i * 7.3) % 100}%`,
              top: `${(i * 11.7) % 90}%`,
              filter: "blur(1px)",
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        ))}
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 md:pt-36 pb-24 min-h-[100svh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="overline mb-6 flex items-center gap-3"
          data-testid="hero-overline"
        >
          <span className="w-8 h-px bg-[#C7A17A]/60" /> Vijayanagar · Bengaluru
        </motion.div>

        <h1 className="heading-display text-cream text-5xl sm:text-6xl md:text-7xl lg:text-[88px] max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="block"
          >
            Bangalore's Favourite
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="block italic text-warm"
          >
            Dessert Spot.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
          className="mt-7 max-w-2xl text-lg md:text-xl text-mute leading-relaxed"
          data-testid="hero-subtitle"
        >
          {SITE.description} Handcrafted in Vijayanagar, served with the kind of warmth your evenings deserve.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Retro Bakes! I'd like to place an order.")}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            data-testid="hero-order-now-btn"
          >
            Order Now <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#visit" className="btn-ghost-gold" data-testid="hero-visit-store-btn">
            <MapPin className="w-4 h-4" /> Visit Store
          </a>
          <button onClick={onBookCake} className="text-sm tracking-wide text-mute hover:text-cream transition-colors underline-offset-4 hover:underline ml-1" data-testid="hero-book-cake-btn">
            or book a custom cake →
          </button>
        </motion.div>

        {/* Floating rating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="absolute right-6 md:right-12 lg:right-20 bottom-24 md:bottom-32 hidden sm:block"
          data-testid="hero-rating-badge"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-strong rounded-2xl p-5 w-64"
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E39A52] text-[#E39A52]" />
              ))}
            </div>
            <div className="font-display text-3xl text-cream leading-none">{SITE.rating}</div>
            <div className="text-xs uppercase tracking-[0.22em] text-mute mt-2">Rated by {SITE.reviews}+ customers</div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-mute"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-[#C7A17A] to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
