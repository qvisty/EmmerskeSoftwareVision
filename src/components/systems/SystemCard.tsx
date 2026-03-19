import { System } from '@/types';
import { cn } from '@/lib/utils';
import { phases } from '@/data/phases';
import { CheckCircle2, Clock, Circle, ArrowRight } from 'lucide-react';
import { systems } from '@/data/systems';

const integrationConfig: Record<
  string,
  { label: string; className: string; icon: typeof CheckCircle2 }
> = {
  integreret: {
    label: 'Integreret',
    className: 'bg-emerald-100 text-emerald-700',
    icon: CheckCircle2,
  },
  'under-integration': {
    label: 'Under integration',
    className: 'bg-amber-100 text-amber-700',
    icon: Clock,
  },
  planlagt: {
    label: 'Planlagt',
    className: 'bg-slate-100 text-slate-600',
    icon: Circle,
  },
};

const categoryLabels: Record<string, string> = {
  kommunikation: 'Kommunikation',
  administration: 'Administration',
  undervisning: 'Undervisning',
  infrastruktur: 'Infrastruktur',
  automatisering: 'Automatisering',
};

const vendorColors: Record<string, string> = {
  Microsoft: 'bg-blue-50 text-blue-700 border-blue-100',
  'CoWork A/S': 'bg-violet-50 text-violet-700 border-violet-100',
  MaCom: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'EASY-A A/S': 'bg-amber-50 text-amber-700 border-amber-100',
};

interface SystemCardProps {
  system: System;
}

export default function SystemCard({ system: sys }: SystemCardProps) {
  const integration = integrationConfig[sys.integrationStatus];
  const IntIcon = integration.icon;
  const phase = phases.find((p) => p.id === sys.phaseId);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-bold text-slate-900">{sys.name}</h3>
          <span
            className={cn(
              'mt-1 inline-block rounded-full border px-2 py-0.5 text-xs font-medium',
              vendorColors[sys.vendor] ?? 'bg-slate-50 text-slate-600 border-slate-100'
            )}
          >
            {sys.vendor}
          </span>
        </div>
        <span className={cn('flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-xs font-medium', integration.className)}>
          <IntIcon className="h-3 w-3" />
          {integration.label}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{sys.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className="rounded-sm bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
          {categoryLabels[sys.category]}
        </span>
        {phase && (
          <span className="rounded-sm bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
            Introduceres År {phase.year}
          </span>
        )}
      </div>

      {sys.features.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Nøglefunktioner</p>
          <div className="flex flex-wrap gap-1.5">
            {sys.features.map((f) => (
              <span key={f} className="rounded-full bg-brand-50 border border-brand-100 px-2 py-0.5 text-xs text-brand-700">
                {f}
              </span>
            ))}
          </div>
        </div>
      )}

      {sys.integratesWith.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">
            Integrerer med
          </p>
          <div className="flex flex-wrap gap-1.5">
            {sys.integratesWith.map((id) => {
              const related = systems.find((s) => s.id === id);
              return (
                <span key={id} className="rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 text-xs text-slate-600">
                  {related?.name ?? id}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
