import { JsonLd } from './JsonLd';
import { SITE_CONFIG } from '@/constants/site';
import type { BlogPost } from '@/types/blog';

interface ArticleSchemaProps {
  post: BlogPost;
}

/**
 * Article / BlogPosting Schema.org JSON-LD structured data.
 */
export function ArticleSchema({ post }: ArticleSchemaProps) {
  const url = `${SITE_CONFIG.url}/blog/${post.slug}`;
  const imageUrl = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `${SITE_CONFIG.url}${post.featuredImage}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}/#article`,
    isPartOf: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: post.title,
    description: post.excerpt,
    url: url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished: new Date(post.publishedAt).toISOString(),
    dateModified: new Date(post.updatedAt ?? post.publishedAt).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/icon.png`,
      },
    },
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    inLanguage: 'en-IN',
  };

  return <JsonLd schema={schema} />;
}
