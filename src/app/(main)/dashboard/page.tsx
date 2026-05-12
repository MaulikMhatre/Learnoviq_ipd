"use client";

import React from 'react';
import { 
  BarChart3, 
  Clock, 
  MapPin, 
  TrendingUp, 
  Zap, 
  ArrowRight,
  Search,
  BookOpen,
  Link,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { LeaderboardCard, AdaptiveTimeline, ProviderBadge } from '@/components/EduRathUI';

const sampleTimeline = [
  { title: 'Foundations of Neural Networks', provider: 'NPTEL', duration: '4h 30m', difficulty: 'Beginner', completed: true },
  { title: 'Vector Database Architecture', provider: 'EduRath', duration: '2h 15m', difficulty: 'Intermediate', completed: false },
  { title: 'Natural Language Processing', provider: 'Coursera', duration: '12h 00m', difficulty: 'Advanced', completed: false },
];

const sampleLeaderboard = [
  { rank: 1, name: 'Atharva Patil', points: 12450, district: 'Pune' },
  { rank: 2, name: 'Sneha Rao', points: 11200, district: 'Nashik' },
  { rank: 3, name: 'Rahul Deshmukh', points: 10850, district: 'Nagpur' },
  { rank: 4, name: 'Priya Shinde', points: 9400, district: 'Aurangabad' },
  { rank: 5, name: 'Amit Kulkarni', points: 8900, district: 'Solapur' },
];

export default function Dashboard() {
  return (
    <div className="space-y-10 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 w-fit px-3 py-1 rounded-md mb-2">
             <Zap className="w-3 h-3" /> Adaptive Engine Active
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900">Namaste, Maulik!</h1>
          <p className="text-slate-500 max-w-xl">
            You've mastered <span className="text-blue-700 font-bold">12 nodes</span> this week. Your current proficiency in Python Engineering is in the <span className="text-blue-700 font-bold">Top 2%</span> of Pune District.
          </p>
        </div>
        <div className="flex gap-4">
           <button className="btn-secondary px-6">View Analytics</button>
           <button className="btn-primary px-6 flex items-center gap-2">
              Resume Module <ChevronRight className="w-4 h-4" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main learning column */}
        <div className="lg:col-span-2 space-y-10">
          
          <section className="space-y-4">
             <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-900 border-l-4 border-blue-700 pl-3">Active Mastery Path: AI Architect</h2>
                <Link href="/path" className="text-xs font-bold text-blue-700 hover:underline">Full Knowledge Graph</Link>
             </div>
             <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <AdaptiveTimeline steps={sampleTimeline} />
             </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm group hover:border-blue-700/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 mb-6 font-bold">
                   <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Cognitive Retention</h3>
                <p className="text-sm text-slate-500 mb-6">Your retention across NPTEL modules is up by 15% following the new adaptive spaced-repetition nodes.</p>
                <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                   <div className="w-[85%] h-full bg-blue-700 rounded-full" />
                </div>
             </section>
             <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm group hover:border-blue-700/30 transition-all">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-slate-900 mb-6 font-bold">
                   <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Regional Ranking</h3>
                <p className="text-sm text-slate-500 mb-6">You are currently ranked #42 in Pune District. Complete 2 more Swayam modules to enter the Top 25.</p>
                <div className="text-blue-700 font-bold text-sm flex items-center gap-1">
                   #42 in Pune <ChevronRight className="w-4 h-4" />
                </div>
             </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
           <section className="space-y-4">
              <h2 className="text-lg font-bold text-slate-900 px-1">Sadhana Leaderboard</h2>
              <div className="space-y-3">
                 {sampleLeaderboard.map((user) => (
                   <LeaderboardCard key={user.rank} {...user} />
                 ))}
              </div>
              <button className="w-full py-4 text-xs font-bold uppercase tracking-widest text-slate-400 border-2 border-dashed border-slate-200 rounded-xl hover:border-blue-700 hover:text-blue-700 transition-all">
                 View District Rankings
              </button>
           </section>

           <section className="bg-blue-700 p-8 rounded-3xl text-white relative overflow-hidden shadow-xl shadow-blue-700/10">
              <div className="relative z-10">
                 <h3 className="text-xl font-bold mb-2">District Hackathon</h3>
                 <p className="text-sm text-white/70 mb-6 leading-relaxed">Join the Pune district team as we compete against Mumbai in the state-level mastery challenge.</p>
                 <button className="w-full bg-white text-blue-700 font-bold py-3 rounded-lg text-sm hover:bg-slate-50 transition-colors shadow-lg">
                    Register Pune Team
                 </button>
              </div>
              <MapPin className="absolute -right-8 -bottom-8 w-40 h-40 text-black/10" />
           </section>
        </div>
      </div>
    </div>
  );
}
