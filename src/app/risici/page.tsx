import PageHeader from '@/components/layout/PageHeader';
import RiskMatrix from '@/components/risks/RiskMatrix';
import RiskCard from '@/components/risks/RiskCard';
import { risks } from '@/data/risks';

export const metadata = {
  title: 'Risici | Emmerske SoftwareVision',
};

export default function RisiciPage() {
  const openRisks = risks.filter((r) => r.status === 'aben');
  const sortedRisks = [...risks].sort((a, b) => b.riskScore - a.riskScore);

  return (
    <>
      <PageHeader
        title="Risikoregister"
        subtitle="Identificerede risici, vurdering og mitigeringsplaner"
        badge={`${openRisks.length} åbne risici`}
        badgeColor="amber"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Risk matrix */}
          <RiskMatrix risks={risks} />

          {/* Summary */}
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-slate-800 mb-4">Risikofordeling</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Åbne risici', count: risks.filter((r) => r.status === 'aben').length, color: 'bg-red-50 border-red-200 text-red-700' },
                { label: 'Mitigerede', count: risks.filter((r) => r.status === 'mitigeret').length, color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
                { label: 'Kritiske (score ≥15)', count: risks.filter((r) => r.riskScore >= 15).length, color: 'bg-red-50 border-red-200 text-red-700' },
                { label: 'Høje (score 9-14)', count: risks.filter((r) => r.riskScore >= 9 && r.riskScore < 15).length, color: 'bg-amber-50 border-amber-200 text-amber-700' },
              ].map((item) => (
                <div key={item.label} className={`rounded-lg border p-3 ${item.color}`}>
                  <p className="text-2xl font-bold">{item.count}</p>
                  <p className="text-xs mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-slate-700 mb-3">Kategorier</h4>
              {['teknisk', 'organisatorisk', 'okonomisk', 'tidsmassig', 'kompetence'].map((cat) => {
                const count = risks.filter((r) => r.category === cat).length;
                const labels: Record<string, string> = {
                  teknisk: 'Teknisk',
                  organisatorisk: 'Organisatorisk',
                  okonomisk: 'Økonomisk',
                  tidsmassig: 'Tidsmæssig',
                  kompetence: 'Kompetence',
                };
                return (
                  <div key={cat} className="flex items-center gap-3 py-1.5 border-b border-slate-100 last:border-0">
                    <span className="text-sm text-slate-700 flex-1">{labels[cat]}</span>
                    <span className="text-sm font-semibold text-slate-800">{count}</span>
                    <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-500 rounded-full"
                        style={{ width: `${(count / risks.length) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Risk list */}
        <h2 className="mt-12 mb-6 text-xl font-bold text-slate-800">
          Alle risici — sorteret efter risikopoint
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sortedRisks.map((risk) => (
            <RiskCard key={risk.id} risk={risk} />
          ))}
        </div>
      </div>
    </>
  );
}
