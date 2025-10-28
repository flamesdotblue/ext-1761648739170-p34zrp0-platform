import React from 'react';
import HeroCover from './components/HeroCover';
import MetricsGrid from './components/MetricsGrid';
import ChartsPanel from './components/ChartsPanel';
import ActivityTable from './components/ActivityTable';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <HeroCover />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <section className="mb-8">
          <MetricsGrid />
        </section>
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2">
            <ChartsPanel />
          </div>
          <div className="xl:col-span-1">
            <ActivityTable />
          </div>
        </section>
      </main>
    </div>
  );
}
