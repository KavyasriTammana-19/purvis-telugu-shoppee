import React from 'react';
import { Video, ShoppingBag, ShieldCheck, Sparkles, Plane, HeartHandshake, PhoneCall } from 'lucide-react';

export default function HeroSection({ t, setActiveTab }) {
  return (
    <section className="relative pt-6 pb-14 px-4 md:px-10 w-full max-w-[96%] mx-auto overflow-hidden">
      
      {/* Background Organic Floating Blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl -z-10 animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl -z-10 animate-float-fast"></div>
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-yellow-200/40 rounded-full blur-2xl -z-10"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/90 text-amber-900 border border-amber-300/60 shadow-sm text-xs md:text-sm font-bold animate-bounce">
            <span>{t.hero.badge}</span>
          </div>

          {/* Main Organic Typography */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-amber-950 leading-tight font-serif">
            {t.hero.titleMain} <br />
            <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 bg-clip-text text-transparent underline decoration-amber-300 decoration-wavy">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-lg text-amber-900/80 font-medium leading-relaxed max-w-2xl">
            {t.hero.subtitle}
          </p>

          {/* Action CTA Buttons (Organic Rounded Pill Design) */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('contact')}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-extrabold px-8 py-4 rounded-full shadow-2xl hover:from-amber-700 hover:to-orange-700 transform hover:-translate-y-1 transition-all duration-300 text-base"
            >
              <Video className="w-5 h-5 text-yellow-300" />
              <span>{t.hero.liveShoppingBtn}</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md text-amber-950 font-bold px-7 py-4 rounded-full border-2 border-amber-300 hover:bg-amber-100/60 transform hover:-translate-y-0.5 transition-all text-base shadow-sm"
            >
              <span>{t.hero.exploreServicesBtn}</span>
            </button>
          </div>

          {/* Key Stats Bar - Organic Oval Chips */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
            <div className="flex items-center gap-3 p-3.5 rounded-3xl bg-amber-100/70 border border-amber-200 shadow-sm">
              <div className="p-2.5 bg-amber-600 text-white rounded-full">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-amber-950">{t.hero.stats.clients}</p>
                <p className="text-[10px] text-amber-800 font-semibold">Worldwide Trust</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-3xl bg-amber-100/70 border border-amber-200 shadow-sm">
              <div className="p-2.5 bg-rose-600 text-white rounded-full">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-amber-950">{t.hero.stats.followers}</p>
                <p className="text-[10px] text-amber-800 font-semibold">Social Community</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-3xl bg-amber-100/70 border border-amber-200 shadow-sm">
              <div className="p-2.5 bg-emerald-600 text-white rounded-full">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-amber-950">{t.hero.stats.deliveries}</p>
                <p className="text-[10px] text-amber-800 font-semibold">DHL / FedEx Express</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right 3D Visual Column - Inspired by Etail 3D Animation Reference */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Main Visual Container - Arch Curved Frame */}
          <div className="relative w-full max-w-md arch-card overflow-hidden shadow-2xl border-4 border-amber-200/80 bg-gradient-to-b from-amber-50 to-orange-100 p-2">
            <img 
              src="/assets/nri_shopping.jpg" 
              alt="Live Video Personal Shopping in Vijayawada" 
              className="w-full h-[460px] object-cover rounded-[110px_110px_24px_24px] transform hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/60 via-transparent to-transparent"></div>

            {/* Bottom In-Frame Tag */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-3xl bg-white/85 backdrop-blur-md border border-white/60 shadow-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-black text-amber-950">Mounika Tammana</p>
                <p className="text-[11px] text-amber-800 font-bold">Personal Shopper @ Vijayawada</p>
              </div>
              <a 
                href="tel:9676276558" 
                className="p-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors shadow-md"
                title="Call 9676276558"
              >
                <PhoneCall className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Floating Pill 1: Live Status Badge (Top-Left) */}
          <div className="absolute -top-4 -left-4 sm:left-2 p-3.5 rounded-full bg-white/90 backdrop-blur-md shadow-2xl border border-amber-200 flex items-center gap-3 animate-float-slow">
            <div className="relative">
              <span className="w-3 h-3 bg-red-500 rounded-full block animate-ping"></span>
              <span className="w-3 h-3 bg-red-500 rounded-full block absolute top-0 left-0"></span>
            </div>
            <span className="text-xs font-black text-amber-950 pr-2">LIVE Video Shopping Active 📹</span>
          </div>

          {/* Floating Pill 2: Express Shipping (Bottom-Right) */}
          <div className="absolute -bottom-6 -right-4 sm:right-2 p-4 rounded-3xl bg-amber-900 text-white shadow-2xl border border-amber-700 flex items-center gap-3 animate-float-fast">
            <div className="p-2.5 bg-amber-500 text-amber-950 rounded-2xl">
              <Plane className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-extrabold text-amber-200">Express Delivery</p>
              <p className="text-sm font-black">Vijayawada ✈️ Global</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
