import React from "react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
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
    <div className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none select-none z-50 p-6 md:p-12 overflow-hidden">
      
      {/* 1. Header Navigation Overlay (class: hero-nav) */}
      <header className="hero-nav w-full flex items-center justify-between pointer-events-auto transition-opacity duration-300">
        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src="/logo-transparent-png-mp8qVyLKkzCpX33v.avif" 
            alt="The Visionarys Logo" 
            className="w-10 h-10 object-contain group-hover:rotate-6 transition-transform duration-300"
          />
          <span className="text-white font-display font-bold tracking-[0.2em] text-sm uppercase">
            THE VISIONARYS
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-secondary hover:text-white font-sans text-xs tracking-wider uppercase transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-accent-glow after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <a 
          href="#contact" 
          className="pointer-events-auto border border-white/10 hover:border-accent-glow bg-white/[0.03] hover:bg-accent-glow/[0.05] text-white hover:text-accent-light px-5 py-2.5 rounded-sm text-xs font-mono tracking-widest uppercase transition-all duration-300"
        >
          Get in Touch
        </a>
      </header>

      {/* 2. Main Asymmetric Hero Content Stack */}
      <div className="w-full flex-grow flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 mt-16 md:mt-24 lg:mt-0">
        
        {/* Headline (class: hero-headline) */}
        <div className="hero-headline w-full lg:w-[60%] text-left pointer-events-auto transition-transform duration-300">
          <span className="inline-block text-[10px] font-mono tracking-[0.3em] text-accent-light border border-accent-glow/20 bg-accent-glow/5 px-4 py-1.5 rounded-sm mb-6 uppercase">
            Consulting & Deep Tech Integration
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
            Transforming <br className="hidden md:inline" />
            Businesses with <br />
            <span className="bg-gradient-to-r from-white via-accent-light to-accent-glow bg-clip-text text-transparent">
              AI & Digital Innovation.
            </span>
          </h1>
        </div>

        {/* Subhead (class: hero-subhead) */}
        <div className="hero-subhead w-full lg:w-[35%] flex justify-start lg:justify-end pointer-events-auto transition-transform duration-300">
          <div className="max-w-md lg:text-right border-l-2 lg:border-l-0 lg:border-r-2 border-accent-glow/40 pl-6 lg:pl-0 lg:pr-6 py-2">
            <p className="text-secondary text-sm md:text-base leading-relaxed font-sans font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              AI consulting, DevOps, Cybersecurity and Digital Transformation for Enterprises and Financial Institutions.
            </p>
          </div>
        </div>

      </div>

      {/* 3. Stage 3 Cinematic Bloom Overlay (class: hero-bloom-text, initially opacity-0) */}
      <div className="hero-bloom-text absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-6 opacity-0">
        <div className="bg-transparent flex flex-col items-center max-w-4xl">
          <span 
            className="text-xs font-mono tracking-[0.4em] mb-4 uppercase font-bold"
            style={{ color: "#ffae5c" }}
          >
            Empowering Tomorrow
          </span>
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-snug drop-shadow-[0_4px_16px_rgba(0,0,0,0.98)]"
            style={{ color: "#ffffff" }}
          >
            "Innovative Solutions for a Modern World"
          </h2>
          <div className="w-20 h-[1.5px] bg-accent-glow my-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
          <p 
            className="text-sm md:text-lg max-w-2xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.98)] font-medium"
            style={{ color: "#e5e5e7" }}
          >
            Bridging the gap between complex business challenges and cutting-edge technical execution.
          </p>
        </div>
      </div>

      {/* 4. Footer Overlay (class: hero-footer) */}
      <footer className="hero-footer w-full flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto transition-opacity duration-300">
        {/* Status Line */}
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping" />
          <span className="text-[9px] font-mono tracking-[0.2em] text-secondary">
            SYSTEM STATE: <span className="text-white">ACTIVE</span> // ID: <span className="text-accent-light">2026_VISION</span>
          </span>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-secondary">
            Scroll to Explore
          </span>
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white/5 bg-white/[0.02] text-accent-glow animate-bounce">
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* Location Stamp */}
        <div className="text-[9px] font-mono tracking-[0.2em] text-secondary">
          LONDON // UK — 2026
        </div>
      </footer>

    </div>
  );
}
