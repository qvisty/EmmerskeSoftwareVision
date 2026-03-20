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
        subtitle="Planlagte milepæle og leverancer fordelt på projektets tre faser"
        badge={`${milestones.length} milepæle i alt`}
        badgeColor="blue"
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
              <div className="mb-6">
                <h2 className={`text-xl font-bold ${phaseColorClass[phase.color]}`}>
                  År {phase.year}: {phase.title}
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  {phase.startDate.slice(0, 4)}–{phase.endDate.slice(0, 4)} · {phaseMilestones.length} milepæle
                </p>
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
