const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// --- New Premium Features ---
// Intersection Observer for scroll animations (Fade-in)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Select elements to animate and observe them
document.addEventListener('DOMContentLoaded', () => {
  const animatableElements = document.querySelectorAll('.section-heading, .project-card, .stack-card, .about-copy, .process-line > div, .contact-box');
  animatableElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
