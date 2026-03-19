// Character Puzzle - Slide Style
(function() {
  // Game state
  let pieces = [];
  let emptyIndex = 3;
  let moves = 0;
  let solved = false;

  // DOM references
  let board, movesDisplay, reference;

  // ToonTown character as 4 SVG pieces - divided into QUADRANTS
  // Each piece shows ONE QUARTER of the complete image
  // Grid layout:
  //   [0] = top-left quarter    [1] = top-right quarter
  //   [2] = bottom-left quarter [3] = bottom-right quarter
  const characterPieces = [
    {
      id: 0,
      name: '1',
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Top-left: body left side + hair left -->
        <ellipse cx="50" cy="70" rx="35" ry="32" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
        <circle cx="30" cy="55" r="8" fill="#FFD740" opacity="0.8"/>
        <circle cx="20" cy="75" r="5" fill="#00E5FF" opacity="0.8"/>
        <path d="M 35 30 Q 30 20 40 22 Q 37 28 43 30" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="1"/>
        <path d="M 50 27 Q 47 17 53 20 Q 55 27 60 27" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="1"/>
        <text x="50" y="95" text-anchor="middle" font-family="Fredoka One" font-size="16" fill="#2D1B4E">1</text>
      </svg>`,
      correctIndex: 0
    },
    {
      id: 1,
      name: '2',
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Top-right: body right side + eyes + hair right -->
        <ellipse cx="50" cy="70" rx="35" ry="32" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
        <circle cx="70" cy="65" r="6" fill="#7C4DFF" opacity="0.8"/>
        <circle cx="38" cy="47" rx="9" ry="11" fill="#FFF" stroke="#2D1B4E" stroke-width="1.5"/>
        <circle cx="62" cy="47" rx="9" ry="11" fill="#FFF" stroke="#2D1B4E" stroke-width="1.5"/>
        <circle cx="40" cy="49" r="5" fill="#2D1B4E"/>
        <circle cx="64" cy="49" r="5" fill="#2D1B4E"/>
        <circle cx="42" cy="47" r="2" fill="#FFF"/>
        <circle cx="66" cy="47" r="2" fill="#FFF"/>
        <path d="M 65 30 Q 80 20 75 15 Q 60 25 65 30" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="1"/>
        <text x="50" y="95" text-anchor="middle" font-family="Fredoka One" font-size="16" fill="#2D1B4E">2</text>
      </svg>`,
      correctIndex: 1
    },
    {
      id: 2,
      name: '3',
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Bottom-left: mouth left + body bottom left -->
        <ellipse cx="50" cy="50" rx="35" ry="32" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
        <path d="M 25 65 Q 50 80 55 65" fill="none" stroke="#2D1B4E" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="50" cy="72" rx="6" ry="4" fill="#FF4081"/>
        <ellipse cx="20" cy="60" rx="6" ry="4" fill="#FF6B9D" opacity="0.5"/>
        <circle cx="40" cy="80" r="5" fill="#00E5FF" opacity="0.8"/>
        <text x="50" y="95" text-anchor="middle" font-family="Fredoka One" font-size="16" fill="#2D1B4E">3</text>
      </svg>`,
      correctIndex: 2
    },
    {
      id: 3,
      name: '4',
      svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Bottom-right: mouth right + body bottom right -->
        <ellipse cx="50" cy="50" rx="35" ry="32" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
        <path d="M 45 65 Q 50 80 75 65" fill="none" stroke="#2D1B4E" stroke-width="2" stroke-linecap="round"/>
        <ellipse cx="50" cy="72" rx="6" ry="4" fill="#FF4081"/>
        <ellipse cx="80" cy="60" rx="6" ry="4" fill="#FF6B9D" opacity="0.5"/>
        <circle cx="70" cy="75" r="6" fill="#7C4DFF" opacity="0.8"/>
        <text x="50" y="95" text-anchor="middle" font-family="Fredoka One" font-size="16" fill="#2D1B4E">4</text>
      </svg>`,
      correctIndex: 3
    }
  ];

  // Complete ToonTown for reference - shows the full assembled character
  const completeSvg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Body -->
    <ellipse cx="100" cy="120" rx="70" ry="65" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="4"/>
    <!-- Decorative circles -->
    <circle cx="60" cy="100" r="15" fill="#FFD740" opacity="0.8"/>
    <circle cx="140" cy="130" r="12" fill="#7C4DFF" opacity="0.8"/>
    <circle cx="80" cy="150" r="10" fill="#00E5FF" opacity="0.8"/>
    <!-- Eyes -->
    <ellipse cx="75" cy="95" rx="18" ry="22" fill="#FFF" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="125" cy="95" rx="18" ry="22" fill="#FFF" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="80" cy="98" r="10" fill="#2D1B4E"/>
    <circle cx="130" cy="98" r="10" fill="#2D1B4E"/>
    <circle cx="83" cy="93" r="4" fill="#FFF"/>
    <circle cx="133" cy="93" r="4" fill="#FFF"/>
    <!-- Mouth -->
    <path d="M 70 130 Q 100 155 130 130" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="100" cy="145" rx="12" ry="8" fill="#FF4081"/>
    <ellipse cx="50" cy="120" rx="12" ry="8" fill="#FF6B9D" opacity="0.5"/>
    <ellipse cx="150" cy="120" rx="12" ry="8" fill="#FF6B9D" opacity="0.5"/>
    <!-- Hair -->
    <path d="M 70 60 Q 60 40 80 45 Q 75 55 85 60" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="2"/>
    <path d="M 100 55 Q 95 35 105 40 Q 110 50 115 55" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="2"/>
    <path d="M 130 60 Q 145 45 135 40 Q 120 50 125 60" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="2"/>
  </svg>`;

  function getValidMoves() {
    const valid = [];
    const emptyRow = Math.floor(emptyIndex / 2);
    const emptyCol = emptyIndex % 2;

    if (emptyRow > 0) valid.push(emptyIndex - 2);
    if (emptyRow < 1) valid.push(emptyIndex + 2);
    if (emptyCol > 0) valid.push(emptyIndex - 1);
    if (emptyCol < 1) valid.push(emptyIndex + 1);

    return valid;
  }

  function swap(fromIndex, toIndex) {
    const temp = pieces[fromIndex];
    pieces[fromIndex] = pieces[toIndex];
    pieces[toIndex] = temp;
    emptyIndex = fromIndex;
  }

  function handlePieceClick(index) {
    if (solved) return;
    if (index === emptyIndex) return;

    const validMoves = getValidMoves();
    if (validMoves.indexOf(index) === -1) return;

    swap(index, emptyIndex);
    moves++;
    updateMoves();
    render();
    playSlideSound();
    checkWin();
  }

  function checkWin() {
    if (pieces[0] === 0 && pieces[1] === 1 &&
        pieces[2] === 2 && pieces[3] === 3) {
      solved = true;
      setTimeout(showWin, 300);
    }
  }

  function showWin() {
    const winEl = document.querySelector('.puzzle-win');
    const winMoves = document.querySelector('.win-moves');
    if (winEl) {
      winEl.classList.add('active');
      if (winMoves) winMoves.textContent = moves;
      playWinSound();
      if (typeof createConfetti === 'function') {
        createConfetti(window.innerWidth / 2, window.innerHeight / 2);
      }
    }
  }

  function updateMoves() {
    if (movesDisplay) {
      movesDisplay.textContent = moves;
    }
  }

  function shuffle() {
    const numMoves = 20 + Math.floor(Math.random() * 10);
    for (let i = 0; i < numMoves; i++) {
      const validMoves = getValidMoves();
      const moveIndex = validMoves[Math.floor(Math.random() * validMoves.length)];
      swap(moveIndex, emptyIndex);
    }
  }

  function startGame() {
    moves = 0;
    solved = false;
    pieces = [0, 1, 2, 3];
    emptyIndex = 3;
    shuffle();
    updateMoves();
    render();
  }

  function render() {
    if (!board) return;
    board.innerHTML = '';

    for (let i = 0; i < 4; i++) {
      const slot = document.createElement('div');
      slot.className = 'puzzle-slot';
      slot.dataset.index = i;

      if (i === emptyIndex) {
        slot.classList.add('empty');
      } else {
        const pieceId = pieces[i];
        const pieceData = characterPieces[pieceId];

        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.innerHTML = pieceData.svg;

        piece.addEventListener('click', (function(idx) {
          return function() {
            handlePieceClick(idx);
          };
        })(i));

        slot.appendChild(piece);
      }

      board.appendChild(slot);
    }
  }

  function playSlideSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 400;
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {}
  }

  function playWinSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const notes = [523, 659, 784, 1047];
      notes.forEach(function(freq, i) {
        setTimeout(function() {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.value = freq;
          gain.gain.setValueAtTime(0.3, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
          osc.start();
          osc.stop(ctx.currentTime + 0.3);
        }, i * 150);
      });
    } catch (e) {}
  }

  function init() {
    board = document.querySelector('.puzzle-board');
    movesDisplay = document.querySelector('.puzzle-moves');
    reference = document.querySelector('.puzzle-reference');

    if (!board) {
      console.error('Puzzle board not found!');
      return;
    }

    if (reference) {
      reference.innerHTML = completeSvg;
    }

    const newGameBtn = document.querySelector('.puzzle-new-btn');
    if (newGameBtn) {
      newGameBtn.addEventListener('click', startGame);
    }

    const winBtn = document.querySelector('.puzzle-win-btn');
    if (winBtn) {
      winBtn.addEventListener('click', function() {
        const winEl = document.querySelector('.puzzle-win');
        if (winEl) winEl.classList.remove('active');
        startGame();
      });
    }

    startGame();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
