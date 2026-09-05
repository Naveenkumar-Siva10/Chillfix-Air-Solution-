'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle2, Loader2, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { contactFormSchema, type ContactFormSchema, SERVICE_OPTIONS } from '@/lib/validations';
import { CONTACT_DETAILS } from '@/constants/site';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

interface ContactFormProps {
  className?: string;
}

/**
 * Production-ready contact form with React Hook Form + Zod validation.
 * Submits to /api/contact which uses Resend to send emails.
 */
export function ContactForm({ className }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className={cn('rounded-3xl border border-slate-100 bg-white p-8 shadow-card dark:border-slate-800 dark:bg-slate-900', className)}>
      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-8 text-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent-100">
              <CheckCircle2 className="h-10 w-10 text-accent-500" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
            <p className="max-w-sm text-slate-600 dark:text-slate-400">
              Thank you! We have received your request and will contact you within{' '}
              <strong>30 minutes</strong>.
            </p>
            <div className="mt-2 flex flex-col gap-3 w-full sm:flex-row sm:justify-center">
              <a
                href={CONTACT_DETAILS.phone.href}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-600 sm:w-auto"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
              <a
                href={CONTACT_DETAILS.whatsapp.withMessage('Hi! I just sent a contact form. Can you please assist?')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1ebe5a] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="mt-2 text-sm text-slate-500 hover:text-primary-500 hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            {submitStatus === 'error' && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400"
              >
                {errorMessage}
              </div>
            )}

            {/* Name & Phone */}
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name" required error={errors.name?.message}>
                <input
                  {...register('name')}
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className={fieldInputClass(!!errors.name)}
                />
              </Field>
              <Field label="Phone Number" required error={errors.phone?.message}>
                <input
                  {...register('phone')}
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  inputMode="numeric"
                  className={fieldInputClass(!!errors.phone)}
                />
              </Field>
            </div>

            {/* Email */}
            <Field label="Email Address" error={errors.email?.message}>
              <input
                {...register('email')}
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="your@email.com (optional)"
                className={fieldInputClass(!!errors.email)}
              />
            </Field>

            {/* Service */}
            <Field label="Service Required" required error={errors.service?.message}>
              <select
                {...register('service')}
                id="contact-service"
                className={fieldInputClass(!!errors.service)}
              >
                <option value="">Select a service…</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.label}>{opt.label}</option>
                ))}
              </select>
            </Field>

            {/* Message */}
            <Field label="Your Message" required error={errors.message?.message}>
              <textarea
                {...register('message')}
                id="contact-message"
                rows={4}
                placeholder="Describe your AC problem or requirement…"
                className={cn(fieldInputClass(!!errors.message), 'resize-none')}
              />
            </Field>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitStatus === 'loading'}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-primary-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitStatus === 'loading' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-500">
              We typically respond within <strong>30 minutes</strong>. For urgent help,{' '}
              <a href={CONTACT_DETAILS.phone.href} className="text-primary-500 hover:underline font-medium">
                call us directly
              </a>.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
        {required && <span className="ml-1 text-red-500" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function fieldInputClass(hasError: boolean): string {
  return cn(
    'w-full rounded-xl border px-4 py-3 text-sm text-slate-900 outline-none transition-all',
    'bg-slate-50 placeholder:text-slate-400',
    'focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20',
    'dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500',
    'dark:focus:bg-slate-700',
    hasError
      ? 'border-red-400 bg-red-50 focus:border-red-500 focus:ring-red-500/20 dark:bg-red-950/20'
      : 'border-slate-200 dark:border-slate-700',
  );
}
