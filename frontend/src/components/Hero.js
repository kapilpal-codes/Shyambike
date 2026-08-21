import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Phone, Navigation, Star } from "lucide-react";
import { SITE, IMAGES } from "../data/site";
import { Magnetic } from "./Magnetic";

const MaskedLine = ({ children, delay, className = "" }) => (
  <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "112%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const SPECS = ["Open 7 Days · 8 AM – 9 PM", "All Brands Serviced", "Genuine Parts In Stock", "4.2★ Google Rated"];

export const Hero = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });
  const imgX = useTransform(smx, [-0.5, 0.5], [-20, 20]);
  const imgY = useTransform(smy, [-0.5, 0.5], [-12, 12]);
  const glowX = useTransform(smx, [-0.5, 0.5], ["30%", "70%"]);
  const glowY = useTransform(smy, [-0.5, 0.5], ["25%", "60%"]);
  const glowBg = useMotionTemplate`radial-gradient(560px circle at ${glowX} ${glowY}, rgba(215, 255, 62, 0.13), transparent 65%)`;

  const handleMouse = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const resetMouse = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#565d64] ind-grid"
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      data-testid="hero-section"
    >
      <motion.div style={{ x: imgX, y: imgY }} className="absolute -inset-6 pointer-events-none" data-testid="hero-engine-photo">
        <motion.img
          src={IMAGES.heroEngine}
          alt="Polished chrome motorcycle engine with exposed V-twin cylinders"
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full object-cover grayscale-[45%] contrast-125"
          data-testid="hero-engine-image"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#565d64]/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#565d64] via-[#565d64]/35 to-[#565d64]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#565d64]/85 via-[#565d64]/25 to-transparent pointer-events-none" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: glowBg }} />
      <div className="absolute top-0 left-0 right-0 h-1 diagonal-stripes opacity-80 z-10" />

      <motion.div
        initial={{ scale: 0, rotate: -40, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-8 lg:right-16 top-24 sm:top-28 z-10 hidden md:block pointer-events-none"
        data-testid="hero-badge"
      >
        <div className="relative w-36 h-36 lg:w-44 lg:h-44">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
            <defs>
              <path id="badge-circle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
            </defs>
            <text fill="#f4f4f4" fontSize="12.5" letterSpacing="3" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 600 }}>
              <textPath href="#badge-circle">SHREE SHYAM BIKE POINT • GHAZIABAD • 4.2 RATED •</textPath>
            </text>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full brushed relative flex items-center justify-center shadow-2xl shadow-black/60">
              <Star className="w-6 h-6 fill-[#d7ff3e] text-[#d7ff3e]" />
            </span>
          </span>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 min-h-screen flex flex-col justify-center pt-28 pb-28 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-5"
        >
          <span className="h-px w-12 bg-[#d7ff3e]" />
          <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[#d7ff3e]" data-testid="hero-kicker">
            Motorcycle Parts Store · Two-Wheeler Repair
          </span>
        </motion.div>

        <h1 className="font-display uppercase leading-[0.9] text-[13vw] sm:text-[7.5rem] lg:text-[9rem]" data-testid="hero-headline">
          <MaskedLine delay={0.25} className="text-metal">Shree Shyam</MaskedLine>
          <MaskedLine delay={0.42} className="text-outline">Bike Point</MaskedLine>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl"
        >
          <span
            className="brushed relative inline-flex items-center rounded-full px-5 py-2 font-hindi font-semibold text-sm sm:text-base text-[#262626]"
            data-testid="hero-business-name-hi"
          >
            {SITE.nameHi} — Vijay Nagar, Ghaziabad
          </span>
          <p className="mt-4 text-sm sm:text-base text-[#e4e4e4] max-w-xl" data-testid="hero-tagline">
            Premium Motorcycle Care &amp; Parts — quick, reliable service for all types of bikes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 pointer-events-auto">
            <Magnetic>
              <span className="block p-[2px] bg-gradient-to-r from-[#d7ff3e] to-[#00e0ff] glow-orange">
                <a
                  href={SITE.phoneTel}
                  className="group flex items-center gap-3 px-8 h-14 bg-[#2a2e33] font-mono-tech text-xs uppercase tracking-[0.2em] font-semibold hover:bg-transparent transition-colors duration-300"
                  data-testid="hero-call-button"
                >
                  <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  Call Now
                </a>
              </span>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href={SITE.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 h-14 border border-white/30 bg-[#454b52]/60 backdrop-blur-sm font-mono-tech text-xs uppercase tracking-[0.2em] hover:border-[#00e0ff] hover:text-[#00e0ff] transition-colors duration-200"
                data-testid="hero-directions-button"
              >
                <Navigation className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                Get Directions
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 inset-x-0 z-10 border-t border-white/15 bg-[#454b52]/55 backdrop-blur-md"
        data-testid="hero-stats"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex flex-wrap sm:flex-nowrap items-center justify-between gap-x-8 gap-y-2 font-mono-tech text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#e4e4e4]">
          {SPECS.map((s, i) => (
            <span key={s} className="flex items-center gap-3" data-testid={`hero-spec-${i}`}>
              <span className="w-1.5 h-1.5 bg-[#d7ff3e]" />
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
