import React, { useState } from 'react';
import { HardHat, Utensils, Wrench, HeartPulse, Laptop, PieChart, ArrowRight, Check, TrendingUp } from 'lucide-react';

export default function EligibilityWizard({ onToast }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    experience: '',
    qualification: '',
    fullName: '',
    email: '',
    phone: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateAndNext = () => {
    setErrorMsg('');
    if (step === 1 && !formData.industry) {
      setErrorMsg('Please select your industry sector to proceed.');
      return;
    }
    if (step === 2 && !formData.experience) {
      setErrorMsg('Please select your years of work experience.');
      return;
    }
    if (step === 3 && !formData.qualification) {
      setErrorMsg('Please select your target RPL qualification level.');
      return;
    }
    setStep(step + 1);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onToast) {
      onToast('Congratulations! Your RPL Assessment details have been submitted. An RPL Specialist will contact you within 2 hours.', 'success');
    }
  };

  return (
    <section id="eligibility-quiz" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-cyan blur-[120px] pointer-events-none opacity-40"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20">
            60-Second Assessment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Free RPL <span className="gradient-text-cyan-violet">Eligibility Quiz</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Answer 3 quick questions to calculate your qualification eligibility score and fast-track timeline instantly.
          </p>
        </div>

        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-cyan-500/30 glow-border-cyan relative">
          {!submitted ? (
            <>
              {/* Progress Indicators */}
              <div className="grid grid-cols-4 gap-2 mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`wizard-step p-3 rounded-xl border border-white/10 text-center font-semibold text-xs flex items-center justify-center gap-2 ${
                      s === step ? 'active' : s < step ? 'completed' : 'text-slate-400'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px]">{s}</span>
                    <span className="hidden sm:inline">
                      {s === 1 ? 'Industry' : s === 2 ? 'Experience' : s === 3 ? 'Target Level' : 'Submit'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step 1: Industry */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white text-center sm:text-left">Which industry best matches your work experience?</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[
                      { name: 'Construction & Building', icon: HardHat, sub: 'Building, Carpentry, Plumbing', color: 'cyan' },
                      { name: 'Hospitality & Cookery', icon: Utensils, sub: 'Commercial Cookery, Chef', color: 'amber' },
                      { name: 'Automotive & Mechanical', icon: Wrench, sub: 'Light & Heavy Mechanic', color: 'violet' },
                      { name: 'Healthcare & Care', icon: HeartPulse, sub: 'Aged & Disability Care', color: 'emerald' },
                      { name: 'Information Tech', icon: Laptop, sub: 'Systems, Networks, Dev', color: 'cyan' },
                      { name: 'Business & Mgmt', icon: PieChart, sub: 'Leadership, Project Mgmt', color: 'amber' },
                    ].map((item, idx) => {
                      const IconComp = item.icon;
                      const isSelected = formData.industry === item.name;
                      return (
                        <button
                          key={idx}
                          onClick={() => setFormData({ ...formData, industry: item.name })}
                          className={`p-4 rounded-2xl bg-white/5 border text-left transition-all group ${
                            isSelected ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/10 hover:border-cyan-400'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl bg-${item.color}-400/10 text-${item.color}-400 flex items-center justify-center text-lg mb-2`}>
                            <IconComp className="w-5 h-5" />
                          </div>
                          <h4 className="text-white font-semibold text-sm group-hover:text-cyan-400">{item.name}</h4>
                          <p className="text-[11px] text-slate-400">{item.sub}</p>
                        </button>
                      );
                    })}
                  </div>
                  {errorMsg && <p className="text-rose-400 text-xs font-medium">{errorMsg}</p>}
                  <div className="flex justify-end pt-4">
                    <button onClick={validateAndNext} className="btn-primary px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2">
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Experience */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white text-center sm:text-left">How many years of relevant work experience do you have?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { exp: '1-2-years', label: '1 - 2 Years', color: 'cyan', desc: 'Entry to mid-level experience with basic job proof.' },
                      { exp: '3-5-years', label: '3 - 5 Years', color: 'amber', desc: 'Solid experience with strong evidence portfolio.' },
                      { exp: '5+-years', label: '5+ Years', color: 'violet', desc: 'Senior tradesperson / Supervisor level experience.' },
                    ].map((opt) => (
                      <button
                        key={opt.exp}
                        onClick={() => setFormData({ ...formData, experience: opt.exp })}
                        className={`p-5 rounded-2xl bg-white/5 border text-left transition-all ${
                          formData.experience === opt.exp ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/10 hover:border-cyan-400'
                        }`}
                      >
                        <div className={`text-${opt.color}-400 font-bold text-lg mb-1`}>{opt.label}</div>
                        <p className="text-slate-400 text-xs">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                  {errorMsg && <p className="text-rose-400 text-xs font-medium">{errorMsg}</p>}
                  <div className="flex justify-between pt-4">
                    <button onClick={() => setStep(1)} className="btn-secondary px-6 py-3.5 rounded-xl font-medium text-sm">Back</button>
                    <button onClick={validateAndNext} className="btn-primary px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2">
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Target Level */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white text-center sm:text-left">What target RPL qualification level are you aiming for?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { level: 'Certificate III', color: 'cyan', desc: 'Trade qualification, apprentice level or skilled worker.' },
                      { level: 'Certificate IV', color: 'amber', desc: 'Advanced trade, team lead or supervisor qualification.' },
                      { level: 'Diploma / Adv Diploma', color: 'violet', desc: 'Management level, Builder License, or Executive role.' },
                    ].map((opt) => (
                      <button
                        key={opt.level}
                        onClick={() => setFormData({ ...formData, qualification: opt.level })}
                        className={`p-5 rounded-2xl bg-white/5 border text-left transition-all ${
                          formData.qualification === opt.level ? 'border-cyan-400 bg-cyan-500/10' : 'border-white/10 hover:border-cyan-400'
                        }`}
                      >
                        <div className={`text-${opt.color}-400 font-bold text-base mb-1`}>{opt.level}</div>
                        <p className="text-slate-400 text-xs">{opt.desc}</p>
                      </button>
                    ))}
                  </div>
                  {errorMsg && <p className="text-rose-400 text-xs font-medium">{errorMsg}</p>}
                  <div className="flex justify-between pt-4">
                    <button onClick={() => setStep(2)} className="btn-secondary px-6 py-3.5 rounded-xl font-medium text-sm">Back</button>
                    <button onClick={validateAndNext} className="btn-primary px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center gap-2">
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Form */}
              {step === 4 && (
                <form onSubmit={handleFinalSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white text-center sm:text-left">Enter your details to calculate instant eligibility results</h3>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Michael Taylor"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="michael@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+61 400 000 000"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button type="button" onClick={() => setStep(3)} className="btn-secondary px-6 py-3.5 rounded-xl font-medium text-sm">Back</button>
                    <button type="submit" className="btn-amber px-8 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2">
                      <span>Calculate Eligibility Result</span>
                      <TrendingUp className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            /* Result Box */
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto border border-emerald-400/30">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Assessment Calculated!</h3>
                <p className="text-lg font-semibold text-cyan-400">98% High Eligibility Match</p>
                <p className="text-xs text-amber-400 font-medium mt-1">Estimated Fast-Track: 2 to 3 Weeks</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left space-y-3 max-w-md mx-auto text-sm">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Selected Sector:</span>
                  <span className="font-semibold text-white">{formData.industry || 'Construction'}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-slate-400">Work Experience:</span>
                  <span className="font-semibold text-white">{formData.experience || '3-5 Years'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Level:</span>
                  <span className="font-semibold text-white">{formData.qualification || 'Certificate IV'}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a href="#contact" className="btn-primary px-8 py-3.5 rounded-xl font-bold text-sm w-full sm:w-auto">
                  Book Free RTO Specialist Consultation
                </a>
                <button onClick={() => { setSubmitted(false); setStep(1); }} className="btn-secondary px-6 py-3.5 rounded-xl font-medium text-sm w-full sm:w-auto">
                  Start New Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
