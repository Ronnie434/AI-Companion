import { useState, useEffect } from 'react';
import { Header, Footer } from './components/layout';
import {
  HeroSection,
  ProblemsSection,
  ValuePropSection,
  FeaturesSection,
  HowItWorksSection,
  PrivacySection,
  CTASection,
  FirstBetaSection,
} from './components/sections';
import { ThemeProvider } from './contexts/ThemeContext';
import { WaitlistProvider } from './contexts/WaitlistContext';
import { WaitlistModal } from './components/ui/WaitlistModal';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';

type Page = 'home' | 'privacy' | 'terms';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Handle hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacy') {
        setCurrentPage('privacy');
      } else if (hash === '#terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('home');
      }
    };

    // Check initial hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const navigateToPrivacy = () => {
    window.location.hash = 'privacy';
    setCurrentPage('privacy');
    window.scrollTo(0, 0);
  };

  const navigateToTerms = () => {
    window.location.hash = 'terms';
    setCurrentPage('terms');
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider>
      <WaitlistProvider>
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-zinc-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
           {/* Global Background Gradient Mesh */}
           <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] animate-float" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
           </div>

          {currentPage === 'home' && (
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                <HeroSection />
                <ProblemsSection />
                <ValuePropSection />
                <FeaturesSection />
                <FirstBetaSection />
                <HowItWorksSection />
                <PrivacySection />
                <CTASection />
              </main>
              <Footer onNavigateToPrivacy={navigateToPrivacy} onNavigateToTerms={navigateToTerms} />
            </div>
          )}

          {currentPage === 'privacy' && (
            <div className="relative z-10">
              <PrivacyPolicy onBack={navigateToHome} />
            </div>
          )}

          {currentPage === 'terms' && (
            <div className="relative z-10">
              <TermsOfService onBack={navigateToHome} />
            </div>
          )}

          <WaitlistModal />
        </div>
      </WaitlistProvider>
    </ThemeProvider>
  );
}

export default App;