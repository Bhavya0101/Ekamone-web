import React, { useEffect, useState, useRef } from 'react';
import { Terminal, Database, Activity, MousePointer2 } from 'lucide-react';
import { clsx } from 'clsx';
import gsap from 'gsap';

// --- Card 1: Diagnostic Shuffler --- //
function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, title: 'Step 1: Audit', value: 'Analyzing Sequences' },
    { id: 2, title: 'Step 2: Map', value: 'Identifying Leverage' },
    { id: 3, title: 'Step 3: Solve', value: 'System Deployment' }
  ]);
  const containerRef = useRef(null);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCards(prev => {
        const arr = [...prev];
        arr.unshift(arr.pop());
        return arr;
      });
    }, 3000);
    return () => clearInterval(cycle);
  }, []);

  useEffect(() => {
    // spring bounce transition
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.shuffler-card', 
        { y: -20, scale: 0.95 }, 
        { y: 0, scale: 1, duration: 0.6, stagger: 0.05, ease: 'back.out(1.5)' }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [cards]);

  return (
    <div className="bg-primary/5 border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-[400px]">
      <div className="mb-6">
        <h3 className="font-sans font-bold text-xl mb-2">Leverage<br/>Diagnostics</h3>
        <p className="font-mono text-sm text-dark/70">Identifying points of failure in outreach</p>
      </div>
      
      <div ref={containerRef} className="relative flex-1 flex flex-col items-center justify-center mt-4">
        {cards.map((c, i) => (
          <div 
            key={c.id}
            className={clsx(
              "shuffler-card absolute w-full p-4 rounded-xl border transition-all duration-700",
              i === 0 ? "bg-primary text-white z-30 translate-y-0 scale-100 shadow-xl border-primary" :
              i === 1 ? "bg-white text-dark z-20 -translate-y-4 scale-95 shadow-md border-dark/5 opacity-80" :
              "bg-background/80 text-dark z-10 -translate-y-8 scale-90 border-dark/5 opacity-40"
            )}
            style={{ top: '40%' }}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-mono text-xs uppercase opacity-70">{c.title}</span>
              <Activity size={14} className={i === 0 ? "text-accent" : ""} />
            </div>
            <div className="font-sans font-semibold text-lg">{c.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Card 2: Telemetry Typewriter --- //
function TelemetryTypewriter() {
  const [text, setText] = useState('');
  const fullText = "outreach_init()\\n> Scanning sequences...\\n> Inefficiency: manual follow-ups\\n> Deploying AI outreach engine...\\n> Status: BOOKING CALLS.\\n_";
  
  useEffect(() => {
    let current = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        current += fullText.charAt(i);
        setText(current);
        i++;
      } else {
        // restart after a pause
        setTimeout(() => { i = 0; current = ''; setText(''); }, 3000);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary/5 border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-[400px]">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h3 className="font-sans font-bold text-xl mb-2">Live Outreach<br/>Feed</h3>
          <p className="font-mono text-sm text-dark/70 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            Live Feed
          </p>
        </div>
        <Terminal className="text-dark/40" />
      </div>
      <div className="flex-1 bg-primary text-white rounded-xl p-6 overflow-hidden">
        <pre className="font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap break-all">
          {text.split('\\n').map((line, idx) => (
            <span key={idx} className="block mb-2">
              {line.includes('BOOKING CALLS') ? <span className="text-accent">{line}</span> : line}
            </span>
          ))}
        </pre>
      </div>
    </div>
  );
}

// --- Card 3: Cursor Protocol Scheduler --- //
function CursorProtocolScheduler() {
  const containerRef = useRef(null);
  const [activeDay, setActiveDay] = useState(null);
  const days = ['S','M','T','W','T','F','S'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });
      
      // Reset state
      tl.call(() => setActiveDay(null));
      
      // Move to Wednesday (index 3)
      tl.to('.mouse-cursor', {
        x: '140%', y: '120%', 
        duration: 1, 
        ease: 'power2.inOut',
        delay: 0.5
      });
      
      // Click simulation
      tl.to('.mouse-cursor', { scale: 0.8, duration: 0.1 });
      tl.call(() => setActiveDay(3));
      tl.to('.mouse-cursor', { scale: 1, duration: 0.1 });
      
      // Move to Save button
      tl.to('.mouse-cursor', {
        x: '250%', y: '250%', 
        duration: 1, 
        ease: 'power2.inOut',
        delay: 0.5
      });
      tl.to('.mouse-cursor', { scale: 0.8, duration: 0.1 });
      tl.to('.save-btn', { scale: 0.95, duration: 0.1 });
      tl.to('.mouse-cursor', { scale: 1, duration: 0.1 });
      tl.to('.save-btn', { scale: 1, duration: 0.1 });
      
      // Reset position
      tl.to('.mouse-cursor', {
        x: '0%', y: '0%', 
        duration: 1, 
        opacity: 0,
        ease: 'power1.inOut'
      });
      tl.set('.mouse-cursor', { opacity: 1 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-primary/5 border border-dark/10 rounded-[2rem] p-8 shadow-sm flex flex-col h-[400px]">
      <div className="mb-6 flex justify-between items-start">
        <div>
          <h3 className="font-sans font-bold text-xl mb-2">Pipeline<br/>Deployment</h3>
          <p className="font-mono text-sm text-dark/70">Founder-led to system-led</p>
        </div>
        <Database className="text-dark/40" />
      </div>

      <div ref={containerRef} className="flex-1 bg-white border border-dark/10 rounded-xl p-6 relative overflow-hidden flex flex-col justify-center">
        <div className="grid grid-cols-7 gap-1 mb-6 relative">
          {days.map((d, i) => (
            <div 
              key={i} 
              className={clsx(
                "aspect-square rounded text-center text-xs font-mono flex items-center justify-center transition-colors duration-300",
                activeDay === i ? "bg-accent text-primary" : "bg-dark/5 text-dark/50"
              )}
            >
              {d}
            </div>
          ))}
          <div className="mouse-cursor absolute top-0 left-0 w-6 h-6 z-10 pointer-events-none drop-shadow-md text-dark">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="white" strokeWidth="1"><path d="M4 2l6.11 20 3.35-7.14L20 12.83z"/></svg>
          </div>
        </div>
        
        <div className="flex justify-between items-center bg-primary/20 p-3 rounded-lg">
          <span className="font-mono text-xs font-bold text-dark/60">STATUS: CALLS BOOKED</span>
          <div className="save-btn bg-primary text-white text-[10px] px-3 py-1.5 rounded uppercase font-bold tracking-wider">Scale</div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-stagger',
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
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
    <section id="features" ref={sectionRef} className="py-32 px-6 md:px-12 lg:px-24 bg-background z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 feature-stagger">
          <h2 className="font-mono text-sm uppercase tracking-widest text-accent mb-4">Functional Artifacts</h2>
          <p className="font-sans font-bold text-4xl md:text-5xl max-w-2xl leading-tight text-dark">
            Your outbound, rebuilt from <br/>
            <span className="font-drama italic text-dark">first principles.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 feature-stagger">
          <DiagnosticShuffler />
          <TelemetryTypewriter />
          <CursorProtocolScheduler />
        </div>
      </div>
    </section>
  );
}
