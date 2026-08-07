import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import HowItWorks from './components/HowItWorks';
import QualificationsGrid from './components/QualificationsGrid';
import EligibilityWizard from './components/EligibilityWizard';
import EvidenceAccordion from './components/EvidenceAccordion';
import PricingPackages from './components/PricingPackages';
import SuccessStories from './components/SuccessStories';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';
import { CheckCircle, Info } from 'lucide-react';

export default function App() {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  return (
    <div className="bg-[#010124] text-slate-200 min-h-screen antialiased selection:bg-cyan-500 selection:text-slate-950">
      {/* Toast Notifications */}
      <div className="fixed top-24 right-5 z-[99999] flex flex-col gap-3">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`glass-card border-l-4 ${
              t.type === 'success' ? 'border-emerald-400 text-emerald-200' : 'border-cyan-400 text-cyan-200'
            } p-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-md animate-fade-in`}
          >
            <div className={`p-2 rounded-full ${t.type === 'success' ? 'bg-emerald-500/20' : 'bg-cyan-500/20'}`}>
              {t.type === 'success' ? <CheckCircle className="w-5 h-5 text-emerald-400" /> : <Info className="w-5 h-5 text-cyan-400" />}
            </div>
            <div className="text-sm font-medium leading-snug">{t.message}</div>
          </div>
        ))}
      </div>

      <Navbar />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <QualificationsGrid />
      <EligibilityWizard onToast={addToast} />
      <EvidenceAccordion />
      <PricingPackages />
      <SuccessStories />
      <ContactSection onToast={addToast} />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
