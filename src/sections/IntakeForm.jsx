import React, { useState } from "react";
import { Send, CheckCircle2, Building, Mail, Phone, Calendar } from "lucide-react";

export default function IntakeForm() {
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
    <section id="contact" className="w-full py-24 md:py-36 bg-transparent border-t border-white/5 relative z-10 overflow-hidden">
      
      <div 
        className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full pointer-events-none blur-[150px] opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #00d8ff 0%, transparent 70%)" }}
      />

      <div className="max-w-[85vw] xl:max-w-[80vw] mx-auto px-4 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Copy */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase block mb-6 font-bold text-[#FFB84D]">
              Initiate Engagement
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#FDFBF7] tracking-tighter leading-[1.05] text-shadow-premium mb-6">
              Let's Architect <br/> Your Future.
            </h2>
            <p className="text-zinc-400 font-normal text-sm md:text-base leading-relaxed max-w-md mb-10">
              Ready to scale your enterprise architecture, optimize cloud deployments, or integrate robust AI? Submit your requirements for a priority consultation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-4 h-4 text-[#FFB84D]" />
                </div>
                <span className="font-mono text-sm tracking-widest">hello@thevisionarys.com</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-4 h-4 text-[#FFB84D]" />
                </div>
                <span className="font-mono text-sm tracking-widest">+1 646 466 3838</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full rounded-[2.5rem] bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.8)] p-8 md:p-12 overflow-hidden">
              
              {/* Form Success Overlay */}
              <div className={`absolute inset-0 z-20 bg-[#0a0a0c]/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-700 ${formState === "success" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#FFE082] to-[#FF6D00] flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,184,77,0.3)] animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-[#0a0a0c]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 text-shadow-premium">Transmission Received</h3>
                <p className="text-zinc-400 font-mono text-xs tracking-widest">OUR ARCHITECTS WILL CONTACT YOU SHORTLY</p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                
                {/* Standard Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-[#FFB84D] transition-colors" />
                    <input required type="text" placeholder="Enterprise Name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FFB84D]/50 focus:bg-white/[0.06] transition-all" />
                  </div>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-[#FFB84D] transition-colors" />
                    <input required type="email" placeholder="Corporate Email" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FFB84D]/50 focus:bg-white/[0.06] transition-all" />
                  </div>
                </div>

                {/* Slider / Segmented Control */}
                <div className="space-y-4 mt-2">
                  <label className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">Estimated Budget (USD)</label>
                  <div className="flex flex-wrap gap-3">
                    {budgets.map((b, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveBudget(i)}
                        className={`flex-1 py-3 px-2 text-xs font-mono font-semibold rounded-xl border transition-all duration-300 ${
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

                {/* Textarea */}
                <div className="mt-2">
                  <textarea required placeholder="Project Scope & Technical Requirements..." rows={4} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FFB84D]/50 focus:bg-white/[0.06] transition-all resize-none custom-scrollbar"></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="w-full mt-4 flex items-center justify-center gap-3 py-5 rounded-2xl bg-white text-black font-bold tracking-widest uppercase text-sm hover:scale-[1.02] transition-transform duration-300 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {formState === "submitting" ? (
                    <span className="flex items-center gap-2">Processing <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" /></span>
                  ) : (
                    <span className="flex items-center gap-2">Initialize Engagement <Send className="w-4 h-4" /></span>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
