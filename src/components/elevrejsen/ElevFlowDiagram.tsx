import { elevFlowSteps, FlowAction, ElevFlowStep } from '@/data/elevFlow';
import { cn } from '@/lib/utils';

const actionStyles = {
  manuel: {
    border: 'border-blue-200 bg-blue-50',
    label: 'text-blue-500',
    icon: (
      <svg className="h-3.5 w-3.5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    typeLabel: 'Manuel',
  },
  automatisk: {
    border: 'border-emerald-200 bg-emerald-50',
    label: 'text-emerald-500',
    icon: (
      <svg className="h-3.5 w-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    typeLabel: 'Automatisk',
  },
  beslutning: {
    border: 'border-amber-200 bg-amber-50',
    label: 'text-amber-500',
    icon: (
      <svg className="h-3.5 w-3.5 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    typeLabel: 'Beslutning',
  },
};

const phaseColors: Record<1 | 2 | 3, { ring: string; dot: string; badge: string }> = {
  1: { ring: 'border-blue-200', dot: 'bg-blue-500', badge: 'bg-blue-100 text-blue-700' },
  2: { ring: 'border-violet-200', dot: 'bg-violet-500', badge: 'bg-violet-100 text-violet-700' },
  3: { ring: 'border-emerald-200', dot: 'bg-emerald-500', badge: 'bg-emerald-100 text-emerald-700' },
};

function ActionNode({ action }: { action: FlowAction }) {
  const s = actionStyles[action.type];
  return (
    <div className={cn('rounded-xl border px-3 py-2.5 min-w-[140px] max-w-[200px] flex-1', s.border)}>
      <div className={cn('flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide mb-1', s.label)}>
        {s.icon}
        {s.typeLabel}
      </div>
      <p className="text-xs text-slate-700 leading-snug">{action.label}</p>
      {action.actor && (
        <p className="mt-1 text-[10px] text-slate-400">{action.actor}</p>
      )}
    </div>
  );
}

function ActionArrow() {
  return (
    <div className="hidden sm:flex items-center shrink-0 text-slate-300 px-0.5">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 8h10M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function StepConnector() {
  return (
    <div className="flex justify-center py-1">
      <div className="flex flex-col items-center">
        <div className="w-px h-5 bg-slate-300" />
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-slate-300">
          <path d="M6 8L0 0h12L6 8z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

function FlowStepCard({ step }: { step: ElevFlowStep }) {
  const phase = phaseColors[step.phase];

  return (
    <div className="space-y-2">
      {/* Trigger */}
      <div className="flex items-start gap-2 rounded-xl bg-amber-50 border border-amber-200 px-4 py-2.5">
        <svg className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-500 block mb-0.5">Trigger</span>
          <p className="text-xs text-amber-800 leading-snug">{step.trigger}</p>
        </div>
      </div>

      {/* Main card */}
      <div className={cn('rounded-2xl border-2 bg-white overflow-hidden', phase.ring)}>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className={cn('h-7 w-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0', phase.dot)}>
              {step.order}
            </div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">{step.title}</h3>
          </div>
          <span className={cn('rounded-full px-2 py-0.5 text-[10px] font-semibold shrink-0', phase.badge)}>
            År {step.phase}
          </span>
        </div>

        {/* Action flow */}
        <div className="px-5 py-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 mb-3">Handlinger</p>
          <div className="flex flex-wrap items-start gap-2">
            {step.actions.map((action, i) => (
              <div key={i} className="flex items-start gap-1">
                <ActionNode action={action} />
                {i < step.actions.length - 1 && <ActionArrow />}
              </div>
            ))}
          </div>
        </div>

        {/* Output */}
        <div className="mx-5 mb-4 rounded-xl bg-slate-50 border border-slate-200 px-4 py-2.5 flex items-start gap-2">
          <svg className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 block mb-0.5">Output</span>
            <p className="text-xs text-slate-600">{step.output}</p>
          </div>
        </div>

        {/* Systems + Actors */}
        <div className="flex flex-wrap gap-4 px-5 pb-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Systemer:</span>
            {step.systems.map((s) => (
              <span key={s} className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">{s}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Aktører:</span>
            {step.actors.map((a) => (
              <span key={a} className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">{a}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ElevFlowDiagram() {
  return (
    <div>
      {/* Legend */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 mb-3">Forklaring</p>
        <div className="flex flex-wrap gap-4">
          {[
            { label: 'Trigger', desc: 'Hvad starter trinnet', color: 'border-amber-200 bg-amber-50', textColor: 'text-amber-500' },
            { label: 'Manuel', desc: 'Kræver menneskelig handling', color: 'border-blue-200 bg-blue-50', textColor: 'text-blue-500' },
            { label: 'Automatisk', desc: 'Sker uden menneskelig indgriben', color: 'border-emerald-200 bg-emerald-50', textColor: 'text-emerald-500' },
            { label: 'Beslutning', desc: 'Valg der påvirker forløbet', color: 'border-amber-200 bg-amber-50', textColor: 'text-amber-500' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className={cn('rounded-lg border px-2 py-1 text-[10px] font-semibold', item.color, item.textColor)}>
                {item.label}
              </span>
              <span className="text-xs text-slate-500">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Flow steps */}
      <div>
        {elevFlowSteps.map((step, i) => (
          <div key={step.id}>
            <FlowStepCard step={step} />
            {i < elevFlowSteps.length - 1 && <StepConnector />}
          </div>
        ))}

        {/* End node */}
        <StepConnector />
        <div className="flex justify-center">
          <div className="rounded-2xl border-2 border-slate-800 bg-slate-800 text-white px-8 py-4 text-center">
            <div className="text-2xl mb-1">🎓</div>
            <p className="font-bold text-sm">Eleven har gennemført skoleforløbet</p>
            <p className="text-xs text-slate-300 mt-0.5">Alumni-profil oprettet · Certifikat udstedt · Historik arkiveret</p>
          </div>
        </div>
      </div>
    </div>
  );
}
