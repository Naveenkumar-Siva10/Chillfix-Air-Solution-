'use client';

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  MessageCircle,
  ChevronDown,
  AirVent,
  Menu,
  X,
  Snowflake,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrolled } from '@/hooks/useScrollPosition';
import { CONTACT_DETAILS, SITE_CONFIG } from '@/constants/site';
import { NAV_ITEMS } from '@/constants/navigation';
import { MobileMenu } from './MobileMenu';

// Service dropdown icon map
const SERVICE_ICONS: Record<string, string> = {
  '/ac-service-chennai': '❄️',
  '/ac-repair-chennai': '🔧',
  '/ac-cleaning-chennai': '✨',
  '/ac-deep-cleaning-chennai': '🫧',
  '/ac-gas-filling-chennai': '💧',
  '/ac-installation-chennai': '🔩',
  '/ac-maintenance-chennai': '📅',
};

interface DropdownProps {
  items: { label: string; href: string }[];
  isOpen: boolean;
  categoryLabel: string;
  viewAllHref: string;
}

function NavDropdown({ items, isOpen, categoryLabel, viewAllHref }: DropdownProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/2 top-full z-[1100] mt-2 w-[520px] -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
          role="region"
          aria-label={categoryLabel}
        >
          {/* Header */}
          <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-2.5 dark:border-slate-800">
            <AirVent className="h-4 w-4 text-primary-500" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {categoryLabel}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-1.5">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-all',
                    isActive
                      ? 'bg-primary-50 text-primary-600 font-bold dark:bg-primary-950 dark:text-primary-400'
                      : 'text-slate-800 font-semibold hover:bg-slate-100 hover:text-primary-600 dark:text-slate-200 dark:hover:bg-slate-800',
                  )}
                >
                  <span className="text-base leading-none shrink-0" aria-hidden="true">
                    {SERVICE_ICONS[item.href] ?? '📍'}
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white leading-tight">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-4 border-t border-slate-100 pt-3 dark:border-slate-800">
            <Link
              href={viewAllHref}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-primary-600"
            >
              <AirVent className="h-4 w-4" aria-hidden="true" />
              Explore All Services
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface NavLinkProps {
  item: (typeof NAV_ITEMS)[number];
  isScrolled: boolean;
  isTransparent: boolean;
}

function NavLink({ item, isScrolled, isTransparent }: NavLinkProps) {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive =
    item.href === '/'
      ? pathname === '/'
      : pathname.startsWith(item.href);

  // Ensure 100% readable text color in normal state (before hover)
  const textColor = isTransparent && !isScrolled
    ? 'text-white font-bold drop-shadow-sm hover:text-cyan-200'
    : 'text-slate-900 font-bold hover:text-primary-600 dark:text-slate-100 dark:hover:text-primary-400';

  const activeColor = isTransparent && !isScrolled
    ? 'text-white font-extrabold underline underline-offset-4 decoration-2 decoration-accent-400'
    : 'text-primary-600 font-extrabold dark:text-primary-400';

  const openDropdown = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 120);
  }, []);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [dropdownOpen]);

  if (item.children) {
    return (
      <div
        ref={ref}
        className="relative"
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <button
          type="button"
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
          onClick={() => setDropdownOpen((prev) => !prev)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setDropdownOpen(false);
          }}
          className={cn(
            'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-bold transition-colors',
            'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
            isActive ? activeColor : textColor,
          )}
        >
          {item.label}
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200 shrink-0',
              dropdownOpen && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </button>
        <NavDropdown
          items={item.children}
          isOpen={dropdownOpen}
          categoryLabel={item.label}
          viewAllHref={item.href}
        />
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        'relative flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-bold transition-colors',
        isActive ? activeColor : textColor,
      )}
    >
      {item.label}
      {item.badge && (
        <span className="rounded-full bg-accent-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
          {item.badge}
        </span>
      )}
    </Link>
  );
}

export function Navbar() {
  const isScrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isTransparent = isHomePage;

  useLayoutEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const showSolidBg = isScrolled || !isTransparent || mobileOpen;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[1000] transition-all duration-300',
          showSolidBg
            ? 'border-b border-slate-200/90 bg-white/98 shadow-md backdrop-blur-md dark:border-slate-800/90 dark:bg-slate-950/98'
            : 'bg-transparent',
        )}
      >
        <div className="container-base">
          <div className="flex h-16 items-center justify-between gap-4 md:h-18">

            {/* Logo */}
            <Link
              href="/"
              aria-label={`${SITE_CONFIG.name} — Home`}
              className="flex shrink-0 items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-500 shadow-md shadow-primary-500/30">
                <Snowflake className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <span
                  className={cn(
                    'block text-base font-extrabold tracking-tight transition-colors',
                    showSolidBg
                      ? 'text-slate-900 dark:text-white'
                      : 'text-white drop-shadow-sm',
                  )}
                >
                  ChillFix
                </span>
                <span
                  className={cn(
                    'block text-[10px] font-bold uppercase tracking-widest transition-colors',
                    showSolidBg
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-cyan-200',
                  )}
                >
                  AC Service
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-1 lg:flex"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  isScrolled={isScrolled}
                  isTransparent={isTransparent}
                />
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
              <a
                href={CONTACT_DETAILS.whatsapp.withMessage(
                  'Hi ChillFix! I need help with my AC service.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className={cn(
                  'flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-bold transition-all',
                  showSolidBg
                    ? 'bg-[#25D366]/15 text-[#1ebe5a] hover:bg-[#25D366] hover:text-white'
                    : 'bg-white/20 text-white hover:bg-white/30',
                )}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>

              <a
                href={CONTACT_DETAILS.phone.href}
                aria-label={`Call ${CONTACT_DETAILS.phone.display}`}
                className="flex items-center gap-1.5 rounded-xl bg-primary-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-primary-500/25 transition-all hover:bg-primary-600 hover:shadow-lg"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-xl transition-colors lg:hidden',
                showSolidBg
                  ? 'text-slate-900 bg-slate-100 hover:bg-slate-200 dark:text-white dark:bg-slate-800'
                  : 'text-white bg-white/20 hover:bg-white/30',
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
