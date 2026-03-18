import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { clsx } from 'clsx';

gsap.registerPlugin(ScrollTrigger);

// SVG animations for cards
function GeometricMotif() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, { rotation: 360, duration: 20, repeat: -1, ease: 'none' });
  }, []);
  return (
    <svg ref={ref} viewBox="0 0 100 100" className="w-full h-full opacity-60 text-accent" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="50" cy="50" r="40" strokeDasharray="10 5" />
      <polygon points="50,15 80,80 20,80" className="opacity-50" />
      <polygon points="50,85 20,20 80,20" className="opacity-50" />
    </svg>
  );
}

function ScanningLaser() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, { y: 100, duration: 2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }, []);
  return (
    <div className="w-full h-full relative border border-primary/20 bg-dark rounded overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 opacity-20">
        {Array.from({length: 100}).map((_, i) => (
          <div key={i} className="border-[0.5px] border-primary/40"></div>
        ))}
      </div>
      <div ref={ref} className="absolute top-[-50px] w-full h-[50px] bg-gradient-to-b from-transparent to-accent/80 border-b-2 border-accent shadow-[0_5px_15px_rgba(230,59,46,0.6)]"></div>
    </div>
  );
}

function PulsingWaveform() {
  const pathRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 2,
        repeat: -1,
        ease: 'power1.inOut',
        yoyo: true
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full text-accent" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path 
        ref={pathRef}
        d="M10 50 H60 L75 20 L95 80 L115 10 L135 90 L150 50 H190" 
        strokeDasharray="400" 
        strokeDashoffset="400"
      />
    </svg>
  );
}

const steps = [
  {
    num: "01",
    title: "Audit Sequences",
    desc: "We dissect your existing outreach: sequences, targeting, copy, and timing. We find the single leverage point where your pipeline is leaking.",
    Graphic: GeometricMotif
  },
  {
    num: "02",
    title: "Deploy Outreach System",
    desc: "We build and ship an AI-powered outbound system into your workflow. Not a slide deck — a working engine that sends, follows up, and books calls.",
    Graphic: ScanningLaser
  },
  {
    num: "03",
    title: "Scale Pipeline",
    desc: "We measure against booked calls and qualified pipeline. Continuous iteration until your outreach runs without founder-dependency.",
    Graphic: PulsingWaveform
  }
];

export default function Protocol() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (i === cardsRef.current.length - 1) return; // skip last card

        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          endTrigger: containerRef.current,
          end: 'bottom bottom',
          animation: gsap.to(card, {
            scale: 0.9 - (cardsRef.current.length - i) * 0.02,
            opacity: 0.2,
            filter: 'blur(10px)',
            ease: "none"
          }),
          scrub: true,
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative bg-background pt-24 pb-24 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-4">The Protocol</h2>
        <p className="font-sans font-bold text-4xl md:text-5xl max-w-2xl leading-tight text-dark">
          How we ship your outreach system.
        </p>
      </div>

      <div className="flex flex-col relative w-full items-center justify-start flex-1 min-h-[300vh]">
        {steps.map((step, i) => (
          <div 
            key={i} 
            ref={el => cardsRef.current[i] = el}
            className="card-stack top-0 w-full h-[100dvh] flex items-center justify-center sticky px-6 md:px-12 lg:px-24 py-12"
          >
            <div className="w-full max-w-5xl h-[80vh] bg-primary text-white rounded-[2rem] border border-white/10 p-8 md:p-16 flex flex-col md:flex-row shadow-[0_-10px_40px_rgba(0,0,0,0.3)] gap-12 md:gap-24 items-center justify-between">
              
              <div className="flex-1 flex flex-col justify-center max-w-lg relative z-10 w-full">
                <div className="font-mono text-5xl md:text-7xl opacity-20 font-bold mb-6 block border-b border-white/20 pb-4">{step.num}</div>
                <h3 className="font-sans text-4xl md:text-6xl font-bold tracking-tight mb-6">{step.title}</h3>
                <p className="font-mono text-lg text-white/60 leading-relaxed">{step.desc}</p>
              </div>

              <div className="hidden md:flex flex-1 w-full max-w-md aspect-square rounded-2xl bg-white/5 border border-white/5 p-12 items-center justify-center">
                <step.Graphic />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
