import PageHeader from '@/components/layout/PageHeader';
import PhaseCard from '@/components/roadmap/PhaseCard';
import { phases } from '@/data/phases';

export const metadata = {
  title: 'Transformationsplanen | Emmerske SoftwareVision',
};

export default function PlanenPage() {
  return (
    <>
      <PageHeader
        title="Transformationsplanen"
        subtitle="Tre år. Tre faser. Én sammenhængende rejse mod et fuldt digitalt fundament."
        badge="2026 – 2028"
        badgeColor="blue"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Udgangspunktet */}
        <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-3">Udgangspunktet</h2>
          <p className="text-slate-600 leading-relaxed">
            Vi starter ikke fra nul. Emmerske Efterskole har allerede en række digitale systemer
            i brug — men de taler ikke godt nok sammen. Data registreres flere steder.
            Processer kræver manuel koordination. Muligheder for automatisering udnyttes ikke.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Denne rejse handler om at ændre det — gradvist, klogt og med eleven i centrum.
            Vi bevæger os fra spredte løsninger til et sammenhængende digitalt økosystem,
            hvor systemer, data og mennesker arbejder i én fælles rytme.
          </p>
        </div>

        {/* Fase-kort */}
        <div className="flex flex-col gap-8">
          {phases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>

        {/* Slutmål */}
        <div className="mt-12 flex gap-6">
          <div className="relative z-10 mt-1 h-12 w-12 shrink-0 rounded-full flex items-center justify-center bg-slate-800 text-white text-xl">
            🎯
          </div>
          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Målet: Fuld digital integration</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              En efterskole, hvor alle systemer arbejder sammen. Eleven oplever en smidig,
              sammenhængende rejse. Personalet bruger tid på det, der betyder noget.
              Data bruges intelligentst — og skolen kan dele sin model med resten af sektoren.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
