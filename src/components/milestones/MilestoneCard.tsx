import { Milestone } from '@/types';
import { phases } from '@/data/phases';
import { cn, formatDate } from '@/lib/utils';
import { CheckCircle2, Clock, Circle, AlertCircle, User, Calendar } from 'lucide-react';

const statusConfig: Record<
  string,
  { label: string; className: string; icon: typeof CheckCircle2 }
> = {
  fuldfort: {
    label: 'Fuldført',
    className: 'bg-emerald-100 text-emerald-700',
    icon: CheckCircle2,
  },
  'i-gang': {
    label: 'I gang',
    className: 'bg-blue-100 text-blue-700',
    icon: Clock,
  },
  planlagt: {
    label: 'Planlagt',
    className: 'bg-slate-100 text-slate-600',
    icon: Circle,
  },
  forsinket: {
    label: 'Forsinket',
    className: 'bg-red-100 text-red-700',
    icon: AlertCircle,
  },
};

const priorityConfig: Record<string, { label: string; className: string }> = {
  kritisk: { label: 'Kritisk', className: 'bg-red-100 text-red-700' },
  hoj: { label: 'Høj', className: 'bg-amber-100 text-amber-700' },
  medium: { label: 'Medium', className: 'bg-blue-100 text-blue-700' },
  lav: { label: 'Lav', className: 'bg-slate-100 text-slate-600' },
};

interface MilestoneCardProps {
  milestone: Milestone;
}

export default function MilestoneCard({ milestone: m }: MilestoneCardProps) {
  const status = statusConfig[m.status];
  const priority = priorityConfig[m.priority];
  const phase = phases.find((p) => p.id === m.phaseId);
  const StatusIcon = status.icon;

  return (
    <div
      className={cn(
        'rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md',
        m.status === 'forsinket' && 'border-red-200',
        m.status === 'fuldfort' && 'border-emerald-100'
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <StatusIcon
            className={cn(
              'mt-0.5 h-5 w-5 shrink-0',
              m.status === 'fuldfort' && 'text-emerald-500',
              m.status === 'i-gang' && 'text-blue-500',
              m.status === 'planlagt' && 'text-slate-400',
              m.status === 'forsinket' && 'text-red-500'
            )}
          />
          <div className="min-w-0">
            <h3
              className={cn(
                'font-semibold text-slate-900 text-sm leading-snug',
                m.status === 'fuldfort' && 'line-through text-slate-500'
              )}
            >
              {m.title}
            </h3>
            <p className="mt-1 text-xs text-slate-500 leading-relaxed line-clamp-2">{m.description}</p>
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', status.className)}>
          {status.label}
        </span>
        <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', priority.className)}>
          {priority.label}
        </span>
        {phase && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
            År {phase.year}
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {m.completedDate ? `Fuldført ${formatDate(m.completedDate)}` : `Frist: ${formatDate(m.dueDate)}`}
        </span>
        <span className="flex items-center gap-1">
          <User className="h-3 w-3" />
          {m.owner}
        </span>
      </div>

      {m.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {m.tags.map((tag) => (
            <span key={tag} className="rounded-sm bg-slate-50 border border-slate-200 px-2 py-0.5 text-xs text-slate-500">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
