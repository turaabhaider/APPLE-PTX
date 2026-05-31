import { useEffect } from 'react';

export default function useReveal(enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-down, .reveal-fade, .reveal-scale, .reveal-scale-down, .reveal-blur'
    );
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [enabled]); // re-runs when enabled flips to true
}