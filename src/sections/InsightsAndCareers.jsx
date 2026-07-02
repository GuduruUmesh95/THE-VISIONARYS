import React, { useEffect, useRef } from "react";
import { ArrowUpRight, BookOpen, Briefcase, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InsightsAndCareers() {
  const containerRef = useRef(null);

  const insights = [
    {
      title: "The Zero-Trust Imperative in Cloud Architectures",
      category: "Cybersecurity",
      date: "OCT 2026",
      readTime: "5 MIN READ"
    },
    {
      title: "Scaling GenAI Models within Financial Institutions",
      category: "AI & Automation",
      date: "SEP 2026",
      readTime: "8 MIN READ"
    }
  ];

  const jobs = [
    {
      title: "Senior AI Solutions Architect",
      location: "London, UK / Remote",
      type: "Full-time"
    },
    {
      title: "Lead Cloud Infrastructure Engineer",
      location: "Dubai, GCC",
      type: "Full-time"
    },
    {
      title: "Cybersecurity Analyst",
      location: "Mumbai, India",
      type: "Full-time"
    }
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(".split-pane",
        { opacity: 0, y: 40 },
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
    <section ref={containerRef} id="insights" className="w-full py-24 md:py-36 bg-[#0a0a0c] relative z-10 overflow-hidden border-t border-white/5 scroll-mt-[80px]">
      
      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Insights */}
          <div className="split-pane flex flex-col">
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#FFB300]" />
              </div>
              <div>
                <h2 className="text-3xl font-sans font-bold text-white tracking-tight">Latest Insights</h2>
                <p className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mt-1">Thought Leadership</p>
              </div>
            </div>

            <div className="flex flex-col gap-6 flex-1">
              {insights.map((insight, idx) => (
                <a key={idx} href="#" className="group block p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#FFB300] uppercase font-bold px-3 py-1 bg-[#FFB300]/10 rounded-full border border-[#FFB300]/20">
                      {insight.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold font-sans text-white tracking-tight mb-6 group-hover:text-[#FFE082] transition-colors leading-snug">
                    {insight.title}
                  </h3>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <span>{insight.date}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700" />
                    <span>{insight.readTime}</span>
                  </div>
                </a>
              ))}
            </div>

            <button className="mt-8 flex items-center gap-2 text-sm font-bold text-white uppercase tracking-widest hover:text-[#FFB300] transition-colors group">
              View All Insights <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right: Careers */}
          <div className="split-pane flex flex-col">
            <div className="mb-10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#FF8A3D]" />
              </div>
              <div>
                <h2 className="text-3xl font-sans font-bold text-white tracking-tight">Join The Vision</h2>
                <p className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase mt-1">Open Opportunities</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {jobs.map((job, idx) => (
                <a key={idx} href="#" className="group flex items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-white/[0.02] to-transparent border border-white/[0.05] hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Hover gradient highlight */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF8A3D] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                  
                  <div className="pl-4">
                    <h3 className="text-lg font-bold font-sans text-white tracking-tight mb-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      <span>{job.location}</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-700" />
                      <span className="text-[#FFB300]">{job.type}</span>
                    </div>
                  </div>
                  
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF8A3D] group-hover:border-[#FF8A3D] transition-colors shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </a>
              ))}
              
              <div className="mt-4 p-8 rounded-2xl border border-dashed border-white/20 flex flex-col items-center justify-center text-center">
                <p className="text-sm text-zinc-400 mb-4">Don't see a role that fits? We're always looking for exceptional talent.</p>
                <a href="mailto:careers@thevisionarys.com" className="text-xs font-mono font-bold text-[#FF8A3D] uppercase tracking-widest hover:text-white transition-colors">
                  Submit Open Application
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
