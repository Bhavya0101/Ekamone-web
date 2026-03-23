import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SystemsCapability() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sys-anim', 
        { y: 40, opacity: 0 },
        { 
          y: 0, opacity: 1, duration: 1, 
          stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: container.current, start: 'top 75%' }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-24 lg:py-32 px-6 lg:px-24 bg-background max-w-7xl mx-auto border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        <div className="flex flex-col gap-6">
          <h2 className="sys-anim font-sans font-bold text-4xl lg:text-5xl leading-tight text-primary">
            A real example, because vague AI promises are boring.
          </h2>
          <p className="sys-anim text-lg md:text-xl font-medium text-textDark/80 pr-4">
            For one VC team, we built a system that starts working the second a pitch deck lands in their inbox.
          </p>
          <div className="sys-anim mt-8 p-6 bg-primary/5 border border-primary/10 rounded-2xl">
            <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-widest">It quietly:</p>
            <ul className="space-y-3 font-sans text-textDark">
              <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> watches inbound pitch deck emails</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> extracts the deck and submission context</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> scores the opportunity against the fund’s own criteria</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> pushes qualified deals into the CRM</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> routes it to the right person internally</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> emails the founder if it clears the bar</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> books the meeting</li>
              <li className="flex items-start gap-3"><span className="text-accent mt-1">✓</span> researches the founder and company in the background</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 justify-center">
          <p className="sys-anim text-lg text-textDark leading-relaxed">
            So instead of analysts wasting half their week opening PDFs, copying notes, updating CRM fields, and figuring out who should reply, the system handles the grind.
          </p>

          <div className="sys-anim pl-6 border-l-2 border-accent">
            <p className="font-semibold text-primary text-lg mb-3">The team gets:</p>
            <ul className="space-y-2 text-textDark/80">
              <li>- faster screening</li>
              <li>- cleaner pipeline movement</li>
              <li>- better context before calls</li>
              <li>- less repetitive nonsense</li>
              <li>- more time for actual judgment</li>
            </ul>
          </div>

          <p className="sys-anim text-xl font-bold text-primary mt-4">
            That’s our thing.<br/>
            <span className="font-medium text-lg text-textDark/80 mt-2 block">
              We build systems that take work your team hates doing and make it run properly.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
