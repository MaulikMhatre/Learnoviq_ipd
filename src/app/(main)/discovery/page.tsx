"use client";

import React, { useState } from 'react';
import { Search, Filter,Zap, BookOpen, Clock, Users, Star, ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProviderBadge } from '@/components/EduRathUI';

const COURSES = [
  { id: 1, title: 'Introduction to Internet of Things', provider: 'NPTEL', students: 45000, rating: 4.8, level: 'Beginner', duration: '12 weeks' },
  { id: 2, title: 'Data Structures and Algorithms', provider: 'Swayam', students: 120000, rating: 4.9, level: 'Intermediate', duration: '8 weeks' },
  { id: 3, title: 'Cloud Computing Specialization', provider: 'Coursera', students: 85000, rating: 4.7, level: 'Advanced', duration: '16 weeks' },
  { id: 4, title: 'Machine Learning Foundations', provider: 'NPTEL', students: 72000, rating: 4.6, level: 'Beginner', duration: '10 weeks' },
  { id: 5, title: 'Ethical Hacking & Cyber Security', provider: 'Swayam', students: 33000, rating: 4.5, level: 'Intermediate', duration: '14 weeks' },
  { id: 6, title: 'AI for Healthcare Professionals', provider: 'Coursera', students: 15000, rating: 4.9, level: 'All Levels', duration: '6 weeks' },
];

export default function DiscoveryPage() {
  const [activeProvider, setActiveProvider] = useState('All');

  return (
    <div className="space-y-10 pb-20">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold text-slate-900 tracking-tight">Academic Course Catalog</h1>
        <p className="text-slate-500 max-w-2xl leading-relaxed">
           Aggregated elite courses from NPTEL, Swayam, and Coursera. Optimized for your regional bandwidth profile as part of the Digital India Initiative.
        </p>
      </div>

      {/* Structured Search Bar */}
      <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-2">
         <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
               type="text" 
               placeholder="Search by keyword, skill, faculty or provider..."
               className="w-full pl-12 pr-4 py-4 rounded-lg bg-slate-50 border-none outline-none text-slate-700 text-sm font-medium focus:bg-white transition-colors"
            />
         </div>
         <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-bold shadow-lg shadow-blue-700/10 transition-all">
            Find Courses
         </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Filters sidebar */}
        <aside className="w-full lg:w-72 space-y-10">
           <section className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 px-1 border-b pb-2">Institutional Providers</h3>
              <div className="space-y-1.5">
                 {['All Platforms', 'NPTEL India', 'Swayam', 'Coursera', 'EduRath Local'].map((p) => (
                   <button 
                     key={p}
                     onClick={() => setActiveProvider(p)}
                     className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${activeProvider === p ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                   >
                     {p}
                   </button>
                 ))}
              </div>
           </section>

           <section className="space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 px-1 border-b pb-2">Academic Level</h3>
              <div className="space-y-3 px-1">
                 {['Undergraduate', 'Postgraduate', 'Professional Certification'].map((lvl) => (
                   <label key={lvl} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded border border-slate-300 group-hover:border-blue-700 transition-colors" />
                      <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">{lvl}</span>
                   </label>
                 ))}
              </div>
           </section>

           <div className="bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden">
              <div className="relative z-10">
                 <h4 className="font-bold flex items-center gap-2 mb-2 text-sm">
                    <Zap className="w-4 h-4 text-blue-400" />
                    Adaptive Filtering
                 </h4>
                 <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                   Currently filtering for <strong>Low-Bandwidth</strong> compatible modules for Pune District users.
                 </p>
                 <button className="text-[10px] font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300">Adjust Settings</button>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-2xl" />
           </div>
        </aside>

        {/* Course content area */}
        <div className="flex-1 space-y-8">
           <div className="flex items-center justify-between text-sm font-bold text-slate-400 tracking-widest uppercase">
              <span>Showing 1,240 results</span>
              <button className="flex items-center gap-2 hover:text-slate-900 transition-colors">Sort by Rating <ChevronDown className="w-4 h-4" /></button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COURSES.map((course) => (
                <div key={course.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group p-6">
                   <div className="flex justify-between items-start mb-6">
                      <ProviderBadge provider={course.provider} />
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                         <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                         {course.rating}
                      </div>
                   </div>

                   <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">{course.title}</h3>
                   <div className="flex items-center gap-6 mb-8 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {course.duration}</span>
                      <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {(course.students/1000).toFixed(0)}k Learners</span>
                   </div>

                   <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                         {course.level}
                      </span>
                      <button className="flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 group-hover:gap-3 transition-all">
                         View Details <ArrowRight className="w-4 h-4" />
                      </button>
                   </div>
                </div>
              ))}
           </div>

           <div className="pt-10 flex justify-center">
              <button className="btn-secondary px-10 py-4 font-bold text-slate-900">Load More Modules</button>
           </div>
        </div>
      </div>
    </div>
  );
}
