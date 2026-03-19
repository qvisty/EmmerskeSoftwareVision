import PageHeader from '@/components/layout/PageHeader';
import PhaseCard from '@/components/roadmap/PhaseCard';
import { phases } from '@/data/phases';

export const metadata = {
  title: 'Roadmap | Emmerske SoftwareVision',
};

export default function RoadmapPage() {
  return (
    <>
      <PageHeader
        title="3-årig Roadmap"
        subtitle="Tre faser der gradvist bygger det digitale fundament op mod fuld automatisering"
        badge="2026 – 2028"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          {phases.map((phase) => (
            <PhaseCard key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </>
  );
}
