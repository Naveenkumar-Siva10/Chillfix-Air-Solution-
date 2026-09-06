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

// ============================================================
// Document-level progress bar — fires on every full page load
// (Ctrl+R, Ctrl+Shift+R, direct URL, new tab).
// Uses the same gradient as TopNavigationProgress so both bars
// look visually identical. The document bar hides on window.load;
// TopNavigationProgress only starts after first React render,
// so they NEVER overlap or conflict.
// ============================================================

const DOC_PROGRESS_CSS = `
#doc-progress{
  position:fixed;top:0;left:0;width:0;height:2.5px;
  background:linear-gradient(90deg,#0F4C81,#38bdf8,#00C853);
  z-index:99999;pointer-events:none;
  transition:width .25s ease,opacity .25s ease;
  will-change:width,opacity;
}
@media(prefers-reduced-motion:reduce){
  #doc-progress{transition:opacity .25s ease;}
}
`.trim();

// Immediately-invoked vanilla JS — no React, no hydration.
// Progressively advances through document.readyState checkpoints
// and completes on window load. Failsafe removes bar after 10 s.
const DOC_PROGRESS_JS = `
(function(){
  var el=document.getElementById('doc-progress');
  if(!el)return;
  var done=false;
  function go(w){if(done)return;el.style.width=w+'%';}
  function finish(){
    if(done)return;done=true;
    el.style.width='100%';
    setTimeout(function(){el.style.opacity='0';
      setTimeout(function(){el.style.display='none';},260);
    },140);
  }
  go(15);
  document.addEventListener('readystatechange',function(){
    if(done)return;
    if(document.readyState==='interactive')go(65);
    if(document.readyState==='complete')finish();
  });
  document.addEventListener('DOMContentLoaded',function(){
    if(!done&&parseFloat(el.style.width||'0')<65)go(65);
  });
  window.addEventListener('load',finish);
  setTimeout(finish,10000);
})();
`.trim();

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, poppins.variable, 'font-sans')}
      suppressHydrationWarning
    >
      {/* Inject document-progress CSS + JS before any render */}
      <head>
        <style dangerouslySetInnerHTML={{ __html: DOC_PROGRESS_CSS }} />
        <script dangerouslySetInnerHTML={{ __html: DOC_PROGRESS_JS }} />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50">
        {/* Static bar element — present in SSR HTML, animated by the inline script above */}
        <div id="doc-progress" aria-hidden="true" role="presentation" />
        {children}
      </body>
    </html>
  );
}
