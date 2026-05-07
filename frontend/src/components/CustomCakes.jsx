import { motion } from "framer-motion";
import { Cake, Gift, Heart, Sparkles } from "lucide-react";

const CUSTOM_IMG =
  "https://images.unsplash.com/photo-1775830154800-2b5c539c7fd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY3VzdG9tJTIwYmlydGhkYXklMjBjYWtlfGVufDB8fHx8MTc3ODE3MDcwNnww&ixlib=rb-4.1.0&q=85";

const SERVICES = [
  { icon: Cake, title: "Birthday Cakes", text: "Numbered cakes, photo prints, themed toppers." },
  { icon: Gift, title: "Theme Cakes", text: "Cartoons, favourite movies, brand-inspired builds." },
  { icon: Heart, title: "Anniversary Cakes", text: "Couple themes, gold leaf, elegant minimal designs." },
  { icon: Sparkles, title: "Custom Orders", text: "Bring a Pinterest board — we'll bake the rest." },
];

export default function CustomCakes({ onBookCake }) {
  return (
    <section id="custom" className="relative py-24 md:py-32 bg-ink overflow-hidden" data-testid="custom-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,154,82,0.10),transparent_55%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="overline mb-4">
              Custom Celebration Cakes
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="heading-display text-cream text-4xl md:text-5xl lg:text-6xl"
            >
              Your moment, <span className="italic text-warm">our masterpiece.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-mute mt-6 leading-relaxed text-lg max-w-xl"
            >
              From first birthdays to fiftieth anniversaries — share your idea and our pastry team will design a one-of-one cake worth every photo.
            </motion.p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="glass rounded-2xl p-5"
                  data-testid={`custom-service-${i}`}
                >
                  <s.icon className="w-5 h-5 text-gold mb-3" />
                  <div className="text-cream font-medium">{s.title}</div>
                  <div className="text-xs text-mute mt-1 leading-relaxed">{s.text}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button onClick={onBookCake} className="btn-primary" data-testid="custom-book-cake-btn">
                Book Your Cake
              </button>
              <a href="#visit" className="btn-ghost-gold" data-testid="custom-visit-btn">
                Visit our store
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 order-1 lg:order-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img src={CUSTOM_IMG} alt="Elegant custom celebration cake" className="w-full h-[460px] md:h-[560px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-4 md:left-6 glass-strong rounded-2xl px-6 py-5"
            >
              <div className="text-xs text-mute tracking-[0.22em] uppercase">Starting at</div>
              <div className="font-display text-3xl text-cream">₹699</div>
              <div className="text-xs text-mute mt-1">500g · custom design</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
