import Link from 'next/link';

export default function MindmapDisclaimer() {
  return (
    <div className="border-b border-amber-200 bg-amber-50 px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex items-start gap-4">
        <span className="text-2xl shrink-0">🗺️</span>
        <div>
          <p className="font-semibold text-amber-900">
            Dette er en mindmap — ikke en færdig plan
          </p>
          <p className="mt-1 text-sm text-amber-800 leading-relaxed">
            Indholdet på denne hjemmeside er en visualisering af, <em>hvad der kunne blive til</em> —
            ikke hvad der er besluttet eller realistisk i morgen. Vi samler tankerne, skaber overblik
            og bruger det som fundament for de rigtige samtaler. Konkrete produkter og beslutninger
            kommer i næste fase.{' '}
            <Link href="/ideer" className="font-medium underline hover:text-amber-900">
              Se idéer til automatisering →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
