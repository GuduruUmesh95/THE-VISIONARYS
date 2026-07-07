import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Process", href: "#process" },
    { label: "Solutions", href: "#solutions" },
    { label: "Services", href: "#services" },
    { label: "Insights", href: "#insights" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="w-full bg-[#0a0a0c] border-t-[0.5px] border-white/[0.06] pt-20 pb-12 relative z-10 text-secondary">
      {/* Subtle overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_40px] pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b-[0.5px] border-white/[0.06]">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-6">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-3 group"
            >
              <img 
                src="/assets/logos/logo-new.png" 
                alt="The Visionarys Logo" 
                className="w-10 h-10 object-contain group-hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="flex flex-col text-left">
                <span 
                  className="text-white font-display font-semibold tracking-wide text-xl leading-none"
                >
                  The Visionarys
                </span>
                <span className="text-zinc-400 font-mono text-[8px] tracking-[0.12em] mt-1 font-bold">
                  ENVISION. INNOVATE. ACHIEVE.
                </span>
              </div>
            </a>
            <p className="text-xs text-zinc-400 font-normal leading-relaxed max-w-md">
              We specialize in delivering end-to-end consulting and implementation services across industries, helping organizations tackle complex challenges like digital transformation, compliance, and risk management. Our expertise lies in bridging the gap between business needs and technical solutions, ensuring seamless integration and adoption of cutting-edge tools that drive measurable results.
            </p>
          </div>

          {/* Navigation Sitemap Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white">
              Sitemap
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        const targetId = link.href === "#home" ? "home" : link.href.substring(1);
                        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white">
              Corporate Office
            </h4>
            <div className="text-xs space-y-2 leading-relaxed">
              <p className="text-white font-medium">The Visionarys Ltd</p>
              <p>Registered Office: London, United Kingdom</p>
              <p className="pt-2">
                <span className="text-white/85 font-mono text-[10px] block">DIRECT LINK</span>
                <a href="https://wa.me/442079460192" target="_blank" rel="noopener noreferrer" className="hover:underline text-white font-mono">+44 20 7946 0192 (WhatsApp)</a>
              </p>
            </div>
          </div>

        </div>

        {/* Footer bottom details */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright statement */}
          <div className="text-xs font-mono text-[#8e96a8]/50">
            &copy; 2026 The Visionarys Ltd. All rights reserved.
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61561084091979" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/thevisionarys.uk?igsh=enpmcDJ0a24wamUw&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/company/103359779/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          {/* Privacy Policy */}
          <div className="flex gap-4 text-xs font-mono">
            <a 
              href="https://www.thevisionarys.com/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
