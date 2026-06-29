import React from "react";

export default function CertificationsBento() {
  const certifications = [
    {
      id: "gdpr",
      name: "GDPR Compliant",
      gridClass: "md:col-span-2 lg:col-span-2",
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
    <section id="services" className="w-full py-24 md:py-36 bg-transparent border-t border-white/5 relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-6 border-b border-white/5">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-accent-glow uppercase block mb-3">
              Regulatory Compliance
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.1]">
              Certifications & Frameworks
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest text-accent-light uppercase">
            INTEGRITY-CONTROLLED PARTNER NETWORKS
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className={`${cert.gridClass} group relative rounded-3xl p-[1px] overflow-hidden transition-all duration-500`}
            >
              {/* Subtle inner glow/gradient on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-accent-glow/10 via-transparent to-accent-light/10" />
              <div className="absolute inset-0 bg-white/[0.06] group-hover:opacity-0 transition-opacity duration-500 rounded-3xl" />

              {/* Card Body */}
              <div className="relative h-full w-full bg-[#0d0e12]/98 backdrop-blur-xl rounded-[23px] p-8 flex flex-col items-center justify-between text-center min-h-[260px]">
                
                {/* Badge Visual */}
                <div className="transform group-hover:scale-105 transition-transform duration-500 mb-4">
                  {cert.badge}
                </div>

                {/* Badge Info */}
                <div>
                  <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-accent-light transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-secondary text-xs leading-relaxed max-w-sm mx-auto">
                    {cert.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
