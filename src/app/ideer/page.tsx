import PageHeader from '@/components/layout/PageHeader';
import { ideaCategories } from '@/data/ideer';
import { cn } from '@/lib/utils';
import { Lightbulb, TrendingUp, Wrench } from 'lucide-react';

export const metadata = {
  title: 'Idéer til automatisering | Emmerske SoftwareVision',
};

const complexityConfig = {
  lav: { label: 'Enkel', className: 'bg-emerald-100 text-emerald-700' },
  medium: { label: 'Moderat', className: 'bg-amber-100 text-amber-700' },
  hoj: { label: 'Kompleks', className: 'bg-red-100 text-red-700' },
};

const valueConfig = {
  lav: { label: 'Lav værdi', className: 'bg-slate-100 text-slate-600' },
  medium: { label: 'God værdi', className: 'bg-blue-100 text-blue-700' },
  hoj: { label: 'Høj værdi', className: 'bg-violet-100 text-violet-700' },
};

export default function IdeerPage() {
  const totalIdeas = ideaCategories.reduce((sum, cat) => sum + cat.ideas.length, 0);
  const highValueCount = ideaCategories.reduce(
    (sum, cat) => sum + cat.ideas.filter((i) => i.value === 'hoj').length,
    0
  );
  const simpleCount = ideaCategories.reduce(
    (sum, cat) => sum + cat.ideas.filter((i) => i.complexity === 'lav').length,
    0
  );

  return (
    <>
      <PageHeader
        title="Idéer til automatisering"
        subtitle="En åben brainstorm over processer på efterskolen, der potentielt kan automatiseres"
        badge="Mindmap · Ikke konkret endnu"
        badgeColor="amber"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Disclaimer banner */}
        <div className="mb-10 rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
          <div className="flex items-start gap-4">
            <div className="text-3xl shrink-0">🗺️</div>
            <div>
              <h2 className="font-bold text-amber-900 text-lg">Dette er en mindmap – ikke en plan</h2>
              <p className="mt-2 text-amber-800 leading-relaxed">
                Ideerne på denne side er <strong>ikke konkrete projekter eller løfter</strong>.
                De er resultatet af en indledende brainstorm over, hvilke processer på efterskolen
                der <em>potentielt</em> kunne have gavn af automatisering — som inspiration og
                udgangspunkt for dialog.
              </p>
              <p className="mt-2 text-amber-800 leading-relaxed">
                Nogle idéer er enkle og kan realiseres hurtigt. Andre er komplekse og kræver
                grundig analyse, afprøvning og økonomi. <strong>Intet af dette er besluttet.</strong>{' '}
                Vi samler tankerne — og tager dem én ad gangen, når vi er klar.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-10 grid grid-cols-3 gap-4">
          <div className="rounded-xl border border-violet-200 bg-violet-50 p-4 text-center">
            <p className="text-3xl font-bold text-violet-700">{totalIdeas}</p>
            <p className="text-sm text-violet-600 mt-1">Idéer i alt</p>
          </div>
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center">
            <p className="text-3xl font-bold text-emerald-700">{simpleCount}</p>
            <p className="text-sm text-emerald-600 mt-1">Enkle at realisere</p>
          </div>
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-center">
            <p className="text-3xl font-bold text-blue-700">{highValueCount}</p>
            <p className="text-sm text-blue-600 mt-1">Høj potentiel værdi</p>
          </div>
        </div>

        {/* Legend */}
        <div className="mb-8 flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-2 font-medium text-slate-600">
            <Wrench className="h-3.5 w-3.5" /> Kompleksitet:
          </div>
          {Object.entries(complexityConfig).map(([, v]) => (
            <span key={v.label} className={cn('rounded-full px-2.5 py-1 font-medium', v.className)}>
              {v.label}
            </span>
          ))}
          <div className="flex items-center gap-2 font-medium text-slate-600 ml-4">
            <TrendingUp className="h-3.5 w-3.5" /> Potentiel værdi:
          </div>
          {Object.entries(valueConfig).map(([, v]) => (
            <span key={v.label} className={cn('rounded-full px-2.5 py-1 font-medium', v.className)}>
              {v.label}
            </span>
          ))}
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {ideaCategories.map((cat) => (
            <div key={cat.id}>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl">{cat.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{cat.title}</h2>
                  <p className="text-sm text-slate-500">{cat.description}</p>
                </div>
                <span className="ml-auto rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {cat.ideas.length} idéer
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.ideas.map((idea, i) => {
                  const complexity = complexityConfig[idea.complexity];
                  const value = valueConfig[idea.value];
                  return (
                    <div
                      key={i}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-2">
                        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                        <h3 className="font-semibold text-slate-900 text-sm">{idea.title}</h3>
                      </div>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                        {idea.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', complexity.className)}>
                          {complexity.label}
                        </span>
                        <span className={cn('rounded-full px-2 py-0.5 text-xs font-medium', value.className)}>
                          {value.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto">
            <strong>Har du en idé, vi mangler?</strong> Denne liste er levende og vil vokse i takt med,
            at vi lærer mere om efterskolens processer og muligheder. Målet er ikke at gøre alt —
            men at vide, hvad der er muligt, så vi kan vælge klogt.
          </p>
        </div>
      </div>
    </>
  );
}
