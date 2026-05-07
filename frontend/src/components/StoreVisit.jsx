import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Navigation } from "lucide-react";
import { SITE } from "@/lib/site";

export default function StoreVisit() {
  return (
    <section id="visit" className="relative py-24 md:py-32 bg-ink2 grain" data-testid="visit-section">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <div className="overline mb-4">Find us</div>
            <h2 className="heading-display text-cream text-4xl md:text-5xl lg:text-6xl">
              Drop by for a slice. <span className="italic text-warm">Stay for the vibe.</span>
            </h2>
            <p className="text-mute mt-6 leading-relaxed text-lg max-w-md">
              Tucked into 8th Main Road, Vijayanagar — warm lights, slow jazz, and a display case full of trouble.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex gap-4 items-start" data-testid="visit-address">
                <div className="w-11 h-11 glass rounded-full grid place-items-center text-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-mute tracking-[0.2em] uppercase mb-1">Address</div>
                  <div className="text-cream leading-relaxed">{SITE.address}</div>
                </div>
              </div>
              <div className="flex gap-4 items-start" data-testid="visit-hours">
                <div className="w-11 h-11 glass rounded-full grid place-items-center text-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-mute tracking-[0.2em] uppercase mb-1">Opening hours</div>
                  {SITE.hours.map((h) => (
                    <div key={h.day} className="text-cream leading-relaxed text-sm">
                      <span className="text-mute">{h.day}</span> · {h.time}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 items-start" data-testid="visit-phone">
                <div className="w-11 h-11 glass rounded-full grid place-items-center text-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-mute tracking-[0.2em] uppercase mb-1">Call us</div>
                  <a href={`tel:${SITE.phoneIntl}`} className="text-cream hover:text-gold transition-colors">{SITE.phone}</a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a href={`tel:${SITE.phoneIntl}`} className="btn-primary" data-testid="visit-call-btn">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={SITE.mapsLink} target="_blank" rel="noreferrer" className="btn-ghost-gold" data-testid="visit-directions-btn">
                <Navigation className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden glass min-h-[420px]"
          >
            <iframe
              title="Retro Bakes Store · Vijayanagar"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full map-dark"
              data-testid="visit-map-iframe"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
