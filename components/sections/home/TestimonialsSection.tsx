'use client';

import { motion } from 'framer-motion';
import { Star, MessageSquare, ExternalLink, ShieldCheck, CheckCircle2, MessageCircle, Phone, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { ScrollReveal } from '@/components/sections/shared/ScrollReveal';
import { CONTACT_DETAILS } from '@/constants/site';
import { BUSINESS_CONFIG } from '@/constants/business';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-slate-50 dark:bg-slate-950"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-base">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Customer Feedback & Reviews"
            title="Authentic Service Feedback"
            titleHighlight="Direct from Homeowners"
            description="We believe in 100% transparent, genuine customer feedback. Read our verified Google Business Profile reviews or share your own experience."
            align="left"
            className="max-w-xl"
          />

          <a
            href="https://maps.google.com/?q=ChillFix+AC+Service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary-500 px-6 py-3.5 text-sm font-bold text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-md shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <span>Review Us on Google Maps</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* 3 Value & Transparency Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-500 dark:bg-primary-950/60 dark:text-primary-400 mb-5">
                  <Star className="h-6 w-6 fill-current" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Verified Google Reviews
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Every review for {BUSINESS_CONFIG.identity.primaryName} is published on our public Google Business Profile by actual homeowners and business owners across Chennai.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="https://maps.google.com/?q=ChillFix+AC+Service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-500 hover:underline"
                >
                  Visit Google Maps listing <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-50 text-accent-500 dark:bg-accent-950/60 dark:text-accent-400 mb-5">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Transparent On-Site Diagnostics
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Our technicians explain the exact problem, check refrigerant pressures in front of you, and quote transparent rates before initiating any repair.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent-500" />
                  Diagnostic visit adjusted into repair
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-50 text-secondary-500 dark:bg-secondary-950/60 dark:text-secondary-400 mb-5">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Direct Post-Service Support
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Have feedback or questions after your AC service? Contact our service desk directly via WhatsApp or phone for prompt resolution.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <a
                  href={CONTACT_DETAILS.phone.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-primary-500"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Service Desk
                </a>
                <a
                  href={CONTACT_DETAILS.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Trust & Review CTA Banner */}
        <ScrollReveal direction="up" delay={0.2} className="mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-50 dark:bg-primary-950/60 text-primary-500">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Had service recently in Perungalathur, Tambaram, or Chennai?
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Help fellow homeowners find reliable local AC technicians by sharing your honest experience.
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=ChillFix+AC+Service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-bold text-white hover:bg-slate-800 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors shrink-0"
            >
              <span>Write a Google Review</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
