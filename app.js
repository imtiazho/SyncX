/* RPL Portal Interactive Script (White Theme & 3D Globe) */

document.addEventListener('DOMContentLoaded', () => {
  initGlobeCanvas();
  initWizard();
  initAccordion();
  initCategoryFilters();
  initStatCounters();
  initContactForm();
  initMobileMenu();
  initSmoothScroll();
});

/* ==========================================================================
   1. Animated 3D Globe Background (Optimized for White Theme)
   ========================================================================== */
function initGlobeCanvas() {
  const canvas = document.getElementById('globe-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = canvas.parentElement.offsetWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  });

  const globeRadius = Math.min(width, height) * 0.36;
  const centerY = height * 0.45;

  let rotation = 0;
  const points = [];
  const numPoints = 160;

  // Generate 3D sphere point coordinates
  for (let i = 0; i < numPoints; i++) {
    const phi = Math.acos(-1 + (2 * i) / numPoints);
    const theta = Math.sqrt(numPoints * Math.PI) * phi;
    points.push({
      x: globeRadius * Math.cos(theta) * Math.sin(phi),
      y: globeRadius * Math.sin(theta) * Math.sin(phi),
      z: globeRadius * Math.cos(phi),
      baseRadius: Math.random() * 2.2 + 1.8,
      speed: Math.random() * 0.02 + 0.005
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Dynamic placement: Right side on desktop, center on mobile
    const currentCenterX = window.innerWidth < 1024 ? width * 0.5 : width * 0.72;

    rotation += 0.004;

    // Ambient radial glow behind globe
    const safeGlobeRadius = Math.max(10, globeRadius);
    const gradient = ctx.createRadialGradient(
      currentCenterX,
      centerY,
      safeGlobeRadius * 0.5,
      currentCenterX,
      centerY,
      safeGlobeRadius * 1.35
    );
    gradient.addColorStop(0, 'rgba(0, 180, 216, 0.16)');
    gradient.addColorStop(0.6, 'rgba(123, 44, 191, 0.08)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(currentCenterX, centerY, Math.max(0.1, safeGlobeRadius * 1.45), 0, Math.PI * 2);
    ctx.fill();

    // Draw Globe Outer Ring Border
    ctx.strokeStyle = 'rgba(0, 180, 216, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(currentCenterX, centerY, Math.max(0.1, safeGlobeRadius), 0, Math.PI * 2);
    ctx.stroke();

    // Draw Longitude & Latitude 3D Mesh Lines
    ctx.lineWidth = 1;
    for (let r = 0.25; r <= 0.95; r += 0.2) {
      // Latitude ellipses
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.07)';
      ctx.beginPath();
      ctx.ellipse(currentCenterX, centerY, Math.max(0.1, safeGlobeRadius), Math.max(0.1, safeGlobeRadius * r), 0, 0, Math.PI * 2);
      ctx.stroke();

      // Longitude rotated ellipses
      ctx.strokeStyle = 'rgba(0, 180, 216, 0.12)';
      ctx.beginPath();
      ctx.ellipse(currentCenterX, centerY, Math.max(0.1, safeGlobeRadius * r), Math.max(0.1, safeGlobeRadius), rotation * 0.6, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Projected 3D sphere points & connecting network arcs
    const projected = [];

    points.forEach((p) => {
      // 3D Y-Axis Rotation
      const cosR = Math.cos(rotation);
      const sinR = Math.sin(rotation);

      const rx = p.x * cosR - p.z * sinR;
      const rz = p.x * sinR + p.z * cosR;

      // Perspective projection calculation
      const distance = Math.max(1, 320 + rz);
      const scale = Math.max(0.1, 320 / distance);
      const px = currentCenterX + rx * scale;
      const py = centerY + p.y * scale;
      const alpha = Math.max(0.12, (rz + safeGlobeRadius) / (2 * safeGlobeRadius));

      projected.push({ x: px, y: py, alpha, z: rz });

      const pointRadius = Math.max(0.1, p.baseRadius * scale);

      // Render 3D Point Nodes
      ctx.beginPath();
      ctx.arc(px, py, pointRadius, 0, Math.PI * 2);

      if (rz > 0) {
        // Front hemisphere: Crisp cyan & vibrant indigo dots with subtle shadow glow
        ctx.fillStyle = `rgba(0, 150, 199, ${alpha * 0.95})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00B4D8';
      } else {
        // Back hemisphere: Soft violet/slate points
        ctx.fillStyle = `rgba(123, 44, 191, ${alpha * 0.45})`;
        ctx.shadowBlur = 0;
      }

      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // Draw connecting network lines between nearby front hemisphere points
    ctx.lineWidth = 1;
    for (let i = 0; i < projected.length; i++) {
      if (projected[i].z < -10) continue; // Skip back hemisphere
      for (let j = i + 1; j < projected.length; j++) {
        if (projected[j].z < -10) continue;
        const dx = projected[i].x - projected[j].x;
        const dy = projected[i].y - projected[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          const edgeAlpha = (1 - dist / 80) * projected[i].alpha * 0.45;
          ctx.strokeStyle = `rgba(0, 150, 199, ${edgeAlpha})`;
          ctx.beginPath();
          ctx.moveTo(projected[i].x, projected[i].y);
          ctx.lineTo(projected[j].x, projected[j].y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. Multi-Step Eligibility Check Wizard
   ========================================================================== */
function initWizard() {
  let currentStep = 1;
  const totalSteps = 4;

  const wizardData = {
    industry: '',
    experience: '',
    qualification: '',
    fullName: '',
    email: '',
    phone: ''
  };

  const nextBtns = document.querySelectorAll('.wizard-next');
  const prevBtns = document.querySelectorAll('.wizard-prev');

  nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (validateStep(currentStep)) {
        if (currentStep < totalSteps) {
          currentStep++;
          updateWizardUI();
        }
      }
    });
  });

  prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    });
  });

  // Industry selection cards
  const industryCards = document.querySelectorAll('.industry-card');
  industryCards.forEach((card) => {
    card.addEventListener('click', () => {
      industryCards.forEach((c) => c.classList.remove('border-cyan-500', 'bg-cyan-50', 'ring-2', 'ring-cyan-400'));
      card.classList.add('border-cyan-500', 'bg-cyan-50', 'ring-2', 'ring-cyan-400');
      wizardData.industry = card.getAttribute('data-industry');
    });
  });

  // Experience select buttons
  const expBtns = document.querySelectorAll('.exp-option');
  expBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      expBtns.forEach((b) => b.classList.remove('border-cyan-500', 'bg-cyan-50', 'ring-2', 'ring-cyan-400'));
      btn.classList.add('border-cyan-500', 'bg-cyan-50', 'ring-2', 'ring-cyan-400');
      wizardData.experience = btn.getAttribute('data-exp');
    });
  });

  // Target qualification level select buttons
  const qualBtns = document.querySelectorAll('.qual-option');
  qualBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      qualBtns.forEach((b) => b.classList.remove('border-cyan-500', 'bg-cyan-50', 'ring-2', 'ring-cyan-400'));
      btn.classList.add('border-cyan-500', 'bg-cyan-50', 'ring-2', 'ring-cyan-400');
      wizardData.qualification = btn.getAttribute('data-qual');
    });
  });

  // Wizard form final submission
  const wizardForm = document.getElementById('wizard-final-form');
  if (wizardForm) {
    wizardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      wizardData.fullName = document.getElementById('wiz-name').value;
      wizardData.email = document.getElementById('wiz-email').value;
      wizardData.phone = document.getElementById('wiz-phone').value;

      showWizardResult(wizardData);
    });
  }

  function validateStep(step) {
    const errorMsg = document.getElementById(`step-${step}-error`);
    if (errorMsg) errorMsg.classList.add('hidden');

    if (step === 1 && !wizardData.industry) {
      if (errorMsg) {
        errorMsg.textContent = 'Please select your industry sector to proceed.';
        errorMsg.classList.remove('hidden');
      }
      return false;
    }
    if (step === 2 && !wizardData.experience) {
      if (errorMsg) {
        errorMsg.textContent = 'Please select your years of work experience.';
        errorMsg.classList.remove('hidden');
      }
      return false;
    }
    if (step === 3 && !wizardData.qualification) {
      if (errorMsg) {
        errorMsg.textContent = 'Please select your target RPL qualification level.';
        errorMsg.classList.remove('hidden');
      }
      return false;
    }
    return true;
  }

  function updateWizardUI() {
    // Hide all step panels
    document.querySelectorAll('.wizard-panel').forEach((panel) => {
      panel.classList.add('hidden');
    });

    // Show current step panel
    const currentPanel = document.getElementById(`wizard-panel-${currentStep}`);
    if (currentPanel) currentPanel.classList.remove('hidden');

    // Update progress steps indicators
    for (let i = 1; i <= totalSteps; i++) {
      const stepBadge = document.getElementById(`step-indicator-${i}`);
      if (stepBadge) {
        stepBadge.classList.remove('active', 'completed');
        if (i === currentStep) {
          stepBadge.classList.add('active');
        } else if (i < currentStep) {
          stepBadge.classList.add('completed');
        }
      }
    }
  }

  function showWizardResult(data) {
    document.getElementById('wizard-panels-container').classList.add('hidden');
    document.getElementById('wizard-indicators').classList.add('hidden');
    
    const resultBox = document.getElementById('wizard-result-box');
    if (resultBox) {
      resultBox.classList.remove('hidden');

      let rating = '98% High Eligibility Match';
      let fastTrack = 'Estimated Fast-Track: 2 to 3 Weeks';

      if (data.experience === '1-2-years') {
        rating = '85% Moderate-High Eligibility Match';
        fastTrack = 'Estimated Timeline: 3 to 4 Weeks';
      }

      document.getElementById('result-industry').textContent = data.industry || 'Selected Industry';
      document.getElementById('result-exp').textContent = data.experience || '3+ Years';
      document.getElementById('result-qual').textContent = data.qualification || 'Certificate IV / Diploma';
      document.getElementById('result-rating').textContent = rating;
      document.getElementById('result-timeline').textContent = fastTrack;
    }

    showToast('Congratulations! Your RPL Assessment details have been submitted. An RPL Specialist will contact you within 2 hours.', 'success');
  }
}

/* Reset Wizard Helper */
function resetWizard() {
  location.reload();
}

/* ==========================================================================
   3. Evidence Accordion Toggle
   ========================================================================== */
function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close other accordion items
      accordionItems.forEach((other) => other.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   4. Qualification Grid Category Filter
   ========================================================================== */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.qual-filter-btn');
  const qualCards = document.querySelectorAll('.qual-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach((b) => {
        b.classList.remove('bg-cyan-600', 'text-white', 'shadow-lg');
        b.classList.add('bg-slate-100', 'text-slate-700');
      });
      btn.classList.remove('bg-slate-100', 'text-slate-700');
      btn.classList.add('bg-cyan-600', 'text-white', 'shadow-lg');

      // Filter grid cards
      qualCards.forEach((card) => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('hidden');
          card.classList.add('animate-fade-in');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* Qualification Detail Modal Trigger */
function openQualModal(title, code, duration, docs) {
  const modal = document.getElementById('qual-modal');
  if (!modal) return;

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-code').textContent = code;
  document.getElementById('modal-duration').textContent = duration;
  document.getElementById('modal-docs').textContent = docs;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeQualModal() {
  const modal = document.getElementById('qual-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

/* ==========================================================================
   5. Stat Counters Animation on Scroll
   ========================================================================== */
function initStatCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counters.forEach((counter) => {
            const target = +counter.getAttribute('data-target');
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 2000;
            const stepTime = 30;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target.toLocaleString() + suffix;
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(current).toLocaleString() + suffix;
              }
            }, stepTime);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsSection = document.getElementById('stats-bar');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   6. Contact Lead Capture Form
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-lead-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name').value;
    const phone = document.getElementById('contact-phone').value;

    showToast(`Thank you, ${name}! Your consultation booking has been received. We will contact you at ${phone}.`, 'success');
    form.reset();
  });
}

/* ==========================================================================
   7. Mobile Navigation Drawer Menu
   ========================================================================== */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    drawer.classList.remove('translate-x-full');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
    });
  }

  // Close drawer when clicking any link
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
    });
  });
}

/* ==========================================================================
   8. Smooth Scroll Utility
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   9. Toast Notification System
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `glass-card border-l-4 ${
    type === 'success' ? 'border-emerald-500 text-emerald-900 bg-white' : 'border-cyan-500 text-slate-900 bg-white'
  } p-4 rounded-xl shadow-2xl flex items-center gap-3 transition-all duration-500 transform translate-y-8 opacity-0 max-w-md border border-slate-200`;

  toast.innerHTML = `
    <div class="p-2 rounded-full ${type === 'success' ? 'bg-emerald-100' : 'bg-cyan-100'}">
      <svg class="w-6 h-6 ${type === 'success' ? 'text-emerald-600' : 'text-cyan-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <div class="text-sm font-medium leading-snug">${message}</div>
  `;

  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove('translate-y-8', 'opacity-0');
  }, 10);

  // Remove toast after 5s
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-8');
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 5000);
}
