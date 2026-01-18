
import React from 'react';
import { Cpu, MessageSquare, Code2, Globe } from 'lucide-react';

const TechInnovation: React.FC = () => {
  const tools = [
    {
      name: 'System Intelligence',
      desc: 'Architecting automated rubric analysis and student behavioral mapping.',
      icon: <Cpu className="w-10 h-10" />,
      tag: 'Reasoning Engine'
    },
    {
      name: 'BotBiz',
      desc: 'Seamless WhatsApp automation for real-time parent-teacher synergy.',
      icon: <MessageSquare className="w-10 h-10" />,
      tag: 'Communication'
    },
    {
      name: 'Cursor Apps',
      desc: 'Rapid deployment of school-specific dashboards and management tools.',
      icon: <Code2 className="w-10 h-10" />,
      tag: 'Infrastructure'
    }
  ];

  return (
    <section id="tech" className="reveal-section py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h4 className="text-teal-400 font-bold uppercase tracking-widest text-sm mb-4">Tech Stack</h4>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-0">Driven by <span className="gradient-text">Advanced Intelligence</span>.</h2>
          </div>
          <p className="text-slate-400 md:max-w-xs text-sm leading-relaxed">
            We leverage the world's most advanced AI and automation tools to ensure your school remains future-proof.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, i) => (
            <div key={i} className="group glass-card p-10 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10">
              <div className="absolute top-0 right-0 p-8 text-teal-500/10 group-hover:text-teal-500/20 transition-colors">
                {tool.icon}
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">
                {tool.tag}
              </div>
              <h3 className="text-2xl font-bold mb-4">{tool.name}</h3>
              <p className="text-slate-400 leading-relaxed">
                {tool.desc}
              </p>
              
              <div className="mt-8 flex items-center text-teal-400 text-sm font-bold group-hover:translate-x-2 transition-transform cursor-pointer">
                Learn how it works <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechInnovation;
