import { t } from './i18n.js';

/** Change this when you have the exact Solution domain. */
const API_URL = 'https://api.63agency.com/public/contact';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const page = form.closest('.contact-page') || document.querySelector('.contact-page');
  const successEl = document.querySelector('[data-form-success]');
  const submitBtn = form.querySelector('[data-form-submit]');
  const submitLabel = submitBtn?.querySelector('span') || submitBtn;
  const phoneInput = form.querySelector('input[name="phone"]');
  const statusEl = form.querySelector('[data-form-status]');

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
    submitLabel.textContent = isSubmitting ? t('form.sending') : t('form.submit');
  };

  const showSuccess = () => {
    document.body.classList.add('is-form-sent');
    page?.classList.add('is-form-sent');
    if (successEl) successEl.hidden = false;
  };

  const closePickers = [];

  const mountPicker = (select) => {
    const picker = document.createElement('div');
    picker.className = `form-picker${select.id === 'dial' ? ' form-picker--dial' : ''}`;
    select.parentNode.insertBefore(picker, select);
    picker.appendChild(select);
    select.classList.add('form-select--native');
    select.tabIndex = -1;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'form-picker__btn';
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span class="form-picker__value"></span><svg class="form-picker__chevron" width="12" height="8" viewBox="0 0 12 8" aria-hidden="true"><path fill="currentColor" d="M1.4.6 6 5.2 10.6.6 12 2 6 8 0 2z"/></svg>';

    const menu = document.createElement('ul');
    menu.className = 'form-picker__menu';
    menu.setAttribute('role', 'listbox');
    menu.hidden = true;

    picker.append(btn, menu);

    const valueEl = btn.querySelector('.form-picker__value');
    let open = false;

    const placeholderText = () => {
      const empty = [...select.options].find((option) => option.disabled || option.value === '');
      return empty ? empty.textContent.trim() : '';
    };

    const selectedText = () => {
      const current = select.options[select.selectedIndex];
      if (!current || current.disabled || current.value === '') return placeholderText();
      return current.textContent.trim();
    };

    const refresh = () => {
      if (select.getAttribute('aria-label')) btn.setAttribute('aria-label', select.getAttribute('aria-label'));
      const empty = !select.value;
      btn.classList.toggle('is-placeholder', empty);
      valueEl.textContent = selectedText();
      menu.replaceChildren();
      [...select.options].forEach((option) => {
        if (option.disabled || option.value === '') return;
        const item = document.createElement('li');
        item.className = 'form-picker__option';
        item.setAttribute('role', 'option');
        item.textContent = option.textContent.trim();
        item.classList.toggle('is-selected', option.value === select.value);
        item.addEventListener('click', () => {
          select.value = option.value;
          select.dispatchEvent(new Event('change', { bubbles: true }));
          refresh();
          close();
        });
        menu.appendChild(item);
      });
    };

    const place = () => {
      menu.hidden = false;
      menu.style.maxHeight = '';
      menu.style.top = 'calc(100% + 6px)';
      menu.style.bottom = 'auto';
      const height = menu.scrollHeight;
      const rect = btn.getBoundingClientRect();
      const nav = document.querySelector('.navbar');
      const navBottom = nav ? nav.getBoundingClientRect().bottom : 0;
      const footer = document.querySelector('.footer');
      const footerTop = footer ? footer.getBoundingClientRect().top : window.innerHeight;
      const spaceBelow = Math.min(window.innerHeight, footerTop) - rect.bottom - 16;
      const spaceAbove = rect.top - Math.max(navBottom, 0) - 16;
      const openUp = spaceBelow < Math.min(height, 280) && spaceAbove > spaceBelow;
      const limit = Math.max(140, openUp ? spaceAbove : spaceBelow);
      menu.style.maxHeight = `${Math.min(limit, 280)}px`;
      if (openUp) {
        menu.style.top = 'auto';
        menu.style.bottom = 'calc(100% + 6px)';
      }
    };

    const close = () => {
      open = false;
      menu.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      picker.classList.remove('is-open');
    };

    const openMenu = () => {
      closePickers.forEach((fn) => fn());
      open = true;
      picker.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      place();
    };

    btn.addEventListener('click', () => {
      if (open) close();
      else openMenu();
    });

    closePickers.push(close);
    refresh();
    return { refresh, close };
  };

  const pickers = [...form.querySelectorAll('select.form-select')].map(mountPicker);

  document.addEventListener('i18n:applied', () => {
    pickers.forEach((picker) => picker.refresh());
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('.form-picker')) return;
    pickers.forEach((picker) => picker.close());
  });

  window.addEventListener('resize', () => pickers.forEach((picker) => picker.close()));
  window.addEventListener('scroll', (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest('.form-picker__menu')) return;
    pickers.forEach((picker) => picker.close());
  }, true);

  const validateForm = () => {
    const fields = form.querySelectorAll('input, select, textarea');
    for (const field of fields) {
      if (field.name === 'website') continue;
      if (!field.checkValidity()) {
        const pickerBtn = field.closest('.form-picker')?.querySelector('.form-picker__btn');
        if (pickerBtn) pickerBtn.focus();
        else field.reportValidity();
        setStatus('error', t('form.validation'));
        return false;
      }
    }

    const emailVal = String(form.elements.namedItem('email')?.value || '').trim();
    const phoneVal = String(form.elements.namedItem('phone')?.value || '').replace(/\D/g, '');

    if (!EMAIL_RE.test(emailVal) || phoneVal.length < 8) {
      setStatus('error', t('form.validation'));
      return false;
    }

    return true;
  };

  const buildPayload = () => {
    const fd = new FormData(form);
    const dial = String(fd.get('dial') ?? '').trim();
    const local = String(fd.get('phone') ?? '').replace(/\D/g, '');

    return {
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      phone: `${dial}${local}`,
      role: String(fd.get('role') ?? '').trim(),
      budget: String(fd.get('revenue') ?? '').trim()
    };
  };

  if (phoneInput) {
    phoneInput.addEventListener('input', () => {
      phoneInput.value = phoneInput.value.replace(/\D/g, '');
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!validateForm()) return;

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

      form.reset();
      if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
          send_to: 'AW-17993411868/xytTCPbAo4AdEJza9oND',
          value: 1.0,
          currency: 'MAD'
        });
      }
      if (window.fbq) fbq('track', 'Lead');
      if (window.ttq) ttq.track('SubmitForm');
      showSuccess();
    } catch {
      setStatus('error', t('form.error'));
    } finally {
      setSubmitting(false);
    }
  });
}
