import { VisionData } from '@/types';

export const visionData: VisionData = {
  headline: 'Mod fuld digital integration',
  subheadline:
    'Et sammenhængende digitalt økosystem, der automatiserer efterskolens processer fra ende til anden – og sætter eleven i centrum.',
  fullDescription: `Emmerske Efterskole har sat sig et ambitiøst mål: inden udgangen af 2028 skal skolen stå som et digitalt fyrtårn i efterskolesektoren – med et fuldt integreret softwarelandskab, hvor data bevæger sig frit og sikkert på tværs af alle platforme, og hvor automatisering understøtter hverdagen for elever, lærere og administrativt personale.

Projektet tager udgangspunkt i Microsoft CoWork-platformen, bygget oven på Cloud Code-teknologi, og udnytter fuldt ud mulighederne i Microsoft 365-universet. Visionen er ikke blot teknologisk – det er en ny måde at tænke institutionsdrift på.

Det digitale fundament skal muliggøre en helhedsorienteret oplevelse, hvor elevrejsen fra første kontakt til afsluttet skoleforløb er én sammenhængende, digitalt understøttet proces. Administration bliver effektiv og transparent. Lærere får mere tid til kerneopgaven. Elever og forældre oplever en moderne, imødekommende skole.`,
  keyPrinciples: [
    'Eleven i centrum – alle løsninger designes med elevoplevelsen som pejlemærke',
    'Data som ressource – information flyder frit og sikkert på tværs af systemer',
    'Automatisering med formål – vi automatiserer det gentagne, så mennesker kan fokusere på det vigtige',
    'Åbenhed og transparens – fremdrift og beslutninger dokumenteres og deles med alle interessenter',
    'Gradvis og realistisk – ambitiøse mål, realistiske skridt, løbende evaluering',
    'Sikkerhed og compliance – GDPR og datasikkerhed er grundlæggende designkrav, ikke eftertanker',
  ],
  goals: [
    {
      id: 'g-1',
      title: 'Samlet digital identitet',
      description:
        'Alle brugere – ansatte og elever – har ét login på tværs af alle skolens systemer via Microsoft Entra ID.',
      targetPhase: 1,
      achieved: true,
    },
    {
      id: 'g-2',
      title: 'Digitaliseret ansøgning og optagelse',
      description:
        'Hele processen fra ansøgning til optagelsesbrev er digital og automatiseret. Ingen papir, ingen manuelle dataindtastninger.',
      targetPhase: 1,
      achieved: false,
    },
    {
      id: 'g-3',
      title: 'Automatiseret elevonboarding',
      description:
        'Fra bekræftet optagelse til første skoledag oprettes eleven automatisk i alle relevante systemer med IT-konto, Lectio-adgang og digital elevmappe.',
      targetPhase: 2,
      achieved: false,
    },
    {
      id: 'g-4',
      title: 'Intelligent automatisering af rutineprocesser',
      description:
        '20+ forretningsflows i Power Automate eliminerer manuelle rutineopgaver inden for fakturering, kommunikation og fraværshåndtering.',
      targetPhase: 2,
      achieved: false,
    },
    {
      id: 'g-5',
      title: 'Datadrevet ledelse',
      description:
        'Ledelsen har realtidsadgang til nøgletal om belægning, økonomi, fravær og elevtilfredshed via Power BI dashboards.',
      targetPhase: 2,
      achieved: false,
    },
    {
      id: 'g-6',
      title: 'Fuldt integreret dataplatform',
      description:
        'Alle skolens systemer er forbundet i ét dataunivers. Ingen data eksisterer i siloer. Real-time synkronisering på tværs af CoWork, Lectio, Teams og økonomi.',
      targetPhase: 3,
      achieved: false,
    },
    {
      id: 'g-7',
      title: 'AI-assisteret arbejdsdag',
      description:
        'Microsoft Copilot er integreret i daglige arbejdsflows og hjælper med mødeopsummering, dokumentudkast og dataforespørgsler.',
      targetPhase: 3,
      achieved: false,
    },
    {
      id: 'g-8',
      title: 'Delemodel for sektoren',
      description:
        'Emmerske fungerer som dokumenteret blueprint, som andre efterskoler kan lære af og lade sig inspirere af.',
      targetPhase: 3,
      achieved: false,
    },
  ],
};
