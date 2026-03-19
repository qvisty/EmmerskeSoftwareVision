import { OverallProgress } from '@/types';

export const progressData: OverallProgress = {
  lastUpdated: '2026-03-19',
  overallPercent: 12,
  totalCompletedMilestones: 2,
  totalMilestones: 15,
  currentPhaseId: 'fase-1',
  nextMilestoneId: 'm-1-3',
  highlights: [
    'Microsoft 365 og Entra ID er fuldt implementeret og i drift',
    'SSO fungerer på tværs af alle integrerede systemer',
    'SharePoint intranet er under opbygning – lancering planlagt maj 2026',
    'Lectio-Teams integration er i testfase',
    'Første møde med CoWork om integrationsspecifikation afholdt',
  ],
  phases: [
    {
      phaseId: 'fase-1',
      completedMilestones: 2,
      totalMilestones: 8,
      percentComplete: 35,
      budgetUsedPercent: 28,
      lastUpdated: '2026-03-19',
      notes:
        'God fremdrift i infrastrukturarbejdet. Integration med Lectio er mere tidskrævende end forventet. Buffer i tidsplan aktiveres.',
    },
    {
      phaseId: 'fase-2',
      completedMilestones: 0,
      totalMilestones: 4,
      percentComplete: 0,
      budgetUsedPercent: 0,
      lastUpdated: '2026-03-19',
      notes: 'Planlægning påbegyndes Q4 2026 baseret på erfaringer fra fase 1.',
    },
    {
      phaseId: 'fase-3',
      completedMilestones: 0,
      totalMilestones: 3,
      percentComplete: 0,
      budgetUsedPercent: 0,
      lastUpdated: '2026-03-19',
      notes: 'Endnu ikke startet. Detaljeret planlægning sker i fase 2.',
    },
  ],
};

export const monthlyMilestones = [
  { month: 'Jan 26', planlagt: 1, fuldfort: 0 },
  { month: 'Feb 26', planlagt: 1, fuldfort: 1 },
  { month: 'Mar 26', planlagt: 1, fuldfort: 1 },
  { month: 'Apr 26', planlagt: 0, fuldfort: 0 },
  { month: 'Maj 26', planlagt: 1, fuldfort: 0 },
  { month: 'Jun 26', planlagt: 1, fuldfort: 0 },
  { month: 'Jul 26', planlagt: 0, fuldfort: 0 },
  { month: 'Aug 26', planlagt: 1, fuldfort: 0 },
  { month: 'Sep 26', planlagt: 1, fuldfort: 0 },
  { month: 'Okt 26', planlagt: 0, fuldfort: 0 },
  { month: 'Nov 26', planlagt: 1, fuldfort: 0 },
  { month: 'Dec 26', planlagt: 1, fuldfort: 0 },
];
