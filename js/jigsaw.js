// Jigsaw Jam Game

const jigsawGame = {
  canvas: null,
  ctx: null,
  score: 0,
  pieces: [],
  placedPieces: [],
  isPlaying: false,
  currentPiece: null,
  dragOffset: { x: 0, y: 0 },
  gridSize: 3, // 3x3 grid = 9 pieces
  pieceSize: 100,
  snapDistance: 30,
  selectedPicture: 0,
  moves: 0,

  // Character pictures to complete
  pictures: [
    {
      name: 'ToonTown',
      svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="150" cy="180" rx="100" ry="90" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="5"/>
        <circle cx="100" cy="145" r="22" fill="#FFF" stroke="#2D1B4E" stroke-width="4"/>
        <circle cx="200" cy="145" r="22" fill="#FFF" stroke="#2D1B4E" stroke-width="4"/>
        <circle cx="108" cy="150" r="12" fill="#2D1B4E"/>
        <circle cx="208" cy="150" r="12" fill="#2D1B4E"/>
        <circle cx="112" cy="145" r="5" fill="#FFF"/>
        <circle cx="212" cy="145" r="5" fill="#FFF"/>
        <path d="M 100 200 Q 150 230 200 200" fill="none" stroke="#2D1B4E" stroke-width="5" stroke-linecap="round"/>
        <ellipse cx="150" cy="215" rx="18" ry="12" fill="#FF4081"/>
        <path d="M 95 90 Q 80 55 110 65 Q 100 80 115 90" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="3"/>
        <path d="M 150 80 Q 140 50 165 60 Q 175 75 185 85" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="3"/>
        <path d="M 205 90 Q 225 60 195 60 Q 190 80 200 90" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="3"/>
      </svg>`,
      bgColor: '#FCE4EC'
    },
    {
      name: 'Quackers',
      svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="150" cy="200" rx="85" ry="70" fill="#FFD740" stroke="#2D1B4E" stroke-width="5"/>
        <circle cx="150" cy="110" r="60" fill="#FFD740" stroke="#2D1B4E" stroke-width="5"/>
        <circle cx="120" cy="95" r="12" fill="#2D1B4E"/>
        <circle cx="180" cy="95" r="12" fill="#2D1B4E"/>
        <circle cx="123" cy="92" r="5" fill="#FFF"/>
        <circle cx="183" cy="92" r="5" fill="#FFF"/>
        <ellipse cx="150" cy="130" rx="30" ry="18" fill="#FF9800" stroke="#2D1B4E" stroke-width="4"/>
        <path d="M 110 155 Q 150 175 190 155" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
      </svg>`,
      bgColor: '#FFF8E1'
    },
    {
      name: 'Sparkle',
      svg: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 180,110 280,110 200,170 230,260 150,210 70,260 100,170 20,110 120,110" fill="#FFD740" stroke="#2D1B4E" stroke-width="5"/>
        <circle cx="120" cy="130" r="15" fill="#2D1B4E"/>
        <circle cx="180" cy="130" r="15" fill="#2D1B4E"/>
        <circle cx="125" cy="125" r="6" fill="#FFF"/>
        <circle cx="185" cy="125" r="6" fill="#FFF"/>
        <path d="M 120 175 Q 150 205 180 175" fill="none" stroke="#2D1B4E" stroke-width="5" stroke-linecap="round"/>
      </svg>`,
      bgColor: '#FFFDE7'
    }
  ],

  init() {
    this.canvas = document.querySelector('.jigsaw-canvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.scoreDisplay = document.querySelector('.jigsaw-score');
    this.movesDisplay = document.querySelector('.jigsaw-moves');
    this.previewCanvas = document.querySelector('.jigsaw-preview');

    if (!this.canvas || !this.ctx) return;

    // Set canvas size
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Mouse events
    this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    this.canvas.addEventListener('mouseleave', (e) => this.handleMouseUp(e));

    // Touch events
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.handleMouseDown(e.touches[0]);
    });
    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      this.handleMouseMove(e.touches[0]);
    });
    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.handleMouseUp(e.changedTouches[0]);
    });

    // Next picture button
    const nextBtn = document.querySelector('.jigsaw-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => this.nextPicture());
    }

    // Start button
    const startBtn = document.querySelector('.jigsaw-start-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => this.startGame());
    }

    // Restart button
    const restartBtn = document.querySelector('.jigsaw-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => this.startGame());
    }

    // Initialize
    this.updatePreview();
  },

  resizeCanvas() {
    if (!this.canvas) return;
    const container = this.canvas.parentElement;
    const size = Math.min(400, container.offsetWidth - 4);
    this.canvas.width = size;
    this.canvas.height = size;
    this.pieceSize = size / this.gridSize;
  },

  updatePreview() {
    if (!this.previewCanvas) return;
    const pic = this.pictures[this.selectedPicture];
    const ctx = this.previewCanvas.getContext('2d');
    const size = 100;

    this.previewCanvas.width = size;
    this.previewCanvas.height = size;

    // Draw scaled preview
    const img = new Image();
    const svgBlob = new Blob([pic.svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
      URL.revokeObjectURL(url);
    };
    img.src = url;
  },

  startGame() {
    const pic = this.pictures[this.selectedPicture];

    // Reset state
    this.score = 0;
    this.moves = 0;
    this.isPlaying = true;
    this.pieces = [];
    this.placedPieces = [];

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Create puzzle pieces
    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        this.pieces.push({
          id: row * this.gridSize + col,
          row: row,
          col: col,
          x: this.pieceSize * 2.2 + Math.random() * 50,
          y: 20 + Math.random() * (this.canvas.height - 150),
          correctX: col * this.pieceSize,
          correctY: row * this.pieceSize,
          width: this.pieceSize,
          height: this.pieceSize,
          placed: false
        });
      }
    }

    // Shuffle pieces
    this.pieces.sort(() => Math.random() - 0.5);

    // Hide overlays
    const startScreen = document.querySelector('.jigsaw-start-screen');
    if (startScreen) startScreen.classList.add('hidden');

    const winScreen = document.querySelector('.jigsaw-win-screen');
    if (winScreen) winScreen.classList.remove('active');

    // Update displays
    this.updateScore();
    this.updateMoves();

    // Draw background
    this.drawBackground();

    // Start render loop
    this.render();
  },

  drawBackground() {
    const pic = this.pictures[this.selectedPicture];

    // Draw target area
    this.ctx.fillStyle = pic.bgColor;
    this.ctx.fillRect(0, 0, this.pieceSize * 3, this.pieceSize * 3);

    // Draw grid lines
    this.ctx.strokeStyle = 'rgba(45, 27, 78, 0.2)';
    this.ctx.lineWidth = 2;
    for (let i = 1; i < this.gridSize; i++) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * this.pieceSize, 0);
      this.ctx.lineTo(i * this.pieceSize, this.pieceSize * this.gridSize);
      this.ctx.stroke();

      this.ctx.beginPath();
      this.ctx.moveTo(0, i * this.pieceSize);
      this.ctx.lineTo(this.pieceSize * this.gridSize, i * this.pieceSize);
      this.ctx.stroke();
    }

    // Draw border
    this.ctx.strokeStyle = '#2D1B4E';
    this.ctx.lineWidth = 4;
    this.ctx.strokeRect(0, 0, this.pieceSize * 3, this.pieceSize * 3);
  },

  render() {
    if (!this.isPlaying) return;

    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw background with target area
    this.drawBackground();

    // Draw placed pieces
    this.placedPieces.forEach(piece => {
      this.drawPiece(piece, true);
    });

    // Draw unplaced pieces
    this.pieces.filter(p => !p.placed).forEach(piece => {
      this.drawPiece(piece, false);
    });

    // Highlight current piece
    if (this.currentPiece && !this.currentPiece.placed) {
      this.ctx.strokeStyle = '#FFD740';
      this.ctx.lineWidth = 4;
      this.ctx.strokeRect(
        this.currentPiece.x - 2,
        this.currentPiece.y - 2,
        this.currentPiece.width + 4,
        this.currentPiece.height + 4
      );
    }

    requestAnimationFrame(() => this.render());
  },

  drawPiece(piece, isPlaced) {
    const pic = this.pictures[this.selectedPicture];
    const size = this.pieceSize;

    // Create clipping path for piece
    this.ctx.save();

    // Draw piece background
    this.ctx.fillStyle = isPlaced ? pic.bgColor : '#FFF';
    this.ctx.fillRect(piece.x, piece.y, size, size);

    // Draw piece content (simplified - just the piece area)
    if (isPlaced) {
      // Draw with SVG
      const img = new Image();
      const svgBlob = new Blob([pic.svg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);

      img.onload = () => {
        this.ctx.drawImage(
          img,
          piece.col * size, piece.row * size, size, size,
          piece.x, piece.y, size, size
        );
        URL.revokeObjectURL(url);
      };
      img.src = url;

      // Border
      this.ctx.strokeStyle = '#2D1B4E';
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(piece.x, piece.y, size, size);
    } else {
      // Draw placeholder for unplaced pieces
      this.ctx.fillStyle = '#F5F5F5';
      this.ctx.fillRect(piece.x + 2, piece.y + 2, size - 4, size - 4);

      // Number on piece
      this.ctx.fillStyle = '#BDBDBD';
      this.ctx.font = 'bold 20px Fredoka One, sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(
        piece.id + 1,
        piece.x + size / 2,
        piece.y + size / 2
      );

      // Border
      this.ctx.strokeStyle = '#2D1B4E';
      this.ctx.lineWidth = 3;
      this.ctx.strokeRect(piece.x, piece.y, size, size);

      // Shadow effect
      this.ctx.fillStyle = 'rgba(0,0,0,0.1)';
      this.ctx.fillRect(piece.x + 3, piece.y + 3, size - 3, size - 3);
      this.ctx.strokeStyle = '#2D1B4E';
      this.ctx.lineWidth = 3;
      this.ctx.strokeRect(piece.x, piece.y, size, size);
    }

    this.ctx.restore();
  },

  handleMouseDown(e) {
    if (!this.isPlaying) return;

    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Find clicked piece (reverse order for top piece)
    const unplaced = this.pieces.filter(p => !p.placed).reverse();
    for (const piece of unplaced) {
      if (x >= piece.x && x <= piece.x + piece.width &&
          y >= piece.y && y <= piece.y + piece.height) {
        this.currentPiece = piece;
        this.dragOffset.x = x - piece.x;
        this.dragOffset.y = y - piece.y;
        this.moves++;
        this.updateMoves();

        // Move to end of array (draw on top)
        const idx = this.pieces.findIndex(p => p.id === piece.id);
        this.pieces.splice(idx, 1);
        this.pieces.push(piece);
        break;
      }
    }
  },

  handleMouseMove(e) {
    if (!this.currentPiece || !this.isPlaying) return;

    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    this.currentPiece.x = x - this.dragOffset.x;
    this.currentPiece.y = y - this.dragOffset.y;
  },

  handleMouseUp(e) {
    if (!this.currentPiece || !this.isPlaying) return;

    const piece = this.currentPiece;
    const targetX = piece.correctX;
    const targetY = piece.correctY;

    // Check if close enough to snap
    const dist = Math.sqrt(
      Math.pow(piece.x + piece.width / 2 - (targetX + piece.width / 2), 2) +
      Math.pow(piece.y + piece.height / 2 - (targetY + piece.height / 2), 2)
    );

    if (dist < this.snapDistance * 2) {
      // Snap to correct position
      piece.x = targetX;
      piece.y = targetY;
      piece.placed = true;
      this.placedPieces.push(piece);
      this.score += 10;
      this.updateScore();
      this.playSnapSound();

      // Check for win
      if (this.placedPieces.length === this.pieces.length) {
        setTimeout(() => this.showWin(), 300);
      }
    } else {
      // Return to shuffle area (right side)
      piece.x = this.pieceSize * 2.2 + Math.random() * 50;
      piece.y = 20 + Math.random() * (this.canvas.height - 150);
    }

    this.currentPiece = null;
  },

  showWin() {
    this.isPlaying = false;

    // Show win screen
    const winScreen = document.querySelector('.jigsaw-win-screen');
    if (winScreen) {
      winScreen.classList.add('active');
      winScreen.querySelector('.final-score').textContent =
        `Completed in ${this.moves} moves!`;
    }

    this.playWinSound();
  },

  nextPicture() {
    this.selectedPicture = (this.selectedPicture + 1) % this.pictures.length;
    this.updatePreview();
    this.startGame();
  },

  updateScore() {
    if (this.scoreDisplay) {
      this.scoreDisplay.textContent = this.score;
    }
  },

  updateMoves() {
    if (this.movesDisplay) {
      this.movesDisplay.textContent = this.moves;
    }
  },

  playSnapSound() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } catch (e) {}
  },

  playWinSound() {
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
          gain.gain.setValueAtTime(0.25, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
          osc.start();
          osc.stop(ctx.currentTime + 0.3);
        }, i * 150);
      });
    } catch (e) {}
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  jigsawGame.init();
});
