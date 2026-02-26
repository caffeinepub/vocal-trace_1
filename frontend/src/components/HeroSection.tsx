import React from 'react';
import MagicJellyButton from './MagicJellyButton';

const HeroSection: React.FC = () => {
  const scrollToJourney = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
      style={{ backgroundColor: '#FEF9F3' }}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #2DADA3 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-10 left-0 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #1A365D 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6 z-10">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 self-start">
              <span
                className="px-4 py-1.5 rounded-full text-sm font-heading font-700"
                style={{
                  backgroundColor: '#E8F8F7',
                  color: '#2DADA3',
                  fontWeight: 700,
                }}
              >
                🚀 Speech Development for Toddlers
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-heading text-5xl lg:text-6xl xl:text-7xl leading-tight"
              style={{ color: '#1A365D', fontWeight: 900 }}
            >
              Watch Their First Words{' '}
              <span
                className="relative inline-block"
                style={{ color: '#2DADA3' }}
              >
                Take Flight.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 Q75 2 150 8 Q225 14 298 6"
                    stroke="#2DADA3"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className="font-body text-lg lg:text-xl leading-relaxed max-w-lg"
              style={{ color: '#1A365D', opacity: 0.75, fontWeight: 500 }}
            >
              The speech-boosting app that turns vocal traces into big milestones.
              Designed by experts, loved by little explorers.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
              <MagicJellyButton size="lg" onClick={scrollToJourney}>
                🌟 Start the Journey
              </MagicJellyButton>
              <span
                className="font-body text-sm"
                style={{ color: '#1A365D', opacity: 0.55, fontWeight: 500 }}
              >
                Free to try · No credit card needed
              </span>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 mt-4">
              {[
                { value: '50K+', label: 'Happy Families' },
                { value: '4.9★', label: 'App Rating' },
                { value: '3 Wks', label: 'Avg. First Word' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-heading text-2xl"
                    style={{ color: '#2DADA3', fontWeight: 900 }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-body text-xs"
                    style={{ color: '#1A365D', opacity: 0.6, fontWeight: 500 }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Split-screen visual */}
          <div className="relative flex justify-center items-end z-10">
            <div
              className="relative w-full max-w-lg rounded-[32px] overflow-hidden"
              style={{
                boxShadow: '0 24px 60px rgba(26, 54, 93, 0.18)',
              }}
            >
              {/* Split screen container */}
              <div className="grid grid-cols-2 h-[480px] lg:h-[560px]">
                {/* Left: Toddler */}
                <div
                  className="relative overflow-hidden"
                  style={{ backgroundColor: '#FFF5EC' }}
                >
                  <img
                    src="/assets/generated/hero-toddler.dim_600x700.png"
                    alt="Happy toddler exploring speech"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Divider line */}
                  <div
                    className="absolute top-0 right-0 w-0.5 h-full"
                    style={{ backgroundColor: 'rgba(255,255,255,0.6)' }}
                  />
                </div>

                {/* Right: App mockup */}
                <div
                  className="relative overflow-hidden flex flex-col"
                  style={{ backgroundColor: '#E8F8F7' }}
                >
                  <img
                    src="/assets/generated/hero-app-mockup.dim_600x700.png"
                    alt="Vocal Trace app with Peeking Friend character"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Floating label */}
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-xs font-heading font-700 whitespace-nowrap"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.92)',
                  color: '#1A365D',
                  fontWeight: 700,
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 16px rgba(26,54,93,0.12)',
                }}
              >
                ✨ Real-time vocal feedback
              </div>
            </div>

            {/* Floating decorative dots */}
            <div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-30 animate-float"
              style={{ backgroundColor: '#2DADA3' }}
            />
            <div
              className="absolute top-1/3 -left-6 w-10 h-10 rounded-full opacity-20 animate-float"
              style={{ backgroundColor: '#1A365D', animationDelay: '1s' }}
            />
            <div
              className="absolute -bottom-2 right-8 w-8 h-8 rounded-full opacity-25 animate-float"
              style={{ backgroundColor: '#2DADA3', animationDelay: '2s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
