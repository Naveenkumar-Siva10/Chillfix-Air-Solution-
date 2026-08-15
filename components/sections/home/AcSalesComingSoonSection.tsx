'use client';

import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Wrench, Truck, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

const LEADING_BRANDS = [
  { name: 'Daikin', badge: 'Japanese Inverter Tech' },
  { name: 'LG', badge: 'Dual Inverter & AI' },
  { name: 'Voltas', badge: 'Tata Trust & Heavy Cooling' },
  { name: 'Blue Star', badge: 'Commercial Grade Cooling' },
  { name: 'Carrier', badge: 'Energy Efficiency Leader' },
  { name: 'Panasonic', badge: 'Nanoe-X Air Purification' },
  { name: 'Mitsubishi Electric', badge: 'Ultra-Quiet Performance' },
];

const FUTURE_BENEFITS = [
  {
    icon: ShieldCheck,
    title: '100% Brand Authorized Warranty',
    description: 'Direct manufacturer warranty with genuine parts guarantee on every new AC model.',
  },
  {
    icon: Wrench,
    title: 'Free Pre-Purchase Cooling Survey',
    description: 'Our expert technicians evaluate your room size & sun exposure to recommend the perfect tonnage.',
  },
  {
    icon: Truck,
    title: 'Same-Day Delivery & Installation',
    description: 'Hassle-free delivery and certified installation by senior HVAC engineers in Chennai.',
  },
];

export function AcSalesComingSoonSection() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    'Hi ChillFix! I would like to join the priority waiting list for premium AC sales in Chennai and receive early launch discounts.'
  )}`;

  return (
    <section className="relative py-20 bg-slate-900 text-white overflow-hidden" id="ac-sales-preview">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900 to-slate-950 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-sm font-semibold mb-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Expanding Service Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display"
          >
            Premium Air Conditioner Sales <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Coming Soon to Chennai
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            While ChillFix Air Solution currently provides top-rated <strong className="text-white">AC repair, jet-wash servicing, gas filling, and AMC contracts</strong> across 25+ Chennai areas, we are preparing to launch multi-brand AC sales with doorstep delivery and expert installation.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {FUTURE_BENEFITS.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * idx }}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Brand Showcase Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-950 border border-slate-700/80 shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Authorised Brand Partners</span>
              <h4 className="text-2xl font-bold text-white mt-1">Leading AC Brands Launching Soon</h4>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Get ready for Split, Window, Inverter, and 5-Star Energy Efficient ACs with exclusive launch offers and 100% genuine manufacturer warranties.
              </p>
            </div>

            {/* CTA Box */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <MessageSquare className="w-5 h-5 text-cyan-200" />
                <span>Notify Me When AC Sales Launch</span>
                <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Brand Tags Cloud */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
            <span className="text-xs text-slate-400 font-medium mr-2">Featured Brands:</span>
            {LEADING_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 hover:border-cyan-400/50 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200">{brand.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400">{brand.badge}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
