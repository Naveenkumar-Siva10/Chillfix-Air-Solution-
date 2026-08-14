'use client';

import { useState } from 'react';
import { FAQS, FAQ_CATEGORIES } from '@/constants/faqs';
import { SectionHeader } from '@/components/sections/shared/SectionHeader';
import { HelpCircle, ChevronDown, ChevronUp, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_DETAILS } from '@/constants/site';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="container-base space-y-12">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Frequently Asked"
          titleHighlight="Questions"
          description="Everything you need to know about our AC installation, repair rates, emergency dispatch, and annual maintenance plans in Chennai."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-all',
                activeCategory === cat.id
                  ? 'bg-primary-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400',
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl divide-y divide-slate-100 rounded-3xl border border-slate-100 bg-white p-6 shadow-card dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-4 first:pt-0 last:pb-0">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-start justify-between gap-4 text-left font-bold text-slate-900 dark:text-white"
                >
                  <span className="flex items-center gap-3 text-base sm:text-lg">
                    <HelpCircle className="h-5 w-5 text-primary-500 shrink-0 mt-0.5" />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 shrink-0 mt-1" />
                  )}
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 pl-8 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mx-auto max-w-xl text-center space-y-4 rounded-3xl bg-slate-50 p-8 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">Still have questions?</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Our team is available 24/7 on WhatsApp or phone to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <a
              href={CONTACT_DETAILS.phone.href}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-primary-600"
            >
              <Phone className="h-4 w-4" />
              Call Customer Care
            </a>
            <a
              href={CONTACT_DETAILS.whatsapp.withMessage('Hi! I have a question about AC service in Chennai.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#1ebe5a]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
