// ============================================================
// AMC Plan Types
// ============================================================

export type AMCColor = 'blue' | 'primary' | 'gold' | 'slate';
export type BillingCycle = 'monthly' | 'annual';

export interface AMCFeature {
  label: string;
  value: string | false;
  included: boolean;
}

export interface AMCPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  pricePerUnit: boolean;
  billingCycle: BillingCycle;
  description: string;
  color: AMCColor;
  popular: boolean;
  features: AMCFeature[];
  cta: string;
  highlights: string[];
}
