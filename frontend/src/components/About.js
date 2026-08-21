import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, Clock3, IndianRupee } from "lucide-react";
import { Reveal, LineReveal } from "./Reveal";
import { IMAGES } from "../data/site";

const POINTS = [
  { icon: BadgeCheck, title: "Genuine Parts", text: "A trusted motorcycle parts store stocking quality spares you can rely on." },
  { icon: Clock3, title: "Quick Turnaround", text: "Fast, reliable service so you're back on the road the same day." },
  { icon: IndianRupee, title: "Honest Pricing", text: "Transparent estimates, fair rates — no surprise charges, ever." },
];

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 border-b border-white/10 bg-[#565d64] text-[#f3f4f6]" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[#d7ff3e]" data-testid="about-kicker">
                01 — About the Garage
              </span>
            </Reveal>
            <h2 className="font-display uppercase leading-[0.95] tracking-tight text-4xl sm:text-6xl mt-5" data-testid="about-headline">
              <LineReveal text="Your bike," delay={0.05} />
              <LineReveal text="treated like ours." delay={0.15} className="text-outline" />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-8 text-[#d4d4d4] text-base sm:text-lg leading-relaxed max-w-xl" data-testid="about-description">
                Shree Shyam Bike Point <span className="font-hindi">(श्री श्याम बाइक पॉइंट)</span> is a trusted motorcycle
                parts store and two-wheeler repair shop in Vijay Nagar, Ghaziabad. From daily commuters to sports
                machines, we deliver quick, reliable service for all types of bikes — genuine spares, skilled hands,
                and a garage that treats every ride like its own.
              </p>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {POINTS.map((p, i) => (
                <Reveal key={p.title} delay={0.1 + i * 0.1} className="h-full">
                  <div
                    className="group bg-[#40464d] p-6 h-full hover:bg-[#6d747b] transition-colors duration-300"
                    data-testid={`about-point-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <p.icon className="w-6 h-6 text-[#d7ff3e] transition-transform duration-300 group-hover:-translate-y-1" />
                    <h3 className="font-display uppercase tracking-wide mt-4 text-lg">{p.title}</h3>
                    <p className="text-sm text-[#d4d4d4] mt-2 leading-relaxed">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.15} className="relative h-full min-h-[420px]">
              <motion.div style={{ y: yImg }} className="absolute inset-0 lg:-inset-y-8">
                <div className="relative h-full border border-white/10 overflow-hidden card-3d">
                  <img
                    src={IMAGES.mechanic}
                    alt="Mechanic repairing a motorcycle in the garage"
                    className="w-full h-full object-cover grayscale-[35%] contrast-110"
                    data-testid="about-mechanic-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#40464d]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between border-t border-white/10 bg-[#40464d]/70 backdrop-blur-sm">
                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#d4d4d4]">Inside the workshop</span>
                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#d7ff3e]">Est. Trust</span>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
