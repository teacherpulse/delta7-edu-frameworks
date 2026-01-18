
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, ChevronDown, Binary, Layers, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const deltaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text reveal simulation
      gsap.from(headlineRef.current, {
        y: 100,
        opacity: 0,
        rotateX: -30,
        duration: 1.5,
        ease: 'power4.out',
      });

      gsap.from('.hero-sub', {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });

      gsap.from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.8,
        stagger: 0.2,
      });

      // Subtle parallax for background elements
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5);
        const yPos = (clientY / window.innerHeight - 0.5);
        
        gsap.to(bgRef.current, {
          x: xPos * 40,
          y: yPos * 40,
          duration: 2,
          ease: 'power1.out'
        });

        gsap.to(deltaRef.current, {
          x: xPos * -20,
          y: yPos * -20,
          duration: 1.5,
          ease: 'power2.out'
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden perspective-1000">
      {/* Dynamic Background Blurs - Tuned down to let particles show */}
      <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase mb-8 mono">
            <Binary size={14} className="animate-spin-slow" />
            <span>Edu-Architecture v7.0</span>
          </div>
          
          <h1 ref={headlineRef} className="text-6xl md:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tighter">
            Building <span className="gradient-text">Systems</span>, Not Shortcuts.
          </h1>
          
          <p className="hero-sub text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl font-light">
            Empowering institutions through high-precision <span className="text-white font-medium">HTMF</span> and <span className="text-white font-medium">HSMF</span> frameworks designed for the modern learner.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#htmf" className="hero-cta group relative flex items-center justify-center px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
              Initialize Reform
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#contact" className="hero-cta flex items-center justify-center px-10 py-5 glass-card text-white font-bold rounded-2xl transition-all border border-white/10 hover:border-cyan-500/50 group">
              Partner With Us
              <Layers className="ml-3 w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex justify-center relative">
          <div ref={deltaRef} className="relative w-[550px] h-[550px]">
            {/* The Delta Core */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-[4rem] border-2 border-cyan-500/20 rotate-45 animate-spin-slow flex items-center justify-center bg-cyan-500/5 backdrop-blur-3xl shadow-[0_0_100px_rgba(34,211,238,0.1)]">
                <div className="rotate-[-45deg] flex flex-col items-center">
                  <span className="text-cyan-400 font-black text-7xl tracking-tighter">Δ7</span>
                  <div className="scan-line mt-4"></div>
                </div>
              </div>
              
              {/* Satellite Modules */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center group">
                 <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-cyan-400 border-cyan-500/30 group-hover:scale-110 transition-transform">
                    <Target size={24} />
                 </div>
                 <span className="mt-2 text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Mastery</span>
              </div>
              
              <div className="absolute bottom-10 right-0 flex flex-col items-center group">
                 <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-indigo-400 border-indigo-500/30 group-hover:scale-110 transition-transform">
                    <Binary size={24} />
                 </div>
                 <span className="mt-2 text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Data</span>
              </div>

              <div className="absolute bottom-10 left-0 flex flex-col items-center group">
                 <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-teal-400 border-teal-500/30 group-hover:scale-110 transition-transform">
                    <ChevronDown size={24} />
                 </div>
                 <span className="mt-2 text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">Input</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase mono text-slate-500">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent animate-bounce"></div>
      </div>
    </section>
  );
};

export default Hero;
