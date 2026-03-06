import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <div 
        className={clsx(
          "flex items-center justify-between px-6 py-4 rounded-full transition-all duration-500",
          isScrolled 
            ? "bg-background/80 backdrop-blur-xl border border-dark/10 shadow-lg" 
            : "bg-transparent"
        )}
      >
        <div className={clsx(
          "text-xl font-bold tracking-tight transition-colors duration-500",
          isScrolled ? "text-dark" : "text-primary"
        )}>
          Ekamone
        </div>
        
        <div className={clsx(
          "hidden md:flex gap-8 text-sm font-medium transition-colors duration-500",
          isScrolled ? "text-dark/70" : "text-primary/70"
        )}>
          <a href="#philosophy" className={clsx("link-lift hover:", isScrolled ? "text-dark" : "text-primary")}>Philosophy</a>
          <a href="#features" className={clsx("link-lift hover:", isScrolled ? "text-dark" : "text-primary")}>Systems</a>
          <a href="#protocol" className={clsx("link-lift hover:", isScrolled ? "text-dark" : "text-primary")}>Protocol</a>
          <a href="#testimonials" className={clsx("link-lift hover:", isScrolled ? "text-dark" : "text-primary")}>Confirmations</a>
        </div>

        <a href="https://calendly.com/whybhavya/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-magnetic flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-bold overflow-hidden relative group">
          <span className="relative z-10 flex items-center gap-2">
            Book Call <ArrowRight size={16} />
          </span>
          <div className="absolute inset-0 bg-dark transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
        </a>
      </div>
    </nav>
  );
}
