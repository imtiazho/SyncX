import React, { useState } from 'react';
import { Award, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-400 via-violet-500 to-amber-500 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#010124] rounded-[14px] flex items-center justify-center">
                <Award className="text-cyan-400 w-5 h-5" />
              </div>
            </div>
            <div>
              <span class="text-xl font-bold tracking-tight text-white">RPL<span class="text-cyan-400">PORTAL</span></span>
              <span class="block text-[10px] uppercase tracking-widest text-slate-400 font-medium">Australia Skills Recognition</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#how-rpl-works" className="hover:text-cyan-400 transition-colors">How RPL Works</a>
            <a href="#qualifications" className="hover:text-cyan-400 transition-colors">Qualifications</a>
            <a href="#evidence-checklist" className="hover:text-cyan-400 transition-colors">Evidence Checklist</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a href="#eligibility-quiz" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
              <span>Free Eligibility Check</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="lg:hidden text-slate-300 hover:text-white focus:outline-none"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[999] bg-[#010124]/95 backdrop-blur-xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between p-8 ${
          mobileDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-400/20 flex items-center justify-center text-cyan-400">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-white">RPL<span className="text-cyan-400">PORTAL</span></span>
          </div>
          <button onClick={() => setMobileDrawerOpen(false)} className="text-slate-400 hover:text-white">
            <X className="w-7 h-7" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 text-lg font-medium text-slate-200 my-auto">
          <a href="#home" onClick={() => setMobileDrawerOpen(false)} className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#how-rpl-works" onClick={() => setMobileDrawerOpen(false)} className="hover:text-cyan-400 transition-colors">How RPL Works</a>
          <a href="#qualifications" onClick={() => setMobileDrawerOpen(false)} className="hover:text-cyan-400 transition-colors">Qualifications</a>
          <a href="#evidence-checklist" onClick={() => setMobileDrawerOpen(false)} className="hover:text-cyan-400 transition-colors">Evidence Checklist</a>
          <a href="#pricing" onClick={() => setMobileDrawerOpen(false)} className="hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="#contact" onClick={() => setMobileDrawerOpen(false)} className="hover:text-cyan-400 transition-colors">Contact Us</a>
        </nav>

        <div className="pt-6 border-t border-white/10">
          <a
            href="#eligibility-quiz"
            onClick={() => setMobileDrawerOpen(false)}
            className="btn-primary w-full py-4 rounded-xl text-center font-semibold block"
          >
            Free Eligibility Check
          </a>
        </div>
      </div>
    </>
  );
}
