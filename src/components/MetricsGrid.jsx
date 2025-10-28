import React from 'react';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const cards = [
  {
    title: 'Active Users',
    value: '24,381',
    change: '+8.2% MoM',
    icon: Users,
    color: 'from-emerald-400/20 to-emerald-500/10',
  },
  {
    title: 'Revenue',
    value: '$182,940',
    change: '+3.7% WoW',
    icon: DollarSign,
    color: 'from-cyan-400/20 to-cyan-500/10',
  },
  {
    title: 'Conversion',
    value: '4.87%',
    change: '+0.6% WoW',
    icon: TrendingUp,
    color: 'from-violet-400/20 to-violet-500/10',
  },
  {
    title: 'System Health',
    value: '99.97%',
    change: 'Operational',
    icon: Activity,
    color: 'from-emerald-400/20 to-lime-500/10',
  },
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <MetricCard key={card.title} {...card} />
      ))}
    </div>
  );
}

function MetricCard({ title, value, change, icon: Icon, color }) {
  return (
    <div className={`relative rounded-xl border border-white/10 bg-gradient-to-br ${color} p-4 overflow-hidden`}> 
      <div className="absolute -right-4 -top-6 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl" />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-white/60">{title}</p>
          <p className="mt-2 text-2xl font-semibold">{value}</p>
        </div>
        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
          <Icon className="h-5 w-5 text-emerald-400" />
        </div>
      </div>
      <div className="mt-3 text-xs text-emerald-300">{change}</div>
      <Sparkline />
    </div>
  );
}

function Sparkline() {
  const bars = [40, 28, 32, 22, 44, 38, 56, 48, 62, 58, 72, 68];
  return (
    <div className="mt-4 flex items-end gap-1 h-12">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-2 rounded bg-gradient-to-t from-emerald-400/30 to-emerald-300/80"
          style={{ height: `${Math.max(8, h)}%` }}
        />
      ))}
    </div>
  );
}
