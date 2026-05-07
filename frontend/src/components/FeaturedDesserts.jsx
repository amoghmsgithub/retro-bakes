import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FEATURED, SITE } from "@/lib/site";

export default function FeaturedDesserts({ onBookCake }) {
  return (
    <section id="featured" className="relative py-24 md:py-32 bg-ink" data-testid="featured-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="overline mb-4"
            >
              The Menu — handcrafted daily
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="heading-display text-cream text-4xl md:text-5xl lg:text-6xl max-w-3xl"
            >
              Desserts that taste like <span className="italic text-warm">a little celebration.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-mute max-w-sm"
          >
            Every slice is baked, layered and finished by hand at our Vijayanagar kitchen — premium ingredients, honest pricing.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {FEATURED.map((d, i) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl overflow-hidden flex flex-col"
              data-testid={`dessert-card-${d.id}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.22em] uppercase rounded-full px-3 py-1.5 text-warm bg-black/55 backdrop-blur-md border border-white/10">
                  {d.tag}
                </span>
                <div className="absolute bottom-4 right-4 rounded-full px-3.5 py-1.5 text-sm font-medium text-cream bg-black/60 backdrop-blur-md border border-white/15">
                  ₹{d.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-cream leading-tight">{d.name}</h3>
                <p className="text-sm text-mute mt-2 leading-relaxed flex-1">{d.desc}</p>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Retro Bakes! I'd like to order " + d.name + ".")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-gold hover:text-warm transition-colors"
                  data-testid={`dessert-order-${d.id}`}
                >
                  Order on WhatsApp <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <button onClick={onBookCake} className="btn-ghost-gold" data-testid="featured-book-custom-btn">
            Don't see what you want? Book a custom cake
          </button>
        </motion.div>
      </div>
    </section>
  );
}
