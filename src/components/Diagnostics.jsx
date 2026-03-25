import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Diagnostics() {
  const container = useRef(null);

  const stats = [
    { num: '20+ hrs', line: 'a week lost to manual review, routing, note-taking, follow-ups, and CRM housekeeping on lean teams', sub: 'Smart people doing clerical work is not a strategy.' },
    { num: 'Too many', line: 'good opportunities get slowed down by human bottlenecks that shouldn’t exist in the first place', sub: 'Better routing. Better prep. Better conversations. Less sludge.' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.diag-anim', 
        { y: 30, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 0.8, 
          stagger: 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: container.current, start: 'top 80%' }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section id="diagnostics" ref={container} className="py-32 px-6 lg:px-24 bg-background max-w-7xl mx-auto">
      <div className="mb-24 text-center">
        <p className="diag-anim text-sm font-semibold tracking-widest uppercase text-textDark/40 mb-4">SIGNAL DIAGNOSTICS</p>
        <h2 className="diag-anim font-drama italic text-4xl md:text-5xl lg:text-6xl text-primary max-w-3xl mx-auto leading-tight">
          The problem usually isn’t your team.<br/>
          <span className="font-sans font-bold not-italic">It’s the workflow.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
        {stats.map((stat, idx) => (
          <div key={idx} className="diag-anim flex flex-col gap-4 p-8 rounded-3xl bg-white border border-border shadow-sm">
            <h3 className="font-sans font-bold text-4xl lg:text-5xl text-accent tracking-tighter">
              {stat.num}
            </h3>
            <p className="font-medium text-lg lg:text-xl text-primary leading-snug">
              {stat.line}
            </p>
            <p className="text-sm text-textDark/60 font-mono mt-2 pt-4 border-t border-border">
              &gt; {stat.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
