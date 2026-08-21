import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "../data/site";

export const FloatingActions = () => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 1.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-[80] flex flex-col gap-3"
    data-testid="floating-actions"
  >
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="pulse-ring-green relative w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center hover:scale-110 transition-transform duration-200"
      data-testid="whatsapp-float-button"
    >
      <MessageCircle className="w-6 h-6 text-white fill-white/20" />
    </a>
    <a
      href={SITE.phoneTel}
      aria-label="Call Shree Shyam Bike Point"
      className="pulse-ring relative w-14 h-14 rounded-full bg-[#d7ff3e] flex items-center justify-center hover:scale-110 transition-transform duration-200"
      data-testid="call-float-button"
    >
      <Phone className="w-6 h-6 text-[#262626]" />
    </a>
  </motion.div>
);
