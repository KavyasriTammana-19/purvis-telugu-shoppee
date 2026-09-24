import React from 'react';
import { MessageCircle, Heart, MapPin, Phone } from 'lucide-react';

export default function Footer({ t, setActiveTab }) {
  return (
    <footer className="mt-20 bg-amber-950 text-amber-100 rounded-t-[60px] pt-16 pb-8 px-6 md:px-12 border-t-4 border-amber-500">
      <div className="w-full max-w-[96%] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-amber-800/80">
        
        {/* Brand Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/logo.jpg" 
              alt="Purvis Telugu Shoppee" 
              className="w-14 h-14 rounded-full ring-2 ring-amber-400 object-cover"
            />
            <div>
              <h3 className="text-xl font-black text-white font-serif">Purvis Telugu Shoppee</h3>
              <p className="text-xs text-amber-300 font-medium">Vijayawada • Global Shipping</p>
            </div>
          </div>
          <p className="text-xs md:text-sm text-amber-200/70 font-medium leading-relaxed max-w-sm">
            {t.footer.brandDesc}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a 
              href="https://www.instagram.com/purvis_telugu_shoppee?stkn=MTltangxNmR0MXZlMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-amber-900 hover:bg-rose-600 text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a 
              href="https://youtube.com/@purvistelugushoppee?si=kNQ_-fDFe_PksH-y"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-amber-900 hover:bg-red-600 text-white transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a 
              href="https://wa.me/919676276558"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-amber-900 hover:bg-emerald-600 text-white transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-sm font-black text-amber-300 uppercase tracking-wider font-serif">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs md:text-sm font-semibold text-amber-200/80">
            <li>
              <button onClick={() => setActiveTab('home')} className="hover:text-amber-400">
                {t.nav.home}
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('services')} className="hover:text-amber-400">
                {t.nav.services}
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('process')} className="hover:text-amber-400">
                {t.nav.process}
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('faqs')} className="hover:text-amber-400">
                {t.nav.faqs}
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab('contact')} className="hover:text-amber-400">
                {t.nav.contact}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-sm font-black text-amber-300 uppercase tracking-wider font-serif">
            Vijayawada Office & Orders
          </h4>
          <ul className="space-y-3 text-xs md:text-sm text-amber-200/80">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span>Vijayawada, Andhra Pradesh, India</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:9676276558" className="font-bold text-amber-200 hover:text-white">
                +91 96762 76558 (Mounika Pendela)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <a href="https://wa.me/919676276558" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-300 hover:underline">
                WhatsApp: 9676276558
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-6 text-center text-xs text-amber-300/60 font-medium">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
