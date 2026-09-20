import type { Metadata } from 'next';
import ServiceDetailPage from '../services/[slug]/page';
import { getServiceMetadata } from '@/lib/service-page-helper';

const SLUG = 'ac-cleaning-chennai';

export async function generateMetadata(): Promise<Metadata> {
  return getServiceMetadata(SLUG);
}

export default async function Page() {
  return <ServiceDetailPage params={Promise.resolve({ slug: SLUG })} />;
}
