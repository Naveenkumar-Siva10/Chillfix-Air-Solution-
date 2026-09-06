'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Scroll management for ChillFix AC Service:
 * 1. Disables automatic browser scroll restoration (history.scrollRestoration = 'manual')
 * 2. Forces page refresh / reload to start at top (0, 0) so the Hero section is immediately visible
 * 3. Preserves explicit URL hash anchor targets (#pricing, #contact, #faq)
 */
export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Disable automatic browser scroll restoration on refresh
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Check for URL Hash anchor navigation (e.g. #pricing, #contact)
    const hash = window.location.hash;
    if (hash) {
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    // 3. Force scroll to top (0, 0) on page refresh and mount
    window.scrollTo(0, 0);

    // Additional frame check to ensure hydration does not offset top scroll
    const frame = requestAnimationFrame(() => {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
