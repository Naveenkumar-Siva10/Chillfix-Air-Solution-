import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost, BlogFrontmatter, BlogCategory } from '@/types/blog';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * Gets all blog post slugs for static generation.
 */
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
}

/**
 * Reads and parses a single blog post by slug.
 */
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const frontmatter = data as BlogFrontmatter;
  const stats = readingTime(content);

  return {
    slug,
    title: frontmatter.title,
    excerpt: frontmatter.excerpt,
    content,
    category: frontmatter.category,
    tags: frontmatter.tags ?? [],
    author: {
      name: frontmatter.author ?? 'ChillFix Team',
      avatar: '/images/team/author-default.jpg',
      role: 'AC Service Expert',
    },
    publishedAt: frontmatter.publishedAt,
    updatedAt: frontmatter.updatedAt,
    featuredImage: frontmatter.featuredImage,
    featuredImageAlt: frontmatter.featuredImageAlt,
    readingTime: Math.ceil(stats.minutes),
    featured: frontmatter.featured ?? false,
    relatedSlugs: frontmatter.relatedSlugs ?? [],
    seo: {
      metaTitle: frontmatter.metaTitle,
      metaDescription: frontmatter.metaDescription,
    },
  };
}

/**
 * Gets all blog posts sorted by publish date (newest first).
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogPost(slug)));
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

/**
 * Gets blog posts filtered by category.
 */
export async function getBlogPostsByCategory(category: BlogCategory): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

/**
 * Gets featured blog posts.
 */
export async function getFeaturedBlogPosts(limit = 3): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.featured).slice(0, limit);
}

/**
 * Gets related posts by slug list.
 */
export async function getRelatedPosts(slugs: string[]): Promise<BlogPost[]> {
  const posts = await Promise.all(slugs.map((slug) => getBlogPost(slug)));
  return posts.filter((post): post is BlogPost => post !== null);
}

/**
 * Gets all unique blog categories used in published posts.
 */
export async function getBlogCategories(): Promise<BlogCategory[]> {
  const allPosts = await getAllBlogPosts();
  const categories = allPosts.map((post) => post.category);
  return [...new Set(categories)];
}
