/* Sections fade in as you scroll to them */

// 1. Give every <section> the "reveal" class automatically
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
  section.classList.add('reveal');
});

// 2. Watch for when each section enters the screen
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });   // trigger when 15% of the section is visible

sections.forEach((section) => {
  observer.observe(section);
});