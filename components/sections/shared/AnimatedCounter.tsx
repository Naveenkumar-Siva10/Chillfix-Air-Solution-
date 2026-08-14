'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  /** Prefix like '₹' or '+' */
  prefix?: string;
  /** Suffix like '+', '%', 'K' */
  suffix?: string;
  duration?: number; // ms
  className?: string;
}

/**
 * Animates a number from 0 to `end` when it enters the viewport.
 * Used in the Statistics section.
 */
export function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 2000,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}
