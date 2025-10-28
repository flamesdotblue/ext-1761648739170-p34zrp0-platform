import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <header className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="backdrop-blur-sm/0">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              <span className="text-white">Realtime Metrics</span>{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-400 to-green-500">Dashboard</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80">
              Monitor key performance indicators across your product in a sleek, futuristic interface. Explore trends, outliers, and system health at a glance.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button className="px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition">
                Live Overview
              </button>
              <button className="px-4 py-2 rounded-md border border-white/20 hover:bg-white/5 transition text-white/90">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
