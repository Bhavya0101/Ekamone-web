import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// Register GSAP plugins globally once
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main className="w-full relative bg-dark">
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default App;
