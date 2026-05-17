"use client";

import React from 'react';
import Link from 'next/link';
import { Github, Mail, Lock, Chrome, ArrowRight, BookOpen, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center gap-2 mb-4 group">
            <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center shadow-lg shadow-blue-700/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-display font-bold text-slate-900 tracking-tight">EduRath <span className="text-blue-600">AI</span></span>
          </Link>
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">
             <ShieldCheck className="w-3 h-3 text-green-500" /> Secure Login Portal
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50"
        >
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-500 text-sm">Access your personalized mastery dashboard</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = '/dashboard'; }}>
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="name@email.gov.in"
                  className="input-field pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Password</label>
                <Link href="#" className="text-xs text-blue-600 font-semibold hover:underline">Forgot?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="input-field pl-10"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 group">
              Login
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest">
              <span className="bg-white px-4 text-slate-400">Institutional Access</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-slate-200 hover:bg-slate-50 transition-all text-slate-600">
              <Chrome className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-bold">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-md border border-slate-200 hover:bg-slate-50 transition-all text-slate-600">
              <Github className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-bold">GitHub</span>
            </button>
          </div>
        </motion.div>

        <p className="mt-8 text-center text-sm text-slate-500">
          New to the platform?{' '}
          <Link href="/register" className="text-blue-700 font-bold hover:underline underline-offset-4">Create an account</Link>
        </p>

        <div className="mt-20 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300">
           Digital India Initiative • Secure Portal 2.0
        </div>
      </div>
    </div>
  );
}
