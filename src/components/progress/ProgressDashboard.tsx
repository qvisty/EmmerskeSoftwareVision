'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { OverallProgress } from '@/types';
import { phases } from '@/data/phases';
import { monthlyMilestones } from '@/data/progress';

const phaseColors = {
  'fase-1': '#2563eb',
  'fase-2': '#7c3aed',
  'fase-3': '#059669',
};

interface ProgressDashboardProps {
  progress: OverallProgress;
}

export default function ProgressDashboard({ progress }: ProgressDashboardProps) {
  const pieData = [
    { name: 'Fuldført', value: progress.totalCompletedMilestones },
    { name: 'Resterende', value: progress.totalMilestones - progress.totalCompletedMilestones },
  ];

  return (
    <div className="space-y-8">
      {/* Overall stats */}
      <div className="grid gap-6 sm:grid-cols-3">
        {/* Donut chart */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 flex flex-col items-center">
          <h3 className="font-semibold text-slate-700 mb-4 self-start">Samlet fremdrift</h3>
          <div className="relative">
            <PieChart width={160} height={160}>
              <Pie
                data={pieData}
                cx={75}
                cy={75}
                innerRadius={50}
                outerRadius={70}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                strokeWidth={0}
              >
                <Cell fill="#2563eb" />
                <Cell fill="#e2e8f0" />
              </Pie>
            </PieChart>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-brand-700">{progress.overallPercent}%</span>
              <span className="text-xs text-slate-500">samlet</span>
            </div>
          </div>
          <p className="mt-2 text-sm text-slate-600 text-center">
            {progress.totalCompletedMilestones} af {progress.totalMilestones} milepæle
          </p>
        </div>

        {/* Phase progress */}
        <div className="sm:col-span-2 rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="font-semibold text-slate-700 mb-4">Fremdrift per fase</h3>
          <div className="space-y-4">
            {progress.phases.map((pp) => {
              const phase = phases.find((p) => p.id === pp.phaseId);
              if (!phase) return null;
              const color = phaseColors[pp.phaseId as keyof typeof phaseColors] ?? '#94a3b8';
              return (
                <div key={pp.phaseId}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">
                      År {phase.year}: {phase.title}
                    </span>
                    <span className="text-slate-500">
                      {pp.completedMilestones}/{pp.totalMilestones} · {pp.percentComplete}%
                    </span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pp.percentComplete}%`, backgroundColor: color }}
                    />
                  </div>
                  {pp.notes && (
                    <p className="mt-1 text-xs text-slate-500">{pp.notes}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Monthly milestone chart */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold text-slate-700 mb-6">Milepæle per måned – 2026</h3>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={monthlyMilestones} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} allowDecimals={false} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="planlagt" name="Planlagt" fill="#93c5fd" radius={[4, 4, 0, 0]} />
            <Bar dataKey="fuldfort" name="Fuldført" fill="#2563eb" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Budget usage */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="font-semibold text-slate-700 mb-4">Budgetforbrug per fase</h3>
        <div className="space-y-3">
          {progress.phases.map((pp) => {
            const phase = phases.find((p) => p.id === pp.phaseId);
            if (!phase) return null;
            return (
              <div key={pp.phaseId} className="flex items-center gap-4">
                <span className="w-36 text-sm text-slate-600 shrink-0">År {phase.year}</span>
                <div className="flex-1 h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-violet-500"
                    style={{ width: `${pp.budgetUsedPercent}%` }}
                  />
                </div>
                <span className="w-10 text-right text-sm text-slate-600 shrink-0">
                  {pp.budgetUsedPercent}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
