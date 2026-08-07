import React from 'react';
import { Award, Info, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-400/20 text-cyan-400 flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white">RPL<span className="text-cyan-400">PORTAL</span></span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Australia's premier Recognition of Prior Learning (RPL) skills assessment portal, helping workers turn real experience into nationally recognized qualifications.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#how-rpl-works" className="hover:text-cyan-400 transition-colors">How RPL Works</a></li>
              <li><a href="#qualifications" className="hover:text-cyan-400 transition-colors">Qualification Categories</a></li>
              <li><a href="#evidence-checklist" className="hover:text-cyan-400 transition-colors">Evidence Checklist</a></li>
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4">Top Qualifications</h4>
            <ul className="space-y-2.5">
              <li><a href="#qualifications" className="hover:text-cyan-400 transition-colors">Cert IV Building & Construction</a></li>
              <li><a href="#qualifications" className="hover:text-cyan-400 transition-colors">Cert III Commercial Cookery</a></li>
              <li><a href="#qualifications" className="hover:text-cyan-400 transition-colors">Cert III Automotive Mechanical</a></li>
              <li><a href="#qualifications" className="hover:text-cyan-400 transition-colors">Diploma of Information Technology</a></li>
              <li><a href="#qualifications" className="hover:text-cyan-400 transition-colors">Diploma of Leadership & Management</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm mb-4">Connect & Social</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 flex items-center justify-center transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500">
              Operating in compliance with Australian Skills Quality Authority (ASQA) standards.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2">
          <h5 className="text-white font-semibold text-xs flex items-center gap-2">
            <Info className="w-4 h-4 text-cyan-400" /> RTO Partner & Legal Disclaimer
          </h5>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            RPL Portal operates as an independent RPL skills assessment and document support service connecting candidates with partner Registered Training Organisations (RTOs). Qualifications are assessed and issued directly by accredited RTOs listed on training.gov.au under the Australian Qualifications Framework (AQF).
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 text-[11px] text-slate-500 gap-4">
          <div>&copy; 2026 RPL Portal Australia. All Rights Reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" class="hover:text-slate-300">ASQA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
