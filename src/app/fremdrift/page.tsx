import PageHeader from '@/components/layout/PageHeader';
import ProgressDashboard from '@/components/progress/ProgressDashboard';
import { progressData } from '@/data/progress';
import { formatDate } from '@/lib/utils';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Fremdrift | Emmerske SoftwareVision',
};

export default function FremdriftPage() {
  return (
    <>
      <PageHeader
        title="Fremdrift"
        subtitle="Løbende overblik over projektets fremgang, milepæle og budgetforbrug"
        badge={`Opdateret ${formatDate(progressData.lastUpdated)}`}
        badgeColor="emerald"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Latest highlights */}
        <div className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6">
          <h2 className="font-bold text-emerald-800 mb-4">Seneste fremskridt</h2>
          <ul className="space-y-2">
            {progressData.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span className="text-sm text-emerald-800">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <ProgressDashboard progress={progressData} />
      </div>
    </>
  );
}
