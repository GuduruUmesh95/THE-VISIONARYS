import React, { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";

export default function HeroSection() {
  useEffect(() => {
    // STAGE 1: 0.0s - 1.0s: All elements are invisible
    gsap.set(".hero-headline-badge", { opacity: 0, filter: "blur(12px)" });
    gsap.set(".hero-headline-title", { x: "-100vw", opacity: 0 }); // completely outside the left edge
    gsap.set(".hero-subhead-text", { x: "100vw", opacity: 0 }); // completely outside the right edge

    // STAGE 2: Starts at 1.0s - QUICKENED BLOOM ACCENT REVEAL
    gsap.to(".hero-headline-badge", { 
      opacity: 1, 
      filter: "blur(0px)", 
      duration: 1.2, 
      ease: "power2.out",
      delay: 1.0 
    });

    // STAGE 3: Starts at 1.5s - ASYMMETRIC TEXT ENTRY SLIDE
    // Left Headline: slides in slowly over 2.0s
    gsap.to(".hero-headline-title", { 
      x: 0, 
      opacity: 1, 
      duration: 2.0, 
      ease: "power3.out",
      delay: 1.5 
    });

    // Right summary: slides in slowly from right over 3.0s
    gsap.to(".hero-subhead-text", { 
      x: 0, 
      opacity: 1, 
      duration: 3.0, 
      ease: "power3.out",
      delay: 1.5 
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none select-none z-50 p-6 md:p-12 overflow-hidden">

      {/* 2. Main Asymmetric Hero Content Stack (aligned to re-centered column) */}
      <div className="w-full flex-grow flex items-center justify-center">
        <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 w-full flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 mt-20 md:mt-24 lg:mt-0">
          
          {/* Headline (class: hero-headline) */}
          <div className="hero-headline w-full lg:w-[60%] text-left pointer-events-auto transition-transform duration-300">
            <span className="hero-headline-badge inline-block text-[10px] font-mono tracking-[0.3em] text-[#FFB84D] border border-[#FFB84D]/20 bg-[#FFB84D]/5 px-4 py-1.5 rounded-sm mb-6 uppercase font-bold">
              Consulting & Deep Tech Integration
            </span>
            <h1 className="hero-headline-title text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#FDFBF7] opacity-100 tracking-tight leading-[1.1] text-shadow-premium drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              Transforming <br className="hidden md:inline" />
              Businesses with <br />
              AI & Digital Innovation.
            </h1>
          </div>

          {/* Subhead (class: hero-subhead) */}
          <div className="hero-subhead w-full lg:w-[35%] flex justify-start lg:justify-end pointer-events-auto transition-transform duration-300">
            <div className="hero-subhead-text max-w-md lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-white/10 pl-6 lg:pl-0 lg:pr-6 py-2">
              <p className="text-zinc-400 font-normal text-sm md:text-base leading-relaxed font-sans text-shadow-premium">
                AI consulting, DevOps, Cybersecurity and Digital Transformation for Enterprises and Financial Institutions.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Stage 3 Cinematic Bloom Overlay (class: hero-bloom-text, initially opacity-0) */}
      <div className="hero-bloom-text absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-6 opacity-0">
        <div className="bg-transparent flex flex-col items-center max-w-4xl">
          <span 
            className="text-xs font-mono tracking-[0.4em] mb-4 uppercase font-bold text-[#FFB84D]"
          >
            Empowering Tomorrow
          </span>
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold text-[#FDFBF7] opacity-100 tracking-tight leading-snug text-shadow-premium drop-shadow-[0_4px_16px_rgba(0,0,0,0.98)]"
          >
            "Innovative Solutions for a Modern World"
          </h2>
          <div className="w-20 h-[1.5px] bg-white/20 my-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
          <p 
            className="text-sm md:text-lg max-w-2xl leading-relaxed text-zinc-400 font-normal text-shadow-premium drop-shadow-[0_2px_8px_rgba(0,0,0,0.98)]"
          >
            Bridging the gap between complex business challenges and cutting-edge technical execution.
          </p>
        </div>
      </div>

      {/* 4. Footer Overlay (class: hero-footer, full-width) */}
      <div className="w-full pb-4 md:pb-8">
        <footer className="hero-footer w-full px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto transition-opacity duration-300">
          {/* Status Line */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping" />
            <span className="text-[9px] font-mono tracking-[0.2em] text-zinc-400">
              SYSTEM STATE: <span className="text-white font-bold">ACTIVE</span> // ID: <span className="text-white/90">2026_VISION</span>
            </span>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-zinc-400">
              Scroll to Explore
            </span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-[0.5px] border-white/[0.06] bg-white/[0.02] text-white animate-bounce">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>

          {/* Location Stamp */}
          <div className="text-[9px] font-mono tracking-[0.2em] text-zinc-400">
            LONDON // UK — 2026
          </div>
        </footer>
      </div>

    </div>
  );
}
