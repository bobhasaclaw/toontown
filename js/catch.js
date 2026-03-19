// Catch the Stars Game

const catchGame = {
  arena: null,
  character: null,
  score: 0,
  lives: 3,
  maxLives: 3,
  isPlaying: false,
  stars: [],
  gameLoop: null,
  spawnInterval: null,
  difficulty: 1,
  maxStars: 10,

  // Star types with different point values
  starTypes: [
    { emoji: '⭐', points: 10, speed: 2 },
    { emoji: '🌟', points: 20, speed: 2.5 },
    { emoji: '✨', points: 15, speed: 1.8 }
  ],

  init() {
    this.arena = document.querySelector('.catch-arena');
    this.character = document.querySelector('.catch-character');
    this.scoreDisplay = document.querySelector('.catch-score');
    this.livesDisplay = document.querySelector('.catch-lives');

    if (!this.arena) return;

    // Mouse/touch controls for character
    this.arena.addEventListener('mousemove', (e) => this.moveCharacter(e));
    this.arena.addEventListener('touchmove', (e) => {
      e.preventDefault();
      this.moveCharacter(e.touches[0]);
    });

    // Click/tap to catch stars
    this.arena.addEventListener('click', (e) => this.handleClick(e));
    this.arena.addEventListener('touchstart', (e) => {
      this.handleClick(e.touches[0]);
    });

    // Start button
    const startBtn = document.querySelector('.catch-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    // Restart button
    const restartBtn = document.querySelector('.catch-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => this.startGame());
    }

    // Initialize lives display
    this.renderLives();
  },

  moveCharacter(e) {
    if (!this.isPlaying || !this.arena) return;

    const rect = this.arena.getBoundingClientRect();
    let x = e.clientX - rect.left;

    // Keep character within bounds
    const charWidth = 80;
    x = Math.max(charWidth / 2, Math.min(rect.width - charWidth / 2, x));

    this.character.style.left = x + 'px';
    this.character.style.transform = 'translateX(-50%)';
  },

  handleClick(e) {
    if (!this.isPlaying) return;

    const rect = this.arena.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Check if clicked on a star
    for (let i = this.stars.length - 1; i >= 0; i--) {
      const star = this.stars[i];
      const starRect = star.element.getBoundingClientRect();
      const starX = starRect.left + starRect.width / 2 - rect.left;
      const starY = starRect.top + starRect.height / 2 - rect.top;

      const distance = Math.sqrt(
        Math.pow(clickX - starX, 2) + Math.pow(clickY - starY, 2)
      );

      if (distance < 40) {
        this.catchStar(star, i);
        return;
      }
    }
  },

  startGame() {
    // Reset state
    this.score = 0;
    this.lives = this.maxLives;
    this.difficulty = 1;
    this.isPlaying = true;
    this.stars = [];

    // Clear arena
    this.arena.querySelectorAll('.catch-star, .score-popup, .catch-miss').forEach(el => el.remove());

    // Hide overlays
    const startScreen = document.querySelector('.catch-start-screen');
    if (startScreen) startScreen.classList.add('hidden');

    const gameOver = document.querySelector('.catch-game-over');
    if (gameOver) gameOver.classList.remove('active');

    // Update displays
    this.updateScore();
    this.renderLives();

    // Start spawning stars
    this.spawnInterval = setInterval(() => this.spawnStar(), 1000);

    // Start game loop
    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  spawnStar() {
    if (!this.isPlaying || this.stars.length >= this.maxStars) return;

    const type = this.starTypes[Math.floor(Math.random() * this.starTypes.length)];
    const arenaWidth = this.arena.offsetWidth;

    const star = document.createElement('div');
    star.className = 'catch-star';
    star.textContent = type.emoji;
    star.style.left = (Math.random() * (arenaWidth - 60) + 30) + 'px';
    star.style.top = '-50px';

    this.arena.appendChild(star);

    this.stars.push({
      element: star,
      x: parseFloat(star.style.left),
      y: -50,
      speed: type.speed + (this.difficulty * 0.3),
      points: type.points
    });
  },

  update() {
    if (!this.isPlaying) return;

    const arenaHeight = this.arena.offsetHeight;

    for (let i = this.stars.length - 1; i >= 0; i--) {
      const star = this.stars[i];
      star.y += star.speed;
      star.element.style.top = star.y + 'px';

      // Check if star hit bottom
      if (star.y > arenaHeight - 60) {
        this.missStar(star, i);
      }
    }

    // Increase difficulty over time
    if (this.score > 0 && this.score % 50 === 0) {
      this.difficulty = Math.min(5, this.difficulty + 0.5);
    }

    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  catchStar(star, index) {
    // Show score popup
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.textContent = '+' + star.points;
    popup.style.left = star.element.style.left;
    popup.style.top = star.element.style.top;
    this.arena.appendChild(popup);

    // Play catch sound
    this.playCatchSound();

    // Animate and remove star
    star.element.classList.add('sparkle');
    setTimeout(() => star.element.remove(), 500);

    // Update score
    this.score += star.points;
    this.updateScore();

    // Remove from array
    this.stars.splice(index, 1);

    // Remove popup
    setTimeout(() => popup.remove(), 1000);
  },

  missStar(star, index) {
    // Show miss indicator
    const miss = document.createElement('div');
    miss.className = 'catch-miss';
    miss.textContent = '💔';
    miss.style.left = star.element.style.left;
    this.arena.appendChild(miss);
    setTimeout(() => miss.remove(), 1000);

    // Play miss sound
    this.playMissSound();

    // Remove star
    star.element.remove();
    this.stars.splice(index, 1);

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
    const gameOverEl = document.querySelector('.catch-game-over');
    if (gameOverEl) {
      gameOverEl.classList.add('active');
      gameOverEl.querySelector('.final-score').textContent =
        'You caught ' + this.score + ' points!';
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
      heart.className = 'catch-heart' + (i >= this.lives ? ' lost' : '');
      heart.textContent = '❤️';
      this.livesDisplay.appendChild(heart);
    }
  },

  playCatchSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch (e) {}
  },

  playMissSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
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
  catchGame.init();
});
