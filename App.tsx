
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Founder from './components/Founder.tsx';
import HTMFSection from './components/HTMFSection.tsx';
import HSMFSection from './components/HSMFSection.tsx';
import TechInnovation from './components/TechInnovation.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import BackgroundAnimation from './components/BackgroundAnimation.tsx';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Reveal animations for all sections
      const sections = gsap.utils.toArray('.reveal-section');
      sections.forEach((section: any) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              end: 'top 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    } catch (error) {
      console.error('GSAP/ScrollTrigger Initialization Error:', error);
    }
  }, []);

  return (
    <div ref={mainRef} className="relative min-h-screen bg-[#080c14]">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <Founder />
      <HTMFSection />
      <HSMFSection />
      <TechInnovation />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
