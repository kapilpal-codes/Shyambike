import Marquee from "react-fast-marquee";
import { Zap } from "lucide-react";
import { BRANDS } from "../data/site";

const ITEMS = [...BRANDS, "GENUINE PARTS", "QUICK SERVICE"];

export const EditorialMarquee = () => (
  <section className="border-y border-[#40464d]/20 bg-[#d7ff3e] py-8 sm:py-10 overflow-hidden" data-testid="brands-marquee">
    <Marquee speed={38} gradient={false} pauseOnHover>
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`font-display uppercase text-5xl sm:text-7xl tracking-wide px-6 sm:px-10 ${
              i % 2 === 0 ? "text-[#40464d]" : "text-outline-onaccent"
            }`}
            data-testid={`marquee-item-${item.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {item}
          </span>
          <Zap className="w-6 h-6 text-[#40464d] fill-[#40464d]" />
        </span>
      ))}
    </Marquee>
  </section>
);
