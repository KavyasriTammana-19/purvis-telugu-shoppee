import React, { useState } from 'react';
import { Send, PhoneCall, MessageCircle, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ContactPage({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    service: t.contact.form.serviceOptions[0],
    date: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Direct WhatsApp message formatting addressed to 9676276558
    const waText = 
      `*NEW INQUIRY - PURVIS TELUGU SHOPPEE*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *WhatsApp:* ${formData.phone}\n` +
      `📍 *Location:* ${formData.location}\n` +
      `🛍️ *Service Needed:* ${formData.service}\n` +
      `📅 *Occasion Date:* ${formData.date || 'Not specified'}\n` +
      `📝 *Details & Items:* ${formData.details}\n\n` +
      `-----------------------------------\n` +
      `Sent via Purvis Telugu Shoppee Official Website`;

    const waUrl = `https://wa.me/919676276558?text=${encodeURIComponent(waText)}`;
    
    setSubmitted(true);

    // Open WhatsApp in new tab / app
    window.open(waUrl, '_blank');
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      
      {/* Header Pill */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-900 font-extrabold text-xs tracking-wider uppercase border border-emerald-300">
          {t.contact.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-amber-950 font-serif">
          {t.contact.title}
        </h2>
        <p className="text-amber-900/80 font-semibold text-sm md:text-base">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Interactive Form - Organic Rounded Container */}
        <div className="lg:col-span-7 bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-[48px] border-2 border-amber-200 shadow-2xl relative">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-black text-amber-950 uppercase tracking-wider mb-2">
                {t.contact.form.nameLabel}
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={t.contact.form.namePlaceholder}
                className="w-full px-5 py-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 text-amber-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            {/* Phone & Location Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black text-amber-950 uppercase tracking-wider mb-2">
                  {t.contact.form.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={t.contact.form.phonePlaceholder}
                  className="w-full px-5 py-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 text-amber-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-amber-950 uppercase tracking-wider mb-2">
                  {t.contact.form.locationLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder={t.contact.form.locationPlaceholder}
                  className="w-full px-5 py-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 text-amber-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
            </div>

            {/* Service Category & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black text-amber-950 uppercase tracking-wider mb-2">
                  {t.contact.form.serviceLabel}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 text-amber-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-600"
                >
                  {t.contact.form.serviceOptions.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-amber-950 uppercase tracking-wider mb-2">
                  {t.contact.form.dateLabel}
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 text-amber-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
            </div>

            {/* Shopping Details */}
            <div>
              <label className="block text-xs font-black text-amber-950 uppercase tracking-wider mb-2">
                {t.contact.form.detailsLabel}
              </label>
              <textarea
                rows="4"
                required
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder={t.contact.form.detailsPlaceholder}
                className="w-full px-5 py-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 text-amber-950 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-600"
              ></textarea>
            </div>

            {/* Submit Button - Pre-formats & Opens WhatsApp */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white font-black text-sm md:text-base shadow-xl hover:from-emerald-700 hover:to-teal-700 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6 animate-pulse" />
              <span>{t.contact.form.submitBtn}</span>
            </button>

            {submitted && (
              <div className="p-4 rounded-2xl bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Redirecting to WhatsApp with pre-filled details...</span>
              </div>
            )}

          </form>

        </div>

        {/* Right Info Column - Mounika's Profile & Social Media Links */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Owner Profile Card */}
          <div className="bg-gradient-to-br from-amber-900 via-amber-950 to-orange-950 text-white p-8 rounded-[48px] shadow-2xl border border-amber-700 space-y-6">
            
            <div className="flex items-center gap-4">
              <img 
                src="/assets/mounika_blue_saree.jpg" 
                alt="Mounika Pendela - Purvis Telugu Shoppee"
                className="w-20 h-20 rounded-full object-cover ring-4 ring-amber-400 shadow-xl" 
              />
              <div>
                <h3 className="text-2xl font-black text-amber-200 font-serif">Mounika Pendela</h3>
                <p className="text-xs text-amber-100/80 font-bold uppercase tracking-wider">
                  Founder & Head Personal Shopper
                </p>
                <p className="text-xs text-amber-300 font-medium mt-1">
                  📍 Vijayawada, Andhra Pradesh, India
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-amber-800">
              
              <a 
                href="https://wa.me/919676276558"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-3xl bg-amber-900/80 hover:bg-amber-800 transition-colors border border-amber-700/60"
              >
                <div className="p-3 bg-emerald-600 text-white rounded-full">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-amber-300 font-bold">WhatsApp Direct</p>
                  <p className="text-lg font-black text-white">+91 96762 76558</p>
                </div>
              </a>

              <a 
                href="tel:9676276558"
                className="flex items-center gap-4 p-4 rounded-3xl bg-amber-900/80 hover:bg-amber-800 transition-colors border border-amber-700/60"
              >
                <div className="p-3 bg-amber-600 text-white rounded-full">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-amber-300 font-bold">Call Anywhere in India</p>
                  <p className="text-lg font-black text-white">96762 76558</p>
                </div>
              </a>

            </div>

            {/* Social Media Links explicitly requested */}
            <div className="pt-4 border-t border-amber-800">
              <p className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-3">
                {t.contact.socialHeader}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                
                {/* Instagram Link */}
                <a 
                  href="https://www.instagram.com/purvis_telugu_shoppee?stkn=MTltangxNmR0MXZlMQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs hover:opacity-90 transition-opacity"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span>Instagram</span>
                </a>

                {/* YouTube Link */}
                <a 
                  href="https://youtube.com/@purvistelugushoppee?si=kNQ_-fDFe_PksH-y"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-2xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span>YouTube</span>
                </a>

              </div>
            </div>

          </div>

          {/* Quick Note Badge */}
          <div className="p-6 rounded-[36px] bg-amber-100/80 border border-amber-200 text-amber-950 space-y-2">
            <h4 className="font-extrabold text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Personalised Service Guarantee</span>
            </h4>
            <p className="text-xs text-amber-900/80 font-medium">
              We respond to all WhatsApp inquiries within a few minutes. For live video shopping, we coordinate time zones to match USA, UK, Gulf, or Australia times!
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
