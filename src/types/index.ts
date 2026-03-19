// ─── Phase & Roadmap ────────────────────────────────────────────────────────

export type PhaseStatus = 'ikke-startet' | 'i-gang' | 'afsluttet';
export type PhaseYear = 1 | 2 | 3;

export interface Phase {
  id: string;
  year: PhaseYear;
  title: string;
  subtitle: string;
  description: string;
  startDate: string;
  endDate: string;
  status: PhaseStatus;
  completionPercent: number;
  goals: string[];
  keyDeliverables: string[];
  color: 'blue' | 'violet' | 'emerald';
}

// ─── Milestones ─────────────────────────────────────────────────────────────

export type MilestoneStatus = 'planlagt' | 'i-gang' | 'fuldfort' | 'forsinket';
export type MilestonePriority = 'lav' | 'medium' | 'hoj' | 'kritisk';

export interface Milestone {
  id: string;
  phaseId: string;
  title: string;
  description: string;
  dueDate: string;
  completedDate?: string;
  status: MilestoneStatus;
  priority: MilestonePriority;
  owner: string;
  dependsOn: string[];
  tags: string[];
}

// ─── Systems & Technologies ──────────────────────────────────────────────────

export type SystemCategory =
  | 'kommunikation'
  | 'administration'
  | 'undervisning'
  | 'infrastruktur'
  | 'automatisering';

export type IntegrationStatus = 'planlagt' | 'under-integration' | 'integreret';

export interface System {
  id: string;
  name: string;
  category: SystemCategory;
  vendor: string;
  description: string;
  integrationStatus: IntegrationStatus;
  phaseId: string;
  integratesWith: string[];
  features: string[];
}

// ─── Stakeholders ────────────────────────────────────────────────────────────

export type StakeholderGroup =
  | 'ledelse'
  | 'laerere'
  | 'elever'
  | 'administration'
  | 'leverandorer'
  | 'bestyrelse';

export type InfluenceLevel = 'lav' | 'medium' | 'hoj';

export interface Stakeholder {
  id: string;
  name: string;
  role: string;
  group: StakeholderGroup;
  influence: InfluenceLevel;
  interest: InfluenceLevel;
  responsibilities: string[];
  avatarInitials: string;
}

// ─── Risks ───────────────────────────────────────────────────────────────────

export type RiskProbability = 1 | 2 | 3 | 4 | 5;
export type RiskImpact = 1 | 2 | 3 | 4 | 5;
export type RiskStatus = 'aben' | 'mitigeret' | 'accepteret' | 'lukket';
export type RiskCategory =
  | 'teknisk'
  | 'organisatorisk'
  | 'okonomisk'
  | 'tidsmassig'
  | 'kompetence';

export interface Risk {
  id: string;
  title: string;
  description: string;
  category: RiskCategory;
  probability: RiskProbability;
  impact: RiskImpact;
  riskScore: number;
  status: RiskStatus;
  mitigationPlan: string;
  owner: string;
  phaseId: string;
  identifiedDate: string;
}

// ─── Student Journey ─────────────────────────────────────────────────────────

export type JourneyStepStatus =
  | 'automatiseret'
  | 'delvist-automatiseret'
  | 'manuel'
  | 'planlagt';

export interface JourneyStep {
  id: string;
  order: number;
  title: string;
  description: string;
  systemsInvolved: string[];
  status: JourneyStepStatus;
  automationGoalPhase: PhaseYear;
  detailedSteps: string[];
  actors: string[];
  duration: string;
}

// ─── Progress ────────────────────────────────────────────────────────────────

export interface PhaseProgress {
  phaseId: string;
  completedMilestones: number;
  totalMilestones: number;
  percentComplete: number;
  budgetUsedPercent: number;
  lastUpdated: string;
  notes: string;
}

export interface OverallProgress {
  lastUpdated: string;
  phases: PhaseProgress[];
  totalCompletedMilestones: number;
  totalMilestones: number;
  overallPercent: number;
  currentPhaseId: string;
  nextMilestoneId: string;
  highlights: string[];
}

// ─── Vision ──────────────────────────────────────────────────────────────────

export interface VisionGoal {
  id: string;
  title: string;
  description: string;
  targetPhase: PhaseYear;
  achieved: boolean;
}

export interface VisionData {
  headline: string;
  subheadline: string;
  fullDescription: string;
  keyPrinciples: string[];
  goals: VisionGoal[];
}
