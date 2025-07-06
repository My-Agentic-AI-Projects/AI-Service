import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import ConsultationSection from './ConsultationSection';
import Footer from './Footer';
import { serviceData } from '../data/mockData';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'business', 'government', 'coding', 'media', 'consultation'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-x-hidden">
      {/* Animated Background Stars */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '20%', left: '80%', animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '40%', left: '60%', animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '60%', left: '20%', animationDelay: '3s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '80%', left: '70%', animationDelay: '4s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '30%', left: '40%', animationDelay: '5s' }}></div>
      </div>

      <Navigation 
        activeSection={activeSection} 
        onNavigate={scrollToSection}
      />
      
      <section id="home">
        <HeroSection onNavigate={scrollToSection} />
      </section>

      <section id="business">
        <ServiceSection 
          data={serviceData.business}
          sectionId="business"
        />
      </section>

      <section id="government">
        <ServiceSection 
          data={serviceData.government}
          sectionId="government"
        />
      </section>

      <section id="coding">
        <ServiceSection 
          data={serviceData.coding}
          sectionId="coding"
        />
      </section>

      <section id="media">
        <ServiceSection 
          data={serviceData.media}
          sectionId="media"
        />
      </section>

      <section id="consultation">
        <ConsultationSection />
      </section>

      <Footer onNavigate={scrollToSection} />
    </div>
  );
};

export default HomePage;