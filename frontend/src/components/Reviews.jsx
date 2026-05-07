import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "@/lib/site";

export default function Reviews() {
  const [i, setI] = useState(0);
  const total = REVIEWS.length;

  const next = useCallback(() => setI((v) => (v + 1) % total), [total]);
  const prev = useCallback(() => setI((v) => (v - 1 + total) % total), [total]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const r = REVIEWS[i];

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-ink2 grain overflow-hidden" data-testid="reviews-section">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(199,161,122,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="overline mb-4">Why Bengaluru loves us</div>
            <h2 className="heading-display text-cream text-4xl md:text-5xl lg:text-6xl">
              197+ five‑star <span className="italic text-warm">love letters.</span>
            </h2>
            <p className="text-mute mt-6 max-w-md leading-relaxed">
              Real words from real customers — couples, students, families and Insta foodies who keep walking back into our Vijayanagar store.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <button onClick={prev} className="glass rounded-full w-12 h-12 grid place-items-center text-cream hover:text-gold transition-colors" data-testid="review-prev-btn" aria-label="Previous review">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={next} className="glass rounded-full w-12 h-12 grid place-items-center text-cream hover:text-gold transition-colors" data-testid="review-next-btn" aria-label="Next review">
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="text-sm text-mute ml-2">
                <span className="text-cream font-medium">{i + 1}</span> / {total}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="glass-strong rounded-3xl p-8 md:p-12 relative"
                data-testid="active-review-card"
              >
                <Quote className="absolute -top-4 -left-2 w-12 h-12 text-[#C7A17A]/30 rotate-180" />
                <div className="flex gap-1 mb-5">
                  {[...Array(r.stars)].map((_, k) => (
                    <Star key={k} className="w-5 h-5 fill-[#E39A52] text-[#E39A52]" />
                  ))}
                </div>
                <p className="font-display text-2xl md:text-3xl leading-relaxed text-cream">
                  "{r.text}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C7A17A] to-[#E39A52] grid place-items-center text-[#0F0C0B] font-display text-lg font-semibold">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-cream font-medium">{r.name}</div>
                    <div className="text-xs text-mute tracking-wide">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex gap-2 lg:justify-start">
              {REVIEWS.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  data-testid={`review-dot-${k}`}
                  aria-label={`Go to review ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    k === i ? "w-10 bg-[#C7A17A]" : "w-4 bg-white/15"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
