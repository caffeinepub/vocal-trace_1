import React from 'react';
import MagicJellyButton from './MagicJellyButton';

const VocalTraceLogoFooter: React.FC = () => (
  <div className="flex items-center gap-2.5">
    <img
      src="/assets/generated/logo-icon.dim_80x80.png"
      alt="Vocal Trace icon"
      className="w-8 h-8 object-contain"
      style={{ filter: 'brightness(0) invert(1)' }}
    />
    <span
      className="font-heading font-900 text-lg tracking-tight text-white"
      style={{ fontWeight: 900 }}
    >
      Vocal<span style={{ color: '#2DADA3' }}>Trace</span>
    </span>
  </div>
);

const FooterCTA: React.FC = () => {
  const appId = typeof window !== 'undefined'
    ? encodeURIComponent(window.location.hostname)
    : 'vocal-trace';

  return (
    <>
      {/* Footer CTA Section */}
      <section
        id="footer-cta"
        className="py-24 px-6 relative overflow-hidden"
        style={{ backgroundColor: '#FEF9F3' }}
      >
        {/* Background decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(45,173,163,0.08) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Decorative dots */}
          <div className="flex justify-center gap-2 mb-8" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="rounded-full animate-pulse-dot"
                style={{
                  width: i === 2 ? '14px' : i === 1 || i === 3 ? '10px' : '7px',
                  height: i === 2 ? '14px' : i === 1 || i === 3 ? '10px' : '7px',
                  backgroundColor: '#2DADA3',
                  opacity: i === 2 ? 1 : 0.5,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          <h2
            className="font-heading text-4xl lg:text-5xl xl:text-6xl mb-6"
            style={{ color: '#1A365D', fontWeight: 900 }}
          >
            Ready to Hear Their{' '}
            <span style={{ color: '#2DADA3' }}>First Word?</span>
          </h2>
          <p
            className="font-body text-lg lg:text-xl mb-10 max-w-xl mx-auto"
            style={{ color: '#1A365D', opacity: 0.65, fontWeight: 500 }}
          >
            Join 50,000+ families already on the journey. Start free today — no credit card required.
          </p>

          <MagicJellyButton size="lg" className="text-xl px-10 py-5">
            🚀 Unlock Their Voice Today
          </MagicJellyButton>

          <p
            className="font-body text-sm mt-6"
            style={{ color: '#1A365D', opacity: 0.45, fontWeight: 500 }}
          >
            Available on iOS & Android · Free to start
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-10 px-6"
        style={{ backgroundColor: '#1A365D' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <VocalTraceLogoFooter />

            {/* Links */}
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Use', 'Contact'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-body text-sm transition-colors duration-200 hover:text-brand-teal"
                  style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}
                  onClick={(e) => e.preventDefault()}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p
              className="font-body text-xs text-center md:text-right"
              style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}
            >
              © {new Date().getFullYear()} VocalTrace. All rights reserved.
            </p>
          </div>

          {/* Attribution */}
          <div className="mt-6 pt-6 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>
              Built with{' '}
              <span style={{ color: '#2DADA3' }}>♥</span>
              {' '}using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-brand-teal"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
