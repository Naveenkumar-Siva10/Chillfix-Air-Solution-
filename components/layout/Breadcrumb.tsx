import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { BreadcrumbItem } from '@/components/seo/BreadcrumbSchema';

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Visual breadcrumb navigation component.
 * Should be paired with <BreadcrumbSchema> for SEO.
 */
export function BreadcrumbNav({ items, className }: BreadcrumbNavProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center gap-1 text-sm', className)}
    >
      <ol className="flex items-center gap-1" role="list">
        {/* Home */}
        <li>
          <Link
            href="/"
            className="flex items-center text-slate-500 transition-colors hover:text-primary-500"
            aria-label="Home"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 text-slate-300" aria-hidden="true" />
              {isLast ? (
                <span
                  aria-current="page"
                  className="font-medium text-slate-900 dark:text-white"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-500 transition-colors hover:text-primary-500"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
