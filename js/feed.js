// Feed the Friend Game

const feedGame = {
  arena: null,
  score: 0,
  lives: 3,
  maxLives: 3,
  isPlaying: false,
  currentCharacter: null,
  currentFood: null,
  dragTarget: null,
  totalFed: 0,

  // Characters with their favorites
  characters: [
    {
      id: 'bunny',
      name: 'Bunny',
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="60" ry="55" fill="#F8BBD9" stroke="#2D1B4E" stroke-width="4"/>
        <ellipse cx="70" cy="60" rx="18" ry="45" fill="#F8BBD9" stroke="#2D1B4E" stroke-width="3"/>
        <ellipse cx="130" cy="60" rx="18" ry="45" fill="#F8BBD9" stroke="#2D1B4E" stroke-width="3"/>
        <ellipse cx="70" cy="55" rx="10" ry="30" fill="#FFCDD2"/>
        <ellipse cx="130" cy="55" rx="10" ry="30" fill="#FFCDD2"/>
        <circle cx="80" cy="115" r="12" fill="#2D1B4E"/>
        <circle cx="120" cy="115" r="12" fill="#2D1B4E"/>
        <circle cx="83" cy="112" r="4" fill="#FFF"/>
        <circle cx="123" cy="112" r="4" fill="#FFF"/>
        <ellipse cx="100" cy="145" rx="10" ry="6" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
        <path d="M 85 160 Q 100 170 115 160" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      happySvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="60" ry="55" fill="#F8BBD9" stroke="#2D1B4E" stroke-width="4"/>
        <ellipse cx="70" cy="60" rx="18" ry="45" fill="#F8BBD9" stroke="#2D1B4E" stroke-width="3"/>
        <ellipse cx="130" cy="60" rx="18" ry="45" fill="#F8BBD9" stroke="#2D1B4E" stroke-width="3"/>
        <ellipse cx="70" cy="55" rx="10" ry="30" fill="#FFCDD2"/>
        <ellipse cx="130" cy="55" rx="10" ry="30" fill="#FFCDD2"/>
        <path d="M 65 110 Q 80 100 95 110" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
        <path d="M 105 110 Q 120 100 135 110" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="100" cy="145" rx="12" ry="8" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
        <path d="M 80 160 Q 100 175 120 160" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
      hungrySvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="60" ry="55" fill="#F8BBD9" stroke="#2D1B4E" stroke-width="4"/>
        <ellipse cx="70" cy="60" rx="18" ry="45" fill="#F8BBD9" stroke="#2D1B4E" stroke-width="3"/>
        <ellipse cx="130" cy="60" rx="18" ry="45" fill="#F8BBD9" stroke="#2D1B4E" stroke-width="3"/>
        <ellipse cx="70" cy="55" rx="10" ry="30" fill="#FFCDD2"/>
        <ellipse cx="130" cy="55" rx="10" ry="30" fill="#FFCDD2"/>
        <circle cx="80" cy="115" r="12" fill="#2D1B4E"/>
        <circle cx="120" cy="115" r="12" fill="#2D1B4E"/>
        <circle cx="83" cy="112" r="4" fill="#FFF"/>
        <circle cx="123" cy="112" r="4" fill="#FFF"/>
        <ellipse cx="100" cy="150" rx="15" ry="10" fill="#2D1B4E"/>
        <path d="M 85 170 Q 100 160 115 170" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      favorite: 'carrot'
    },
    {
      id: 'cat',
      name: 'Whiskers',
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="120" rx="60" ry="50" fill="#FF9800" stroke="#2D1B4E" stroke-width="4"/>
        <polygon points="50,80 40,30 70,60" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
        <polygon points="150,80 160,30 130,60" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
        <polygon points="50,80 40,30 70,60" fill="#FFB74D"/>
        <polygon points="150,80 160,30 130,60" fill="#FFB74D"/>
        <circle cx="75" cy="105" r="12" fill="#2D1B4E"/>
        <circle cx="125" cy="105" r="12" fill="#2D1B4E"/>
        <circle cx="78" cy="102" r="5" fill="#4CAF50"/>
        <circle cx="128" cy="102" r="5" fill="#4CAF50"/>
        <ellipse cx="100" cy="130" rx="10" ry="6" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
        <path d="M 80 145 Q 100 155 120 145" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      happySvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="120" rx="60" ry="50" fill="#FF9800" stroke="#2D1B4E" stroke-width="4"/>
        <polygon points="50,80 40,30 70,60" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
        <polygon points="150,80 160,30 130,60" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
        <polygon points="50,80 40,30 70,60" fill="#FFB74D"/>
        <polygon points="150,80 160,30 130,60" fill="#FFB74D"/>
        <path d="M 60 100 Q 75 90 90 100" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
        <path d="M 110 100 Q 125 90 140 100" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
        <circle cx="75" cy="108" r="8" fill="#2D1B4E"/>
        <circle cx="125" cy="108" r="8" fill="#2D1B4E"/>
        <ellipse cx="100" cy="130" rx="10" ry="6" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
        <path d="M 80 145 Q 100 160 120 145" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
      hungrySvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="120" rx="60" ry="50" fill="#FF9800" stroke="#2D1B4E" stroke-width="4"/>
        <polygon points="50,80 40,30 70,60" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
        <polygon points="150,80 160,30 130,60" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
        <polygon points="50,80 40,30 70,60" fill="#FFB74D"/>
        <polygon points="150,80 160,30 130,60" fill="#FFB74D"/>
        <circle cx="75" cy="105" r="12" fill="#2D1B4E"/>
        <circle cx="125" cy="105" r="12" fill="#2D1B4E"/>
        <circle cx="78" cy="102" r="5" fill="#4CAF50"/>
        <circle cx="128" cy="102" r="5" fill="#4CAF50"/>
        <ellipse cx="100" cy="135" rx="12" ry="8" fill="#2D1B4E"/>
        <path d="M 85 150 Q 100 145 115 150" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      favorite: 'fish'
    },
    {
      id: 'duck',
      name: 'Quackers',
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="55" ry="45" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
        <circle cx="100" cy="70" r="40" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
        <circle cx="85" cy="60" r="8" fill="#2D1B4E"/>
        <circle cx="115" cy="60" r="8" fill="#2D1B4E"/>
        <circle cx="87" cy="58" r="3" fill="#FFF"/>
        <circle cx="117" cy="58" r="3" fill="#FFF"/>
        <ellipse cx="100" cy="85" rx="20" ry="12" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
        <path d="M 80 100 Q 100 110 120 100" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      happySvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="55" ry="45" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
        <circle cx="100" cy="70" r="40" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
        <path d="M 75 55 Q 85 45 95 55" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
        <path d="M 105 55 Q 115 45 125 55" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
        <circle cx="85" cy="60" r="8" fill="#2D1B4E"/>
        <circle cx="115" cy="60" r="8" fill="#2D1B4E"/>
        <circle cx="87" cy="58" r="3" fill="#FFF"/>
        <circle cx="117" cy="58" r="3" fill="#FFF"/>
        <ellipse cx="100" cy="85" rx="20" ry="12" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
        <path d="M 75 100 Q 100 120 125 100" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
      hungrySvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="130" rx="55" ry="45" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
        <circle cx="100" cy="70" r="40" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
        <circle cx="85" cy="60" r="8" fill="#2D1B4E"/>
        <circle cx="115" cy="60" r="8" fill="#2D1B4E"/>
        <circle cx="87" cy="58" r="3" fill="#FFF"/>
        <circle cx="117" cy="58" r="3" fill="#FFF"/>
        <ellipse cx="100" cy="90" rx="22" ry="15" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
        <path d="M 80 110 Q 100 105 120 110" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      favorite: 'bread'
    },
    {
      id: 'bear',
      name: 'Honey Bear',
      svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="125" rx="65" ry="60" fill="#8D6E63" stroke="#2D1B4E" stroke-width="4"/>
        <circle cx="50" cy="70" r="22" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
        <circle cx="150" cy="70" r="22" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
        <circle cx="50" cy="70" r="12" fill="#D7CCC8"/>
        <circle cx="150" cy="70" r="12" fill="#D7CCC8"/>
        <circle cx="80" cy="110" r="10" fill="#2D1B4E"/>
        <circle cx="120" cy="110" r="10" fill="#2D1B4E"/>
        <circle cx="83" cy="107" r="4" fill="#FFF"/>
        <circle cx="123" cy="107" r="4" fill="#FFF"/>
        <ellipse cx="100" cy="140" rx="15" ry="10" fill="#FFD740" stroke="#2D1B4E" stroke-width="2"/>
        <path d="M 85 160 Q 100 170 115 160" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      happySvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="125" rx="65" ry="60" fill="#8D6E63" stroke="#2D1B4E" stroke-width="4"/>
        <circle cx="50" cy="70" r="22" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
        <circle cx="150" cy="70" r="22" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
        <circle cx="50" cy="70" r="12" fill="#D7CCC8"/>
        <circle cx="150" cy="70" r="12" fill="#D7CCC8"/>
        <path d="M 65 105 Q 80 95 95 105" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
        <path d="M 105 105 Q 120 95 135 105" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
        <ellipse cx="100" cy="140" rx="15" ry="10" fill="#FFD740" stroke="#2D1B4E" stroke-width="2"/>
        <path d="M 80 160 Q 100 175 120 160" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
      hungrySvg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="100" cy="125" rx="65" ry="60" fill="#8D6E63" stroke="#2D1B4E" stroke-width="4"/>
        <circle cx="50" cy="70" r="22" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
        <circle cx="150" cy="70" r="22" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
        <circle cx="50" cy="70" r="12" fill="#D7CCC8"/>
        <circle cx="150" cy="70" r="12" fill="#D7CCC8"/>
        <circle cx="80" cy="110" r="10" fill="#2D1B4E"/>
        <circle cx="120" cy="110" r="10" fill="#2D1B4E"/>
        <circle cx="83" cy="107" r="4" fill="#FFF"/>
        <circle cx="123" cy="107" r="4" fill="#FFF"/>
        <ellipse cx="100" cy="145" rx="18" ry="12" fill="#2D1B4E"/>
        <path d="M 85 165 Q 100 155 115 165" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      favorite: 'honey'
    }
  ],

  // Food items
  foods: [
    { id: 'carrot', emoji: '🥕', svg: `<svg viewBox="0 0 60 60"><path d="M30 8 L35 25 L40 55 L20 55 L25 25 Z" fill="#FF7043" stroke="#2D1B4E" stroke-width="2"/><path d="M25 8 Q30 0 35 8" fill="#4CAF50" stroke="#2D1B4E" stroke-width="2"/></svg>` },
    { id: 'fish', emoji: '🐟', svg: `<svg viewBox="0 0 60 60"><ellipse cx="30" cy="30" rx="25" ry="15" fill="#42A5F5" stroke="#2D1B4E" stroke-width="2"/><polygon points="55,30 65,20 65,40" fill="#42A5F5" stroke="#2D1B4E" stroke-width="2"/><circle cx="15" cy="28" r="4" fill="#2D1B4E"/></svg>` },
    { id: 'bread', emoji: '🍞', svg: `<svg viewBox="0 0 60 60"><ellipse cx="30" cy="35" rx="25" ry="20" fill="#FFD54F" stroke="#2D1B4E" stroke-width="2"/><ellipse cx="30" cy="30" rx="20" ry="12" fill="#FFECB3"/></svg>` },
    { id: 'honey', emoji: '🍯', svg: `<svg viewBox="0 0 60 60"><path d="M20 20 L40 20 L38 50 L22 50 Z" fill="#FFD54F" stroke="#2D1B4E" stroke-width="2"/><ellipse cx="30" cy="20" rx="10" ry="5" fill="#8D6E63" stroke="#2D1B4E" stroke-width="2"/><path d="M25 30 Q30 35 35 30" fill="none" stroke="#FFA000" stroke-width="2"/></svg>` },
    { id: 'apple', emoji: '🍎', svg: `<svg viewBox="0 0 60 60"><circle cx="30" cy="35" r="22" fill="#EF5350" stroke="#2D1B4E" stroke-width="2"/><path d="M30 13 Q35 8 38 13" fill="#4CAF50" stroke="#2D1B4E" stroke-width="2"/><ellipse cx="22" cy="30" rx="5" ry="8" fill="#FFCDD2" opacity="0.5"/></svg>` },
    { id: 'cookie', emoji: '🍪', svg: `<svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="24" fill="#D7CCC8" stroke="#2D1B4E" stroke-width="2"/><circle cx="22" cy="25" r="4" fill="#5D4037"/><circle cx="35" cy="22" r="3" fill="#5D4037"/><circle cx="28" cy="35" r="4" fill="#5D4037"/><circle cx="38" cy="35" r="3" fill="#5D4037"/></svg>` }
  ],

  init() {
    this.arena = document.querySelector('.feed-arena');
    this.scoreDisplay = document.querySelector('.feed-score');
    this.livesDisplay = document.querySelector('.feed-lives');
    this.characterDisplay = document.querySelector('.feed-character');
    this.foodTray = document.querySelector('.feed-food-tray');

    if (!this.arena) return;

    // Start button
    const startBtn = document.querySelector('.feed-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    // Restart button
    const restartBtn = document.querySelector('.feed-restart-btn');
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
    this.isPlaying = true;
    this.totalFed = 0;

    // Clear arena
    this.arena.querySelectorAll('.feed-star, .feed-wrong').forEach(el => el.remove());

    // Hide overlays
    const startScreen = document.querySelector('.feed-start-screen');
    if (startScreen) startScreen.classList.add('hidden');

    const gameOver = document.querySelector('.feed-game-over');
    if (gameOver) gameOver.classList.remove('active');

    // Update displays
    this.updateScore();
    this.renderLives();

    // Spawn character and food
    this.spawnCharacter();
    this.spawnFood();
  },

  spawnCharacter() {
    const char = this.characters[Math.floor(Math.random() * this.characters.length)];
    this.currentCharacter = char;

    if (this.characterDisplay) {
      this.characterDisplay.innerHTML = char.svg;
      this.characterDisplay.querySelector('svg').style.width = '140px';
      this.characterDisplay.querySelector('svg').style.height = '140px';
    }
  },

  spawnFood() {
    if (!this.foodTray) return;
    this.foodTray.innerHTML = '';

    // Get favorite + 2 random others
    const favorite = this.foods.find(f => f.id === this.currentCharacter.favorite);
    const others = this.foods.filter(f => f.id !== this.currentCharacter.favorite)
      .sort(() => Math.random() - 0.5)
      .slice(0, 2);

    const allFood = [favorite, ...others].sort(() => Math.random() - 0.5);

    allFood.forEach(food => {
      const foodEl = document.createElement('div');
      foodEl.className = 'feed-food-item';
      foodEl.dataset.food = food.id;
      foodEl.innerHTML = food.svg;
      foodEl.style.width = '60px';
      foodEl.style.height = '60px';

      // Make draggable
      foodEl.draggable = true;
      foodEl.addEventListener('dragstart', (e) => this.handleDragStart(e, food.id));
      foodEl.addEventListener('touchstart', (e) => this.handleTouchStart(e, food.id), { passive: false });

      this.foodTray.appendChild(foodEl);
    });

    // Add drop zone events to character
    if (this.characterDisplay) {
      this.characterDisplay.addEventListener('dragover', (e) => e.preventDefault());
      this.characterDisplay.addEventListener('drop', (e) => this.handleDrop(e));
      this.characterDisplay.addEventListener('touchend', (e) => this.handleTouchEnd(e));
    }
  },

  handleDragStart(e, foodId) {
    this.dragTarget = foodId;
    e.dataTransfer.setData('text/plain', foodId);
    e.target.style.opacity = '0.5';
  },

  handleTouchStart(e, foodId) {
    e.preventDefault();
    this.dragTarget = foodId;
    e.target.style.opacity = '0.5';
  },

  handleDrop(e) {
    e.preventDefault();
    const foodId = e.dataTransfer.getData('text/plain') || this.dragTarget;
    this.feedCharacter(foodId);
  },

  handleTouchEnd(e) {
    if (this.dragTarget) {
      this.feedCharacter(this.dragTarget);
    }
  },

  feedCharacter(foodId) {
    const food = this.foods.find(f => f.id === foodId);
    const isCorrect = foodId === this.currentCharacter.favorite;

    // Reset food opacity
    document.querySelectorAll('.feed-food-item').forEach(el => {
      el.style.opacity = '1';
    });

    if (isCorrect) {
      // Success!
      this.score += 20;
      this.totalFed++;
      this.updateScore();

      // Show happy character
      if (this.characterDisplay) {
        this.characterDisplay.innerHTML = this.currentCharacter.happySvg;
        this.characterDisplay.querySelector('svg').style.width = '140px';
        this.characterDisplay.querySelector('svg').style.height = '140px';
      }

      // Show score popup
      this.showPopup('+20', 'green');

      // Play success sound
      this.playSuccessSound();

      // Next character after delay
      setTimeout(() => {
        if (this.isPlaying) {
          this.spawnCharacter();
          this.spawnFood();
        }
      }, 1000);
    } else {
      // Wrong food
      this.lives--;
      this.renderLives();

      // Show sad character
      if (this.characterDisplay) {
        this.characterDisplay.innerHTML = this.currentCharacter.hungrySvg;
        this.characterDisplay.querySelector('svg').style.width = '140px';
        this.characterDisplay.querySelector('svg').style.height = '140px';
      }

      // Show wrong popup
      this.showPopup('❌', 'red');

      // Play wrong sound
      this.playWrongSound();

      // Check game over
      if (this.lives <= 0) {
        setTimeout(() => this.gameOver(), 500);
      } else {
        // Reset character after a moment
        setTimeout(() => {
          if (this.characterDisplay && this.isPlaying) {
            this.characterDisplay.innerHTML = this.currentCharacter.svg;
            this.characterDisplay.querySelector('svg').style.width = '140px';
            this.characterDisplay.querySelector('svg').style.height = '140px';
          }
        }, 800);
      }
    }

    this.dragTarget = null;
  },

  showPopup(text, color) {
    const popup = document.createElement('div');
    popup.className = 'feed-star';
    popup.textContent = text;
    popup.style.color = color === 'green' ? '#4CAF50' : '#F44336';
    popup.style.fontSize = '36px';
    popup.style.left = '50%';
    popup.style.top = '40%';
    popup.style.transform = 'translate(-50%, -50%)';
    this.arena.appendChild(popup);
    setTimeout(() => popup.remove(), 1000);
  },

  gameOver() {
    this.isPlaying = false;

    // Show game over screen
    const gameOverEl = document.querySelector('.feed-game-over');
    if (gameOverEl) {
      gameOverEl.classList.add('active');
      gameOverEl.querySelector('.final-score').textContent =
        'You fed ' + this.totalFed + ' friends!';
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
      heart.className = 'feed-heart' + (i >= this.lives ? ' lost' : '');
      heart.textContent = '❤️';
      this.livesDisplay.appendChild(heart);
    }
  },

  playSuccessSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [523, 659, 784];
      notes.forEach((freq, i) => {
        setTimeout(() => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.25, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
          osc.start();
          osc.stop(ctx.currentTime + 0.2);
        }, i * 100);
      });
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
  feedGame.init();
});
