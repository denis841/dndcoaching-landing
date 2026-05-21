// Qualification form for /apply.
// Disqualified → /not-a-fit. Qualified → Tally full application URL.

const TALLY_URL = 'https://tally.so/r/REPLACE_ME'; // TODO: Denis supplies the live Tally form URL before launch

(function () {
  const form = document.getElementById('qualifying-form');
  if (!form) return;

  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const privacyCheckbox = document.getElementById('privacy_consent');
  const privacyError = document.getElementById('privacy-error');

  function validateEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  function qualify(experience, frequency, commitment) {
    if (experience === 'beginner') return false;
    if (frequency === 'inconsistent' || frequency === 'low') return false;
    if (commitment !== 'yes') return false;
    return true;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const email = data.get('email') || '';

    if (!validateEmail(email)) {
      emailError.style.display = 'block';
      emailInput.classList.add('error');
      emailInput.focus();
      return;
    }
    emailError.style.display = 'none';
    emailInput.classList.remove('error');

    if (!privacyCheckbox.checked) {
      privacyError.style.display = 'block';
      privacyCheckbox.focus();
      return;
    }
    privacyError.style.display = 'none';

    const isQualified = qualify(
      data.get('training-experience'),
      data.get('training-frequency'),
      data.get('commitment')
    );

    try { sessionStorage.setItem('applicantEmail', email); } catch (_) { /* ignore */ }

    if (isQualified) {
      const u = new URL(TALLY_URL);
      u.searchParams.set('email', email);
      window.location.href = u.toString();
    } else {
      window.location.href = '/not-a-fit';
    }
  });

  emailInput.addEventListener('blur', function () {
    if (emailInput.value && !validateEmail(emailInput.value)) {
      emailError.style.display = 'block';
      emailInput.classList.add('error');
    } else {
      emailError.style.display = 'none';
      emailInput.classList.remove('error');
    }
  });

  emailInput.addEventListener('input', function () {
    if (emailError.style.display === 'block' && validateEmail(emailInput.value)) {
      emailError.style.display = 'none';
      emailInput.classList.remove('error');
    }
  });
})();
