// ============================================================
// Service Types
// ============================================================

export type ServiceCategory = 'residential' | 'commercial' | 'installation' | 'repair' | 'maintenance';

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
}
