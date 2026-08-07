import React from 'react';
import { Search, Archive, UserCheck, GraduationCap, ArrowRight, CheckCheck } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-rpl-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
            Simplified Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            How Recognition of Prior Learning <span className="gradient-text-cyan-amber">Works</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No classroom lectures, no repeating topics you master daily on the job. Convert years of hands-on workplace experience into a formal qualification in 4 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Step 1 */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-cyan-400/40 relative flex flex-col justify-between group">
            <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-cyan-500 text-navy-950 font-bold text-xs tracking-wider uppercase">
              Step 01
            </div>
            <div className="pt-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-6">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Free Skills Assessment</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We review your work history, job description, and experience to match you with the exact qualification units you satisfy.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-cyan-400 font-medium flex items-center justify-between">
              <span>Takes ~5 Mins</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-violet-400/40 relative flex flex-col justify-between group">
            <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-violet-500 text-white font-bold text-xs tracking-wider uppercase">
              Step 02
            </div>
            <div className="pt-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-400/10 border border-violet-400/30 flex items-center justify-center text-violet-400 mb-6">
                <Archive className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">Evidence Portfolio</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Upload your evidence portfolio—including payslips, employer reference letters, job photos/videos, licenses, and resume.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-violet-400 font-medium flex items-center justify-between">
              <span>Dedicated Assistance</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-amber-400/40 relative flex flex-col justify-between group">
            <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-amber-500 text-navy-950 font-bold text-xs tracking-wider uppercase">
              Step 03
            </div>
            <div className="pt-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">RTO Assessor Review</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A qualified Australian RTO assessor audits your submitted portfolio to confirm alignment with national training packages.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-amber-400 font-medium flex items-center justify-between">
              <span>48-Hour Audit</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Step 4 */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 hover:border-emerald-400/40 relative flex flex-col justify-between group">
            <div className="absolute -top-4 left-8 px-4 py-1 rounded-full bg-emerald-500 text-navy-950 font-bold text-xs tracking-wider uppercase">
              Step 04
            </div>
            <div className="pt-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Receive Qualification</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Receive your official, nationally recognized Australian Qualification (Cert III, Cert IV, or Diploma) issued by an accredited RTO.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-emerald-400 font-medium flex items-center justify-between">
              <span>Official AQF Certificate</span>
              <CheckCheck className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
