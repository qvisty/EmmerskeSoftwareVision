export type ActionType = 'manuel' | 'automatisk' | 'beslutning';

export interface FlowAction {
  type: ActionType;
  label: string;
  actor?: string;
}

export interface ElevFlowStep {
  id: string;
  order: number;
  phase: 1 | 2 | 3;
  title: string;
  trigger: string;
  actions: FlowAction[];
  output: string;
  systems: string[];
  actors: string[];
  status: 'automatiseret' | 'delvist-automatiseret' | 'planlagt' | 'manuel';
}

export const elevFlowSteps: ElevFlowStep[] = [
  {
    id: 'ef-1',
    order: 1,
    phase: 1,
    title: 'Første kontakt',
    trigger: 'Familie finder skolen via hjemmeside, sociale medier eller mund-til-mund',
    actions: [
      { type: 'manuel', label: 'Familie udfylder interesseformular på hjemmeside', actor: 'Familie' },
      { type: 'automatisk', label: 'Nyt lead oprettes automatisk i elevsystem', actor: 'System' },
      { type: 'automatisk', label: 'Velkomstmail sendes til familien', actor: 'System' },
      { type: 'automatisk', label: 'Administration notificeres om nyt lead', actor: 'System' },
    ],
    output: 'Lead registreret i elevsystem · Velkomstmail afsendt · Administration adviseret',
    systems: ['Elevsystem', 'Kommunikationsplatform'],
    actors: ['Familie', 'Administration'],
    status: 'delvist-automatiseret',
  },
  {
    id: 'ef-2',
    order: 2,
    phase: 1,
    title: 'Skolebesøg & åbent hus',
    trigger: 'Administration følger op og inviterer familien til skolebesøg',
    actions: [
      { type: 'manuel', label: 'Familie tilmelder sig skolebesøg via portal', actor: 'Familie' },
      { type: 'automatisk', label: 'Bekræftelsesmail + kalenderfil sendes', actor: 'System' },
      { type: 'automatisk', label: 'Påmindelser 1 uge og 1 dag inden', actor: 'System' },
      { type: 'manuel', label: 'Skolebesøg afholdes fysisk på skolen', actor: 'Forstander · Lærere' },
      { type: 'automatisk', label: 'Besøg registreres og opfølgningsmail sendes', actor: 'System' },
    ],
    output: 'Besøg dokumenteret i elevsystem · Opfølgning afsendt',
    systems: ['Elevsystem', 'Kommunikationsplatform', 'Samarbejdsplatform'],
    actors: ['Familie', 'Forstander', 'Administration'],
    status: 'delvist-automatiseret',
  },
  {
    id: 'ef-3',
    order: 3,
    phase: 1,
    title: 'Digital ansøgning',
    trigger: 'Familie beslutter sig for at søge optagelse på skolen',
    actions: [
      { type: 'manuel', label: 'Familie udfylder digital ansøgningsformular', actor: 'Familie' },
      { type: 'automatisk', label: 'Unikt sagsnummer tildeles automatisk', actor: 'System' },
      { type: 'automatisk', label: 'Kvitteringsmail med sagsnummer sendes', actor: 'System' },
      { type: 'automatisk', label: 'Ansøgning placeres i sagsbehandlingskø', actor: 'System' },
      { type: 'automatisk', label: 'Administration notificeres i realtid', actor: 'System' },
    ],
    output: 'Ansøgning modtaget med sagsnummer · Klar til sagsbehandling',
    systems: ['Elevsystem', 'Kommunikationsplatform', 'Automatiseringsplatform'],
    actors: ['Familie', 'Administration'],
    status: 'planlagt',
  },
  {
    id: 'ef-4',
    order: 4,
    phase: 1,
    title: 'Sagsbehandling & optagelsesbeslutning',
    trigger: 'Ansøgning modtaget – administration starter sagsbehandling',
    actions: [
      { type: 'manuel', label: 'Administration gennemgår ansøgning i elevsystem', actor: 'Administration' },
      { type: 'beslutning', label: 'Optages · Venteliste · Optages ikke', actor: 'Forstander' },
      { type: 'automatisk', label: 'Optagelsesbrev genereres og sendes digitalt', actor: 'System' },
      { type: 'manuel', label: 'Forældre underskriver digitalt via portal', actor: 'Familie' },
      { type: 'automatisk', label: 'Status opdateres til "Optaget" i alle systemer', actor: 'System' },
    ],
    output: 'Optagelsesbeslutning truffet · Digital signatur arkiveret',
    systems: ['Elevsystem', 'Kommunikationsplatform', 'Automatiseringsplatform'],
    actors: ['Administration', 'Forstander', 'Familie'],
    status: 'planlagt',
  },
  {
    id: 'ef-5',
    order: 5,
    phase: 2,
    title: 'Indskrivning & systemoprettelse',
    trigger: 'Optagelse bekræftet – elev skal nu oprettes i alle systemer',
    actions: [
      { type: 'manuel', label: 'Familie udfylder stamdata og helbredsoplysninger i portal', actor: 'Familie' },
      { type: 'automatisk', label: 'Elev oprettes i skoleadministrationsplatform', actor: 'System' },
      { type: 'automatisk', label: 'Brugerkonto oprettes via identitetsplatform (SSO)', actor: 'System' },
      { type: 'automatisk', label: 'Betalingsaftale oprettes i økonomisystem', actor: 'System' },
      { type: 'automatisk', label: 'Velkomstpakke med loginoplysninger sendes', actor: 'System' },
    ],
    output: 'Elev aktiv i alle systemer · SSO-login aktiveret · Betalingsflow opsat',
    systems: ['Elevsystem', 'Skoleadmin.', 'Identitetsplatform', 'Økonomisystem', 'Automatisering'],
    actors: ['Familie', 'Administration', 'IT-vejleder'],
    status: 'planlagt',
  },
  {
    id: 'ef-6',
    order: 6,
    phase: 2,
    title: 'Digital elevmappe oprettes',
    trigger: 'Indskrivning fuldført – system opretter automatisk elevens digitale mappe',
    actions: [
      { type: 'automatisk', label: 'Elevmappe oprettes i dokumentplatform', actor: 'System' },
      { type: 'automatisk', label: 'Standardstruktur oprettes (Samtaler, Handleplan, Evaluering)', actor: 'System' },
      { type: 'automatisk', label: 'Rettighedsstyring sættes op for lærer og admin', actor: 'System' },
      { type: 'automatisk', label: 'Journal og bilag fra ansøgning overføres', actor: 'System' },
      { type: 'manuel', label: 'Kontaktlærer tildeles og tilknyttes mappen', actor: 'Administration' },
    ],
    output: 'Fuld digital elevmappe klar · Kontaktlærer tilknyttet · Historik overført',
    systems: ['Dokumentplatform', 'Elevsystem', 'Kommunikationsplatform', 'Automatisering'],
    actors: ['System (automatisk)', 'Administration', 'Kontaktlærer'],
    status: 'planlagt',
  },
  {
    id: 'ef-7',
    order: 7,
    phase: 2,
    title: 'Løbende møder & opfølgning',
    trigger: 'Skolestart – løbende kontakt og opfølgning med elev og familie',
    actions: [
      { type: 'automatisk', label: 'Mødeindkaldelse sendes automatisk med dagsordensudkast', actor: 'System' },
      { type: 'manuel', label: 'Familie bekræfter via portal', actor: 'Familie' },
      { type: 'manuel', label: 'Møde afholdes (fysisk eller video)', actor: 'Kontaktlærer · Familie' },
      { type: 'manuel', label: 'Referat skrives i dokumentplatform', actor: 'Kontaktlærer' },
      { type: 'automatisk', label: 'Referat og opfølgningspunkter gemmes i elevmappen', actor: 'System' },
    ],
    output: 'Møde dokumenteret og gemt · Opfølgningspunkter registreret',
    systems: ['Samarbejdsplatform', 'Kommunikationsplatform', 'Dokumentplatform', 'Elevsystem'],
    actors: ['Kontaktlærer', 'Familie', 'Elev', 'Administration'],
    status: 'planlagt',
  },
  {
    id: 'ef-8',
    order: 8,
    phase: 3,
    title: 'Løbende skolegang & afslutning',
    trigger: 'Eleven er aktiv elev – daglig drift og til sidst afslutnning af skoleforløbet',
    actions: [
      { type: 'automatisk', label: 'Skema og aflysninger synkroniseres til alle', actor: 'System' },
      { type: 'automatisk', label: 'Fraværsregistrering med automatisk forældrenotifikation', actor: 'System' },
      { type: 'automatisk', label: 'Månedlige betalingsflows behandles automatisk', actor: 'System' },
      { type: 'manuel', label: 'Halvårsevaluering og elevsamtale afholdes', actor: 'Kontaktlærer · Elev' },
      { type: 'automatisk', label: 'Afslutningscertifikat genereres og arkiveres', actor: 'System' },
      { type: 'automatisk', label: 'Portaladgang afsluttes · Alumni-data gemmes', actor: 'System' },
    ],
    output: 'Fuldt dokumenteret skoleforløb · Digitalt certifikat udstedt · Alumni-profil oprettet',
    systems: ['Skoleadmin.', 'Samarbejdsplatform', 'Elevsystem', 'Økonomisystem', 'Rapporteringsplatform'],
    actors: ['Elev', 'Lærere', 'Familie', 'Administration'],
    status: 'planlagt',
  },
];
