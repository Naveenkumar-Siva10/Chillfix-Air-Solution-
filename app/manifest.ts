import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/constants/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: 'ChillFix',
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0F4C81',
    orientation: 'portrait-primary',
    categories: ['business', 'utilities'],
    lang: 'en-IN',
    icons: [
      {
        src: '/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    shortcuts: [
      {
        name: 'Call Now',
        short_name: 'Call',
        description: 'Call ChillFix immediately',
        url: `tel:${SITE_CONFIG.phone}`,
        icons: [{ src: '/icons/shortcut-call.png', sizes: '96x96' }],
      },
      {
        name: 'WhatsApp',
        short_name: 'WhatsApp',
        description: 'WhatsApp ChillFix',
        url: `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}`,
        icons: [{ src: '/icons/shortcut-whatsapp.png', sizes: '96x96' }],
      },
      {
        name: 'Book Service',
        short_name: 'Book',
        description: 'Book an AC service',
        url: '/contact',
        icons: [{ src: '/icons/shortcut-book.png', sizes: '96x96' }],
      },
    ],
  };
}
