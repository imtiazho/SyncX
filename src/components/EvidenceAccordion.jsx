import React, { useState } from 'react';
import { ShieldAlert, CreditCard, FileSpreadsheet, Camera, UserCheck, ChevronDown } from 'lucide-react';

const ACCORDION_ITEMS = [
  {
    id: 1,
    icon: CreditCard,
    color: 'cyan',
    title: '1. Identification & Current Resume',
    intro: 'Standard personal verification and career overview documents:',
    list: [
      'Government Photo ID (Passport or Australian Driver License).',
      'Updated CV / Resume highlighting work duties and employer dates.',
      'USI (Unique Student Identifier) number (We can assist if you don\'t have one).',
    ],
  },
  {
    id: 2,
    icon: FileSpreadsheet,
    color: 'amber',
    title: '2. Employment Verification & Payslips',
    intro: 'Official proof of active employment duration:',
    list: [
      '3 to 6 recent payslips showing job title and employer name.',
      'Employer Verification Letter outlining specific responsibilities.',
      'Group Certificates, Payment Summaries, or Subcontractor Invoices (if self-employed).',
    ],
  },
  {
    id: 3,
    icon: Camera,
    color: 'violet',
    title: '3. Work Samples, Photos & Video Proof',
    intro: 'Visual evidence showcasing your practical skill performance:',
    list: [
      'Job site photos or videos performing trade duties.',
      'Work logs, safety site sign-in sheets, or job orders.',
      'Project plans, code snippets, or administrative reports.',
    ],
  },
  {
    id: 4,
    icon: UserCheck,
    color: 'emerald',
    title: '4. Supervisor References & Peer Testimonials',
    intro: 'Independent validation from licensed managers or clients:',
    list: [
      'Third-party report signed by a licensed supervisor or manager.',
      'Client reference letters detailing project scope and quality.',
    ],
  },
];

export default function EvidenceAccordion() {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <section id="evidence-checklist" className="py-24 bg-navy-900/40 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-violet-400/10 border border-violet-400/20">
              Evidence Guidelines
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              What Evidence Do You Need for <span className="gradient-text-cyan-violet">RPL Approval?</span>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              RPL relies on authentic workplace proof showing you have already performed the duties required by national qualification standards. Our team formats your evidence to ensure smooth RTO approval.
            </p>

            <div className="glass-card p-6 rounded-3xl border border-violet-500/30 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">RTO Evidence Standard Rule</h4>
                  <p className="text-xs text-slate-400">Sufficiency, Authenticity & Currency</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                Evidence must generally be from the last 3 to 5 years. Don't worry if your documents are incomplete—our assessors guide you on alternative workplace proof.
              </p>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {ACCORDION_ITEMS.map((item) => {
              const IconComp = item.icon;
              const isActive = activeItem === item.id;
              return (
                <div
                  key={item.id}
                  className={`accordion-item glass-card rounded-2xl border border-white/10 ${isActive ? 'active' : ''}`}
                >
                  <button
                    onClick={() => setActiveItem(isActive ? null : item.id)}
                    className="accordion-header w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-${item.color}-400/10 text-${item.color}-400 flex items-center justify-center text-lg`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                    </div>
                    <ChevronDown className={`accordion-icon w-5 h-5 text-slate-400 transition-transform duration-300 ${isActive ? 'rotate-180 text-cyan-400' : ''}`} />
                  </button>
                  {isActive && (
                    <div className="accordion-content px-6 pb-6 text-sm text-slate-300 border-t border-white/5 pt-4">
                      <p className="mb-3">{item.intro}</p>
                      <ul className="space-y-2 text-xs text-slate-400 list-disc list-inside">
                        {item.list.map((li, idx) => (
                          <li key={idx}>{li}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
