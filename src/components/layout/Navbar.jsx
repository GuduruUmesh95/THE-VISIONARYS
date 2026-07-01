import React, { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Our Process", href: "#process" },
    { label: "Solutions", href: "#solutions" },
    { label: "Services", href: "#services" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" }
  ];

  const resetTimer = () => {
    setVisible(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // While scroll position is inside the pinned HeroSection (2400px scroll zone), navbar MUST remain 100% visible
    if (window.scrollY < 2400) {
      return;
    }

    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();

    const handleActivity = () => {
      resetTimer();
    };

    const handleScrollCheck = () => {
      if (window.scrollY < 2400) {
        setVisible(true);
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      } else {
        resetTimer();
      }
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("scroll", handleScrollCheck);
    window.addEventListener("touchstart", handleActivity);
    window.addEventListener("keydown", handleActivity);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("scroll", handleScrollCheck);
      window.removeEventListener("touchstart", handleActivity);
      window.removeEventListener("keydown", handleActivity);
    };
  }, []);

  const handleAnchorClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href === "#home" ? "home" : href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-[#0a0a0c]/40 border-b border-white/5 hero-nav-global ${
        visible ? "transition-none opacity-100" : "transition-opacity duration-500 ease-out opacity-0 pointer-events-none"
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
              className="text-white font-display font-extrabold tracking-[0.2em] text-xs uppercase leading-none text-shadow-premium"
              style={{ color: "#ffffff" }}
            >
              THE VISIONARYS
            </span>
            <span className="text-zinc-400 font-mono text-[7px] tracking-[0.12em] mt-1 font-bold">
              ENVISION. INNOVATE. ACHIEVE.
            </span>
          </div>
        </a>

        {/* Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-[#FDFBF7] hover:bg-white/[0.02] hover:border-[#FFB84D]/40 hover:shadow-[0_0_12px_rgba(255,184,77,0.15)] border border-transparent backdrop-blur-md rounded-lg px-4 py-1.5 transition-all duration-300 pointer-events-auto"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Action Button */}
        <a 
          href="#contact" 
          onClick={(e) => handleAnchorClick(e, "#contact")}
          className="border-[0.5px] border-white/[0.06] hover:border-[#FFB84D]/30 bg-white/[0.03] hover:bg-[#FFB84D]/[0.05] text-[#FDFBF7] hover:text-white px-5 py-2 rounded-lg text-sm transition-all duration-300 font-sans font-semibold text-shadow-premium pointer-events-auto"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
