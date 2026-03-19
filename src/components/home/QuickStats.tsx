import { CheckCircle2, Target, Cpu, Calendar } from 'lucide-react';
import { progressData } from '@/data/progress';
import { systems } from '@/data/systems';

export default function QuickStats() {
  const integratedSystems = systems.filter(
    (s) => s.integrationStatus === 'integreret' || s.integrationStatus === 'under-integration'
  ).length;

  const stats = [
    {
      label: 'Milepæle fuldført',
      value: `${progressData.totalCompletedMilestones}/${progressData.totalMilestones}`,
      icon: CheckCircle2,
      color: 'emerald',
    },
    {
      label: 'Samlet fremdrift',
      value: `${progressData.overallPercent}%`,
      icon: Target,
      color: 'blue',
    },
    {
      label: 'Systemer integreret',
      value: `${integratedSystems}/${systems.length}`,
      icon: Cpu,
      color: 'violet',
    },
    {
      label: 'År til fuld platform',
      value: '3',
      icon: Calendar,
      color: 'amber',
    },
  ];

  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    violet: 'bg-violet-50 text-violet-700 border-violet-100',
    amber: 'bg-amber-50 text-amber-700 border-amber-100',
  };

  const iconColorMap: Record<string, string> = {
    emerald: 'text-emerald-500',
    blue: 'text-blue-500',
    violet: 'text-violet-500',
    amber: 'text-amber-500',
  };

  return (
    <section className="bg-white border-b border-slate-200 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`rounded-xl border p-6 ${colorMap[stat.color]}`}
              >
                <Icon className={`h-6 w-6 mb-3 ${iconColorMap[stat.color]}`} />
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm opacity-75">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
