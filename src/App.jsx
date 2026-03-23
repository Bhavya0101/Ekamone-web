import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import SystemsCapability from './components/SystemsCapability';
import Protocol from './components/Protocol';
import Diagnostics from './components/Diagnostics';
import Engagement from './components/Engagement';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {});
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background text-textDark font-sans relative">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <SystemsCapability />
      <Protocol />
      <Diagnostics />
      <Engagement />
      <Footer />
    </div>
  );
}

export default App;
