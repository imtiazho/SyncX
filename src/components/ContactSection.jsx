import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactSection({ onToast }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('Construction');
  const [years, setYears] = useState('3-5');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onToast) {
      onToast(`Thank you, ${name}! Your consultation booking has been received. We will contact you at ${phone}.`, 'success');
    }
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Speak to an RPL <span className="gradient-text-cyan-amber">Specialist Assessor</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Have questions about document requirements, RTO partners, or payment options? Contact our Sydney & Melbourne support team today.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 flex items-center justify-center text-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Head Office Locations</h4>
                  <p className="text-slate-400 text-xs">Level 18, 201 Elizabeth Street, Sydney NSW 2000</p>
                  <p className="text-slate-400 text-xs">Level 9, 440 Collins Street, Melbourne VIC 3000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/20 text-amber-400 flex items-center justify-center text-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Phone & Toll Free</h4>
                  <p className="text-slate-400 text-xs">1300 000 RPL (775) — Australia Toll Free</p>
                  <p className="text-slate-400 text-xs">+61 2 8000 9900 — International Hotline</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-400/20 text-violet-400 flex items-center justify-center text-xl shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base mb-1">Email & Support Hours</h4>
                  <p className="text-slate-400 text-xs">info@rplportal.com.au</p>
                  <p className="text-slate-400 text-xs">Monday – Friday: 8:30 AM – 6:00 PM AEST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 glow-border-cyan relative">
              <h3 className="text-2xl font-bold text-white mb-2">Book a Free 1-on-1 RPL Consultation</h3>
              <p className="text-slate-400 text-xs mb-6">Fill in your details below and an RPL Specialist will reach out within 2 business hours.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">First & Last Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0400 000 000"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Industry Sector</label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#010124] border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-sm"
                    >
                      <option value="Construction">Building & Construction</option>
                      <option value="Hospitality">Hospitality & Cookery</option>
                      <option value="Automotive">Automotive & Mechanical</option>
                      <option value="Healthcare">Healthcare & Community</option>
                      <option value="IT">Information Technology</option>
                      <option value="Business">Business & Leadership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Years of Experience</label>
                    <select
                      value={years}
                      onChange={(e) => setYears(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#010124] border border-white/10 text-white focus:outline-none focus:border-cyan-400 text-sm"
                    >
                      <option value="1-2">1 - 2 Years</option>
                      <option value="3-5">3 - 5 Years</option>
                      <option value="5+">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message / Questions</label>
                  <textarea
                    rows="3"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your current job role..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2">
                  <span>Request Free Call Back</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
