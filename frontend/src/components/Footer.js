import { Gauge, Phone, MapPin } from "lucide-react";
import { SITE } from "../data/site";

export const Footer = () => (
  <footer className="border-t border-white/10 bg-[#30353b]" data-testid="site-footer">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-[#d7ff3e] flex items-center justify-center">
              <Gauge className="w-5 h-5 text-[#40464d]" strokeWidth={2.5} />
            </span>
            <div>
              <p className="font-display uppercase tracking-wide text-xl leading-none" data-testid="footer-name-en">{SITE.nameEn}</p>
              <p className="font-hindi text-sm text-[#d4d4d4] mt-1" data-testid="footer-name-hi">{SITE.nameHi}</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#d4d4d4] max-w-md leading-relaxed" data-testid="footer-address">{SITE.address}</p>
          <p className="mt-2 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#bdbdbd]">Plus Code: {SITE.plusCode}</p>
        </div>
        <div className="flex flex-col gap-3 md:text-right">
          <a href={SITE.phoneTel} className="flex md:justify-end items-center gap-2 font-display text-2xl sm:text-3xl tracking-wide hover:text-[#d7ff3e] transition-colors duration-200" data-testid="footer-phone">
            <Phone className="w-5 h-5 text-[#d7ff3e]" /> {SITE.phoneDisplay}
          </a>
          <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#d4d4d4]" data-testid="footer-hours">{SITE.hours}</p>
          <a href={SITE.directions} target="_blank" rel="noopener noreferrer" className="flex md:justify-end items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#d7ff3e] hover:text-white transition-colors duration-200" data-testid="footer-directions-link">
            <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
          </a>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3">
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#bdbdbd]" data-testid="footer-copyright">
          © {new Date().getFullYear()} {SITE.nameEn}. All rights reserved.
        </p>
        <p className="font-mono-tech text-[10px] uppercase tracking-[0.25em] text-[#bdbdbd]">Open 7 days · 8 AM – 9 PM</p>
      </div>
    </div>
  </footer>
);
