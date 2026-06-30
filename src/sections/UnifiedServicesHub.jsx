import React, { useState, useRef } from "react";
import { Cpu, Shield, Cloud, RefreshCcw, Database, ChevronDown, CheckCircle2, Server, Key, BrainCircuit } from "lucide-react";
import { gsap } from "gsap";

export default function UnifiedServicesHub() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const services = [
    {
      title: "AI & Automation",
      icon: BrainCircuit,
      color: "#FFE082",
      description: "Harness the power of machine learning and intelligent automation to redefine operational efficiency and decision-making.",
      features: [
        "Predictive Analytics Models",
        "LLM & Generative AI Integration",
        "RPA (Robotic Process Automation)",
        "Intelligent Document Processing"
      ]
    },
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      color: "#FFB300",
      description: "Secure, scalable, and resilient cloud architectures designed for high-availability enterprise environments.",
      features: [
        "Multi-Cloud & Hybrid Deployments",
        "Serverless Architecture Design",
        "Cloud Migration Strategy",
        "DevOps & CI/CD Pipelines"
      ]
    },
    {
      title: "Cybersecurity & Risk",
      icon: Shield,
      color: "#FF6D00",
      description: "Robust zero-trust security frameworks ensuring maximum protection and compliance for mission-critical data.",
      features: [
        "Zero-Trust Architecture",
        "Penetration Testing & Audits",
        "Identity & Access Management",
        "GDPR & ISO Compliance"
      ]
    },
    {
      title: "Digital Transformation",
      icon: RefreshCcw,
      color: "#FF8A3D",
      description: "End-to-end modernization of legacy systems, creating agile and responsive digital business models.",
      features: [
        "Legacy System Modernization",
        "Digital Strategy Consulting",
        "Customer Experience (CX) Design",
        "Agile Methodology Implementation"
      ]
    },
    {
      title: "Data Engineering",
      icon: Database,
      color: "#FFAE5C",
      description: "Build robust data pipelines and decentralized data architectures to fuel your AI initiatives.",
      features: [
        "Data Lake & Warehouse Design",
        "Real-Time Streaming Pipelines",
        "Data Governance & Quality",
        "Business Intelligence (BI)"
      ]
    }
  ];

  const handleToggle = (idx) => {
    setExpandedIndex(idx === expandedIndex ? -1 : idx);
  };

  return (
    <section id="services-hub" className="w-full py-24 md:py-36 bg-transparent border-t border-white/5 relative z-10 overflow-hidden">
      
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-[150px] opacity-[0.02]"
        style={{ background: "radial-gradient(circle, #FFE082 0%, transparent 70%)" }}
      />

      <div className="max-w-[85vw] xl:max-w-[75vw] mx-auto px-4 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-4 font-bold text-[#FFB300]">
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#FDFBF7] tracking-tight leading-[1.1] text-shadow-premium mb-6">
            Unified Services Hub
          </h2>
          <p className="text-zinc-400 font-normal text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Comprehensive consulting and technical execution across the most critical domains of modern enterprise technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {services.map((service, idx) => {
            const isExpanded = expandedIndex === idx;
            const Icon = service.icon;

            return (
              <div 
                key={idx}
                className={`relative rounded-3xl border transition-all duration-500 overflow-hidden ${
                  isExpanded 
                    ? "bg-[#0a0a0c]/80 border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" 
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10 cursor-pointer"
                }`}
                onClick={() => !isExpanded && handleToggle(idx)}
              >
                
                {/* Header (Always Visible) */}
                <div 
                  className={`p-6 md:p-8 flex items-center justify-between z-10 relative cursor-pointer ${isExpanded ? "border-b border-white/10" : ""}`}
                  onClick={() => isExpanded && handleToggle(idx)}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${isExpanded ? "bg-white/10" : "bg-white/5"}`}>
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <div>
                      <h3 className={`font-sans font-bold text-xl md:text-2xl tracking-tight transition-colors duration-500 ${isExpanded ? "text-white" : "text-zinc-300"}`}>
                        {service.title}
                      </h3>
                      <p className="text-[10px] font-mono tracking-widest text-zinc-500 mt-1 uppercase hidden md:block">
                        Enterprise Solutions
                      </p>
                    </div>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${isExpanded ? "rotate-180 bg-white/10" : ""}`}>
                    <ChevronDown className="w-4 h-4 text-zinc-400" />
                  </div>
                </div>

                {/* Expandable Content */}
                <div 
                  className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden`}
                  style={{
                    maxHeight: isExpanded ? "500px" : "0px",
                    opacity: isExpanded ? 1 : 0
                  }}
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-16">
                    
                    <div className="md:w-1/2">
                      <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="md:w-1/2">
                      <h4 className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase mb-4 font-bold">Key Capabilities</h4>
                      <ul className="space-y-3">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: service.color }} />
                            <span className="text-zinc-300 text-sm font-medium">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Active Edge Glow */}
                {isExpanded && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b" style={{ backgroundImage: `linear-gradient(to bottom, ${service.color}, transparent)` }} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
