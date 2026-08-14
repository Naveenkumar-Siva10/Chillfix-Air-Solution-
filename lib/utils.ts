import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS class names with conflict resolution.
 * Used by both custom components and shadcn/ui components.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a price in Indian Rupees.
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Formats a date string to a human-readable format.
 */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(dateString));
}

/**
 * Formats a date for datetime attributes (ISO 8601).
 */
export function formatDateISO(dateString: string): string {
  return new Date(dateString).toISOString();
}

/**
 * Truncates text to a given character limit with ellipsis.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Creates a WhatsApp message URL with pre-filled text.
 */
export function createWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a tel: link href.
 */
export function createPhoneUrl(phone: string): string {
  return `tel:${phone}`;
}

/**
 * Slugifies a string (for URL generation).
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Calculates reading time in minutes from a text string.
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Generates absolute URL from a path.
 */
export function absoluteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chillfixairsolution.in';
  return `${baseUrl}${path}`;
}

/**
 * Checks if we're running on the client side.
 */
export const isClient = typeof window !== 'undefined';

/**
 * Debounce utility for performance-sensitive handlers.
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
