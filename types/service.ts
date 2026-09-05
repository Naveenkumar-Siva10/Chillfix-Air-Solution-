// ============================================================
// Service Types
// ============================================================

export type ServiceCategory = 'residential' | 'commercial' | 'installation' | 'repair' | 'maintenance';

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  category: ServiceCategory;
  features: string[];
  startingPrice: number;
  duration: string;
  warranty: string;
  popular: boolean;
  metaTitle?: string;
  metaDescription?: string;
  symptoms?: string[];
  process?: ServiceProcessStep[];
  brandsSupported?: string[];
  faqs?: ServiceFAQ[];
}
