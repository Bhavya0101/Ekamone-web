import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const testimonials = [
  {
    quote: "Ekamone didn't hand us a slide deck. They shipped a working internal retrieval system that cut our onboarding time by 40%.",
    name: "Sarah Jenkins",
    role: "VP of Operations, Synthetix"
  },
  {
    quote: "There is so much noise in the AI space. Ekamone found the exact signal we needed and integrated it into our legacy pipeline within weeks.",
    name: "Marcus Chen",
    role: "CTO, Vanguard Logistics"
  },
  {
    quote: "Deployment over theory. They identified our single workflow bottleneck and replaced it with a custom LLM router that is undeniable.",
    name: "Elena Rostova",
    role: "Head of Product, Nexus Health"
  },
  {
    quote: "We brought them in for strategy. They left us with a shipped system that generated an immediate 24% boost in ROI.",
    name: "David Althaus",
    role: "CEO, DataForge"
  }
];

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = document.querySelector('.marquee-track');
      
      gsap.to(marquee, {
        xPercent: -50,
        repeat: -1,
        duration: 40,
        ease: "none",
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={containerRef} className="pt-24 pb-48 bg-primary text-dark overflow-hidden z-20 relative border-t border-dark/10">
      <div className="px-6 md:px-12 lg:px-24 mb-16 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-4">Signal Confirmations</h2>
          <p className="font-sans font-bold text-4xl md:text-5xl max-w-2xl leading-tight">
            Systems deployed.<br/>Impact verified.
          </p>
        </div>
      </div>

      <div className="relative flex w-full flex-nowrap overflow-hidden">
        {/* We render the list twice to create a seamless infinite loop */}
        <div className="marquee-track flex gap-6 px-3 w-max">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div 
              key={idx} 
              className="w-[320px] md:w-[450px] flex-shrink-0 bg-background/50 border border-dark/10 p-8 md:p-10 rounded-[2rem] shadow-sm flex flex-col justify-between"
            >
              <p className="font-serif italic text-xl md:text-2xl leading-relaxed mb-10 text-dark/90">"{t.quote}"</p>
              <div className="border-t border-dark/10 pt-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-dark/10 flex items-center justify-center font-mono text-xs font-bold text-dark/50 uppercase">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-sans font-bold text-base text-dark">{t.name}</p>
                  <p className="font-mono text-[10px] text-accent uppercase tracking-wider mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Edge fade gradients for seamless look */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
