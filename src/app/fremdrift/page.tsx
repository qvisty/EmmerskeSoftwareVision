import PageHeader from '@/components/layout/PageHeader';
import { phases } from '@/data/phases';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Vores rejse | Emmerske SoftwareVision',
};

const phaseColors = {
  blue: { light: 'bg-blue-50 border-blue-200', text: 'text-blue-700', dot: 'bg-blue-500' },
  violet: { light: 'bg-violet-50 border-violet-200', text: 'text-violet-700', dot: 'bg-violet-500' },
  emerald: { light: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-700', dot: 'bg-emerald-500' },
};

export default function FremdriftPage() {
  return (
    <>
      <PageHeader
        title="Vores rejse"
        subtitle="En beskrivelse af den vej vi forestiller os at gå — trin for trin over tre år"
        badge="Rejsebeskrivelse"
        badgeColor="blue"
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Udgangspunktet</h2>
          <p className="text-slate-600 leading-relaxed">
            Vi starter ikke fra nul. Emmerske Efterskole har allerede en række digitale systemer
            i brug — men de taler ikke godt nok sammen. Data registreres flere steder.
            Processer kræver manuel koordination. Muligheder for automatisering udnyttes ikke.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Denne rejse handler om at ændre det — gradvist, klogt og med eleven i centrum.
          </p>
        </div>

        {/* Phase timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200" />

          <div className="space-y-8">
            {phases.map((phase) => {
              const colors = phaseColors[phase.color];
              return (
                <div key={phase.id} className="relative flex gap-6">
                  {/* Dot */}
                  <div className={cn('relative z-10 mt-1 h-10 w-10 shrink-0 rounded-full flex items-center justify-center text-white font-bold text-sm', colors.dot)}>
                    {phase.year}
                  </div>

                  <div className={cn('flex-1 rounded-xl border p-5', colors.light)}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className={cn('font-bold text-lg', colors.text)}>{phase.title}</h3>
                      <span className="text-xs text-slate-400">
                        {phase.startDate.slice(0, 4)}–{phase.endDate.slice(0, 4)}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{phase.description}</p>

                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Hvad vi vil opnå</h4>
                    <ul className="space-y-1">
                      {phase.goals.map((goal, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className={cn('mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full', colors.dot)} />
                          {goal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* End state */}
            <div className="relative flex gap-6">
              <div className="relative z-10 mt-1 h-10 w-10 shrink-0 rounded-full flex items-center justify-center bg-slate-800 text-white text-lg">
                🎯
              </div>
              <div className="flex-1 rounded-xl border border-slate-200 bg-white p-5">
                <h3 className="font-bold text-lg text-slate-900 mb-2">Målet: Fuld digital integration</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  En efterskole, hvor alle systemer arbejder sammen. Eleven oplever en smidig,
                  sammenhængende rejse. Personalet bruger tid på det, der betyder noget.
                  Data bruges intelligentst — og skolen kan dele sin model med resten af sektoren.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
