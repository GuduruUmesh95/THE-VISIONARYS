import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RecognitionBento() {
  const containerRef = useRef(null);

  const accolades = [
    {
      id: "global100",
      source: "Global 100 - 2026",
      desc: "Best Management Consulting Business of the Year 2026 in United Kingdom.",
      href: "https://www.gpmg.uk/winners/global-100-2026",
      logo: "/award-global100.png"
    },
    {
      id: "matoday",
      source: "M&A Today Global Awards - 2026",
      desc: "Best Management Consulting Business of the Year 2026 in United Kingdom.",
      href: "https://www.mna-today.co.uk/winners/global-awards-2026",
      logo: "/award-matoday.png"
    }
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".award-row", 
        { opacity: 0, x: 40 },
        {
          opacity: 1, 
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".awards-list",
            start: "top 80%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="recognition" 
      className="w-full py-24 md:py-36 bg-[#0a0a0c] border-t border-b border-[#FFB84D]/30 relative z-10 scroll-mt-[80px]"
    >
      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Massive Medallion / Typography */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center relative">
            
            {/* Background Glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] rounded-[100%] pointer-events-none blur-[100px] opacity-[0.08]"
              style={{ background: "radial-gradient(ellipse, #FFB84D 0%, transparent 70%)" }}
            />
            
            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-6 font-bold text-[#FFB84D]">
                Prestigious Accolades
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tight leading-tight mb-8">
                Recognized<br />Excellence
              </h2>
              <div className="w-16 h-[2px] bg-[#FFB84D]/50 mb-8" />
              <p className="text-zinc-400 font-sans text-sm md:text-base leading-relaxed max-w-sm">
                Our relentless pursuit of perfection and strategic innovation has been globally recognized by leading industry authorities.
              </p>
            </div>
          </div>

          {/* Right Column: Stacked List */}
          <div className="w-full lg:w-7/12 awards-list flex flex-col gap-6">
            {accolades.map((award) => (
              <a 
                key={award.id}
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                className="award-row group relative flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#FFB84D]/50 transition-all duration-500 hover:bg-[#0a0a0c]/80 hover:shadow-[0_0_40px_rgba(255,184,77,0.15)] overflow-hidden"
              >
                
                {/* Hover gradient highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFB84D] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                
                {/* Logo */}
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 relative z-10 group-hover:border-[#FFB84D]/30 transition-colors duration-500">
                  <img 
                    src={award.logo} 
                    alt={award.source} 
                    className="w-full h-full object-contain filter group-hover:drop-shadow-[0_0_10px_rgba(255,184,77,0.5)] transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-sans text-white group-hover:text-[#FFB84D] transition-colors duration-300">
                      {award.source}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300" />
                  </div>
                  <p className="text-zinc-400 font-sans text-sm leading-relaxed mb-4">
                    {award.desc}
                  </p>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/50 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                    Verify Accreditation <span className="w-4 h-[1px] bg-white/30 group-hover:w-8 group-hover:bg-[#FFB84D] transition-all duration-500"></span>
                  </span>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

