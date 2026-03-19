export interface IdeaItem {
  title: string;
  description: string;
  complexity: 'lav' | 'medium' | 'hoj';
  value: 'lav' | 'medium' | 'hoj';
}

export interface IdeaCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  ideas: IdeaItem[];
}

export const ideaCategories: IdeaCategory[] = [
  {
    id: 'administration',
    title: 'Administration',
    emoji: '🏢',
    description: 'Processer der understøtter den daglige drift og elevadministration',
    ideas: [
      {
        title: 'Venteliste-håndtering',
        description: 'Automatisk rangering af ansøgere, udsendelse af tilbud og registrering af svar – uden manuel indgriben.',
        complexity: 'medium',
        value: 'hoj',
      },
      {
        title: 'Kontraktgenerering',
        description: 'Optagelsesbrev, kostpengefaktura og tilladelsesblanketter genereres og sendes automatisk ved optagelse.',
        complexity: 'lav',
        value: 'hoj',
      },
      {
        title: 'Fravær → forældreopkald',
        description: 'Notifikation sendes automatisk til forældre, inden læreren overhovedet har reageret manuelt.',
        complexity: 'lav',
        value: 'hoj',
      },
      {
        title: 'Elevskift mellem hold',
        description: 'Én handling opdaterer Lectio, Teams-grupper og rumreservationer på tværs af alle systemer.',
        complexity: 'medium',
        value: 'medium',
      },
      {
        title: 'Årsplan-udsendelse',
        description: 'Skolens årskalender synkroniseres automatisk til alle forældrenes telefoner og mail.',
        complexity: 'lav',
        value: 'medium',
      },
      {
        title: 'Dimissionsbevis',
        description: 'Genereres og sendes automatisk til elev og forældre ved skoleårsafslutning baseret på Lectio-data.',
        complexity: 'medium',
        value: 'hoj',
      },
    ],
  },
  {
    id: 'okonomi',
    title: 'Økonomi',
    emoji: '💰',
    description: 'Fakturering, betaling og økonomiprocesser der i dag er manuelle',
    ideas: [
      {
        title: 'Kostpengeopkrævning',
        description: 'Automatisk faktura, rykkere ved manglende betaling og bekræftelse ved indbetaling – uden administrativt arbejde.',
        complexity: 'lav',
        value: 'hoj',
      },
      {
        title: 'Lommepengeadministration',
        description: 'Elever har en digital saldo. Forældre kan overføre penge via portal. Eleven bruger kort/app på skolen.',
        complexity: 'hoj',
        value: 'medium',
      },
      {
        title: 'Budget-alarm på indkøb',
        description: 'Automatisk alarm til ledelsen, når indkøb i køkkenet eller andre afdelinger nærmer sig budgetgrænsen.',
        complexity: 'medium',
        value: 'medium',
      },
      {
        title: 'UFM-tilskudsrapportering',
        description: 'Data til Undervisningsministeriets indberetninger indsamles automatisk fra elevsystemerne.',
        complexity: 'hoj',
        value: 'hoj',
      },
    ],
  },
  {
    id: 'kokken',
    title: 'Køkken',
    emoji: '🍽️',
    description: 'Fra menuplanering til allergiregistrering og madspildsreduktion',
    ideas: [
      {
        title: 'Menuplan → indkøbsliste',
        description: 'Ugens menu genererer automatisk en optimeret indkøbsliste baseret på antal elever og portionsstørrelser.',
        complexity: 'medium',
        value: 'hoj',
      },
      {
        title: 'Allergi- og diætoversigt',
        description: 'Elevernes allergier og diæter hentes fra elevprofilen og vises automatisk på køkkenets dagsoversigt.',
        complexity: 'lav',
        value: 'hoj',
      },
      {
        title: 'Madspild-registrering',
        description: 'Daglig registrering af madspild genererer månedlig bæredygtighedsrapport og optimeringsforslag.',
        complexity: 'medium',
        value: 'medium',
      },
      {
        title: 'Gæstemåltider via portal',
        description: 'Forældre og gæster tilmelder sig måltider via portal. Køkkenet ser det samlede antal automatisk.',
        complexity: 'lav',
        value: 'medium',
      },
      {
        title: 'IoT-temperaturlog på køleskabe',
        description: 'Sensorer overvåger køleskabstemperaturer døgnet rundt. Alarm ved afvigelse + automatisk HACCP-dokumentation.',
        complexity: 'hoj',
        value: 'hoj',
      },
    ],
  },
  {
    id: 'service',
    title: 'Servicemedarbejdere',
    emoji: '🧹',
    description: 'Rengøring, vedligeholdelse og daglig drift af skolens faciliteter',
    ideas: [
      {
        title: 'Dynamisk rengøringsplan',
        description: 'Opgaveliste genereres automatisk baseret på dagens aktiviteter, belægning og weekends vs. hverdage.',
        complexity: 'medium',
        value: 'hoj',
      },
      {
        title: 'Fejlmelding og vedligeholdelse',
        description: 'Elever og lærere indmelder fejl via app. Opgaven tildeles automatisk den rette servicemedarbejder.',
        complexity: 'lav',
        value: 'hoj',
      },
      {
        title: 'Digital adgangsstyring',
        description: 'Digitale nøgler til aktivitetsrum og lokaler åbner automatisk efter bookingplanen.',
        complexity: 'hoj',
        value: 'medium',
      },
      {
        title: 'Vaskeri-booking',
        description: 'Elever booker vasketid via app, modtager reminder og besked når tøjet er færdigt.',
        complexity: 'lav',
        value: 'medium',
      },
      {
        title: 'Lagerregistrering og genbestilling',
        description: 'Scanning af rengøringsmidler og forbrugsvarer trigger automatisk genbestilling ved lav beholdning.',
        complexity: 'medium',
        value: 'medium',
      },
    ],
  },
  {
    id: 'elever',
    title: 'Elever & Dagligdag',
    emoji: '🎒',
    description: 'Alt der berører elevernes hverdag – fra morgen til aften',
    ideas: [
      {
        title: 'Fraværsregistrering med notifikation',
        description: 'Fravær registreres i Lectio og forældre notificeres automatisk – integreret og uden manuelle opkald.',
        complexity: 'lav',
        value: 'hoj',
      },
      {
        title: 'Aktivitetstilmelding',
        description: 'Elever vælger valgfag og aktiviteter digitalt. Hold fyldes automatisk op og venteliste oprettes.',
        complexity: 'medium',
        value: 'hoj',
      },
      {
        title: 'Elevsamtale-booking',
        description: 'Kontaktlærer åbner ledige tider, elev booker selv. Automatisk reminder til begge dagen før.',
        complexity: 'lav',
        value: 'hoj',
      },
      {
        title: 'Udlån af udstyr',
        description: 'Sportsudstyr, musikinstrumenter og andet udstyr registreres digitalt. Automatisk påmindelse ved for sent returneret udstyr.',
        complexity: 'lav',
        value: 'medium',
      },
      {
        title: 'Hjemmerejse-tilladelse',
        description: 'Forældre ansøger digitalt. Ved godkendelse opdateres elevens status i systemet automatisk.',
        complexity: 'lav',
        value: 'medium',
      },
    ],
  },
  {
    id: 'laerere',
    title: 'Lærere',
    emoji: '👩‍🏫',
    description: 'Administrativt arbejde der tager tid fra kerneopgaven: undervisning',
    ideas: [
      {
        title: 'Vikarplanlægning',
        description: 'Afmelding af sygedag trigger automatisk vikar-forespørgsel til relevante kolleger med én klik-accept.',
        complexity: 'medium',
        value: 'hoj',
      },
      {
        title: 'Karakterindberetning – reminder',
        description: 'Automatisk rykker til lærere der endnu ikke har afleveret karakterer inden deadline.',
        complexity: 'lav',
        value: 'medium',
      },
      {
        title: 'Ekskursions-logistik',
        description: 'Tilmeldinger, tilladelsesblanketter, betaling og transportbooking samlet i ét digitalt flow.',
        complexity: 'medium',
        value: 'hoj',
      },
      {
        title: 'Årsrapport til forældre',
        description: 'Genereres automatisk ud fra Lectio-data og elevmappens noter. Lærer godkender – sender med ét klik.',
        complexity: 'hoj',
        value: 'hoj',
      },
      {
        title: 'Timeplanlægning med præferencer',
        description: 'Lærere indmelder præferencer digitalt. Systemet foreslår en konfliktfri plan automatisk.',
        complexity: 'hoj',
        value: 'medium',
      },
    ],
  },
  {
    id: 'idraet',
    title: 'Idræt & Aktiviteter',
    emoji: '🏃',
    description: 'Booking, tilmeldinger og resultater for skolens sports- og aktivitetstilbud',
    ideas: [
      {
        title: 'Lokale- og banestyring',
        description: 'Centralt booking-system med automatisk konflikthåndtering på tværs af alle lokaler og baner.',
        complexity: 'medium',
        value: 'hoj',
      },
      {
        title: 'Konkurrencetilmeldinger',
        description: 'Automatisk udsendelse af tilmeldingslink til relevante elever baseret på hold og niveau.',
        complexity: 'lav',
        value: 'medium',
      },
      {
        title: 'Resultat-leaderboard',
        description: 'Scores og tider logges og vises automatisk på internt leaderboard på skolens skærme og intranet.',
        complexity: 'medium',
        value: 'lav',
      },
    ],
  },
  {
    id: 'sikkerhed',
    title: 'Sikkerhed & Compliance',
    emoji: '🔒',
    description: 'Processer der sikrer elevernes tryghed og skolens lovmæssige forpligtelser',
    ideas: [
      {
        title: 'Digital mønstring ved brandøvelse',
        description: 'Eleverne registreres digitalt ved mønstringsstedet. Manglende elever flagges i realtid til det øverste ansvarlige.',
        complexity: 'medium',
        value: 'hoj',
      },
      {
        title: 'Medicinhåndtering',
        description: 'Elever med fast medicin: automatisk reminder til kontaktlærer + digital log for compliance.',
        complexity: 'medium',
        value: 'hoj',
      },
      {
        title: 'Hændelsesrapport',
        description: 'Skabelon til magtanvendelse og hændelser udfyldes digitalt, krypteres og gemmes iht. GDPR.',
        complexity: 'lav',
        value: 'hoj',
      },
    ],
  },
];
