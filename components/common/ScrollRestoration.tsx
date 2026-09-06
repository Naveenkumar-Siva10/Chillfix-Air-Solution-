'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scroll management for ChillFix AC Service:
 * 1. Preserves natural browser scroll position across page reloads/refreshes.
 * 2. On client-side route navigation (pathname change), scrolls to top (0, 0) for new pages.
 * 3. Preserves explicit URL hash anchor targets (#pricing, #contact, #faq).
 */
export function ScrollRestoration() {
  const pathname = usePathname();
  const isFirstMount = useRef(true);
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // 1. On initial mount / hard refresh:
    //    Set 'manual' so browser does NOT restore the previous scroll position.
    //    Then immediately scroll to top — hero is always visible after refresh.
    if (isFirstMount.current) {
      isFirstMount.current = false;
      if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }

      // If URL contains a hash anchor (e.g. #pricing, #contact), scroll to target element
      const hash = window.location.hash;
      if (hash) {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          setTimeout(() => {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else {
        // No hash — scroll to top so Hero is visible
        window.scrollTo(0, 0);
      }
      return;
    }

    // 2. On client-side route navigation (when pathname actually changes)
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      const hash = window.location.hash;
      if (hash) {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
