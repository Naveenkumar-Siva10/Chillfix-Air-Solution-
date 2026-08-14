// ============================================================
// Blog / MDX Types
// ============================================================

export type BlogCategory =
  | 'tips'
  | 'maintenance'
  | 'guides'
  | 'news'
  | 'troubleshooting'
  | 'energy-saving';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: BlogCategory;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;
  updatedAt?: string;
  featuredImage: string;
  featuredImageAlt: string;
  readingTime: number; // minutes
  featured: boolean;
  relatedSlugs?: string[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    canonicalUrl?: string;
  };
}

export interface BlogAuthor {
  name: string;
  avatar: string;
  role: string;
  bio?: string;
}

export interface BlogFrontmatter {
  title: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  featuredImage: string;
  featuredImageAlt: string;
  featured?: boolean;
  relatedSlugs?: string[];
  metaTitle?: string;
  metaDescription?: string;
}
