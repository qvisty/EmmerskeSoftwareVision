import PageHeader from '@/components/layout/PageHeader';
import JourneyMap from '@/components/elevrejsen/JourneyMap';
import { elevrejsenSteps } from '@/data/elevrejsen';

export const metadata = {
  title: 'Elevrejsen | Emmerske SoftwareVision',
};

export default function ElevrejsenPage() {
  const automated = elevrejsenSteps.filter(
    (s) => s.status === 'automatiseret' || s.status === 'delvist-automatiseret'
  ).length;

  return (
    <>
      <PageHeader
        title="Elevrejsen"
        subtitle="Fra første kontakt til fuld indskrivning – ét sammenhængende digitalt flow"
        badge="Kerneproces"
        badgeColor="violet"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Legend */}
        <div className="mb-8 flex flex-wrap gap-3 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
          <span className="text-xs font-medium text-slate-500 self-center">Status:</span>
          {[
            { label: 'Automatiseret', bg: 'bg-emerald-100 text-emerald-700' },
            { label: 'Delvist automatiseret', bg: 'bg-amber-100 text-amber-700' },
            { label: 'Planlagt', bg: 'bg-blue-100 text-blue-700' },
            { label: 'Manuel', bg: 'bg-slate-200 text-slate-600' },
          ].map((item) => (
            <span
              key={item.label}
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${item.bg}`}
            >
              {item.label}
            </span>
          ))}
          <span className="ml-auto text-xs text-slate-500 self-center">
            {automated}/{elevrejsenSteps.length} trin automatiseret
          </span>
        </div>

        <JourneyMap steps={elevrejsenSteps} />

        <div className="mt-10 rounded-xl bg-brand-50 border border-brand-100 p-6">
          <h3 className="font-semibold text-brand-800">Vision for elevrejsen</h3>
          <p className="mt-2 text-sm text-brand-700 leading-relaxed">
            Inden udgangen af 2028 skal alle 8 trin i elevrejsen være fuldt understøttet digitalt.
            Eleven og familien oplever en smidig, moderne og imødekommende skole fra første kontakt —
            mens administrationen bruger minimalt med tid på rutineopgaver.
          </p>
        </div>
      </div>
    </>
  );
}
