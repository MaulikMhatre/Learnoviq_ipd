"use client";

import React from 'react';
import { 
  Award, 
  Download, 
  Share2, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Layout, 
  Code,
  ExternalLink
} from 'lucide-react';
import { motion } from 'framer-motion';

const competencies = [
  { name: 'Python Engineering', level: 85, color: 'bg-blue-600', icon: Code },
  { name: 'Frontend Architecture', level: 92, color: 'bg-indigo-600', icon: Layout },
  { name: 'Data Engineering', level: 68, color: 'bg-slate-700', icon: Database },
  { name: 'Machine Learning', level: 74, color: 'bg-blue-800', icon: Cpu },
  { name: 'System Design', level: 59, color: 'bg-slate-400', icon: Globe },
];

const credentials = [
  { title: 'NPTEL Elite Gold: IoT Architecture', date: 'March 2026', id: 'NPTEL-AI-4402', verified: true, platform: 'NPTEL' },
  { title: 'Coursera: Deep Learning Specialization', date: 'Jan 2026', id: 'COUR-DL-991', verified: true, platform: 'Coursera' },
  { title: 'Swayam: Advanced Data Structures', date: 'Dec 2025', id: 'SWAY-ADS-021', verified: true, platform: 'Swayam' },
];

export default function PassportPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 pb-10">
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-bold text-slate-900 tracking-tight text-balance">Digital Skill Passport</h1>
          <p className="text-slate-500 max-w-2xl leading-relaxed">
            Your verified "Digital Competency Portfolio" tracked across global platforms and institutional partners. Verified by the Department of Higher Education.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary px-5 flex items-center gap-2 group">
            <Share2 className="w-4 h-4 text-slate-400 group-hover:text-blue-700" /> Share Passport
          </button>
          <button className="btn-primary px-5 flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Verified PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Profile Info Sidebar */}
        <div className="lg:col-span-1 space-y-10">
           <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-6 ring-4 ring-slate-50 p-1 border border-slate-200 overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maulik" alt="Maulik" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-1">Maulik Mhatre</h2>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">Full Stack AI Developer</p>
              
              <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-6">
                 <div>
                    <div className="text-xl font-bold text-slate-900">12</div>
                    <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Credentials</div>
                 </div>
                 <div className="border-l border-slate-100">
                    <div className="text-xl font-bold text-blue-700">4.9k</div>
                    <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">XP Nodes</div>
                 </div>
              </div>
           </section>

           <section className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 border-b pb-2 px-1">Verified Platform IDs</h3>
              <div className="space-y-3">
                 {[ 
                   { label: 'GitHub Account', val: '@maulik_m', icon: ShieldCheck },
                   { label: 'NPTEL Learner ID', val: 'ID: 440912', icon: ShieldCheck },
                   { label: 'IITB Digital ID', val: 'V-IITB-021', icon: ShieldCheck }
                 ].map((v, i) => (
                   <div key={i} className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-lg text-xs">
                      <div className="flex items-center gap-2 text-slate-600">
                         <v.icon className="w-3.5 h-3.5 text-blue-600" />
                         <span className="font-semibold">{v.label}</span>
                      </div>
                      <span className="font-bold text-slate-400">{v.val}</span>
                   </div>
                 ))}
              </div>
           </section>
        </div>

        {/* Competency Visualization */}
        <div className="lg:col-span-3 space-y-10">
           <section className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
                       <Award className="w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="text-xl font-bold text-slate-900">Cognitive Mastery Radar</h3>
                       <p className="text-xs text-slate-400 font-medium">Aggregated proficiency based on course outcomes and practical nodes.</p>
                    </div>
                 </div>
                 <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-md border border-slate-100">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Live Blockchain Sync
                 </div>
              </div>

              <div className="space-y-10">
                 {competencies.map((comp, i) => {
                   const Icon = comp.icon;
                   return (
                     <div key={i} className="space-y-4">
                        <div className="flex justify-between items-center">
                           <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors">
                                 <Icon className="w-4 h-4 text-slate-400" />
                              </div>
                              <span className="text-sm font-bold text-slate-900">{comp.name}</span>
                           </div>
                           <div className="text-sm font-bold text-blue-700">{comp.level}%</div>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                           <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${comp.level}%` }}
                              transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                              className={`h-full ${comp.color} rounded-full`} 
                           />
                        </div>
                     </div>
                   );
                 })}
              </div>

              <div className="mt-12 pt-10 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="flex gap-4">
                    <div className="p-3 bg-blue-50 rounded-xl h-fit">
                       <Zap className="w-5 h-5 text-blue-700" />
                    </div>
                    <div>
                       <h4 className="font-bold text-sm text-slate-900 mb-1">Next Mastery Goal</h4>
                       <p className="text-xs text-slate-500 leading-relaxed">The AI recommends finishing <strong>"Matrix Calculus"</strong> from Swayam to reach 100% in ML Foundations.</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="p-3 bg-indigo-50 rounded-xl h-fit">
                       <ShieldCheck className="w-5 h-5 text-indigo-700" />
                    </div>
                    <div>
                       <h4 className="font-bold text-sm text-slate-900 mb-1">State Benchmark</h4>
                       <p className="text-xs text-slate-500 leading-relaxed">You have exceeded the <strong>Tier 2 City</strong> proficiency average by 34% this quarter.</p>
                    </div>
                 </div>
              </div>
           </section>

           <section className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 px-1 border-l-4 border-blue-700 pl-4">Verified Academic Credentials</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {credentials.map((cred, i) => (
                   <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl hover:bg-slate-50 transition-all group">
                      <div className="flex justify-between items-start mb-6">
                         <div className="text-[10px] font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2 py-1 rounded">
                            {cred.platform}
                         </div>
                         <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-blue-700 transition-colors" />
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-2 leading-tight">{cred.title}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-8">{cred.date} • ID: {cred.id}</p>
                      
                      <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase tracking-widest">
                         <ShieldCheck className="w-4 h-4" /> SHA-256 Verified
                      </div>
                   </div>
                 ))}
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}
