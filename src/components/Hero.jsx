import React from 'react';
import GlobeCanvas from './GlobeCanvas';
import { Bolt, PlayCircle, ShieldCheck, Clock, UserCheck, ClipboardCheck, FolderOpen, Award, ChevronRight, HardHat, Utensils, Laptop } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-24 overflow-hidden">
      {/* Globe Background Canvas */}
      <GlobeCanvas />

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-glow-cyan blur-3xl pointer-events-none opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-glow-violet blur-3xl pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Recognized by Registered Training Organisations (RTOs)
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Turn Your Work Experience into an <span className="gradient-text-cyan-violet">Official Qualification</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Fast-track your Australian certification without studying what you already know. Get your skills recognized in as little as 2 to 4 weeks using your existing job experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#eligibility-quiz" className="btn-primary px-8 py-4 rounded-2xl font-bold text-base flex items-center gap-3 w-full sm:w-auto justify-center">
                <span>Start Free Skills Assessment</span>
                <Bolt className="w-5 h-5" />
              </a>
              <a href="#how-rpl-works" className="btn-secondary px-8 py-4 rounded-2xl font-medium text-base flex items-center gap-2 w-full sm:w-auto justify-center">
                <PlayCircle className="text-cyan-400 w-5 h-5" />
                <span>See How RPL Works</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-cyan-400 w-4 h-4" />
                <span>AQF Compliant Qualifications</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-amber-400 w-4 h-4" />
                <span>48-Hour Evidence Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="text-emerald-400 w-4 h-4" />
                <span>Dedicated RPL Assessor</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="glass-card p-6 rounded-3xl border-white/10 glow-border-cyan relative z-10">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center font-bold">
                    RPL
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Official RPL Assessment Status</h4>
                    <p className="text-xs text-slate-400">Australian Qualifications Framework (AQF)</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Audit
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-white font-medium text-sm">CPC50220 Diploma of Building</h5>
                    <p class="text-xs text-slate-400">Construction & Trades Sector</p>
                  </div>
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-lg">100% Eligible</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-white font-medium text-sm">SIT40521 Cert IV Cookery</h5>
                    <p className="text-xs text-slate-400">Hospitality & Culinary Sector</p>
                  </div>
                  <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg">Fast-Track</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center text-xl">
                    <Laptop className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-white font-medium text-sm">ICT50220 Diploma of IT</h5>
                    <p className="text-xs text-slate-400">Technology & Systems Sector</p>
                  </div>
                  <span className="text-xs font-bold text-violet-400 bg-violet-400/10 px-2.5 py-1 rounded-lg">Verified</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>0 Classroom Hours Required</span>
                <span className="text-cyan-400 font-medium">Verified by RTO Assessors</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Floating Glass Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
          <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-cyan-400/50 transition-all group animate-float">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/5 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <ClipboardCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">1. Check Eligibility</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Complete our 60-second interactive questionnaire to assess your work experience against AQF standards.
            </p>
            <a href="#eligibility-quiz" className="inline-flex items-center text-xs font-semibold text-cyan-400 gap-1.5 hover:underline">
              <span>Free Skill Assessment</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-amber-400/50 transition-all group animate-float-delayed">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-500/5 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
              <FolderOpen className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">2. Submit Evidence</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Gather job evidence like payslips, references, photos/videos of your work, and current resume.
            </p>
            <a href="#evidence-checklist" className="inline-flex items-center text-xs font-semibold text-amber-400 gap-1.5 hover:underline">
              <span>Document Checklist</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-violet-400/50 transition-all group animate-float">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400/20 to-violet-500/5 border border-violet-400/30 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">3. Get Certified</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Receive your official Australian Qualification issued directly by our partner RTOs upon review.
            </p>
            <a href="#qualifications" className="inline-flex items-center text-xs font-semibold text-violet-400 gap-1.5 hover:underline">
              <span>Browse Qualifications</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
