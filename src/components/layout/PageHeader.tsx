import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: 'blue' | 'violet' | 'emerald' | 'amber' | 'slate';
  className?: string;
}

const badgeColors = {
  blue: 'bg-blue-100 text-blue-700',
  violet: 'bg-violet-100 text-violet-700',
  emerald: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-700',
  slate: 'bg-slate-100 text-slate-700',
};

export default function PageHeader({
  title,
  subtitle,
  badge,
  badgeColor = 'blue',
  className,
}: PageHeaderProps) {
  return (
    <div className={cn('border-b border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-7xl">
        {badge && (
          <span
            className={cn(
              'mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider',
              badgeColors[badgeColor]
            )}
          >
            {badge}
          </span>
        )}
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-lg text-slate-600">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
