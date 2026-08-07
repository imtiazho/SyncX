import React, { useState } from 'react';
import { HardHat, Utensils, Wrench, HeartPulse, Network, Briefcase, ArrowRight, X, Clock, FileText, GraduationCap } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Sectors' },
  { id: 'construction', label: 'Construction & Building' },
  { id: 'hospitality', label: 'Hospitality & Cookery' },
  { id: 'automotive', label: 'Automotive & Mechanical' },
  { id: 'healthcare', label: 'Healthcare & Community' },
  { id: 'it', label: 'IT & Technology' },
  { id: 'business', label: 'Business & Leadership' },
];

const QUALIFICATIONS = [
  {
    id: 1,
    category: 'construction',
    icon: HardHat,
    color: 'cyan',
    title: 'Building & Construction',
    badge: '14 Qualifications',
    desc: 'Carpentry, Builders License RPL, Civil Construction, Plumbing, Waterproofing & Wall Tiling.',
    units: ['CPC30220 Cert III Carpentry', 'CPC40120 Cert IV Building', 'CPC50220 Diploma of Building'],
    tag: "Build Builder's License",
    code: 'CPC50220 / CPC40120',
    duration: '2 - 3 Weeks',
    docs: 'Work Logs, Site Photos, References & Payslips',
  },
  {
    id: 2,
    category: 'hospitality',
    icon: Utensils,
    color: 'amber',
    title: 'Hospitality & Culinary',
    badge: '8 Qualifications',
    desc: 'Commercial Cookery, Chef Certification, Hospitality Management, Food Safety & Kitchen Leadership.',
    units: ['SIT30821 Cert III Commercial Cookery', 'SIT40521 Cert IV Kitchen Management', 'SIT50422 Diploma of Hospitality'],
    tag: 'Chef Visa / PR Skill',
    code: 'SIT30821 / SIT40521',
    duration: '2 - 4 Weeks',
    docs: 'Kitchen Payslips, Menu Photos, Head Chef Reference',
  },
  {
    id: 3,
    category: 'automotive',
    icon: Wrench,
    color: 'violet',
    title: 'Automotive & Mechanical',
    badge: '6 Qualifications',
    desc: 'Light Vehicle Mechanical Technology, Heavy Commercial Vehicle, Automotive Body Repair & Diagnostics.',
    units: ['AUR30620 Cert III Light Mechanical', 'AUR31120 Cert III Heavy Commercial', 'AUR40216 Cert IV Automotive Tech'],
    tag: 'Motor Mechanic Trades',
    code: 'AUR30620 / AUR40216',
    duration: '2 - 3 Weeks',
    docs: 'Workshop Orders, Diagnostic Logs, Employer Verification',
  },
  {
    id: 4,
    category: 'healthcare',
    icon: HeartPulse,
    color: 'emerald',
    title: 'Healthcare & Community',
    badge: '10 Qualifications',
    desc: 'Individual Support, Aged Care, Disability Care, Mental Health & Community Services.',
    units: ['CHC33021 Cert III Individual Support', 'CHC43121 Cert IV Disability Support', 'CHC52021 Diploma Community Services'],
    tag: 'Care Worker Standards',
    code: 'CHC33021 / CHC52021',
    duration: '2 - 3 Weeks',
    docs: 'Care Logs, Shift Schedules, First Aid & Supervisor Reference',
  },
  {
    id: 5,
    category: 'it',
    icon: Network,
    color: 'cyan',
    title: 'Information Technology',
    badge: '7 Qualifications',
    desc: 'IT Support, Cybersecurity, Networking, Web Development & System Administration.',
    units: ['ICT30120 Cert III Information Tech', 'ICT40120 Cert IV Cyber Security', 'ICT50220 Diploma of IT'],
    tag: 'ACS Skill Assessment',
    code: 'ICT50220 / ICT40120',
    duration: '2 - 3 Weeks',
    docs: 'Project Code, Ticket Logs, Manager Sign-off',
  },
  {
    id: 6,
    category: 'business',
    icon: Briefcase,
    color: 'amber',
    title: 'Business & Leadership',
    badge: '9 Qualifications',
    desc: 'Business Administration, Project Management, Leadership & Operations Management.',
    units: ['BSB40120 Cert IV Business', 'BSB50420 Diploma of Leadership', 'BSB50820 Diploma Project Mgmt'],
    tag: 'Manager Certification',
    code: 'BSB50420 / BSB50820',
    duration: '2 - 3 Weeks',
    docs: 'Org Charts, Strategic Plans, Meeting Reports',
  },
];

export default function QualificationsGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedQual, setSelectedQual] = useState(null);

  const filteredQuals = activeFilter === 'all'
    ? QUALIFICATIONS
    : QUALIFICATIONS.filter((q) => q.category === activeFilter);

  return (
    <section id="qualifications" className="py-24 bg-navy-900/60 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20">
            High Demand Sectors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            RPL Qualification <span className="gradient-text-cyan-violet">Categories</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Browse our extensive catalog of nationally accredited qualifications across Australia's leading industries.
          </p>
        </div>

        {/* Filter Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Qualifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredQuals.map((qual) => {
            const IconComp = qual.icon;
            return (
              <div
                key={qual.id}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all group flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-${qual.color}-500/20 text-${qual.color}-400 flex items-center justify-center`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-semibold text-${qual.color}-400 bg-${qual.color}-400/10 px-2.5 py-1 rounded-full border border-${qual.color}-400/20`}>
                      {qual.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {qual.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-4">
                    {qual.desc}
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-300 mb-4">
                    {qual.units.map((unit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>{unit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white/5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">{qual.tag}</span>
                  <button
                    onClick={() => setSelectedQual(qual)}
                    className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Qualification Detail Modal */}
      {selectedQual && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="glass-card max-w-xl w-full p-8 rounded-3xl relative border border-cyan-500/30">
            <button
              onClick={() => setSelectedQual(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-cyan-400 text-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 mb-3 text-cyan-400 font-semibold text-sm tracking-wide">
              <GraduationCap className="w-4 h-4" /> <span>{selectedQual.code}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedQual.title} RPL</h3>
            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Fast-track your career with this RPL pathway. Turn your hands-on field experience into formal certification accredited across Australia.
            </p>

            <div className="space-y-4 mb-6 text-sm">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" /> Assessment Duration:
                </span>
                <span className="font-semibold text-white">{selectedQual.duration}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                <span className="text-slate-400 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" /> Key Documents:
                </span>
                <span className="font-semibold text-white">{selectedQual.docs}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#eligibility-quiz"
                onClick={() => setSelectedQual(null)}
                className="btn-primary flex-1 py-3.5 rounded-xl text-center font-semibold"
              >
                Check Qualification Eligibility
              </a>
              <button
                onClick={() => setSelectedQual(null)}
                className="btn-secondary px-6 py-3.5 rounded-xl font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
