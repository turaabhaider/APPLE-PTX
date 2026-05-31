import React, { useState } from 'react';
import './App.css';

import useReveal from './components/useReveal';
import Intro from './components/Intro';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Ethics from './components/Ethics';
import Fabrics from './components/Fabrics';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  useReveal(introDone);

  return (
    <>
      {!introDone && (
        <Intro onComplete={() => setIntroDone(true)} />
      )}
      <div
        className="app-container"
        style={{
          opacity: introDone ? 1 : 0,
          transition: introDone ? 'opacity 0.6s ease' : 'none',
          pointerEvents: introDone ? 'auto' : 'none',
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Ethics />
        <Fabrics />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}