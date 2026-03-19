// Fishing Fun Game

const fishingGame = {
  arena: null,
  score: 0,
  lives: 3,
  maxLives: 3,
  isPlaying: false,
  fish: [],
  gameLoop: null,
  spawnInterval: null,
  difficulty: 1,
  hookY: 50,
  hookTargetY: 50,
  isCasting: false,
  isReeling: false,
  hasCatch: false,
  caughtFish: null,

  // Fish types
  fishTypes: [
    { id: 'blue', name: 'Blue Fish', color: '#42A5F5', accent: '#1E88E5', points: 10, speed: 2, size: 1 },
    { id: 'orange', name: 'Orange Fish', color: '#FF9800', accent: '#F57C00', points: 15, speed: 2.5, size: 1 },
    { id: 'green', name: 'Green Fish', color: '#66BB6A', accent: '#43A047', points: 20, speed: 3, size: 1 },
    { id: 'purple', name: 'Purple Fish', color: '#AB47BC', accent: '#8E24AA', points: 25, speed: 3.5, size: 1.1 },
    { id: 'golden', name: 'Golden Fish', color: '#FFD700', accent: '#FFA000', points: 50, speed: 4, size: 0.9, rare: true }
  ],

  init() {
    this.arena = document.querySelector('.fishing-arena');
    this.scoreDisplay = document.querySelector('.fishing-score');
    this.livesDisplay = document.querySelector('.fishing-lives');
    this.hook = document.querySelector('.fishing-hook');

    if (!this.arena) return;

    // Click anywhere to cast/reel
    this.arena.addEventListener('click', (e) => this.handleClick(e));

    // Touch support
    this.arena.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.handleClick(e.touches[0]);
    });

    // Start button
    const startBtn = document.querySelector('.fishing-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    // Restart button
    const restartBtn = document.querySelector('.fishing-restart-btn');
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
    this.fish = [];
    this.hookY = 50;
    this.hookTargetY = 50;
    this.isCasting = false;
    this.isReeling = false;
    this.hasCatch = false;
    this.caughtFish = null;

    // Clear arena
    this.arena.querySelectorAll('.fishing-fish, .score-popup, .splash').forEach(el => el.remove());

    // Reset hook position
    if (this.hook) {
      this.hook.style.bottom = '50px';
      this.hook.style.transform = 'rotate(0deg)';
    }

    // Hide overlays
    const startScreen = document.querySelector('.fishing-start-screen');
    if (startScreen) startScreen.classList.add('hidden');

    const gameOver = document.querySelector('.fishing-game-over');
    if (gameOver) gameOver.classList.remove('active');

    // Update displays
    this.updateScore();
    this.renderLives();

    // Start spawning fish
    this.spawnInterval = setInterval(() => this.spawnFish(), 1500);

    // Start game loop
    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  spawnFish() {
    if (!this.isPlaying || this.fish.length >= 5) return;

    // Rare chance for golden fish
    let type;
    if (Math.random() < 0.1) {
      type = this.fishTypes[4]; // Golden fish
    } else {
      type = this.fishTypes[Math.floor(Math.random() * 4)];
    }

    const arenaWidth = this.arena.offsetWidth;

    const fish = document.createElement('div');
    fish.className = 'fishing-fish';
    if (type.rare) fish.classList.add('rare');
    fish.dataset.points = type.points;
    fish.dataset.id = type.id;

    // Create fish SVG
    fish.innerHTML = this.createFishSVG(type.color, type.accent, type.rare);

    const side = Math.random() < 0.5 ? 'left' : 'right';
    const x = side === 'left' ? -60 : arenaWidth + 10;

    fish.style.left = x + 'px';
    fish.style.bottom = (60 + Math.random() * 200) + 'px';
    if (side === 'right') fish.style.transform = 'scaleX(-1)';

    this.arena.appendChild(fish);

    this.fish.push({
      element: fish,
      x: x,
      y: parseFloat(fish.style.bottom),
      speed: type.speed + (this.difficulty * 0.2),
      direction: side === 'left' ? 1 : -1,
      points: type.points,
      type: type.id,
      caught: false
    });
  },

  createFishSVG(color, accent, isRare) {
    const glow = isRare ? `<circle cx="30" cy="25" r="25" fill="none" stroke="#FFD700" stroke-width="2" opacity="0.6"/>` : '';
    return `
      <svg viewBox="0 0 70 50" xmlns="http://www.w3.org/2000/svg">
        ${glow}
        <ellipse cx="30" cy="25" rx="25" ry="18" fill="${color}" stroke="#2D1B4E" stroke-width="3"/>
        <polygon points="55,25 70,12 70,38" fill="${color}" stroke="#2D1B4E" stroke-width="3"/>
        <polygon points="20,10 30,0 40,10" fill="${accent}" stroke="#2D1B4E" stroke-width="2"/>
        <circle cx="15" cy="22" r="5" fill="#2D1B4E"/>
        <circle cx="13" cy="20" r="2" fill="#FFF"/>
        <ellipse cx="28" cy="30" rx="8" ry="5" fill="${accent}" opacity="0.5"/>
      </svg>
    `;
  },

  update() {
    if (!this.isPlaying) return;

    // Update hook position (smooth follow)
    const hookDiff = this.hookTargetY - this.hookY;
    this.hookY += hookDiff * 0.1;

    if (this.hook) {
      this.hook.style.bottom = this.hookY + 'px';
    }

    // Update fish positions
    const arenaWidth = this.arena.offsetWidth;

    for (let i = this.fish.length - 1; i >= 0; i--) {
      const f = this.fish[i];
      if (f.caught) continue;

      f.x += f.speed * f.direction;

      // Wrap around
      if (f.direction > 0 && f.x > arenaWidth + 70) {
        f.x = -70;
      } else if (f.direction < 0 && f.x < -70) {
        f.x = arenaWidth + 70;
      }

      f.element.style.left = f.x + 'px';

      // Animate fish bobbing
      const bob = Math.sin(Date.now() / 200 + i) * 3;
      f.element.style.bottom = (f.y + bob) + 'px';
    }

    // Increase difficulty
    if (this.score > 0 && this.score % 40 === 0) {
      this.difficulty = Math.min(5, this.difficulty + 0.2);
    }

    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  handleClick(e) {
    if (!this.isPlaying) return;

    const rect = this.arena.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const arenaHeight = this.arena.offsetHeight;

    if (!this.isCasting && !this.isReeling) {
      // Cast line
      this.isCasting = true;
      this.hookTargetY = arenaHeight - 80; // Cast to bottom area

      // Show splash
      this.showSplash(this.arena.offsetWidth / 2, arenaHeight - 60);

      // Play cast sound
      this.playCastSound();

      // Start waiting for fish
      setTimeout(() => {
        if (this.isPlaying && this.isCasting) {
          this.isCasting = false;
          this.isReeling = true;
        }
      }, 800);
    } else if (this.isReeling) {
      // Try to catch fish near hook
      const hookX = this.arena.offsetWidth / 2;

      for (let i = this.fish.length - 1; i >= 0; i--) {
        const f = this.fish[i];
        if (f.caught) continue;

        const fishX = f.x + 35;
        const fishY = f.y;

        const distance = Math.sqrt(
          Math.pow(hookX - fishX, 2) + Math.pow(this.hookY - fishY, 2)
        );

        if (distance < 60) {
          this.caughtFish = f;
          f.caught = true;
          f.element.classList.add('caught');

          // Add to score
          this.score += f.points;
          this.updateScore();

          // Show popup
          this.showPopup(f.points + '!', f.points);

          // Play catch sound
          this.playCatchSound(f.points >= 40);

          // Remove fish
          setTimeout(() => f.element.remove(), 500);
          this.fish.splice(i, 1);

          // Reset hook
          this.isReeling = false;
          this.hookTargetY = 50;
          this.hasCatch = false;

          // Lose a life for missing previous catch
          if (this.hasCatch === false && f.caught) {
            // Caught successfully
          }

          return;
        }
      }

      // Missed - no fish caught
      this.isReeling = false;
      this.hookTargetY = 50;

      // Lose life
      this.lives--;
      this.renderLives();
      this.playMissSound();

      if (this.lives <= 0) {
        this.gameOver();
      }
    }
  },

  showSplash(x, y) {
    const splash = document.createElement('div');
    splash.className = 'splash';
    splash.innerHTML = '💦';
    splash.style.left = x + 'px';
    splash.style.bottom = y + 'px';
    this.arena.appendChild(splash);
    setTimeout(() => splash.remove(), 800);
  },

  showPopup(text, points) {
    const popup = document.createElement('div');
    popup.className = 'score-popup';
    popup.textContent = '+' + points;
    popup.style.left = '50%';
    popup.style.bottom = (this.hookY + 80) + 'px';
    popup.style.color = points >= 40 ? '#FFD700' : 'var(--secondary)';
    popup.style.fontSize = points >= 40 ? '36px' : '28px';
    this.arena.appendChild(popup);
    setTimeout(() => popup.remove(), 1000);
  },

  gameOver() {
    this.isPlaying = false;
    clearInterval(this.spawnInterval);
    cancelAnimationFrame(this.gameLoop);

    // Show game over screen
    const gameOverEl = document.querySelector('.fishing-game-over');
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
      heart.className = 'fishing-heart' + (i >= this.lives ? ' lost' : '');
      heart.textContent = '❤️';
      this.livesDisplay.appendChild(heart);
    }
  },

  playCastSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.2);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
      osc.start();
      osc.stop(ctx.currentTime + 0.2);
    } catch (e) {}
  },

  playCatchSound(isRare) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = isRare ? [523, 659, 784, 1047] : [523, 659, 784];
      notes.forEach((freq, i) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.25, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
          osc.start();
          osc.stop(ctx.currentTime + 0.25);
        }, i * 100);
      });
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
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.4);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
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
  fishingGame.init();
});
