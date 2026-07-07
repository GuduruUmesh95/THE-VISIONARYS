import React, { useState } from "react";
import { createPortal } from "react-dom";
import { Cpu, ShieldCheck, Landmark, Cloud, Network, Compass, Server, BarChart3, ChevronLeft, ChevronRight, X, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SolutionsBentoModal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModal, setActiveModal] = useState(null);

  const pillars = [
    {
      id: "ai",
      title: "AI & Automation",
      subtitle: "Flagship Capability",
      desc: "Architecting agentic workflows and intelligent systems. We integrate advanced AI consulting and automated operations directly into core enterprise pipelines, enhancing efficiency and scaling decision-making intelligence.",
      icon: Cpu,
      accent: "#FFB84D",
      imgSrc: "/assets/solutions/solution-1.png",
      features: ["Agentic Workflows", "Generative AI Integration", "RPA Solutions", "Cognitive Automation"],
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
      accent: "#E6A13B",
      imgSrc: "/assets/solutions/solution-2.png",
      features: ["Risk Management Models", "Regulatory Compliance", "Legacy Modernization", "FinTech Integration"],
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
      accent: "#FFB84D",
      imgSrc: "/assets/solutions/solution-3.png",
      features: ["Zero-Trust Architecture", "Threat Intelligence", "Vulnerability Audits", "IAM Optimization"],
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
      accent: "#E6A13B",
      imgSrc: "/assets/solutions/solution-4.png",
      features: ["CI/CD Orchestration", "Cloud-Native Deployments", "Containerization", "High-Availability Arch"],
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
    },
    {
      id: "arch",
      title: "Enterprise Architecture",
      subtitle: "Blueprint & Governance",
      desc: "Designing scalable blueprints and robust governance frameworks. We align business capabilities with technology platforms for resilient, future-ready enterprise operations.",
      icon: Network,
      accent: "#FFB84D",
      imgSrc: "/image 1.avif",
      features: ["System Blueprints", "Tech Governance", "Platform Alignment", "Resilience Planning"],
      bgVisual: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            @keyframes pulseGrid {
              0%, 100% { opacity: 0.2; }
              50% { opacity: 0.6; }
            }
            .grid-node {
              animation: pulseGrid 3s ease-in-out infinite;
            }
          `}</style>
          <g stroke="#FFB84D" strokeWidth="1" fill="none">
            <circle cx="50" cy="50" r="3" fill="#FFB84D" className="grid-node" />
            <circle cx="150" cy="50" r="3" fill="#FFB84D" className="grid-node" style={{ animationDelay: "0.5s" }} />
            <circle cx="100" cy="120" r="3" fill="#FFB84D" className="grid-node" style={{ animationDelay: "1s" }} />
            <line x1="50" y1="50" x2="100" y2="120" strokeOpacity="0.4" />
            <line x1="150" y1="50" x2="100" y2="120" strokeOpacity="0.4" />
          </g>
        </svg>
      )
    },
    {
      id: "strategy",
      title: "Digital Strategy & M&A",
      subtitle: "Growth & Transition",
      desc: "Navigating digital integration, technology due diligence, and portfolio synergies. We drive strategic readiness and seamless business transitions during merger integrations.",
      icon: Compass,
      accent: "#E6A13B",
      imgSrc: "/image 2.avif",
      features: ["Tech Due Diligence", "M&A Synergies", "Integration Planning", "Strategic Roadmaps"],
      bgVisual: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            @keyframes compassRotate {
              0% { transform: translate(50%, 50%) rotate(0deg); }
              100% { transform: translate(50%, 50%) rotate(360deg); }
            }
            .compass-dial {
              transform-origin: center;
              animation: compassRotate 20s linear infinite;
            }
          `}</style>
          <circle cx="150" cy="150" r="40" stroke="#E6A13B" strokeWidth="1" fill="none" className="compass-dial" />
          <line x1="150" y1="110" x2="150" y2="190" stroke="#E6A13B" strokeWidth="1.5" />
          <line x1="110" y1="150" x2="190" y2="150" stroke="#E6A13B" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: "cloudmod",
      title: "Cloud Modernization",
      subtitle: "Scalability & Speed",
      desc: "Migrating legacy architectures to state-of-the-art hybrid cloud ecosystems. We optimize cloud spend, enhance reliability, and accelerate software delivery speeds.",
      icon: Server,
      accent: "#FFB84D",
      imgSrc: "/image 10.avif",
      features: ["Legacy Migration", "Hybrid Ecosystems", "Spend Optimization", "Delivery Acceleration"],
      bgVisual: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            @keyframes serverPulse {
              0%, 100% { fill: #FFB84D; opacity: 0.3; }
              50% { fill: #FFF; opacity: 1; }
            }
            .server-led {
              animation: serverPulse 2s infinite;
            }
          `}</style>
          <g stroke="#FFB84D" strokeWidth="1" fill="none">
            <rect x="80" y="60" width="140" height="25" rx="2" />
            <rect x="80" y="95" width="140" height="25" rx="2" />
            <circle cx="95" cy="72.5" r="2.5" className="server-led" />
            <circle cx="95" cy="107.5" r="2.5" className="server-led" style={{ animationDelay: "1s" }} />
          </g>
        </svg>
      )
    },
    {
      id: "data",
      title: "Data Intelligence & Analytics",
      subtitle: "Analytics & Insights",
      desc: "Structuring high-throughput data lakes and executing real-time stream analytics. We transform raw enterprise data into actionable predictive insights.",
      icon: BarChart3,
      accent: "#E6A13B",
      imgSrc: "/image 11.avif",
      features: ["Data Lake Structuring", "Stream Analytics", "Predictive Modeling", "Business Intelligence"],
      bgVisual: (
        <svg className="absolute inset-0 w-full h-full opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <style>{`
            @keyframes barGrow {
              0%, 100% { height: 20px; y: 100px; }
              50% { height: 50px; y: 70px; }
            }
            .data-bar-1 { animation: barGrow 3s ease-in-out infinite; }
            .data-bar-2 { animation: barGrow 3s ease-in-out infinite 0.7s; }
            .data-bar-3 { animation: barGrow 3s ease-in-out infinite 1.4s; }
          `}</style>
          <g fill="#E6A13B">
            <rect x="100" y="100" width="10" height="20" className="data-bar-1" />
            <rect x="120" y="100" width="10" height="20" className="data-bar-2" />
            <rect x="140" y="100" width="10" height="20" className="data-bar-3" />
          </g>
        </svg>
      )
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(5, prev + 1));
  };

  return (
    <section id="solutions" className="w-full pt-24 md:pt-36 pb-6 md:pb-8 bg-transparent relative z-10 scroll-mt-[80px]">
      <style>{`
        .solutions-track {
          --card-width: 100%;
          --card-gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .solutions-track {
            --card-width: calc((100% - 3rem) / 3);
            --card-gap: 1.5rem;
          }
        }
      `}</style>

      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-3 font-bold text-[#FFB84D]">
              Core Capabilities
            </span>
            <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tight leading-tight ">
              Consultancy Solutions
            </h2>
          </div>
          <p className="text-zinc-400 font-normal max-w-sm text-sm leading-relaxed text-shadow-premium">
            Asymmetric intelligence architectures optimized for financial systems, enterprise scale automation, and rigorous operational compliance.
          </p>
        </div>

        <div className="w-full overflow-hidden relative px-4 md:px-14 pt-10 pb-16">
          
          <div 
            className="solutions-track flex flex-row gap-6 items-center transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
            style={{ transform: `translateX(calc(-${currentIndex} * (var(--card-width) + var(--card-gap))))` }}
          >
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isVisible = index >= currentIndex && index < currentIndex + 3;
              const isCenter = index === currentIndex + 1;

              let cardStyleClasses = "group relative rounded-3xl overflow-hidden border p-8 md:p-10 flex flex-col justify-between min-h-[360px] md:min-h-[400px] w-full min-w-full md:w-[calc((100%-3rem)/3)] md:min-w-[calc((100%-3rem)/3)] flex-shrink-0 transition-all duration-600 ease-[cubic-bezier(0.34,1.56,0.64,1)] will-change-transform ";

              if (isCenter) {
                // CENTER FOCUS ACCENT (Enhanced Bloom)
                cardStyleClasses += "scale-105 opacity-100 border-[#FFB84D]/30 bg-[#0a0a0c]/85 backdrop-blur-md shadow-[0_0_25px_rgba(255,184,77,0.12)] hover:scale-[1.08] hover:border-[#FFB84D]/50";
              } else if (isVisible) {
                // ENTERING VISIBLE VIEW CARDS (Slow Bloom)
                cardStyleClasses += "scale-100 opacity-100 border-white/5 bg-[#0a0a0c]/60 backdrop-blur-sm hover:border-[#FFB84D]/40 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(255,184,77,0.08)]";
              } else {
                // EXITING/OFF-SCREEN CARDS (Minimizing)
                cardStyleClasses += "scale-90 opacity-40 border-white/5 bg-[#0a0a0c]/40 pointer-events-none";
              }

              return (
                <div 
                  key={pillar.id}
                  className={cardStyleClasses}
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

                    <h3 className="text-2xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 group-hover:text-[#FFB84D] transition-colors duration-300 mb-4 tracking-tight ">
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
                  <button 
                    onClick={() => setActiveModal(pillar)}
                    className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-white group-hover:text-[#FFB84D] transition-colors duration-300 mt-4 pointer-events-auto cursor-pointer"
                  >
                    <span>EXPLORE CAPABILITY</span>
                    <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Floating Glass Control Buttons */}
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-[#0a0a0c]/40 backdrop-blur-md border border-white/10 text-white rounded-full p-3.5 hover:bg-white/10 hover:border-[#FFB84D]/50 hover:text-[#FFB84D] hover:shadow-[0_0_15px_rgba(255,184,77,0.15)] transition-all duration-300 flex items-center justify-center pointer-events-auto disabled:pointer-events-none ${
              currentIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            aria-label="Previous capability"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            disabled={currentIndex === 5}
            className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-[#0a0a0c]/40 backdrop-blur-md border border-white/10 text-white rounded-full p-3.5 hover:bg-white/10 hover:border-[#FFB84D]/50 hover:text-[#FFB84D] hover:shadow-[0_0_15px_rgba(255,184,77,0.15)] transition-all duration-300 flex items-center justify-center pointer-events-auto disabled:pointer-events-none ${
              currentIndex === 5 ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            aria-label="Next capability"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal Overlay - Rendered at root level to fix z-index stacking issues */}
      {typeof document !== 'undefined' && createPortal(
        <div 
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${activeModal ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-500" 
            onClick={() => setActiveModal(null)}
          />
          
          {/* Modal Window */}
          <div 
            className={`relative w-full max-w-5xl max-h-[90vh] md:max-h-[85vh] overflow-hidden bg-[#0a0a0c] border border-[#FFB84D]/60 rounded-[2rem] shadow-[0_0_120px_rgba(255,184,77,0.3),0_0_40px_rgba(255,184,77,0.2)_inset] transition-all duration-500 flex flex-col md:flex-row ${activeModal ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}`}
          >
            {activeModal && (
              <>
                {/* Left Side Visual */}
                <div className="w-full md:w-2/5 h-48 md:h-auto relative overflow-hidden bg-black">
                  <img 
                    src={activeModal.imgSrc} 
                    alt={activeModal.title} 
                    className="w-full h-full object-cover opacity-60 mix-blend-screen"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#0a0a0c]/80" />
                  <div className="absolute top-8 left-8 p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                    <activeModal.icon className="w-8 h-8" style={{ color: activeModal.accent }} />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="w-full md:w-3/5 relative flex flex-col h-full max-h-[calc(90vh-12rem)] md:max-h-[85vh]">
                  
                  {/* Fixed Header */}
                  <div className="px-8 pt-8 md:px-12 md:pt-12 pb-6 shrink-0 bg-[#0a0a0c] relative z-20 border-b border-white/5">
                    <button 
                      onClick={() => setActiveModal(null)}
                      className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2 font-bold">
                      {activeModal.subtitle}
                    </span>
                    <h3 className="text-3xl font-bold font-sans text-white tracking-tight">
                      {activeModal.title}
                    </h3>
                  </div>

                  {/* Scrollable Body */}
                  <div className="flex-1 overflow-y-auto px-8 md:px-12 py-8">
                    <p className="text-zinc-300 leading-relaxed mb-10 text-lg">
                      {activeModal.desc}
                    </p>

                    <h4 className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase mb-6 font-bold">Methodology & Capabilities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                      {activeModal.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: activeModal.accent }} />
                          <span className="text-zinc-200 text-sm font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 mb-4 shrink-0 p-6 rounded-2xl border border-[#FFB84D]/30 bg-[#FFB84D]/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB84D] blur-[60px] opacity-20" />
                      <h4 className="text-white font-bold mb-2 relative z-10">Ready to implement this solution?</h4>
                      <p className="text-sm text-zinc-400 mb-6 relative z-10">Our enterprise architects are available to discuss tailored implementations for your firm.</p>
                      <a href="#contact" onClick={() => setActiveModal(null)} className="relative z-10 inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-xl hover:scale-105 transition-transform">
                        Schedule Consultation <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}


