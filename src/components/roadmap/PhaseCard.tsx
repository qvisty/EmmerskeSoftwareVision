import { Phase } from '@/types';
import { cn, formatDateShort } from '@/lib/utils';

const phaseColors = {
  blue: {
    light: 'bg-blue-50 border-blue-200',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-600',
  },
  violet: {
    light: 'bg-violet-50 border-violet-200',
    text: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-700',
    dot: 'bg-violet-600',
  },
  emerald: {
    light: 'bg-emerald-50 border-emerald-200',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-600',
  },
};

interface PhaseCardProps {
  phase: Phase;
}

export default function PhaseCard({ phase }: PhaseCardProps) {
  const colors = phaseColors[phase.color];

  return (
    <div className={cn('rounded-2xl border p-6 sm:p-8', colors.light)}>
      {/* Header */}
      <div className="mb-4">
        <span className={cn('rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide', colors.badge)}>
          År {phase.year} · {phase.startDate.slice(0, 4)}–{phase.endDate.slice(0, 4)}
        </span>
        <h2 className={cn('mt-3 text-2xl font-bold', colors.text)}>{phase.title}</h2>
        <p className="mt-1 text-slate-600">{phase.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Description */}
        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-2">Beskrivelse</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{phase.description}</p>
        </div>

        {/* Goals */}
        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-2">Mål for fasen</h3>
          <ul className="space-y-1.5">
            {phase.goals.map((goal, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', colors.dot)} />
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Key deliverables */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-slate-700 mb-3">Forventede leverancer</h3>
        <div className="flex flex-wrap gap-2">
          {phase.keyDeliverables.map((d, i) => (
            <span
              key={i}
              className="rounded-full bg-white/80 border border-white px-3 py-1 text-xs text-slate-700"
            >
              {d}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-white/60 px-4 py-3 text-sm text-slate-400 text-right">
        {formatDateShort(phase.startDate)} – {formatDateShort(phase.endDate)}
      </div>
    </div>
  );
}
