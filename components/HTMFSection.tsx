
import React from 'react';
import { BookOpen, Search, Wrench, ShieldCheck, Activity, Zap } from 'lucide-react';

const HTMFSection: React.FC = () => {
  const modules = [
    {
      id: 'ctm',
      title: 'Classroom Teaching Mastery',
      acronym: 'CTM',
      desc: 'High-impact pedagogy and real-time engagement monitoring protocols.',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-cyan-500/20 to-transparent'
    },
    {
      id: 'cqi',
      title: 'Correction Quality Index',
      acronym: 'CQI',
      desc: 'Deep administrative rigor ensuring high-quality feedback loops in student work.',
      icon: <Search className="w-8 h-8" />,
      color: 'from-blue-500/20 to-transparent'
    },
    {
      id: 'lto',
      title: 'Learning Tools Optimization',
      acronym: 'LTO',
      desc: 'Precision integration of digital and physical educational resources.',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-indigo-500/20 to-transparent'
    },
    {
      id: 'pie',
      title: 'Professional Integrity',
      acronym: 'PI&E',
      desc: 'Cultivating ethics and character through standardized performance rubrics.',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'from-teal-500/20 to-transparent'
    }
  ];

  return (
    <section id="htmf" className="reveal-section py-32 relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.05),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 text-cyan-400 mb-6 mono">
              <Activity className="w-5 h-5" />
              <span className="font-bold tracking-[0.2em] uppercase text-xs">Framework 01</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Holistic Teaching <span className="text-cyan-400">Mastery</span> Framework.
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed max-w-2xl font-light">
              We replace guesswork with engineering. Our 4-pillar system standardizes teaching quality through rigorous data-driven assessment.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-2xl border-l-4 border-cyan-500 max-w-xs">
            <div className="flex items-center space-x-2 text-cyan-400 mb-2">
              <Zap size={16} fill="currentColor" />
              <span className="text-xs font-bold uppercase tracking-widest">Efficiency Boost</span>
            </div>
            <p className="text-sm text-slate-300">Delta7 schools report a 40% improvement in faculty output within 2 quarters.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, i) => (
            <div 
              key={mod.id} 
              className="group glass-card p-10 rounded-[2rem] hover:translate-y-[-10px] relative overflow-hidden flex flex-col"
            >
              {/* Decorative Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-900/80 border border-white/5 flex items-center justify-center text-cyan-400 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl group-hover:shadow-cyan-500/10">
                  {mod.icon}
                </div>
                <div className="mb-4">
                   <span className="text-[10px] font-bold text-cyan-400/60 uppercase tracking-[0.3em] mono">{mod.acronym}</span>
                   <h3 className="text-2xl font-bold mt-1 tracking-tight leading-tight group-hover:text-cyan-400 transition-colors">
                    {mod.title}
                  </h3>
                </div>
                <p className="text-slate-400 leading-relaxed text-sm font-light">
                  {mod.desc}
                </p>
              </div>
              
              <div className="mt-auto pt-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 relative z-10">
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Protocol Active</span>
                 <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,1)]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glass-card p-12 rounded-[3rem] border border-cyan-500/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 blur-[100px] pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h4 className="text-3xl font-extrabold mb-4 tracking-tight">Deploy the <span className="text-cyan-400">Teacher Pulse</span> Protocol.</h4>
              <p className="text-slate-400 text-lg font-light max-w-xl">
                Transform your faculty from a group of educators into a high-precision delivery team using our proprietary HTMF rubrics.
              </p>
            </div>
            <button className="relative group px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-cyan-400 transition-all transform hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap">
              ACCESS FRAMEWORK DOCUMENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HTMFSection;
