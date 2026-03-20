import Link from 'next/link';
import { phases } from '@/data/phases';
import { cn } from '@/lib/utils';

const phaseColors = {
  blue: {
    bg: 'bg-blue-600',
    light: 'bg-blue-50 border-blue-200',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-700',
  },
  violet: {
    bg: 'bg-violet-600',
    light: 'bg-violet-50 border-violet-200',
    text: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-700',
  },
  emerald: {
    bg: 'bg-emerald-600',
    light: 'bg-emerald-50 border-emerald-200',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
  },
};

export default function TimelineOverview() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">3-årig transformationsplan</h2>
          <p className="mt-2 text-slate-600">
            Tre faser der bygger på hinanden mod et fuldt integreret digitalt fundament
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase) => {
            const colors = phaseColors[phase.color];
            return (
              <Link
                key={phase.id}
                href="/roadmap"
                className={cn(
                  'group relative rounded-xl border p-6 transition-all hover:shadow-md',
                  colors.light
                )}
              >
                <span className={cn('rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide', colors.badge)}>
                  År {phase.year} · {phase.startDate.slice(0, 4)}
                </span>

                <h3 className={cn('mt-3 text-lg font-bold', colors.text)}>{phase.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{phase.subtitle}</p>

                <ul className="mt-4 space-y-1">
                  {phase.goals.slice(0, 3).map((goal, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className={cn('mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full', colors.bg)} />
                      {goal}
                    </li>
                  ))}
                  {phase.goals.length > 3 && (
                    <li className="text-xs text-slate-400">+{phase.goals.length - 3} flere mål...</li>
                  )}
                </ul>

                <div className="mt-4 text-xs font-medium group-hover:underline">
                  <span className={colors.text}>Se detaljer →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
