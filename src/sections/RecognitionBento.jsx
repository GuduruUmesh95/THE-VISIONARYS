import React from "react";

export default function RecognitionBento() {
  const accolades = [
    {
      id: "global100",
      source: "Global 100 - 2026",
      desc: "Congratulations! Your organisation has been recognised in the Global 100 - 2026 for Best Management Consulting Business of the Year 2026 in United Kingdom.",
      logo: (
        <img 
          src="/award-global100.png" 
          alt="Global 100 Winner 2026 Logo" 
          className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 object-contain"
        />
      )
    },
    {
      id: "matoday",
      source: "M&A Today Global Awards - 2026",
      desc: "Congratulations! Your organisation has been recognised in the M&A Today Global Awards - 2026 for Best Management Consulting Business of the Year 2026 in United Kingdom.",
      logo: (
        <img 
          src="/award-matoday.png" 
          alt="M&A Today Global Awards 2026 Logo" 
          className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6 object-contain"
        />
      )
    }
  ];

  return (
    <section id="insights" className="w-full py-24 md:py-36 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-3 font-bold text-[#FFB84D]">
            Prestigious Accolades
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#FDFBF7] opacity-100 tracking-tight leading-[1.1] text-shadow-premium">
            Global Recognition
          </h2>
          <div className="w-16 h-[1.5px] bg-white/20 mt-6" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {accolades.map((award) => (
            <div 
              key={award.id}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-[#0a0a0c]/60 backdrop-blur-sm transition-all duration-300 ease-out hover:border-[#FFB84D]/40 hover:shadow-[0_0_20px_rgba(255,184,77,0.08)] hover:scale-[1.02] p-8 md:p-12 flex flex-col items-center justify-between text-center min-h-[400px]"
            >
              {/* SVG Emblem Medallion */}
              <div className="transform group-hover:scale-[1.04] transition-transform duration-500">
                {award.logo}
              </div>

              {/* Award Details */}
              <div className="mt-4 flex-1 flex flex-col justify-center">
                <span className="text-[9px] font-mono tracking-[0.25em] px-4 py-1.5 rounded-sm mx-auto mb-6 uppercase border font-bold text-white/90 border-white/10 bg-white/[0.03] group-hover:text-[#FFB84D] group-hover:border-[#FFB84D]/30 transition-all duration-300">
                  {award.source}
                </span>
                
                <blockquote className="text-sm md:text-base font-sans font-normal text-zinc-400 group-hover:text-white leading-relaxed max-w-md mx-auto transition-colors duration-300">
                  "{award.desc}"
                </blockquote>
              </div>

              {/* Verification link */}
              <a 
                href="https://www.gpmg.uk/winners/global-100-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-xs font-mono font-bold tracking-wider text-white group-hover:text-[#FFB84D] transition-colors duration-300 hover:underline flex items-center gap-1.5 pointer-events-auto relative z-20"
              >
                <span>VERIFY ACCREDITATION</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
