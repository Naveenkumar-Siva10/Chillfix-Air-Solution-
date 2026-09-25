import { z } from 'zod';

// ============================================================
// Contact Form Schema
// ============================================================

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .regex(/^[a-zA-Z\s.'-]+$/, 'Name can only contain letters, spaces, and basic punctuation'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(255, 'Email is too long')
    .optional()
    .or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long (max 1000 characters)'),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;

// ============================================================
// Booking Form Schema
// ============================================================

export const bookingFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  acBrand: z.string().min(1, 'Please select your AC brand'),
  acType: z.string().min(1, 'Please select AC type'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  address: z
    .string()
    .min(10, 'Please enter a valid address')
    .max(500, 'Address is too long'),
  notes: z.string().max(500, 'Notes are too long').optional(),
});

export type BookingFormSchema = z.infer<typeof bookingFormSchema>;

// ============================================================
// Newsletter Schema
// ============================================================

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type NewsletterSchema = z.infer<typeof newsletterSchema>;

// ============================================================
// Service Options (for form selects)
// ============================================================

export const SERVICE_OPTIONS = [
  { value: 'split-ac-service', label: 'Split AC Service' },
  { value: 'window-ac-service', label: 'Window AC Service' },
  { value: 'cassette-ac-service', label: 'Cassette AC Service' },
  { value: 'tower-ac-service', label: 'Tower AC Service' },
  { value: 'commercial-ac-service', label: 'Commercial AC Service' },
  { value: 'ac-installation', label: 'AC Installation' },
  { value: 'ac-uninstallation', label: 'AC Uninstallation' },
  { value: 'gas-filling', label: 'Gas Filling (Refrigerant)' },
  { value: 'cooling-repair', label: 'Cooling Problem Repair' },
  { value: 'water-leakage-repair', label: 'Water Leakage Repair' },
  { value: 'pcb-repair', label: 'PCB Board Repair' },
  { value: 'compressor-repair', label: 'Compressor Repair/Replacement' },
  { value: 'deep-cleaning', label: 'AC Deep Cleaning' },
  { value: 'amc', label: 'Annual Maintenance Contract (AMC)' },
  { value: 'other', label: 'Other' },
] as const;

export const AC_BRAND_OPTIONS = [
  { value: 'samsung', label: 'Samsung' },
  { value: 'lg', label: 'LG' },
  { value: 'daikin', label: 'Daikin' },
  { value: 'voltas', label: 'Voltas' },
  { value: 'hitachi', label: 'Hitachi' },
  { value: 'carrier', label: 'Carrier' },
  { value: 'blue-star', label: 'Blue Star' },
  { value: 'whirlpool', label: 'Whirlpool' },
  { value: 'panasonic', label: 'Panasonic' },
  { value: 'ogeneral', label: "O'General" },
  { value: 'godrej', label: 'Godrej' },
  { value: 'mitsubishi', label: 'Mitsubishi' },
  { value: 'other', label: 'Other' },
] as const;

export const AC_TYPE_OPTIONS = [
  { value: 'split', label: 'Split AC' },
  { value: 'window', label: 'Window AC' },
  { value: 'cassette', label: 'Cassette AC' },
  { value: 'tower', label: 'Tower / Floor Standing AC' },
  { value: 'portable', label: 'Portable AC' },
  { value: 'central', label: 'Central AC' },
] as const;

export const PREFERRED_TIME_OPTIONS = [
  { value: '09:00-11:00', label: '9:00 AM – 11:00 AM' },
  { value: '11:00-13:00', label: '11:00 AM – 1:00 PM' },
  { value: '13:00-15:00', label: '1:00 PM – 3:00 PM' },
  { value: '15:00-17:00', label: '3:00 PM – 5:00 PM' },
  { value: '17:00-19:00', label: '5:00 PM – 7:00 PM' },
  { value: '19:00-21:00', label: '7:00 PM – 9:00 PM' },
  { value: '21:00-23:00', label: '9:00 PM – 11:00 PM' },
] as const;
