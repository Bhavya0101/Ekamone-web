import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#08080B] text-white/70 py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-white/10 pb-16">
          
          <div className="col-span-1 lg:col-span-5 flex flex-col gap-6">
            <span className="font-sans font-bold text-2xl text-white tracking-tight">Ekamone</span>
            <p className="font-medium text-sm leading-loose max-w-xs">
              AI-powered workflow systems for VC, PE, family offices, and home offices.
              <br/><br/>
              We ship systems, not slide decks.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
            <h4 className="font-semibold text-white tracking-widest text-xs uppercase mb-2">Navigation</h4>
            <a href="#philosophy" className="text-sm hover:text-white transition-colors">Philosophy</a>
            <a href="#systems" className="text-sm hover:text-white transition-colors">Systems</a>
            <a href="#protocol" className="text-sm hover:text-white transition-colors">The Protocol</a>
            <a href="#diagnostics" className="text-sm hover:text-white transition-colors">Diagnostics</a>
            <a href="#getstarted" className="text-sm hover:text-white transition-colors">Get Started</a>
          </div>

          <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-semibold text-white tracking-widest text-xs uppercase mb-2">System</h4>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
              <span className="font-mono text-xs text-white uppercase tracking-widest">SYSTEM STATUS: OPERATIONAL</span>
            </div>
            <a href="mailto:hello@ekamone.com" className="group mt-6 inline-flex items-center gap-2 text-sm text-white border-b border-white/20 pb-1 w-fit hover:border-white transition-colors">
              Contact Command
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} Ekamone. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
