
import React, { useEffect, useState, useRef } from 'react';
import { Quote, Award, BookOpen, Microscope } from 'lucide-react';

const StatCounter: React.FC<{ value: string, label: string }> = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const target = parseInt(value);
        if (isNaN(target)) {
          setCount(0); // For non-numeric values
          return;
        }
        let start = 0;
        const duration = 1500;
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          setCount(Math.floor(progress * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  const suffix = value.replace(/[0-9]/g, '');

  return (
    <div ref={ref} className="flex flex-col border-l border-slate-800 pl-6 group">
      <span className="text-3xl font-bold text-cyan-400 tabular-nums group-hover:text-white transition-colors">
        {isNaN(parseInt(value)) ? value : count + suffix}
      </span>
      <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">{label}</span>
    </div>
  );
};

const Founder: React.FC = () => {
  const founderImage = "https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/suram-mohan-kumar.png";

  return (
    <section id="founder" className="reveal-section py-32 relative overflow-hidden">
      <div className="absolute -left-20 top-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              {/* Multi-layered Architectural Glow */}
              <div className="absolute -inset-6 bg-cyan-500/10 rounded-[3rem] blur-3xl group-hover:bg-cyan-500/20 transition-all duration-1000"></div>
              
              <div className="relative glass-card p-5 rounded-[2.5rem] overflow-hidden shadow-2xl group-hover:border-cyan-500/30">
                <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4]">
                   <img 
                    src={founderImage} 
                    alt="Suram Mohan Kumar" 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-[1500ms] transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Scanning Line Effect on Hover */}
                  <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>
              
              {/* Hover Badge */}
              <div className="absolute -bottom-8 -right-8 glass-card px-10 py-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-l-4 border-cyan-500 backdrop-blur-3xl group-hover:translate-x-[-10px] transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white tracking-tight">Suram Mohan Kumar</h3>
                <p className="text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mt-1">Chief Architect & Reformer</p>
                <div className="mt-4 flex space-x-3 grayscale group-hover:grayscale-0 transition-all">
                  <Award size={18} className="text-yellow-500" />
                  <BookOpen size={18} className="text-cyan-500" />
                  <Microscope size={18} className="text-indigo-500" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 lg:pl-12 order-1 lg:order-2">
            <header className="mb-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-px bg-cyan-500/50" />
                <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-[10px] mono">Leadership Profile</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-extrabold mb-0 leading-[1.1] tracking-tighter">
                Engineering <span className="text-cyan-400">Empathy</span> Into Education.
              </h2>
            </header>

            <div className="space-y-8 text-slate-400 text-xl leading-relaxed font-light max-w-2xl">
              <p>
                Suram Mohan Kumar represents the fusion of academic rigor and operational excellence. At <span className="text-white font-medium border-b border-cyan-500/30">Nalanda High School</span>, he architected the original prototypes for what would become Delta7.
              </p>
              <p>
                "Education is often treated as a series of random acts of kindness. We treat it as an <strong className="text-white font-bold">engineering challenge</strong>. If we can't measure it, we can't master it."
              </p>
            </div>
            
            <div className="mt-14 p-10 glass-card rounded-3xl relative border-t border-white/5 bg-white/[0.02] shadow-inner">
              <Quote className="absolute -top-6 left-10 w-16 h-16 text-cyan-500/10" />
              <p className="text-2xl font-medium italic text-slate-200 leading-snug tracking-tight">
                "Our mission is to replace chaotic, ad-hoc teaching with high-precision educational architectures."
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-10">
              <StatCounter value="25+" label="Years Performance" />
              <StatCounter value="50+" label="Global Deployments" />
              <StatCounter value="HTMF/HSMF" label="Proprietary IP" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
