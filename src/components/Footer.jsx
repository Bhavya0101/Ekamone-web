import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 px-6 md:px-12 lg:px-24 rounded-t-[4rem] z-30 relative mt-[-100px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full gap-24">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          <div className="col-span-1 md:col-span-6 flex flex-col">
            <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tight mb-6">Ekamone</h2>
            <p className="font-mono text-white/50 max-w-sm">
              AI-powered outbound systems for boutique recruiting agencies. We ship systems, not slide decks. 
            </p>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-sans font-bold text-lg mb-6 text-white/80">Navigation</h4>
            <ul className="flex flex-col gap-4 font-mono text-white/50 text-sm">
              <li><a href="#philosophy" className="link-lift hover:text-accent group relative block"><span className="absolute left-[-15px] opacity-0 group-hover:opacity-100 transition-opacity text-accent">›</span> Philosophy</a></li>
              <li><a href="#features" className="link-lift hover:text-accent transition-colors">Systems</a></li>
              <li><a href="#protocol" className="link-lift hover:text-accent transition-colors">The Protocol</a></li>
              <li><a href="#testimonials" className="link-lift hover:text-accent transition-colors">Confirmations</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <h4 className="font-sans font-bold text-lg mb-6 text-white/80">Legal</h4>
            <ul className="flex flex-col gap-4 font-mono text-white/50 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/10">
          <p className="font-mono text-xs text-white/30">© {new Date().getFullYear()} Ekamone. All rights reserved.</p>
          
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="font-mono text-xs text-white/70 tracking-widest uppercase">System Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
