import React, { useEffect, useState, useRef } from 'react';

export default function StatsBar() {
  const [counts, setCounts] = useState({ success: 0, qual: 0, hours: 0, rtos: 0 });
  const sectionRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        success: Math.floor(progress * 99),
        qual: Math.floor(progress * 10000),
        hours: Math.floor(progress * 48),
        rtos: Math.floor(progress * 100),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({ success: 99, qual: 10000, hours: 48, rtos: 100 });
      }
    }, interval);
  };

  return (
    <section id="stats-bar" ref={sectionRef} className="py-12 relative z-20 border-y border-white/10 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cyan-400 tracking-tight">
              {counts.success}%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">RPL Success Rate</div>
            <div className="text-[11px] text-slate-500">Based on evidence audits</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 tracking-tight">
              {counts.qual.toLocaleString()}+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Qualifications Issued</div>
            <div className="text-[11px] text-slate-500">Nationally recognized AQF certificates</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-violet-400 tracking-tight">
              {counts.hours} Hours
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Turnaround Assessment</div>
            <div className="text-[11px] text-slate-500">Fast-track evidence verification</div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-emerald-400 tracking-tight">
              {counts.rtos}+ RTOs
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Partner RTO Network</div>
            <div className="text-[11px] text-slate-500">Registered Training Organisations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
