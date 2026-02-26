import React from 'react';

const steps = [
  {
    number: '1',
    emoji: '👂',
    title: 'Listen',
    description: "Vocal Trace captures your child's unique vocalizations.",
    color: '#E8F8F7',
    iconBg: '#2DADA3',
  },
  {
    number: '2',
    emoji: '✨',
    title: 'Interact',
    description: 'Our Magic Jelly UI responds to every sound with delightful haptic feedback.',
    color: '#EEF2F8',
    iconBg: '#1A365D',
  },
  {
    number: '3',
    emoji: '🌱',
    title: 'Grow',
    description: 'Expert-backed pathways bridge the gap between babbling and words.',
    color: '#E8F8F7',
    iconBg: '#2DADA3',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 px-6"
      style={{ backgroundColor: '#FEF9F3' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-700 mb-4"
            style={{ backgroundColor: '#E8F8F7', color: '#2DADA3', fontWeight: 700 }}
          >
            Simple & Effective
          </span>
          <h2
            className="font-heading text-4xl lg:text-5xl"
            style={{ color: '#1A365D', fontWeight: 900 }}
          >
            How It Works
          </h2>
          <p
            className="font-body text-lg mt-4 max-w-xl mx-auto"
            style={{ color: '#1A365D', opacity: 0.65, fontWeight: 500 }}
          >
            Three simple steps to unlock your child&apos;s voice
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center text-center p-8 rounded-[32px] transition-transform duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: step.color,
                boxShadow: '0 4px 24px rgba(26, 54, 93, 0.07)',
              }}
            >
              {/* Step number badge */}
              <div
                className="absolute -top-4 left-8 w-8 h-8 rounded-full flex items-center justify-center font-heading text-sm font-900"
                style={{
                  backgroundColor: step.iconBg,
                  color: '#ffffff',
                  fontWeight: 900,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              >
                {step.number}
              </div>

              {/* Icon container */}
              <div
                className="w-20 h-20 rounded-[24px] flex items-center justify-center text-4xl mb-6 mt-2"
                style={{
                  backgroundColor: step.iconBg,
                  boxShadow: `0 8px 24px ${step.iconBg}55`,
                }}
              >
                {step.emoji}
              </div>

              {/* Content */}
              <h3
                className="font-heading text-2xl mb-3"
                style={{ color: '#1A365D', fontWeight: 800 }}
              >
                {step.title}
              </h3>
              <p
                className="font-body text-base leading-relaxed"
                style={{ color: '#1A365D', opacity: 0.7, fontWeight: 500 }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
