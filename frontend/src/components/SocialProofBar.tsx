import React from 'react';

const badges = [
  {
    img: '/assets/generated/badge-parents-choice.dim_120x120.png',
    label: "Parent's Choice Award",
  },
  {
    img: '/assets/generated/badge-speech-pathology.dim_120x120.png',
    label: 'Speech Pathology Approved',
  },
  {
    img: '/assets/generated/badge-stem-kids.dim_120x120.png',
    label: 'STEM Kids 2026',
  },
];

const SocialProofBar: React.FC = () => {
  return (
    <section
      className="py-10 px-6"
      style={{ backgroundColor: '#FEF9F3' }}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-[32px] px-8 py-6"
          style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 24px rgba(26, 54, 93, 0.07)',
          }}
        >
          <p
            className="text-center font-body text-xs uppercase tracking-widest mb-6"
            style={{ color: '#1A365D', opacity: 0.45, fontWeight: 600 }}
          >
            Trusted & Recognized By
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0 sm:divide-x"
            style={{ '--tw-divide-opacity': '1' } as React.CSSProperties}
          >
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-3 px-8 sm:px-10"
              >
                <img
                  src={badge.img}
                  alt={badge.label}
                  className="w-14 h-14 object-contain"
                  style={{ filter: 'grayscale(100%)' }}
                />
                <span
                  className="font-body text-xs text-center font-600 max-w-[120px]"
                  style={{ color: '#1A365D', opacity: 0.55, fontWeight: 600 }}
                >
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;
