import { motion } from "framer-motion";
import { Phone, Cake } from "lucide-react";
import { SITE } from "@/lib/site";

export default function MobileCTA({ onBookCake }) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 inset-x-0 z-30 md:hidden glass-strong border-t border-white/10 px-4 py-3"
      data-testid="mobile-cta-bar"
    >
      <div className="flex gap-2.5">
        <a href={`tel:${SITE.phoneIntl}`} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full py-3 bg-white/5 text-cream text-sm font-medium border border-white/10" data-testid="mobile-cta-call">
          <Phone className="w-4 h-4" /> Call
        </a>
        <button onClick={onBookCake} className="flex-1 btn-primary !py-3 text-sm" data-testid="mobile-cta-book">
          <Cake className="w-4 h-4" /> Book Cake
        </button>
      </div>
    </motion.div>
  );
}
