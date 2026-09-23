import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquareQuote } from 'lucide-react';

export default function FaqSection({ t, setActiveTab }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = t.faqs.list.filter(
    faq => faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
           faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      
      {/* Header Pill */}
      <div className="text-center space-y-4 mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-200 text-amber-950 font-extrabold text-xs tracking-wider uppercase border border-amber-300">
          {t.faqs.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-amber-950 font-serif">
          {t.faqs.title}
        </h2>
        <p className="text-amber-900/80 font-semibold text-sm md:text-base">
          {t.faqs.subtitle}
        </p>
      </div>

      {/* Interactive Search Bar (Organic Rounded Pill) */}
      <div className="relative max-w-xl mx-auto mb-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search any question (e.g. shipping, payment, video call)..."
          className="w-full pl-12 pr-6 py-4 rounded-full bg-white/90 backdrop-blur-md border-2 border-amber-200 text-amber-950 text-sm font-medium focus:outline-none focus:border-amber-600 shadow-lg"
        />
        <Search className="w-5 h-5 text-amber-600 absolute left-4 top-1/2 -translate-y-1/2" />
      </div>

      {/* FAQ Accordions - Smooth Curved Organic Cards */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-[32px] transition-all duration-300 border overflow-hidden ${
                isOpen 
                  ? 'bg-amber-950 text-white border-amber-700 shadow-2xl scale-[1.01]' 
                  : 'bg-white/80 backdrop-blur-md text-amber-950 border-amber-200 hover:border-amber-400 shadow-md'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-extrabold text-base md:text-lg font-serif">
                  {faq.q}
                </span>
                <div className={`p-2 rounded-full transition-transform ${
                  isOpen ? 'bg-amber-600 text-white rotate-180' : 'bg-amber-100 text-amber-900'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-xs md:text-sm leading-relaxed text-amber-100/90 border-t border-amber-800/60 pt-4 animate-fadeIn">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Need Help CTA */}
      <div className="mt-12 text-center">
        <p className="text-amber-900 text-sm font-bold mb-3">
          Have a unique question not listed here?
        </p>
        <button
          onClick={() => setActiveTab('contact')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-extrabold text-xs shadow-lg hover:bg-emerald-700 transition-all"
        >
          <MessageSquareQuote className="w-4 h-4" />
          <span>Ask Mounika Garu on WhatsApp Direct</span>
        </button>
      </div>

    </section>
  );
}
