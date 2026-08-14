'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X, CheckCircle2, Phone, MessageCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { bookingFormSchema, type BookingFormSchema, SERVICE_OPTIONS, AC_BRAND_OPTIONS, AC_TYPE_OPTIONS, PREFERRED_TIME_OPTIONS } from '@/lib/validations';
import { CONTACT_DETAILS } from '@/constants/site';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Pre-select a service when opened from a service card */
  preselectedService?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

/**
 * Service booking modal with a multi-field form.
 * Opens from "Book Now" CTAs throughout the site.
 */
export function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormSchema>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      service: preselectedService ?? '',
    },
  });

  const onSubmit = async (data: BookingFormSchema) => {
    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          service: data.service,
          message: `Booking Request\n\nAC Brand: ${data.acBrand}\nAC Type: ${data.acType}\nPreferred Date: ${data.preferredDate}\nPreferred Time: ${data.preferredTime}\nAddress: ${data.address}\n${data.notes ? `Notes: ${data.notes}` : ''}`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitStatus('idle');
      reset();
    }, 300);
  };

  // Minimum date = tomorrow
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateStr = minDate.toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[1100] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-[1200] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="booking-modal-title"
              className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-slate-900"
            >
              {/* Header */}
              <div className="gradient-primary sticky top-0 z-10 flex items-center justify-between rounded-t-3xl p-6">
                <div>
                  <h2
                    id="booking-modal-title"
                    className="text-xl font-bold text-white"
                  >
                    Book AC Service
                  </h2>
                  <p className="text-sm text-white/80">We confirm within 30 minutes</p>
                </div>
                <button
                  onClick={handleClose}
                  aria-label="Close booking modal"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Success state */}
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center gap-4 p-10 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-100">
                    <CheckCircle2 className="h-10 w-10 text-accent-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Booking Confirmed!</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    We have received your request. Our team will call you within 30 minutes to confirm the appointment.
                  </p>
                  <div className="mt-2 flex flex-col gap-3 w-full sm:flex-row">
                    <a
                      href={CONTACT_DETAILS.phone.href}
                      className="flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-600 flex-1"
                    >
                      <Phone className="h-4 w-4" /> Call Us Now
                    </a>
                    <a
                      href={CONTACT_DETAILS.whatsapp.withMessage("Hi! I just submitted a booking request. Please confirm my appointment.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5a] flex-1"
                    >
                      <MessageCircle className="h-4 w-4" /> WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-6" noValidate>
                  {submitStatus === 'error' && (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                      Something went wrong. Please try again or call us directly.
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Your Name *" error={errors.name?.message}>
                      <input
                        {...register('name')}
                        id="booking-name"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your name"
                        className={inputClass(!!errors.name)}
                      />
                    </FormField>

                    <FormField label="Phone Number *" error={errors.phone?.message}>
                      <input
                        {...register('phone')}
                        id="booking-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className={inputClass(!!errors.phone)}
                      />
                    </FormField>
                  </div>

                  <FormField label="Email (Optional)" error={errors.email?.message}>
                    <input
                      {...register('email')}
                      id="booking-email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      className={inputClass(!!errors.email)}
                    />
                  </FormField>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Service Required *" error={errors.service?.message}>
                      <select {...register('service')} id="booking-service" className={inputClass(!!errors.service)}>
                        <option value="">Select service…</option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="AC Brand *" error={errors.acBrand?.message}>
                      <select {...register('acBrand')} id="booking-brand" className={inputClass(!!errors.acBrand)}>
                        <option value="">Select brand…</option>
                        {AC_BRAND_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="AC Type *" error={errors.acType?.message}>
                      <select {...register('acType')} id="booking-actype" className={inputClass(!!errors.acType)}>
                        <option value="">Select type…</option>
                        {AC_TYPE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Preferred Date *" error={errors.preferredDate?.message}>
                      <input
                        {...register('preferredDate')}
                        id="booking-date"
                        type="date"
                        min={minDateStr}
                        className={inputClass(!!errors.preferredDate)}
                      />
                    </FormField>
                  </div>

                  <FormField label="Preferred Time *" error={errors.preferredTime?.message}>
                    <select {...register('preferredTime')} id="booking-time" className={inputClass(!!errors.preferredTime)}>
                      <option value="">Select time slot…</option>
                      {PREFERRED_TIME_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </FormField>

                  <FormField label="Service Address *" error={errors.address?.message}>
                    <textarea
                      {...register('address')}
                      id="booking-address"
                      rows={2}
                      placeholder="Door no., Street, Area, Chennai"
                      className={cn(inputClass(!!errors.address), 'resize-none')}
                    />
                  </FormField>

                  <FormField label="Additional Notes" error={errors.notes?.message}>
                    <textarea
                      {...register('notes')}
                      id="booking-notes"
                      rows={2}
                      placeholder="Any specific issues or instructions (optional)"
                      className={cn(inputClass(!!errors.notes), 'resize-none')}
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-primary-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        Submitting…
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    By booking you agree to our{' '}
                    <a href="/terms" className="text-primary-500 hover:underline">Terms</a>
                    {' '}and{' '}
                    <a href="/privacy-policy" className="text-primary-500 hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Helper sub-components
function FormField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean): string {
  return cn(
    'w-full rounded-xl border px-4 py-3 text-sm text-slate-900 outline-none transition-all',
    'bg-white placeholder:text-slate-400',
    'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
    'dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500',
    hasError
      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20'
      : 'border-slate-200 dark:border-slate-700',
  );
}
