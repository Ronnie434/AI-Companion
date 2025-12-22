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

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
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
  );
}

export default App;