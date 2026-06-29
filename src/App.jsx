import React, { useEffect, useRef } from "react";
import ScrollCanvas from "./components/ScrollCanvas";
import HeroSection from "./components/HeroSection";
import ClientsMarquee from "./components/ClientsMarquee";
import SolutionsBento from "./components/SolutionsBento";
import RecognitionBento from "./components/RecognitionBento";
import Perspective from "./components/Perspective";
import CertificationsBento from "./components/CertificationsBento";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquare } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroContainerRef = useRef(null);
  // Shared scroll progress reference bypassing React rendering cycle
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    // Check if reduced motion is preferred
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      scrollProgressRef.current = 0.75; // Locked at Stage 3
      return;
    }

    // Set up high-performance GSAP ScrollTrigger timeline for scrollytelling
    // Pin for a longer distance (+=2400px) to let all stages of the scroll story evolve cleanly
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroContainerRef.current,
          start: "top top",
          end: "+=2400", // CINEMATIC: Expanded scroll distance to accommodate the story
          pin: true,
          scrub: 0.5,   // Cushion delay for smooth scroll response
          onUpdate: (self) => {
            // Update mutable ref value directly (runs at 60/120fps with zero React overhead)
            scrollProgressRef.current = Math.max(0, Math.min(1, self.progress));
          }
        }
      });

      // Snappy and choreographed DOM overlay transitions
      tl.to(".hero-nav", { y: -60, opacity: 0, duration: 0.2 }, 0.05)
        .to(".hero-headline", { x: -140, opacity: 0, duration: 0.3 }, 0.08)
        .to(".hero-subhead", { x: 140, opacity: 0, duration: 0.3 }, 0.08)
        .to(".hero-footer", { opacity: 0, duration: 0.15 }, 0.0)
        
        // Stage 3 volumetric core text reveal (fades in at 0.32, fades out early by 0.75)
        .fromTo(".hero-bloom-text", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.3 }, 0.32)
        .to(".hero-bloom-text", { opacity: 0, y: -30, duration: 0.2 }, 0.62);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden selection:bg-accent-glow/30 selection:text-white">
      
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
        Main content flow - relative z-10 sits on top of fixed background z-1 canvas.
        Fully transparent layout allows the background video frames to shine through cleanly.
      */}
      <div className="relative w-full bg-transparent" style={{ zIndex: 10 }}>
        {/* Hero Section Viewport (governs pinning) */}
        <section 
          ref={heroContainerRef} 
          id="home"
          className="relative w-full h-screen flex flex-col justify-between overflow-hidden bg-transparent"
        >
          <HeroSection />
        </section>

        {/* Main content sections without opaque background classes */}
        <main className="relative w-full bg-transparent">
          
          {/* Clients/Trust Marquee */}
          <ClientsMarquee />

          {/* Capabilities Bento Grid */}
          <SolutionsBento />

          {/* Accolades & Awards */}
          <RecognitionBento />

          {/* Firm Perspective / About descriptions */}
          <Perspective />

          {/* Certifications and compliance frameworks */}
          <CertificationsBento />

        </main>

        {/* Footer */}
        <Footer />
      </div>

      {/* Floating WhatsApp Chat Widget (Correct Number: +1 646 466 3838) */}
      <a
        href="https://wa.me/16464663838"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white stroke-none" />
      </a>
    </div>
  );
}
