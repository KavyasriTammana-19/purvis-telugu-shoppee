import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesPage from './components/ServicesPage';
import HowItWorks from './components/HowItWorks';
import FaqSection from './components/FaqSection';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import { translations } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('en');
  const [activeTab, setActiveTab] = useState('home');

  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-amber-950 font-sans selection:bg-amber-500 selection:text-white">
      
      {/* Sticky Organic Header */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      {/* Main Content Area rendering based on Active Tab */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HeroSection t={t} setActiveTab={setActiveTab} />
            <HowItWorks t={t} setActiveTab={setActiveTab} />
            <ServicesPage t={t} setActiveTab={setActiveTab} />
            <FaqSection t={t} setActiveTab={setActiveTab} />
            <ContactPage t={t} />
          </>
        )}

        {activeTab === 'services' && (
          <ServicesPage t={t} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'process' && (
          <HowItWorks t={t} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'faqs' && (
          <FaqSection t={t} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'contact' && (
          <ContactPage t={t} />
        )}
      </main>

      {/* Footer */}
      <Footer t={t} setActiveTab={setActiveTab} />

    </div>
  );
}
