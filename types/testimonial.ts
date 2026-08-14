// ============================================================
// Testimonial Types
// ============================================================

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  service: string;
  date: string;
  verified: boolean;
  avatar: string;
}
