import React from "react";

export default function ClientsSplit() {
  const clients = [
    { name: "NHS Health Research Authority", href: "https://www.hra.nhs.uk/", src: "/clients/client-1.jpeg" },
    { name: "Department of Health & Social Care", href: "https://www.gov.uk/government/organisations/department-of-health-and-social-care", src: "/clients/client-2.jpeg" },
    { name: "UK Government", href: "https://www.gov.uk/", src: "/clients/client-3.jpeg" },
    { name: "Cabinet Office", href: "https://www.gov.uk/government/organisations/cabinet-office", src: "/clients/client-4.jpeg?v=2" },
    { name: "Civil Service", href: "https://www.gov.uk/government/organisations/civil-service", src: "/clients/client-5.jpeg" },
    { name: "UK Research and Innovation", href: "https://www.ukri.org/", src: "/clients/client-6.jpeg" },
    { name: "American Express", href: "https://www.americanexpress.com/", src: "/clients/client-7.jpeg" },
    { name: "UK Space Agency", href: "https://www.gov.uk/government/organisations/uk-space-agency", src: "/clients/client-8.jpeg?v=3" },
    { name: "Riyad Bank", href: "https://www.riyadbank.com/", src: "/clients/client-9.jpeg" },
    { name: "Welsh Government", href: "https://gov.wales/", src: "/clients/client-10.jpeg" },
    { name: "UKSBS", href: "https://www.uksbs.org.uk/", src: "/clients/client-11.jpeg" },
    { name: "NHS England", href: "https://www.england.nhs.uk/", src: "/clients/client-12.jpeg" },
    { name: "HM Treasury", href: "https://www.gov.uk/government/organisations/hm-treasury", src: "/clients/client-13.jpeg" },
    { name: "Goldman Sachs", href: "https://www.goldmansachs.com/", src: "/clients/client-14.jpeg" }
  ];

  // Split into two groups of 7
  const row1 = clients.slice(0, 7);
  const row2 = clients.slice(7, 14);

  // Triple items for seamless loop at slow speed
  const track1 = [...row1, ...row1, ...row1];
  const track2 = [...row2, ...row2, ...row2];

  return (
    <section id="partnerships" className="w-full py-20 bg-[#0a0a0c] border-t border-b border-white/5 relative z-10 overflow-hidden scroll-mt-[80px]">
      
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
              <a 
                key={`${client.name}-r1-${idx}`} 
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center min-w-[200px] md:min-w-[240px] h-24 md:h-28 bg-[#0a0a0c]/60 backdrop-blur-sm border-[0.5px] border-white/[0.06] rounded-2xl cursor-pointer group overflow-hidden transition-all duration-300 hover:scale-[1.03] pointer-events-auto"
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
                  className="w-full h-full object-contain p-3 md:p-4 bg-white rounded-2xl relative z-10 transition-all duration-500 grayscale-0 opacity-100 filter-none group-hover:scale-[1.02]"
                />
              </a>
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
              <a 
                key={`${client.name}-r2-${idx}`} 
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center min-w-[200px] md:min-w-[240px] h-24 md:h-28 bg-[#0a0a0c]/60 backdrop-blur-sm border-[0.5px] border-white/[0.06] rounded-2xl cursor-pointer group overflow-hidden transition-all duration-300 hover:scale-[1.03] pointer-events-auto"
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
                  className="w-full h-full object-contain p-3 md:p-4 bg-white rounded-2xl relative z-10 transition-all duration-500 grayscale-0 opacity-100 filter-none group-hover:scale-[1.02]"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
