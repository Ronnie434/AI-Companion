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

function App() {
  return (
    <ThemeProvider>
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
      </div>
    </ThemeProvider>
  );
}

export default App;