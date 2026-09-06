'use client';

import { type ReactNode } from 'react';
import { motion, type Variant } from 'framer-motion';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  distance?: number;
  duration?: number;
  once?: boolean;
}

const getVariants = (direction: Direction, distance: number) => {
  const offsets: Record<Direction, { x?: number; y?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return {
    hidden: { opacity: 0, ...offsets[direction] } as Variant,
    visible: { opacity: 1, x: 0, y: 0 } as Variant,
  };
};

/**
 * Wrapper component that reveals children with a fade+slide animation when scrolled into view.
 * Wraps any element for consistent scroll animations across sections.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 24,
  duration = 0.5,
  once = true,
}: ScrollRevealProps) {
  const variants = getVariants(direction, distance);

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}


/**
 * Stagger container — animates children sequentially.
 * Use with ScrollReveal children for cascade effects.
 */
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={{
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Child item for StaggerContainer — fades and slides up.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
    >
      {children}
    </motion.div>
  );
}
