// ============================================================
// Global Types — Barrel export
// ============================================================

export type { Service, ServiceCategory } from './service';
export type { BlogPost, BlogAuthor, BlogFrontmatter, BlogCategory } from './blog';
export type { Testimonial } from './testimonial';
export type { FAQ, FAQCategory } from './faq';
export type { AMCPlan, AMCFeature, AMCColor, BillingCycle } from './amc';

// ============================================================
// Form Types
// ============================================================

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  acBrand: string;
  acType: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  notes?: string;
}

// ============================================================
// API Types
// ============================================================

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string | Record<string, string[] | undefined>;
}

// ============================================================
// Metadata Types
// ============================================================

export interface PageSEO {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  noIndex?: boolean;
}
