import Link from 'next/link';
import { ArrowRight, LayoutDashboard } from 'lucide-react';
import { progressData } from '@/data/progress';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 px-4 py-24 sm:px-6 lg:px-8">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Fase 1 i gang · {progressData.overallPercent}% samlet fremdrift
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Mod fuld digital{' '}
          <span className="text-blue-300">automatisering</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100 leading-relaxed">
          Emmerske Efterskoles 3-årige rejse mod et sammenhængende digitalt økosystem —
          hvor alle processer er integrerede, data flyder frit og eleven er i centrum.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg hover:bg-blue-50 transition-colors"
          >
            Se Roadmap
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/elevrejsen"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
          >
            <LayoutDashboard className="h-4 w-4" />
            Elevrejsen
          </Link>
        </div>
      </div>
    </section>
  );
}
