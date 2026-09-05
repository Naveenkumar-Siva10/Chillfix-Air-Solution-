'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Phone,
  MessageCircle,
  Snowflake,
  CalendarCheck,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/constants/navigation';
import { CONTACT_DETAILS, SITE_CONFIG } from '@/constants/site';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MobileAccordionProps {
  label: string;
  items: { label: string; href: string }[];
  onLinkClick: () => void;
  isActive: boolean;
}

function MobileAccordion({
  label,
  items,
  onLinkClick,
  isActive,
}: MobileAccordionProps) {
  const [open, setOpen] = useState(isActive);
  const pathname = usePathname();

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className={cn(
          'flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors',
          isActive
            ? 'bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400'
            : 'text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800/60',
        )}
      >
        {label}
        <ChevronDown
          className={cn(
            'h-5 w-5 text-slate-500 transition-transform duration-300',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="accordion-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-1 grid grid-cols-1 gap-1 pl-4 sm:grid-cols-2">
              {items.map((child) => {
                const childActive = pathname === child.href;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onLinkClick}
                    className={cn(
                      'rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors',
                      childActive
                        ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-400'
                        : 'text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
                    )}
                    aria-current={childActive ? 'page' : undefined}
                  >
                    {child.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      if (isOpen) onClose();
    }
  }, [pathname, isOpen, onClose]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut' as const },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-backdrop"
            className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            id="mobile-menu"
            key="mobile-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-x-0 top-0 z-[1000] flex max-h-[92dvh] flex-col overflow-hidden rounded-b-3xl bg-white shadow-2xl dark:bg-slate-950 lg:hidden"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 36, mass: 0.8 }}
          >
            {/* Header */}
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-200 px-5 dark:border-slate-800">
              <Link
                href="/"
                onClick={onClose}
                aria-label={`${SITE_CONFIG.name} — Home`}
                className="flex items-center gap-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500">
                  <Snowflake className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div className="leading-tight">
                  <span className="block text-base font-extrabold text-slate-900 dark:text-white">
                    ChillFix
                  </span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-primary-500">
                    AC Service
                  </span>
                </div>
              </Link>
            </div>

            {/* Scrollable nav list */}
            <div className="flex-1 overflow-y-auto">
              <motion.nav
                aria-label="Mobile navigation"
                className="space-y-1 p-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {NAV_ITEMS.map((item) => {
                  const isActive =
                    item.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(item.href);

                  if (item.children) {
                    return (
                      <motion.div key={item.href} variants={itemVariants}>
                        <MobileAccordion
                          label={item.label}
                          items={item.children}
                          onLinkClick={onClose}
                          isActive={isActive}
                        />
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={isActive ? 'page' : undefined}
                        className={cn(
                          'flex items-center justify-between rounded-xl px-4 py-3 text-base font-bold transition-colors',
                          isActive
                            ? 'bg-primary-50 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400'
                            : 'text-slate-900 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800/60',
                        )}
                      >
                        {item.label}
                        {item.badge && (
                          <span className="rounded-full bg-accent-500 px-2 py-0.5 text-xs font-bold text-white">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>
            </div>

            {/* Fixed bottom CTAs */}
            <div className="shrink-0 space-y-3 border-t border-slate-200 p-5 dark:border-slate-800">
              <p className="text-center text-xs font-bold text-accent-600 dark:text-accent-400">
                ⚡ 24/7 Emergency AC Service Available
              </p>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={CONTACT_DETAILS.phone.href}
                  className="flex items-center justify-center gap-2 rounded-xl bg-primary-500 py-3.5 text-sm font-bold text-white shadow-md shadow-primary-500/25 transition-all hover:bg-primary-600 active:scale-[0.98]"
                  aria-label={`Call ${CONTACT_DETAILS.phone.display}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={CONTACT_DETAILS.whatsapp.withMessage(
                    'Hi! I need AC service / repair.',
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#1ebe5a] active:scale-[0.98]"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
