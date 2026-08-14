import Link from 'next/link';
import Image from 'next/image';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

const CATEGORY_COLORS: Record<string, string> = {
  tips: 'bg-secondary-100 text-secondary-700',
  maintenance: 'bg-accent-100 text-accent-700',
  guides: 'bg-purple-100 text-purple-700',
  news: 'bg-amber-100 text-amber-700',
  troubleshooting: 'bg-red-100 text-red-700',
  'energy-saving': 'bg-emerald-100 text-emerald-700',
};

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'compact';
  className?: string;
  priority?: boolean;
}

/**
 * Blog post card for the blog listing page and related posts section.
 * Supports default, featured (large hero), and compact variants.
 */
export function BlogCard({ post, variant = 'default', className, priority = false }: BlogCardProps) {
  const categoryColor = CATEGORY_COLORS[post.category] ?? 'bg-slate-100 text-slate-700';
  const categoryLabel = post.category.charAt(0).toUpperCase() + post.category.slice(1).replace('-', ' ');

  if (variant === 'compact') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          'group flex items-start gap-4 rounded-2xl p-3 transition-colors',
          'hover:bg-slate-50 dark:hover:bg-slate-800/50',
          className,
        )}
      >
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="64px"
          />
        </div>
        <div className="min-w-0">
          <p className="line-clamp-2 text-sm font-semibold text-slate-900 group-hover:text-primary-500 dark:text-white">
            {post.title}
          </p>
          <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
            <Clock className="h-3 w-3" aria-hidden="true" />
            {post.readingTime} min read
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          'group relative block overflow-hidden rounded-3xl bg-slate-900',
          'focus-visible:outline-2 focus-visible:outline-offset-2',
          className,
        )}
        aria-label={post.title}
      >
        {/* Background image */}
        <div className="relative h-80 w-full overflow-hidden md:h-[480px]">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <span className={cn('mb-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold', categoryColor)}>
            {categoryLabel}
          </span>
          <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl line-clamp-2">
            {post.title}
          </h2>
          <p className="mb-4 line-clamp-2 text-sm text-slate-300">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>{post.author.name}</span>
            <span>·</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {post.readingTime} min read
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // Default card
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft',
        'transition-all duration-300 hover:-translate-y-1 hover:shadow-card',
        'dark:border-slate-800 dark:bg-slate-900',
        'focus-visible:outline-2 focus-visible:outline-offset-2',
        className,
      )}
      aria-label={post.title}
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
        <span
          className={cn(
            'absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm',
            categoryColor,
          )}
        >
          {categoryLabel}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 line-clamp-2 text-base font-bold text-slate-900 group-hover:text-primary-500 dark:text-white">
          {post.title}
        </h3>
        <p className="mb-4 flex-1 line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
          {post.excerpt}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
              >
                <Tag className="h-2.5 w-2.5" aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" aria-hidden="true" />
              {post.readingTime} min
            </span>
          </div>
          <span className="flex items-center gap-1 font-semibold text-primary-500 transition-transform group-hover:translate-x-1">
            Read <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
