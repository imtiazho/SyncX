import React from 'react';
import { ShieldCheck } from 'lucide-react';

const STORIES = [
  {
    initials: 'DM',
    name: 'David M.',
    title: 'CPC40120 Cert IV in Building',
    location: 'Sydney, NSW • 6 Years Exp',
    color: 'cyan',
    quote: '"I worked on site as a carpenter for 6 years but couldn\'t apply for my NSW Builder\'s license without formal qualifications. RPL Portal helped convert my site logs into a Cert IV in just 3 weeks!"',
    badge: 'Builder Licensed',
    time: '2 Weeks RPL',
  },
  {
    initials: 'SK',
    name: 'Sunita K.',
    title: 'SIT40521 Cert IV Kitchen Mgmt',
    location: 'Melbourne, VIC • 4 Years Exp',
    color: 'amber',
    quote: '"As a head cook in a busy restaurant, studying full-time was impossible. Through RPL, my menu plans and payslips were audited seamlessly. Now I hold an official Australian Chef qualification!"',
    badge: 'Chef Certified',
    time: '3 Weeks RPL',
  },
  {
    initials: 'AR',
    name: 'Alex R.',
    title: 'ICT50220 Diploma of IT',
    location: 'Brisbane, QLD • 5 Years Exp',
    color: 'violet',
    quote: '"I had years of IT support & network administration experience without a degree. RPL Portal prepared my evidence for ACS skill assessment smoothly. Highly recommended service!"',
    badge: 'ACS Verified',
    time: '2.5 Weeks RPL',
  },
];

export default function SuccessStories() {
  return (
    <section className="py-24 bg-navy-900/60 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20">
            Real Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Candidates Who Turned Experience into <span className="gradient-text-cyan-violet">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Read how real professionals fast-tracked their career, builder licensing, and visa skill assessments through RPL.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORIES.map((item, idx) => (
            <div
              key={idx}
              className={`glass-card p-6 rounded-3xl border border-white/10 hover:border-${item.color}-400/40 space-y-4`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/20 text-${item.color}-400 flex items-center justify-center font-bold text-xl border border-${item.color}-400/30`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">{item.name}</h4>
                  <p className={`text-xs text-${item.color}-400 font-medium`}>{item.title}</p>
                  <p className="text-[11px] text-slate-400">{item.location}</p>
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed italic">{item.quote}</p>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> {item.badge}
                </span>
                <span>{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
