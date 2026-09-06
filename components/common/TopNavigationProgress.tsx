'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * TopNavigationProgress — Subtle 2.5px top progress bar for client-side navigation feedback.
 * - Non-blocking (pointer-events-none)
 * - Fires instantly on route changes
 * - Fades out automatically when page navigation completes
 */
export function TopNavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const isFirstRender = useRef(true);

  // Trigger progress bar feedback on pathname or searchParams change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setLoading(true);
    setProgress(30);

    const timer1 = setTimeout(() => setProgress(80), 80);
    const timer2 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
    }, 200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname, searchParams]);

  if (!loading && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none h-[2.5px] bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-400 to-accent-500 transition-all duration-200 ease-out shadow-sm"
        style={{
          width: `${progress}%`,
          opacity: loading ? 1 : 0,
        }}
      />
    </div>
  );
}
