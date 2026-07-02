import React, { useState, useRef, useEffect } from "react";
import { Send, X, Sparkles } from "lucide-react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Welcome to The Visionarys AI Architecture Portal. Select a primary core focus below to instantly evaluate our enterprise frameworks."
    }
  ]);
  const [showChips, setShowChips] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef(null);

  const chips = [
    { text: "🤖 AI & Automation", intent: "AI & Automation" },
    { text: "🏗️ Enterprise Blueprints", intent: "Enterprise Blueprints" },
    { text: "📅 Book Assessment", intent: "Book Assessment" }
  ];

  const responses = {
    "AI & Automation": "Our AI systems harness cutting-edge machine learning and predictive modeling layers to transform backend business operations with secure low-latency metrics. We build clean, production-ready cognitive blocks tailored for large-scale enterprise suites.",
    "Enterprise Blueprints": "We map robust corporate infrastructure solutions using decoupled microservices, secure containerized clusters, and unified pipeline architectures to ensure 100% data integrity.",
    "Book Assessment": "Excellent selection. Please outline your primary technical objectives directly in the message box below, and our leadership engineers will synchronize an analytical response matrix to invite you for a custom intake assessment."
  };

  const handleChipClick = (intent) => {
    // Append user query
    setMessages((prev) => [...prev, { sender: "user", text: intent }]);
    setShowChips(false);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const reply = responses[intent] || "Thank you. Our systems have logged your inquiry.";
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 1000); // 1000ms delay inside a typing state
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue("");
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Understood. Our systems are analyzing your request. A consulting architect will follow up shortly to align on your objectives."
        }
      ]);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      
      {/* 1. Expandable Chat Panel */}
      <div 
        className={`absolute bottom-24 right-0 w-[340px] xs:w-[380px] sm:w-[420px] md:w-[480px] h-[540px] md:h-[640px] bg-[#0a0a0c]/95 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right will-change-transform ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        {/* Panel Header */}
        <div className="p-5 bg-white/[0.02] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FFE082] to-[#FF6D00] flex items-center justify-center shadow-[0_0_15px_rgba(255,184,77,0.2)]">
              <Sparkles className="w-4 h-4 text-[#0a0a0c]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[#FDFBF7] text-sm font-semibold tracking-wider font-sans">The Visionarys</span>
              <span className="text-[#25D366] text-[10px] font-mono flex items-center gap-1.5 mt-0.5 font-semibold">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                System AI Online
              </span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-zinc-500 hover:text-white transition-colors duration-200 cursor-pointer p-1 rounded-lg hover:bg-white/5"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Panel Conversation Window */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div 
              key={index}
              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div 
                className={
                  msg.sender === "user"
                    ? "bg-[#FFB84D] text-[#0a0a0c] font-medium rounded-2xl rounded-tr-none p-4 text-sm shadow-[0_4px_12px_rgba(255,184,77,0.15)] mb-4 ml-auto max-w-[85%] self-end text-left leading-relaxed"
                    : "bg-white/[0.03] border border-white/5 text-zinc-300 p-4 rounded-2xl rounded-tl-none text-sm mb-4 max-w-[85%] text-left leading-relaxed"
                }
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Predefined suggestion chips */}
          {showChips && !isTyping && (
            <div className="flex flex-col gap-2.5 mt-2 max-w-[90%] self-start">
              {chips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChipClick(chip.intent)}
                  className="w-full text-left bg-white/[0.02] hover:bg-[#FFB84D]/10 border border-white/10 hover:border-[#FFB84D]/40 text-[#FDFBF7] hover:text-[#FFB84D] text-xs font-mono py-2.5 px-4 rounded-xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(255,184,77,0.08)]"
                >
                  {chip.text}
                </button>
              ))}
            </div>
          )}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/5 rounded-2xl rounded-tl-none py-3 px-4 text-zinc-500 text-xs max-w-[80px] justify-center mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce" style={{ animationDelay: "0.4s" }} />
            </div>
          )}
          
          <div ref={chatEndRef} />
        </div>

        {/* Panel Footer Entry Form */}
        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-[#0a0a0c] flex gap-2">
          <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FFB84D]/40 transition-colors duration-300"
          />
          <button 
            type="submit"
            className="p-2.5 bg-[#FFB84D] hover:bg-[#FFE082] text-[#0a0a0c] rounded-xl transition-colors duration-300 cursor-pointer flex items-center justify-center shadow-md hover:shadow-[0_0_12px_rgba(255,184,77,0.2)]"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      {/* 2. Floating Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-b from-[#18181b] to-[#0a0a0c] border border-[#FFB84D]/40 rounded-full flex items-center justify-center cursor-pointer shadow-[0_0_30px_rgba(255,184,77,0.2)] hover:border-[#FFB84D] transition-all duration-300 transform hover:scale-105 relative group pointer-events-auto"
        aria-label="Toggle AI Assistant"
      >
        {/* Pulsing glow ring */}
        <span className="animate-ping absolute inset-0 rounded-full border border-[#FFB84D]/20 pointer-events-none" />

        {/* Concept 2 "Active Concierge" SVG robot head vector */}
        <svg viewBox="0 0 100 100" className="w-9 h-9 md:w-10 md:h-10 text-[#FFB84D] drop-shadow-[0_2px_8px_rgba(255,184,77,0.3)] transition-colors duration-300" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="42" width="6" height="16" rx="3" fill="currentColor" />
          <rect x="82" y="42" width="6" height="16" rx="3" fill="currentColor" />
          <rect x="20" y="25" width="60" height="50" rx="25" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <rect x="28" y="35" width="44" height="24" rx="12" fill="#0a0a0c" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="40" cy="47" r="3.5" fill="currentColor" />
          <circle cx="60" cy="47" r="3.5" fill="currentColor" />
          <path d="M45,63 Q50,67 55,63" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <line x1="50" y1="25" x2="50" y2="15" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="13" r="4.5" fill="currentColor" />
        </svg>
      </button>

    </div>
  );
}
