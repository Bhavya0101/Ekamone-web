import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray('.phil-reveal');
      lines.forEach((line, i) => {
        gsap.fromTo(line,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 85%',
            }
          }
        );
      });
      
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, textRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={textRef} className="relative w-full py-40 px-6 md:px-12 lg:px-24 bg-dark overflow-hidden z-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2600&auto=format&fit=crop" 
          alt="Raw materials texture" 
          className="parallax-bg w-full h-[130%] object-cover opacity-10 mix-blend-overlay -top-[15%]"
        />
        <div className="absolute inset-0 bg-dark/70"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-12 text-primary">
        <div className="phil-reveal opacity-0">
          <p className="text-xl md:text-3xl font-sans font-medium text-primary/60 max-w-2xl leading-snug">
            Most consultancies focus on: <br/>
            <span className="opacity-70">endless strategy without deployment.</span>
          </p>
        </div>
        
        <div className="phil-reveal opacity-0 mt-8 md:mt-24">
          <p className="text-4xl md:text-7xl lg:text-8xl font-sans font-bold tracking-tight max-w-5xl">
            We focus on: <br/>
            <span className="font-drama italic text-accent tracking-normal leading-none block md:inline mt-4 md:mt-0">
              Execution.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
