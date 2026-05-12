"use client";

import React, { useState } from 'react';
import { 
  GitBranch, 
  GitCommit, 
  GitMerge, 
  Play, 
  Settings2, 
  RefreshCw,
  Info,
  ChevronRight,
  ShieldAlert,
  Zap
} from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";

const nodes = [
  { id: '1', title: 'Python Basics', status: 'completed', type: 'core', x: 100, y: 100 },
  { id: '2', title: 'Numpy/Pandas', status: 'completed', type: 'core', x: 250, y: 100 },
  { id: '3', title: 'Deep Learning', status: 'active', type: 'core', x: 400, y: 100 },
  { id: '4', title: 'PyTorch/TF', status: 'locked', type: 'elective', x: 550, y: 50 },
  { id: '5', title: 'Computer Vision', status: 'locked', type: 'elective', x: 550, y: 150 },
  { id: '6', title: 'Deployment', status: 'locked', type: 'core', x: 700, y: 100 },
];

const connections = [
  { from: '1', to: '2' },
  { from: '2', to: '3' },
  { from: '3', to: '4' },
  { from: '3', to: '5' },
  { from: '4', to: '6' },
  { from: '5', to: '6' },
];

export default function PathPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleRegenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 2000);
  };

  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-10">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 w-fit px-3 py-1 rounded-md mb-2">
             <Zap className="w-3 h-3" /> Adaptive Routing System
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900 tracking-tight">Adaptive Mastery Path</h1>
          <p className="text-slate-500 max-w-2xl leading-relaxed">
            Personalized node-based curriculum optimized for your speed, prerequisites, and regional bandwidth context.
          </p>
        </div>
        <div className="flex gap-4">
           <button 
              onClick={handleRegenerate}
              disabled={isGenerating}
              className="btn-secondary px-6 flex items-center gap-2 group"
           >
              <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : 'group-hover:rotate-180 transition-transform'}`} />
              Optimize Path
           </button>
           <button className="btn-primary px-8 flex items-center gap-2 shadow-lg shadow-blue-700/10">
              <Play className="w-5 h-5" /> Start Learning
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
        {/* Knowledge Graph Content */}
        <div className="xl:col-span-3 bg-white border border-slate-200 rounded-3xl p-8 relative overflow-hidden shadow-sm group min-h-[500px]">
           <div className="absolute top-8 left-8 z-10 space-y-6">
              <div className="p-5 bg-slate-900 text-white rounded-2xl max-w-xs shadow-2xl relative overflow-hidden">
                 <h4 className="font-bold flex items-center gap-2 text-blue-400 mb-2 text-xs uppercase tracking-widest">
                    <Info className="w-4 h-4" />
                    AI Intelligence
                 </h4>
                 <p className="text-xs text-slate-300 leading-relaxed">
                   The platform has identified that your proficiency in <strong>Advanced Logic</strong> bypasses the need for "Basics of Analysis".
                 </p>
                 <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-blue-500/10 blur-xl" />
              </div>
              <div className="flex flex-col gap-3">
                 {[
                   { color: 'bg-green-500', label: 'Mastered' },
                   { color: 'bg-blue-600', label: 'Active Node' },
                   { color: 'bg-slate-200', label: 'Locked' }
                 ].map(l => (
                   <div key={l.label} className="flex items-center gap-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      <div className={`w-3 h-3 rounded-full ${l.color} ${l.label === 'Active Node' ? 'animate-pulse' : ''}`} /> {l.label}
                   </div>
                 ))}
              </div>
           </div>

           {/* The Graph Visual - SVG */}
           <div className="w-full h-full flex items-center justify-center relative touch-none select-none py-20">
              <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 200">
                 {/* Connections */}
                 {connections.map((conn, i) => {
                    const fromNode = nodes.find(n => n.id === conn.from)!;
                    const toNode = nodes.find(n => n.id === conn.to)!;
                    const isCompleted = nodes.find(n => n.id === conn.from)?.status === 'completed';
                    
                    return (
                      <motion.line
                        key={i}
                        x1={fromNode.x}
                        y1={fromNode.y}
                        x2={toNode.x}
                        y2={toNode.y}
                        stroke={isCompleted ? '#10b981' : '#e2e8f0'}
                        strokeWidth="3"
                        strokeDasharray={isCompleted ? "0" : "6,6"}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    );
                 })}

                 {/* Nodes */}
                 {nodes.map((node) => (
                    <g key={node.id} className="cursor-pointer">
                       <motion.circle
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.1 }}
                          cx={node.x}
                          cy={node.y}
                          r="28"
                          className={`${
                            node.status === 'completed' ? 'fill-green-600' : 
                            node.status === 'active' ? 'fill-blue-700 ring-8 ring-blue-50' : 
                            'fill-white stroke-slate-200 stroke-2'
                          }`}
                       />
                       <foreignObject x={node.x - 50} y={node.y + 40} width="100" height="40">
                          <div className="text-[11px] font-bold text-center leading-tight text-slate-900 truncate px-1">
                             {node.title}
                          </div>
                       </foreignObject>
                       {node.status === 'active' && (
                          <motion.circle 
                             cx={node.x} 
                             cy={node.y} 
                             r="36" 
                             fill="none" 
                             stroke="#1e40af" 
                             strokeWidth="1" 
                             strokeDasharray="4,4"
                             animate={{ rotate: 360 }}
                             transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                          />
                       )}
                    </g>
                 ))}
              </svg>

              {/* Generating Animation Overlay */}
              <AnimatePresence>
                {isGenerating && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-white/90 backdrop-blur-md z-50 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="relative mb-8">
                       <div className="w-20 h-20 border-4 border-blue-700 border-t-transparent rounded-full animate-spin" />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Zap className="w-8 h-8 text-blue-700" />
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">AI Optimizing Your Roadmap</h3>
                    <p className="text-slate-500 max-w-md mt-3 leading-relaxed">
                      Re-routing based on your 94% final score in <strong>Python Engineering</strong> and Tier 2 connectivity profile.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
        </div>

        {/* Node Sidebar Info */}
        <div className="xl:col-span-1 space-y-8">
           <section className="p-8 rounded-3xl bg-blue-50 border border-blue-100 shadow-sm">
              <h3 className="text-xl font-bold flex items-center gap-3 text-slate-900 mb-6">
                 <div className="p-2 bg-blue-700 rounded-lg text-white">
                    <GitBranch className="w-5 h-5" />
                 </div>
                 Active Node
              </h3>
              
              <div className="space-y-6">
                 <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2">Module Title</div>
                    <div className="font-bold text-lg text-slate-900 leading-tight">Deep Learning Foundations</div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-xl border border-blue-100">
                        <div className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mb-1">Time Estimate</div>
                        <div className="text-xs font-bold text-slate-700">12.5 Hours</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-blue-100">
                        <div className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mb-1">Pass Nodes</div>
                        <div className="text-xs font-bold text-green-600">8/12 Done</div>
                    </div>
                 </div>

                 <div className="pt-6 border-t border-blue-200">
                    <button className="btn-primary w-full py-4 text-base shadow-lg shadow-blue-700/10">
                       Resume Learning Area
                    </button>
                    <p className="text-center text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-4">NPTEL Content Integrated</p>
                 </div>
              </div>
           </section>

           <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm group">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b pb-2">Academic Advisory</h3>
              <div className="flex gap-4 items-start">
                 <div className="p-2 rounded-lg bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ShieldAlert className="w-5 h-5" />
                 </div>
                 <p className="text-xs text-slate-500 leading-relaxed">
                   The system has flagged a missing <strong>Linear Algebra</strong> prerequisite from Swayam. Attempting the current node may result in 40% lower retention.
                 </p>
              </div>
              <button className="mt-6 w-full text-xs font-bold text-blue-700 hover:underline flex items-center justify-center gap-2">
                 Resolve via Adaptive Pathway <ChevronRight className="w-4 h-4" />
              </button>
           </section>
        </div>
      </div>
    </div>
  );
}
