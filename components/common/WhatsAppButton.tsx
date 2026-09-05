'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CONTACT_DETAILS } from '@/constants/site';

interface WhatsAppButtonProps {
  /** Custom WhatsApp message to pre-fill */
  message?: string;
  /** Button display variant */
  variant?: 'floating' | 'inline' | 'outline';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Override label */
  label?: string;
  className?: string;
}

/**
 * WhatsApp CTA button — floating or inline.
 * The floating variant renders a fixed bottom-right button.
 */
export function WhatsAppButton({
  message = "Hi! I need help with my AC service. Can you please assist?",
  variant = 'inline',
  size = 'md',
  label,
  className,
}: WhatsAppButtonProps) {
  const href = CONTACT_DETAILS.whatsapp.withMessage(message);

  const sizeClasses = {
    sm: 'gap-1.5 px-3 py-1.5 text-sm',
    md: 'gap-2 px-5 py-2.5 text-sm font-semibold',
    lg: 'gap-2.5 px-7 py-3.5 text-base font-semibold',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  if (variant === 'floating') {
    return (
      <motion.div
        className="fixed bottom-6 right-6 z-[900] no-print"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className={cn(
            'flex h-14 w-14 items-center justify-center rounded-full shadow-lg',
            'bg-[#25D366] text-white',
            'transition-transform duration-200 hover:scale-110 active:scale-95',
            'focus-visible:outline-2 focus-visible:outline-offset-2',
            className,
          )}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <MessageCircle className="h-7 w-7 fill-white" aria-hidden="true" />
          </motion.div>
          {/* Pulse ring */}
          <span
            className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"
            aria-hidden="true"
          />
        </Link>
      </motion.div>
    );
  }

  if (variant === 'outline') {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label ?? 'Chat on WhatsApp'}
        className={cn(
          'inline-flex items-center rounded-xl border-2 border-[#25D366] text-[#25D366]',
          'transition-all duration-200 hover:bg-[#25D366] hover:text-white active:scale-95',
          'focus-visible:outline-2 focus-visible:outline-offset-2',
          sizeClasses[size],
          className,
        )}
      >
        <MessageCircle className={cn(iconSizes[size])} aria-hidden="true" />
        {label ?? 'WhatsApp Us'}
      </Link>
    );
  }

  // Inline (default)
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ?? 'Chat on WhatsApp'}
      className={cn(
        'inline-flex items-center rounded-xl bg-[#25D366] text-white shadow-md',
        'transition-all duration-200 hover:bg-[#1ebe5a] hover:shadow-lg active:scale-95',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        sizeClasses[size],
        className,
      )}
    >
      <MessageCircle className={cn(iconSizes[size])} aria-hidden="true" />
      {label ?? 'WhatsApp Us'}
    </Link>
  );
}
