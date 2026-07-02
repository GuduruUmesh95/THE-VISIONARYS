import React from "react";

export default function CertificationsBento() {
  const certifications = [
    {
      id: "gdpr",
      name: "GDPR Compliant",
      gridClass: "md:col-span-2 lg:col-span-2",
      href: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/",
      badge: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          <img
            src="/certificate%201.avif"
            alt="GDPR Compliant Badge"
            className="w-full h-full object-contain filter brightness-[1.1]"
          />
        </div>
      ),
      description: "Adhering strictly to UK and EU General Data Protection Regulation requirements to protect user privacy and enterprise transaction records."
    },
    {
      id: "cyber",
      name: "Cyber Essentials Certified",
      gridClass: "md:col-span-1 lg:col-span-1",
      href: "https://www.ncsc.gov.uk/cyberessentials/overview",
      badge: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          <img
            src="/certificate%202.avif"
            alt="Cyber Essentials Certified Badge"
            className="w-full h-full object-contain"
          />
        </div>
      ),
      description: "UK Government-backed scheme certification confirming protection against standard cyber threats."
    },
    {
      id: "cyberplus",
      name: "Cyber Essentials Plus Certified",
      gridClass: "md:col-span-1 lg:col-span-1",
      href: "https://www.ncsc.gov.uk/cyberessentials/overview",
      badge: (
        <div className="relative w-20 h-20 flex items-center justify-center">
          <img
            src="/certificate%203.avif"
            alt="Cyber Essentials Plus Certified Badge"
            className="w-full h-full object-contain"
          />
        </div>
      ),
      description: "Rigorously audited by independent practitioners to ensure high security compliance."
    },
    {
      id: "ico",
      name: "ICO Registered",
      gridClass: "md:col-span-1 lg:col-span-1",
      href: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/",
      badge: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="24" width="84" height="52" rx="6" fill="#005B82" stroke="#ffffff" strokeWidth="1" />
          <text x="50" y="54" fill="#ffffff" fontSize="22" fontWeight="black" fontStyle="italic" textAnchor="middle">ico.</text>
          <text x="50" y="68" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle" letterSpacing="0.1em">REGISTERED</text>
        </svg>
      ),
      description: "Registered with the Information Commissioner's Office for full data handling compliance."
    },
    {
      id: "mrs",
      name: "MRS Member 2026",
      gridClass: "md:col-span-1 lg:col-span-1",
      href: "https://www.mrs.org.uk/",
      badge: (
        <svg className="w-20 h-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="44" fill="#121214" stroke="#ffffff" strokeWidth="2" />
          <circle cx="50" cy="50" r="38" fill="none" stroke="#ffae5c" strokeWidth="1" strokeDasharray="3 3" />
          <text x="50" y="46" fill="#ffffff" fontSize="14" fontWeight="black" textAnchor="middle" letterSpacing="0.05em">MRS</text>
          <text x="50" y="60" fill="#ffae5c" fontSize="6" fontWeight="bold" textAnchor="middle" letterSpacing="0.08em">MEMBER</text>
          <text x="50" y="72" fill="#8e96a8" fontSize="7" fontWeight="bold" textAnchor="middle">2026</text>
        </svg>
      ),
      description: "Market Research Society Corporate Member upholding professional research standards."
    }
  ];

  return (
    <section id="certifications" className="w-full py-24 md:py-36 bg-transparent border-t border-white/5 relative z-10 scroll-mt-[80px]">
      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-6 border-b border-white/5">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-3 font-bold text-[#FFB84D]">
              Regulatory Compliance
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tight leading-tight ">
              Certifications & Frameworks
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest uppercase font-bold text-[#FFB84D]">
            INTEGRITY-CONTROLLED PARTNER NETWORKS
          </p>
        </div>

        {/* Horizontal flex row */}
        <div className="flex flex-row items-stretch justify-center gap-6 w-full overflow-x-auto lg:overflow-x-visible pb-4">
          {certifications.map((cert) => (
            <a 
              key={cert.id}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[250px] max-w-[260px] h-full group relative rounded-[1.5rem] overflow-hidden border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-md transition-all duration-500 ease-out hover:border-[#FFB84D]/40 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_32px_-8px_rgba(255,184,77,0.15)] p-5 flex flex-col items-center justify-between text-center min-h-[230px] block pointer-events-auto"
            >
              {/* High-tech grid cell background */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.15] group-hover:opacity-30 transition-opacity duration-500" style={{
                backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 60%)'
              }} />

              {/* Digital tick accents */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-[#FFB84D]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-[#FFB84D]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Badge Visual */}
              <div className="transform group-hover:scale-110 transition-transform duration-500 mb-4 z-10 relative">
                {cert.badge}
              </div>

              {/* Badge Info */}
              <div>
                <h3 className="text-base font-sans font-bold text-[#FDFBF7] opacity-100 group-hover:text-[#FFB84D] transition-colors duration-300 mb-2 tracking-tight">
                  {cert.name}
                </h3>
                <p className="text-[13px] text-zinc-400/90 font-normal leading-relaxed max-w-sm mx-auto">
                  {cert.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}


