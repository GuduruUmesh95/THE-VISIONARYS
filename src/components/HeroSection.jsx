import React, { useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { gsap } from "gsap";

export default function HeroSection() {
  useEffect(() => {
    // STAGE 1: Initial invisible states with specific directions
    gsap.set(".hero-headline-badge", { y: -20, opacity: 0, filter: "blur(6px)" }); // badge from top
    gsap.set(".hero-headline-title-text", { x: -40, opacity: 0 }); // title reveal from left
    gsap.set(".hero-sub-point", { y: 20, opacity: 0 }); // 3 sub points from bottom
    gsap.set(".hero-subhead-text", { x: 40, opacity: 0 }); // description from right

    // STAGE 2: Starts at 0.8s
    // Text 1 (Badge): fades in, slides down from top, and clears blur smoothly
    gsap.to(".hero-headline-badge", { 
      y: 0,
      opacity: 1, 
      filter: "blur(0px)", 
      duration: 1.2, 
      ease: "power2.out",
      delay: 0.8 
    });

    // STAGE 3: Starts at 1.3s
    // Text 2 (Title): slides in from left to right (revealing effect)
    gsap.to(".hero-headline-title-text", { 
      x: 0, 
      opacity: 1, 
      duration: 1.4, 
      ease: "power3.out",
      delay: 1.3 
    });

    // STAGE 4: Starts at 1.8s
    // Text 3 (Sub points): slide up from bottom staggered one after another
    gsap.to(".hero-sub-point", { 
      y: 0, 
      opacity: 1, 
      duration: 0.8, 
      stagger: 0.25,
      ease: "power2.out",
      delay: 1.8 
    });

    // STAGE 5: Starts at 2.2s
    // Text 4 (Description): slides in from right to left
    gsap.to(".hero-subhead-text", { 
      x: 0, 
      opacity: 1, 
      duration: 1.4, 
      ease: "power3.out",
      delay: 2.2 
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none select-none z-50 p-6 md:p-12 overflow-hidden">

      {/* 2. Main Asymmetric Hero Content Stack (aligned to re-centered column) */}
      <div className="w-full flex-grow flex items-center justify-center">
        <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 mt-20 lg:mt-0">
          
          {/* Headline (class: hero-headline) */}
          <div className="hero-headline w-full lg:w-[65%] text-left pointer-events-auto transition-transform duration-300">
            <span className="hero-headline-badge inline-block text-[9px] md:text-[10px] font-display tracking-[0.25em] text-[#ffae5c] border border-[#ffae5c]/20 bg-[#ffae5c]/5 px-5 py-1.5 rounded-sm mb-6 uppercase font-semibold text-shadow-premium">
              Consulting & Deep Tech Integration
            </span>
            
            <div className="hero-headline-title space-y-4">
              <h1 className="hero-headline-title-text text-2xl md:text-3xl lg:text-4xl font-display font-extrabold tracking-tight leading-[1.1] text-white text-shadow-premium drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Transforming <br className="md:hidden" />
                <span className="inline-block bg-gradient-to-b from-[#FFE082] via-[#FFB300] to-[#FF6D00] bg-clip-text text-transparent" style={{ textShadow: "none" }}>Business</span> with
              </h1>
              <div className="flex flex-col gap-3 text-xs md:text-sm font-mono mt-5 tracking-[0.12em] text-white/90">
                {/* Row 1: AI Consulting and Digital Innovation */}
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <div className="hero-sub-point flex items-center gap-2">
                    <span className="inline-block bg-gradient-to-b from-[#FFE082] via-[#FFB300] to-[#FF6D00] bg-clip-text text-transparent font-bold" style={{ textShadow: "none" }}>✦</span>
                    <span>AI CONSULTING</span>
                  </div>
                  <div className="hero-sub-point flex items-center gap-2">
                    <span className="inline-block bg-gradient-to-b from-[#FFE082] via-[#FFB300] to-[#FF6D00] bg-clip-text text-transparent font-bold" style={{ textShadow: "none" }}>✦</span>
                    <span>DIGITAL INNOVATION</span>
                  </div>
                </div>
                {/* Row 2: Deep Tech Integration */}
                <div className="hero-sub-point flex items-center gap-2">
                  <span className="inline-block bg-gradient-to-b from-[#FFE082] via-[#FFB300] to-[#FF6D00] bg-clip-text text-transparent font-bold" style={{ textShadow: "none" }}>✦</span>
                  <span>DEEP TECH INTEGRATION</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subhead (class: hero-subhead) */}
          <div className="hero-subhead w-full lg:w-[35%] flex justify-start lg:justify-end pointer-events-auto transition-transform duration-300">
            <div className="hero-subhead-text max-w-md lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-white/10 pl-6 lg:pl-0 lg:pr-6 py-2">
              <p className="text-secondary font-normal text-sm md:text-base leading-loose font-sans text-shadow-premium">
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
            className="text-sm md:text-lg max-w-2xl leading-relaxed text-[#8e96a8] font-normal text-shadow-premium drop-shadow-[0_2px_8px_rgba(0,0,0,0.98)]"
          >
            Bridging the gap between complex business challenges and cutting-edge technical execution.
          </p>
        </div>
      </div>

      {/* 4. Footer Overlay (class: hero-footer, full-width) */}
      <div className="w-full pb-0 mb-[-12px]">
        <footer className="hero-footer w-full flex justify-center pointer-events-auto transition-opacity duration-300">
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-[#8e96a8]">
              Scroll to Explore
            </span>
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-[0.5px] border-white/[0.06] bg-white/[0.02] text-white animate-bounce">
              <ArrowDown className="w-4 h-4" />
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}
