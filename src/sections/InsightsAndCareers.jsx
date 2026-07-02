import React, { useEffect, useRef } from "react";
import { ArrowUpRight, ChevronRight, Briefcase } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InsightsAndCareers() {
  const containerRef = useRef(null);

  const featuredInsight = {
    title: "The Zero-Trust Imperative in Cloud Architectures",
    category: "Cybersecurity",
    date: "OCT 2026",
    readTime: "5 MIN READ",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  };

  const smallerInsights = [
    {
      title: "Scaling GenAI Models within Financial Institutions",
      category: "AI & Automation",
      date: "SEP 2026",
      readTime: "8 MIN READ"
    },
    {
      title: "Quantum Computing: Preparing for the Next Decade",
      category: "Future Tech",
      date: "AUG 2026",
      readTime: "6 MIN READ"
    }
  ];

  const jobs = [
    { title: "Senior AI Solutions Architect", location: "London / Remote", type: "Full-time" },
    { title: "Lead Cloud Infrastructure Engineer", location: "Dubai, GCC", type: "Full-time" },
    { title: "Cybersecurity Analyst", location: "Mumbai, India", type: "Full-time" }
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".fade-up-element",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
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
    <section 
      ref={containerRef} 
      id="insights" 
      className="w-full py-12 md:py-16 bg-[#0a0a0c] relative z-10 overflow-hidden border-t border-b border-[#FFB84D]/30 scroll-mt-[80px]"
    >
      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="fade-up-element flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-6 font-bold text-[#FFB84D]">
              Knowledge Hub
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 tracking-tight leading-tight">
              Industry Perspectives
            </h2>
          </div>
          <button className="flex w-max items-center gap-3 text-[11px] font-mono font-bold text-white uppercase tracking-[0.2em] hover:text-[#FFB84D] transition-all duration-300 group relative py-2 mb-2">
            <span className="relative z-10">View All Publications</span> 
            <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-[#FFB84D] to-transparent group-hover:w-full transition-all duration-700 ease-out" />
          </button>
        </div>

        {/* Editorial Magazine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Featured Article (spans 8 cols) */}
          <a href="#" className="fade-up-element group relative lg:col-span-8 rounded-[2rem] overflow-hidden min-h-[400px] lg:min-h-[500px] border border-white/10 flex flex-col justify-end p-8 md:p-12 hover:border-[#FFB84D]/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,184,77,0.2)]">
            {/* Background Image */}
            <img 
              src={featuredInsight.image} 
              alt={featuredInsight.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c]/80 to-transparent" />
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at bottom left, rgba(255, 184, 77, 0.2) 0%, transparent 60%)" }} />

            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-mono tracking-widest text-[#0a0a0c] uppercase font-bold px-4 py-1.5 bg-[#FFB84D] rounded-sm">
                  {featuredInsight.category}
                </span>
                <span className="text-[10px] font-mono text-zinc-300 uppercase tracking-widest">
                  {featuredInsight.date} • {featuredInsight.readTime}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans text-white tracking-tight leading-tight mb-6 group-hover:text-[#FFB84D] transition-colors duration-500">
                {featuredInsight.title}
              </h3>
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest group-hover:text-[#FFB84D] transition-colors">
                Read Article <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </a>

          {/* Secondary Articles (spans 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {smallerInsights.map((insight, idx) => (
              <a key={idx} href="#" className="fade-up-element group flex-1 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-[#FFB84D]/40 hover:bg-[#0a0a0c]/80 transition-all duration-500 p-8 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(255,184,77,0.15)] relative overflow-hidden">
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB84D] blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <span className="text-[10px] font-mono tracking-widest text-[#FFB84D] uppercase font-bold px-3 py-1 border border-[#FFB84D]/20 rounded-sm">
                      {insight.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-sans text-white tracking-tight mb-4 group-hover:text-white transition-colors leading-snug relative z-10">
                    {insight.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest relative z-10">
                  <span>{insight.date}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                  <span>{insight.readTime}</span>
                </div>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


