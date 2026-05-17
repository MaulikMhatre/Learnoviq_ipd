"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Search, 
  UserCircle, 
  GitFork, 
  Trophy, 
  Menu, 
  X,
  LogOut,
  Settings,
  BookOpen,
  Bell,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Course Catalog', href: '/discovery', icon: Search },
  { name: 'Skill Passport', href: '/passport', icon: UserCircle },
  { name: 'Mastery Path', href: '/path', icon: GitFork },
  { name: 'Leaderboard', href: '/leaderboard', icon: Trophy },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transition-transform duration-300 lg:translate-x-0 lg:static lg:block shadow-sm",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="h-20 flex items-center px-8 border-b border-slate-50">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight text-slate-900">
                Learnoviq<span className="text-blue-600">AI</span>
              </span>
            </Link>
          </div>

          <div className="flex-1 px-4 py-8 overflow-y-auto">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-lg transition-all group",
                      isActive 
                        ? "bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100" 
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                    )}
                  >
                    <div className="flex items-center gap-3">
                       <Icon className={cn("w-5 h-5", isActive ? "text-blue-700" : "text-slate-400 group-hover:text-slate-600")} />
                       <span className="text-sm font-semibold">{item.name}</span>
                    </div>
                    {isActive && <ChevronRight className="w-4 h-4" />}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-10 pt-10 border-t border-slate-100">
               <h4 className="px-4 text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 mb-4">Sadhana Network</h4>
               <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all text-sm font-semibold">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Pune District Hub
               </Link>
            </div>
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50/50">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-500 hover:bg-white hover:text-red-600 hover:shadow-sm transition-all text-sm font-semibold">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Navbar */}
        <header className="h-20 flex items-center justify-between px-6 lg:px-10 border-b border-slate-200 bg-white sticky top-0 z-30">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 lg:hidden text-slate-600 hover:bg-slate-100 rounded-md"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="hidden lg:block text-xs uppercase font-bold tracking-widest text-slate-400">
             Institutional Learning Portal v2.0
          </div>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-blue-700 transition-colors">
               <Bell className="w-5 h-5" />
               <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Maulik Mhatre</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Pune District • Rank #42</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 ring-2 ring-blue-500/10 flex items-center justify-center overflow-hidden border border-slate-200">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maulik" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto p-6 lg:p-10">
            {children}
          </div>
          
          {/* Internal Footer */}
          <footer className="max-w-7xl mx-auto px-6 lg:px-10 py-8 border-t border-slate-200 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
             <div>Learnoviq • Digital India</div>
             <div className="flex gap-6">
                <Link href="#" className="hover:text-blue-600">Privacy</Link>
                <Link href="#" className="hover:text-blue-600">Compliance</Link>
                <Link href="#" className="hover:text-blue-600">Accessibility</Link>
             </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
