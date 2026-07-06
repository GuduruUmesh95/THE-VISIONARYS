import React, { useEffect, useRef, useState } from "react";
import ScrollCanvas from "./components/canvas/ScrollCanvas";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./sections/HeroSection";
import ClientsSplit from "./sections/ClientsSplit";
import SolutionsBentoModal from "./sections/SolutionsBentoModal";
import RecognitionBento from "./sections/RecognitionBento";
import ProcessTimeline from "./sections/ProcessTimeline";
import CertificationsBento from "./sections/CertificationsBento";
import Contact from "./components/Contact";
import InsightsAndCareers from "./sections/InsightsAndCareers";
import Footer from "./components/layout/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AIChatbot from "./components/AIChatbot";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroContainerRef = useRef(null);
  // Shared scroll progress reference bypassing React rendering cycle
  const scrollProgressRef = useRef(0);

  const [entranceCompleted, setEntranceCompleted] = useState(false);
  const entranceTimerRef = useRef(null);

  useEffect(() => {
    // STAGE 1: Contrast mask starts hidden, Navbar is persistent at 1.0 opacity
    gsap.set(".bg-contrast-mask", { opacity: 0 });

    // THE VEIL GRADIENT FADE (Starts immediately, completes in 1.5s)
    gsap.to(".bg-contrast-mask", { opacity: 1, duration: 1.5, ease: "power1.inOut" });

    const handleScrollHandoff = () => {
      if (window.scrollY > 0) {
        triggerHandoff();
      }
    };

    const triggerHandoff = () => {
      if (entranceTimerRef.current) {
        clearTimeout(entranceTimerRef.current);
      }
      // Kill active entry animations to prevent clashes
      gsap.killTweensOf(".bg-contrast-mask");
      gsap.killTweensOf(".hero-headline-badge");
      gsap.killTweensOf(".hero-headline-title-text");
      gsap.killTweensOf(".hero-sub-point");
      gsap.killTweensOf(".hero-subhead-text");

      // Force snap instantly to 100% completed stable design state
      gsap.set(".bg-contrast-mask", { opacity: 1 });
      gsap.set(".hero-headline-badge", { x: 0, y: 0, opacity: 1, filter: "blur(0px)", visibility: "visible" });
      gsap.set(".hero-headline-title-text", { x: 0, y: 0, opacity: 1, visibility: "visible" });
      gsap.set(".hero-sub-point", { x: 0, y: 0, opacity: 1, visibility: "visible" });
      gsap.set(".hero-subhead-text", { x: 0, y: 0, opacity: 1, visibility: "visible" });
      
      setEntranceCompleted(true);
      window.removeEventListener("scroll", handleScrollHandoff);
    };

    // Delay ScrollTrigger initialization until all stages complete (4.0 seconds)
    entranceTimerRef.current = setTimeout(() => {
      triggerHandoff();
    }, 4000);

    window.addEventListener("scroll", handleScrollHandoff);

    return () => {
      if (entranceTimerRef.current) {
        clearTimeout(entranceTimerRef.current);
      }
      window.removeEventListener("scroll", handleScrollHandoff);
    };
  }, []);

  useEffect(() => {
    if (!entranceCompleted) return;

    // Check if reduced motion is preferred
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      scrollProgressRef.current = 0.75; // Locked at Stage 3
      return;
    }

    // Set up high-performance GSAP ScrollTrigger timeline for scrollytelling
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: "top top",
          end: "+=1200", // CINEMATIC: Reduced to prevent massive empty space
          pin: true,
          scrub: 0.5,
          onUpdate: (self) => {
            scrollProgressRef.current = Math.max(0, Math.min(1, self.progress));
          }
        }
      });

      tl.fromTo(".hero-headline-title", { x: 0, opacity: 1 }, { x: -140, opacity: 0, duration: 0.3 }, 0.08)
        .fromTo(".hero-subhead-text", { x: 0, opacity: 1 }, { x: 140, opacity: 0, duration: 0.3 }, 0.08)
        .to(".hero-headline-badge", { opacity: 0, duration: 0.2 }, 0.0)
        .to(".hero-footer", { opacity: 0, duration: 0.15 }, 0.0)
        .fromTo(".hero-bloom-text", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.3 }, 0.32)
        .to(".hero-bloom-text", { opacity: 0, y: -30, duration: 0.2 }, 0.62);
    });

    return () => ctx.revert();
  }, [entranceCompleted]);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden selection:bg-accent-glow/30 selection:text-white">
      
      {/* Sticky Auto-hiding Navbar */}
      <Navbar />
      
      {/* Global background glow */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[160px] opacity-[0.02]"
          style={{ background: "radial-gradient(circle, #ff8a3d 0%, transparent 80%)" }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] rounded-full blur-[160px] opacity-[0.02]"
          style={{ background: "radial-gradient(circle, #ffae5c 0%, transparent 80%)" }}
        />
      </div>

      {/* 
        ScrollCanvas background container.
        Rendered as FIXED in background (z-index 1) so it remains centered and visible
        behind the scrollable page sections.
      */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <ScrollCanvas scrollProgressRef={scrollProgressRef} />
      </div>

      {/* 
        100% Crystal-Clear Background Contrast Mask Overlay.
        Strictly dims dominant brightness and protects text readability using pure color opacity.
        z-index: 2 (above fixed canvas, underneath relative content).
      */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none bg-contrast-mask"
        style={{ 
          zIndex: 2, 
          background: "radial-gradient(circle at center, rgba(10, 10, 12, 0.40) 0%, rgba(10, 10, 12, 0.70) 100%)" 
        }}
      />

      {/* 
        Main content flow - relative z-10 sits on top of fixed background z-1 canvas.
        Fully transparent layout allows the background video frames to shine through cleanly.
      */}
      <div className="relative w-full bg-transparent" style={{ zIndex: 10 }}>
        {/* Hero Section Viewport (governs pinning) */}
        <section 
          ref={heroContainerRef} 
          id="home"
          className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-transparent scroll-mt-[80px]"
        >
          <HeroSection />
        </section>

        {/* Main content sections without opaque background classes */}
        <main className="relative w-full bg-transparent">
          <SolutionsBentoModal />

          {/* 3. Clients/Trust Marquee */}
          <div id="careers">
            <ClientsSplit />
          </div>

          {/* 5. Firm Process Timeline (Replaces Perspective) */}
          <ProcessTimeline />


          {/* 7. Insights & Careers */}
          <InsightsAndCareers />

          {/* 4. Certifications and compliance frameworks */}
          <CertificationsBento />

          {/* 2. Accolades & Awards */}
          <RecognitionBento />

          {/* 8. Contact & Map Section */}
          <Contact />

        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Interactive AI Chatbot Widget */}
      <AIChatbot />
    </div>
  );
}
