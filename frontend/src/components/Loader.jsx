import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ done }) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    if (done) {
      const t = setTimeout(() => setHidden(true), 700);
      return () => clearTimeout(t);
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: done ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-[#0F0C0B] grid place-items-center"
          data-testid="page-loader"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C7A17A] to-[#E39A52] grid place-items-center text-[#0F0C0B] font-display text-2xl font-semibold">
                R
              </div>
              <span className="absolute inset-0 rounded-full ring-1 ring-[#C7A17A]/40 animate-ping" />
            </motion.div>
            <div className="font-display text-cream text-xl tracking-wide">Retro Bakes</div>
            <div className="w-44 h-px bg-white/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#C7A17A] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
