'use client';

import { useState, useEffect, useLayoutEffect } from 'react';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * Returns the current scroll position (Y offset) of the window.
 * Used to trigger navbar styling changes on scroll without hydration layout shift.
 */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    // Initialize position synchronously before paint
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
}

/**
 * Returns true when the user has scrolled past the threshold.
 */
export function useScrolled(threshold = 20): boolean {
  const scrollY = useScrollPosition();
  return scrollY > threshold;
}
