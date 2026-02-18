// Main JavaScript - Smooth Scroll & Animations

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all sections except hero (already visible)
document.querySelectorAll('section:not(#hero)').forEach(section => {
  observer.observe(section);
});

// Radio button visual feedback
document.querySelectorAll('.radio-option').forEach(option => {
  option.addEventListener('click', function() {
    // Remove selected class from siblings
    const siblings = this.parentElement.querySelectorAll('.radio-option');
    siblings.forEach(sibling => sibling.classList.remove('selected'));

    // Add selected class to clicked option
    this.classList.add('selected');

    // Check the radio input
    const radio = this.querySelector('input[type="radio"]');
    if (radio) {
      radio.checked = true;
    }
  });
});
