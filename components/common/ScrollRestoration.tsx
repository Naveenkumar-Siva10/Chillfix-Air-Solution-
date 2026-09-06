'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Ensures reliable scroll restoration across page refreshes and browser history navigation.
 * 1. Enables native history.scrollRestoration = 'auto'
 * 2. Saves scroll Y position in sessionStorage per pathname
 * 3. Restores saved scroll position after hydration & layout stabilization on refresh
 * 4. Supports URL hash targets (#pricing, #contact, #faq)
 * 5. Starts new route navigations at top (0, 0)
 */
export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Force native scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto';
    }

    const posKey = `chillfix_scroll_pos_${pathname}`;
    const lastPathKey = 'chillfix_last_pathname';

    // 2. Check for URL Hash anchor navigation (e.g. #pricing)
    const hash = window.location.hash;
    if (hash) {
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.setItem(lastPathKey, pathname);
        return;
      }
    }

    // 3. Detect reload or same page refresh
    const lastPathname = sessionStorage.getItem(lastPathKey);
    const navEntries = typeof performance !== 'undefined' && performance.getEntriesByType
      ? (performance.getEntriesByType('navigation') as PerformanceNavigationTiming[])
      : [];
    const isReload = (navEntries.length > 0 && navEntries[0].type === 'reload') || lastPathname === pathname;

    const savedPos = sessionStorage.getItem(posKey);

    if (isReload && savedPos !== null) {
      const targetY = parseInt(savedPos, 10);
      if (!isNaN(targetY) && targetY > 0) {
        let attempts = 0;
        const maxAttempts = 15;

        const attemptScroll = () => {
          attempts++;
          window.scrollTo(0, targetY);

          // Retry if document height was still expanding during hydration
          if (Math.abs(window.scrollY - targetY) > 15 && attempts < maxAttempts) {
            requestAnimationFrame(attemptScroll);
          }
        };

        requestAnimationFrame(attemptScroll);
      }
    } else if (!isReload) {
      // New route navigation: scroll to top
      window.scrollTo(0, 0);
    }

    sessionStorage.setItem(lastPathKey, pathname);

    // 4. Save scroll position on scroll (throttled) & before unload
    let timer: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (window.scrollY > 0) {
          sessionStorage.setItem(posKey, window.scrollY.toString());
        }
      }, 80);
    };

    const handleUnload = () => {
      if (window.scrollY > 0) {
        sessionStorage.setItem(posKey, window.scrollY.toString());
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleUnload);
    window.addEventListener('pagehide', handleUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('pagehide', handleUnload);
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
