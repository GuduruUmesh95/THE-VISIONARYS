import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState("idle"); // idle, submitting, success
  const [activeBudget, setActiveBudget] = useState(2);
  const budgets = ["< $50k", "$50k - $250k", "$250k - $1M", "$1M+"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate API call
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  return (
    <section id="contact" className="w-full py-24 bg-transparent border-t border-white/5 relative z-10 overflow-hidden scroll-mt-[80px]">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none blur-[140px] bg-[#FFB84D]/3"
      />

      <div className="w-full max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#FDFBF7] tracking-tight text-shadow-premium mb-4">
            INITIATE ENGAGEMENT
          </h2>
          <p className="text-zinc-400 font-normal text-sm md:text-base leading-relaxed">
            Global Reach. Elite Expertise. Tailored Solutions.
          </p>
        </div>

        {/* Upper Row: Twin cards */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-8">
          
          {/* Left Card: Solutions Info */}
          <div className="relative w-full rounded-[2.5rem] bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.8)] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-6 font-bold text-[#FFB84D]">
                Consulting Services
              </span>
              <h3 className="text-3xl md:text-4xl font-sans font-bold text-[#FDFBF7] tracking-tight leading-[1.1] mb-6">
                Let's Architect <br/> Your Future.
              </h3>
              <p className="text-zinc-400 font-normal text-sm leading-relaxed max-w-md mb-8">
                Ready to scale your enterprise architecture, optimize cloud deployments, or integrate robust AI? Reach out to our consulting team for a priority consultation.
              </p>
            </div>

            <div className="space-y-8">
              {/* Email Address */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#FFB84D]/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-[#FFB84D]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#FFB84D] text-[10px] uppercase font-semibold tracking-wider mb-1">EMAIL ADDRESS</span>
                  <span className="text-[#FDFBF7] text-[15px] font-medium font-mono">hello@thevisionarys.com</span>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#FFB84D]/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#FFB84D]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#FFB84D] text-[10px] uppercase font-semibold tracking-wider mb-1">PHONE LINE</span>
                  <span className="text-[#FDFBF7] text-[15px] font-medium font-mono">+44 20 7946 0192</span>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#FFB84D]/30 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-[#FFB84D]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#FFB84D] text-[10px] uppercase font-semibold tracking-wider mb-1">OFFICE LOCATION</span>
                  <span className="text-[#FDFBF7] text-[15px] font-medium font-mono">London, United Kingdom</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Input Form */}
          <div className="relative w-full rounded-[2.5rem] bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.8)] p-8 md:p-12 overflow-hidden flex flex-col justify-between">
            
            {/* Form Success Overlay */}
            <div className={`absolute inset-0 z-20 bg-[#0a0a0c]/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-700 ${formState === "success" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FFE082] to-[#FF6D00] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,184,77,0.3)]">
                <CheckCircle2 className="w-10 h-10 text-[#0a0a0c]" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2 text-shadow-premium">Transmission Received</h3>
              <p className="text-zinc-400 font-mono text-xs tracking-widest">OUR CONSULTANTS WILL CONTACT YOU SHORTLY</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full relative z-10 h-full justify-between">
              <div className="space-y-5">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase block font-bold text-[#FFB84D] mb-2">
                  Request consultation
                </span>
                
                {/* Enterprise Name */}
                <input 
                  required 
                  type="text" 
                  placeholder="Enterprise Name" 
                  className="bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FDFBF7] placeholder-zinc-600 focus:outline-none focus:border-[#FFB84D]/50 w-full transition-colors duration-300"
                />

                {/* Corporate Email */}
                <input 
                  required 
                  type="email" 
                  placeholder="Corporate Email" 
                  className="bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FDFBF7] placeholder-zinc-600 focus:outline-none focus:border-[#FFB84D]/50 w-full transition-colors duration-300"
                />

                {/* Budget Selectors */}
                <div className="space-y-3 text-left">
                  <label className="text-[#FFB84D] text-[10px] uppercase font-semibold tracking-wider">Estimated Budget (USD)</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveBudget(i)}
                        className={`py-2 px-3 text-xs font-mono font-semibold rounded-lg border transition-all duration-300 ${
                          activeBudget === i
                            ? "bg-[#FFE082]/10 border-[#FFE082]/50 text-[#FFE082] shadow-[0_0_15px_rgba(255,224,130,0.15)]"
                            : "bg-white/[0.02] border-white/10 text-zinc-500 hover:border-white/30"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Scope Textarea */}
                <textarea 
                  required 
                  rows={4}
                  placeholder="Project Scope" 
                  className="bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FDFBF7] placeholder-zinc-600 focus:outline-none focus:border-[#FFB84D]/50 w-full transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={formState === "submitting"}
                className="w-full py-3.5 bg-[#FFB84D] hover:bg-[#FFE082] text-[#0a0a0c] font-bold rounded-xl shadow-[0_4px_25px_rgba(255,184,77,0.15)] hover:shadow-[0_4px_30px_rgba(255,184,77,0.25)] transition-all duration-300 pointer-events-auto cursor-pointer flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
              >
                <span>{formState === "submitting" ? "INITIALIZING..." : "INITIALIZE ENGAGEMENT"}</span>
              </button>
            </form>
          </div>

        </div>

        {/* Lower Row: Widescreen Map */}
        <div className="w-full max-w-7xl mx-auto h-[320px] md:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative mb-16">
          <iframe 
            src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            className="w-full h-full border-0 grayscale contrast-[1.15] invert-[0.92] sepia-[0.08]"
            allowFullScreen="" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Visionarys London Office Map"
          />
        </div>

      </div>
    </section>
  );
}
