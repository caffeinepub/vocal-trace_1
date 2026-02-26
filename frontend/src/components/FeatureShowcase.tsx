import React from 'react';
import MagicJellyButton from './MagicJellyButton';

const features = [
  {
    id: 'tactile',
    title: 'Tactile Feedback',
    subtitle: 'Learning through touch',
    description:
      'Magic Jelly buttons that squish when touched to teach cause-and-effect. Every press is a discovery — colorful, bouncy, and irresistibly fun for little fingers.',
    highlight: '🍬 Squish. Learn. Repeat.',
    image: '/assets/generated/feature-tactile.dim_560x420.png',
    imageAlt: 'Magic Jelly tactile buttons on tablet',
    imageLeft: true,
    bg: '#E8F8F7',
    accentColor: '#2DADA3',
  },
  {
    id: 'safe',
    title: 'Safe Exploration',
    subtitle: 'Peace of mind for parents',
    description:
      '100% Ad-free, kid-safe environment with parental gates. Your child explores freely while you stay in complete control — no surprises, no worries.',
    highlight: '🔒 Zero ads. Total safety.',
    image: '/assets/generated/feature-safe.dim_560x420.png',
    imageAlt: 'Safe parental gate shield illustration',
    imageLeft: false,
    bg: '#EEF2F8',
    accentColor: '#1A365D',
  },
];

const FeatureShowcase: React.FC = () => {
  return (
    <section
      id="features"
      className="py-20 px-6"
      style={{ backgroundColor: '#FEF9F3' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Section header */}
        <div className="text-center mb-6">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-700 mb-4"
            style={{ backgroundColor: '#E8F8F7', color: '#2DADA3', fontWeight: 700 }}
          >
            Why Parents Love It
          </span>
          <h2
            className="font-heading text-4xl lg:text-5xl"
            style={{ color: '#1A365D', fontWeight: 900 }}
          >
            Built for Little Explorers
          </h2>
        </div>

        {features.map((feature) => (
          <div
            key={feature.id}
            className="rounded-[32px] overflow-hidden"
            style={{
              backgroundColor: feature.bg,
              boxShadow: '0 4px 24px rgba(26, 54, 93, 0.08)',
            }}
          >
            <div
              className={`flex flex-col ${
                feature.imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-stretch`}
            >
              {/* Image side */}
              <div className="lg:w-1/2 relative overflow-hidden min-h-[280px] lg:min-h-[360px]">
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '280px' }}
                />
              </div>

              {/* Text side */}
              <div className="lg:w-1/2 flex flex-col justify-center p-10 lg:p-12">
                <span
                  className="font-body text-sm font-600 uppercase tracking-wider mb-3"
                  style={{ color: feature.accentColor, opacity: 0.8, fontWeight: 600 }}
                >
                  {feature.subtitle}
                </span>
                <h3
                  className="font-heading text-3xl lg:text-4xl mb-4"
                  style={{ color: '#1A365D', fontWeight: 900 }}
                >
                  {feature.title}
                </h3>
                <p
                  className="font-body text-base lg:text-lg leading-relaxed mb-6"
                  style={{ color: '#1A365D', opacity: 0.7, fontWeight: 500 }}
                >
                  {feature.description}
                </p>
                <div
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-[20px] self-start font-heading font-700 text-sm"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    color: feature.accentColor,
                    fontWeight: 700,
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  {feature.highlight}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureShowcase;
