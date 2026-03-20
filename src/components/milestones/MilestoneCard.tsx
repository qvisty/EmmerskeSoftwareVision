import { Milestone } from '@/types';
import { phases } from '@/data/phases';
import { cn, formatDate } from '@/lib/utils';
import { User, Calendar } from 'lucide-react';

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
  const priority = priorityConfig[m.priority];
  const phase = phases.find((p) => p.id === m.phaseId);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-slate-900 text-sm leading-snug">{m.title}</h3>
      <p className="mt-1 text-xs text-slate-500 leading-relaxed">{m.description}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', priority.className)}>
          {priority.label}
        </span>
        {phase && (
          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
            År {phase.year}
          </span>
        )}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {formatDate(m.dueDate)}
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
