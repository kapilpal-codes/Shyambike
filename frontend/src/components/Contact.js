import { MapPin, Phone, Clock3, Mail, Navigation, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SITE } from "../data/site";

const ROWS = [
  { icon: MapPin, label: "Address", value: SITE.address, href: SITE.directions, testid: "contact-address" },
  { icon: Phone, label: "Phone", value: SITE.phoneDisplay, href: SITE.phoneTel, testid: "contact-phone" },
  { icon: Clock3, label: "Working Hours", value: SITE.hours, href: null, testid: "contact-hours" },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, testid: "contact-email" },
];

export const Contact = () => (
  <section id="contact" className="py-24 sm:py-32 bg-[#40464d]" data-testid="contact-section">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal>
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.3em] text-[#d7ff3e]" data-testid="contact-kicker">
          06 — Find the Garage
        </span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display uppercase tracking-tight leading-[0.95] text-4xl sm:text-6xl mt-5" data-testid="contact-headline">
          Roll in. <span className="text-outline">Ride out.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5 flex flex-col">
          <div className="border-t border-white/10">
            {ROWS.map((row, i) => (
              <Reveal key={row.label} delay={0.08 * i}>
                <div className="group flex gap-5 py-6 border-b border-white/10" data-testid={row.testid}>
                  <span className="w-11 h-11 shrink-0 border border-white/15 flex items-center justify-center group-hover:bg-[#d7ff3e] group-hover:border-[#d7ff3e] group-hover:text-[#262626] transition-colors duration-300">
                    <row.icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                  </span>
                  <div>
                    <p className="font-mono-tech text-[10px] uppercase tracking-[0.3em] text-[#bdbdbd]">{row.label}</p>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={row.href.startsWith("http") ? "_blank" : undefined}
                        rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block mt-2 text-sm sm:text-base text-white/90 leading-relaxed hover:text-[#d7ff3e] transition-colors duration-200"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm sm:text-base text-white/90 leading-relaxed">{row.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.phoneTel}
                className="flex items-center gap-3 px-6 h-13 h-[52px] bg-[#d7ff3e] text-[#262626] font-mono-tech text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-200"
                data-testid="contact-call-button"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href={SITE.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 h-[52px] border border-white/20 font-mono-tech text-[11px] uppercase tracking-[0.2em] hover:border-[#d7ff3e] hover:text-[#d7ff3e] transition-colors duration-200"
                data-testid="contact-directions-button"
              >
                <Navigation className="w-4 h-4" /> Get Directions <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-7">
          <div className="relative border border-white/10 h-[380px] sm:h-full min-h-[380px] overflow-hidden group">
            <iframe
              title="Shree Shyam Bike Point location map"
              src={SITE.mapEmbed}
              className="absolute inset-0 w-full h-full grayscale invert-[0.92] contrast-[0.9] group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100 transition-all duration-700"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              data-testid="google-map-embed"
            />
            <div className="absolute top-4 left-4 bg-[#40464d]/85 backdrop-blur-sm border border-white/10 px-4 py-3 pointer-events-none">
              <p className="font-display uppercase tracking-wide text-sm">{SITE.nameEn}</p>
              <p className="font-mono-tech text-[10px] tracking-[0.2em] text-[#d7ff3e] mt-1 uppercase">{SITE.plusCode}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
