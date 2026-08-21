import { motion } from "framer-motion";
import { Phone, MapPin, Gauge } from "lucide-react";
import { SITE } from "../data/site";

export const Navbar = ({ onNavigate }) => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#40464d]/80 backdrop-blur-xl border-b border-white/10"
      data-testid="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <button
          onClick={() => onNavigate("#top")}
          className="flex items-center gap-2.5 group"
          data-testid="navbar-logo"
        >
          <span className="w-9 h-9 bg-[#d7ff3e] flex items-center justify-center transition-colors duration-200 group-hover:bg-white">
            <Gauge className="w-5 h-5 text-[#40464d]" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg tracking-wide uppercase hidden xs:block sm:block">
            Shree Shyam <span className="text-[#d7ff3e]">Bike Point</span>
          </span>
        </button>
        <nav className="hidden md:flex items-center gap-7 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#d4d4d4]">
          {[["Services", "#services"], ["About", "#about"], ["Reviews", "#reviews"], ["Visit Us", "#contact"]].map(
            ([label, id]) => (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className="hover:text-[#d7ff3e] transition-colors duration-200"
                data-testid={`nav-link-${label.toLowerCase().replace(" ", "-")}`}
              >
                {label}
              </button>
            )
          )}
        </nav>
        <div className="flex items-center gap-2.5">
          <a
            href={SITE.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-4 h-10 border border-white/15 font-mono-tech text-[11px] uppercase tracking-[0.15em] hover:border-[#d7ff3e] hover:text-[#d7ff3e] transition-colors duration-200"
            data-testid="navbar-directions-button"
          >
            <MapPin className="w-3.5 h-3.5" /> Directions
          </a>
          <a
            href={SITE.phoneTel}
            className="flex items-center gap-2 px-4 h-10 bg-[#d7ff3e] text-[#262626] font-mono-tech text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-white hover:text-[#40464d] transition-colors duration-200"
            data-testid="navbar-call-button"
          >
            <Phone className="w-3.5 h-3.5" /> {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </motion.header>
  );
};
