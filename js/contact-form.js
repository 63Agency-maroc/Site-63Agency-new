import { t } from './i18n.js';

/** Change this when you have the exact Solution domain. */
const API_URL = 'https://api1.63agency.com/public/contact';

const FIELD_KEYS = [
  'name',
  'email',
  'phone',
  'company',
  'employees',
  'city',
  'role',
  'objective',
  'campaigns',
  'sector',
  'budget',
  'availability',
  'website'
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const steps = [...form.querySelectorAll('.form-step')];
  const progressBar = form.querySelector('.form-progress-bar');
  const stepLabels = [...form.querySelectorAll('.form-steps-labels span')];
  const nextBtn = form.querySelector('[data-form-next]');
  const prevBtn = form.querySelector('[data-form-prev]');
  const submitBtn = form.querySelector('[data-form-submit]');
  const submitLabel = submitBtn?.querySelector('span') || submitBtn;
  const phoneInput = form.querySelector('input[name="phone"]');
  const statusEl = form.querySelector('[data-form-status]');

  let currentStep = 0;
  let submitting = false;

  const setStatus = (type, message) => {
    if (!statusEl) return;
    statusEl.hidden = !message;
    statusEl.textContent = message || '';
    statusEl.classList.toggle('form-status--success', type === 'success');
    statusEl.classList.toggle('form-status--error', type === 'error');
  };

  const setSubmitting = (isSubmitting) => {
    submitting = isSubmitting;
    if (!submitBtn || !submitLabel) return;
    submitBtn.disabled = isSubmitting;
    if (nextBtn) nextBtn.disabled = isSubmitting;
    if (prevBtn) prevBtn.disabled = isSubmitting;
    submitLabel.textContent = isSubmitting ? t('form.sending') : t('form.submit');
  };

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
      if (field.name === 'website') continue;
      if (!field.checkValidity()) {
        field.reportValidity();
        return false;
      }
    }
    return true;
  };

  const validateRequiredBasics = () => {
    const name = form.elements.namedItem('name');
    const email = form.elements.namedItem('email');
    const phone = form.elements.namedItem('phone');

    const nameVal = String(name?.value || '').trim();
    const emailVal = String(email?.value || '').trim();
    const phoneVal = String(phone?.value || '').trim();

    if (!nameVal) {
      setStatus('error', t('form.validation'));
      name?.focus();
      name?.reportValidity?.();
      return false;
    }

    if (!emailVal || !EMAIL_RE.test(emailVal)) {
      setStatus('error', t('form.validation'));
      email?.focus();
      email?.reportValidity?.();
      return false;
    }

    if (!phoneVal) {
      setStatus('error', t('form.validation'));
      phone?.focus();
      phone?.reportValidity?.();
      return false;
    }

    return true;
  };

  const buildPayload = () => {
    const fd = new FormData(form);
    const payload = {};
    for (const key of FIELD_KEYS) {
      payload[key] = String(fd.get(key) ?? '').trim();
    }
    return payload;
  };

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, '');
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (submitting) return;
      if (!validateStep()) return;
      setStatus('', '');
      currentStep = Math.min(currentStep + 1, steps.length - 1);
      updateUI();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (submitting) return;
      setStatus('', '');
      currentStep = Math.max(currentStep - 1, 0);
      updateUI();
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!validateStep()) return;
    if (!validateRequiredBasics()) return;

    setStatus('', '');
    setSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload())
      });

      if (!res.ok) {
        let detail = t('form.error');
        try {
          const body = await res.json();
          if (body?.message) detail = String(body.message);
          else if (body?.error) detail = String(body.error);
        } catch {
          /* keep default */
        }
        setStatus('error', detail);
        return;
      }

      setStatus('success', t('form.success'));
      form.reset();
      currentStep = 0;
      updateUI();
    } catch {
      setStatus('error', t('form.error'));
    } finally {
      setSubmitting(false);
    }
  });

  updateUI();
}
