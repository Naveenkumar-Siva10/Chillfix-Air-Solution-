// ============================================================
// FAQ Types
// ============================================================

export type FAQCategory =
  | 'pricing'
  | 'service'
  | 'maintenance'
  | 'amc'
  | 'troubleshooting'
  | 'warranty'
  | 'installation'
  | 'booking'
  | 'coverage'
  | 'payment';

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}
