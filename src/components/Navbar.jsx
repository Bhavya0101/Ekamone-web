import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <nav
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 w-full max-w-5xl border border-transparent",
          scrolled 
            ? "bg-background/80 backdrop-blur-xl text-primary border-border shadow-md" 
            : "bg-transparent text-white"
        )}
      >
        <div className="font-sans font-bold text-xl tracking-tight">Ekamone</div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          <a href="#philosophy" className="hover:-translate-y-[1px] transition-transform">Philosophy</a>
          <a href="#systems" className="hover:-translate-y-[1px] transition-transform">Systems</a>
          <a href="#protocol" className="hover:-translate-y-[1px] transition-transform">Protocol</a>
          <a href="#diagnostics" className="hover:-translate-y-[1px] transition-transform">Diagnostics</a>
          <a href="#getstarted" className="hover:-translate-y-[1px] transition-transform">Get Started</a>
        </div>

        <a 
          href="#getstarted" 
          className={cn(
            "magnetic-btn px-5 py-2 text-sm",
            scrolled ? "bg-accent text-white" : "bg-white text-primary hover:text-white"
          )}
        >
          Get Started
        </a>
      </nav>
    </div>
  );
}
