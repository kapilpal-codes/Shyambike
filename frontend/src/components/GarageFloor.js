import Marquee from "react-fast-marquee";
import { Reveal } from "./Reveal";
import { IMAGES } from "../data/site";

const SHOTS = [
  { src: IMAGES.engine, label: "Engine bay detail" },
  { src: IMAGES.mechanic, label: "Hands on the job" },
  { src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=85&w=1200&auto=format", label: "Precision work" },
  { src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=85&w=1200&auto=format", label: "Power plant" },
  { src: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=85&w=1200&auto=format", label: "Tools of the trade" },
  { src: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=85&w=1200&auto=format", label: "Ready to ride" },
];

export const GarageFloor = () => (
  <section className="py-24 sm:py-32 border-b border-white/10 bg-[#4a5057] overflow-hidden" data-testid="garage-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal>
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[#00e0ff]" data-testid="garage-kicker">
          03 — The Garage Floor
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display uppercase tracking-tight leading-[0.9] text-5xl sm:text-7xl mt-5" data-testid="garage-headline">
          Tools. Torque. <span className="text-outline">Trust.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-6 text-[#d4d4d4] max-w-xl text-sm sm:text-base leading-relaxed" data-testid="garage-intro">
          A look inside the workshop — the machines, instruments and hands that keep Ghaziabad's bikes on the road.
        </p>
      </Reveal>
    </div>
    <Reveal delay={0.2}>
      <div className="mt-14" data-testid="garage-marquee">
        <Marquee speed={32} gradient={false} pauseOnHover>
          {SHOTS.map((s, i) => (
            <figure
              key={i}
              className="relative h-60 sm:h-72 w-[320px] sm:w-[400px] mx-3 border border-white/20 overflow-hidden group card-3d"
              data-testid={`garage-shot-${i}`}
            >
              <img
                src={s.src}
                alt={s.label}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[30%] contrast-110 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262626]/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-3 left-3 bg-[#262626]/85 backdrop-blur-sm border border-white/15 px-3 py-1.5 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#f4f4f4]">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </Marquee>
      </div>
    </Reveal>
  </section>
);
