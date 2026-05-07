import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function FloatingWhatsapp() {
  const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi Retro Bakes! I'd like to place an order.")}`;
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.7, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 220, damping: 18 }}
      whileHover={{ scale: 1.06 }}
      className="fixed bottom-24 md:bottom-7 right-5 md:right-7 z-40"
      aria-label="Order on WhatsApp"
      data-testid="floating-whatsapp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/45 animate-ping" />
      <span className="relative flex items-center gap-2 rounded-full pl-4 pr-5 py-3 bg-[#25D366] text-white font-medium shadow-[0_12px_30px_rgba(37,211,102,0.35)]">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden md:inline text-sm">Order on WhatsApp</span>
      </span>
    </motion.a>
  );
}
