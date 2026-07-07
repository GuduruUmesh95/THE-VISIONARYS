import React from "react";

export default function ClientsSplit() {
  const clients = [
    { name: "NHS Health Research Authority", href: "https://www.hra.nhs.uk/", src: "/assets/clients/client-1.jpeg" },
    { name: "Department of Health & Social Care", href: "https://www.gov.uk/government/organisations/department-of-health-and-social-care", src: "/assets/clients/client-2.jpeg" },
    { name: "UK Government", href: "https://www.gov.uk/", src: "/assets/clients/client-3.jpeg" },
    { name: "Cabinet Office", href: "https://www.gov.uk/government/organisations/cabinet-office", src: "/assets/clients/client-4.jpeg?v=2" },
    { name: "Civil Service", href: "https://www.gov.uk/government/organisations/civil-service", src: "/assets/clients/client-5.jpeg" },
    { name: "UK Research and Innovation", href: "https://www.ukri.org/", src: "/assets/clients/client-6.jpeg" },
    { name: "American Express", href: "https://www.americanexpress.com/", src: "/assets/clients/client-7.jpeg" },
    { name: "UK Space Agency", href: "https://www.gov.uk/government/organisations/uk-space-agency", src: "/assets/clients/client-8.jpeg?v=3" },
    { name: "Riyad Bank", href: "https://www.riyadbank.com/", src: "/assets/clients/client-9.jpeg" },
    { name: "Welsh Government", href: "https://gov.wales/", src: "/assets/clients/client-10.jpeg" },
    { name: "UKSBS", href: "https://www.uksbs.org.uk/", src: "/assets/clients/client-11.jpeg" },
    { name: "NHS England", href: "https://www.england.nhs.uk/", src: "/assets/clients/client-12.jpeg" },
    { name: "HM Treasury", href: "https://www.gov.uk/government/organisations/hm-treasury", src: "/assets/clients/client-13.jpeg" },
    { name: "Goldman Sachs", href: "https://www.goldmansachs.com/", src: "/assets/clients/client-14.jpeg" }
  ];

  // Split into two groups of 7
  const row1 = clients.slice(0, 7);
  const row2 = clients.slice(7, 14);

  // Triple items for seamless loop at slow speed
  const track1 = [...row1, ...row1, ...row1];
  const track2 = [...row2, ...row2, ...row2];

  return (
    <section id="partnerships" className="w-full py-12 md:py-16 bg-[#0a0a0c] border-t border-b border-[#FFB84D]/30 relative z-10 overflow-hidden scroll-mt-[80px]">
      
      {/* Massive subtle radial glow behind the section */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] rounded-[100%] pointer-events-none blur-[150px] opacity-[0.06]"
        style={{ background: "radial-gradient(ellipse, #FFB84D 0%, transparent 70%)" }}
      />
      
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
          animation: scrollLeft 35s linear infinite;
        }
        .marquee-container-2 {
          display: flex;
          width: max-content;
          animation: scrollRight 35s linear infinite;
        }
        .marquee-row-hover:hover .marquee-container-1,
        .marquee-row-hover:hover .marquee-container-2 {
          animation-play-state: paused;
        }
      ` }} />

      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 mb-10 text-center relative z-10">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-4 font-bold text-[#FFB84D]">
          Trusted Partnerships
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tight leading-tight">
          Empowering Market Leaders
        </h2>
      </div>

      <div className="flex flex-col gap-6 w-full relative z-10">
        
        {/* Row 1: Leftward Marquee */}
        <div className="marquee-row-hover overflow-hidden w-full flex relative py-4">
          {/* Heavy gradient masks to blend into the black background */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-20 pointer-events-none" />
          
          <div className="marquee-container-1 gap-6 md:gap-8 pr-6">
            {track1.map((client, idx) => (
              <a 
                key={`${client.name}-r1-${idx}`} 
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center min-w-[200px] md:min-w-[240px] h-24 md:h-28 bg-white p-2 md:p-3 rounded-2xl cursor-pointer group transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,184,77,0.4)] hover:border-[#FFB84D] border-2 border-transparent pointer-events-auto"
              >
                <img 
                  src={client.src} 
                  alt={`${client.name} Logo`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Marquee */}
        <div className="marquee-row-hover overflow-hidden w-full flex relative py-4">
          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-20 pointer-events-none" />

          <div className="marquee-container-2 gap-6 md:gap-8 pr-6">
            {track2.map((client, idx) => (
              <a 
                key={`${client.name}-r2-${idx}`} 
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center min-w-[200px] md:min-w-[240px] h-24 md:h-28 bg-white p-2 md:p-3 rounded-2xl cursor-pointer group transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(255,184,77,0.4)] hover:border-[#FFB84D] border-2 border-transparent pointer-events-auto"
              >
                <img 
                  src={client.src} 
                  alt={`${client.name} Logo`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


