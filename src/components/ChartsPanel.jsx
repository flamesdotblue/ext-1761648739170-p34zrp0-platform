import React from 'react';

export default function ChartsPanel() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Traffic & Conversion Trends</h3>
          <p className="text-xs text-white/60">Last 30 days</p>
        </div>
        <div className="flex gap-2">
          <Legend color="bg-emerald-400" label="Traffic" />
          <Legend color="bg-cyan-400" label="Conversion" />
        </div>
      </div>

      <div className="relative h-64">
        <Grid />
        <AreaSeries colorFrom="from-emerald-400/30" colorTo="to-emerald-400/5" lineColor="bg-emerald-400" points={[12,18,16,22,28,26,31,35,33,38,36,42,47,50,48,56,60,58,63,66,68,70,72,74,76,75,78,80,82,85]} />
        <AreaSeries colorFrom="from-cyan-400/30" colorTo="to-cyan-400/5" lineColor="bg-cyan-400" points={[4,6,5,7,8,9,9,10,11,12,12,13,14,15,15,16,17,18,18,19,20,21,21,22,23,24,24,25,26,27]} />
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      <span className="text-white/80">{label}</span>
    </div>
  );
}

function Grid() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] rounded-lg" />
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  );
}

function AreaSeries({ points, colorFrom, colorTo, lineColor }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const padded = points.map((p) => (p - min) / (max - min + 0.0001));

  return (
    <div className="absolute inset-3">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
        {(() => {
          const step = 100 / (padded.length - 1);
          const path = padded
            .map((v, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${100 - v * 90 - 5}`)
            .join(' ');
          const area = `${path} L 100 100 L 0 100 Z`;
          return (
            <g>
              <defs>
                <linearGradient id={`grad-${lineColor}`} x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path d={area} className={`text-transparent fill-current ${colorFrom} ${colorTo}`} />
              <path d={path} className={`stroke-current ${lineColor}`} fill="none" strokeWidth="1.5" />
            </g>
          );
        })()}
      </svg>
    </div>
  );
}
