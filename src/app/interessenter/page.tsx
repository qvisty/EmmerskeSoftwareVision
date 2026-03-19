import PageHeader from '@/components/layout/PageHeader';
import StakeholderCard from '@/components/stakeholders/StakeholderCard';
import { stakeholders } from '@/data/stakeholders';

export const metadata = {
  title: 'Interessenter | Emmerske SoftwareVision',
};

const groups = [
  { id: 'ledelse', label: 'Ledelse' },
  { id: 'administration', label: 'Administration' },
  { id: 'laerere', label: 'Lærere' },
  { id: 'elever', label: 'Elever' },
  { id: 'leverandorer', label: 'Leverandører' },
  { id: 'bestyrelse', label: 'Bestyrelse' },
];

export default function InteressenterPage() {
  return (
    <>
      <PageHeader
        title="Interessenter"
        subtitle="Alle involverede parter, deres roller og ansvar i projektet"
        badge={`${stakeholders.length} interessenter`}
        badgeColor="slate"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {groups.map((group) => {
          const groupMembers = stakeholders.filter((s) => s.group === group.id);
          if (!groupMembers.length) return null;
          return (
            <div key={group.id} className="mb-10">
              <h2 className="mb-4 text-lg font-bold text-slate-800">{group.label}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groupMembers.map((s, i) => (
                  <StakeholderCard key={s.id} stakeholder={s} index={i} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
