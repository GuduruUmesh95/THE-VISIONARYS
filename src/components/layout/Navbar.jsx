import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const timeoutRef = useRef(null);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Solutions", href: "#solutions" },
    { label: "Partnership", href: "#partnerships" },
    { label: "Our Process", href: "#process" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" }
  ];

  const resetHideTimer = () => {
    setIsVisible(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Only auto-hide after 4 seconds if we are scrolled down away from the top header
    if (window.scrollY > 60) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, 4000); // 4 seconds visibility duration
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY > 60;
      setIsAtTop(!scrolledDown);
      resetHideTimer();
    };

    const handleMouseMove = () => {
      resetHideTimer();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initial active trigger
    resetHideTimer();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isAtTop]);

  const handleAnchorClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-[#0a0a0c]/40 border-b border-white/5 transition-all duration-500 ease-in-out transform ${
        isVisible || isAtTop 
          ? 'translate-y-0 opacity-100' 
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="h-14 md:h-16 w-full flex items-center justify-between px-6 md:px-12 text-base md:text-lg font-medium tracking-tight">
        
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleAnchorClick(e, "#home")}
          className="flex items-center gap-3 group pointer-events-auto"
        >
          <img 
            src="/logo-new.png" 
            alt="The Visionarys Logo" 
            className="w-8 h-8 object-contain group-hover:scale-[1.03] transition-transform duration-300"
          />
          <div className="flex flex-col text-left">
            <span 
              className="text-white font-display font-semibold tracking-wide text-lg md:text-xl leading-none"
            >
              The Visionarys
            </span>
            <span className="text-zinc-400 font-mono text-[7px] tracking-[0.12em] mt-1 font-bold">
              ENVISION. INNOVATE. ACHIEVE.
            </span>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-x-4">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-[#FDFBF7] text-[13px] font-medium tracking-wide border border-transparent backdrop-blur-md rounded-lg px-3 py-1.5 hover:text-[#FFB84D] hover:scale-[1.01] hover:border-[#FFB84D]/20 hover:bg-white/[0.02] transition-all duration-300 pointer-events-auto"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Action Button */}
        <a 
          href="#contact" 
          onClick={(e) => handleAnchorClick(e, "#contact")}
          className="text-sm font-medium tracking-wide border border-[#FFB84D]/40 text-[#FFB84D] bg-[#FFB84D]/5 px-5 py-2.5 rounded-lg transition-all duration-300 hover:bg-[#FFB84D]/10 hover:border-[#FFB84D] hover:shadow-[0_0_15px_rgba(255,184,77,0.25)] hover:scale-[1.02] active:scale-[0.98] text-shadow-premium pointer-events-auto"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
