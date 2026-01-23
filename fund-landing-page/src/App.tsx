import React from 'react';
import {
  Navigation,
  HeroSection,
  ProblemSection,
  SolutionSection,
  AuthoritySection,
  BenefitsSection,
  SocialProofSection,
  ProcessSection,
  ObjectionsSection,
  OfferStackSection,
  RiskReversalSection,
  CTASection,
  FAQSection,
  UrgencySection,
  Footer,
} from './components/sections';

const App: React.FC = () => {
  const scrollToCTA = () => {
    document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTAClick = () => {
    alert("Booking functionality would open here");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#11523c] selection:text-white">
      <Navigation onCTAClick={scrollToCTA} />
      <HeroSection onCTAClick={scrollToCTA} />
      <ProblemSection />
      <SolutionSection />
      <AuthoritySection />
      <BenefitsSection />
      <SocialProofSection />
      <ProcessSection />
      <ObjectionsSection />
      <OfferStackSection />
      <RiskReversalSection />
      <CTASection onCTAClick={handleCTAClick} />
      <FAQSection />
      <UrgencySection onCTAClick={scrollToCTA} />
      <Footer />
    </div>
  );
};

export default App;
