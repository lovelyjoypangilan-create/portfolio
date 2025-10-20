// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // ===== Contact Form Validation =====
  const contactForm = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !message) {
        formMsg.style.color = '#e63946';
        formMsg.textContent = '⚠️ Please fill out all fields.';
        return;
      }
  
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        formMsg.style.color = '#e63946';
        formMsg.textContent = '⚠️ Invalid email address.';
        return;
      }
  
      formMsg.style.color = '#0077cc';
      formMsg.textContent = '✅ Message ready to send (demo only)';
      contactForm.reset();
    });
  }
  
  // ===== Fade-In Animation =====
  const fadeElements = document.querySelectorAll('.section, .profile-card');
  function revealOnScroll() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'all 0.8s ease-out';
      }
    });
  }
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  // ===== Labs Section: Clickable Animated Cards =====
  const labsContainer = document.getElementById('labs');
  if (labsContainer) {
    const labs = [
        { title: 'Lab 1', desc: 'HTML', link: 'lab1.1.html' },
      { title: 'Lab 2', desc: 'CSS', link: 'lab1.html' },
      { title: 'Lab 3', desc: 'JAVA SCRIPT', link: 'lab2.html' },
      { title: 'Lab 4', desc: 'HTML.JS', link: 'lab3.html' },
      { title: 'Lab 5', desc: 'Optimization', link: 'lab4.html' }
    ];
  
    const grid = document.createElement('div');
    grid.classList.add('labs-grid');
  
    labs.forEach(lab => {
      const card = document.createElement('a');
      card.classList.add('lab-card');
      card.href = lab.link;
      card.target = '_blank';
      card.innerHTML = `<h3>${lab.title}</h3><p>${lab.desc}</p>`;
      grid.appendChild(card);
    });
  
    labsContainer.appendChild(grid);
  }
  