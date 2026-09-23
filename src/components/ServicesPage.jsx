import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, Heart, Gift, Shirt, Utensils, Crown, Sparkle } from 'lucide-react';

export default function ServicesPage({ t, setActiveTab }) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <section id="services" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-900 font-extrabold text-xs tracking-wider uppercase border border-rose-300">
          {t.services.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-amber-950 font-serif">
          {t.services.title}
        </h2>
        <p className="text-amber-900/80 font-semibold text-sm md:text-base">
          {t.services.subtitle}
        </p>
      </div>

      {/* Organic Non-Box Category Cards (Arch & Blob frames) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.services.categories.map((cat, idx) => (
          <div 
            key={cat.id}
            className="group relative bg-white/80 backdrop-blur-md rounded-[44px] overflow-hidden border border-amber-200/80 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col"
          >
            {/* Top Image Container with Arch Shape Frame */}
            <div className="relative h-64 overflow-hidden rounded-[36px_36px_0px_0px] p-3">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover rounded-[30px] transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-6 right-6 bg-amber-950/80 backdrop-blur-md text-amber-200 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-700/50">
                {cat.tag}
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-black text-amber-950 font-serif mb-2 group-hover:text-amber-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs md:text-sm text-amber-900/75 leading-relaxed font-medium">
                  {cat.desc}
                </p>
              </div>

              {/* Action Link to Contact Form with pre-selected category */}
              <button
                onClick={() => setActiveTab('contact')}
                className="w-full flex items-center justify-between px-5 py-3 rounded-full bg-amber-100/70 hover:bg-amber-600 text-amber-950 hover:text-white font-extrabold text-xs transition-all duration-300"
              >
                <span>Inquire About {cat.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Special Guarantee Highlights - Custom Curved Cards */}
      <div className="mt-16 p-8 md:p-12 rounded-[56px] bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200 border-2 border-amber-300 shadow-2xl">
        <h3 className="text-2xl md:text-3xl font-black text-amber-950 text-center font-serif mb-8">
          {t.promises.title}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.promises.items.map((item, idx) => (
            <div key={idx} className="bg-white/80 p-6 rounded-3xl border border-amber-200/80 shadow-md">
              <div className="w-10 h-10 mb-4 bg-amber-600 text-white rounded-full flex items-center justify-center font-black">
                ✓
              </div>
              <h4 className="text-base font-extrabold text-amber-950 mb-1 font-serif">
                {item.title}
              </h4>
              <p className="text-xs text-amber-900/70 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
