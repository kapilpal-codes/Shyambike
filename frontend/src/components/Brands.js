import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";
import { BRANDS } from "../data/site";

export const Brands = () => (
  <section className="py-24 sm:py-32 border-b border-white/10 bg-[#565d64] text-[#f3f4f6]" data-testid="brands-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal>
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[#d7ff3e]" data-testid="brands-kicker">
          04 — Machines We Master
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display uppercase tracking-tight leading-[0.95] text-4xl sm:text-6xl mt-5" data-testid="brands-headline">
          Every brand. <span className="text-outline">Every bike.</span>
        </h2>
      </Reveal>
      <div className="mt-14 border-t border-l border-white/10 grid grid-cols-2 md:grid-cols-5">
        {BRANDS.map((brand, i) => (
          <Reveal key={brand} delay={i * 0.08} className="h-full">
            <Tilt
              max={10}
              className="group relative border-r border-b border-white/10 h-36 sm:h-48 flex flex-col items-center justify-center gap-2 overflow-hidden hover:bg-[#d7ff3e] transition-colors duration-300"
              data-testid={`brand-card-${brand.toLowerCase()}`}
            >
              <span className="font-mono-tech text-[10px] tracking-[0.3em] text-[#d4d4d4] group-hover:text-[#262626]/70 transition-colors duration-300">
                0{i + 1}
              </span>
              <span className="font-display uppercase text-2xl sm:text-4xl tracking-wide text-outline group-hover:text-[#262626] group-hover:[-webkit-text-stroke:0px] transition-all duration-300">
                {brand}
              </span>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#d4d4d4] group-hover:text-[#262626]/80 transition-colors duration-300">
                Serviced Here
              </span>
            </Tilt>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <p className="mt-6 font-mono-tech text-[11px] uppercase tracking-[0.25em] text-[#d4d4d4]" data-testid="brands-note">
          + All other two-wheeler makes &amp; models welcome
        </p>
      </Reveal>
    </div>
  </section>
);
