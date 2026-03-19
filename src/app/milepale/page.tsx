import PageHeader from '@/components/layout/PageHeader';
import MilestoneCard from '@/components/milestones/MilestoneCard';
import { milestones } from '@/data/milestones';
import { phases } from '@/data/phases';

export const metadata = {
  title: 'Milepæle | Emmerske SoftwareVision',
};

export default function MilestonesPage() {
  return (
    <>
      <PageHeader
        title="Milepæle"
        subtitle="Alle planlagte og opnåede milepæle fordelt på projektets tre faser"
        badge={`${milestones.filter((m) => m.status === 'fuldfort').length}/${milestones.length} fuldført`}
        badgeColor="emerald"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {phases.map((phase) => {
          const phaseMilestones = milestones.filter((m) => m.phaseId === phase.id);
          const phaseColorClass: Record<string, string> = {
            blue: 'text-blue-700',
            violet: 'text-violet-700',
            emerald: 'text-emerald-700',
          };

          return (
            <div key={phase.id} className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <div>
                  <h2 className={`text-xl font-bold ${phaseColorClass[phase.color]}`}>
                    År {phase.year}: {phase.title}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {phaseMilestones.filter((m) => m.status === 'fuldfort').length} af {phaseMilestones.length} milepæle fuldført
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {phaseMilestones.map((milestone) => (
                  <MilestoneCard key={milestone.id} milestone={milestone} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
