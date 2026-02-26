import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-6"
      style={{ backgroundColor: '#FEF9F3' }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-heading font-700 mb-4"
            style={{ backgroundColor: '#E8F8F7', color: '#2DADA3', fontWeight: 700 }}
          >
            Real Stories
          </span>
          <h2
            className="font-heading text-4xl lg:text-5xl"
            style={{ color: '#1A365D', fontWeight: 900 }}
          >
            Parents Are Amazed
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className="relative rounded-[32px] p-10 lg:p-14 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1A365D 0%, #1e4a7a 60%, #2DADA3 140%)',
            boxShadow: '0 16px 48px rgba(26, 54, 93, 0.25)',
          }}
        >
          {/* Decorative background circles */}
          <div
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10 pointer-events-none"
            style={{ backgroundColor: '#2DADA3' }}
          />
          <div
            className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full opacity-10 pointer-events-none"
            style={{ backgroundColor: '#ffffff' }}
          />

          {/* Large decorative quote mark */}
          <div
            className="font-heading text-8xl lg:text-9xl leading-none mb-4 select-none"
            style={{ color: '#2DADA3', opacity: 0.6, fontWeight: 900, lineHeight: 0.8 }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          {/* Quote text */}
          <blockquote
            className="font-heading text-xl lg:text-2xl xl:text-3xl leading-relaxed mb-8 relative z-10"
            style={{ color: '#ffffff', fontWeight: 700 }}
          >
            Vocal Trace helped our daughter say her first real word in just three weeks.
            We cried happy tears!
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center gap-4 relative z-10">
            {/* Avatar placeholder */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-900 text-lg flex-shrink-0"
              style={{ backgroundColor: '#2DADA3', color: '#ffffff', fontWeight: 900 }}
            >
              S
            </div>
            <div>
              <p
                className="font-heading font-800 text-base"
                style={{ color: '#ffffff', fontWeight: 800 }}
              >
                Sarah M.
              </p>
              <p
                className="font-body text-sm"
                style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}
              >
                Mom of Lily, age 2
              </p>
            </div>

            {/* Stars */}
            <div className="ml-auto flex gap-1" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xl" style={{ color: '#FFD700' }}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Additional mini testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {[
            {
              quote: "The squish buttons are my son's favorite. He asks for it every morning!",
              name: 'James T.',
              role: 'Dad of Noah, age 3',
            },
            {
              quote: "Finally an app that's truly safe. No ads, no surprises. Just pure learning.",
              name: 'Priya K.',
              role: 'Mom of Arjun, age 2.5',
            },
          ].map((t, i) => (
            <div
              key={i}
              className="rounded-[24px] p-6"
              style={{
                backgroundColor: '#ffffff',
                boxShadow: '0 4px 20px rgba(26, 54, 93, 0.07)',
              }}
            >
              <p
                className="font-body text-sm leading-relaxed mb-4"
                style={{ color: '#1A365D', opacity: 0.75, fontWeight: 500 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-heading font-900 text-xs flex-shrink-0"
                  style={{ backgroundColor: '#E8F8F7', color: '#2DADA3', fontWeight: 900 }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p
                    className="font-heading font-700 text-sm"
                    style={{ color: '#1A365D', fontWeight: 700 }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-body text-xs"
                    style={{ color: '#1A365D', opacity: 0.5, fontWeight: 500 }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
