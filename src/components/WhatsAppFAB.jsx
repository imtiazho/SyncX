import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/YOUR_PHONE_NUMBER"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg border border-white/10 pointer-events-none">
        Chat with an RPL Advisor on WhatsApp
      </span>
    </a>
  );
}
