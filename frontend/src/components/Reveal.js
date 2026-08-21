import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "", y = 40 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const LineReveal = ({ text, delay = 0, className = "" }) => (
  <motion.span
    className="block overflow-hidden pb-[0.08em] -mb-[0.08em]"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <motion.span
      className={`block ${className}`}
      variants={{ hidden: { y: "115%" }, show: { y: 0 } }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {text}
    </motion.span>
  </motion.span>
);
