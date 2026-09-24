import React from 'react';
import { PhoneCall, ShoppingCart, PackageCheck, Send, ChevronRight } from 'lucide-react';

export default function HowItWorks({ t, setActiveTab }) {
  const icons = [
    <PhoneCall className="w-7 h-7 text-amber-600" />,
    <ShoppingCart className="w-7 h-7 text-amber-600" />,
    <PackageCheck className="w-7 h-7 text-amber-600" />,
    <Send className="w-7 h-7 text-amber-600" />
  ];

  return (
    <section id="process" className="py-16 px-4 md:px-10 w-full max-w-[96%] mx-auto">
      
      {/* Header Pill */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-200/80 text-amber-950 font-extrabold text-xs tracking-wider uppercase border border-amber-300">
          {t.howItWorks.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-amber-950 font-serif">
          {t.howItWorks.title}
        </h2>
        <p className="text-amber-900/80 font-semibold text-sm md:text-base">
          {t.howItWorks.subtitle}
        </p>
      </div>

      {/* Process Flow - Organic Connected Pills (Inspired by Shop & Ship / ShopShipIndia) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        
        {t.howItWorks.steps.map((step, idx) => (
          <div 
            key={idx}
            className="group relative bg-white/70 backdrop-blur-md p-6 rounded-[36px] border border-amber-200 shadow-xl hover:shadow-2xl hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
          >
            {/* Step Badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-black text-amber-300 font-mono group-hover:text-amber-600 transition-colors">
                  {step.step}
                </span>
                <div className="p-3 bg-amber-100 rounded-full border border-amber-200 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  {React.cloneElement(icons[idx], {
                    className: "w-6 h-6 transition-colors group-hover:text-white"
                  })}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-amber-950 mb-2 font-serif">
                {step.title}
              </h3>

              <p className="text-xs md:text-sm text-amber-900/75 leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Bottom organic accent bar */}
            <div className="mt-6 pt-4 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-amber-700">
              <span>Step {idx + 1} of 4</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}

      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-12 p-8 rounded-[48px] bg-gradient-to-r from-amber-900 via-amber-950 to-orange-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-700">
        <div>
          <h4 className="text-2xl font-black text-amber-200 font-serif mb-1">
            Ready to shop in Vijayawada from anywhere?
          </h4>
          <p className="text-sm text-amber-100/80 font-medium">
            No minimum order limit. We handle small parcels to big wedding hampers!
          </p>
        </div>

        <button
          onClick={() => setActiveTab('contact')}
          className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-amber-950 font-black rounded-full shadow-lg transform hover:scale-105 transition-all text-sm whitespace-nowrap"
        >
          Book Your Shopping Slot Now 📲
        </button>
      </div>

    </section>
  );
}
