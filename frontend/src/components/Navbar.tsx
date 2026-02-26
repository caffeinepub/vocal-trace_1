import React, { useEffect, useState } from 'react';
import MagicJellyButton from './MagicJellyButton';

const VocalTraceLogo: React.FC = () => (
  <div className="flex items-center gap-2.5">
    <img
      src="/assets/generated/logo-icon.dim_80x80.png"
      alt="Vocal Trace icon"
      className="w-9 h-9 object-contain"
    />
    <span
      className="font-heading font-900 text-xl tracking-tight"
      style={{ color: '#1A365D', fontWeight: 900 }}
    >
      Vocal<span style={{ color: '#2DADA3' }}>Trace</span>
    </span>
  </div>
);

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: '#FEF9F3',
        boxShadow: scrolled ? '0 2px 20px rgba(26, 54, 93, 0.1)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="focus:outline-none">
          <VocalTraceLogo />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'How It Works', id: 'how-it-works' },
            { label: 'Features', id: 'features' },
            { label: 'Testimonials', id: 'testimonials' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body font-600 text-sm transition-colors duration-200 hover:text-brand-teal"
              style={{ color: '#1A365D', fontWeight: 600 }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <MagicJellyButton size="sm" onClick={() => scrollTo('footer-cta')}>
            Get Started
          </MagicJellyButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: '#1A365D',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: '#1A365D',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all duration-300"
            style={{
              backgroundColor: '#1A365D',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: '#FEF9F3' }}
        >
          {[
            { label: 'How It Works', id: 'how-it-works' },
            { label: 'Features', id: 'features' },
            { label: 'Testimonials', id: 'testimonials' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body font-600 text-base text-left transition-colors duration-200 hover:text-brand-teal"
              style={{ color: '#1A365D', fontWeight: 600 }}
            >
              {item.label}
            </button>
          ))}
          <MagicJellyButton size="sm" onClick={() => scrollTo('footer-cta')}>
            Get Started
          </MagicJellyButton>
        </div>
      )}
    </header>
  );
};

export default Navbar;
