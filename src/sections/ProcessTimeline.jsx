import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Flag, Zap, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  
  const timelineSteps = [
    {
      id: "01",
      title: "Origins",
      icon: Flag,
      content: "Founded on the belief that bridging the gap between complex business challenges and cutting-edge technical execution is essential. We recognized a critical need for intelligence-driven strategies in rapidly evolving markets."
    },
    {
      id: "02",
      title: "Meaning",
      icon: Target,
      content: "We define our firm by the impact we create. We are not just consultants; we are architects of sustainable growth and digital resilience, ensuring organizations don't just adapt, but lead."
    },
    {
      id: "03",
      title: "Mission & Values",
      icon: Award,
      content: "Empowering tomorrow with uncompromised integrity. Our values center on rigorous compliance, deep technological fluency, and a relentless commitment to maximizing enterprise value."
    },
    {
      id: "04",
      title: "Value Delivery",
      icon: Zap,
      content: "Deploying high-performance cloud infrastructures, advanced AI automation, and robust cybersecurity frameworks. We transform theoretical strategy into measurable, highly available operational reality."
    }
  ];

  useEffect(() => {
    // Check for reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // Animate the vertical line drawing downwards
      gsap.fromTo(".timeline-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );

      // Animate each step popping in
      gsap.utils.toArray(".timeline-step").forEach((step, i) => {
        gsap.fromTo(step,
          { opacity: 0, x: i % 2 === 0 ? 50 : -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="process" className="w-full py-24 md:py-36 bg-transparent border-t border-white/5 relative z-10 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-[150px] opacity-[0.02]"
        style={{ background: "radial-gradient(circle, #ff8a3d 0%, transparent 70%)" }}
      />

      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-4 font-bold text-[#FFB84D]">
            Firm Perspective
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#FDFBF7] tracking-tight leading-[1.1] text-shadow-premium mb-6">
            Our Evolution & Mission
          </h2>
          <p className="text-zinc-400 font-normal text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A relentless commitment to transforming challenges into opportunities through innovative, technology-driven solutions tailored for the modern enterprise landscape.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative max-w-4xl mx-auto">
          
          {/* Central Line Track */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/[0.05] -translate-x-1/2" />
          
          {/* Central Line Glowing Fill */}
          <div className="timeline-line-fill absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FFE082] via-[#FFB300] to-[#FF6D00] -translate-x-1/2 origin-top shadow-[0_0_15px_#FFB300]" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {timelineSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = step.icon;

              return (
                <div key={step.id} className="timeline-step relative flex items-center md:justify-between w-full">
                  
                  {/* Central Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#0a0a0c] border border-[#FFB300]/50 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,179,0,0.2)]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE082]/10 to-[#FF6D00]/10 flex items-center justify-center backdrop-blur-md">
                      <Icon className="w-4 h-4 text-[#FFE082]" />
                    </div>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] pl-20 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:ml-auto md:pl-12 text-left'}`}>
                    <div className="p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] backdrop-blur-xl hover:bg-white/[0.06] hover:border-[#FFE082]/30 transition-colors duration-500 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.8)]">
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#FFE082] block mb-3 opacity-80">
                        PHASE {step.id}
                      </span>
                      <h3 className="text-2xl font-bold font-sans text-white tracking-tight mb-4 text-shadow-premium">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-zinc-400">
                        {step.content}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
