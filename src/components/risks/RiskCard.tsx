import { Risk } from '@/types';
import { cn, formatDate } from '@/lib/utils';

const categoryLabels: Record<string, string> = {
  teknisk: 'Teknisk',
  organisatorisk: 'Organisatorisk',
  okonomisk: 'Økonomisk',
  tidsmassig: 'Tidsmæssig',
  kompetence: 'Kompetence',
};

const statusConfig: Record<string, { label: string; className: string }> = {
  aben: { label: 'Åben', className: 'bg-red-100 text-red-700' },
  mitigeret: { label: 'Mitigeret', className: 'bg-emerald-100 text-emerald-700' },
  accepteret: { label: 'Accepteret', className: 'bg-amber-100 text-amber-700' },
  lukket: { label: 'Lukket', className: 'bg-slate-100 text-slate-600' },
};

const scoreColor = (score: number) => {
  if (score >= 15) return 'bg-red-500 text-white';
  if (score >= 9) return 'bg-amber-400 text-amber-900';
  if (score >= 4) return 'bg-yellow-300 text-slate-800';
  return 'bg-emerald-300 text-slate-800';
};

interface RiskCardProps {
  risk: Risk;
}

export default function RiskCard({ risk: r }: RiskCardProps) {
  const status = statusConfig[r.status];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-semibold text-slate-900 text-sm">{r.title}</h3>
          <p className="mt-1 text-xs text-slate-500 leading-relaxed">{r.description}</p>
        </div>
        <div className={cn('shrink-0 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold', scoreColor(r.riskScore))}>
          {r.riskScore}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', status.className)}>
          {status.label}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
          {categoryLabels[r.category]}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
          S:{r.probability} × K:{r.impact}
        </span>
      </div>

      <div className="mt-3 rounded-lg bg-slate-50 p-3">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Mitigeringsplan</p>
        <p className="text-xs text-slate-700 leading-relaxed">{r.mitigationPlan}</p>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
        <span>Ejer: {r.owner}</span>
        <span>Identificeret {formatDate(r.identifiedDate)}</span>
      </div>
    </div>
  );
}
