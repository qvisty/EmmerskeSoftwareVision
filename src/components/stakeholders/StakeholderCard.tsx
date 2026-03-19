import { Stakeholder } from '@/types';
import { cn } from '@/lib/utils';

const groupLabels: Record<string, string> = {
  ledelse: 'Ledelse',
  laerere: 'Lærere',
  elever: 'Elever',
  administration: 'Administration',
  leverandorer: 'Leverandører',
  bestyrelse: 'Bestyrelse',
};

const influenceConfig: Record<string, { label: string; color: string }> = {
  hoj: { label: 'Høj', color: 'bg-red-100 text-red-700' },
  medium: { label: 'Medium', color: 'bg-amber-100 text-amber-700' },
  lav: { label: 'Lav', color: 'bg-slate-100 text-slate-600' },
};

const groupColors: Record<string, string> = {
  ledelse: 'bg-brand-100 text-brand-700',
  laerere: 'bg-emerald-100 text-emerald-700',
  elever: 'bg-violet-100 text-violet-700',
  administration: 'bg-amber-100 text-amber-700',
  leverandorer: 'bg-slate-100 text-slate-700',
  bestyrelse: 'bg-blue-100 text-blue-700',
};

const avatarBgColors = [
  'bg-brand-600',
  'bg-emerald-600',
  'bg-violet-600',
  'bg-amber-600',
  'bg-slate-600',
];

interface StakeholderCardProps {
  stakeholder: Stakeholder;
  index: number;
}

export default function StakeholderCard({ stakeholder: s, index }: StakeholderCardProps) {
  const influence = influenceConfig[s.influence];
  const interest = influenceConfig[s.interest];
  const avatarBg = avatarBgColors[index % avatarBgColors.length];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div
          className={cn(
            'flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white',
            avatarBg
          )}
        >
          {s.avatarInitials}
        </div>
        <div className="min-w-0">
          <h3 className="font-bold text-slate-900">{s.name}</h3>
          <p className="text-sm text-slate-500">{s.role}</p>
          <span className={cn('mt-1 inline-block rounded-full px-2 py-0.5 text-xs font-medium', groupColors[s.group])}>
            {groupLabels[s.group]}
          </span>
        </div>
      </div>

      <div className="mt-4 flex gap-4">
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Indflydelse</p>
          <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', influence.color)}>
            {influence.label}
          </span>
        </div>
        <div>
          <p className="text-xs text-slate-400 uppercase tracking-wide font-medium mb-1">Interesse</p>
          <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', interest.color)}>
            {interest.label}
          </span>
        </div>
      </div>

      {s.responsibilities.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Ansvar</p>
          <ul className="space-y-1">
            {s.responsibilities.map((r, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
