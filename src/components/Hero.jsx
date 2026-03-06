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
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[100dvh] flex items-end pb-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="Brutalist concrete architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl text-primary">
        <h1 className="flex flex-col gap-2">
          <div className="hero-el overflow-hidden">
            <span className="block text-2xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight uppercase">
              Engineer the
            </span>
          </div>
          <div className="hero-el overflow-hidden">
            <span className="block text-6xl md:text-8xl lg:text-9xl font-drama italic text-primary leading-none mt-[-0.1em]">
              Impact.
            </span>
          </div>
        </h1>
        
        <div className="hero-el mt-8 md:mt-12 max-w-xl">
          <p className="text-lg md:text-xl font-mono text-primary/80 leading-relaxed">
             We integrate AI into your workflow, cutting through complexity to find the single leverage point that creates real business value.
          </p>
        </div>

        <div className="hero-el mt-10">
          <a href="https://calendly.com/whybhavya/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-magnetic inline-flex w-fit bg-accent text-white px-8 py-4 rounded-full text-lg font-bold items-center gap-3 overflow-hidden relative group">
            <span className="relative z-10">Initialize Discovery</span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
            <span className="relative z-10 w-2 h-2 rounded-full bg-dark hidden group-hover:block transition-all"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
