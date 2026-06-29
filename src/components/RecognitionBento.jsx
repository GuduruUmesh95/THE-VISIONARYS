import React from "react";

export default function RecognitionBento() {
  const accolades = [
    {
      id: "global100",
      source: "Global 100 - 2026",
      desc: "Congratulations! Your organisation has been recognised in the Global 100 - 2026 for Best Management Consulting Business of the Year 2026 in United Kingdom.",
      logo: (
        <svg className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="goldGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF2B2" />
              <stop offset="50%" stopColor="#ffae5c" />
              <stop offset="100%" stopColor="#ff8a3d" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="54" fill="none" stroke="url(#goldGrad)" strokeWidth="3" />
          <circle cx="60" cy="60" r="48" fill="none" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="60" cy="60" r="44" fill="#0e0f14" />
          <circle cx="60" cy="60" r="40" fill="none" stroke="url(#goldGrad)" strokeWidth="1" />
          <path d="M 45 40 Q 60 48 75 40" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
          <text x="60" y="55" fill="url(#goldGrad)" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em">GLOBAL</text>
          <text x="60" y="66" fill="#ffffff" fontSize="14" fontWeight="black" textAnchor="middle">100</text>
          <text x="60" y="76" fill="url(#goldGrad)" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="0.15em">WINNER</text>
          <text x="60" y="85" fill="#8e96a8" fontSize="6" textAnchor="middle">2026</text>
        </svg>
      )
    },
    {
      id: "matoday",
      source: "M&A Today - Global Awards - 2026",
      desc: "Congratulations! Your organisation has been recognised in the M&A Today - Global Awards - 2026 for Best Management Consulting Business of the Year 2026 in United Kingdom.",
      logo: (
        <svg className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-6" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="amberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffae5c" />
              <stop offset="100%" stopColor="#ff8a3d" />
            </linearGradient>
          </defs>
          <rect x="18" y="18" width="84" height="84" rx="4" fill="none" stroke="url(#amberGrad)" strokeWidth="3" />
          <rect x="24" y="24" width="72" height="72" rx="2" fill="#0e0f14" />
          <rect x="28" y="28" width="64" height="64" rx="2" fill="none" stroke="url(#amberGrad)" strokeWidth="1" strokeDasharray="2 2" />
          <text x="60" y="46" fill="url(#amberGrad)" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="0.05em">M&A TODAY</text>
          <text x="60" y="55" fill="#8e96a8" fontSize="5" textAnchor="middle">GLOBAL AWARDS</text>
          <text x="60" y="70" fill="#ffffff" fontSize="13" fontWeight="black" textAnchor="middle">2026</text>
          <text x="60" y="82" fill="url(#amberGrad)" fontSize="8" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em">WINNER</text>
        </svg>
      )
    }
  ];

  return (
    <section id="insights" className="w-full py-24 md:py-36 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-[10px] font-mono tracking-[0.3em] text-accent-glow uppercase block mb-3">
            Prestigious Accolades
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.1]">
            Global Recognition
          </h2>
          <div className="w-16 h-[1.5px] bg-accent-glow/50 mt-6" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {accolades.map((award) => (
            <div 
              key={award.id}
              className="group relative rounded-3xl p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-1"
            >
              {/* Border glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-accent-glow/20 via-transparent to-accent-glow/20" />
              <div className="absolute inset-0 bg-white/[0.06] group-hover:opacity-0 transition-opacity duration-500 rounded-3xl" />

              {/* Card Body */}
              <div className="relative h-full w-full bg-[#0d0e12]/98 backdrop-blur-xl rounded-[23px] p-8 md:p-12 flex flex-col items-center justify-between text-center min-h-[400px]">
                
                {/* SVG Emblem Medallion */}
                <div className="transform group-hover:scale-[1.04] transition-transform duration-500">
                  {award.logo}
                </div>

                {/* Award Details */}
                <div className="mt-4 flex-1 flex flex-col justify-center">
                  <span className="text-[9px] font-mono tracking-[0.25em] text-accent-light bg-accent-glow/5 border border-accent-glow/20 px-4 py-1.5 rounded-sm mx-auto mb-6 uppercase">
                    {award.source}
                  </span>
                  
                  <blockquote className="text-sm md:text-base font-sans font-medium text-secondary group-hover:text-white leading-relaxed max-w-md mx-auto transition-colors duration-300">
                    "{award.desc}"
                  </blockquote>
                </div>

                {/* Ambient glow decoration */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-glow/15 to-transparent" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
