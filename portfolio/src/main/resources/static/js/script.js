// Highlight active nav link or social icon
document.querySelectorAll('.header-container a, .header-container button, .social-link').forEach(el => {
  el.addEventListener('click', () => {
    // Remove .active from all
    document.querySelectorAll('.header-container a.active, .header-container button.active, .social-link.active').forEach(act => {
      act.classList.remove('active');
    });
    // Add .active to clicked element
    el.classList.add('active');
  });
});

// Loading Animation
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-wrapper');

  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.transition = 'opacity 0.5s ease';

    // After fade-out duration, hide completely
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 2000);
});
// Animate timeline items on scroll
document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // 'show' class triggers fade-in
        observer.unobserve(entry.target);   // Stop observing once shown
      }
    });
  }, {
    threshold: 0.2
  });

  timelineItems.forEach(item => observer.observe(item));
});
