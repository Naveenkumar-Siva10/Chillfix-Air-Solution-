'use client';

import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-slate-400 transition-colors hover:bg-primary-500 hover:text-white dark:bg-slate-900"
    >
      <ArrowUp className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
