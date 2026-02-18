// Form Validation & Qualification Logic

const form = document.getElementById('qualifying-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const privacyCheckbox = document.getElementById('privacy_consent');
const privacyError = document.getElementById('privacy-error');

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Form submission handler
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(form);
  const trainingExperience = formData.get('training-experience');
  const trainingFrequency = formData.get('training-frequency');
  const commitment = formData.get('commitment');
  const email = formData.get('email');

  // Validate email
  if (!validateEmail(email)) {
    emailError.style.display = 'block';
    emailInput.classList.add('error');
    emailInput.focus();
    return;
  } else {
    emailError.style.display = 'none';
    emailInput.classList.remove('error');
  }

  // Validate privacy consent checkbox
  if (!privacyCheckbox.checked) {
    privacyError.style.display = 'block';
    privacyCheckbox.focus();
    return;
  } else {
    privacyError.style.display = 'none';
  }

  // Qualification logic
  const isQualified = qualifyApplicant(trainingExperience, trainingFrequency, commitment);

  // Store email in session storage for thank you page (optional)
  sessionStorage.setItem('applicantEmail', email);

  // Redirect based on qualification
  if (isQualified) {
    window.location.href = 'thank-you.html';
  } else {
    window.location.href = 'not-a-fit.html';
  }
});

// Qualification function
function qualifyApplicant(experience, frequency, commitment) {
  // Filter out complete beginners (less than 6 months)
  if (experience === 'beginner') {
    return false;
  }

  // Filter out inconsistent trainers
  if (frequency === 'inconsistent' || frequency === 'low') {
    return false;
  }

  // Filter out those not committed to 12 weeks
  if (commitment !== 'yes') {
    return false;
  }

  // If all checks pass, they're qualified
  return true;
}

// Real-time email validation
emailInput.addEventListener('blur', function() {
  if (emailInput.value && !validateEmail(emailInput.value)) {
    emailError.style.display = 'block';
    emailInput.classList.add('error');
  } else {
    emailError.style.display = 'none';
    emailInput.classList.remove('error');
  }
});

emailInput.addEventListener('input', function() {
  if (emailError.style.display === 'block') {
    if (validateEmail(emailInput.value)) {
      emailError.style.display = 'none';
      emailInput.classList.remove('error');
    }
  }
});
