import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const container = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get mouse position relative to container
      if (container.current) {
        const rect = container.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={container} 
      className="relative min-h-[100dvh] w-full bg-primary overflow-hidden flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-24"
    >
      {/* Interactive Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Golden Cursor Glow */}
      <div 
        className="absolute z-0 pointer-events-none rounded-full blur-[100px] transition-transform duration-75 ease-out opacity-40 hover:opacity-60"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)',
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          left: 0,
          top: 0
        }}
      />

      {/* Fade out grid at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start text-white pt-32">
        <p className="hero-anim text-[10px] md:text-xs font-semibold tracking-wider uppercase mb-6 opacity-90 border border-white/20 rounded-full px-4 py-2 bg-white/5 backdrop-blur-sm">
          FOR VC, PE, FAMILY OFFICES & HOME OFFICES DROWNING IN WORKFLOW SLUDGE
        </p>

        <h1 className="flex flex-col mb-6 leading-[0.9] tracking-tight">
          <span className="hero-anim font-sans font-bold text-5xl md:text-7xl lg:text-8xl">
            SYSTEMATIZE THE
          </span>
          <span className="hero-anim font-drama italic text-7xl md:text-9xl lg:text-[11rem] text-accent mt-2 lg:-mt-4">
            Deal Flow.
          </span>
        </h1>

        <p className="hero-anim text-xl md:text-2xl font-sans font-semibold mb-6 text-white max-w-2xl">
          AI-powered workflow systems for capital teams.
        </p>

        <p className="hero-anim max-w-2xl text-lg font-sans mb-12 text-white/70 leading-relaxed font-light">
          From pitch deck triage to founder research, CRM updates, routing, follow-ups, and meeting booking — we build the stuff your analysts should not be doing by hand.
        </p>

        <div className="hero-anim flex flex-col sm:flex-row items-center gap-6">
          <button className="magnetic-btn bg-accent text-white px-8 py-4 w-full sm:w-auto text-lg font-medium hover:bg-white hover:text-primary transition-colors">
            Initialize Strategy
          </button>
        </div>
      </div>
    </section>
  );
}
