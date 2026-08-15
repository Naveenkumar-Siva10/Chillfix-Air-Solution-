import type { Metadata, Viewport } from 'next';
import { inter, poppins } from '@/lib/fonts';
import { SITE_CONFIG } from '@/constants/site';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';

// ============================================================
// Root Metadata — applied to all pages unless overridden
// ============================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} — AC Installation, Repair & Service in Chennai`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    'AC service Chennai',
    'AC repair Chennai',
    'AC installation Chennai',
    'AC gas filling Chennai',
    'Split AC service Chennai',
    'Window AC service Chennai',
    'AC maintenance Chennai',
    'emergency AC repair Chennai',
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
    title: `${SITE_CONFIG.name} — AC Installation, Repair & Service in Chennai`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/images/hero-technician.jpg',
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} — AC Installation, Repair & Maintenance in Chennai`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — AC Installation, Repair & Service in Chennai`,
    description: SITE_CONFIG.description,
    images: ['/images/hero-technician.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.ts',
  category: 'business',
  verification: {
    google: 'google37f78767d361f72b',
  },
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
      className={cn(inter.variable, poppins.variable, 'font-sans')}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        {children}
      </body>
    </html>
  );
}
