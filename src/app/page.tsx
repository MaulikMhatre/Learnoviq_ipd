"use client";

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Zap, Globe, Shield, Star, BarChart3, Users, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Banner (Gov Style) */}
      <div className="bg-slate-50 border-b border-slate-200 py-2 px-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-500">
         <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> Ministry of Education (Simulated)</span>
            <span>Digital India Initiative</span>
         </div>
         <div className="flex gap-4">
            <Link href="#" className="hover:text-blue-600">English</Link>
            <Link href="#" className="hover:text-blue-600">हिंदी</Link>
            <Link href="#" className="hover:text-blue-600">मराठी</Link>
         </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center shadow-sm">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-slate-900">EduRath <span className="text-blue-600">AI</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="#" className="hover:text-blue-700 transition-colors">Course Catalog</Link>
            <Link href="#" className="hover:text-blue-700 transition-colors">Sadhana Network</Link>
            <Link href="#" className="hover:text-blue-700 transition-colors">About Platform</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-slate-600 hover:text-blue-700 transition-colors px-4">Login</Link>
            <Link href="/register" className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-md">
              Create Account
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-8"
          >
            Digital Mastery for Tier 2/3 Cities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight tracking-tight text-slate-900"
          >
            The Intelligent Gateway to <br /> <span className="text-blue-700">Expert Learning.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-slate-600 mb-12 leading-relaxed"
          >
            Learnoviq aggregates elite courses from NPTEL, Swayam, and Coursera, intelligently adapting them to your local bandwidth and learning goals.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Link href="/register" className="w-full sm:w-auto bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-md text-lg font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-700/10">
              Start Learning Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/discovery" className="w-full sm:w-auto px-10 py-4 rounded-md text-lg font-bold border border-slate-200 hover:bg-slate-50 transition-all text-slate-700">
              View Catalog
            </Link>
          </motion.div>

          {/* Social Proof Bar */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all"
          >
             <div className="font-display font-black text-xl text-slate-400">NPTEL</div>
             <div className="font-display font-black text-xl text-slate-400">SWAYAM</div>
             <div className="font-display font-black text-xl text-slate-400">COURSERA</div>
             <div className="font-display font-black text-xl text-slate-400">Learnoviq</div>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold mb-4">Empowering Every Student</h2>
             <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: "Optimized Connectivity", desc: "Our engine detects low-bandwidth conditions and automatically switches to high-compression video and text-first learning nodes." },
              { icon: Shield, title: "Passport Verification", desc: "Build a verified digital competency portfolio (Skill Passport) that is recognized by recruiters and industry partners globally." },
              { icon: Zap, title: "Adaptive Engine", desc: "AI continuously analyzes your performance to bypass concepts you've mastered, creating a personalized roadmap for success." }
            ].map((feature, i) => (
              <div key={i} className="space-y-4 p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                <div className="w-12 h-12 rounded-lg bg-blue-700/10 flex items-center justify-center text-blue-700 mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
                <Link href="#" className="flex items-center gap-1 text-sm font-bold text-blue-700 hover:underline">
                  Learn more <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 px-6 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
           {[
             { label: "Active Learners", value: "250,000+", icon: Users },
             { label: "Mastery Nodes", value: "15,000+", icon: Star },
             { label: "Partner Cities", value: "450+", icon: BarChart3 },
             { label: "Verified Skills", value: "100%", icon: Shield }
           ].map((stat, i) => (
             <div key={i} className="flex flex-col items-center text-center">
                <stat.icon className="w-10 h-10 text-white/40 mb-4" />
                <div className="text-4xl font-display font-bold mb-1">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">{stat.label}</div>
             </div>
           ))}
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center italic text-slate-600 leading-relaxed">
           <p className="text-2xl mb-8">
             "Learnoviq has bridged the gap for students in my district. The ability to access elite NPTEL content without worrying about high-speed internet is a game changer for our youth's employability."
           </p>
           <div className="not-italic flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-300 mb-4" />
              <div className="font-bold text-slate-900">Dr. Rajesh Kumar</div>
              <div className="text-xs uppercase font-bold tracking-widest text-slate-500">District Education Officer, Pune</div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-blue-700" />
              <span className="text-xl font-display font-bold">Learnoviq</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm">
              The Digital India initiative for adaptive education. Empowering the next generation of engineers and creators across every city.
            </p>
            <div className="flex gap-4">
               {['Twitter', 'LinkedIn', 'Instagram'].map(s => (
                 <Link key={s} href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 transition-colors">
                    <span className="sr-only">{s}</span>
                    <Globe className="w-4 h-4" />
                 </Link>
               ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-900">Platform</h4>
            <ul className="space-y-4 text-sm text-slate-500">
               <li><Link href="#" className="hover:text-blue-700">Course Catalog</Link></li>
               <li><Link href="#" className="hover:text-blue-700">Sadhana Leaderboard</Link></li>
               <li><Link href="#" className="hover:text-blue-700">Adaptive Path</Link></li>
               <li><Link href="#" className="hover:text-blue-700">Skill Passport</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-900">Support</h4>
            <ul className="space-y-4 text-sm text-slate-500">
               <li><Link href="#" className="hover:text-blue-700">Feedback</Link></li>
               <li><Link href="#" className="hover:text-blue-700">Privacy Policy</Link></li>
               <li><Link href="#" className="hover:text-blue-700">District Access</Link></li>
               <li><Link href="#" className="hover:text-blue-700">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-slate-400 text-center gap-4">
           <div>© 2026 Learnoviq . All rights reserved.</div>
           <div>Secure Government Grade Infrastructure</div>
        </div>
      </footer>
    </div>
  );
}
