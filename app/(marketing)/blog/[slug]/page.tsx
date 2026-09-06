import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPost, getBlogSlugs, getRelatedPosts } from '@/lib/blog';
import { generatePageMetadata } from '@/lib/metadata';
import { CONTACT_DETAILS, SITE_CONFIG } from '@/constants/site';
import { formatDate } from '@/lib/utils';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { ArticleSchema } from '@/components/seo/ArticleSchema';
import { BlogCard } from '@/components/sections/blog/BlogCard';
import { Phone, MessageCircle, Clock, User, Calendar, ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return generatePageMetadata({
      title: 'Article Not Found',
      description: 'Blog article not found.',
      canonicalPath: '/blog',
    });
  }

  return generatePageMetadata({
    title: `${post.title} | ChillFix Blog`,
    description: post.excerpt,
    canonicalPath: `/blog/${post.slug}`,
    ogImage: post.featuredImage,
    keywords: post.tags,
    noIndex: true, // Temporarily no-indexed while blog is disabled from public navigation
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.relatedSlugs ?? []);

  const breadcrumbItems = [
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <ArticleSchema post={post} />

      <article className="pt-24 pb-16 bg-slate-50 dark:bg-slate-950">
        <div className="container-base space-y-8 max-w-4xl">
          {/* Breadcrumb */}
          <Breadcrumb items={breadcrumbItems} />

          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-primary-500 dark:text-slate-400"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog Articles
          </Link>

          {/* Article Header */}
          <div className="space-y-4">
            <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-700 dark:bg-primary-950 dark:text-primary-300">
              {post.category}
            </span>
            <h1 className="font-display text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl md:text-5xl leading-tight">
              {post.title}
            </h1>

            {/* Author / Date / Reading Time metadata */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400 border-y border-slate-200 dark:border-slate-800 py-3">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary-500" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary-500" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary-500" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900 shadow-md">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt || post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          {/* Article Body */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-6 text-slate-800 dark:text-slate-200 text-base leading-relaxed font-medium">
            <p className="text-lg font-semibold text-slate-900 dark:text-white leading-relaxed border-l-4 border-primary-500 pl-4">
              {post.excerpt}
            </p>
            <div className="prose dark:prose-invert max-w-none space-y-4 whitespace-pre-line">
              {post.content}
            </div>

            {/* In-Article CTA Banner */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-primary-700 to-primary-900 p-6 text-white space-y-3 shadow-lg">
              <h3 className="text-xl font-bold">Facing AC Cooling or Noise Issues in Chennai?</h3>
              <p className="text-sm text-slate-100 font-normal">
                Don&apos;t wait for your AC to break down. Our certified technicians provide fast doorstep diagnostic service across Chennai and Perungalathur.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={CONTACT_DETAILS.phone.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-primary-700 hover:bg-slate-100"
                >
                  <Phone className="h-4 w-4" />
                  Call: +91 90804 95932
                </a>
                <a
                  href={CONTACT_DETAILS.whatsapp.withMessage(`Hi ChillFix! I read your article "${post.title}" and need AC help.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#1ebe5a]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="space-y-6 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Related AC Articles</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {relatedPosts.map((rel) => (
                  <BlogCard key={rel.slug} post={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
