import Link from 'next/link';

export default function WhatIsThis() {
  return (
    <section className="bg-brand-50 border-y border-brand-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-4xl">🗺️</span>
            <h2 className="mt-4 text-2xl font-bold text-brand-900 sm:text-3xl">
              Hvad er dette egentlig?
            </h2>
            <p className="mt-4 text-brand-800 leading-relaxed">
              Denne hjemmeside er en <strong>levende mindmap</strong> — et digitalt whiteboard, hvor
              vi samler tankerne om, hvad en moderne, automatiseret efterskole kunne se ud som.
            </p>
            <p className="mt-3 text-brand-800 leading-relaxed">
              Indholdet er <strong>ikke en projektplan, ikke et budget og ikke et løfte</strong>.
              Det er en måde at tænke højt på — at visualisere mulighederne, inden vi beslutter,
              hvilken vej vi skal gå.
            </p>
            <p className="mt-3 text-brand-800 leading-relaxed">
              Vi bruger det som grundlag for dialog med personale, bestyrelse og leverandører.
              Det konkrete kommer bagefter.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { href: '/vision', emoji: '🎯', label: 'Visionen', desc: 'Hvad vil vi opnå på 3 år?' },
              { href: '/elevrejsen', emoji: '🚶', label: 'Elevrejsen', desc: 'Hvordan ser den ideelle elevoplevelse ud?' },
              { href: '/ideer', emoji: '💡', label: 'Idéerne', desc: '35+ automatiseringsmuligheder på tværs af skolen' },
              { href: '/roadmap', emoji: '🗓️', label: 'Roadmap', desc: 'En mulig rejseplan over tre år' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 rounded-xl border border-brand-200 bg-white p-4 hover:shadow-sm transition-shadow"
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <p className="font-semibold text-brand-900">{item.label}</p>
                  <p className="text-sm text-brand-600">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
