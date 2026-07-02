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
      
      {/* Ambient Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-40 mix-blend-screen" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '4vw 4vw',
        maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'
      }} />

      {/* 2. Main Asymmetric Hero Content Stack */}
      <div className="w-full flex-grow flex items-center justify-center">
        <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12 mt-20 lg:mt-0">
          
          {/* Headline (class: hero-headline) */}
          <div className="hero-headline w-full lg:w-[65%] text-left pointer-events-auto transition-transform duration-300">
            <span className="hero-headline-badge inline-block text-[10px] md:text-[11px] font-sans tracking-[0.3em] text-[#FFE082] border border-[#FFE082]/30 bg-[#FFE082]/10 backdrop-blur-md px-6 py-2 rounded-full mb-8 uppercase font-semibold shadow-[0_0_20px_rgba(255,224,130,0.15)]">
              Consulting & Deep Tech Integration
            </span>
            
            <div className="hero-headline-title space-y-6">
              <h1 className="hero-headline-title-text text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40  drop-shadow-[0_8px_24px_rgba(0,0,0,0.95)]">
                Transforming <br className="md:hidden" />
                <span className="inline-block bg-gradient-to-b from-[#FFE082] via-[#FFB300] to-[#FF6D00] bg-clip-text text-transparent pb-2" style={{ textShadow: "none" }}>Business</span>
              </h1>
              <div className="flex flex-col gap-4 text-xs md:text-sm font-mono mt-6 tracking-[0.15em] text-white/80">
                {/* Row 1: AI Consulting and Digital Innovation */}
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <div className="hero-sub-point flex items-center gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#FFE082] to-[#FF6D00] shadow-[0_0_8px_#FFE082]" />
                    <span className="font-semibold text-white/90">AI CONSULTING</span>
                  </div>
                  <div className="hero-sub-point flex items-center gap-3">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#FFE082] to-[#FF6D00] shadow-[0_0_8px_#FFE082]" />
                    <span className="font-semibold text-white/90">DIGITAL INNOVATION</span>
                  </div>
                </div>
                {/* Row 2: Deep Tech Integration */}
                <div className="hero-sub-point flex items-center gap-3">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-b from-[#FFE082] to-[#FF6D00] shadow-[0_0_8px_#FFE082]" />
                  <span className="font-semibold text-white/90">DEEP TECH INTEGRATION</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subhead (class: hero-subhead) */}
          <div className="hero-subhead w-full lg:w-[35%] flex justify-start lg:justify-end pointer-events-auto transition-transform duration-300">
            <div className="hero-subhead-text max-w-md lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-white/10 pl-6 lg:pl-0 lg:pr-6 py-3 relative">
              <div className="absolute top-0 right-[-2px] w-[2px] h-1/3 bg-gradient-to-b from-[#FFE082]/80 to-transparent hidden lg:block" />
              <div className="absolute top-0 left-[-2px] w-[2px] h-1/3 bg-gradient-to-b from-[#FFE082]/80 to-transparent lg:hidden block" />
              <p className="text-white/70 font-light text-sm md:text-base leading-loose font-sans text-shadow-premium">
                AI consulting, DevOps, Cybersecurity and Digital Transformation for Enterprises and Financial Institutions.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Stage 3 Cinematic Bloom Overlay */}
      <div className="hero-bloom-text absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-6 opacity-0">
        <div className="bg-transparent flex flex-col items-center max-w-4xl relative">
          <div className="absolute inset-0 bg-[#FFB300]/5 blur-3xl rounded-full -z-10" />
          <span className="text-xs font-mono tracking-[0.4em] mb-6 uppercase font-bold text-[#FFE082] drop-shadow-[0_0_10px_rgba(255,224,130,0.5)]">
            Empowering Tomorrow
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tight leading-tight  drop-shadow-[0_12px_24px_rgba(0,0,0,0.98)]">
            Innovative Solutions <br className="hidden md:block"/> for a Modern World
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#FFE082]/50 to-transparent my-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
          <p className="text-base md:text-xl max-w-2xl leading-relaxed text-white/70 font-light text-shadow-premium drop-shadow-[0_4px_12px_rgba(0,0,0,0.98)]">
            Bridging the gap between complex business challenges and cutting-edge technical execution.
          </p>
        </div>
      </div>

      {/* 4. Footer Overlay */}
      <div className="w-full pb-0 mb-[-12px]">
        <footer className="hero-footer w-full flex justify-center pointer-events-auto transition-opacity duration-300">
          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 font-medium">
              Scroll to Explore
            </span>
            <div className="w-[28px] h-[44px] rounded-full border border-white/20 flex justify-center p-[6px] bg-white/[0.03] backdrop-blur-md relative overflow-hidden group hover:border-[#FFE082]/40 transition-colors duration-500">
              <div className="w-1 h-2.5 bg-gradient-to-b from-[#FFE082] to-[#FF6D00] rounded-full animate-bounce shadow-[0_0_8px_rgba(255,224,130,0.6)]" />
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}


