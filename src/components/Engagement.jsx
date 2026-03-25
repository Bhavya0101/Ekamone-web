import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Engagement() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-anim', 
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, 
          stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: container.current, start: 'top 80%' }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="getstarted" ref={container} className="py-32 lg:py-48 px-6 text-center bg-primary text-white border-b border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="cta-anim font-sans font-bold text-5xl md:text-7xl tracking-tight mb-8">
          Stop Being the Bottleneck
        </h2>
        
        <p className="cta-anim text-lg md:text-xl font-light text-white/70 mb-12 max-w-xl leading-relaxed">
          Book a strategy call and we’ll look at your workflow, show you where time is leaking, and tell you what should actually be automated.
        </p>
        
        <a href="https://calendly.com/whybhavya/discovery-call" target="_blank" rel="noopener noreferrer" className="cta-anim magnetic-btn bg-white text-primary px-10 py-5 text-xl font-bold tracking-wide hover:bg-accent hover:text-white transition-colors duration-300">
          Book a Workflow Teardown
        </a>
      </div>
    </section>
  );
}
