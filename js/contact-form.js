import { t } from './i18n.js';

export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const steps = [...form.querySelectorAll('.form-step')];
  const progressBar = form.querySelector('.form-progress-bar');
  const stepLabels = [...form.querySelectorAll('.form-steps-labels span')];
  const nextBtn = form.querySelector('[data-form-next]');
  const prevBtn = form.querySelector('[data-form-prev]');
  const submitBtn = form.querySelector('[data-form-submit]');
  const phoneInput = form.querySelector('input[name="phone"]');

  let currentStep = 0;

  const updateUI = () => {
    steps.forEach((step, index) => {
      step.hidden = index !== currentStep;
    });

    stepLabels.forEach((label, index) => {
      label.classList.toggle('active', index === currentStep);
      label.classList.toggle('done', index < currentStep);
    });

    if (progressBar) {
      progressBar.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    }

    if (prevBtn) prevBtn.hidden = currentStep === 0;
    if (nextBtn) nextBtn.hidden = currentStep === steps.length - 1;
    if (submitBtn) submitBtn.hidden = currentStep !== steps.length - 1;
  };

  const validateStep = () => {
    const fields = steps[currentStep].querySelectorAll('input, select, textarea');
    for (const field of fields) {
      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }
    return true;
  };

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, '');
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (!validateStep()) return;
      currentStep = Math.min(currentStep + 1, steps.length - 1);
      updateUI();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentStep = Math.max(currentStep - 1, 0);
      updateUI();
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    const data = Object.fromEntries(new FormData(form).entries());
    console.log('Contact form payload:', data);

    alert(t('form.success'));
    form.reset();
    currentStep = 0;
    updateUI();
  });

  updateUI();
}
