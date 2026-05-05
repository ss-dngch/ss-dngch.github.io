  // Generate pixel stars
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 40; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (1.5 + Math.random() * 2) + 's';
    star.style.opacity = Math.random() * 0.8 + 0.2;
    const size = Math.random() > 0.7 ? '6px' : '3px';
    star.style.width = size;
    star.style.height = size;
    starsContainer.appendChild(star);
  }

    // Pixel decorations
    const colors = ['var(--accent)', 'var(--accent2)', 'var(--accent3)'];
    for (let i = 0; i < 8; i++) {
    const deco = document.createElement('div');
    deco.className = 'pixel-deco';
    deco.style.left = Math.random() * 100 + 'vw';
    deco.style.top = Math.random() * 300 + 'vh';
    deco.style.background = colors[Math.floor(Math.random() * colors.length)];
    deco.style.animationDelay = Math.random() * 4 + 's';
    deco.style.animationDuration = (3 + Math.random() * 3) + 's';
    document.body.appendChild(deco);
  }

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 80);
            }
        });
  }, {threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Smooth nav active state
    const sections = document.querySelectorAll('section[id], div[id="home"]');
    const navLinks = document.querySelectorAll('nav a');

  window.addEventListener('scroll', () => {
        let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
    });
    navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    link.style.opacity = link.getAttribute('href') === '#' + current ? '1' : '';
    });
  });

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});