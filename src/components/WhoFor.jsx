import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function WhoFor() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.whofor-anim', 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, opacity: 1, duration: 1, 
          stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 80%',
          }
        }
      );
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="py-32 px-6 lg:px-24 bg-background max-w-7xl mx-auto border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        <h2 className="whofor-anim font-sans font-bold text-4xl lg:text-5xl leading-tight text-primary max-w-lg tracking-tight">
          For firms doing real work with a website that hasn’t caught up yet.
        </h2>

        <div className="space-y-8 flex-1">
          <p className="whofor-anim text-lg md:text-xl font-medium text-textDark/80">
            You might be:
          </p>
          
          <ul className="whofor-anim space-y-4">
            {['raising your next fund', 'launching a new vehicle', 'building a home / family office presence', 'sitting on a site that technically exists, but does absolutely nothing for trust'].map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start border-b border-border pb-4 last:border-0">
                <span className="text-accent font-mono text-sm mt-1">{(idx + 1).toString().padStart(2, '0')}</span>
                <span className="text-primary font-sans text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <p className="whofor-anim text-lg text-textDark pt-8 border-t border-border">
            That’s where we come in.
            <br/><br/>
            We build for people who move real money and don’t want to look like they hired a random startup agency that discovered dark mode last week.
          </p>
        </div>
        
      </div>
    </section>
  );
}
