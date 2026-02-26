import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialProofBar from './components/SocialProofBar';
import HowItWorksSection from './components/HowItWorksSection';
import FeatureShowcase from './components/FeatureShowcase';
import TestimonialSection from './components/TestimonialSection';
import FooterCTA from './components/FooterCTA';
import ScrollTrailMotif from './components/ScrollTrailMotif';

const App: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FEF9F3' }}>
      {/* Sticky navigation */}
      <Navbar />

      {/* Scroll-driven dot trail (desktop only) */}
      <ScrollTrailMotif />

      {/* Main content */}
      <main>
        <HeroSection />
        <SocialProofBar />
        <HowItWorksSection />
        <FeatureShowcase />
        <TestimonialSection />
        <FooterCTA />
      </main>
    </div>
  );
};

export default App;
