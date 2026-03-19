// Balloon Pop Game

const balloonGame = {
  arena: null,
  score: 0,
  lives: 3,
  maxLives: 3,
  isPlaying: false,
  balloons: [],
  gameLoop: null,
  spawnInterval: null,
  difficulty: 1,
  maxBalloons: 12,

  // Balloon types with different colors and points
  balloonTypes: [
    { color: '#FF6B9D', accent: '#ff4081', points: 10, speed: 1.2 },
    { color: '#7C4DFF', accent: '#651fff', points: 15, speed: 1.5 },
    { color: '#FFD740', accent: '#ffab00', points: 20, speed: 1.8 },
    { color: '#00E5FF', accent: '#00b8d4', points: 25, speed: 2.0 },
    { color: '#69F0AE', accent: '#00e676', points: 30, speed: 2.2 }
  ],

  init() {
    this.arena = document.querySelector('.balloon-arena');
    this.scoreDisplay = document.querySelector('.balloon-score');
    this.livesDisplay = document.querySelector('.balloon-lives');

    if (!this.arena) return;

    // Click to pop balloons
    this.arena.addEventListener('click', (e) => this.handleClick(e));

    // Start button
    const startBtn = document.querySelector('.balloon-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    // Restart button
    const restartBtn = document.querySelector('.balloon-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => this.startGame());
    }

    // Initialize lives display
    this.renderLives();
  },

  startGame() {
    // Reset state
    this.score = 0;
    this.lives = this.maxLives;
    this.difficulty = 1;
    this.isPlaying = true;
    this.balloons = [];

    // Clear arena
    this.arena.querySelectorAll('.balloon, .score-popup, .balloon-miss').forEach(el => el.remove());

    // Hide overlays
    const startScreen = document.querySelector('.balloon-start-screen');
    if (startScreen) startScreen.classList.add('hidden');

    const gameOver = document.querySelector('.balloon-game-over');
    if (gameOver) gameOver.classList.remove('active');

    // Update displays
    this.updateScore();
    this.renderLives();

    // Start spawning balloons
    this.spawnInterval = setInterval(() => this.spawnBalloon(), 1200);

    // Start game loop
    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  spawnBalloon() {
    if (!this.isPlaying || this.balloons.length >= this.maxBalloons) return;

    const type = this.balloonTypes[Math.floor(Math.random() * this.balloonTypes.length)];
    const arenaWidth = this.arena.offsetWidth;

    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.dataset.points = type.points;

    // Create balloon SVG
    balloon.innerHTML = this.createBalloonSVG(type.color, type.accent);

    const x = Math.random() * (arenaWidth - 80) + 40;
    balloon.style.left = x + 'px';
    balloon.style.bottom = '-100px';

    this.arena.appendChild(balloon);

    this.balloons.push({
      element: balloon,
      x: x,
      y: -100,
      speed: type.speed + (this.difficulty * 0.15),
      points: type.points,
      wobble: Math.random() * Math.PI * 2
    });
  },

  createBalloonSVG(color, accent) {
    return `
      <svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="shine-${color.replace('#', '')}" cx="30%" cy="30%">
            <stop offset="0%" stop-color="rgba(255,255,255,0.8)"/>
            <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
          </radialGradient>
        </defs>
        <ellipse cx="40" cy="45" rx="35" ry="42" fill="${color}" stroke="#2D1B4E" stroke-width="3"/>
        <ellipse cx="28" cy="30" rx="12" ry="18" fill="url(#shine-${color.replace('#', '')})"/>
        <polygon points="40,87 35,95 45,95" fill="${accent}" stroke="#2D1B4E" stroke-width="2"/>
        <path d="M 40 95 Q 42 105 38 115 Q 45 110 42 100 Q 48 108 40 95" fill="none" stroke="#2D1B4E" stroke-width="2"/>
      </svg>
    `;
  },

  update() {
    if (!this.isPlaying) return;

    const arenaHeight = this.arena.offsetHeight;

    for (let i = this.balloons.length - 1; i >= 0; i--) {
      const balloon = this.balloons[i];

      // Move upward
      balloon.y -= balloon.speed;
      balloon.wobble += 0.05;

      // Wobble effect
      const wobbleX = Math.sin(balloon.wobble) * 3;
      balloon.element.style.bottom = balloon.y + 'px';
      balloon.element.style.transform = `translateX(${wobbleX}px) rotate(${Math.sin(balloon.wobble) * 5}deg)`;

      // Check if balloon escaped
      if (balloon.y > arenaHeight + 50) {
        this.missBalloon(balloon, i);
      }
    }

    // Increase difficulty over time
    if (this.score > 0 && this.score % 50 === 0) {
      this.difficulty = Math.min(5, this.difficulty + 0.3);
    }

    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  handleClick(e) {
    if (!this.isPlaying) return;

    const rect = this.arena.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Check if clicked on a balloon
    for (let i = this.balloons.length - 1; i >= 0; i--) {
      const balloon = this.balloons[i];
      const balloonRect = balloon.element.getBoundingClientRect();
      const balloonX = balloonRect.left + balloonRect.width / 2 - rect.left;
      const balloonY = balloonRect.top + balloonRect.height / 2 - rect.top;

      const distance = Math.sqrt(
        Math.pow(clickX - balloonX, 2) + Math.pow(clickY - balloonY, 2)
      );

      if (distance < 50) {
        this.popBalloon(balloon, i);
        return;
      }
    }
  },

  popBalloon(balloon, index) {
    // Show score popup
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.textContent = '+' + balloon.points;
    popup.style.left = balloon.element.style.left;
    popup.style.bottom = (parseFloat(balloon.element.style.bottom) + 50) + 'px';
    this.arena.appendChild(popup);

    // Play pop sound
    this.playPopSound(balloon.points);

    // Animate pop
    balloon.element.classList.add('popped');
    balloon.element.style.transform = 'scale(1.3)';
    balloon.element.style.opacity = '0';

    setTimeout(() => balloon.element.remove(), 300);

    // Update score
    this.score += balloon.points;
    this.updateScore();

    // Remove from array
    this.balloons.splice(index, 1);

    // Remove popup
    setTimeout(() => popup.remove(), 1000);
  },

  missBalloon(balloon, index) {
    // Show miss indicator
    const miss = document.createElement('div');
    miss.className = 'balloon-miss';
    miss.textContent = '💨';
    miss.style.left = balloon.element.style.left;
    miss.style.bottom = (parseFloat(balloon.element.style.bottom) + 20) + 'px';
    this.arena.appendChild(miss);
    setTimeout(() => miss.remove(), 1000);

    // Play miss sound
    this.playMissSound();

    // Remove balloon
    balloon.element.remove();
    this.balloons.splice(index, 1);

    // Lose life
    this.lives--;
    this.renderLives();

    // Check game over
    if (this.lives <= 0) {
      this.gameOver();
    }
  },

  gameOver() {
    this.isPlaying = false;
    clearInterval(this.spawnInterval);
    cancelAnimationFrame(this.gameLoop);

    // Show game over screen
    const gameOverEl = document.querySelector('.balloon-game-over');
    if (gameOverEl) {
      gameOverEl.classList.add('active');
      gameOverEl.querySelector('.final-score').textContent =
        'You popped ' + this.score + ' points!';
    }

    // Play game over sound
    this.playGameOverSound();
  },

  updateScore() {
    if (this.scoreDisplay) {
      this.scoreDisplay.textContent = this.score;
    }
  },

  renderLives() {
    if (!this.livesDisplay) return;

    this.livesDisplay.innerHTML = '';
    for (let i = 0; i < this.maxLives; i++) {
      const heart = document.createElement('span');
      heart.className = 'balloon-heart' + (i >= this.lives ? ' lost' : '');
      heart.textContent = '❤️';
      this.livesDisplay.appendChild(heart);
    }
  },

  playPopSound(points) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(800 + points * 10, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
  },

  playMissSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(400, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } catch (e) {}
  },

  playGameOverSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [392, 330, 262];
      notes.forEach((freq, i) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.3, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
          osc.start();
          osc.stop(ctx.currentTime + 0.4);
        }, i * 200);
      });
    } catch (e) {}
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  balloonGame.init();
});
