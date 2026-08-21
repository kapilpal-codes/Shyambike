import { useEffect, useRef } from "react";
import Lenis from "lenis";
import "@/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EditorialMarquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { GarageFloor } from "./components/GarageFloor";
import { Brands } from "./components/Brands";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenisRef.current = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const navigate = (target) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -64, duration: 1.4 });
    } else {
      document.querySelector(target)?.scrollIntoView();
    }
  };

  return (
    <div className="App bg-[#40464d] text-white">
      <div className="grain-overlay" />
      <Navbar onNavigate={navigate} />
      <main>
        <Hero />
        <EditorialMarquee />
        <About />
        <GarageFloor />
        <Services />
        <Brands />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
