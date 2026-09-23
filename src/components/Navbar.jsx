import React, { useState } from 'react';
import { Globe, PhoneCall, ShoppingBag, Menu, X, Heart, MessageCircle } from 'lucide-react';

export default function Navbar({ lang, setLang, t, activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'process', label: t.nav.process },
    { id: 'faqs', label: t.nav.faqs },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8 max-w-7xl mx-auto">
      <nav className="glass-pill px-5 py-3 rounded-full flex items-center justify-between transition-all duration-300 shadow-xl border border-amber-100/60">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <img 
              src="/assets/logo.jpg" 
              alt="Purvis Telugu Shoppee Logo" 
              className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500 shadow-md transform group-hover:scale-105 transition-transform"
            />
            <span className="absolute -bottom-1 -right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <h1 className="font-extrabold text-lg md:text-xl text-amber-950 tracking-tight flex items-center gap-1.5 font-serif">
              Purvis <span className="text-amber-700">Telugu Shoppee</span>
            </h1>
            <p className="text-xs text-amber-800 font-medium hidden sm:block">
              {t.nav.tagline}
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 bg-amber-50/80 p-1.5 rounded-full border border-amber-200/50">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-amber-600 text-white shadow-md scale-105'
                  : 'text-amber-900 hover:text-amber-700 hover:bg-amber-100/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Language Switcher & Direct WhatsApp Action */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Language Toggle Pill */}
          <button
            onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs hover:bg-amber-200 transition-colors shadow-sm border border-amber-300/50"
            title="Switch Language / భాషను మార్చండి"
          >
            <Globe className="w-4 h-4 text-amber-700 animate-spin-slow" />
            <span>{lang === 'en' ? 'తెలుగు' : 'English'}</span>
          </button>

          {/* Direct WhatsApp Call */}
          <a
            href="https://wa.me/919676276558?text=Hello%20Mounika%20Garu!%20I%20want%20to%20know%20more%20about%20your%20Personal%20Shopping%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:from-emerald-500 hover:to-teal-500 transform hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.nav.whatsappBtn}</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'te' : 'en')}
            className="px-2.5 py-1 text-xs font-bold rounded-full bg-amber-100 text-amber-950 border border-amber-300"
          >
            {lang === 'en' ? 'తె' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-amber-950 rounded-full hover:bg-amber-100/60"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 glass-pill p-4 rounded-3xl shadow-2xl flex flex-col gap-3 animate-fadeIn border border-amber-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold ${
                activeTab === item.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-amber-950 hover:bg-amber-100/60'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/919676276558"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 text-center bg-emerald-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t.nav.whatsappBtn} (+91 96762 76558)</span>
          </a>
        </div>
      )}
    </header>
  );
}
