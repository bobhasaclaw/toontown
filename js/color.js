// Color Match Game

const colorGame = {
  arena: null,
  score: 0,
  lives: 3,
  maxLives: 3,
  isPlaying: false,
  shapes: [],
  gameLoop: null,
  spawnInterval: null,
  difficulty: 1,
  maxShapes: 8,

  // Shape types - using character colors
  shapeTypes: [
    { shape: 'circle', color: '#FF6B9D', colorName: 'pink' },
    { shape: 'square', color: '#7C4DFF', colorName: 'purple' },
    { shape: 'triangle', color: '#FFD740', colorName: 'yellow' },
    { shape: 'diamond', color: '#00E5FF', colorName: 'blue' }
  ],

  init() {
    this.arena = document.querySelector('.color-arena');
    this.scoreDisplay = document.querySelector('.color-score');
    this.livesDisplay = document.querySelector('.color-lives');

    if (!this.arena) return;

    // Click to select shapes
    this.arena.addEventListener('click', (e) => this.handleClick(e));

    // Start button
    const startBtn = document.querySelector('.color-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    // Restart button
    const restartBtn = document.querySelector('.color-restart-btn');
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
    this.shapes = [];

    // Clear arena
    this.arena.querySelectorAll('.color-shape, .score-popup, .color-wrong').forEach(el => el.remove());

    // Hide overlays
    const startScreen = document.querySelector('.color-start-screen');
    if (startScreen) startScreen.classList.add('hidden');

    const gameOver = document.querySelector('.color-game-over');
    if (gameOver) gameOver.classList.remove('active');

    // Update displays
    this.updateScore();
    this.renderLives();

    // Start spawning shapes
    this.spawnInterval = setInterval(() => this.spawnShape(), 1500);

    // Start game loop
    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  spawnShape() {
    if (!this.isPlaying || this.shapes.length >= this.maxShapes) return;

    const type = this.shapeTypes[Math.floor(Math.random() * this.shapeTypes.length)];
    const arenaWidth = this.arena.offsetWidth;

    const shape = document.createElement('div');
    shape.className = 'color-shape';
    shape.dataset.color = type.colorName;

    // Create shape SVG
    const svg = this.createShapeSVG(type.shape, type.color);
    shape.innerHTML = svg;

    const x = Math.random() * (arenaWidth - 80) + 40;
    shape.style.left = x + 'px';
    shape.style.top = '-80px';

    this.arena.appendChild(shape);

    this.shapes.push({
      element: shape,
      x: x,
      y: -80,
      speed: 1.5 + (this.difficulty * 0.2),
      color: type.colorName
    });
  },

  createShapeSVG(shape, color) {
    let svg = '';
    switch(shape) {
      case 'circle':
        svg = `<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" fill="${color}" stroke="#2D1B4E" stroke-width="3"/></svg>`;
        break;
      case 'square':
        svg = `<svg viewBox="0 0 60 60"><rect x="4" y="4" width="52" height="52" rx="8" fill="${color}" stroke="#2D1B4E" stroke-width="3"/></svg>`;
        break;
      case 'triangle':
        svg = `<svg viewBox="0 0 60 60"><polygon points="30,4 58,56 2,56" fill="${color}" stroke="#2D1B4E" stroke-width="3"/></svg>`;
        break;
      case 'diamond':
        svg = `<svg viewBox="0 0 60 60"><polygon points="30,2 58,30 30,58 2,30" fill="${color}" stroke="#2D1B4E" stroke-width="3"/></svg>`;
        break;
    }
    return svg;
  },

  update() {
    if (!this.isPlaying) return;

    const arenaHeight = this.arena.offsetHeight;

    for (let i = this.shapes.length - 1; i >= 0; i--) {
      const shape = this.shapes[i];
      shape.y += shape.speed;
      shape.element.style.top = shape.y + 'px';

      // Check if shape hit bottom
      if (shape.y > arenaHeight - 60) {
        this.missShape(shape, i);
      }
    }

    // Increase difficulty over time
    if (this.score > 0 && this.score % 30 === 0) {
      this.difficulty = Math.min(5, this.difficulty + 0.3);
    }

    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  handleClick(e) {
    if (!this.isPlaying) return;

    const target = e.target.closest('.color-shape');
    if (!target) return;

    const colorName = target.dataset.color;
    const index = this.shapes.findIndex(s => s.element === target);

    if (index === -1) return;

    // Check if this is the right color (find first shape of target color)
    const targetColorShapes = this.shapes.filter(s => s.color === colorName);
    if (targetColorShapes.length > 0 && colorName === targetColorShapes[0].color) {
      this.catchShape(targetColorShapes[0], index);
    } else {
      this.wrongShape(target, index);
    }
  },

  catchShape(shape, index) {
    // Show score popup
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.textContent = '+10';
    popup.style.left = shape.element.style.left;
    popup.style.top = shape.y + 'px';
    this.arena.appendChild(popup);

    // Play catch sound
    this.playCatchSound();

    // Animate and remove shape
    shape.element.classList.add('sparkle');
    setTimeout(() => shape.element.remove(), 500);

    // Update score
    this.score += 10;
    this.updateScore();

    // Remove from array
    this.shapes.splice(index, 1);

    // Remove popup
    setTimeout(() => popup.remove(), 1000);
  },

  wrongShape(element, index) {
    // Show wrong indicator
    const wrong = document.createElement('div');
    wrong.className = 'color-wrong';
    wrong.textContent = '❌';
    wrong.style.left = element.style.left;
    wrong.style.top = element.style.top;
    this.arena.appendChild(wrong);
    setTimeout(() => wrong.remove(), 500);

    // Play wrong sound
    this.playWrongSound();

    // Remove shape
    element.remove();
    this.shapes.splice(index, 1);

    // Lose life
    this.lives--;
    this.renderLives();

    // Check game over
    if (this.lives <= 0) {
      this.gameOver();
    }
  },

  missShape(shape, index) {
    // Show miss indicator
    const miss = document.createElement('div');
    miss.className = 'color-wrong';
    miss.textContent = '💔';
    miss.style.left = shape.element.style.left;
    this.arena.appendChild(miss);
    setTimeout(() => miss.remove(), 1000);

    // Play miss sound
    this.playMissSound();

    // Remove shape
    shape.element.remove();
    this.shapes.splice(index, 1);

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
    const gameOverEl = document.querySelector('.color-game-over');
    if (gameOverEl) {
      gameOverEl.classList.add('active');
      gameOverEl.querySelector('.final-score').textContent =
        'You matched ' + this.score + ' colors!';
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
      heart.className = 'color-heart' + (i >= this.lives ? ' lost' : '');
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
      osc.frequency.setValueAtTime(659, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(988, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch (e) {}
  },

  playWrongSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
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
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
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
  colorGame.init();
});
