import React from 'react';

const rows = [
  { id: 'EVT-9023', source: 'API', metric: 'Requests', value: '12,491', status: 'OK', time: '2m ago' },
  { id: 'EVT-9022', source: 'Web', metric: 'Signups', value: '482', status: 'OK', time: '9m ago' },
  { id: 'EVT-9021', source: 'Batch', metric: 'Revenue', value: '$12,940', status: 'OK', time: '23m ago' },
  { id: 'EVT-9020', source: 'API', metric: 'Errors', value: '14', status: 'Warn', time: '31m ago' },
  { id: 'EVT-9019', source: 'Worker', metric: 'Latency', value: '123ms', status: 'OK', time: '52m ago' },
];

export default function ActivityTable() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 h-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Recent Activity</h3>
        <p className="text-xs text-white/60">Live event stream</p>
      </div>
      <div className="overflow-hidden rounded-lg border border-white/5">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5 text-white/70">
            <tr>
              <Th>ID</Th>
              <Th>Source</Th>
              <Th>Metric</Th>
              <Th>Value</Th>
              <Th>Status</Th>
              <Th>Time</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-white/[0.04] transition">
                <Td className="font-mono text-emerald-300">{r.id}</Td>
                <Td>{r.source}</Td>
                <Td>{r.metric}</Td>
                <Td>{r.value}</Td>
                <Td>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      r.status === 'OK' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-amber-500/15 text-amber-300'
                    }`}
                  >
                    {r.status}
                  </span>
                </Td>
                <Td className="text-white/70">{r.time}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="text-left font-medium px-3 py-2">{children}</th>
  );
}

function Td({ children, className = '' }) {
  return (
    <td className={`px-3 py-2 ${className}`}>{children}</td>
  );
}
