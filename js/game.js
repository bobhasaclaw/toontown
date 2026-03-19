// Memory Match Game

// Character data for cards
const memoryCharacters = [
  {
    id: 'toonTown',
    name: 'ToonTown',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="120" rx="70" ry="65" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="4"/>
      <circle cx="75" cy="95" r="15" fill="#FFF" stroke="#2D1B4E" stroke-width="3"/>
      <circle cx="125" cy="95" r="15" fill="#FFF" stroke="#2D1B4E" stroke-width="3"/>
      <circle cx="80" cy="98" r="8" fill="#2D1B4E"/>
      <circle cx="130" cy="98" r="8" fill="#2D1B4E"/>
      <path d="M 75 130 Q 100 150 125 130" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
      <path d="M 70 60 Q 60 40 80 45 Q 75 55 85 60" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="2"/>
      <path d="M 100 55 Q 95 35 105 40 Q 110 50 115 55" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="2"/>
      <path d="M 130 60 Q 145 45 135 40 Q 120 50 125 60" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="2"/>
    </svg>`
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
    </svg>`
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
    </svg>`
  },
  {
    id: 'star',
    name: 'Sparkle',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,10 120,70 185,70 135,110 155,175 100,140 45,175 65,110 15,70 80,70" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
      <circle cx="80" cy="85" r="10" fill="#2D1B4E"/>
      <circle cx="120" cy="85" r="10" fill="#2D1B4E"/>
      <circle cx="83" cy="82" r="4" fill="#FFF"/>
      <circle cx="123" cy="82" r="4" fill="#FFF"/>
      <path d="M 80 115 Q 100 135 120 115" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'moon',
    name: 'Moonbeam',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M 100 30 A 70 70 0 1 0 100 170 A 50 50 0 1 1 100 30" fill="#FFE082" stroke="#2D1B4E" stroke-width="4"/>
      <circle cx="70" cy="80" r="8" fill="#2D1B4E"/>
      <circle cx="90" cy="110" r="6" fill="#2D1B4E"/>
      <circle cx="60" cy="120" r="5" fill="#2D1B4E"/>
    </svg>`
  },
  {
    id: 'elephant',
    name: 'Ellie',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="110" rx="70" ry="60" fill="#90CAF9" stroke="#2D1B4E" stroke-width="4"/>
      <ellipse cx="45" cy="90" rx="30" ry="35" fill="#90CAF9" stroke="#2D1B4E" stroke-width="4"/>
      <circle cx="70" cy="95" r="10" fill="#2D1B4E"/>
      <circle cx="130" cy="95" r="10" fill="#2D1B4E"/>
      <circle cx="73" cy="92" r="4" fill="#FFF"/>
      <circle cx="133" cy="92" r="4" fill="#FFF"/>
      <ellipse cx="100" cy="130" rx="15" ry="10" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="2"/>
      <path d="M 85 130 Q 75 160 85 180" fill="none" stroke="#90CAF9" stroke-width="15" stroke-linecap="round"/>
      <path d="M 85 130 Q 75 160 85 180" fill="none" stroke="#2D1B4E" stroke-width="3"/>
      <ellipse cx="45" cy="70" rx="20" ry="25" fill="#90CAF9" stroke="#2D1B4E" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'rainbow',
    name: 'Rainbow',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M 20 150 Q 100 50 180 150" fill="none" stroke="#FF0000" stroke-width="15"/>
      <path d="M 30 150 Q 100 60 170 150" fill="none" stroke="#FFA500" stroke-width="12"/>
      <path d="M 40 150 Q 100 70 160 150" fill="none" stroke="#FFFF00" stroke-width="10"/>
      <path d="M 50 150 Q 100 80 150 150" fill="none" stroke="#00FF00" stroke-width="8"/>
      <path d="M 60 150 Q 100 90 140 150" fill="none" stroke="#0000FF" stroke-width="6"/>
      <path d="M 70 150 Q 100 100 130 150" fill="none" stroke="#8B00FF" stroke-width="4"/>
      <ellipse cx="100" cy="170" rx="60" ry="15" fill="#FFF" stroke="#2D1B4E" stroke-width="3"/>
      <circle cx="75" cy="165" r="8" fill="#2D1B4E"/>
      <circle cx="125" cy="165" r="8" fill="#2D1B4E"/>
      <path d="M 85 175 Q 100 185 115 175" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'burger',
    name: 'Mr. Burger',
    svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="100" rx="80" ry="40" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
      <ellipse cx="100" cy="85" rx="70" ry="25" fill="#8B4513" stroke="#2D1B4E" stroke-width="3"/>
      <ellipse cx="100" cy="75" rx="65" ry="15" fill="#228B22" stroke="#2D1B4E" stroke-width="2"/>
      <ellipse cx="100" cy="65" rx="60" ry="20" fill="#FF6347" stroke="#2D1B4E" stroke-width="2"/>
      <ellipse cx="100" cy="50" rx="70" ry="30" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
      <ellipse cx="70" cy="35" rx="8" ry="5" fill="#FFF5E6"/>
      <ellipse cx="100" cy="30" rx="8" ry="5" fill="#FFF5E6"/>
      <ellipse cx="130" cy="35" rx="8" ry="5" fill="#FFF5E6"/>
    </svg>`
  }
];

// Game state
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let canFlip = true;
let gameStarted = false;
let timer = null;
let seconds = 0;

// DOM elements
const memoryBoard = document.querySelector('.memory-board');
const movesDisplay = document.querySelector('.moves-count');
const pairsDisplay = document.querySelector('.pairs-count');
const timerDisplay = document.querySelector('.timer-count');
const winModal = document.getElementById('winModal');

// Initialize game
function initMemoryGame() {
  if (!memoryBoard) return;

  // Select 8 random characters (we need pairs)
  const selectedCharacters = [...memoryCharacters]
    .sort(() => Math.random() - 0.5)
    .slice(0, 8);

  // Create pairs
  cards = [...selectedCharacters, ...selectedCharacters]
    .sort(() => Math.random() - 0.5);

  // Reset state
  flippedCards = [];
  matchedPairs = 0;
  moves = 0;
  seconds = 0;
  canFlip = true;
  gameStarted = false;

  // Update displays
  updateDisplays();

  // Render cards
  renderCards();

  // Clear timer
  if (timer) clearInterval(timer);
  timerDisplay.textContent = '0:00';
}

function renderCards() {
  memoryBoard.innerHTML = '';

  cards.forEach((char, index) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.index = index;
    card.dataset.id = char.id;

    card.innerHTML = `
      <div class="memory-card-face memory-card-front">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <text x="100" y="140" text-anchor="middle" font-size="80" fill="#FFF" opacity="0.5">?</text>
        </svg>
      </div>
      <div class="memory-card-face memory-card-back">
        ${char.svg}
      </div>
    `;

    card.addEventListener('click', () => flipCard(card, index));
    memoryBoard.appendChild(card);
  });
}

function flipCard(card, index) {
  if (!canFlip) return;
  if (card.classList.contains('flipped')) return;
  if (card.classList.contains('matched')) return;

  // Start timer on first flip
  if (!gameStarted) {
    gameStarted = true;
    startTimer();
  }

  // Flip the card
  card.classList.add('flipped');
  flippedCards.push({ card, index, id: cards[index].id });

  // Check for match when 2 cards are flipped
  if (flippedCards.length === 2) {
    moves++;
    updateDisplays();
    canFlip = false;

    const [first, second] = flippedCards;

    if (first.id === second.id) {
      // Match found!
      matchedPairs++;
      updateDisplays();

      setTimeout(() => {
        first.card.classList.add('matched');
        second.card.classList.add('matched');
        playMatchSound();
        flippedCards = [];
        canFlip = true;

        // Check for win
        if (matchedPairs === 8) {
          setTimeout(showWinModal, 500);
        }
      }, 300);
    } else {
      // No match
      setTimeout(() => {
        first.card.classList.remove('flipped');
        second.card.classList.remove('flipped');
        flippedCards = [];
        canFlip = true;
        playNoMatchSound();
      }, 800);
    }
  }
}

function updateDisplays() {
  movesDisplay.textContent = moves;
  pairsDisplay.textContent = matchedPairs;
}

function startTimer() {
  timer = setInterval(() => {
    seconds++;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

function showWinModal() {
  clearInterval(timer);

  const winContent = winModal.querySelector('.win-content');
  winContent.innerHTML = `
    <div class="win-stars">⭐ 🌟 ⭐</div>
    <h2>You Won!</h2>
    <p class="win-message">Amazing memory! You found all the pairs!</p>
    <div class="win-stats">
      <div class="stat-box">
        <div class="stat-label">Moves</div>
        <div class="stat-value">${moves}</div>
      </div>
      <div class="stat-box">
        <div class="stat-label">Time</div>
        <div class="stat-value">${timerDisplay.textContent}</div>
      </div>
    </div>
    <button class="memory-btn memory-btn-primary" onclick="playAgain()">Play Again!</button>
  `;

  winModal.classList.add('active');
  playWinSound();

  // Confetti!
  createConfetti(window.innerWidth / 2, window.innerHeight / 2);
  setTimeout(() => createConfetti(window.innerWidth / 2, window.innerHeight / 2), 300);
  setTimeout(() => createConfetti(window.innerWidth / 2, window.innerHeight / 2), 600);
}

function playAgain() {
  winModal.classList.remove('active');
  initMemoryGame();
}

function playMatchSound() {
  if (typeof sound !== 'undefined' && sound.playHappy) {
    sound.playHappy();
  } else {
    // Fallback beep
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 523;
      gain.gain.value = 0.3;
      osc.start();
      setTimeout(() => {
        osc.frequency.value = 659;
        setTimeout(() => {
          osc.frequency.value = 784;
          setTimeout(() => osc.stop(), 150);
        }, 100);
      }, 100);
    } catch (e) {}
  }
}

function playNoMatchSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 200;
    gain.gain.value = 0.2;
    osc.start();
    setTimeout(() => osc.stop(), 200);
  } catch (e) {}
}

function playWinSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      setTimeout(() => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = freq;
        gain.gain.value = 0.3;
        osc.start();
        osc.stop(ctx.currentTime + 0.2);
      }, i * 150);
    });
  } catch (e) {}
}

// Close win modal on background click
if (winModal) {
  winModal.addEventListener('click', (e) => {
    if (e.target === winModal) {
      playAgain();
    }
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.querySelector('.memory-btn-primary');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      initMemoryGame();
    });
  }
});
