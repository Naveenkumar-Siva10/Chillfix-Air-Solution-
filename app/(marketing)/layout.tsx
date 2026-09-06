import { Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { ScrollRestoration } from '@/components/common/ScrollRestoration';
import { TopNavigationProgress } from '@/components/common/TopNavigationProgress';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Suspense fallback={null}>
        <TopNavigationProgress />
      </Suspense>

      <ScrollRestoration />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Page content */}
      <main id="main-content" className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp button — persistent on all pages */}
      <WhatsAppButton variant="floating" />
    </div>
  );
}

