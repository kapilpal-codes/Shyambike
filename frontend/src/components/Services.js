import { Cog, Zap, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";
import { IMAGES } from "../data/site";

const Multimeter = () => (
  <div className="mt-6 bg-[#262626] p-4 relative overflow-hidden" data-testid="multimeter-visual">
    <div className="flex items-center justify-between">
      <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#8f8f8f]">Battery · Coil Check</span>
      <motion.span
        className="w-2 h-2 rounded-full bg-[#00e0ff]"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.4 }}
      />
    </div>
    <div className="mt-2 flex items-end gap-2">
      <span className="font-display text-5xl leading-none text-[#00e0ff]">12.6</span>
      <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#8f8f8f] mb-1">Volt DC</span>
    </div>
    <div className="mt-3 flex items-end gap-1 h-8">
      {[5, 9, 7, 12, 8, 14, 10, 16, 12, 18, 14, 20, 16, 22].map((h, i) => (
        <motion.span
          key={i}
          className={`w-1.5 ${i % 3 === 0 ? "bg-[#d7ff3e]" : "bg-[#00e0ff]"}`}
          animate={{ height: [h * 0.5, h, h * 0.5] }}
          transition={{ repeat: Infinity, duration: 1.6, delay: i * 0.09, ease: "easeInOut" }}
        />
      ))}
    </div>
  </div>
);

const SERVICES = [
  {
    no: "01",
    icon: Cog,
    title: "Engine Rebuilds",
    text: "Complete strip-down, rebore, piston and valve work — rebuilt to factory spec by experienced hands.",
    span: "md:col-span-2",
  },
  {
    no: "02",
    icon: Zap,
    title: "Electrical Diagnostics",
    text: "Multimeter-grade fault tracing — battery, coil, wiring and CDI issues found fast, fixed right.",
    span: "md:col-span-2",
    extra: <Multimeter />,
  },
  {
    no: "03",
    icon: Gauge,
    title: "Routine Maintenance",
    text: "Oil, chain, brakes and filters — quick same-day service that keeps you rolling.",
    span: "md:col-span-2",
  },
];

export const Services = () => (
  <section id="services" className="py-24 sm:py-32 border-b border-white/10 bg-[#4a5057]" data-testid="services-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <Reveal>
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[#d7ff3e]" data-testid="services-kicker">
              02 — Precision Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display uppercase leading-[0.9] tracking-tight text-5xl sm:text-7xl mt-5" data-testid="services-headline">
              Precision work.<br />
              <span className="text-outline">Zero guesswork.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.2}>
          <p className="text-[#d4d4d4] max-w-sm text-sm sm:text-base leading-relaxed" data-testid="services-intro">
            Quick, reliable service for all types of bikes — every job, big or small, gets the same obsession with detail.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid md:grid-cols-6 gap-5">
        {SERVICES.map((s, i) => (
          <Reveal key={s.no} delay={i * 0.08} className={`${s.span} h-full`}>
            <Tilt
              max={5}
              className="brushed relative border border-white/30 text-[#262626] p-7 sm:p-8 h-full flex flex-col card-3d overflow-hidden"
              data-testid={`service-card-${s.no}`}
            >
              <div className="flex items-start justify-between">
                <span className="w-12 h-12 bg-[#262626] flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-[#d7ff3e]" />
                </span>
                <span className="font-display text-2xl text-[#262626]/40">{s.no}</span>
              </div>
              <h3 className="font-display uppercase tracking-wide text-3xl sm:text-4xl mt-6 leading-none">{s.title}</h3>
              <p className="text-sm sm:text-base text-[#3f3f3f] mt-3 leading-relaxed">{s.text}</p>
              {s.extra}
            </Tilt>
          </Reveal>
        ))}
        <Reveal delay={0.2} className="md:col-span-6 h-full">
          <div className="relative overflow-hidden border border-white/20 min-h-[280px] h-full group card-3d" data-testid="services-photo-tile">
            <img
              src={IMAGES.engine}
              alt="Detailed view of a motorcycle engine"
              className="absolute inset-0 w-full h-full object-cover grayscale-[25%] contrast-110 transition-transform duration-700 group-hover:scale-105"
              data-testid="parts-engine-image"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#262626]/60 to-transparent" />
            <span className="absolute bottom-4 left-5 bg-[#262626]/85 border border-white/15 px-3 py-1.5 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#f4f4f4]">
              Precision engineering, respected
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <p className="mt-8 font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#d4d4d4]" data-testid="services-parts-note">
          + Genuine spare parts in store — walk in or ask on WhatsApp
        </p>
      </Reveal>
    </div>
  </section>
);
