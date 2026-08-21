import { Star, Quote, BadgeCheck, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";
import { SITE, IMAGES } from "../data/site";

const Stars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-[#d7ff3e] text-[#d7ff3e]" />
    ))}
  </div>
);

const REVIEWS = [
  { name: "Kapil Pal", time: "Recent", text: "Excellent service", img: IMAGES.portrait1 },
  { name: "Heera Lal", time: "Verified rider", text: "Good service center and I am Happy this service", img: IMAGES.portrait2 },
];

export const Testimonials = () => (
  <section id="reviews" className="py-24 sm:py-32 border-b border-white/10 bg-[#565d64] text-[#f3f4f6]" data-testid="testimonials-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal>
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[#d7ff3e]" data-testid="reviews-kicker">
          05 — Word on the Street
        </span>
      </Reveal>
      <div className="mt-5 grid lg:grid-cols-12 gap-10 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <h2 className="font-display uppercase tracking-tight leading-[0.95] text-4xl sm:text-6xl" data-testid="reviews-headline">
              Riders<br />rate us
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 brushed border border-white/30 card-3d p-8 sm:p-10 relative overflow-hidden text-[#262626]" data-testid="rating-summary-card">
              <div className="absolute top-0 left-0 right-0 h-1 diagonal-stripes opacity-70" />
              <div className="flex items-end gap-4">
                <span className="font-display text-7xl sm:text-8xl leading-none" data-testid="rating-value">{SITE.rating}</span>
                <div className="pb-2">
                  <Stars />
                  <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#4a5057] mt-2">
                    out of 5 · Google Reviews
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#4a5057] mt-6 leading-relaxed">
                Real reviews from real riders of Ghaziabad who trust us with their machines.
              </p>
              <a
                href={SITE.reviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 px-6 h-[52px] bg-[#d7ff3e] text-[#262626] font-mono-tech text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-200"
                data-testid="rate-us-google-button"
              >
                <Star className="w-4 h-4 fill-current" />
                Rate us on Google
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
              </a>
            </div>
          </Reveal>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-6 lg:pt-24">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={0.15 + i * 0.12}>
              <Tilt max={5} className="h-full">
              <figure
                className={`brushed border border-white/30 card-3d p-7 sm:p-9 relative group hover:border-[#d7ff3e]/70 transition-colors duration-300 text-[#262626] ${
                  i % 2 === 1 ? "lg:ml-16" : "lg:mr-16"
                }`}
                data-testid={`review-card-${r.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#d7ff3e]/30 transition-colors duration-300 group-hover:text-[#d7ff3e]" />
                <Stars />
                <blockquote className="mt-5 text-lg sm:text-2xl font-light leading-snug" data-testid={`review-text-${r.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  "{r.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={r.img}
                    alt={`${r.name} profile`}
                    className="w-10 h-10 object-cover border border-white/10"
                    data-testid={`review-avatar-${r.name.toLowerCase().replace(/\s+/g, "-")}`}
                  />
                  <div>
                    <p className="font-mono-tech text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                      {r.name}
                      <BadgeCheck className="w-3.5 h-3.5 text-[#d7ff3e]" />
                    </p>
                    <p className="font-mono-tech text-[10px] uppercase tracking-[0.2em] text-[#4a5057] mt-0.5">{r.time}</p>
                  </div>
                </figcaption>
              </figure>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);
