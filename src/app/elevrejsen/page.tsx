import Image from 'next/image';
import PageHeader from '@/components/layout/PageHeader';
import JourneyMap from '@/components/elevrejsen/JourneyMap';
import ElevFlowDiagram from '@/components/elevrejsen/ElevFlowDiagram';
import { elevrejsenSteps } from '@/data/elevrejsen';

export const metadata = {
  title: 'Elevrejsen | Emmerske SoftwareVision',
};

export default function ElevrejsenPage() {
  return (
    <>
      <PageHeader
        title="Elevrejsen"
        subtitle="Fra første kontakt til fuld indskrivning – ét sammenhængende digitalt flow"
        badge="Kerneproces"
        badgeColor="violet"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Overordnet beskrivelse */}
        <JourneyMap steps={elevrejsenSteps} />

        <div className="mt-10 rounded-xl bg-brand-50 border border-brand-100 p-6">
          <h3 className="font-semibold text-brand-800">Vision for elevrejsen</h3>
          <p className="mt-2 text-sm text-brand-700 leading-relaxed">
            Målet er, at alle trin i elevrejsen bliver fuldt understøttet digitalt.
            Eleven og familien oplever en smidig, moderne og imødekommende skole fra første kontakt —
            mens administrationen bruger minimalt med tid på rutineopgaver.
          </p>
        </div>

        {/* Flowdiagram */}
        <div className="mt-16">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900">Procesflow: triggere & handlinger</h2>
            <p className="mt-1 text-sm text-slate-500">
              En trin-for-trin gennemgang af hvilke triggere, handlinger og outputs der driver elevrejsen — og hvad der kan automatiseres.
            </p>
          </div>
          <ElevFlowDiagram />
        </div>

        {/* Eksempelbillede */}
        <div className="mt-16">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900">Eksempel: Mail automation flow</h2>
            <p className="mt-1 text-sm text-slate-500">
              Nedenstående diagram er et <strong>arbejdseksempel</strong> og ikke et færdigt flow.
              Det illustrerer, hvordan et automatiseret mail-flow kan se ud — fra første interesse
              til indskrivning — og skal ses som inspiration til det videre arbejde.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm overflow-x-auto">
            <Image
              src="/EmmerskeSoftwareVision/images/elevrejsen/mail-automation-eksempel.png"
              alt="Eksempel på mail automation flow for elevrejsen"
              width={1200}
              height={600}
              className="w-full h-auto"
              unoptimized
            />
          </div>
          <p className="mt-2 text-xs text-slate-400 text-center">
            Dette er et eksempel på et automatiseringsflow — ikke et endeligt design.
          </p>
        </div>

      </div>
    </>
  );
}
