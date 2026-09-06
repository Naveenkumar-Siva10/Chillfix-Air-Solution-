'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '@/constants/faqs';

const PRICING_FAQS = FAQS.slice(0, 4);

export function MiniAccordion() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-white dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
      {PRICING_FAQS.map((faq) => {
        const isOpen = open === faq.id;
        return (
          <div key={faq.id}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${faq.id}`}
              className="flex w-full items-start gap-4 px-6 py-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60"
            >
              <HelpCircle
                className="mt-0.5 h-5 w-5 shrink-0 text-primary-400"
                aria-hidden="true"
              />
              <span className="flex-1 text-sm font-semibold text-slate-900 dark:text-white">
                {faq.question}
              </span>
              {isOpen ? (
                <ChevronUp className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              ) : (
                <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              )}
            </button>
            <motion.div
              id={`faq-answer-${faq.id}`}
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 pl-15 text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
                {faq.answer}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
