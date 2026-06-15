import React, { useEffect, useState } from 'react';
import '../styles/Intro.css';

export default function Intro({ onComplete }) {
  const [phase, setPhase] = useState('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 100);
    const t2 = setTimeout(() => setPhase('exit'), 2800);
    const t3 = setTimeout(() => onComplete(), 3800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div className={`intro-screen intro-${phase}`}>
      <div className="intro-inner">
        <p className="intro-origin">Est. Karachi, Pakistan</p>
        
        <h1 className="intro-title">
          <span className="intro-word">Pakistan</span>
          <span className="intro-word italic">Textile</span>
          <span className="intro-word">Exchange</span>
        </h1>
        
        <div className="intro-line" />
        
        <p className="intro-sub">Precision · Ethics · Global Reach</p>
      </div>
      
      <span className="intro-monogram">PTX</span>
      <div className="intro-corner-line" />
    </div>
  );
}