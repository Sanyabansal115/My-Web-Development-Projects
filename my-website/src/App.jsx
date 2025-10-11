import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ArtSection from './components/ArtSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import BackgroundEffects from './components/BackgroundEffects';
import './styles/globals.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-rose-50 to-green-100 text-green-900 relative overflow-hidden">
      <BackgroundEffects scrollY={scrollY} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative z-10">
        {activeSection === 'home' && <HeroSection setActiveSection={setActiveSection} />}
        {activeSection === 'projects' && <ProjectsSection />}
        {activeSection === 'art' && <ArtSection />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'contact' && <ContactSection />}
      </main>
    </div>
  );
};

export default App;