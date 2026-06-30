import React, { useEffect, useRef } from "react";
import { User, Link, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExecutiveTeam() {
  const containerRef = useRef(null);

  const team = [
    {
      name: "Chintan Kamani",
      role: "CEO & Founder",
      description: "Visionary leader driving digital transformation and AI strategy. With a deep background in scaling enterprise technology, Chintan architects the overarching vision for next-generation consulting.",
      expertise: ["Strategic Vision", "AI Integration", "Enterprise Architecture"]
    },
    {
      name: "Pramesh Ajmera",
      role: "Chief Operating Officer",
      description: "Operational powerhouse ensuring flawless execution of complex implementations. Pramesh oversees global delivery, risk management, and client success across all major consulting verticals.",
      expertise: ["Global Operations", "Risk Management", "Client Success"]
    }
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".team-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="team" className="w-full py-24 md:py-36 bg-transparent border-t border-white/5 relative z-10 overflow-hidden">
      
      <div className="max-w-[85vw] xl:max-w-[75vw] mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-4 font-bold text-[#FF6D00]">
            Leadership
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#FDFBF7] tracking-tight leading-[1.1] text-shadow-premium mb-6">
            Executive Team
          </h2>
          <p className="text-zinc-400 font-normal text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Our leadership combines decades of experience in cutting-edge technology and enterprise consulting, driving innovation at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="team-card group relative rounded-[2rem] bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
              
              {/* Image / Placeholder Area */}
              <div className="w-full h-80 relative overflow-hidden bg-[#050505] flex items-center justify-center">
                
                {/* Abstract Premium Placeholder Silhouette Effect */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" style={{ background: idx === 0 ? "radial-gradient(circle, #FFE082 0%, transparent 70%)" : "radial-gradient(circle, #FF6D00 0%, transparent 70%)" }} />
                </div>
                
                <div className="relative z-10 w-32 h-32 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/[0.02] group-hover:scale-105 transition-transform duration-700">
                  <User className="w-12 h-12 text-zinc-500 group-hover:text-white transition-colors duration-500" />
                </div>
                
                {/* Overlay gradient for smooth transition to content */}
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0a0a0c] to-transparent z-10" />
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-10 relative z-20 bg-[#0a0a0c]">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold font-sans text-white tracking-tight mb-1">{member.name}</h3>
                    <p className="text-[10px] font-mono tracking-widest text-[#FFB300] uppercase font-bold">{member.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-colors">
                      <Link className="w-3.5 h-3.5" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/30 transition-colors">
                      <Mail className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  {member.description}
                </p>

                <div>
                  <p className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-3">Core Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((exp, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-zinc-300">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
