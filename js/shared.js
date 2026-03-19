/* ToonTown Express - Shared JavaScript */

// Mobile menu toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Confetti effect
function createConfetti(x, y) {
  const colors = ['#FF6B9D', '#7C4DFF', '#00E5FF', '#FFD740', '#FF4081'];
  const shapes = ['●', '■', '▲', '★'];

  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.fontSize = (Math.random() * 15 + 10) + 'px';
    confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
    confetti.style.animationDelay = (Math.random() * 0.5) + 's';

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 200 + 100;
    const endX = Math.cos(angle) * velocity;
    const endY = Math.sin(angle) * velocity + 300;

    confetti.animate([
      { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${endX}px, ${endY}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
    ], {
      duration: 3000 + Math.random() * 2000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 5000);
  }
}

// Click anywhere to trigger confetti (except nav and forms)
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav') && !e.target.closest('form')) {
    createConfetti(e.clientX, e.clientY);
  }
});

// Form submission
function handleSubmit(e) {
  e.preventDefault();
  createConfetti(window.innerWidth / 2, window.innerHeight / 2);
  alert('Thanks for your message! We\'ll get back to you soon! 🎉');
  e.target.reset();
}

// Drag to scroll gallery (only on pages that have it)
const gallery = document.querySelector('.gallery-track');
if (gallery) {
  let isDown = false;
  let startX;
  let scrollLeft;

  gallery.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
  });

  gallery.addEventListener('mouseleave', () => isDown = false);
  gallery.addEventListener('mouseup', () => isDown = false);

  gallery.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const walk = (x - startX) * 2;
    gallery.scrollLeft = scrollLeft - walk;
  });
}
