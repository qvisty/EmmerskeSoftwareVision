import { Phase } from '@/types';
import { milestones } from '@/data/milestones';
import { cn, formatDateShort } from '@/lib/utils';
import { CheckCircle2, Clock, Circle } from 'lucide-react';

const phaseColors = {
  blue: {
    bg: 'bg-blue-600',
    light: 'bg-blue-50 border-blue-200',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-700',
    dot: 'bg-blue-600',
  },
  violet: {
    bg: 'bg-violet-600',
    light: 'bg-violet-50 border-violet-200',
    text: 'text-violet-700',
    badge: 'bg-violet-100 text-violet-700',
    dot: 'bg-violet-600',
  },
  emerald: {
    bg: 'bg-emerald-600',
    light: 'bg-emerald-50 border-emerald-200',
    text: 'text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    dot: 'bg-emerald-600',
  },
};

const statusLabels: Record<string, string> = {
  'i-gang': 'I gang',
  'ikke-startet': 'Ikke startet',
  afsluttet: 'Afsluttet',
};

const statusIcon = {
  'i-gang': Clock,
  'ikke-startet': Circle,
  afsluttet: CheckCircle2,
};

interface PhaseCardProps {
  phase: Phase;
}

export default function PhaseCard({ phase }: PhaseCardProps) {
  const colors = phaseColors[phase.color];
  const phaseMilestones = milestones.filter((m) => m.phaseId === phase.id);
  const StatusIcon = statusIcon[phase.status];

  return (
    <div className={cn('rounded-2xl border p-6 sm:p-8', colors.light)}>
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={cn('rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide', colors.badge)}>
              År {phase.year} · {phase.startDate.slice(0, 4)}–{phase.endDate.slice(0, 4)}
            </span>
            <span className={cn('flex items-center gap-1 text-xs text-slate-500')}>
              <StatusIcon className="h-3 w-3" />
              {statusLabels[phase.status]}
            </span>
          </div>
          <h2 className={cn('text-2xl font-bold', colors.text)}>{phase.title}</h2>
          <p className="mt-1 text-slate-600">{phase.subtitle}</p>
        </div>
        <div className="text-right">
          <p className={cn('text-4xl font-bold', colors.text)}>{phase.completionPercent}%</p>
          <p className="text-xs text-slate-500">fuldført</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-3 w-full rounded-full bg-white/70 overflow-hidden border border-white">
        <div
          className={cn('h-full rounded-full transition-all', colors.bg)}
          style={{ width: `${phase.completionPercent}%` }}
        />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
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
        <h3 className="text-sm font-semibold text-slate-700 mb-3">Nøgle-leverancer</h3>
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

      {/* Milestone count */}
      <div className="mt-6 flex items-center justify-between rounded-xl bg-white/60 px-4 py-3 text-sm">
        <span className="text-slate-600">
          {phaseMilestones.filter((m) => m.status === 'fuldfort').length} af{' '}
          {phaseMilestones.length} milepæle fuldført
        </span>
        <span className="text-slate-400">
          {formatDateShort(phase.startDate)} – {formatDateShort(phase.endDate)}
        </span>
      </div>
    </div>
  );
}
