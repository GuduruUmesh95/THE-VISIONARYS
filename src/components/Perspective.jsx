import React from "react";

export default function Perspective() {
  return (
    <section id="process" className="w-full border-t border-white/5 py-24 md:py-36 bg-transparent relative z-10 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px] opacity-[0.02]"
        style={{
          background: "radial-gradient(circle, #ff8a3d 0%, transparent 70%)"
        }}
      />

      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase font-bold text-[#FFB84D]">
              Firm Perspective
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-[#FFB84D]/40 to-transparent" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight leading-[1.15] text-[#FDFBF7] opacity-100 text-shadow-premium">
            Empowering Tomorrow: <br />
            Innovative Solutions <br />
            for a Modern World.
          </h2>
        </div>

        {/* Content columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-zinc-400 max-w-5xl relative">
          
          {/* Vertical divider line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/10 via-white/5 to-transparent -translate-x-1/2" />

          {/* Left Column */}
          <div className="space-y-6 md:pr-8">
            <p className="text-sm md:text-base leading-relaxed hover:text-white transition-colors duration-300">
              We specialize in delivering end-to-end consulting and implementation services across industries, helping organizations tackle complex challenges like digital transformation, compliance, and risk management. Our expertise lies in bridging the gap between business needs and technical solutions, ensuring seamless integration and adoption of cutting-edge tools that drive measurable results.
            </p>
            <p className="text-sm md:text-base leading-relaxed hover:text-white transition-colors duration-300">
              We are committed to transforming challenges into opportunities through innovative solutions tailored for the modern business landscape. Our expertise encompasses a wide range of services, including AI, automation, cloud support, and cybersecurity.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between md:pl-8 h-full space-y-6">
            <p className="text-sm md:text-base leading-relaxed hover:text-white transition-colors duration-300">
              As a forward-thinking consulting firm, we specialize in delivering cutting-edge strategies and transformative technologies that empower organizations to navigate complexities and drive sustainable growth.
            </p>
            
            <a 
              href="https://www.thevisionarys.com/solutions" 
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-white group-hover:text-zinc-300 transition-colors duration-300 mt-8 group self-start pointer-events-auto"
            >
              EXPLORE OUR CAPABILITIES
              <span className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
