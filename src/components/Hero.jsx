import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-el',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, containerRef);

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      containerRef.current.style.setProperty('--mouse-x', `${x}%`);
      containerRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[100dvh] flex items-end pb-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-[#0F0E0C]">
        {/* Interactive spotlight effect - Increased opacity and brightness */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-screen transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), #C9A84C 0%, transparent 45%)`,
          }}
        ></div>
        
        {/* Subtle grid texture - More visible gold lines */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `linear-gradient(#C9A84C 0.5px, transparent 0.5px), linear-gradient(90deg, #C9A84C 0.5px, transparent 0.5px)`,
            backgroundSize: '80px 80px'
          }}
        ></div>

        {/* Depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0F0E0C] via-transparent to-[#C9A84C]/5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0C] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl text-white">
        <div className="hero-el mb-6">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <span className="font-mono text-xs text-white/70 uppercase tracking-widest">For recruiting agencies doing $500K–$5M</span>
          </span>
        </div>

        <h1 className="flex flex-col gap-2">
          <div className="hero-el overflow-hidden">
            <span className="block text-2xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight uppercase">
              Systematize the
            </span>
          </div>
          <div className="hero-el overflow-hidden">
            <span className="block text-6xl md:text-8xl lg:text-9xl font-drama italic text-accent leading-none mt-[-0.1em]">
              Outbound.
            </span>
          </div>
        </h1>
        
        <div className="hero-el mt-8 md:mt-12 max-w-xl">
          <p className="text-xl md:text-2xl font-mono text-white/80 leading-relaxed">
            AI-powered outreach systems for boutique recruiting agencies.
          </p>
          <p className="text-lg md:text-xl font-mono text-white/50 mt-2">
            More booked calls. Zero added headcount.
          </p>
        </div>

        <div className="hero-el mt-10">
          <a href="https://calendly.com/whybhavya/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-magnetic inline-flex w-fit bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold items-center gap-3 overflow-hidden relative group">
            <span className="relative z-10">Initialize Strategy</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
            <span className="relative z-10 w-2 h-2 rounded-full bg-primary hidden group-hover:block transition-all"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
