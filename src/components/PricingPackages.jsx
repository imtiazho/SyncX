import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function PricingPackages() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            RPL Qualification <span className="gradient-text-cyan-amber">Packages</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Guaranteed fixed pricing with zero hidden fees. Pay only after your evidence portfolio is pre-audited and approved for submission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Certificate III */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-cyan-400/40 flex flex-col justify-between group">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Trade Qualification</div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Certificate III</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Ideal for trade workers, cooks, individual support workers & entry technicians needing official certification.
              </p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-white">$1,850</span>
                <span className="text-xs text-slate-400"> / Full Qualification</span>
                <div className="text-[11px] text-cyan-400 font-medium mt-1">Flexible Payment Plans Available</div>
              </div>
              <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-6">
                {[
                  'Free Initial Pre-Assessment',
                  'Dedicated Document Specialist',
                  'RTO Portfolio Compilation',
                  'Nationally Recognized AQF Cert',
                  '2 - 3 Week Turnaround',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <a href="#eligibility-quiz" className="btn-secondary w-full py-3.5 rounded-xl text-center font-semibold text-sm block">
                Choose Certificate III
              </a>
            </div>
          </div>

          {/* Certificate IV (Popular) */}
          <div className="glass-card p-8 rounded-3xl border-2 border-amber-400 glow-border-amber relative flex flex-col justify-between group transform lg:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 badge-popular px-4 py-1 rounded-full text-xs font-bold shadow-lg">
              Most Popular Pathway
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 pt-2">Advanced Trade & Supervision</div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Certificate IV</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Designed for team leaders, site supervisors, kitchen managers & senior technical specialists.
              </p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-white">$2,450</span>
                <span className="text-xs text-slate-400"> / Full Qualification</span>
                <div className="text-[11px] text-amber-400 font-medium mt-1">Includes Fast-Track Priority Audit</div>
              </div>
              <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-6">
                {[
                  'Priority 48-Hr Evidence Audit',
                  'Builder License Pathway Support',
                  'Full RTO Document Preparation',
                  'Statement of Attainment & Transcript',
                  '100% Approval Guarantee Policy',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <a href="#eligibility-quiz" className="btn-amber w-full py-3.5 rounded-xl text-center font-bold text-sm block">
                Choose Certificate IV
              </a>
            </div>
          </div>

          {/* Diploma */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-violet-400/40 flex flex-col justify-between group">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-2">Executive & Management</div>
              <h3 className="text-2xl font-extrabold text-white mb-4">Diploma / Adv Diploma</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                For business directors, project managers, building license candidates & IT managers.
              </p>
              <div className="mb-6">
                <span className="text-3xl font-extrabold text-white">$2,950</span>
                <span className="text-xs text-slate-400"> / Full Qualification</span>
                <div className="text-[11px] text-violet-400 font-medium mt-1">Visa / Skill Assessment Suitable</div>
              </div>
              <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-6">
                {[
                  'Executive Evidence Concierge',
                  'Custom Portfolio Compilation',
                  'Senior Assessor One-on-One',
                  'AQF Level 5 / 6 Qualification',
                  'Full Express Processing',
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-violet-400" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <a href="#eligibility-quiz" class="btn-secondary w-full py-3.5 rounded-xl text-center font-semibold text-sm block">
                Choose Diploma Package
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
