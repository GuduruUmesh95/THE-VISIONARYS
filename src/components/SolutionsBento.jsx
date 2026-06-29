import React from "react";
import { Cpu, ShieldCheck, Landmark, Cloud } from "lucide-react";

export default function SolutionsBento() {
  const pillars = [
    {
      id: "ai",
      title: "AI & Automation",
      subtitle: "Flagship Capability",
      desc: "Architecting agentic workflows and intelligent systems. We integrate advanced AI consulting and automated operations directly into core enterprise pipelines, enhancing efficiency and scaling decision-making intelligence.",
      icon: Cpu,
      gridClass: "md:col-span-1 md:row-span-1",
      accent: "#FFB84D",
      imgSrc: "/solutions_ai.png",
      bgVisual: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            @keyframes circuitFlow {
              0% { stroke-dashoffset: 100; }
              100% { stroke-dashoffset: 0; }
            }
            .flow-line-ai {
              stroke: #FFB84D;
              stroke-dasharray: 10, 15;
              animation: circuitFlow 4s linear infinite;
            }
          `}</style>
          <g fill="none" strokeWidth="1.5">
            <path d="M 50 100 L 150 100 L 220 170 L 400 170" className="flow-line-ai" />
            <path d="M 120 40 L 220 40 L 280 100 L 500 100" className="flow-line-ai" style={{ animationDelay: "-2s" }} />
          </g>
          <circle cx="220" cy="170" r="4" fill="#E6A13B" />
          <circle cx="280" cy="100" r="4" fill="#E6A13B" style={{ animationDelay: "-1.5s" }} />
        </svg>
      )
    },
    {
      id: "finance",
      title: "Financial Services",
      subtitle: "Industry Specialism",
      desc: "Deep vertical expertise tailored for regulated environments, risk management, compliance pipelines, and core modernizations for legacy banking infrastructures.",
      icon: Landmark,
      gridClass: "md:col-span-1 md:row-span-1",
      accent: "#E6A13B",
      imgSrc: "/solutions_finance.png",
      bgVisual: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            @keyframes rotateCube {
              0% { transform: translate(75%, 25%) rotate(0deg); }
              100% { transform: translate(75%, 25%) rotate(360deg); }
            }
            .wireframe-cube-fin {
              transform-origin: center;
              animation: rotateCube 25s linear infinite;
            }
          `}</style>
          <g className="wireframe-cube-fin" stroke="#E6A13B" strokeWidth="1" fill="none">
            <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" />
            <line x1="0" y1="-40" x2="0" y2="40" />
            <line x1="-35" y1="-20" x2="0" y2="0" />
            <line x1="35" y1="-20" x2="0" y2="0" />
          </g>
        </svg>
      )
    },
    {
      id: "cyber",
      title: "Cybersecurity",
      subtitle: "Security & Trust",
      desc: "Cyber Essentials Plus certified. Offering rigorous threat intelligence, round-the-clock vulnerability assessments, and robust identity access management architectures.",
      icon: ShieldCheck,
      gridClass: "md:col-span-1 md:row-span-1",
      accent: "#FFB84D",
      imgSrc: "/solutions_cyber.png",
      bgVisual: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            @keyframes sweepRadar {
              0% { transform: translate(25%, 50%) rotate(0deg); }
              100% { transform: translate(25%, 50%) rotate(360deg); }
            }
            .radar-sweep-cyber {
              transform-origin: center;
              animation: sweepRadar 6s linear infinite;
            }
          `}</style>
          <circle cx="60" cy="120" r="30" stroke="#FFB84D" strokeWidth="0.75" fill="none" strokeOpacity="0.3" />
          <g className="radar-sweep-cyber">
            <line x1="60" y1="120" x2="120" y2="120" stroke="#FFB84D" strokeWidth="1.5" strokeOpacity="0.7" />
          </g>
        </svg>
      )
    },
    {
      id: "devops",
      title: "DevOps & Cloud",
      subtitle: "Systems & Infrastructure",
      desc: "Scaling containerized infrastructures, modern CI/CD orchestration pipelines, cloud-native deployments, and serverless architectures tailored for hyper-availability and compliance.",
      icon: Cloud,
      gridClass: "md:col-span-1 md:row-span-1",
      accent: "#E6A13B",
      imgSrc: "/solutions_devops.png",
      bgVisual: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300">
          <style>{`
            @keyframes waveFlow {
              0% { transform: translateX(0); }
              100% { transform: translateX(-300px); }
            }
            .wave-path-devops {
              animation: waveFlow 12s linear infinite;
            }
          `}</style>
          <path d="M 0 180 Q 75 140 150 180 T 300 180 T 450 180 T 600 180" fill="none" stroke="#E6A13B" strokeWidth="1" strokeOpacity="0.3" className="wave-path-devops" />
        </svg>
      )
    }
  ];

  return (
    <section id="solutions" className="w-full py-24 md:py-36 bg-transparent relative z-10">
      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-3 font-bold text-[#FFB84D]">
              Engineered Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#FDFBF7] opacity-100 tracking-tight leading-[1.1] text-shadow-premium">
              Consultancy Solutions
            </h2>
          </div>
          <p className="text-zinc-400 font-normal max-w-sm text-sm leading-relaxed text-shadow-premium">
            Asymmetric intelligence architectures optimized for financial systems, enterprise scale automation, and rigorous operational compliance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className={`${pillar.gridClass} group relative rounded-3xl overflow-hidden border border-white/5 bg-[#0a0a0c]/60 backdrop-blur-sm transition-all duration-300 ease-out hover:border-[#FFB84D]/40 hover:shadow-[0_0_20px_rgba(255,184,77,0.08)] hover:scale-[1.02] p-8 md:p-10 flex flex-col justify-between min-h-[360px] md:min-h-[380px]`}
              >
                {/* Decorative background visual */}
                {pillar.bgVisual}

                {/* Top content */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3 bg-white/5 border-[0.5px] border-white/[0.06] group-hover:border-[#FFB84D]/30 text-white transition-all duration-300 rounded-xl">
                      <Icon className="w-6 h-6 group-hover:text-[#FFB84D] transition-colors duration-300" />
                    </div>
                    <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase bg-white/5 px-3 py-1 rounded-sm">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-sans font-bold text-[#FDFBF7] opacity-100 group-hover:text-[#FFB84D] transition-colors duration-300 mb-4 tracking-tight text-shadow-premium">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-zinc-400 font-normal text-sm leading-relaxed max-w-xl">
                    {pillar.desc}
                  </p>
                </div>

                {/* Interactive Visual/Image slot in center-bottom */}
                <div className="relative w-full h-32 md:h-36 rounded-xl overflow-hidden border-[0.5px] border-white/[0.06] group-hover:border-white/20 transition-all duration-500 mt-6 mb-4">
                  <img 
                    src={pillar.imgSrc} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover filter grayscale contrast-120 brightness-90 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c]/80 to-transparent pointer-events-none" />
                </div>

                {/* Bottom details reveal trigger */}
                <a 
                  href={pillar.id === "deeptech" ? "#services" : "#solutions"}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = pillar.id === "deeptech" ? "services" : "solutions";
                    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-white group-hover:text-[#FFB84D] transition-colors duration-300 mt-4 pointer-events-auto"
                >
                  <span>EXPLORE CAPABILITY</span>
                  <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
