import React, { useEffect, useRef, useState } from 'react';

const DOT_COUNT = 24;
const DOT_SPACING = 48; // px between dots

const ScrollTrailMotif: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollY / docHeight : 0;
        const count = Math.round(progress * DOT_COUNT);
        setVisibleCount(count);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 pointer-events-none"
      aria-hidden="true"
    >
      {Array.from({ length: DOT_COUNT }).map((_, i) => {
        const isVisible = i < visibleCount;
        const isActive = i === visibleCount - 1;
        return (
          <div
            key={i}
            className="rounded-full transition-all duration-500"
            style={{
              width: isActive ? '12px' : '7px',
              height: isActive ? '12px' : '7px',
              backgroundColor: '#2DADA3',
              opacity: isVisible ? (isActive ? 1 : 0.55) : 0.15,
              transform: isActive ? 'scale(1.3)' : 'scale(1)',
              boxShadow: isActive ? '0 0 8px rgba(45,173,163,0.7)' : 'none',
              transitionDelay: `${i * 20}ms`,
            }}
          />
        );
      })}
    </div>
  );
};

export default ScrollTrailMotif;
