import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowUpRight, CheckCircle2, Circle } from 'lucide-react';

// ProviderBadge Component
export const ProviderBadge = ({ provider }: { provider: string }) => {
  const styles: Record<string, string> = {
    'NPTEL': 'bg-orange-50 text-orange-700 border-orange-200',
    'Swayam': 'bg-blue-50 text-blue-700 border-blue-200',
    'Coursera': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'EduRath': 'bg-slate-50 text-slate-700 border-slate-200',
  };

  return (
    <span className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${styles[provider] || styles['EduRath']}`}>
      {provider}
    </span>
  );
};

// LeaderboardCard Component
export const LeaderboardCard = ({ rank, name, points, district }: { rank: number, name: string, points: number, district: string }) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 transition-all hover:bg-slate-50">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${rank <= 3 ? 'bg-amber-100 text-amber-700' : 'bg-slate-50 text-slate-500'}`}>
        {rank}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-bold text-sm truncate text-slate-900">{name}</h4>
        <p className="text-[10px] text-slate-500 truncate uppercase font-bold tracking-wider">{district}</p>
      </div>
      <div className="text-right">
        <div className="font-bold text-sm text-blue-700">{points.toLocaleString()}</div>
        <div className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Points</div>
      </div>
    </div>
  );
};

// AdaptiveTimeline Component
export const AdaptiveTimeline = ({ steps }: { steps: any[] }) => {
  return (
    <div className="space-y-4">
      {steps.map((step, idx) => (
        <div key={idx} className="relative flex gap-4 bg-white p-4 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
          <div className="mt-1">
            {step.completed ? (
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-slate-200" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-1">
              <h4 className={`font-bold text-sm ${step.completed ? 'text-slate-400 line-through' : 'text-slate-900'}`}>{step.title}</h4>
              <ProviderBadge provider={step.provider} />
            </div>
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">{step.duration} • {step.difficulty}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
