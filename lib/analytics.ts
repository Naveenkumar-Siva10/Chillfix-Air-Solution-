/**
 * Utility for dispatching GA4 / Google Tag Manager conversion events.
 * Safe for SSR and client-side execution.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function sendAnalyticsEvent(
  eventName: string,
  params: Record<string, string | number | boolean | undefined> = {},
) {
  if (typeof window === 'undefined') return;

  // Push to dataLayer if available
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString(),
    });
  }

  // Dispatch via window.gtag if configured
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track user clicking a phone link (tel:).
 */
export function trackTelClick(placement = 'unknown', phone = '+919080495932') {
  sendAnalyticsEvent('tel_click', {
    placement,
    phone_number: phone,
    event_category: 'engagement',
    event_label: `Call from ${placement}`,
  });
}

/**
 * Track user clicking a WhatsApp link.
 */
export function trackWhatsAppClick(placement = 'unknown', targetArea?: string) {
  sendAnalyticsEvent('whatsapp_click', {
    placement,
    target_area: targetArea ?? 'general',
    event_category: 'engagement',
    event_label: `WhatsApp from ${placement}`,
  });
}

/**
 * Track contact form submission.
 */
export function trackFormSubmission(formName = 'contact_form', serviceRequested?: string) {
  sendAnalyticsEvent('form_submission', {
    form_name: formName,
    service_requested: serviceRequested ?? 'general',
    event_category: 'conversion',
    event_label: `Submitted ${formName}`,
  });
}

/**
 * Track booking confirmation / completed booking intent.
 */
export function trackBookingConfirmation(serviceName: string, location?: string) {
  sendAnalyticsEvent('booking_confirmed', {
    service_name: serviceName,
    service_location: location ?? 'Chennai',
    event_category: 'conversion',
    event_label: `Booking: ${serviceName}`,
  });
}
