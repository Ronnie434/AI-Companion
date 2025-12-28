import { Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <ThemeProvider>
      <WaitlistProvider>
        <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-zinc-900 dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
           {/* Global Background Gradient Mesh */}
           <div className="fixed inset-0 z-0 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] animate-float" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
           </div>

          <Routes>
            <Route path="/" element={
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
                <Footer />
              </div>
            } />
            <Route path="/privacy" element={
              <div className="relative z-10">
                <PrivacyPolicy />
              </div>
            } />
            <Route path="/terms" element={
              <div className="relative z-10">
                <TermsOfService />
              </div>
            } />
          </Routes>

          <WaitlistModal />
        </div>
      </WaitlistProvider>
    </ThemeProvider>
  );
}

export default App;