// Bubble Pop Game

const bubbleGame = {
  arena: null,
  score: 0,
  lives: 3,
  maxLives: 3,
  isPlaying: false,
  bubbles: [],
  gameLoop: null,
  spawnInterval: null,
  difficulty: 1,

  // Characters in bubbles
  characters: ['🎭', '🎨', '🎯', '🎪', '🎢', '🎠', '🌈', '⭐'],

  // Bubble colors
  bubbleColors: [
    { bg: 'rgba(255, 107, 157, 0.4)', border: '#FF6B9D' },
    { bg: 'rgba(124, 77, 255, 0.4)', border: '#7C4DFF' },
    { bg: 'rgba(0, 229, 255, 0.4)', border: '#00E5FF' },
    { bg: 'rgba(255, 215, 64, 0.4)', border: '#FFD740' },
    { bg: 'rgba(129, 199, 132, 0.4)', border: '#81C784' },
    { bg: 'rgba(255, 167, 38, 0.4)', border: '#FFA726' }
  ],

  init() {
    this.arena = document.querySelector('.bubble-arena');
    if (!this.arena) return;

    // Click/tap to pop bubbles
    this.arena.addEventListener('click', (e) => this.handleClick(e));
    this.arena.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.handleClick(e.touches[0]);
    });

    // Start button
    const startBtn = document.querySelector('.bubble-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    // Restart button
    const restartBtn = document.querySelector('.bubble-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => this.startGame());
    }

    this.renderLives();
  },

  handleClick(e) {
    if (!this.isPlaying) return;

    const rect = this.arena.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Check if clicked on a bubble
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const bubble = this.bubbles[i];
      const bubbleRect = bubble.element.getBoundingClientRect();
      const bubbleX = bubbleRect.left + bubbleRect.width / 2 - rect.left;
      const bubbleY = bubbleRect.top + bubbleRect.height / 2 - rect.top;

      const distance = Math.sqrt(
        Math.pow(clickX - bubbleX, 2) + Math.pow(clickY - bubbleY, 2)
      );

      const radius = bubbleRect.width / 2;
      if (distance < radius) {
        this.popBubble(bubble, i);
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
    this.bubbles = [];

    // Clear arena
    this.arena.querySelectorAll('.bubble, .bubble-score-popup').forEach(el => el.remove());

    // Hide overlays
    document.querySelector('.bubble-start-screen').classList.add('hidden');
    document.querySelector('.bubble-game-over').classList.remove('active');

    // Update displays
    this.updateScore();
    this.renderLives();

    // Start spawning bubbles
    this.spawnInterval = setInterval(() => this.spawnBubble(), 1200);

    // Start game loop
    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  spawnBubble() {
    if (!this.isPlaying) return;

    const color = this.bubbleColors[Math.floor(Math.random() * this.bubbleColors.length)];
    const character = this.characters[Math.floor(Math.random() * this.characters.length)];
    const arenaWidth = this.arena.offsetWidth;
    const size = 70 + Math.random() * 30;

    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.width = size + 'px';
    bubble.style.height = size + 'px';
    bubble.style.background = color.bg;
    bubble.style.border = `3px solid ${color.border}`;
    bubble.style.left = (Math.random() * (arenaWidth - size - 20) + 10) + 'px';
    bubble.style.bottom = '-' + size + 'px';

    const charSpan = document.createElement('span');
    charSpan.className = 'bubble-character';
    charSpan.textContent = character;
    bubble.appendChild(charSpan);

    this.arena.appendChild(bubble);

    this.bubbles.push({
      element: bubble,
      x: parseFloat(bubble.style.left),
      y: -size,
      speed: 1.5 + Math.random() * 1 + (this.difficulty * 0.2),
      character: character
    });
  },

  update() {
    if (!this.isPlaying) return;

    const arenaHeight = this.arena.offsetHeight;

    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const bubble = this.bubbles[i];
      bubble.y += bubble.speed;
      bubble.element.style.bottom = bubble.y + 'px';

      // Add floating animation variation
      const wobble = Math.sin(bubble.y / 30) * 3;
      bubble.element.style.left = (bubble.x + wobble) + 'px';

      // Check if bubble escaped
      if (bubble.y > arenaHeight + 80) {
        this.missBubble(bubble, i);
      }
    }

    // Increase difficulty over time
    if (this.score > 0 && this.score % 30 === 0) {
      this.difficulty = Math.min(5, this.difficulty + 0.3);
    }

    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  popBubble(bubble, index) {
    // Show score popup
    const popup = document.createElement('div');
    popup.className = 'bubble-score-popup';
    popup.textContent = '+10';
    popup.style.left = bubble.element.style.left;
    popup.style.bottom = bubble.y + 'px';
    this.arena.appendChild(popup);

    // Play pop sound
    this.playPopSound();

    // Animate and remove bubble
    bubble.element.classList.add('popped');
    setTimeout(() => bubble.element.remove(), 300);

    // Update score
    this.score += 10;
    this.updateScore();

    // Remove from array
    this.bubbles.splice(index, 1);

    // Remove popup
    setTimeout(() => popup.remove(), 1000);
  },

  missBubble(bubble, index) {
    // Lose life
    this.lives--;
    this.renderLives();

    // Remove bubble
    bubble.element.remove();
    this.bubbles.splice(index, 1);

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
    const gameOverEl = document.querySelector('.bubble-game-over');
    gameOverEl.classList.add('active');
    gameOverEl.querySelector('.final-score').textContent =
      'You popped ' + this.score + ' bubbles!';

    this.playGameOverSound();
  },

  updateScore() {
    const scoreDisplay = document.querySelector('.bubble-score');
    if (scoreDisplay) {
      scoreDisplay.textContent = this.score;
    }
  },

  renderLives() {
    const livesDisplay = document.querySelector('.bubble-lives');
    if (!livesDisplay) return;

    livesDisplay.innerHTML = '';
    for (let i = 0; i < this.maxLives; i++) {
      const heart = document.createElement('span');
      heart.className = 'bubble-heart' + (i >= this.lives ? ' lost' : '');
      heart.textContent = '💖';
      livesDisplay.appendChild(heart);
    }
  },

  playPopSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
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
  bubbleGame.init();
});
