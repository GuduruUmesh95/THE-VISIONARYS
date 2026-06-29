import React from "react";
import { motion } from "framer-motion";

export default function ClientsMarquee() {
  // Client logos list with explicit space filenames (resolved naturally by browser encoding)
  const clients = [
    { name: "UK Government", src: "/image 1.avif" },
    { name: "Cabinet Office", src: "/image 2.avif" },
    { name: "Civil Service", src: "/image 3.png" },
    { name: "Dept for Science Innovation & Technology (DSIT)", src: "/image 4.avif" },
    { name: "Government Commercial Function", src: "/image 5.avif" },
    { name: "NHS Health Research Authority", src: "/image 6.png" },
    { name: "Department of Health & Social Care", src: "/image 7.avif" },
    { name: "Welsh Government (Llywodraeth Cymru)", src: "/image 8.avif" },
    { name: "Dept for Energy Security & Net Zero (DESNZ)", src: "/image 9.avif" },
    { name: "UK Shared Business Services (UKSBS)", src: "/image 10.avif" },
    { name: "UK Research and Innovation (UKRI)", src: "/image 11.avif" },
    { name: "American Express", src: "/image 12.avif" },
    { name: "UK Space Agency", src: "/image 13.avif" },
    { name: "Riyad Bank", src: "/image 14.avif" },
  ];

  // Double the array for seamless infinite marquee loop
  const marqueeItems = [...clients, ...clients];

  return (
    <section id="clients" className="w-full border-t border-b border-white/5 py-20 bg-transparent relative z-10 overflow-hidden">
      {/* Side fades to mask the marquee entrance/exit */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0c]/85 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0c]/85 to-transparent pointer-events-none z-10" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mb-12">
        <span 
          className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-2"
          style={{ color: "#ffae5c", opacity: 1.0 }}
        >
          Trusted Partners
        </span>
        <h2 
          className="text-2xl md:text-3xl font-display font-extrabold tracking-tight leading-[1.2]"
          style={{ color: "#ffffff", opacity: 1.0 }}
        >
          Delivering Value for Leading Enterprises & Public Services
        </h2>
      </div>

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
            animation: marquee 40s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-track gap-8 md:gap-12 py-2">
          {marqueeItems.map((client, idx) => (
            <motion.div 
              key={`${client.name}-${idx}`} 
              className="flex flex-col items-center justify-center min-w-[160px] md:min-w-[220px] h-24 md:h-28 px-8 border border-white/10 bg-white/95 rounded-2xl cursor-default group shadow-sm"
              whileHover={{ 
                scale: 1.06, 
                y: -2,
                boxShadow: "0 8px 24px rgba(255, 174, 92, 0.22)",
                borderColor: "rgba(255, 174, 92, 0.45)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Logo container */}
              <div className="relative w-full h-12 md:h-16 flex items-center justify-center">
                <img 
                  src={client.src} 
                  alt={`${client.name} Logo`}
                  className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center truncate max-w-full font-bold">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
