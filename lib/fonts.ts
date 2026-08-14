import { Inter, Poppins } from 'next/font/google';

/**
 * Primary font — Inter for body text and UI elements
 * Optimized via next/font with subsetting and display swap
 */
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  preload: true,
});

/**
 * Display font — Poppins for headings
 */
export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
});
