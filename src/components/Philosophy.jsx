import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Philosophy() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.phil-anim', 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, 
          stagger: 0.2, ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 70%',
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={container} className="relative py-32 lg:py-48 px-6 lg:px-24 bg-primary text-white overflow-hidden w-full flex items-center justify-center">
      {/* Parallax Organic Texture - low opacity background */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover bg-fixed opacity-20 filter grayscale blend-luminosity"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80&w=2600&ixlib=rb-4.0.3")' }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16">
        <h2 className="phil-anim font-sans font-normal text-2xl lg:text-3xl leading-relaxed text-white/50 max-w-3xl">
          Most investment teams focus on: manual triage, analyst admin work, and hoping nobody forgets the follow up.
        </h2>

        <h3 className="phil-anim font-sans font-bold text-4xl lg:text-5xl leading-tight">
          We focus on:<br/>
          <span className="font-drama italic text-6xl lg:text-8xl text-accent mt-4 block">
            Workflow Systems.
          </span>
        </h3>
      </div>
    </section>
  );
}
