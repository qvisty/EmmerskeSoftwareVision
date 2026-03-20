import PageHeader from '@/components/layout/PageHeader';
import { visionData } from '@/data/vision';
import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Vision | Emmerske SoftwareVision',
};

const phaseLabel: Record<number, string> = {
  1: 'Fase 1',
  2: 'Fase 2',
  3: 'Fase 3',
};

const phaseColor: Record<number, string> = {
  1: 'bg-blue-100 text-blue-700',
  2: 'bg-violet-100 text-violet-700',
  3: 'bg-emerald-100 text-emerald-700',
};

const phaseIndent: Record<number, string> = {
  1: 'ml-0',
  2: 'ml-8',
  3: 'ml-16',
};

export default function VisionPage() {
  return (
    <>
      <PageHeader
        title={visionData.headline}
        subtitle={visionData.subheadline}
        badge="Vision 2026–2028"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Full description */}
        <div className="prose prose-slate max-w-none mb-12">
          {visionData.fullDescription.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-slate-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key principles */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Bærende principper</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {visionData.keyPrinciples.map((principle, i) => {
              const [title, description] = principle.split(' – ');
              return (
                <div
                  key={i}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <p className="font-semibold text-slate-900 text-sm">{title}</p>
                  {description && (
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{description}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Goals */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-6">Strategiske mål</h2>
          <div className="space-y-4">
            {visionData.goals.map((goal) => {
              const Icon = goal.achieved ? CheckCircle2 : Circle;
              return (
                <div
                  key={goal.id}
                  className={cn(
                    'flex gap-4 rounded-xl border p-5',
                    phaseIndent[goal.targetPhase],
                    goal.achieved
                      ? 'border-emerald-200 bg-emerald-50'
                      : 'border-slate-200 bg-white'
                  )}
                >
                  <Icon
                    className={cn(
                      'mt-0.5 h-5 w-5 shrink-0',
                      goal.achieved ? 'text-emerald-600' : 'text-slate-300'
                    )}
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{goal.title}</h3>
                      <span
                        className={cn(
                          'rounded-full px-2 py-0.5 text-xs font-medium',
                          phaseColor[goal.targetPhase]
                        )}
                      >
                        {phaseLabel[goal.targetPhase]}
                      </span>
                      {goal.achieved && (
                        <span className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs font-medium">
                          Opnået ✓
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{goal.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
