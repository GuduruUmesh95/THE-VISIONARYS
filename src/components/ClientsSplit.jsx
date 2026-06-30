import React from "react";

export default function ClientsSplit() {
  const clients = [
    { name: "Partner 1", src: "/clients/client-1.jpeg" },
    { name: "Partner 2", src: "/clients/client-2.jpeg" },
    { name: "Partner 3", src: "/clients/client-3.jpeg" },
    { name: "Partner 4", src: "/clients/client-4.jpeg?v=2" },
    { name: "Partner 5", src: "/clients/client-5.jpeg" },
    { name: "Partner 6", src: "/clients/client-6.jpeg" },
    { name: "Partner 7", src: "/clients/client-7.jpeg" },
    { name: "Partner 8", src: "/clients/client-8.jpeg?v=3" },
    { name: "Partner 9", src: "/clients/client-9.jpeg" },
    { name: "Partner 10", src: "/clients/client-10.jpeg" },
    { name: "Partner 11", src: "/clients/client-11.jpeg" },
    { name: "Partner 12", src: "/clients/client-12.jpeg" },
    { name: "Partner 13", src: "/clients/client-13.jpeg" },
    { name: "Partner 14", src: "/clients/client-14.jpeg" }
  ];

  // Split into two groups of 7
  const row1 = clients.slice(0, 7);
  const row2 = clients.slice(7, 14);

  // Triple items for seamless loop at slow speed
  const track1 = [...row1, ...row1, ...row1];
  const track2 = [...row2, ...row2, ...row2];

  return (
    <section id="clients-split" className="w-full py-20 bg-transparent border-t-[0.5px] border-white/[0.06] relative z-10 overflow-hidden">
      
      {/* Styles for opposite scrolling and hover pause */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translate3d(-33.333%, 0, 0); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-33.333%); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-container-1 {
          display: flex;
          width: max-content;
          animation: scrollLeft 28s linear infinite;
        }
        .marquee-container-2 {
          display: flex;
          width: max-content;
          animation: scrollRight 28s linear infinite;
        }
        .marquee-row-hover:hover .marquee-container-1,
        .marquee-row-hover:hover .marquee-container-2 {
          animation-play-state: paused;
        }
      ` }} />

      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 mb-16 text-left">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-3 font-bold text-[#FFB84D]">
          Trusted Partnerships
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-tight">
          Empowering Market Leaders
        </h2>
        <p className="text-[#8e96a8] font-sans text-sm md:text-base max-w-2xl mt-4 leading-relaxed">
          We collaborate with global enterprises, financial institutions, and public sector organizations to navigate complex digital transformations, accelerate DevOps pipelines, and deploy resilient AI infrastructure.
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full">
        {/* Row 1: Leftward Marquee */}
        <div className="marquee-row-hover overflow-hidden w-full flex relative py-2">
          {/* Subtle fade edges mask */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0c] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0c] to-transparent z-20 pointer-events-none" />
          
          <div className="marquee-container-1 gap-6 md:gap-8 pr-6">
            {track1.map((client, idx) => (
              <div 
                key={`${client.name}-r1-${idx}`} 
                className="relative flex items-center justify-center min-w-[200px] md:min-w-[240px] h-24 md:h-28 bg-[#0a0a0c]/60 backdrop-blur-sm border-[0.5px] border-white/[0.06] rounded-2xl cursor-default group overflow-hidden transition-all duration-300 hover:scale-[1.05]"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" 
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(255, 184, 77, 0.08) 0%, transparent 70%)`
                  }}
                />
                <img 
                  src={client.src} 
                  alt={`${client.name} Logo`}
                  className="w-full h-full object-contain p-3 md:p-4 bg-white rounded-2xl relative z-10 transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Marquee */}
        <div className="marquee-row-hover overflow-hidden w-full flex relative py-2">
          {/* Subtle fade edges mask */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0c] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0c] to-transparent z-20 pointer-events-none" />

          <div className="marquee-container-2 gap-6 md:gap-8 pr-6">
            {track2.map((client, idx) => (
              <div 
                key={`${client.name}-r2-${idx}`} 
                className="relative flex items-center justify-center min-w-[200px] md:min-w-[240px] h-24 md:h-28 bg-[#0a0a0c]/60 backdrop-blur-sm border-[0.5px] border-white/[0.06] rounded-2xl cursor-default group overflow-hidden transition-all duration-300 hover:scale-[1.05]"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" 
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(255, 184, 77, 0.08) 0%, transparent 70%)`
                  }}
                />
                <img 
                  src={client.src} 
                  alt={`${client.name} Logo`}
                  className="w-full h-full object-contain p-3 md:p-4 bg-white rounded-2xl relative z-10 transition-transform duration-500 group-hover:scale-102"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
