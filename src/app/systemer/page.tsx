import PageHeader from '@/components/layout/PageHeader';
import SystemCard from '@/components/systems/SystemCard';
import { systems } from '@/data/systems';

export const metadata = {
  title: 'Systemer | Emmerske SoftwareVision',
};

const categories = [
  { id: 'infrastruktur', label: 'Infrastruktur' },
  { id: 'kommunikation', label: 'Kommunikation' },
  { id: 'administration', label: 'Administration' },
  { id: 'undervisning', label: 'Undervisning' },
  { id: 'automatisering', label: 'Automatisering' },
];

export default function SystemerPage() {
  const integrated = systems.filter((s) => s.integrationStatus === 'integreret').length;
  const inProgress = systems.filter((s) => s.integrationStatus === 'under-integration').length;

  return (
    <>
      <PageHeader
        title="Systemer & Teknologier"
        subtitle="Oversigt over alle platforme og systemer i det digitale økosystem"
        badge={`${integrated} integreret · ${inProgress} under integration`}
        badgeColor="blue"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Status summary */}
        <div className="mb-10 grid grid-cols-3 gap-4">
          {[
            { label: 'Integreret', count: integrated, color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
            { label: 'Under integration', count: inProgress, color: 'bg-amber-50 border-amber-200 text-amber-700' },
            { label: 'Planlagt', count: systems.filter((s) => s.integrationStatus === 'planlagt').length, color: 'bg-slate-50 border-slate-200 text-slate-600' },
          ].map((item) => (
            <div key={item.label} className={`rounded-xl border p-4 text-center ${item.color}`}>
              <p className="text-3xl font-bold">{item.count}</p>
              <p className="text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Systems by category */}
        {categories.map((cat) => {
          const catSystems = systems.filter((s) => s.category === cat.id);
          if (!catSystems.length) return null;
          return (
            <div key={cat.id} className="mb-10">
              <h2 className="mb-4 text-lg font-bold text-slate-800">{cat.label}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catSystems.map((sys) => (
                  <SystemCard key={sys.id} system={sys} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
