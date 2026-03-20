import { Risk } from '@/types';

export const risks: Risk[] = [
  {
    id: 'r-1',
    title: 'Modstand mod forandring i personalegruppen',
    description:
      'Lærere og administrativt personale kan opleve digitaliseringsprocessen som belastende og fremmedgørende, hvilket kan bremse implementering og adoption.',
    category: 'organisatorisk',
    probability: 4,
    impact: 4,
    riskScore: 16,
    status: 'aben',
    mitigationPlan:
      'Tidlig og løbende involvering af nøglepersoner. Superbruger-program med ekstra uddannelse. Hyppig kommunikation om gevinster og fremdrift. Dedikeret supportfunktion under rollout.',
    owner: 'Viceforstander',
    phaseId: 'fase-1',
    identifiedDate: '2026-01-15',
  },
  {
    id: 'r-2',
    title: 'Forsinkelse i systemintegration',
    description:
      'Integration mellem kernesystemer kan tage længere tid end planlagt pga. tekniske udfordringer, manglende API-understøttelse eller ressourcemangel hos leverandører.',
    category: 'teknisk',
    probability: 3,
    impact: 4,
    riskScore: 12,
    status: 'aben',
    mitigationPlan:
      'Klare SLA-aftaler med leverandører. Buffer i tidsplan. Tidlig kickoff og hyppige statusmøder. Eskalationsproces defineret i kontrakt.',
    owner: 'IT-ansvarlig',
    phaseId: 'fase-1',
    identifiedDate: '2026-01-15',
  },
  {
    id: 'r-3',
    title: 'Budgetoverskridelse',
    description:
      'Projektet kan overskride det planlagte budget pga. uforudsete tekniske krav, ændringer i scope eller stigende licensomkostninger.',
    category: 'okonomisk',
    probability: 2,
    impact: 2,
    riskScore: 4,
    status: 'aben',
    mitigationPlan:
      '20% buffer i budgettet. Kvartalsvise budgetreview. Løbende scope-styring. Prioritering af kritiske leverancer fremfor nice-to-have.',
    owner: 'Forstander',
    phaseId: 'fase-1',
    identifiedDate: '2026-01-15',
  },
  {
    id: 'r-4',
    title: 'Databeskyttelse og GDPR-overtrædelse',
    description:
      'Fejlkonfiguration af datadelingsaftaler eller utilstrækkelig sikkerhed kan føre til GDPR-overtrædelse med store bøder og reputationstab til følge.',
    category: 'teknisk',
    probability: 2,
    impact: 4,
    riskScore: 8,
    status: 'mitigeret',
    mitigationPlan:
      'GDPR-gennemgang af alle dataflows med ekstern konsulent. DPA-aftaler med alle leverandører. Adgangslogning og review. Dataminimering som designprincip.',
    owner: 'IT-ansvarlig',
    phaseId: 'fase-1',
    identifiedDate: '2026-01-20',
  },
  {
    id: 'r-5',
    title: 'Nøglepersoner forlader projektet',
    description:
      'Hvis IT-ansvarlig eller projektleder fratræder, kan kritisk viden gå tabt og implementering forsinkes markant.',
    category: 'organisatorisk',
    probability: 1,
    impact: 3,
    riskScore: 3,
    status: 'mitigeret',
    mitigationPlan:
      'Komplet løbende dokumentation af alle beslutninger og konfigurationer. Knowledge sharing med minimum 2 personer pr. kritisk kompetence. Backup-ressourcer identificeret.',
    owner: 'Forstander',
    phaseId: 'fase-1',
    identifiedDate: '2026-01-15',
  },
  {
    id: 'r-6',
    title: 'Teknisk gæld fra eksisterende systemer',
    description:
      'Ældre systemkonfigurationer og manglende standardisering i eksisterende løsninger kan gøre integrationsarbejdet mere komplekst end forventet.',
    category: 'teknisk',
    probability: 2,
    impact: 2,
    riskScore: 4,
    status: 'aben',
    mitigationPlan:
      'Grundig teknisk audit i projektets opstartsfase. Tydelig kortlægning af eksisterende datastrukturer. Allokering af dedikeret tid til migration og oprydning.',
    owner: 'IT-ansvarlig',
    phaseId: 'fase-1',
    identifiedDate: '2026-02-01',
  },
  {
    id: 'r-7',
    title: 'Manglende kompetencer til automatiseringsplatform',
    description:
      'Skolens medarbejdere har ikke tilstrækkelige kompetencer til at bygge og vedligeholde automatiserede workflows og rapporter selvstændigt.',
    category: 'kompetence',
    probability: 3,
    impact: 3,
    riskScore: 9,
    status: 'aben',
    mitigationPlan:
      'Planlagt uddannelsesforløb for superbrugere i fase 2. Ekstern konsulent tilknyttes i opstartsfasen. Leverandørens læringsressourcer tildeles relevante medarbejdere.',
    owner: 'Viceforstander',
    phaseId: 'fase-2',
    identifiedDate: '2026-03-01',
  },
  {
    id: 'r-8',
    title: 'Scope creep',
    description:
      'Ønsker om yderligere funktionalitet og integrationer undervejs kan udvande fokus og forsinke planlagte leverancer.',
    category: 'tidsmassig',
    probability: 2,
    impact: 1,
    riskScore: 2,
    status: 'aben',
    mitigationPlan:
      'Streng ændrings-styringsprocedure. Alle nye ønsker logges og prioriteres i næste fase. Månedlige statusmøder med scope-gennemgang. Tydelig definition af hvad der er "i scope".',
    owner: 'Projektleder',
    phaseId: 'fase-1',
    identifiedDate: '2026-01-15',
  },
];
