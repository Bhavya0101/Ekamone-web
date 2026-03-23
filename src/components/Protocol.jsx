import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// SVG Animations based on the prompt's requirements
function MotifOne() {
  return (
    <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3">
      <circle cx="50" cy="50" r="40" strokeDasharray="4 4" />
      <polygon points="50,15 85,75 15,75" />
      <polygon points="50,85 15,25 85,25" />
    </svg>
  );
}

function MotifTwo() {
  return (
    <div className="relative w-full h-full border border-primary/10 overflow-hidden bg-background">
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(13,13,18,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(13,13,18,0.05) 1px, transparent 1px)', backgroundSize: '10% 10%' }} />
      {/* Laser Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-accent blur-[1px] animate-[slideDown_3s_ease-in-out_infinite_alternate] shadow-[0_0_15px_#C9A84C]" />
      <style>{`@keyframes slideDown { 0% { top: 0%; } 100% { top: 100%; } }`}</style>
    </div>
  );
}

function MotifThree() {
  return (
    <svg className="w-full h-full" viewBox="0 0 200 100" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path className="animate-[dash_3s_linear_infinite]" d="M 0 50 L 40 50 L 50 20 L 70 80 L 80 50 L 120 50 L 130 30 L 150 70 L 160 50 L 200 50" strokeDasharray="200" strokeDashoffset="200" />
      <style>{`@keyframes dash { to { stroke-dashoffset: 0; } }`}</style>
    </svg>
  );
}

function MotifFour() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary text-white font-mono text-sm leading-tight p-4 overflow-hidden relative border border-primary/20">
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30">
        <div className="w-16 h-16 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <div className="mt-4 tracking-widest uppercase text-accent">Scaling</div>
      </div>
    </div>
  );
}

export default function Protocol() {
  const container = useRef(null);

  const steps = [
    { num: '01', title: 'Audit Workflow', copy: 'We rip apart the current process. Where does work come in? Who touches it? What gets delayed? What gets forgotten? What should already be automated but somehow still lives in someone’s inbox?', Component: MotifOne },
    { num: '02', title: 'Map Logic', copy: 'We map the actual decision flow. What counts as qualified? What gets routed where? When should research happen? When should CRM update? When should outreach trigger? We build around how your team actually works, not how some generic SaaS tool thinks you should work.', Component: MotifTwo },
    { num: '03', title: 'Deploy System', copy: 'Then we build it. A real working system inside your workflow — not a deck, not a prototype, not a cute AI experiment that breaks the second volume hits.', Component: MotifThree },
    { num: '04', title: 'Tighten & Scale', copy: 'Once it’s live, we refine the logic, clean edge cases, and make sure the system keeps doing useful work instead of becoming another expensive tab nobody opens.', Component: MotifFour }
  ];

  useEffect(() => {
    if (window.innerWidth >= 768) {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray('.stack-card');
        
        cards.forEach((card, i) => {
          if (i !== cards.length - 1) { // Skip last
            gsap.to(card, {
              scale: 0.9,
              opacity: 0.5,
              filter: 'blur(20px)',
              duration: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top 40px',
                end: 'bottom top',
                scrub: true,
                pin: true,
                pinSpacing: false
              }
            });
          } else {
             ScrollTrigger.create({
               trigger: card,
               start: 'top 40px',
               pin: true,
               pinSpacing: true,
             });
          }
        });
      }, container);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="protocol" ref={container} className="bg-primary pb-32">
      <div className="py-24 px-6 lg:px-24 max-w-7xl mx-auto text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">THE PROTOCOL</p>
        <h2 className="font-sans font-bold text-4xl md:text-5xl text-white tracking-tight">How we ship your workflow system.</h2>
      </div>

      <div className="w-full relative px-6 max-w-6xl mx-auto pb-[20vh]">
        {steps.map((step, idx) => (
          <div 
            key={idx} 
            className="stack-card h-[75vh] md:h-[60vh] lg:h-[70vh] w-full flex items-center justify-center sticky top-20 bg-background rounded-[3rem] shadow-2xl overflow-hidden border border-border mt-8 p-10 lg:p-16"
          >
            <div className="flex flex-col md:flex-row gap-12 w-full h-full">
              
              {/* Text Side */}
              <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
                <div className="text-accent font-mono text-xl sm:text-2xl font-bold mb-6 tracking-widest">
                  STEP _{step.num}
                </div>
                <h3 className="text-primary font-sans font-bold text-3xl md:text-5xl mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-textDark font-medium text-lg leading-relaxed max-w-xl">
                  {step.copy}
                </p>
              </div>

              {/* Graphic/Animation Side */}
              <div className="w-full md:w-[40%] flex items-center justify-center order-1 md:order-2">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-white shadow-inner flex items-center justify-center p-6 border border-border text-primary/30">
                  <step.Component />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
