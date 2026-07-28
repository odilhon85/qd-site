/* QarzDaftar Landing Page — Minimal Scripts */

// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  if (!nav) return;
  nav.classList.toggle('open');
}

// Close mobile menu when a link is clicked
document.addEventListener('click', (e) => {
  const nav = document.getElementById('navLinks');
  if (!nav) return;
  if (e.target.tagName === 'A' && nav.contains(e.target)) {
    nav.classList.remove('open');
  }
});

// Fade-up on scroll (IntersectionObserver)
(function () {
  const elements = document.querySelectorAll('.fade-up');
  if (!elements.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
})();
