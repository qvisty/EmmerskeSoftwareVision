import { progressData } from '@/data/progress';
import { formatDate } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-sm font-medium text-slate-800">Emmerske Efterskole</p>
            <p className="text-xs text-slate-500">Digital Transformationsprojekt 2026–2028</p>
          </div>
          <div className="text-center text-xs text-slate-500">
            <p>Sidst opdateret: {formatDate(progressData.lastUpdated)}</p>
            <p className="mt-1">
              <a
                href="https://github.com/qvisty/EmmerskeSoftwareVision"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-600 transition-colors"
              >
                GitHub Repository
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
