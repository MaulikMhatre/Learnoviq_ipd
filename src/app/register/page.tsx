"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, ArrowRight, ArrowLeft, BookOpen, Globe, Target, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-lg">
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2 mb-4 group">
            <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center shadow-md">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-slate-900 tracking-tight">EduRath <span className="text-blue-600">AI</span></span>
          </Link>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-10 px-4">
             {[1, 2, 3].map((i) => (
               <React.Fragment key={i}>
                <div className={`flex flex-col items-center gap-2 z-10`}>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${step >= i ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-400'}`}>
                      {step > i ? <CheckCircle2 className="w-5 h-5" /> : i}
                   </div>
                   <span className={`text-[9px] font-bold uppercase tracking-wider ${step >= i ? 'text-blue-700' : 'text-slate-400'}`}>
                      {i === 1 ? 'Details' : i === 2 ? 'Goals' : 'Region'}
                   </span>
                </div>
                {i < 3 && <div className={`flex-1 h-0.5 mx-2 -mt-6 transition-all ${step > i ? 'bg-blue-700' : 'bg-slate-100'}`} />}
               </React.Fragment>
             ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">Personal Details</h2>
                  <p className="text-slate-500 text-sm">Create your institutional learning identity</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="text" placeholder="Maulik Mhatre" className="input-field pl-10" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Institutional Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="email" placeholder="maulik@edu.in" className="input-field pl-10" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="password" placeholder="••••••••" className="input-field pl-10" />
                    </div>
                  </div>
                </div>

                <button onClick={nextStep} className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 group">
                  Continue
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">Academic Goals</h2>
                  <p className="text-slate-500 text-sm">What competencies are you aiming for?</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['Web Engineering', 'Data Analytics', 'AI Research', 'Cloud Systems', 'Product Design', 'Cyber Ops'].map((goal) => (
                    <button 
                      key={goal}
                      className="p-4 text-left rounded-lg border border-slate-200 hover:border-blue-600 hover:bg-blue-50 transition-all group flex items-start gap-3"
                    >
                      <div className="p-1.5 rounded bg-slate-100 text-slate-400 group-hover:bg-blue-700 group-hover:text-white">
                         <Target className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-bold text-slate-700">{goal}</span>
                    </button>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <button onClick={prevStep} className="btn-secondary flex-1 py-4 flex items-center justify-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button onClick={nextStep} className="btn-primary flex-[2] py-4 text-lg flex items-center justify-center gap-2 group">
                    Next Step
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">Local Optimization</h2>
                  <p className="text-slate-500 text-sm">Optimizing for regional connection quality</p>
                </div>

                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Preferred Language</label>
                    <select className="input-field bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E')] bg-[length:0.7em] bg-[right_1rem_center] bg-no-repeat appearance-none">
                      {[ 'English (Global)', 'Hindi (हिन्दी)', 'Marathi (मराठी)', 'Telugu (తెలుగు)', 'Tamil (தமிழ்)' ].map(l => (
                         <option key={l}>{l}</option>
                      ))}
                    </select>
                  </div>

                  <div className="p-5 rounded-xl border border-blue-100 bg-blue-50/50">
                     <div className="flex items-center gap-3 mb-2 text-blue-700">
                        <Globe className="w-5 h-5" />
                        <span className="font-bold text-sm">Tier 2/3 District Profile</span>
                     </div>
                     <p className="text-xs text-slate-600 leading-relaxed">
                        By selecting this, EduRath will activate <strong>"Digital India Low-Bandwidth Mode"</strong>, prioritizing compressed assets and text-alternatives for all NPTEL/Swayam modules.
                     </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button onClick={prevStep} className="btn-secondary flex-1 py-4 flex items-center justify-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button 
                    onClick={() => window.location.href = '/dashboard'}
                    className="btn-primary flex-[2] py-4 text-lg flex items-center justify-center gap-2 group"
                  >
                    Finish Registration
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="mt-8 text-center text-sm text-slate-500">
            Already registered?{' '}
            <Link href="/login" className="text-blue-700 font-bold hover:underline underline-offset-4">Sign in here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
