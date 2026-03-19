import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function VisionHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 px-4 py-28 sm:px-6 lg:px-8">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-sm">
          🗺️ En mindmap over fremtidens efterskole
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
          Hvad hvis efterskolen{' '}
          <span className="text-blue-300">tænkte digitalt</span>{' '}
          fra ende til anden?
        </h1>

        <p className="mt-8 text-xl text-blue-100 leading-relaxed">
          Dette projekt er en åben tankeproces. Vi forestiller os en efterskole, hvor administrationen
          kører selv, elevens rejse er smidig og sammenhængende, og personalet bruger
          deres tid på det, der virkelig betyder noget.
        </p>

        <p className="mt-4 text-lg text-blue-200 leading-relaxed">
          Ingen af disse idéer er besluttet endnu. Men vi tror på, at man skal turde forestille sig
          målet, før man kan planlægge vejen.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/vision"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg hover:bg-blue-50 transition-colors"
          >
            Læs visionen
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/ideer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
          >
            💡 Se idéerne
          </Link>
        </div>
      </div>
    </section>
  );
}
