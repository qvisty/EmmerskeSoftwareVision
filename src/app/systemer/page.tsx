import PageHeader from '@/components/layout/PageHeader';
import { systems } from '@/data/systems';

export const metadata = {
  title: 'Systemer | Emmerske SoftwareVision',
};

const layerGroups = [
  {
    title: 'Fundament',
    description: 'Det tekniske lag der holder det hele sammen',
    ids: ['identitet'],
  },
  {
    title: 'Kommunikation & Samarbejde',
    description: 'Platforme der forbinder mennesker',
    ids: ['kommunikation', 'samarbejde', 'dokumenter'],
  },
  {
    title: 'Skole & Elevadministration',
    description: 'Systemer der driver den daglige skoledrift',
    ids: ['elevsystem', 'skoleadmin', 'okonomi'],
  },
  {
    title: 'Automatisering & Indsigt',
    description: 'Det lag der får det hele til at arbejde sammen',
    ids: ['automatisering', 'rapportering', 'ai-assistent'],
  },
];

export default function SystemerPage() {
  return (
    <>
      <PageHeader
        title="Systemer & Platforme"
        subtitle="De overordnede lag i det digitale økosystem vi er ved at bygge"
        badge="Konceptuelt overblik"
        badgeColor="blue"
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mb-10 text-slate-600 leading-relaxed">
          Visionen er et digitalt fundament, hvor alle platforme taler sammen.
          Nedenfor er de overordnede lag — hvilken rolle de spiller, og hvornår de introduceres.
          Konkrete produktvalg afklares løbende.
        </p>

        <div className="space-y-10">
          {layerGroups.map((group) => {
            const groupSystems = group.ids
              .map((id) => systems.find((s) => s.id === id))
              .filter(Boolean);

            return (
              <div key={group.title}>
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-slate-900">{group.title}</h2>
                  <p className="text-sm text-slate-500">{group.description}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {groupSystems.map((sys) => {
                    if (!sys) return null;
                    const phaseLabel: Record<string, string> = {
                      'fase-1': 'År 1',
                      'fase-2': 'År 2',
                      'fase-3': 'År 3',
                    };
                    return (
                      <div
                        key={sys.id}
                        className="rounded-xl border border-slate-200 bg-white p-4"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-slate-900 text-sm">{sys.name}</h3>
                          <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                            {phaseLabel[sys.phaseId]}
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                          {sys.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-amber-100 bg-amber-50 p-6">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Bemærk:</strong> Dette er et konceptuelt overblik over de typer af platforme,
            vi forventer at arbejde med. Specifikke produktvalg er ikke låst fast endnu —
            det er en del af den afdækning, der sker løbende.
          </p>
        </div>
      </div>
    </>
  );
}
