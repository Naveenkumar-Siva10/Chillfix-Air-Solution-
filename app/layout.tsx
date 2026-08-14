import type { Metadata, Viewport } from 'next';
import { inter, poppins } from '@/lib/fonts';
import { SITE_CONFIG } from '@/constants/site';
import '@/styles/globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// ============================================================
// Root Metadata — applied to all pages unless overridden
// ============================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'AC service Chennai',
    'air conditioner repair Chennai',
    'AC installation Chennai',
    'split AC service Chennai',
    'AC maintenance Chennai',
    'AC gas filling Chennai',
    'AC deep cleaning Chennai',
    'annual maintenance contract AC Chennai',
    'emergency AC repair Chennai',
    'commercial AC service Chennai',
    'ChillFix Air Solution',
    'AC technician Chennai',
  ].join(', '),
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/og/default-og.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — AC Installation, Repair & Maintenance in Chennai`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ['/images/og/default-og.jpg'],
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icons/safari-pinned-tab.svg', color: '#0F4C81' },
    ],
  },
  manifest: '/manifest.json',
  category: 'business',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0F4C81' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1e' },
  ],
};

// ============================================================
// Root Layout
// ============================================================

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, poppins.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
