'use client';

import { useState } from 'react';
import { JourneyStep } from '@/types';
import { systems } from '@/data/systems';
import { cn } from '@/lib/utils';
import { ChevronRight, Clock, Users, Cpu, ListChecks } from 'lucide-react';

interface JourneyMapProps {
  steps: JourneyStep[];
}

export default function JourneyMap({ steps }: JourneyMapProps) {
  const [selectedStep, setSelectedStep] = useState<JourneyStep | null>(null);

  return (
    <div className="relative">
      <div className="flex flex-col gap-0">
        {steps.map((step, index) => {
          const isSelected = selectedStep?.id === step.id;

          return (
            <div key={step.id}>
              <button
                onClick={() => setSelectedStep(isSelected ? null : step)}
                className={cn(
                  'w-full text-left rounded-xl border p-4 transition-all',
                  isSelected
                    ? 'bg-brand-50 border-brand-200 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
                )}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                      isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600'
                    )}
                  >
                    {step.order}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-slate-900">{step.title}</h3>
                      <ChevronRight
                        className={cn(
                          'h-4 w-4 text-slate-400 transition-transform shrink-0',
                          isSelected && 'rotate-90'
                        )}
                      />
                    </div>
                    <p className="mt-0.5 text-sm text-slate-500 line-clamp-1">{step.description}</p>
                  </div>
                </div>
              </button>

              {/* Expanded detail */}
              {isSelected && (
                <div className="mx-4 rounded-b-xl border border-t-0 border-slate-200 bg-white p-6 shadow-sm">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>

                      <div className="mt-4">
                        <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                          <ListChecks className="h-3.5 w-3.5" />
                          Procestrin
                        </h4>
                        <ul className="space-y-1.5">
                          {step.detailedSteps.map((s, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                          <Cpu className="h-3.5 w-3.5" />
                          Involverede systemer
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step.systemsInvolved.map((sysId) => {
                            const sys = systems.find((s) => s.id === sysId);
                            return (
                              <span
                                key={sysId}
                                className="rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-xs font-medium text-brand-700"
                              >
                                {sys?.name ?? sysId}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                          <Users className="h-3.5 w-3.5" />
                          Aktører
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step.actors.map((actor) => (
                            <span
                              key={actor}
                              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                            >
                              {actor}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                          <Clock className="h-3.5 w-3.5" />
                          Varighed / timing
                        </h4>
                        <p className="text-sm text-slate-700">{step.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="h-6 w-0.5 bg-slate-200" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
