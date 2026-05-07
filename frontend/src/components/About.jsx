import { motion } from "framer-motion";
import { Sparkles, Heart, Cookie } from "lucide-react";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1776267074159-6245a4ec670c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxkYXJrJTIwbHV4dXJ5JTIwYmFrZXJ5JTIwaW50ZXJpb3J8ZW58MHx8fHwxNzc4MTcwNzA2fDA&ixlib=rb-4.1.0&q=85";

const PILLARS = [
  { icon: Heart, title: "Made with love", text: "Every cake is hand-finished by our pastry team — no factory shortcuts." },
  { icon: Sparkles, title: "Premium taste", text: "European chocolate, real fruit, fresh dairy — no compromises on ingredients." },
  { icon: Cookie, title: "Honest pricing", text: "₹1–200 per person. Luxury bakery quality without the luxury markup." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-ink2 grain" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img src={ABOUT_IMG} alt="Inside Retro Bakes Store" className="w-full h-[480px] md:h-[560px] object-cover" loading="lazy" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 md:right-6 glass-strong rounded-2xl p-5 md:p-6 max-w-[260px]"
            >
              <div className="font-display text-4xl text-cream leading-none">2018</div>
              <div className="text-xs text-mute tracking-[0.18em] uppercase mt-2">
                Baking happiness in Vijayanagar
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="overline mb-4"
            >
              Our Story
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="heading-display text-cream text-4xl md:text-5xl lg:text-6xl"
            >
              Handcrafted desserts. <span className="italic text-warm">Bengaluru hearts.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-mute mt-6 leading-relaxed text-lg"
            >
              Retro Bakes brings handcrafted desserts and celebration cakes to Bengaluru with a focus on taste, quality and affordability. From late-night cheesecake cravings to once-in-a-lifetime birthday cakes, every order leaves our oven warm — and our team a little prouder.
            </motion.p>

            <div className="mt-10 grid sm:grid-cols-3 gap-5">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                  className="glass rounded-2xl p-5"
                  data-testid={`about-pillar-${i}`}
                >
                  <div className="w-10 h-10 rounded-full bg-[#C7A17A]/12 grid place-items-center mb-4 text-gold">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div className="text-cream font-medium mb-1">{p.title}</div>
                  <div className="text-xs text-mute leading-relaxed">{p.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
