const pillars = [
  {
    emoji: '🎯',
    title: 'Eleven i centrum',
    description:
      'Fra første kontakt til afsluttet skoleforløb skal elevens rejse føles som én sammenhængende oplevelse — ikke en række manuelle trin hos administrationen.',
  },
  {
    emoji: '🔗',
    title: 'Alt hænger sammen',
    description:
      'Data må ikke leve i siloer. Når én ting ændrer sig, skal resten vide det. Et integreret digitalt økosystem gør det muligt.',
  },
  {
    emoji: '⚡',
    title: 'Automatiser det gentagne',
    description:
      'Rutineprocesser — fakturaer, påmindelser, oprettelser, rapporter — skal køre af sig selv, så mennesker kan bruge tid på det mennesker er bedst til.',
  },
  {
    emoji: '👁️',
    title: 'Transparens og overblik',
    description:
      'Ledelse, lærere og administration skal altid have adgang til det overblik, de har brug for — uden at skulle lede efter data på tværs af systemer.',
  },
  {
    emoji: '🌱',
    title: 'Gradvis og realistisk',
    description:
      'Vi drømmer stort og handler klogt. Ingen big bang. Vi starter med de processer, der skaber mest værdi, og bygger videre derfra.',
  },
  {
    emoji: '🔒',
    title: 'Sikkerhed som fundament',
    description:
      'Datasikkerhed og GDPR er ikke eftertanker — de er en del af designet fra dag ét. Elevernes og personalets data behandles med omhu.',
  },
];

export default function VisionPillars() {
  return (
    <section className="bg-white border-b border-slate-200 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">Seks bærende tanker</h2>
          <p className="mt-2 text-slate-500 max-w-xl mx-auto">
            Ikke regler eller krav — men principper vi vender tilbage til, når vi skal vælge retning.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl mb-3">{p.emoji}</div>
              <h3 className="font-bold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
