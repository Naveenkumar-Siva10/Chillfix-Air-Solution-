'use client';

import { useCallback } from 'react';
import { CalendarCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useBooking } from '@/hooks/useBooking';
import { BookingModal } from '@/components/common/BookingModal';

export function HeroBookingButton() {
  const { isOpen, preselectedService, openBooking, closeBooking } = useBooking();
  const handleBookNow = useCallback(() => openBooking(), [openBooking]);

  return (
    <>
      <button
        type="button"
        onClick={handleBookNow}
        className={cn(
          'group flex items-center justify-center gap-2.5 rounded-2xl',
          'border-2 border-white bg-white/25 px-7 py-4 text-base font-extrabold text-white',
          'shadow-lg backdrop-blur-sm transition-all duration-200',
          'hover:bg-white/40 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98]',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        )}
        aria-label="Book an AC service appointment in Chennai"
      >
        <CalendarCheck className="h-5 w-5 transition-transform group-hover:scale-110" aria-hidden="true" />
        Book Service
      </button>

      <BookingModal
        isOpen={isOpen}
        onClose={closeBooking}
        preselectedService={preselectedService}
      />
    </>
  );
}
