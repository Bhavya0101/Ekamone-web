import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export default function Features() {
  const container = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-anim', 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, opacity: 1, duration: 1, 
          stagger: 0.15, ease: 'power3.out',
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
    <section ref={container} id="systems" className="py-24 px-6 lg:px-24 bg-background max-w-7xl mx-auto">
      <div className="mb-20">
        <p className="feature-anim text-sm font-semibold tracking-widest uppercase text-textDark/50 mb-4">
          FUNCTIONAL ARTIFACTS
        </p>
        <h2 className="feature-anim font-sans font-bold text-4xl text-primary md:text-5xl tracking-tight max-w-xl">
          Your internal workflow, rebuilt so it stops leaking time.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary">
        
        {/* CARD 1 - Deal Flow Diagnostics (Shuffler) */}
        <div className="feature-anim feature-card flex flex-col justify-between min-h-[400px]">
          <div className="flex-1">
            <DiagnosticShuffler />
          </div>
          <div className="mt-8">
            <h3 className="font-sans font-bold text-xl mb-3 leading-tight">Deal Flow<br/>Diagnostics</h3>
            <p className="text-textDark font-medium text-sm leading-relaxed mb-4">
              Find where good opportunities die, where analysts waste time, and where your process quietly turns into inbox soup.
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="bg-primary/5 px-2 py-1 rounded">Inbox Triage</span>
              <span className="bg-primary/5 px-2 py-1 rounded">Fit Scoring</span>
              <span className="bg-primary/5 px-2 py-1 rounded">Routing Logic</span>
            </div>
          </div>
        </div>

        {/* CARD 2 - Live Investment Feed (Typewriter) */}
        <div className="feature-anim feature-card flex flex-col justify-between min-h-[400px]">
          <div className="flex-1">
            <TelemetryTypewriter />
          </div>
          <div className="mt-8">
            <h3 className="font-sans font-bold text-xl mb-3 leading-tight">Live Investment<br/>Feed</h3>
            <p className="text-textDark font-medium text-sm leading-relaxed">
              Real time intake, evaluation, research, and next step triggers without someone manually playing traffic cop all day.
            </p>
          </div>
        </div>

        {/* CARD 3 - Pipeline Deployment (Scheduler/Cursor) */}
        <div className="feature-anim feature-card flex flex-col justify-between min-h-[400px] pb-6">
          <div className="flex-1">
            <CursorProtocolScheduler />
          </div>
          <div className="mt-8">
            <h3 className="font-sans font-bold text-xl mb-3 leading-tight">Pipeline<br/>Deployment</h3>
            <p className="text-textDark font-medium text-sm leading-relaxed mb-4">
              From founder email to qualified meeting, with the right person, the right context, and way less chaos.
            </p>
            <div className="flex items-center gap-2 mt-auto pt-6">
              <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_rgba(201,168,76,0.6)]" />
              <span className="text-[10px] font-mono tracking-widest font-semibold uppercase text-accent">
                STATUS: GOOD DEALS MOVING
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ----------------- MICRO-UI COMPONENTS -----------------

function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, label: 'founder.pdf', status: 'Scanned' },
    { id: 2, label: 'triage()', status: 'Active' },
    { id: 3, label: 'momentum.log', status: 'High Fit' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards(prev => {
        const newArr = [...prev];
        const last = newArr.pop();
        newArr.unshift(last);
        return newArr;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full flex items-center justify-center pb-12">
      {cards.map((card, idx) => {
        const isTop = idx === 0;
        return (
          <div 
            key={card.id}
            className="absolute rounded-xl border border-primary/10 bg-white p-4 w-5/6 shadow-sm transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-between"
            style={{
              transform: `translateY(${idx * 20}px) scale(${1 - idx * 0.05})`,
              zIndex: 10 - idx,
              opacity: 1 - idx * 0.2
            }}
          >
            <div className="flex items-center gap-3 w-full">
              <div className={`w-2 h-2 rounded-full shrink-0 ${isTop ? 'bg-accent' : 'bg-primary/20'}`} />
              <span className="font-mono text-[10px] sm:text-xs truncate">{card.label}</span>
            </div>
            {isTop && <span className="text-[10px] sm:text-xs font-semibold text-accent whitespace-nowrap ml-2">{card.status}</span>}
          </div>
        );
      })}
    </div>
  );
}

function TelemetryTypewriter() {
  const fullText = "deal flow initialized\n> scanning inbound pitch decks...\n> evaluating thesis match...\n> founder profile found\n> CRM updated\n> scheduling trigger armed";
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    let typeInterval;
    
    const startTyping = () => {
      setDisplayedText("");
      i = 0;
      typeInterval = setInterval(() => {
        if (i < fullText.length) {
          setDisplayedText(prev => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(startTyping, 4000);
        }
      }, 40);
    };

    startTyping();

    const blinkInterval = setInterval(() => setCursorVisible(v => !v), 500);

    return () => { clearInterval(typeInterval); clearInterval(blinkInterval); };
  }, []);

  return (
    <div className="bg-primary text-white rounded-xl p-6 h-full font-mono text-[10px] sm:text-xs flex flex-col shadow-inner relative overflow-hidden">
      <div className="flex items-center gap-2 mb-4 text-white/50 border-b border-white/10 pb-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shrink-0" />
        <span className="tracking-widest">LIVE FEED</span>
      </div>
      <div className="flex-1 whitespace-pre-wrap leading-loose text-white/80 overflow-hidden">
        {displayedText}
        <span className="text-accent" style={{ opacity: cursorVisible ? 1 : 0 }}>█</span>
      </div>
    </div>
  );
}

function CursorProtocolScheduler() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const gridContainer = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.to('.fake-cursor', { x: 50, y: 30, duration: 1, ease: 'power2.inOut' })
        .to('.fake-cursor', { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.day-cell-3', { backgroundColor: '#C9A84C', color: '#fff', duration: 0.2 })
        .to('.fake-cursor', { x: 140, y: 90, duration: 1, ease: 'power2.inOut', delay: 0.5 })
        .to('.fake-cursor', { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.fake-cursor', { opacity: 0, duration: 0.3, delay: 0.5 })
        .to('.day-cell-3', { backgroundColor: 'transparent', color: '#0D0D12', duration: 0.1, delay: 0.2 }) // reset
        .set('.fake-cursor', { x: 0, y: 0, opacity: 1 });
    }, gridContainer);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={gridContainer} className="relative h-full w-full bg-white rounded-xl p-4 shadow-sm border border-primary/5 flex flex-col justify-center overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <span className="font-sans font-semibold text-xs tracking-wide">Automated Intake</span>
        <div className="bg-primary text-white font-mono text-[8px] sm:text-[10px] px-2 py-1 rounded-full uppercase tracking-widest shrink-0">
          Active
        </div>
      </div>

      <div className="flex gap-1 sm:gap-2 justify-between mb-8">
        {days.map((d, i) => (
          <div key={i} className={`day-cell-${i} w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[10px] sm:text-xs border border-primary/10 transition-colors`}>
            {d}
          </div>
        ))}
      </div>

      <div className="flex justify-end pr-2">
        <div className="bg-primary/5 px-4 py-2 border border-primary/10 rounded-md text-[10px] sm:text-xs font-semibold text-primary/40">
          Deploy Workflow
        </div>
      </div>

      <svg 
        className="fake-cursor absolute top-8 left-8 w-6 h-6 drop-shadow-md z-10" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4.5 3L21 12.5L13.5 15L11 22.5L4.5 3Z" fill="#2A2A35" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
