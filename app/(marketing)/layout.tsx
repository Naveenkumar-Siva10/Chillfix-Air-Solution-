import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Page content — pt-16 reserves space for fixed navbar on non-hero pages */}
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

