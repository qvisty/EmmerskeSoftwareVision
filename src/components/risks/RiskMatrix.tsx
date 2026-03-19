'use client';

import { Risk } from '@/types';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const getCellColor = (prob: number, impact: number) => {
  const score = prob * impact;
  if (score >= 15) return 'bg-red-500';
  if (score >= 9) return 'bg-amber-400';
  if (score >= 4) return 'bg-yellow-300';
  return 'bg-emerald-300';
};

const getCellTextColor = (prob: number, impact: number) => {
  const score = prob * impact;
  if (score >= 15) return 'text-white';
  if (score >= 9) return 'text-amber-900';
  return 'text-slate-800';
};

interface RiskMatrixProps {
  risks: Risk[];
}

export default function RiskMatrix({ risks }: RiskMatrixProps) {
  const [hoveredRisk, setHoveredRisk] = useState<Risk | null>(null);

  const getRisksAt = (prob: number, impact: number) =>
    risks.filter((r) => r.probability === prob && r.impact === impact);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6">
      <h3 className="font-bold text-slate-800 mb-1">Risikomatrix</h3>
      <p className="text-xs text-slate-500 mb-6">Sandsynlighed × Konsekvens</p>

      <div className="overflow-x-auto">
        <div className="min-w-96">
          {/* Y-axis label */}
          <div className="flex gap-2">
            <div className="flex flex-col justify-center items-center w-6">
              <span className="text-xs text-slate-400 -rotate-90 whitespace-nowrap">Sandsynlighed</span>
            </div>

            <div className="flex-1">
              {/* Matrix grid - prob 5 (top) to 1 (bottom) */}
              {[5, 4, 3, 2, 1].map((prob) => (
                <div key={prob} className="flex items-center gap-1 mb-1">
                  <span className="w-4 text-xs text-slate-400 text-right shrink-0">{prob}</span>
                  {[1, 2, 3, 4, 5].map((impact) => {
                    const cellRisks = getRisksAt(prob, impact);
                    const color = getCellColor(prob, impact);
                    const textColor = getCellTextColor(prob, impact);
                    return (
                      <div
                        key={impact}
                        className={cn(
                          'relative flex-1 h-12 rounded flex items-center justify-center cursor-default',
                          color
                        )}
                      >
                        {cellRisks.map((risk, i) => (
                          <button
                            key={risk.id}
                            onMouseEnter={() => setHoveredRisk(risk)}
                            onMouseLeave={() => setHoveredRisk(null)}
                            className={cn(
                              'absolute h-7 w-7 rounded-full border-2 border-white bg-slate-800/80 text-white text-xs font-bold flex items-center justify-center hover:scale-110 transition-transform',
                              textColor
                            )}
                            style={{
                              left: `${50 + i * 30 - (cellRisks.length - 1) * 15}%`,
                              transform: 'translateX(-50%)',
                            }}
                          >
                            R
                          </button>
                        ))}
                      </div>
                    );
                  })}
                </div>
              ))}

              {/* X-axis */}
              <div className="flex items-center gap-1 mt-1">
                <span className="w-4" />
                {[1, 2, 3, 4, 5].map((v) => (
                  <span key={v} className="flex-1 text-center text-xs text-slate-400">{v}</span>
                ))}
              </div>
              <p className="text-center text-xs text-slate-400 mt-1">Konsekvens</p>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { color: 'bg-red-500', label: 'Kritisk (≥15)' },
              { color: 'bg-amber-400', label: 'Høj (9-14)' },
              { color: 'bg-yellow-300', label: 'Medium (4-8)' },
              { color: 'bg-emerald-300', label: 'Lav (1-3)' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className={cn('h-3 w-3 rounded', item.color)} />
                <span className="text-xs text-slate-600">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hover tooltip */}
      {hoveredRisk && (
        <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="font-semibold text-sm text-slate-800">{hoveredRisk.title}</p>
          <p className="text-xs text-slate-500 mt-1">
            Score: {hoveredRisk.riskScore} · {hoveredRisk.owner}
          </p>
        </div>
      )}
    </div>
  );
}
