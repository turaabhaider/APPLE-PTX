import React, { useEffect, useRef } from 'react';
import '../styles/Ethics.css';
import ethicsPhoto    from '../assets/ethics wali photo.avif';
import gotsLogo       from '../assets/t-shirt.png';
import wrapLogo       from '../assets/wrap.png';

export default function Ethics() {
  const leftRef   = useRef(null);
  const rightRef  = useRef(null);
  const bannerRef = useRef(null);

  useEffect(() => {
    const targets = [
      { ref: leftRef,   threshold: 0.2 },
      { ref: rightRef,  threshold: 0.2 },
      { ref: bannerRef, threshold: 0.18 },
    ];

    const observers = targets.map(({ ref, threshold }) => {
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.disconnect();
          }
        },
        { threshold }
      );
      if (ref.current) io.observe(ref.current);
      return io;
    });

    return () => observers.forEach((io) => io.disconnect());
  }, []);

  return (
    <section id="ethics" className="ethics-section">
      <div className="section-container">

        {/* ══ TOP GRID ══ */}
        <div className="ethics-top-grid">

          {/* ── Left — text content ── */}
          <div className="ethics-left" ref={leftRef}>
            <div className="ethics-left-inner">

              <span className="ethics-tag">Objectives and Practices</span>

              <h2 className="ethics-title">
                Sustain<span className="title-it">ability.</span>
              </h2>

              <p className="ethics-body">
                Reuse, recycle, reborn — we create sustainable fabrics and solutions.
                We help partners achieve sustainability goals and protect our planet.
                We see ourselves as the extended arm, ear, and eye of our customer.
                We deliver our best efforts that all business objectives and practices
                are aligned to create a positive impact for your worldwide supply chain
                and the surrounding environment.
              </p>

              {/* Three R pillars */}
              <div className="ethics-pillars">
                <div className="ethics-pillar">
                  <span className="pillar-word">Reuse</span>
                  <span className="pillar-sub">Circular Design</span>
                </div>
                <div className="ethics-pillar">
                  <span className="pillar-word">Recycle</span>
                  <span className="pillar-sub">Closed Loop</span>
                </div>
                <div className="ethics-pillar">
                  <span className="pillar-word">Reborn</span>
                  <span className="pillar-sub">Renewed Life</span>
                </div>
              </div>

            </div>
          </div>

          {/* ── Right — certifications ── */}
          <div className="ethics-right" ref={rightRef}>

            <h4 className="certifications-title">
              Trusted Certifications That Define Our Quality &amp; Responsibility
            </h4>

            <div className="certifications-list">

              {/* GOTS */}
              <div className="cert-item">
                <div className="cert-logo-wrapper">
                  <img src={gotsLogo} alt="GOTS Certified" className="cert-logo" />
                </div>
                <div className="cert-text">
                  <h5>GOTS Certified</h5>
                  <p>Global Organic Textile Standard</p>
                </div>
                <span className="cert-arrow" aria-hidden="true">→</span>
              </div>

              {/* WRAP */}
              <div className="cert-item">
                <div className="cert-logo-wrapper">
                  <img src={wrapLogo} alt="WRAP Certified" className="cert-logo" />
                </div>
                <div className="cert-text">
                  <h5>WRAP Certified</h5>
                  <p>Worldwide Responsible Accredited Production</p>
                </div>
                <span className="cert-arrow" aria-hidden="true">→</span>
              </div>

              {/* OEKO-TEX */}
              <div className="cert-item cert-item-oeko">
                <div className="cert-logo-wrapper cert-oeko-badge">
                  <span className="oeko-text">OEKO</span>
                  <span className="oeko-dash">—</span>
                  <span className="oeko-tex">TEX®</span>
                </div>
                <div className="cert-text">
                  <h5>OEKO-TEX Standard</h5>
                  <p>Confidence in Textiles Certification</p>
                </div>
                <span className="cert-arrow" aria-hidden="true">→</span>
              </div>

            </div>
          </div>

        </div>

        {/* ══ QUOTE BANNER ══ */}
        <div
          className="quote-banner"
          ref={bannerRef}
          style={{ backgroundImage: `url(${ethicsPhoto})` }}
          role="figure"
          aria-label="Quote: You can not make good economics out of bad ethics — Ezra Pound"
        >
          {/* Overlay + scan-line texture */}
          <div className="quote-overlay" aria-hidden="true" />

          {/* Corner brackets */}
          <div className="quote-corner quote-corner--tl" aria-hidden="true" />
          <div className="quote-corner quote-corner--tr" aria-hidden="true" />
          <div className="quote-corner quote-corner--bl" aria-hidden="true" />
          <div className="quote-corner quote-corner--br" aria-hidden="true" />

          {/* Quote content */}
          <div className="quote-content">
            <span className="quote-rule-top"  aria-hidden="true" />
            <span className="quote-mark"      aria-hidden="true">"</span>

            <blockquote>
              <p className="quote-text">
                You Can Not Make{' '}
                <span className="quote-highlight">a Good Economics</span>{' '}
                Out of a Bad Ethics
              </p>
              <footer>
                <cite className="quote-cite">Ezra Pound</cite>
              </footer>
            </blockquote>

            <span className="quote-rule-bottom" aria-hidden="true" />
          </div>
        </div>

      </div>
    </section>
  );
}