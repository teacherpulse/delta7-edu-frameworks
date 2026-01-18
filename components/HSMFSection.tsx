
import React from 'react';
import { Target, Users, Zap, BrainCircuit, BarChart3 } from 'lucide-react';

const HSMFSection: React.FC = () => {
  const features = [
    {
      title: 'Dual-Axis Diagnosis',
      desc: 'Combines Diagnostic Rubrics with Actionable Intervention Protocols for every student scenario.',
      icon: <Target />
    },
    {
      title: 'The 5-Level Scale',
      desc: 'Proprietary assessment ranging from "Critical Concern" to "Optimal Behavior".',
      icon: <BarChart3 />
    },
    {
      title: 'Parent-Teacher Synergy',
      desc: 'Bridges the gap between home and school with unified observation data.',
      icon: <Users />
    }
  ];

  return (
    <section id="hsmf" className="reveal-section py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 text-blue-400 mb-4">
              <BrainCircuit className="w-5 h-5" />
              <span className="font-bold tracking-widest uppercase text-xs">Vidya Pulse</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Holistic Student Mastery Framework (HSMF)</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Our 360-degree diagnostic and developmental system tracks behavioral, emotional, and academic metrics, ensuring no child is left behind.
            </p>

            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 glass-card rounded-xl flex items-center justify-center text-blue-400">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{f.title}</h4>
                    <p className="text-slate-500 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="glass-card p-6 rounded-2xl transform hover:scale-105 transition-transform">
                <div className="text-teal-400 font-bold mb-2">Stage 1</div>
                <h5 className="font-bold text-white mb-1">Early Childhood</h5>
                <p className="text-xs text-slate-500">Ages 3-6 | Sensory & Play Mastery</p>
              </div>
              <div className="bg-blue-600/20 border border-blue-500/30 p-6 rounded-2xl shadow-xl shadow-blue-500/10 transform hover:scale-105 transition-transform">
                <div className="text-blue-400 font-bold mb-2">Stage 2</div>
                <h5 className="font-bold text-white mb-1">Primary Years</h5>
                <p className="text-xs text-slate-400">Ages 6-10 | Foundational Logic</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass-card p-6 rounded-2xl transform hover:scale-105 transition-transform">
                <div className="text-teal-400 font-bold mb-2">Stage 3</div>
                <h5 className="font-bold text-white mb-1">Adolescence</h5>
                <p className="text-xs text-slate-500">Ages 11-16 | Emotional Intelligence</p>
              </div>
              <div className="glass-card p-6 rounded-2xl h-48 flex items-center justify-center border-dashed border-slate-700">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2 animate-pulse" />
                  <span className="text-xs font-bold text-slate-500">Growth Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HSMFSection;
