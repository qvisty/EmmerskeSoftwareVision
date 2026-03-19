import { CheckCircle2 } from 'lucide-react';
import { progressData } from '@/data/progress';
import Link from 'next/link';

export default function HighlightsSection() {
  return (
    <section className="bg-white border-y border-slate-200 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-md">
            <h2 className="text-xl font-bold text-slate-900">Seneste fremskridt</h2>
            <p className="mt-1 text-sm text-slate-500">
              Opdateret {new Date(progressData.lastUpdated).toLocaleDateString('da-DK')}
            </p>
            <ul className="mt-4 space-y-3">
              {progressData.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                  <span className="text-sm text-slate-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:min-w-72">
            <div className="rounded-xl border border-brand-100 bg-brand-50 p-6">
              <p className="text-sm font-medium text-brand-700">Aktuel fase</p>
              <p className="mt-1 text-2xl font-bold text-brand-900">Fase 1 – Fundament & Integration</p>
              <p className="mt-2 text-sm text-brand-600">
                35% fuldført · Milepæl: SharePoint intranet lancering
              </p>
            </div>
            <Link
              href="/fremdrift"
              className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors text-center"
            >
              Se fuldt fremdrifts-dashboard →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
