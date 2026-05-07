import { motion } from "framer-motion";
import { Instagram, Heart } from "lucide-react";
import { GALLERY, SITE } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-ink" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="overline mb-4">@retrobakesstore on the gram</div>
            <h2 className="heading-display text-cream text-4xl md:text-5xl lg:text-6xl max-w-3xl">
              Tag us. <span className="italic text-warm">Get reposted.</span>
            </h2>
          </div>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost-gold !py-2.5 self-start md:self-auto"
            data-testid="gallery-instagram-cta"
          >
            <Instagram className="w-4 h-4" /> Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-3 md:gap-4">
          {GALLERY.map((g, i) => (
            <motion.a
              key={i}
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative group overflow-hidden rounded-2xl ${g.span}`}
              data-testid={`gallery-tile-${i}`}
            >
              <img src={g.src} alt={g.label} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between text-cream opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-xs tracking-[0.18em] uppercase">{g.label}</span>
                <span className="flex items-center gap-1 text-xs"><Heart className="w-3.5 h-3.5 fill-[#E39A52] text-[#E39A52]" /> {Math.floor(120 + i * 47 % 380)}</span>
              </div>
              <div className="absolute top-3 right-3 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Instagram className="w-4 h-4 text-cream" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
