import ServiceDetailPage from '../services/[slug]/page';

export { generateMetadata } from '../services/[slug]/page';

export default async function Page() {
  return <ServiceDetailPage params={Promise.resolve({ slug: 'ac-cleaning-chennai' })} />;
}
