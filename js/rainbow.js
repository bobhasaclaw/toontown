// Rainbow Race Game

const rainbowGame = {
  canvas: null,
  ctx: null,
  score: 0,
  lives: 3,
  maxLives: 3,
  isPlaying: false,
  gameLoop: null,
  speed: 5,
  gravity: 0.6,
  jumpForce: -14,
  groundY: 0,
  player: null,
  obstacles: [],
  stars: [],
  particles: [],

  init() {
    this.canvas = document.querySelector('.rainbow-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.scoreDisplay = document.querySelector('.rainbow-score');
    this.livesDisplay = document.querySelector('.rainbow-lives');

    if (!this.canvas || !this.ctx) return;

    // Set canvas size
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Calculate ground position
    this.groundY = this.canvas.height - 100;

    // Player
    this.player = {
      x: 100,
      y: this.groundY,
      width: 60,
      height: 70,
      velocityY: 0,
      isJumping: false,
      frame: 0,
      frameTimer: 0
    };

    // Click/touch to jump
    this.canvas.addEventListener('click', () => this.jump());
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.jump();
    });

    // Start button
    const startBtn = document.querySelector('.rainbow-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    // Restart button
    const restartBtn = document.querySelector('.rainbow-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => this.startGame());
    }

    // Initialize lives display
    this.renderLives();
  },

  resizeCanvas() {
    if (!this.canvas) return;
    const container = this.canvas.parentElement;
    this.canvas.width = Math.min(600, container.offsetWidth - 4);
    this.canvas.height = 400;
  },

  startGame() {
    // Reset state
    this.score = 0;
    this.lives = this.maxLives;
    this.isPlaying = true;
    this.speed = 5;
    this.obstacles = [];
    this.stars = [];
    this.particles = [];

    // Reset player
    this.player.y = this.groundY;
    this.player.velocityY = 0;
    this.player.isJumping = false;

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Hide overlays
    const startScreen = document.querySelector('.rainbow-start-screen');
    if (startScreen) startScreen.classList.add('hidden');

    const gameOver = document.querySelector('.rainbow-game-over');
    if (gameOver) gameOver.classList.remove('active');

    // Update displays
    this.updateScore();
    this.renderLives();

    // Start spawning obstacles and stars
    this.spawnTimer = setInterval(() => this.spawn(), 2000);
    this.starTimer = setInterval(() => this.spawnStar(), 1500);

    // Start game loop
    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  jump() {
    if (!this.isPlaying) return;

    if (!this.player.isJumping) {
      this.player.velocityY = this.jumpForce;
      this.player.isJumping = true;
      this.playJumpSound();
    }
  },

  spawn() {
    if (!this.isPlaying) return;

    const types = ['gap', 'rock', 'spike'];
    const type = types[Math.floor(Math.random() * types.length)];

    this.obstacles.push({
      x: this.canvas.width + 50,
      type: type,
      width: type === 'gap' ? 80 : 50,
      height: type === 'gap' ? 20 : type === 'rock' ? 40 : 30,
      color: type === 'spike' ? '#E53935' : '#7C4DFF'
    });
  },

  spawnStar() {
    if (!this.isPlaying) return;

    this.stars.push({
      x: this.canvas.width + 50,
      y: 150 + Math.random() * 100,
      collected: false,
      size: 30
    });
  },

  update() {
    if (!this.isPlaying) return;

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw background (rainbow gradient sky)
    const skyGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    skyGradient.addColorStop(0, '#E1BEE7');
    skyGradient.addColorStop(0.3, '#B39DDB');
    skyGradient.addColorStop(0.6, '#81D4FA');
    skyGradient.addColorStop(1, '#A5D6A7');
    this.ctx.fillStyle = skyGradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw rainbow road
    this.drawRoad();

    // Update and draw particles
    this.updateParticles();

    // Update player
    this.updatePlayer();

    // Update obstacles
    this.updateObstacles();

    // Update stars
    this.updateStars();

    // Increase speed over time
    if (this.score > 0 && this.score % 20 === 0) {
      this.speed = Math.min(12, this.speed + 0.2);
    }

    this.gameLoop = requestAnimationFrame(() => this.update());
  },

  drawRoad() {
    // Main ground (rainbow stripes)
    const stripeHeight = 20;
    const colors = ['#FF6B6B', '#FFA94D', '#FFE066', '#69DB7C', '#4DABF7', '#9775FA'];

    for (let i = 0; i < 6; i++) {
      this.ctx.fillStyle = colors[i];
      this.ctx.fillRect(0, this.groundY + i * stripeHeight, this.canvas.width, stripeHeight);
    }

    // Border
    this.ctx.fillStyle = '#2D1B4E';
    this.ctx.fillRect(0, this.groundY - 4, this.canvas.width, 4);
  },

  updatePlayer() {
    const p = this.player;

    // Apply gravity
    p.velocityY += this.gravity;
    p.y += p.velocityY;

    // Land on ground
    if (p.y >= this.groundY) {
      p.y = this.groundY;
      p.velocityY = 0;
      p.isJumping = false;
    }

    // Animate frame
    p.frameTimer++;
    if (p.frameTimer > 8) {
      p.frame = (p.frame + 1) % 4;
      p.frameTimer = 0;
    }

    // Draw player (running character)
    this.drawPlayer();
  },

  drawPlayer() {
    const p = this.player;
    const bounce = p.isJumping ? 0 : Math.sin(p.frame * Math.PI / 2) * 3;

    this.ctx.save();
    this.ctx.translate(p.x + p.width / 2, p.y - p.height / 2 + bounce);

    // Body
    this.ctx.fillStyle = '#FF6B9D';
    this.ctx.beginPath();
    this.ctx.ellipse(0, 0, 25, 30, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#2D1B4E';
    this.ctx.lineWidth = 3;
    this.ctx.stroke();

    // Eyes
    const eyeY = -8;
    this.ctx.fillStyle = '#FFF';
    this.ctx.beginPath();
    this.ctx.ellipse(-10, eyeY, 8, 10, 0, 0, Math.PI * 2);
    this.ctx.ellipse(10, eyeY, 8, 10, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.fillStyle = '#2D1B4E';
    this.ctx.beginPath();
    this.ctx.arc(-10, eyeY + 2, 4, 0, Math.PI * 2);
    this.ctx.arc(10, eyeY + 2, 4, 0, Math.PI * 2);
    this.ctx.fill();

    // Legs (animated)
    this.ctx.fillStyle = '#FF6B9D';
    this.ctx.strokeStyle = '#2D1B4E';
    this.ctx.lineWidth = 3;

    const legOffset = p.isJumping ? 5 : Math.sin(p.frame * Math.PI / 2) * 10;

    // Left leg
    this.ctx.beginPath();
    this.ctx.ellipse(-12, 35 - legOffset, 8, 15, 0.2, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Right leg
    this.ctx.beginPath();
    this.ctx.ellipse(12, 35 + legOffset, 8, 15, -0.2, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Arms
    const armOffset = p.isJumping ? -10 : Math.cos(p.frame * Math.PI / 2) * 8;

    this.ctx.beginPath();
    this.ctx.ellipse(-28, 5 + armOffset, 8, 12, 0.5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.ellipse(28, 5 - armOffset, 8, 12, -0.5, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.restore();
  },

  updateObstacles() {
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const obs = this.obstacles[i];
      obs.x -= this.speed;

      // Draw obstacle
      this.drawObstacle(obs);

      // Check collision
      if (this.checkCollision(obs)) {
        this.lives--;
        this.renderLives();
        this.showHitEffect();
        this.playHitSound();
        this.obstacles.splice(i, 1);

        if (this.lives <= 0) {
          this.gameOver();
        }
        continue;
      }

      // Remove if off screen
      if (obs.x < -obs.width) {
        this.obstacles.splice(i, 1);
      }
    }
  },

  drawObstacle(obs) {
    this.ctx.save();
    this.ctx.translate(obs.x, this.groundY);

    if (obs.type === 'gap') {
      // Draw gap (missing ground)
      this.ctx.fillStyle = '#87CEEB';
      this.ctx.fillRect(0, 0, obs.width, 120);

      // Warning stripes
      this.ctx.fillStyle = '#FFE066';
      for (let i = 0; i < obs.width; i += 20) {
        this.ctx.fillRect(i, -10, 10, 10);
      }
    } else if (obs.type === 'rock') {
      // Draw rock
      this.ctx.fillStyle = obs.color;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(obs.width / 2, -obs.height);
      this.ctx.lineTo(obs.width, 0);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.strokeStyle = '#2D1B4E';
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
    } else if (obs.type === 'spike') {
      // Draw spike
      this.ctx.fillStyle = obs.color;
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      this.ctx.lineTo(obs.width / 2, -obs.height);
      this.ctx.lineTo(obs.width, 0);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.strokeStyle = '#2D1B4E';
      this.ctx.lineWidth = 3;
      this.ctx.stroke();
    }

    this.ctx.restore();
  },

  checkCollision(obs) {
    const p = this.player;
    const playerBox = {
      x: p.x + 10,
      y: p.y - p.height + 10,
      width: p.width - 20,
      height: p.height - 10
    };

    if (obs.type === 'gap') {
      // Player must be jumping over gap
      const overGap = p.x + p.width > obs.x && p.x < obs.x + obs.width;
      const onGround = p.y >= this.groundY;
      return overGap && onGround;
    } else {
      // Standard collision
      const obsBox = {
        x: obs.x,
        y: this.groundY - obs.height,
        width: obs.width,
        height: obs.height
      };

      return playerBox.x < obsBox.x + obsBox.width &&
             playerBox.x + playerBox.width > obsBox.x &&
             playerBox.y < obsBox.y + obsBox.height &&
             playerBox.y + playerBox.height > obsBox.y;
    }
  },

  updateStars() {
    for (let i = this.stars.length - 1; i >= 0; i--) {
      const star = this.stars[i];
      star.x -= this.speed;

      if (star.collected) {
        // Add particles
        this.addParticles(star.x, star.y, '#FFD740', 5);
        this.stars.splice(i, 1);
        continue;
      }

      // Draw star
      this.drawStar(star);

      // Check collection
      const p = this.player;
      const dist = Math.sqrt(
        Math.pow((star.x + star.size / 2) - (p.x + p.width / 2), 2) +
        Math.pow((star.y + star.size / 2) - (p.y - p.height / 2), 2)
      );

      if (dist < 50) {
        star.collected = true;
        this.score += 15;
        this.updateScore();
        this.addParticles(star.x, star.y, '#FFD740', 8);
        this.playStarSound();
      }

      // Remove if off screen
      if (star.x < -star.size) {
        this.stars.splice(i, 1);
      }
    }
  },

  drawStar(star) {
    this.ctx.save();
    this.ctx.translate(star.x + star.size / 2, star.y + star.size / 2);
    this.ctx.rotate(Date.now() / 500);

    this.ctx.fillStyle = '#FFD740';
    this.ctx.strokeStyle = '#FFA000';
    this.ctx.lineWidth = 2;

    // Draw 5-pointed star
    this.ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI / 5) - Math.PI / 2;
      const x = Math.cos(angle) * star.size / 2;
      const y = Math.sin(angle) * star.size / 2;
      if (i === 0) this.ctx.moveTo(x, y);
      else this.ctx.lineTo(x, y);
    }
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.restore();
  },

  addParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.5) * 8 - 3,
        color: color,
        life: 30
      });
    }
  },

  updateParticles() {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3;
      p.life--;

      this.ctx.globalAlpha = p.life / 30;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.globalAlpha = 1;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
      }
    }
  },

  showHitEffect() {
    this.addParticles(this.player.x + this.player.width / 2, this.player.y - this.player.height / 2, '#FF6B6B', 10);
  },

  gameOver() {
    this.isPlaying = false;
    clearInterval(this.spawnTimer);
    clearInterval(this.starTimer);
    cancelAnimationFrame(this.gameLoop);

    // Show game over screen
    const gameOverEl = document.querySelector('.rainbow-game-over');
    if (gameOverEl) {
      gameOverEl.classList.add('active');
      gameOverEl.querySelector('.final-score').textContent =
        'You got ' + this.score + ' points!';
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
      heart.className = 'rainbow-heart' + (i >= this.lives ? ' lost' : '');
      heart.textContent = '❤️';
      this.livesDisplay.appendChild(heart);
    }
  },

  playJumpSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(300, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
  },

  playStarSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [784, 988, 1175];
      notes.forEach((freq, i) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.2, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
          osc.start();
          osc.stop(ctx.currentTime + 0.2);
        }, i * 80);
      });
    } catch (e) {}
  },

  playHitSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.3);
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
  rainbowGame.init();
});
