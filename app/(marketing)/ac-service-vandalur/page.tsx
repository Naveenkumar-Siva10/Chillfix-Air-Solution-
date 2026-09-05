import AreaDetailPage from '../areas/[slug]/page';

export { generateMetadata } from '../areas/[slug]/page';

export default async function Page() {
  return <AreaDetailPage params={Promise.resolve({ slug: 'ac-service-vandalur' })} />;
}
