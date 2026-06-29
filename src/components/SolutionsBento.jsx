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
      gridClass: "md:col-span-2 md:row-span-1",
      accent: "#ff8a3d",
      imgSrc: "/solutions_ai.png",
      bgVisual: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            @keyframes circuitFlow {
              0% { stroke-dashoffset: 100; }
              100% { stroke-dashoffset: 0; }
            }
            .flow-line-ai {
              stroke: #ff8a3d;
              stroke-dasharray: 10, 15;
              animation: circuitFlow 4s linear infinite;
            }
          `}</style>
          <g fill="none" strokeWidth="1.5">
            <path d="M 50 100 L 150 100 L 220 170 L 400 170" className="flow-line-ai" />
            <path d="M 120 40 L 220 40 L 280 100 L 500 100" className="flow-line-ai" style={{ animationDelay: "-2s" }} />
          </g>
          <circle cx="220" cy="170" r="4" fill="#ffae5c" />
          <circle cx="280" cy="100" r="4" fill="#ffae5c" style={{ animationDelay: "-1.5s" }} />
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
      accent: "#ffae5c",
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
          <g className="wireframe-cube-fin" stroke="#ffae5c" strokeWidth="1" fill="none">
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
      accent: "#ff8a3d",
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
          <circle cx="60" cy="120" r="30" stroke="#ff8a3d" strokeWidth="0.75" fill="none" strokeOpacity="0.3" />
          <g className="radar-sweep-cyber">
            <line x1="60" y1="120" x2="120" y2="120" stroke="#ff8a3d" strokeWidth="1.5" strokeOpacity="0.7" />
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
      gridClass: "md:col-span-2 md:row-span-1",
      accent: "#ffae5c",
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
          <path d="M 0 180 Q 75 140 150 180 T 300 180 T 450 180 T 600 180" fill="none" stroke="#ffae5c" strokeWidth="1" strokeOpacity="0.3" className="wave-path-devops" />
        </svg>
      )
    }
  ];

  return (
    <section id="solutions" className="w-full py-24 md:py-36 bg-transparent relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono tracking-[0.3em] text-accent-glow uppercase block mb-3">
              Engineered Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.1]">
              Consultancy Solutions
            </h2>
          </div>
          <p className="text-secondary max-w-sm text-sm leading-relaxed">
            Asymmetric intelligence architectures optimized for financial systems, enterprise scale automation, and rigorous operational compliance.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className={`${pillar.gridClass} group relative rounded-3xl p-[1px] overflow-hidden transition-all duration-500 hover:-translate-y-1.5`}
              >
                {/* 1. Subtle 1px Border Overlay on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${pillar.accent} 0%, transparent 40%, ${pillar.accent} 100%)`
                  }}
                />
                <div className="absolute inset-0 bg-white/[0.08] group-hover:opacity-0 transition-opacity duration-500 rounded-3xl" />

                {/* 2. Card Body Container */}
                <div className="relative h-full w-full bg-[#0e0f14]/98 backdrop-blur-xl rounded-[23px] p-8 md:p-10 flex flex-col justify-between overflow-hidden min-h-[440px]">
                  
                  {/* Decorative background visual */}
                  {pillar.bgVisual}

                  {/* Top content */}
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div className="p-3 bg-white/5 border border-white/5 group-hover:border-accent-glow/30 text-white transition-all duration-300 rounded-xl">
                        <Icon className="w-6 h-6 group-hover:text-accent-light transition-colors duration-300" />
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-secondary uppercase bg-white/5 px-3 py-1 rounded-sm">
                        {pillar.subtitle}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent-light transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    
                    <p className="text-secondary text-sm leading-relaxed max-w-xl">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Interactive Visual/Image slot in center-bottom */}
                  <div className="relative w-full h-32 md:h-36 rounded-xl overflow-hidden border border-white/5 group-hover:border-accent-glow/20 transition-all duration-500 mt-6 mb-4">
                    <img 
                      src={pillar.imgSrc} 
                      alt={pillar.title} 
                      className="w-full h-full object-cover filter grayscale contrast-120 brightness-90 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f14]/80 to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom details reveal trigger */}
                  <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-secondary group-hover:text-accent-light transition-colors duration-300 mt-4">
                    <span>EXPLORE CAPABILITY</span>
                    <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
