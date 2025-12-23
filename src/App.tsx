import { Header, Footer } from './components/layout';
import {
  HeroSection,
  ProblemsSection,
  ValuePropSection,
  FeaturesSection,
  HowItWorksSection,
  PrivacySection,
  CTASection,
} from './components/sections';
import { ThemeProvider } from './contexts/ThemeContext';
import { WaitlistProvider } from './contexts/WaitlistContext';
import { WaitlistModal } from './components/ui/WaitlistModal';

function App() {
  return (
    <ThemeProvider>
      <WaitlistProvider>
        <div className="relative flex min-h-screen w-full flex-col bg-white dark:bg-background-dark transition-colors">
          <Header />
          <main>
            <HeroSection />
            <ProblemsSection />
            <ValuePropSection />
            <FeaturesSection />
            <HowItWorksSection />
            <PrivacySection />
            <CTASection />
          </main>
          <Footer />
          <WaitlistModal />
        </div>
      </WaitlistProvider>
    </ThemeProvider>
  );
}

export default App;