import React from 'react';
import { Star, MapPin, Quote, Sparkles } from 'lucide-react';

export default function ReviewsSection({ t }) {
  // Duplicate list to achieve seamless infinite marquee loop
  const doubleList = [...t.reviews.list, ...t.reviews.list];

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Header Pill */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-200 text-amber-950 font-extrabold text-xs tracking-wider uppercase border border-amber-300">
          {t.reviews.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-amber-950 font-serif">
          {t.reviews.title}
        </h2>
        <p className="text-amber-900/80 font-semibold text-sm md:text-base">
          {t.reviews.subtitle}
        </p>
      </div>

      {/* Right-To-Left Continuous Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left & Right Gradient Shadows for Smooth Fade Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#faf7f2] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#faf7f2] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="animate-marquee gap-6">
          {doubleList.map((item, idx) => (
            <div
              key={idx}
              className="w-80 sm:w-96 shrink-0 bg-white/90 backdrop-blur-md p-6 rounded-[36px] border border-amber-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-amber-400 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Location Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-black border border-amber-200">
                    {item.location}
                  </span>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-amber-300/40 absolute -top-2 -left-2 -z-10" />
                  <p className="text-xs md:text-sm text-amber-900/85 font-medium leading-relaxed italic mb-4">
                    "{item.review}"
                  </p>
                </div>
              </div>

              {/* Author & Service Details */}
              <div className="pt-4 border-t border-amber-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-amber-950 font-serif">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-amber-700 font-bold">
                    {item.service}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-black text-xs flex items-center justify-center shadow-md">
                  {item.name.charAt(0)}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
