import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, Clock, UserX, TrendingDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  {
    icon: Clock,
    stat: "68%",
    label: "of recruiting founders spend 20+ hrs/week on manual outbound",
    detail: "Cold emails, follow-ups, LinkedIn touches — all done by hand. Your time is the bottleneck."
  },
  {
    icon: TrendingDown,
    stat: "3%",
    label: "average reply rate on unoptimized outreach sequences",
    detail: "Generic templates, wrong timing, no personalization. Volume without signal is just noise."
  },
  {
    icon: UserX,
    stat: "0",
    label: "systems in place when the founder is the entire outbound engine",
    detail: "If you stop sending, pipeline stops. That's not a business — that's a job."
  },
  {
    icon: AlertTriangle,
    stat: "5×",
    label: "more expensive to hire another SDR than to deploy an outreach system",
    detail: "Headcount scales linearly. Systems scale exponentially."
  }
];

export default function PainPoints() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pain-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="pt-24 pb-32 bg-background text-dark overflow-hidden z-20 relative border-t border-dark/5">
      <div className="px-6 md:px-12 lg:px-24 mb-16 max-w-7xl mx-auto">
        <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-4">Signal Diagnostics</h2>
        <p className="font-sans font-bold text-4xl md:text-5xl max-w-2xl leading-tight">
          The problem isn't effort.<br/>It's <span className="font-drama italic">infrastructure.</span>
        </p>
      </div>

      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {painPoints.map((point, idx) => (
          <div
            key={idx}
            className="pain-card bg-white border border-dark/10 rounded-[2rem] p-8 md:p-10 flex flex-col gap-6 group hover:border-accent/30 transition-colors duration-500 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-dark/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
                  <point.icon size={20} className="text-dark/40 group-hover:text-accent transition-colors duration-500" />
                </div>
                <span className="text-5xl md:text-6xl font-sans font-bold tracking-tight text-dark">{point.stat}</span>
              </div>
            </div>
            <p className="font-sans font-semibold text-lg text-dark/90 leading-snug">{point.label}</p>
            <p className="font-mono text-sm text-dark/40 leading-relaxed">{point.detail}</p>
          </div>
        ))}
      </div>

      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <a href="https://calendly.com/whybhavya/discovery-call" target="_blank" rel="noopener noreferrer" className="btn-magnetic inline-flex w-fit bg-accent text-primary px-8 py-4 rounded-full text-lg font-bold items-center gap-3 overflow-hidden relative group">
          <span className="relative z-10">Stop Being the Bottleneck</span>
          <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"></div>
          <span className="relative z-10 w-2 h-2 rounded-full bg-primary hidden group-hover:block transition-all"></span>
        </a>
        <span className="font-mono text-sm text-dark/40">Book a strategy call — we'll audit your sequences for free.</span>
      </div>
    </section>
  );
}
