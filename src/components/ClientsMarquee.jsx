import React from "react";
import { motion } from "framer-motion";

export default function ClientsMarquee() {
  // Client logos list with explicit space filenames (resolved naturally by browser encoding)
  const clients = [
    { name: "UK Government", src: "/clients/client-charcoal-008.png" },
    { name: "Cabinet Office", src: "/clients/client-charcoal-007.png" },
    { name: "Civil Service", src: "/clients/client-charcoal-001.png" },
    { name: "Department for Science, Innovation & Technology (DSIT)", src: "/clients/client-charcoal-006.png" },
    { name: "NHS Health Research Authority", src: "/clients/client-charcoal-003.png" },
    { name: "Department of Health & Social Care", src: "/clients/client-charcoal-010.png" },
    { name: "Department for Energy Security & Net Zero (DESNZ)", src: "/clients/client-charcoal-005.png" },
    { name: "UK Shared Business Services (UKSBS)", src: "/clients/client-charcoal-009.png" },
    { name: "American Express", src: "/clients/client-charcoal-002.png" },
    { name: "UK Space Agency", src: "/clients/client-charcoal-004.png" }
  ];

  // Double the array for seamless infinite marquee loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section id="clients" className="w-full border-t-[0.5px] border-b-[0.5px] border-white/[0.06] py-20 bg-transparent relative z-10 overflow-hidden">
      
      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 mb-12">
        <span 
          className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-2 font-bold text-[#FFB84D]"
        >
          Trusted Partners
        </span>
        <h2 
          className="text-2xl md:text-3xl font-sans font-bold tracking-tight leading-[1.2] text-[#FDFBF7] text-shadow-premium"
        >
          Delivering Value for Leading Enterprises & Public Services
        </h2>
      </div>

      {/* Edge-to-edge scroll viewport */}
      <div className="w-full relative overflow-hidden">
        {/* Side fades to mask the marquee entrance/exit */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0c] to-transparent pointer-events-none z-20" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0c] to-transparent pointer-events-none z-20" />

        {/* Infinite scrolling track wrapper */}
        <div className="relative w-full overflow-hidden flex select-none">
          
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 35s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="marquee-track gap-6 md:gap-8 py-2">
            {marqueeItems.map((client, idx) => (
              <motion.div 
                key={`${client.name}-${idx}`} 
                className="relative flex items-center justify-center min-w-[220px] md:min-w-[260px] h-28 md:h-32 bg-[#0a0a0c]/60 backdrop-blur-sm border-[0.5px] border-white/[0.06] rounded-2xl cursor-default group overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 8px 24px rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* 1. Subtle 1px Border Overlay on Hover matching Solutions Bento */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 40%, rgba(255,255,255,0.05) 100%)`
                  }}
                />

                {/* Content Container */}
                <img 
                  src={client.src} 
                  alt={`${client.name} Logo`}
                  className="w-full h-full object-cover rounded-2xl relative z-10"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
