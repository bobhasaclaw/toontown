// ToonTown Cartoons - Animation Engine

// SVG Character Templates
const CHARACTERS = {
  toonTown: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="120" rx="70" ry="65" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="4"/>
    <circle cx="60" cy="100" r="15" fill="#FFD740" opacity="0.8"/>
    <circle cx="140" cy="130" r="12" fill="#7C4DFF" opacity="0.8"/>
    <circle cx="80" cy="150" r="10" fill="#00E5FF" opacity="0.8"/>
    <ellipse class="eye" cx="75" cy="95" rx="18" ry="22" fill="#FFF" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse class="eye" cx="125" cy="95" rx="18" ry="22" fill="#FFF" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="80" cy="98" r="10" fill="#2D1B4E"/>
    <circle cx="130" cy="98" r="10" fill="#2D1B4E"/>
    <circle cx="83" cy="93" r="4" fill="#FFF"/>
    <circle cx="133" cy="93" r="4" fill="#FFF"/>
    <path d="M 70 130 Q 100 155 130 130" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="100" cy="145" rx="12" ry="8" fill="#FF4081"/>
    <ellipse cx="50" cy="120" rx="12" ry="8" fill="#FF6B9D" opacity="0.5"/>
    <ellipse cx="150" cy="120" rx="12" ry="8" fill="#FF6B9D" opacity="0.5"/>
    <ellipse class="hand" cx="35" cy="140" rx="20" ry="18" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="165" cy="140" rx="20" ry="18" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="25" cy="125" r="6" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="35" cy="118" r="6" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="45" cy="125" r="6" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="155" cy="125" r="6" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="165" cy="118" r="6" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="175" cy="125" r="6" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="2"/>
    <path d="M 70 60 Q 60 40 80 45 Q 75 55 85 60" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="2"/>
    <path d="M 100 55 Q 95 35 105 40 Q 110 50 115 55" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="2"/>
    <path d="M 130 60 Q 145 45 135 40 Q 120 50 125 60" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="2"/>
  </svg>`,

  burger: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="100" rx="80" ry="40" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
    <ellipse cx="100" cy="85" rx="70" ry="25" fill="#8B4513" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="100" cy="75" rx="65" ry="15" fill="#228B22" stroke="#2D1B4E" stroke-width="2"/>
    <ellipse cx="100" cy="65" rx="60" ry="20" fill="#FF6347" stroke="#2D1B4E" stroke-width="2"/>
    <ellipse cx="100" cy="50" rx="70" ry="30" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
    <ellipse cx="70" cy="35" rx="8" ry="5" fill="#FFF5E6"/>
    <ellipse cx="100" cy="30" rx="8" ry="5" fill="#FFF5E6"/>
    <ellipse cx="130" cy="35" rx="8" ry="5" fill="#FFF5E6"/>
    <circle cx="75" cy="90" r="8" fill="#FFD740"/>
    <circle cx="125" cy="90" r="8" fill="#FFD740"/>
  </svg>`,

  rainbow: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`,

  star: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,10 120,70 185,70 135,110 155,175 100,140 45,175 65,110 15,70 80,70" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
    <circle cx="80" cy="85" r="10" fill="#2D1B4E"/>
    <circle cx="120" cy="85" r="10" fill="#2D1B4E"/>
    <circle cx="83" cy="82" r="4" fill="#FFF"/>
    <circle cx="123" cy="82" r="4" fill="#FFF"/>
    <path d="M 80 115 Q 100 135 120 115" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  cloud: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="100" rx="40" ry="30" fill="#E3F2FD" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="100" cy="85" rx="50" ry="40" fill="#E3F2FD" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="140" cy="100" rx="40" ry="30" fill="#E3F2FD" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="80" cy="110" rx="30" ry="25" fill="#E3F2FD" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="120" cy="110" rx="30" ry="25" fill="#E3F2FD" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="85" cy="90" r="6" fill="#2D1B4E"/>
    <circle cx="115" cy="90" r="6" fill="#2D1B4E"/>
    <path d="M 90 105 Q 100 115 110 105" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  shoe: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 30 120 L 80 100 L 160 100 L 180 130 L 180 160 L 30 160 Z" fill="#8B4513" stroke="#2D1B4E" stroke-width="4"/>
    <ellipse cx="170" cy="140" rx="20" ry="15" fill="#8B4513" stroke="#2D1B4E" stroke-width="3"/>
    <rect x="35" y="120" width="40" height="8" fill="#654321"/>
    <ellipse cx="100" cy="115" rx="30" ry="10" fill="#A0522D"/>
    <circle cx="70" cy="135" r="8" fill="#2D1B4E"/>
    <circle cx="100" cy="135" r="8" fill="#2D1B4E"/>
    <circle cx="130" cy="135" r="8" fill="#2D1B4E"/>
  </svg>`,

  hat: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="150" rx="90" ry="20" fill="#2D1B4E"/>
    <path d="M 40 150 L 60 60 L 140 60 L 160 150" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="4"/>
    <rect x="55" y="100" width="90" height="15" fill="#FFD740"/>
    <ellipse cx="100" cy="60" rx="40" ry="10" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="70" cy="80" r="8" fill="#FF6B9D"/>
    <circle cx="100" cy="75" r="8" fill="#00E5FF"/>
    <circle cx="130" cy="80" r="8" fill="#FFD740"/>
  </svg>`,

  numbers: {
    1: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#FF6B9D" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">1</text>`,
    2: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#7C4DFF" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">2</text>`,
    3: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#00E5FF" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">3</text>`,
    4: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#FFD740" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">4</text>`,
    5: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#FF4081" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">5</text>`,
    6: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#4CAF50" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">6</text>`,
    7: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#FF9800" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">7</text>`,
    8: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#E91E63" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">8</text>`,
    9: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#9C27B0" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">9</text>`,
    10: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="100" fill="#00BCD4" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">10</text>`
  },

  colors: {
    red: `<rect x="25" y="25" width="150" height="150" rx="20" fill="#FF0000" stroke="#2D1B4E" stroke-width="4"/>`,
    orange: `<rect x="25" y="25" width="150" height="150" rx="20" fill="#FFA500" stroke="#2D1B4E" stroke-width="4"/>`,
    yellow: `<rect x="25" y="25" width="150" height="150" rx="20" fill="#FFFF00" stroke="#2D1B4E" stroke-width="4"/>`,
    green: `<rect x="25" y="25" width="150" height="150" rx="20" fill="#00FF00" stroke="#2D1B4E" stroke-width="4"/>`,
    blue: `<rect x="25" y="25" width="150" height="150" rx="20" fill="#0000FF" stroke="#2D1B4E" stroke-width="4"/>`,
    purple: `<rect x="25" y="25" width="150" height="150" rx="20" fill="#8B00FF" stroke="#2D1B4E" stroke-width="4"/>`
  },

  // New characters for stories
  moon: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 100 30 A 70 70 0 1 0 100 170 A 50 50 0 1 1 100 30" fill="#FFE082" stroke="#2D1B4E" stroke-width="4"/>
    <circle cx="70" cy="80" r="8" fill="#2D1B4E"/>
    <circle cx="90" cy="110" r="6" fill="#2D1B4E"/>
    <circle cx="60" cy="120" r="5" fill="#2D1B4E"/>
  </svg>`,

  bed: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="100" width="160" height="60" rx="10" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="4"/>
    <rect x="25" y="80" width="70" height="50" rx="8" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="3"/>
    <rect x="100" y="85" width="60" height="20" rx="5" fill="#E1BEE7" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="50" cy="70" r="15" fill="#FFE082"/>
    <ellipse cx="40" cy="65" rx="8" ry="5" fill="#FFF" opacity="0.5"/>
  </svg>`,

  easel: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <line x1="50" y1="40" x2="30" y2="170" stroke="#8B4513" stroke-width="8"/>
    <line x1="150" y1="40" x2="170" y2="170" stroke="#8B4513" stroke-width="8"/>
    <line x1="45" y1="170" x2="155" y2="170" stroke="#8B4513" stroke-width="6"/>
    <rect x="45" y="50" width="110" height="90" fill="#FFF" stroke="#2D1B4E" stroke-width="3"/>
    <path d="M 55 130 Q 80 100 100 130 Q 120 160 145 130" fill="#00E5FF" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="80" cy="90" r="15" fill="#FF6B9D"/>
    <polygon points="130,80 140,100 120,100" fill="#FFD740"/>
  </svg>`,

  train: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="80" width="120" height="70" rx="10" fill="#FF4081" stroke="#2D1B4E" stroke-width="4"/>
    <rect x="150" y="90" width="40" height="50" rx="5" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="50" cy="155" r="15" fill="#2D1B4E"/>
    <circle cx="50" cy="155" r="8" fill="#666"/>
    <circle cx="100" cy="155" r="15" fill="#2D1B4E"/>
    <circle cx="100" cy="155" r="8" fill="#666"/>
    <circle cx="160" cy="145" r="12" fill="#2D1B4E"/>
    <circle cx="160" cy="145" r="6" fill="#666"/>
    <rect x="60" y="60" width="50" height="30" rx="5" fill="#FFD740" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="85" cy="75" r="10" fill="#FF6B9D"/>
  </svg>`,

  elephant: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
  </svg>`,

  cat: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
    <path d="M 90 135 Q 100 145 110 135" fill="none" stroke="#2D1B4E" stroke-width="2"/>
    <line x1="45" y1="115" x2="20" y2="110" stroke="#2D1B4E" stroke-width="2"/>
    <line x1="45" y1="120" x2="20" y2="125" stroke="#2D1B4E" stroke-width="2"/>
    <line x1="155" y1="115" x2="180" y2="110" stroke="#2D1B4E" stroke-width="2"/>
    <line x1="155" y1="120" x2="180" y2="125" stroke="#2D1B4E" stroke-width="2"/>
  </svg>`,

  duck: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="130" rx="55" ry="45" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
    <circle cx="100" cy="70" r="40" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
    <circle cx="85" cy="60" r="8" fill="#2D1B4E"/>
    <circle cx="115" cy="60" r="8" fill="#2D1B4E"/>
    <circle cx="87" cy="58" r="3" fill="#FFF"/>
    <circle cx="117" cy="58" r="3" fill="#FFF"/>
    <ellipse cx="100" cy="85" rx="20" ry="12" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="55" cy="140" rx="20" ry="10" fill="#FF9800" stroke="#2D1B4E" stroke-width="2"/>
    <ellipse cx="145" cy="140" rx="20" ry="10" fill="#FF9800" stroke="#2D1B4E" stroke-width="2"/>
    <path d="M 70 50 Q 60 30 75 40" fill="#FFD740" stroke="#2D1B4E" stroke-width="2"/>
    <path d="M 130 50 Q 140 30 125 40" fill="#FFD740" stroke="#2D1B4E" stroke-width="2"/>
  </svg>`,

  sun: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="50" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
    <circle cx="85" cy="90" r="8" fill="#2D1B4E"/>
    <circle cx="115" cy="90" r="8" fill="#2D1B4E"/>
    <path d="M 80 115 Q 100 135 120 115" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
    <line x1="100" y1="40" x2="100" y2="20" stroke="#FFD740" stroke-width="6" stroke-linecap="round"/>
    <line x1="100" y1="160" x2="100" y2="180" stroke="#FFD740" stroke-width="6" stroke-linecap="round"/>
    <line x1="40" y1="100" x2="20" y2="100" stroke="#FFD740" stroke-width="6" stroke-linecap="round"/>
    <line x1="160" y1="100" x2="180" y2="100" stroke="#FFD740" stroke-width="6" stroke-linecap="round"/>
    <line x1="55" y1="55" x2="40" y2="40" stroke="#FFD740" stroke-width="6" stroke-linecap="round"/>
    <line x1="145" y1="55" x2="160" y2="40" stroke="#FFD740" stroke-width="6" stroke-linecap="round"/>
    <line x1="55" y1="145" x2="40" y2="160" stroke="#FFD740" stroke-width="6" stroke-linecap="round"/>
    <line x1="145" y1="145" x2="160" y2="160" stroke="#FFD740" stroke-width="6" stroke-linecap="round"/>
  </svg>`,

  raincloud: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="80" rx="40" ry="30" fill="#90A4AE" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="100" cy="65" rx="50" ry="40" fill="#90A4AE" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="140" cy="80" rx="40" ry="30" fill="#90A4AE" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="80" cy="90" rx="30" ry="25" fill="#90A4AE" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="120" cy="90" rx="30" ry="25" fill="#90A4AE" stroke="#2D1B4E" stroke-width="3"/>
    <line x1="60" y1="120" x2="55" y2="150" stroke="#00E5FF" stroke-width="4" stroke-linecap="round"/>
    <line x1="80" y1="120" x2="75" y2="155" stroke="#00E5FF" stroke-width="4" stroke-linecap="round"/>
    <line x1="100" y1="120" x2="95" y2="160" stroke="#00E5FF" stroke-width="4" stroke-linecap="round"/>
    <line x1="120" y1="120" x2="115" y2="155" stroke="#00E5FF" stroke-width="4" stroke-linecap="round"/>
    <line x1="140" y1="120" x2="135" y2="150" stroke="#00E5FF" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  umbrella: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 30 100 Q 100 20 170 100" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="4"/>
    <line x1="100" y1="100" x2="100" y2="170" stroke="#8B4513" stroke-width="6"/>
    <path d="M 90 170 Q 85 180 95 175" fill="none" stroke="#8B4513" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="100" cy="100" rx="70" ry="10" fill="#FF4081" stroke="#2D1B4E" stroke-width="2"/>
    <path d="M 50 80 Q 70 60 90 80" fill="none" stroke="#FFF" stroke-width="2" opacity="0.5"/>
    <path d="M 110 80 Q 130 60 150 80" fill="none" stroke="#FFF" stroke-width="2" opacity="0.5"/>
  </svg>`,

  // Shapes for educational
  shapes: {
    circle: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="70" fill="#FF6B9D" stroke="#2D1B4E" stroke-width="4"/>
    </svg>`,
    square: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect x="30" y="30" width="140" height="140" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="4"/>
    </svg>`,
    triangle: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,20 180,170 20,170" fill="#00E5FF" stroke="#2D1B4E" stroke-width="4"/>
    </svg>`,
    star: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,10 120,70 185,70 135,110 155,175 100,140 45,175 65,110 15,70 80,70" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
    </svg>`,
    heart: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M 100 170 Q 20 100 20 60 Q 20 20 60 20 Q 100 20 100 60 Q 100 20 140 20 Q 180 20 180 60 Q 180 100 100 170" fill="#FF4081" stroke="#2D1B4E" stroke-width="4"/>
    </svg>`,
    diamond: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="100,10 180,100 100,190 20,100" fill="#00BCD4" stroke="#2D1B4E" stroke-width="4"/>
    </svg>`
  },

  // More new characters
  bubble: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="70" fill="none" stroke="#00E5FF" stroke-width="4" opacity="0.7"/>
    <circle cx="100" cy="100" r="70" fill="none" stroke="#7C4DFF" stroke-width="2" opacity="0.5"/>
    <ellipse cx="70" cy="70" rx="20" ry="15" fill="#FFF" opacity="0.6"/>
  </svg>`,

  teddy: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="50" r="25" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="140" cy="50" r="25" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="100" cy="110" rx="60" ry="55" fill="#8D6E63" stroke="#2D1B4E" stroke-width="4"/>
    <circle cx="75" cy="95" r="10" fill="#2D1B4E"/>
    <circle cx="125" cy="95" r="10" fill="#2D1B4E"/>
    <circle cx="78" cy="92" r="4" fill="#FFF"/>
    <circle cx="128" cy="92" r="4" fill="#FFF"/>
    <ellipse cx="100" cy="120" rx="12" ry="8" fill="#A1887F" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="100" cy="145" r="8" fill="#8D6E63" stroke="#2D1B4E" stroke-width="2"/>
  </svg>`,

  magicHat: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="160" rx="80" ry="20" fill="#2D1B4E"/>
    <path d="M 30 160 L 60 50 L 140 50 L 170 160" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="4"/>
    <ellipse cx="100" cy="50" rx="40" ry="12" fill="#7C4DFF" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="100" cy="160" rx="75" ry="15" fill="#651FFF" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="80" cy="100" r="8" fill="#FFD740"/>
    <circle cx="120" cy="90" r="6" fill="#FF6B9D"/>
    <circle cx="100" cy="120" r="7" fill="#00E5FF"/>
  </svg>`,

  campfire: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,30 120,80 140,60 130,100 170,120 130,110 100,160 70,110 30,120 70,100 60,60 80,80" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
    <polygon points="100,50 115,85 125,70 120,100 145,115 120,108 100,140 80,108 55,115 80,100 75,70 85,85" fill="#FFD740" stroke="#2D1B4E" stroke-width="2"/>
    <ellipse cx="100" cy="165" rx="60" ry="15" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
    <line x1="40" y1="155" x2="50" y2="175" stroke="#8D6E63" stroke-width="6"/>
    <line x1="160" y1="155" x2="150" y2="175" stroke="#8D6E63" stroke-width="6"/>
    <line x1="70" y1="160" x2="75" y2="178" stroke="#8D6E63" stroke-width="5"/>
    <line x1="130" y1="160" x2="125" y2="178" stroke="#8D6E63" stroke-width="5"/>
  </svg>`,

  lion: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="65" fill="#FFD740" stroke="#2D1B4E" stroke-width="4"/>
    <ellipse cx="100" cy="115" rx="50" ry="45" fill="#FF9800" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="75" cy="100" r="10" fill="#2D1B4E"/>
    <circle cx="125" cy="100" r="10" fill="#2D1B4E"/>
    <circle cx="78" cy="97" r="4" fill="#FFF"/>
    <circle cx="128" cy="97" r="4" fill="#FFF"/>
    <ellipse cx="100" cy="125" rx="15" ry="10" fill="#A1887F" stroke="#2D1B4E" stroke-width="2"/>
    <path d="M 85 140 Q 100 155 115 140" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
  </svg>`,

  monkey: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="55" fill="#8D6E63" stroke="#2D1B4E" stroke-width="4"/>
    <circle cx="100" cy="100" r="35" fill="#A1887F"/>
    <ellipse cx="100" cy="115" rx="25" ry="20" fill="#D7CCC8" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="75" cy="90" r="12" fill="#2D1B4E"/>
    <circle cx="125" cy="90" r="12" fill="#2D1B4E"/>
    <circle cx="78" cy="87" r="5" fill="#FFF"/>
    <circle cx="128" cy="87" r="5" fill="#FFF"/>
    <ellipse cx="100" cy="110" rx="8" ry="5" fill="#5D4037"/>
    <path d="M 85 130 Q 100 140 115 130" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
    <circle cx="45" cy="95" r="20" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="45" cy="95" r="12" fill="#A1887F"/>
    <circle cx="155" cy="95" r="20" fill="#8D6E63" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="155" cy="95" r="12" fill="#A1887F"/>
  </svg>`,

  frog: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="100" cy="120" rx="65" ry="50" fill="#4CAF50" stroke="#2D1B4E" stroke-width="4"/>
    <circle cx="65" cy="70" r="25" fill="#4CAF50" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="135" cy="70" r="25" fill="#4CAF50" stroke="#2D1B4E" stroke-width="3"/>
    <circle cx="65" cy="65" r="15" fill="#FFF" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="135" cy="65" r="15" fill="#FFF" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="68" cy="65" r="8" fill="#2D1B4E"/>
    <circle cx="138" cy="65" r="8" fill="#2D1B4E"/>
    <ellipse cx="100" cy="140" rx="30" ry="15" fill="#81C784" stroke="#2D1B4E" stroke-width="2"/>
    <path d="M 70 145 Q 100 165 130 145" fill="none" stroke="#2D1B4E" stroke-width="4" stroke-linecap="round"/>
  </svg>`,

  superhero: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M 100 30 L 130 80 L 100 70 L 70 80 Z" fill="#FFD740" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="100" cy="120" rx="55" ry="50" fill="#FF4081" stroke="#2D1B4E" stroke-width="4"/>
    <rect x="75" y="90" width="50" height="30" fill="#FFD740" stroke="#2D1B4E" stroke-width="2"/>
    <circle cx="80" cy="105" r="8" fill="#2D1B4E"/>
    <circle cx="120" cy="105" r="8" fill="#2D1B4E"/>
    <circle cx="83" cy="102" r="3" fill="#FFF"/>
    <circle cx="123" cy="102" r="3" fill="#FFF"/>
    <path d="M 85 125 Q 100 140 115 125" fill="none" stroke="#2D1B4E" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="40" cy="130" rx="18" ry="25" fill="#FF4081" stroke="#2D1B4E" stroke-width="3"/>
    <ellipse cx="160" cy="130" rx="18" ry="25" fill="#FF4081" stroke="#2D1B4E" stroke-width="3"/>
  </svg>`,

  // Letters for alphabet
  letters: {
    A: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#FF6B9D" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">A</text>`,
    B: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#7C4DFF" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">B</text>`,
    C: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#00E5FF" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">C</text>`,
    D: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#4CAF50" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">D</text>`,
    E: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#FF9800" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">E</text>`,
    F: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#E91E63" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">F</text>`,
    G: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#9C27B0" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">G</text>`,
    H: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#00BCD4" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">H</text>`,
    I: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#FFEB3B" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">I</text>`,
    J: `<text x="100" y="150" font-family="Fredoka One, cursive" font-size="120" fill="#8BC34A" text-anchor="middle" stroke="#2D1B4E" stroke-width="4">J</text>`
  }
};

// Sound System using Web Audio API
class CartoonSound {
  constructor() {
    this.audioCtx = null;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.currentMusic = null;
    this.isMuted = false;
  }

  init() {
    if (this.audioCtx) return;
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.value = 0.5;
    this.masterGain.connect(this.audioCtx.destination);

    this.musicGain = this.audioCtx.createGain();
    this.musicGain.gain.value = 0.3;
    this.musicGain.connect(this.masterGain);

    this.sfxGain = this.audioCtx.createGain();
    this.sfxGain.gain.value = 0.6;
    this.sfxGain.connect(this.masterGain);
  }

  resume() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  // Play a tone with frequency, duration, and type
  playTone(freq, duration, type = 'sine', gainNode = this.sfxGain, attack = 0.01, decay = 0.1) {
    if (!this.audioCtx) this.init();
    this.resume();

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = type;
    osc.frequency.value = freq;

    gain.gain.setValueAtTime(0, this.audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.5, this.audioCtx.currentTime + attack);
    gain.gain.linearRampToValueAtTime(0, this.audioCtx.currentTime + duration - decay);

    osc.connect(gain);
    gain.connect(gainNode);

    osc.start();
    osc.stop(this.audioCtx.currentTime + duration);
  }

  // Play a note sequence (for music)
  playNotes(notes, tempo = 120) {
    if (!this.audioCtx) this.init();
    this.resume();

    const beatDuration = 60 / tempo;
    let time = this.audioCtx.currentTime;

    notes.forEach((note, i) => {
      if (note.freq === 0) {
        // Rest
        time += beatDuration * note.duration;
      } else {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = note.type || 'sine';
        osc.frequency.value = note.freq;

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.3, time + 0.02);
        gain.gain.linearRampToValueAtTime(0, time + beatDuration * note.duration - 0.05);

        osc.connect(gain);
        gain.connect(this.musicGain);

        osc.start(time);
        osc.stop(time + beatDuration * note.duration);

        time += beatDuration * note.duration;
      }
    });
  }

  // Sound effects
  playAppear() {
    this.playTone(523, 0.15, 'sine'); // C5
    setTimeout(() => this.playTone(659, 0.15, 'sine'), 80); // E5
    setTimeout(() => this.playTone(784, 0.2, 'sine'), 160); // G5
  }

  playSpeech() {
    this.playTone(440, 0.08, 'sine');
    setTimeout(() => this.playTone(550, 0.08, 'sine'), 100);
  }

  playSceneChange() {
    this.playTone(330, 0.1, 'triangle');
    setTimeout(() => this.playTone(392, 0.1, 'triangle'), 80);
    setTimeout(() => this.playTone(494, 0.15, 'triangle'), 160);
  }

  playFunny() {
    // Descending "wah wah" for funny moments
    this.playTone(523, 0.2, 'sawtooth');
    setTimeout(() => this.playTone(392, 0.2, 'sawtooth'), 150);
    setTimeout(() => this.playTone(261, 0.3, 'sawtooth'), 300);
  }

  playHappy() {
    this.playTone(523, 0.1, 'sine');
    setTimeout(() => this.playTone(659, 0.1, 'sine'), 80);
    setTimeout(() => this.playTone(784, 0.1, 'sine'), 160);
    setTimeout(() => this.playTone(1047, 0.2, 'sine'), 240);
  }

  playCount() {
    this.playTone(880, 0.1, 'square');
  }

  playColor() {
    this.playTone(698, 0.15, 'sine');
    setTimeout(() => this.playTone(880, 0.15, 'sine'), 100);
    setTimeout(() => this.playTone(1047, 0.2, 'sine'), 200);
  }

  playMusicNote() {
    const notes = [523, 587, 659, 698, 784, 880, 988, 1047];
    this.playTone(notes[Math.floor(Math.random() * notes.length)], 0.15, 'sine');
  }

  playBoing() {
    // Bouncy boing sound
    let freq = 400;
    for (let i = 0; i < 4; i++) {
      setTimeout(() => this.playTone(freq - i * 50, 0.1, 'sine'), i * 60);
    }
  }

  playError() {
    this.playTone(200, 0.2, 'sawtooth');
    setTimeout(() => this.playTone(150, 0.3, 'sawtooth'), 150);
  }

  // Speech synthesis for character voices
  speak(text, voiceType = 'toonTown') {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Different voice settings per character
    const voiceSettings = {
      toonTown: { rate: 1.0, pitch: 1.2, volume: 0.8 },
      silly: { rate: 1.1, pitch: 1.4, volume: 0.7 },
      narrator: { rate: 0.9, pitch: 1.0, volume: 0.9 },
      happy: { rate: 1.2, pitch: 1.3, volume: 0.8 },
      surprised: { rate: 1.3, pitch: 1.5, volume: 0.8 }
    };

    const settings = voiceSettings[voiceType] || voiceSettings.toonTown;
    utterance.rate = settings.rate;
    utterance.pitch = settings.pitch;
    utterance.volume = settings.volume;

    // Try to get a good voice
    const voices = window.speechSynthesis.getVoices();
    // Prefer friendly/English voices
    const preferredVoice = voices.find(v =>
      v.lang.startsWith('en') && (v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Karen'))
    ) || voices.find(v => v.lang.startsWith('en')) || voices[0];

    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    window.speechSynthesis.speak(utterance);
    return utterance;
  }

  // Stop speaking
  stopSpeaking() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  // Background music themes - now with layered instruments
  stopMusic() {
    if (this.currentMusic) {
      clearInterval(this.currentMusic);
      this.currentMusic = null;
    }
  }

  startFunnyMusic() {
    if (!this.audioCtx) this.init();
    this.resume();
    this.stopMusic();

    // Layered goofy music: melody + bass + rhythm
    const melody = [
      { freq: 392, duration: 0.25 }, { freq: 440, duration: 0.25 },
      { freq: 392, duration: 0.25 }, { freq: 349, duration: 0.25 },
      { freq: 330, duration: 0.5 },
      { freq: 294, duration: 0.25 }, { freq: 330, duration: 0.25 },
      { freq: 294, duration: 0.25 }, { freq: 262, duration: 0.25 },
      { freq: 294, duration: 0.5 }
    ];

    const bass = [
      { freq: 196, duration: 0.5 }, { freq: 0, duration: 0.5 },
      { freq: 175, duration: 0.5 }, { freq: 0, duration: 0.5 },
      { freq: 165, duration: 0.5 }, { freq: 0, duration: 0.5 },
      { freq: 147, duration: 0.5 }, { freq: 0, duration: 0.5 }
    ];

    const playLoop = () => {
      // Play melody with clarinet-like sound
      this.playInstrument(melody, 200, 'sawtooth', 0.15);
      // Play bass with deeper tone
      this.playInstrument(bass, 200, 'triangle', 0.12);
      // Add playful percussion
      this.playPercussion([1,0,1,0,1,1,0,1], 200, 0.08);
    };

    playLoop();
    this.currentMusic = setInterval(playLoop, 4000);
  }

  startMusicTheme() {
    if (!this.audioCtx) this.init();
    this.resume();
    this.stopMusic();

    // Catchy rainbow boogie with full band
    const melody = [
      { freq: 523, duration: 0.2 }, { freq: 523, duration: 0.2 }, { freq: 587, duration: 0.2 }, { freq: 659, duration: 0.2 },
      { freq: 784, duration: 0.4 },
      { freq: 659, duration: 0.2 }, { freq: 587, duration: 0.2 }, { freq: 523, duration: 0.2 }, { freq: 494, duration: 0.2 },
      { freq: 440, duration: 0.4 },
      { freq: 494, duration: 0.2 }, { freq: 523, duration: 0.2 }, { freq: 587, duration: 0.2 }, { freq: 659, duration: 0.2 },
      { freq: 784, duration: 0.6 }
    ];

    const harmony = [
      { freq: 392, duration: 0.2 }, { freq: 392, duration: 0.2 }, { freq: 440, duration: 0.2 }, { freq: 494, duration: 0.2 },
      { freq: 587, duration: 0.4 },
      { freq: 494, duration: 0.2 }, { freq: 440, duration: 0.2 }, { freq: 392, duration: 0.2 }, { freq: 370, duration: 0.2 },
      { freq: 330, duration: 0.4 },
      { freq: 370, duration: 0.2 }, { freq: 392, duration: 0.2 }, { freq: 440, duration: 0.2 }, { freq: 494, duration: 0.2 },
      { freq: 587, duration: 0.6 }
    ];

    const bass = [
      { freq: 262, duration: 0.4 }, { freq: 294, duration: 0.4 },
      { freq: 330, duration: 0.4 }, { freq: 349, duration: 0.4 },
      { freq: 392, duration: 0.4 }, { freq: 0, duration: 0.4 },
      { freq: 330, duration: 0.4 }, { freq: 294, duration: 0.4 }
    ];

    const playLoop = () => {
      this.playInstrument(melody, 180, 'square', 0.1);
      this.playInstrument(harmony, 180, 'sine', 0.08);
      this.playInstrument(bass, 180, 'triangle', 0.15);
      this.playPercussion([1,1,1,1,1,1,1,1], 180, 0.06);
    };

    playLoop();
    this.currentMusic = setInterval(playLoop, 5000);
  }

  startEducationalMusic() {
    if (!this.audioCtx) this.init();
    this.resume();
    this.stopMusic();

    // Cheerful learning melody with xylophone-like sound
    const melody = [
      { freq: 523, duration: 0.25 }, { freq: 0, duration: 0.25 },
      { freq: 587, duration: 0.25 }, { freq: 0, duration: 0.25 },
      { freq: 659, duration: 0.5 },
      { freq: 523, duration: 0.5 },
      { freq: 784, duration: 0.5 },
      { freq: 880, duration: 0.5 },
      { freq: 784, duration: 0.5 }
    ];

    const harmony = [
      { freq: 659, duration: 0.25 }, { freq: 0, duration: 0.25 },
      { freq: 740, duration: 0.25 }, { freq: 0, duration: 0.25 },
      { freq: 880, duration: 0.5 },
      { freq: 659, duration: 0.5 },
      { freq: 988, duration: 0.5 },
      { freq: 1047, duration: 0.5 },
      { freq: 988, duration: 0.5 }
    ];

    const bass = [
      { freq: 262, duration: 0.5 }, { freq: 294, duration: 0.5 },
      { freq: 330, duration: 0.5 }, { freq: 349, duration: 0.5 },
      { freq: 392, duration: 0.5 }, { freq: 349, duration: 0.5 },
      { freq: 440, duration: 0.5 }, { freq: 494, duration: 0.5 }
    ];

    const playLoop = () => {
      this.playInstrument(melody, 140, 'sine', 0.15);
      this.playInstrument(harmony, 140, 'sine', 0.08);
      this.playInstrument(bass, 140, 'triangle', 0.12);
      this.playPercussion([1,0,1,0,1,0,1,0], 140, 0.05);
    };

    playLoop();
    this.currentMusic = setInterval(playLoop, 5000);
  }

  // Play a single instrument through a note sequence
  playInstrument(notes, tempo, waveType, volume) {
    if (!this.audioCtx) return;
    const beatDuration = 60 / tempo;
    let time = this.audioCtx.currentTime;

    notes.forEach(note => {
      if (note.freq === 0) {
        time += beatDuration * note.duration;
      } else {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        osc.type = waveType;
        osc.frequency.value = note.freq;

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(volume, time + 0.01);
        gain.gain.linearRampToValueAtTime(0, time + beatDuration * note.duration - 0.02);

        osc.connect(gain);
        gain.connect(this.musicGain);

        osc.start(time);
        osc.stop(time + beatDuration * note.duration);

        time += beatDuration * note.duration;
      }
    });
  }

  // Play simple percussion (noise bursts)
  playPercussion(pattern, tempo, volume) {
    if (!this.audioCtx) return;
    const beatDuration = 60 / tempo;
    let time = this.audioCtx.currentTime;

    pattern.forEach((hit, i) => {
      if (hit === 1) {
        const noise = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();

        noise.type = 'square';
        noise.frequency.value = 100 + Math.random() * 50;

        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(volume, time + 0.01);
        gain.gain.linearRampToValueAtTime(0, time + 0.05);

        noise.connect(gain);
        gain.connect(this.sfxGain);

        noise.start(time);
        noise.stop(time + 0.05);
      }
      time += beatDuration;
    });
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain) {
      this.masterGain.gain.value = this.isMuted ? 0 : 0.5;
    }
    return this.isMuted;
  }
}

const sound = new CartoonSound();

const EPISODES = [
  {
    id: 'silly-snacks',
    title: 'Silly Snacks',
    category: 'funny',
    categoryLabel: 'Funny',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'burger',
    scenes: [
      { // Scene 1: ToonTown is hungry
        background: 'linear-gradient(180deg, #87CEEB 0%, #E0F7FA 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 50, y: 50, size: 35, animation: 'bounce-in' },
          { type: 'speech', text: 'Hmm, I\'m SO hungry!', x: 55, y: 15 },
          { type: 'delay', time: 2000 },
          { type: 'speech', text: 'What should I eat?', x: 55, y: 15, show: true },
        ]
      },
      { // Scene 2: Hat appears
        background: 'linear-gradient(180deg, #87CEEB 0%, #E0F7FA 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 30, y: 40, size: 30, animation: 'wiggle' },
          { type: 'character', svg: 'hat', x: 65, y: 35, size: 30, animation: 'bounce-in' },
          { type: 'speech', text: 'Ooh! A hat!', x: 20, y: 10, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Let me try eating this!', x: 20, y: 10 },
        ]
      },
      { // Scene 3: ToonTown tries hat - fail
        background: 'linear-gradient(180deg, #FFE082 0%, #FFECB3 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 45, size: 35, animation: 'surprised' },
          { type: 'speech', text: 'GROUCHY!', x: 45, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'That was NOT tasty!', x: 45, y: 15 },
        ]
      },
      { // Scene 4: Shoe appears
        background: 'linear-gradient(180deg, #87CEEB 0%, #E0F7FA 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 20, y: 45, size: 30, animation: 'spring-bounce' },
          { type: 'character', svg: 'shoe', x: 60, y: 50, size: 30, animation: 'walk' },
          { type: 'speech', text: 'A shoe!', x: 15, y: 10, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Maybe this will be yummy?', x: 15, y: 10 },
        ]
      },
      { // Scene 5: ToonTown tries shoe - fail
        background: 'linear-gradient(180deg, #FFE082 0%, #FFECB3 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 45, size: 35, animation: 'surprised' },
          { type: 'speech', text: 'BLEHHH!', x: 45, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Shoe tastes like FEET!', x: 45, y: 15 },
        ]
      },
      { // Scene 6: Cloud appears
        background: 'linear-gradient(180deg, #87CEEB 0%, #B3E5FC 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 25, y: 50, size: 28, animation: 'excited' },
          { type: 'character', svg: 'cloud', x: 60, y: 25, size: 35, animation: 'float-drift' },
          { type: 'speech', text: 'Look! A fluffy cloud!', x: 15, y: 10, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Clouds look so delicious!', x: 15, y: 10 },
        ]
      },
      { // Scene 7: ToonTown eats cloud - happy!
        background: 'linear-gradient(180deg, #81D4FA 0%, #B3E5FC 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 35, y: 40, size: 40, animation: 'eating' },
          { type: 'speech', text: 'NOM NOM NOM!', x: 40, y: 10, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'CLOUDS ARE THE BEST!', x: 40, y: 10 },
        ]
      },
      { // Scene 8: Happy ending
        background: 'linear-gradient(180deg, #FFB74D 0%, #FFE082 100%)',
        duration: 4000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 35, y: 35, size: 40, animation: 'excited' },
          { type: 'speech', text: 'Silly snacks are the yummiest!', x: 35, y: 10, show: true },
        ]
      }
    ]
  },
  {
    id: 'rainbow-boogie',
    title: 'The Rainbow Boogie',
    category: 'music',
    categoryLabel: 'Music',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'rainbow',
    scenes: [
      { // Scene 1: Intro
        background: 'linear-gradient(180deg, #FF6B9D 0%, #7C4DFF 50%, #00E5FF 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'rainbow', x: 35, y: 30, size: 45, animation: 'spring-bounce' },
          { type: 'character', svg: 'toonTown', x: 55, y: 50, size: 30, animation: 'excited', delay: 300 },
          { type: 'text', text: '🌈 THE RAINBOW BOOGIE! 🌈', x: 50, y: 15 },
        ]
      },
      { // Scene 2: Verse 1
        background: 'linear-gradient(180deg, #FF6B9D 0%, #FF8A80 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'dance' },
          { type: 'text', text: 'Red and Orange,\nYellow too!', x: 45, y: 20, show: true },
        ]
      },
      { // Scene 3: Chorus
        background: 'linear-gradient(180deg, #FFD740 0%, #FFAB00 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'rainbow', x: 35, y: 25, size: 40, animation: 'wiggle' },
          { type: 'character', svg: 'toonTown', x: 55, y: 50, size: 30, animation: 'dance' },
          { type: 'text', text: '🌈 BOOGIE WOOGIE! 🌈\nEverybody dance now!', x: 45, y: 15, show: true },
        ]
      },
      { // Scene 4: Green and Blue
        background: 'linear-gradient(180deg, #69F0AE 0%, #00E5FF 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 35, y: 40, size: 40, animation: 'dance' },
          { type: 'character', svg: 'star', x: 65, y: 30, size: 25, animation: 'bounce-in', delay: 300 },
          { type: 'text', text: 'Green and Blue,\nPurple too!', x: 40, y: 20, show: true },
        ]
      },
      { // Scene 5: Big finale
        background: 'linear-gradient(180deg, #E040FB 0%, #FF6B9D 50%, #FFD740 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'rainbow', x: 30, y: 20, size: 35, animation: 'pulse-scale' },
          { type: 'character', svg: 'toonTown', x: 50, y: 45, size: 35, animation: 'dance' },
          { type: 'character', svg: 'star', x: 70, y: 30, size: 20, animation: 'dance', delay: 200 },
          { type: 'text', text: '🌈🌈🌈\nRAINBOW BOOGIE FOREVER! 🌈🌈🌈', x: 40, y: 15, show: true },
        ]
      }
    ]
  },
  {
    id: 'counting-colors',
    title: 'Counting Colors Adventure',
    category: 'educational',
    categoryLabel: 'Educational',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'numbers',
    scenes: [
      { // Scene 1: Intro
        background: 'linear-gradient(180deg, #E1F5FE 0%, #B3E5FC 100%)',
        duration: 6000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 35, size: 40, animation: 'bounce-in' },
          { type: 'character', svg: 'star', x: 60, y: 40, size: 25, animation: 'bounce-in', delay: 400 },
          { type: 'text', text: '🎨 Colors & Counting! 🎨', x: 45, y: 15 },
        ]
      },
      { // Scene 2: Number 1, Color Red
        background: 'linear-gradient(180deg, #FFCDD2 0%, #EF9A9A 100%)',
        duration: 6000,
        elements: [
          { type: 'text', text: '1', x: 40, y: 35, animation: 'spring-bounce', show: true },
          { type: 'svg', content: 'colors.red', x: 60, y: 35, size: 20, animation: 'spring-bounce', delay: 200 },
          { type: 'text', text: 'RED!', x: 45, y: 70, show: true },
        ]
      },
      { // Scene 3: Number 2, Color Orange
        background: 'linear-gradient(180deg, #FFE0B2 0%, #FFCC80 100%)',
        duration: 6000,
        elements: [
          { type: 'text', text: '2', x: 40, y: 35, animation: 'spring-bounce', show: true },
          { type: 'svg', content: 'colors.orange', x: 60, y: 35, size: 20, animation: 'spring-bounce', delay: 200 },
          { type: 'text', text: 'ORANGE!', x: 45, y: 70, show: true },
        ]
      },
      { // Scene 4: Number 3, Color Yellow
        background: 'linear-gradient(180deg, #FFF9C4 0%, #FFF176 100%)',
        duration: 6000,
        elements: [
          { type: 'text', text: '3', x: 40, y: 35, animation: 'spring-bounce', show: true },
          { type: 'svg', content: 'colors.yellow', x: 60, y: 35, size: 20, animation: 'spring-bounce', delay: 200 },
          { type: 'text', text: 'YELLOW!', x: 45, y: 70, show: true },
        ]
      },
      { // Scene 5: Number 4, Color Green
        background: 'linear-gradient(180deg, #C8E6C9 0%, #A5D6A7 100%)',
        duration: 6000,
        elements: [
          { type: 'text', text: '4', x: 40, y: 35, animation: 'spring-bounce', show: true },
          { type: 'svg', content: 'colors.green', x: 60, y: 35, size: 20, animation: 'spring-bounce', delay: 200 },
          { type: 'text', text: 'GREEN!', x: 45, y: 70, show: true },
        ]
      },
      { // Scene 6: Number 5, Color Blue
        background: 'linear-gradient(180deg, #BBDEFB 0%, #90CAF9 100%)',
        duration: 6000,
        elements: [
          { type: 'text', text: '5', x: 40, y: 35, animation: 'spring-bounce', show: true },
          { type: 'svg', content: 'colors.blue', x: 60, y: 35, size: 20, animation: 'spring-bounce', delay: 200 },
          { type: 'text', text: 'BLUE!', x: 45, y: 70, show: true },
        ]
      },
      { // Scene 7: Number 6, Color Purple
        background: 'linear-gradient(180deg, #E1BEE7 0%, #CE93D8 100%)',
        duration: 6000,
        elements: [
          { type: 'text', text: '6', x: 40, y: 35, animation: 'spring-bounce', show: true },
          { type: 'svg', content: 'colors.purple', x: 60, y: 35, size: 20, animation: 'spring-bounce', delay: 200 },
          { type: 'text', text: 'PURPLE!', x: 45, y: 70, show: true },
        ]
      },
      { // Scene 8: Counting Review
        background: 'linear-gradient(180deg, #FF6B9D 0%, #7C4DFF 50%, #00E5FF 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 35, y: 35, size: 40, animation: 'excited' },
          { type: 'character', svg: 'star', x: 60, y: 40, size: 25, animation: 'pulse-scale', delay: 200 },
          { type: 'text', text: '⭐ 1, 2, 3, 4, 5, 6 ⭐\nColors are SO fun!', x: 40, y: 15, show: true },
        ]
      }
    ]
  },
  // NEW CARTOON 1: Silly Dreams (Funny)
  {
    id: 'silly-dreams',
    title: 'Silly Dreams',
    category: 'funny',
    categoryLabel: 'Funny',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'moon',
    scenes: [
      { // Scene 1: ToonTown sleepy
        background: 'linear-gradient(180deg, #1a1a2e 0%, #2D1B4E 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'bed', x: 30, y: 35, size: 45, animation: 'bounce-in' },
          { type: 'character', svg: 'toonTown', x: 40, y: 50, size: 30, animation: 'bounce-in', delay: 500 },
          { type: 'character', svg: 'moon', x: 70, y: 15, size: 20, animation: 'float-drift' },
          { type: 'speech', text: 'So sleepy...', x: 45, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'text', text: '💤 ZZZ... 💤', x: 50, y: 75 },
        ]
      },
      { // Scene 2: Dream starts - silly hat dream
        background: 'linear-gradient(180deg, #CE93D8 0%, #E1BEE7 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 35, y: 40, size: 40, animation: 'excited' },
          { type: 'character', svg: 'hat', x: 55, y: 30, size: 35, animation: 'spring-bounce' },
          { type: 'speech', text: 'I can fly!', x: 20, y: 10, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Wait, hats cant fly!', x: 20, y: 10 },
        ]
      },
      { // Scene 3: Shoe dream
        background: 'linear-gradient(180deg, #FFCDD2 0%, #FFECB3 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'shoe', x: 30, y: 40, size: 40, animation: 'dance' },
          { type: 'character', svg: 'toonTown', x: 55, y: 45, size: 30, animation: 'surprised' },
          { type: 'speech', text: 'The shoe is DANCING!', x: 50, y: 15, show: true },
          { type: 'delay', time: 4000 },
          { type: 'speech', text: 'Shoes cant dance!', x: 50, y: 15 },
        ]
      },
      { // Scene 4: Burger dream
        background: 'linear-gradient(180deg, #FFE0B2 0%, #FFCC80 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'burger', x: 40, y: 35, size: 40, animation: 'jump' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 28, animation: 'excited' },
          { type: 'speech', text: 'The burger says HI!', x: 55, y: 15, show: true },
          { type: 'delay', time: 4000 },
          { type: 'speech', text: 'Burgers dont talk!', x: 55, y: 15 },
        ]
      },
      { // Scene 5: Wake up
        background: 'linear-gradient(180deg, #87CEEB 0%, #E0F7FA 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 45, size: 35, animation: 'surprised' },
          { type: 'speech', text: 'WAKE UP!', x: 45, y: 15, show: true },
          { type: 'delay', time: 2000 },
          { type: 'speech', text: 'What a silly dream!', x: 45, y: 15 },
        ]
      },
      { // Scene 6: Back to sleep
        background: 'linear-gradient(180deg, #1a1a2e 0%, #2D1B4E 100%)',
        duration: 6000,
        elements: [
          { type: 'character', svg: 'bed', x: 30, y: 35, size: 45, animation: 'bounce-in' },
          { type: 'character', svg: 'toonTown', x: 40, y: 50, size: 30, animation: 'squash-stretch' },
          { type: 'character', svg: 'moon', x: 70, y: 15, size: 20, animation: 'float-drift' },
          { type: 'text', text: '💤 Time for more silly dreams! 💤', x: 45, y: 75 },
        ]
      }
    ]
  },
  // NEW CARTOON 2: The Shape Train (Educational)
  {
    id: 'shape-train',
    title: 'The Shape Train',
    category: 'educational',
    categoryLabel: 'Educational',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'train',
    scenes: [
      { // Scene 1: Train appears
        background: 'linear-gradient(180deg, #81D4FA 0%, #B3E5FC 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'train', x: 25, y: 35, size: 50, animation: 'walk' },
          { type: 'character', svg: 'toonTown', x: 65, y: 50, size: 30, animation: 'excited' },
          { type: 'speech', text: 'Choo choo!', x: 60, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'text', text: '🚂 ALL ABOARD! 🚂', x: 50, y: 75 },
        ]
      },
      { // Scene 2: Circle station
        background: 'linear-gradient(180deg, #FFCDD2 0%, #FFECB3 100%)',
        duration: 9000,
        elements: [
          { type: 'text', text: 'CIRCLE STATION', x: 50, y: 10, show: true },
          { type: 'svg', content: 'shapes.circle', x: 35, y: 35, size: 25, animation: 'spring-bounce' },
          { type: 'character', svg: 'toonTown', x: 60, y: 45, size: 30, animation: 'dance' },
          { type: 'text', text: 'Circle!', x: 55, y: 70, show: true },
        ]
      },
      { // Scene 3: Square station
        background: 'linear-gradient(180deg, #E1BEE7 0%, #CE93D8 100%)',
        duration: 9000,
        elements: [
          { type: 'text', text: 'SQUARE STATION', x: 50, y: 10, show: true },
          { type: 'svg', content: 'shapes.square', x: 35, y: 35, size: 25, animation: 'spring-bounce' },
          { type: 'character', svg: 'toonTown', x: 60, y: 45, size: 30, animation: 'excited' },
          { type: 'text', text: 'Square!', x: 55, y: 70, show: true },
        ]
      },
      { // Scene 4: Triangle station
        background: 'linear-gradient(180deg, #B2EBF2 0%, #80DEEA 100%)',
        duration: 9000,
        elements: [
          { type: 'text', text: 'TRIANGLE TOWN', x: 50, y: 10, show: true },
          { type: 'svg', content: 'shapes.triangle', x: 35, y: 35, size: 25, animation: 'spring-bounce' },
          { type: 'character', svg: 'toonTown', x: 60, y: 45, size: 30, animation: 'jump' },
          { type: 'text', text: 'Triangle!', x: 55, y: 70, show: true },
        ]
      },
      { // Scene 5: Star station
        background: 'linear-gradient(180deg, #FFF9C4 0%, #FFE082 100%)',
        duration: 9000,
        elements: [
          { type: 'text', text: 'STAR VILLAGE', x: 50, y: 10, show: true },
          { type: 'svg', content: 'shapes.star', x: 35, y: 35, size: 25, animation: 'pulse-scale' },
          { type: 'character', svg: 'toonTown', x: 60, y: 45, size: 30, animation: 'dance' },
          { type: 'text', text: 'Star!', x: 55, y: 70, show: true },
        ]
      },
      { // Scene 6: All shapes goodbye
        background: 'linear-gradient(180deg, #C8E6C9 0%, #A5D6A7 100%)',
        duration: 7000,
        elements: [
          { type: 'svg', content: 'shapes.circle', x: 15, y: 35, size: 18, animation: 'bounce-in' },
          { type: 'svg', content: 'shapes.square', x: 35, y: 35, size: 18, animation: 'bounce-in', delay: 200 },
          { type: 'svg', content: 'shapes.triangle', x: 55, y: 35, size: 18, animation: 'bounce-in', delay: 400 },
          { type: 'svg', content: 'shapes.star', x: 75, y: 35, size: 18, animation: 'bounce-in', delay: 600 },
          { type: 'character', svg: 'toonTown', x: 40, y: 60, size: 25, animation: 'excited' },
          { type: 'text', text: 'Shapes are SO cool!', x: 45, y: 80, show: true },
        ]
      }
    ]
  },
  // NEW CARTOON 3: The Happy Song (Music)
  {
    id: 'happy-song',
    title: 'The Happy Song',
    category: 'music',
    categoryLabel: 'Music',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'sun',
    scenes: [
      { // Scene 1: Intro
        background: 'linear-gradient(180deg, #FFD740 0%, #FFB74D 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'sun', x: 40, y: 25, size: 40, animation: 'pulse-scale' },
          { type: 'character', svg: 'toonTown', x: 55, y: 50, size: 30, animation: 'excited' },
          { type: 'text', text: '☀️ THE HAPPY SONG! ☀️', x: 50, y: 12 },
        ]
      },
      { // Scene 2: Verse 1
        background: 'linear-gradient(180deg, #81D4FA 0%, #4FC3F7 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'dance' },
          { type: 'text', text: 'When you wake up\nAnd the sun is bright!', x: 45, y: 20, show: true },
        ]
      },
      { // Scene 3: Chorus
        background: 'linear-gradient(180deg, #FF6B9D 0%, #FF8A80 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 35, y: 35, size: 40, animation: 'excited' },
          { type: 'text', text: '🎵 HA PPA! HA PPA! 🎵\nDance with me today!', x: 40, y: 18, show: true },
        ]
      },
      { // Scene 4: Verse 2
        background: 'linear-gradient(180deg, #CE93D8 0%, #BA68C8 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'dance' },
          { type: 'text', text: 'Wave your hands\nAnd jump up high!', x: 45, y: 20, show: true },
        ]
      },
      { // Scene 5: Big finish
        background: 'linear-gradient(180deg, #FFD740 0%, #FF6B9D 50%, #7C4DFF 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'sun', x: 25, y: 25, size: 30, animation: 'pulse-scale' },
          { type: 'character', svg: 'toonTown', x: 50, y: 45, size: 35, animation: 'excited' },
          { type: 'text', text: '🎵🎵 WE ARE HAPPY! 🎵🎵\nForever and ever!', x: 45, y: 15, show: true },
        ]
      }
    ]
  },
  // NEW CARTOON 4: Messy Painter (Funny)
  {
    id: 'messy-painter',
    title: 'Messy Painter',
    category: 'funny',
    categoryLabel: 'Funny',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'easel',
    scenes: [
      { // Scene 1: ToonTown wants to paint
        background: 'linear-gradient(180deg, #FFF8E1 0%, #FFECB3 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'easel', x: 35, y: 30, size: 45, animation: 'bounce-in' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 30, animation: 'bounce-in', delay: 500 },
          { type: 'speech', text: 'I will paint a MASTERPIECE!', x: 55, y: 15, show: true },
        ]
      },
      { // Scene 2: First attempt - splat!
        background: 'linear-gradient(180deg, #FFCDD2 0%, #EF9A9A 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'surprised' },
          { type: 'speech', text: 'OOPS!', x: 45, y: 15, show: true },
          { type: 'delay', time: 2000 },
          { type: 'speech', text: 'The paint went EVERYWHERE!', x: 45, y: 15 },
        ]
      },
      { // Scene 3: Try again - more paint
        background: 'linear-gradient(180deg, #B2EBF2 0%, #80DEEA 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 35, y: 45, size: 35, animation: 'excited' },
          { type: 'speech', text: 'Let me try AGAIN!', x: 20, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'More paint is BETTER!', x: 20, y: 15 },
        ]
      },
      { // Scene 4: Even messier!
        background: 'linear-gradient(180deg, #E1BEE7 0%, #CE93D8 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'shake' },
          { type: 'speech', text: 'SPLAT SPLAT!', x: 45, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Im covered in paint!', x: 45, y: 15 },
        ]
      },
      { // Scene 5: Realizes its actually art
        background: 'linear-gradient(180deg, #C8E6C9 0%, #A5D6A7 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 35, y: 35, size: 40, animation: 'excited' },
          { type: 'speech', text: 'Wait... this is BEAUTIFUL!', x: 40, y: 10, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Messy art is the BEST art!', x: 40, y: 10 },
        ]
      },
      { // Scene 6: Happy ending
        background: 'linear-gradient(180deg, #FFF9C4 0%, #FFE082 100%)',
        duration: 5000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 35, y: 40, size: 40, animation: 'dance' },
          { type: 'text', text: '🎨 Messy Masterpiece! 🎨', x: 45, y: 15, show: true },
        ]
      }
    ]
  },
  // NEW CARTOON 5: Animal Disco (Music)
  {
    id: 'animal-disco',
    title: 'Animal Disco',
    category: 'music',
    categoryLabel: 'Music',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'duck',
    scenes: [
      { // Scene 1: Disco starts
        background: 'linear-gradient(180deg, #7C4DFF 0%, #651FFF 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 35, size: 40, animation: 'excited' },
          { type: 'character', svg: 'duck', x: 65, y: 45, size: 25, animation: 'bounce-in', delay: 300 },
          { type: 'text', text: '🦆 ANIMAL DISCO! 🦆', x: 50, y: 15 },
        ]
      },
      { // Scene 2: Duck dancing
        background: 'linear-gradient(180deg, #FFD740 0%, #FFAB00 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'duck', x: 40, y: 40, size: 40, animation: 'dance' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 28, animation: 'dance' },
          { type: 'text', text: 'Quack quack\nWaddle waddle!', x: 45, y: 20, show: true },
        ]
      },
      { // Scene 3: Cat joins
        background: 'linear-gradient(180deg, #FF9800 0%, #F57C00 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'cat', x: 25, y: 40, size: 35, animation: 'walk' },
          { type: 'character', svg: 'duck', x: 50, y: 45, size: 28, animation: 'dance' },
          { type: 'character', svg: 'toonTown', x: 70, y: 50, size: 25, animation: 'dance' },
          { type: 'text', text: 'Meow meow\nDance dance!', x: 45, y: 20, show: true },
        ]
      },
      { // Scene 4: Elephant joins
        background: 'linear-gradient(180deg, #90CAF9 0%, #42A5F5 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'elephant', x: 20, y: 35, size: 40, animation: 'walk' },
          { type: 'character', svg: 'cat', x: 50, y: 45, size: 25, animation: 'dance' },
          { type: 'character', svg: 'duck', x: 70, y: 50, size: 22, animation: 'dance' },
          { type: 'character', svg: 'toonTown', x: 85, y: 55, size: 20, animation: 'excited' },
          { type: 'text', text: 'Trumpet trump!\nDance party!', x: 45, y: 15, show: true },
        ]
      },
      { // Scene 5: Everyone dancing
        background: 'linear-gradient(180deg, #E040FB 0%, #FF6B9D 50%, #FFD740 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'elephant', x: 15, y: 35, size: 35, animation: 'dance' },
          { type: 'character', svg: 'cat', x: 35, y: 45, size: 25, animation: 'dance' },
          { type: 'character', svg: 'duck', x: 55, y: 50, size: 22, animation: 'excited' },
          { type: 'character', svg: 'toonTown', x: 75, y: 55, size: 20, animation: 'excited' },
          { type: 'text', text: '🎵 DISCO FEVER! 🎵\nEverybody dance!', x: 45, y: 15, show: true },
        ]
      }
    ]
  },
  // NEW CARTOON 6: Number Friends (Educational)
  {
    id: 'number-friends',
    title: 'Number Friends',
    category: 'educational',
    categoryLabel: 'Educational',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'star',
    scenes: [
      { // Scene 1: Intro
        background: 'linear-gradient(180deg, #E1F5FE 0%, #B3E5FC 100%)',
        duration: 6000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 35, size: 40, animation: 'bounce-in' },
          { type: 'character', svg: 'star', x: 60, y: 40, size: 25, animation: 'bounce-in', delay: 400 },
          { type: 'text', text: 'Number Friends 7, 8, 9, 10!', x: 45, y: 15 },
        ]
      },
      { // Scene 2: Number 7
        background: 'linear-gradient(180deg, #FFCDD2 0%, #EF9A9A 100%)',
        duration: 8000,
        elements: [
          { type: 'text', text: '7', x: 40, y: 35, animation: 'spring-bounce', show: true },
          { type: 'svg', content: 'colors.red', x: 60, y: 35, size: 20, animation: 'spring-bounce', delay: 300 },
          { type: 'text', text: 'Lucky number 7!', x: 45, y: 70, show: true },
        ]
      },
      { // Scene 3: Number 8
        background: 'linear-gradient(180deg, #E1BEE7 0%, #CE93D8 100%)',
        duration: 8000,
        elements: [
          { type: 'text', text: '8', x: 40, y: 35, animation: 'spring-bounce', show: true },
          { type: 'svg', content: 'colors.purple', x: 60, y: 35, size: 20, animation: 'spring-bounce', delay: 300 },
          { type: 'text', text: 'Fantastic 8!', x: 45, y: 70, show: true },
        ]
      },
      { // Scene 4: Number 9
        background: 'linear-gradient(180deg, #B2EBF2 0%, #80DEEA 100%)',
        duration: 8000,
        elements: [
          { type: 'text', text: '9', x: 40, y: 35, animation: 'spring-bounce', show: true },
          { type: 'svg', content: 'colors.blue', x: 60, y: 35, size: 20, animation: 'spring-bounce', delay: 300 },
          { type: 'text', text: 'Cloudy 9!', x: 45, y: 70, show: true },
        ]
      },
      { // Scene 5: Number 10
        background: 'linear-gradient(180deg, #FFF9C4 0%, #FFE082 100%)',
        duration: 8000,
        elements: [
          { type: 'text', text: '10', x: 38, y: 35, animation: 'spring-bounce', show: true },
          { type: 'svg', content: 'colors.yellow', x: 62, y: 35, size: 20, animation: 'spring-bounce', delay: 300 },
          { type: 'text', text: 'Perfect 10!', x: 45, y: 70, show: true },
        ]
      },
      { // Scene 6: All friends together
        background: 'linear-gradient(180deg, #C8E6C9 0%, #A5D6A7 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 35, y: 35, size: 40, animation: 'excited' },
          { type: 'character', svg: 'star', x: 60, y: 40, size: 25, animation: 'dance' },
          { type: 'text', text: '7, 8, 9, 10\nWe are the best friends!', x: 45, y: 15, show: true },
        ]
      }
    ]
  },
  // NEW CARTOON 7: Weather Woes (Funny)
  {
    id: 'weather-woes',
    title: 'Weather Woes',
    category: 'funny',
    categoryLabel: 'Funny',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'raincloud',
    scenes: [
      { // Scene 1: Nice day
        background: 'linear-gradient(180deg, #81D4FA 0%, #4FC3F7 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'sun', x: 40, y: 20, size: 35, animation: 'pulse-scale' },
          { type: 'character', svg: 'toonTown', x: 55, y: 45, size: 35, animation: 'bounce-in' },
          { type: 'speech', text: 'What a nice day!', x: 50, y: 12, show: true },
        ]
      },
      { // Scene 2: Cloud appears
        background: 'linear-gradient(180deg, #90A4AE 0%, #78909C 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'raincloud', x: 30, y: 25, size: 45, animation: 'float-drift' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 30, animation: 'surprised' },
          { type: 'speech', text: 'Uh oh, a rain cloud!', x: 55, y: 12, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'I forgot my umbrella!', x: 55, y: 12 },
        ]
      },
      { // Scene 3: Gets wet
        background: 'linear-gradient(180deg, #64B5F6 0%, #42A5F5 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'raincloud', x: 25, y: 20, size: 50, animation: 'float-drift' },
          { type: 'character', svg: 'toonTown', x: 55, y: 45, size: 35, animation: 'shake' },
          { type: 'speech', text: 'SPLASH!', x: 50, y: 12, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'So much RAIN!', x: 50, y: 12 },
        ]
      },
      { // Scene 4: Sunny again
        background: 'linear-gradient(180deg, #FFD740 0%, #FFB74D 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'sun', x: 35, y: 20, size: 40, animation: 'pulse-scale' },
          { type: 'character', svg: 'toonTown', x: 55, y: 45, size: 32, animation: 'excited' },
          { type: 'speech', text: 'Yay, the sun is back!', x: 50, y: 12, show: true },
        ]
      },
      { // Scene 5: Cloud feels bad
        background: 'linear-gradient(180deg, #B2EBF2 0%, #80DEEA 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'raincloud', x: 30, y: 30, size: 40, animation: 'squash-stretch' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 28, animation: 'bounce-in' },
          { type: 'speech', text: 'Sorry friend!', x: 20, y: 12, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Plants need me too!', x: 20, y: 12 },
        ]
      },
      { // Scene 6: Friends again
        background: 'linear-gradient(180deg, #81D4FA 0%, #CE93D8 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'sun', x: 25, y: 20, size: 25, animation: 'pulse-scale' },
          { type: 'character', svg: 'raincloud', x: 45, y: 25, size: 30, animation: 'float-drift' },
          { type: 'character', svg: 'toonTown', x: 65, y: 50, size: 25, animation: 'dance' },
          { type: 'text', text: '☀️ Rain or shine 🌧️\nWe are friends!', x: 45, y: 70, show: true },
        ]
      }
    ]
  },
  // CARTOON 11: Bubble Trouble (Funny)
  {
    id: 'bubble-trouble',
    title: 'Bubble Trouble',
    category: 'funny',
    categoryLabel: 'Funny',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'bubble',
    scenes: [
      { // Scene 1: ToonTown sees bubbles
        background: 'linear-gradient(180deg, #E1F5FE 0%, #B3E5FC 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'bubble', x: 30, y: 30, size: 35, animation: 'float-drift' },
          { type: 'character', svg: 'bubble', x: 55, y: 25, size: 25, animation: 'float-drift', delay: 300 },
          { type: 'character', svg: 'bubble', x: 70, y: 40, size: 20, animation: 'float-drift', delay: 600 },
          { type: 'character', svg: 'toonTown', x: 40, y: 55, size: 30, animation: 'excited' },
          { type: 'speech', text: 'So many bubbles!', x: 35, y: 15, show: true },
        ]
      },
      { // Scene 2: Pops one
        background: 'linear-gradient(180deg, #F3E5F5 0%, #E1BEE7 100%)',
        duration: 9000,
        elements: [
          { type: 'character', svg: 'bubble', x: 40, y: 35, size: 45, animation: 'pulse-scale' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 30, animation: 'bounce-in' },
          { type: 'speech', text: 'POP!', x: 55, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'That was fun!', x: 55, y: 15 },
        ]
      },
      { // Scene 3: Pops more
        background: 'linear-gradient(180deg, #E8EAF6 0%, #C5CAE9 100%)',
        duration: 9000,
        elements: [
          { type: 'character', svg: 'bubble', x: 20, y: 30, size: 30, animation: 'bounce-in' },
          { type: 'character', svg: 'bubble', x: 45, y: 25, size: 28, animation: 'bounce-in', delay: 200 },
          { type: 'character', svg: 'bubble', x: 65, y: 35, size: 25, animation: 'bounce-in', delay: 400 },
          { type: 'character', svg: 'toonTown', x: 75, y: 50, size: 28, animation: 'excited' },
          { type: 'speech', text: 'POP POP POP!', x: 65, y: 12, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'I cant STOP!', x: 65, y: 12 },
        ]
      },
      { // Scene 4: More bubbles appear
        background: 'linear-gradient(180deg, #E0F7FA 0%, #80DEEA 100%)',
        duration: 9000,
        elements: [
          { type: 'character', svg: 'bubble', x: 15, y: 20, size: 30, animation: 'float-drift' },
          { type: 'character', svg: 'bubble', x: 30, y: 35, size: 25, animation: 'float-drift', delay: 100 },
          { type: 'character', svg: 'bubble', x: 50, y: 25, size: 35, animation: 'float-drift', delay: 200 },
          { type: 'character', svg: 'bubble', x: 70, y: 30, size: 28, animation: 'float-drift', delay: 300 },
          { type: 'character', svg: 'bubble', x: 85, y: 40, size: 22, animation: 'float-drift', delay: 400 },
          { type: 'character', svg: 'toonTown', x: 40, y: 55, size: 30, animation: 'surprised' },
          { type: 'speech', text: 'TOO MANY BUBBLES!', x: 35, y: 10, show: true },
        ]
      },
      { // Scene 5: Gives up
        background: 'linear-gradient(180deg, #FFF3E0 0%, #FFE0B2 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'bubble', x: 20, y: 25, size: 35, animation: 'float-drift' },
          { type: 'character', svg: 'bubble', x: 45, y: 30, size: 30, animation: 'float-drift', delay: 200 },
          { type: 'character', svg: 'bubble', x: 70, y: 25, size: 35, animation: 'float-drift', delay: 400 },
          { type: 'character', svg: 'toonTown', x: 40, y: 55, size: 28, animation: 'squash-stretch' },
          { type: 'speech', text: 'Bubble exhaustion...', x: 35, y: 15, show: true },
        ]
      },
      { // Scene 6: Happy ending
        background: 'linear-gradient(180deg, #E8F5E9 0%, #C8E6C9 100%)',
        duration: 6000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 35, animation: 'dance' },
          { type: 'speech', text: 'Bubbles are the BEST!', x: 45, y: 15, show: true },
        ]
      }
    ]
  },
  // CARTOON 12: Alphabet Adventure (Educational)
  {
    id: 'alphabet-adventure',
    title: 'Alphabet Adventure',
    category: 'educational',
    categoryLabel: 'Educational',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'star',
    scenes: [
      { // Scene 1: Intro
        background: 'linear-gradient(180deg, #E1F5FE 0%, #B3E5FC 100%)',
        duration: 5000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'bounce-in' },
          { type: 'character', svg: 'star', x: 60, y: 45, size: 25, animation: 'bounce-in', delay: 400 },
          { type: 'text', text: 'ABCDE!', x: 45, y: 15 },
        ]
      },
      { // Scene 2: A, B, C
        background: 'linear-gradient(180deg, #FFCDD2 0%, #EF9A9A 100%)',
        duration: 10000,
        elements: [
          { type: 'svg', content: 'letters.A', x: 20, y: 30, size: 22, animation: 'spring-bounce' },
          { type: 'svg', content: 'letters.B', x: 40, y: 30, size: 22, animation: 'spring-bounce', delay: 300 },
          { type: 'svg', content: 'letters.C', x: 60, y: 30, size: 22, animation: 'spring-bounce', delay: 600 },
          { type: 'character', svg: 'toonTown', x: 75, y: 55, size: 25, animation: 'excited' },
          { type: 'text', text: 'A, B, C!', x: 50, y: 70, show: true },
        ]
      },
      { // Scene 3: D, E, F
        background: 'linear-gradient(180deg, #C8E6C9 0%, #A5D6A7 100%)',
        duration: 10000,
        elements: [
          { type: 'svg', content: 'letters.D', x: 20, y: 30, size: 22, animation: 'spring-bounce' },
          { type: 'svg', content: 'letters.E', x: 40, y: 30, size: 22, animation: 'spring-bounce', delay: 300 },
          { type: 'svg', content: 'letters.F', x: 60, y: 30, size: 22, animation: 'spring-bounce', delay: 600 },
          { type: 'character', svg: 'toonTown', x: 75, y: 55, size: 25, animation: 'dance' },
          { type: 'text', text: 'D, E, F!', x: 50, y: 70, show: true },
        ]
      },
      { // Scene 4: G, H, I
        background: 'linear-gradient(180deg, #E1BEE7 0%, #CE93D8 100%)',
        duration: 10000,
        elements: [
          { type: 'svg', content: 'letters.G', x: 20, y: 30, size: 22, animation: 'spring-bounce' },
          { type: 'svg', content: 'letters.H', x: 40, y: 30, size: 22, animation: 'spring-bounce', delay: 300 },
          { type: 'svg', content: 'letters.I', x: 60, y: 30, size: 22, animation: 'spring-bounce', delay: 600 },
          { type: 'character', svg: 'toonTown', x: 75, y: 55, size: 25, animation: 'excited' },
          { type: 'text', text: 'G, H, I!', x: 50, y: 70, show: true },
        ]
      },
      { // Scene 5: J and friends
        background: 'linear-gradient(180deg, #B2EBF2 0%, #80DEEA 100%)',
        duration: 10000,
        elements: [
          { type: 'svg', content: 'letters.J', x: 30, y: 30, size: 22, animation: 'spring-bounce' },
          { type: 'character', svg: 'toonTown', x: 55, y: 45, size: 30, animation: 'jump' },
          { type: 'text', text: 'JUMP for joy!', x: 50, y: 70, show: true },
        ]
      },
      { // Scene 6: ABCDEFGHIJ
        background: 'linear-gradient(180deg, #FFF9C4 0%, #FFE082 100%)',
        duration: 8000,
        elements: [
          { type: 'svg', content: 'letters.A', x: 8, y: 30, size: 16, animation: 'bounce-in' },
          { type: 'svg', content: 'letters.B', x: 20, y: 30, size: 16, animation: 'bounce-in', delay: 100 },
          { type: 'svg', content: 'letters.C', x: 32, y: 30, size: 16, animation: 'bounce-in', delay: 200 },
          { type: 'svg', content: 'letters.D', x: 44, y: 30, size: 16, animation: 'bounce-in', delay: 300 },
          { type: 'svg', content: 'letters.E', x: 56, y: 30, size: 16, animation: 'bounce-in', delay: 400 },
          { type: 'svg', content: 'letters.F', x: 68, y: 30, size: 16, animation: 'bounce-in', delay: 500 },
          { type: 'svg', content: 'letters.G', x: 80, y: 30, size: 16, animation: 'bounce-in', delay: 600 },
          { type: 'svg', content: 'letters.H', x: 8, y: 60, size: 16, animation: 'bounce-in', delay: 700 },
          { type: 'svg', content: 'letters.I', x: 20, y: 60, size: 16, animation: 'bounce-in', delay: 800 },
          { type: 'svg', content: 'letters.J', x: 32, y: 60, size: 16, animation: 'bounce-in', delay: 900 },
          { type: 'character', svg: 'toonTown', x: 55, y: 55, size: 25, animation: 'excited' },
          { type: 'text', text: 'A to J!\nAlphabet fun!', x: 45, y: 78, show: true },
        ]
      }
    ]
  },
  // CARTOON 13: The Sleepy Song (Music)
  {
    id: 'sleepy-song',
    title: 'The Sleepy Song',
    category: 'music',
    categoryLabel: 'Music',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'moon',
    scenes: [
      { // Scene 1: Intro - nighttime
        background: 'linear-gradient(180deg, #1a1a2e 0%, #2D1B4E 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'moon', x: 40, y: 25, size: 40, animation: 'float-drift' },
          { type: 'character', svg: 'star', x: 65, y: 20, size: 20, animation: 'pulse-scale', delay: 300 },
          { type: 'character', svg: 'star', x: 80, y: 35, size: 15, animation: 'pulse-scale', delay: 600 },
          { type: 'character', svg: 'toonTown', x: 50, y: 50, size: 30, animation: 'bounce-in', delay: 900 },
          { type: 'text', text: '🌙 The Sleepy Song 🌙', x: 50, y: 12 },
        ]
      },
      { // Scene 2: First verse
        background: 'linear-gradient(180deg, #2D1B4E 0%, #1a1a2e 100%)',
        duration: 14000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 45, size: 35, animation: 'squash-stretch' },
          { type: 'text', text: 'Close your eyes...\nRest your head...', x: 45, y: 20, show: true },
        ]
      },
      { // Scene 3: Second verse
        background: 'linear-gradient(180deg, #1a1a2e 0%, #2D1B4E 100%)',
        duration: 14000,
        elements: [
          { type: 'character', svg: 'moon', x: 35, y: 25, size: 35, animation: 'float-drift' },
          { type: 'character', svg: 'toonTown', x: 55, y: 50, size: 30, animation: 'squash-stretch' },
          { type: 'text', text: 'Sweet dreams...\nFlying high...', x: 50, y: 15, show: true },
        ]
      },
      { // Scene 4: Final verse
        background: 'linear-gradient(180deg, #2D1B4E 0%, #1a1a2e 100%)',
        duration: 14000,
        elements: [
          { type: 'character', svg: 'star', x: 25, y: 25, size: 18, animation: 'pulse-scale' },
          { type: 'character', svg: 'star', x: 50, y: 20, size: 15, animation: 'pulse-scale', delay: 500 },
          { type: 'character', svg: 'star', x: 75, y: 28, size: 18, animation: 'pulse-scale', delay: 1000 },
          { type: 'character', svg: 'toonTown', x: 50, y: 55, size: 28, animation: 'squash-stretch' },
          { type: 'text', text: '💤 Sleep tight... 💤', x: 50, y: 15, show: true },
        ]
      },
      { // Scene 5: ZZZ ending
        background: 'linear-gradient(180deg, #0D0D1A 0%, #1a1a2e 100%)',
        duration: 6000,
        elements: [
          { type: 'character', svg: 'moon', x: 35, y: 25, size: 35, animation: 'float-drift' },
          { type: 'character', svg: 'toonTown', x: 55, y: 50, size: 30, animation: 'squash-stretch' },
          { type: 'text', text: '💤 ZZZ 💤 ZZZ 💤 ZZZ', x: 50, y: 75 },
        ]
      }
    ]
  },
  // CARTOON 14: Dance Fever (Music)
  {
    id: 'dance-fever',
    title: 'Dance Fever',
    category: 'music',
    categoryLabel: 'Music',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'toonTown',
    scenes: [
      { // Scene 1: Intro
        background: 'linear-gradient(180deg, #FF6B9D 0%, #7C4DFF 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 35, size: 45, animation: 'excited' },
          { type: 'text', text: '🕺 DANCE FEVER! 🕺', x: 50, y: 15 },
        ]
      },
      { // Scene 2: Arm waves
        background: 'linear-gradient(180deg, #FFD740 0%, #FF9800 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'dance' },
          { type: 'text', text: 'Wave your arms!\nLeft and right!', x: 45, y: 20, show: true },
        ]
      },
      { // Scene 3: Jump
        background: 'linear-gradient(180deg, #69F0AE 0%, #00E5FF 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'jump' },
          { type: 'text', text: 'Jump up high!\nTouch the sky!', x: 45, y: 20, show: true },
        ]
      },
      { // Scene 4: Spin
        background: 'linear-gradient(180deg, #E040FB 0%, #FF6B9D 100%)',
        duration: 12000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'squash-stretch' },
          { type: 'text', text: 'Spin around!\nRound and round!', x: 45, y: 20, show: true },
        ]
      },
      { // Scene 5: Everyone dances
        background: 'linear-gradient(180deg, #FFD740 0%, #FF6B9D 50%, #7C4DFF 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 30, y: 40, size: 35, animation: 'excited' },
          { type: 'character', svg: 'star', x: 55, y: 45, size: 25, animation: 'dance', delay: 200 },
          { type: 'character', svg: 'sun', x: 75, y: 50, size: 22, animation: 'dance', delay: 400 },
          { type: 'text', text: '🎉 DANCE DANCE DANCE! 🎉', x: 45, y: 15, show: true },
        ]
      }
    ]
  },
  // CARTOON 15: Lost Teddy (Funny)
  {
    id: 'lost-teddy',
    title: 'Lost Teddy',
    category: 'funny',
    categoryLabel: 'Funny',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'teddy',
    scenes: [
      { // Scene 1: ToonTown with teddy
        background: 'linear-gradient(180deg, #FFCDD2 0%, #FFECB3 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'teddy', x: 35, y: 35, size: 35, animation: 'bounce-in' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 28, animation: 'bounce-in', delay: 500 },
          { type: 'speech', text: 'My best friend Teddy!', x: 55, y: 15, show: true },
        ]
      },
      { // Scene 2: Teddy is lost!
        background: 'linear-gradient(180deg, #90CAF9 0%, #64B5F6 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 45, size: 35, animation: 'surprised' },
          { type: 'speech', text: 'Teddy?!', x: 45, y: 15, show: true },
          { type: 'delay', time: 2000 },
          { type: 'speech', text: 'WHERE IS TEDDY?!', x: 45, y: 15 },
        ]
      },
      { // Scene 3: Searches around
        background: 'linear-gradient(180deg, #FFF9C4 0%, #FFE082 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 30, y: 45, size: 35, animation: 'walk' },
          { type: 'speech', text: 'Teddy? Teddy!', x: 20, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Under the bed?', x: 20, y: 15 },
        ]
      },
      { // Scene 4: Looks in box
        background: 'linear-gradient(180deg, #E1BEE7 0%, #CE93D8 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 45, size: 35, animation: 'surprised' },
          { type: 'speech', text: 'Not in the toy box!', x: 45, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Maybe the closet?', x: 45, y: 15 },
        ]
      },
      { // Scene 5: Found it!
        background: 'linear-gradient(180deg, #C8E6C9 0%, #A5D6A7 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'teddy', x: 40, y: 40, size: 35, animation: 'bounce-in' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 28, animation: 'excited' },
          { type: 'speech', text: 'TEDDY FOUND!', x: 55, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Never leave me again!', x: 55, y: 15 },
        ]
      },
      { // Scene 6: Happy ending
        background: 'linear-gradient(180deg, #FFCDD2 0%, #FFECB3 100%)',
        duration: 5000,
        elements: [
          { type: 'character', svg: 'teddy', x: 35, y: 35, size: 35, animation: 'bounce-in' },
          { type: 'character', svg: 'toonTown', x: 55, y: 45, size: 28, animation: 'dance' },
          { type: 'text', text: 'Best friends forever!', x: 50, y: 75, show: true },
        ]
      }
    ]
  },
  // CARTOON 16: Opposite Day (Funny)
  {
    id: 'opposite-day',
    title: 'Opposite Day',
    category: 'funny',
    categoryLabel: 'Funny',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'toonTown',
    scenes: [
      { // Scene 1: Intro
        background: 'linear-gradient(180deg, #E1F5FE 0%, #B3E5FC 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'bounce-in' },
          { type: 'speech', text: 'Today is Opposite Day!', x: 45, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'That means YES means NO!', x: 45, y: 15 },
        ]
      },
      { // Scene 2: Up is down
        background: 'linear-gradient(180deg, #FFCDD2 0%, #EF9A9A 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 60, size: 35, animation: 'bounce-in' },
          { type: 'speech', text: 'Up is DOWN!', x: 45, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'So I walk on my head!', x: 45, y: 15 },
        ]
      },
      { // Scene 3: Happy is sad
        background: 'linear-gradient(180deg, #E1BEE7 0%, #CE93D8 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 45, size: 35, animation: 'surprised' },
          { type: 'speech', text: 'Happy is SAD!', x: 45, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'So I cry when Im GLAD!', x: 45, y: 15 },
        ]
      },
      { // Scene 4: Big is small
        background: 'linear-gradient(180deg, #B2EBF2 0%, #80DEEA 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 50, y: 50, size: 40, animation: 'squash-stretch' },
          { type: 'speech', text: 'Big is SMALL!', x: 50, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'So I shrink to TINY!', x: 50, y: 15 },
        ]
      },
      { // Scene 5: Night is day
        background: 'linear-gradient(180deg, #FFD740 0%, #FF9800 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 45, size: 35, animation: 'excited' },
          { type: 'speech', text: 'Night is DAY!', x: 45, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'So I sleep at PLAY!', x: 45, y: 15 },
        ]
      },
      { // Scene 6: Confused ending
        background: 'linear-gradient(180deg, #C8E6C9 0%, #A5D6A7 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 45, size: 35, animation: 'squash-stretch' },
          { type: 'speech', text: 'Wait... what?', x: 45, y: 15, show: true },
          { type: 'delay', time: 2000 },
          { type: 'text', text: '🤔 Opposite Day is CONFUSING! 🤔', x: 45, y: 70 },
        ]
      }
    ]
  },
  // CARTOON 17: Counting Campfire (Educational)
  {
    id: 'counting-campfire',
    title: 'Counting Campfire',
    category: 'educational',
    categoryLabel: 'Educational',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'campfire',
    scenes: [
      { // Scene 1: Setting up campfire
        background: 'linear-gradient(180deg, #1a1a2e 0%, #2D1B4E 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'campfire', x: 40, y: 40, size: 40, animation: 'pulse-scale' },
          { type: 'character', svg: 'toonTown', x: 60, y: 55, size: 28, animation: 'bounce-in', delay: 500 },
          { type: 'text', text: '🔥 Campfire Fun! 🔥', x: 50, y: 15 },
        ]
      },
      { // Scene 2: Count 1-3
        background: 'linear-gradient(180deg, #2D1B4E 0%, #1a1a2e 100%)',
        duration: 10000,
        elements: [
          { type: 'text', text: '1, 2, 3...', x: 45, y: 30, animation: 'spring-bounce', show: true },
          { type: 'character', svg: 'toonTown', x: 50, y: 55, size: 30, animation: 'excited' },
          { type: 'text', text: 'Let\'s count together!', x: 50, y: 75, show: true },
        ]
      },
      { // Scene 3: Count 4-6
        background: 'linear-gradient(180deg, #1a1a2e 0%, #2D1B4E 100%)',
        duration: 10000,
        elements: [
          { type: 'text', text: '4, 5, 6...', x: 45, y: 30, animation: 'spring-bounce', show: true },
          { type: 'character', svg: 'toonTown', x: 50, y: 55, size: 30, animation: 'dance' },
          { type: 'text', text: 'More and more!', x: 50, y: 75, show: true },
        ]
      },
      { // Scene 4: Count 7-9
        background: 'linear-gradient(180deg, #2D1B4E 0%, #1a1a2e 100%)',
        duration: 10000,
        elements: [
          { type: 'text', text: '7, 8, 9...', x: 45, y: 30, animation: 'spring-bounce', show: true },
          { type: 'character', svg: 'toonTown', x: 50, y: 55, size: 30, animation: 'excited' },
          { type: 'text', text: 'Almost there!', x: 50, y: 75, show: true },
        ]
      },
      { // Scene 5: Count to 10
        background: 'linear-gradient(180deg, #1a1a2e 0%, #2D1B4E 100%)',
        duration: 10000,
        elements: [
          { type: 'text', text: '10!', x: 45, y: 30, animation: 'spring-bounce', show: true },
          { type: 'character', svg: 'toonTown', x: 50, y: 55, size: 30, animation: 'jump' },
          { type: 'text', text: 'We counted to TEN!', x: 50, y: 75, show: true },
        ]
      },
      { // Scene 6: Sappy campfire ending
        background: 'linear-gradient(180deg, #1a1a2e 0%, #2D1B4E 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'campfire', x: 35, y: 35, size: 35, animation: 'pulse-scale' },
          { type: 'character', svg: 'star', x: 65, y: 20, size: 18, animation: 'pulse-scale', delay: 300 },
          { type: 'character', svg: 'star', x: 80, y: 30, size: 15, animation: 'pulse-scale', delay: 600 },
          { type: 'character', svg: 'toonTown', x: 55, y: 55, size: 25, animation: 'squash-stretch' },
          { type: 'text', text: '🔥 1, 2, 3... 🔥\nSweet campfire dreams!', x: 50, y: 75, show: true },
        ]
      }
    ]
  },
  // CARTOON 18: Magic Show (Funny)
  {
    id: 'magic-show',
    title: 'Magic Show',
    category: 'funny',
    categoryLabel: 'Funny',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'magicHat',
    scenes: [
      { // Scene 1: Introduction
        background: 'linear-gradient(180deg, #E1F5FE 0%, #B3E5FC 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'magicHat', x: 35, y: 30, size: 45, animation: 'bounce-in' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 28, animation: 'bounce-in', delay: 500 },
          { type: 'speech', text: 'Ladies and gentlemen!', x: 55, y: 15, show: true },
          { type: 'delay', time: 2000 },
          { type: 'speech', text: 'Watch my MAGIC!', x: 55, y: 15 },
        ]
      },
      { // Scene 2: First trick
        background: 'linear-gradient(180deg, #E1BEE7 0%, #CE93D8 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'magicHat', x: 40, y: 35, size: 40, animation: 'spring-bounce' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 28, animation: 'excited' },
          { type: 'speech', text: 'A rabbit!', x: 55, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Wait, thats a sock!', x: 55, y: 15 },
        ]
      },
      { // Scene 3: Second trick
        background: 'linear-gradient(180deg, #B2EBF2 0%, #80DEEA 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'magicHat', x: 40, y: 35, size: 40, animation: 'shake' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 28, animation: 'surprised' },
          { type: 'speech', text: 'Presto!', x: 55, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Its... a banana?!', x: 55, y: 15 },
        ]
      },
      { // Scene 4: Third trick fails
        background: 'linear-gradient(180deg, #FFF9C4 0%, #FFE082 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'magicHat', x: 40, y: 35, size: 40, animation: 'squash-stretch' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 28, animation: 'shake' },
          { type: 'speech', text: 'TA-DA!', x: 55, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Nothing came out!', x: 55, y: 15 },
        ]
      },
      { // Scene 5: Gives up
        background: 'linear-gradient(180deg, #FFCDD2 0%, #EF9A9A 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 45, size: 35, animation: 'squash-stretch' },
          { type: 'speech', text: 'Magic is HARD!', x: 45, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Maybe I should juggle?', x: 45, y: 15 },
        ]
      },
      { // Scene 6: Happy ending
        background: 'linear-gradient(180deg, #C8E6C9 0%, #A5D6A7 100%)',
        duration: 6000,
        elements: [
          { type: 'character', svg: 'magicHat', x: 35, y: 35, size: 40, animation: 'bounce-in' },
          { type: 'character', svg: 'toonTown', x: 60, y: 50, size: 28, animation: 'dance' },
          { type: 'text', text: '🎩 Still magical! 🎩', x: 50, y: 75, show: true },
        ]
      }
    ]
  },
  // CARTOON 19: Zoo Friends (Educational)
  {
    id: 'zoo-friends',
    title: 'Zoo Friends',
    category: 'educational',
    categoryLabel: 'Educational',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'lion',
    scenes: [
      { // Scene 1: At the zoo
        background: 'linear-gradient(180deg, #81D4FA 0%, #4FC3F7 100%)',
        duration: 7000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'bounce-in' },
          { type: 'text', text: '🦁 Zoo Day! 🦁', x: 50, y: 15 },
        ]
      },
      { // Scene 2: Lion says roar
        background: 'linear-gradient(180deg, #FFE0B2 0%, #FFCC80 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'lion', x: 35, y: 35, size: 45, animation: 'bounce-in' },
          { type: 'character', svg: 'toonTown', x: 65, y: 55, size: 25, animation: 'excited' },
          { type: 'text', text: 'ROAR!', x: 40, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'The lion says ROAR!', x: 60, y: 70, show: true },
        ]
      },
      { // Scene 3: Monkey says ooh
        background: 'linear-gradient(180deg, #D7CCC8 0%, #BCAAA4 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'monkey', x: 35, y: 35, size: 45, animation: 'walk' },
          { type: 'character', svg: 'toonTown', x: 65, y: 55, size: 25, animation: 'dance' },
          { type: 'text', text: 'OOH OOH!', x: 40, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'The monkey says OOH!', x: 60, y: 70, show: true },
        ]
      },
      { // Scene 4: Frog says ribbit
        background: 'linear-gradient(180deg, #C8E6C9 0%, #A5D6A7 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'frog', x: 35, y: 35, size: 45, animation: 'jump' },
          { type: 'character', svg: 'toonTown', x: 65, y: 55, size: 25, animation: 'excited' },
          { type: 'text', text: 'RIBBIT!', x: 40, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'The frog says RIBBIT!', x: 60, y: 70, show: true },
        ]
      },
      { // Scene 5: Duck says quack
        background: 'linear-gradient(180deg, #B3E5FC 0%, #81D4FA 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'duck', x: 35, y: 35, size: 40, animation: 'walk' },
          { type: 'character', svg: 'toonTown', x: 65, y: 55, size: 25, animation: 'dance' },
          { type: 'text', text: 'QUACK!', x: 40, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'The duck says QUACK!', x: 60, y: 70, show: true },
        ]
      },
      { // Scene 6: All animals
        background: 'linear-gradient(180deg, #E1F5FE 0%, #C8E6C9 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'lion', x: 15, y: 40, size: 28, animation: 'bounce-in' },
          { type: 'character', svg: 'monkey', x: 35, y: 40, size: 28, animation: 'bounce-in', delay: 200 },
          { type: 'character', svg: 'frog', x: 55, y: 40, size: 28, animation: 'bounce-in', delay: 400 },
          { type: 'character', svg: 'duck', x: 75, y: 40, size: 28, animation: 'bounce-in', delay: 600 },
          { type: 'character', svg: 'toonTown', x: 45, y: 60, size: 22, animation: 'excited' },
          { type: 'text', text: '🦁🐵🐸🦆 Zoo friends!', x: 50, y: 78, show: true },
        ]
      }
    ]
  },
  // CARTOON 20: Superhero ToonTown (Funny)
  {
    id: 'superhero-toontown',
    title: 'Superhero ToonTown',
    category: 'funny',
    categoryLabel: 'Funny',
    duration: '1:00',
    durationSec: 60,
    thumbnail: 'superhero',
    scenes: [
      { // Scene 1: Transformation
        background: 'linear-gradient(180deg, #7C4DFF 0%, #651FFF 100%)',
        duration: 8000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'bounce-in' },
          { type: 'text', text: '✨ CAPED CRUSADER! ✨', x: 50, y: 15 },
        ]
      },
      { // Scene 2: Flying
        background: 'linear-gradient(180deg, #00E5FF 0%, #00BCD4 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'superhero', x: 35, y: 35, size: 45, animation: 'jump' },
          { type: 'speech', text: 'I can FLY!', x: 40, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'Up to the sky!', x: 40, y: 15 },
        ]
      },
      { // Scene 3: Stopping crime
        background: 'linear-gradient(180deg, #FF6B9D 0%, #FF4081 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'superhero', x: 35, y: 35, size: 45, animation: 'excited' },
          { type: 'speech', text: 'A CRIME!', x: 40, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'A sticky lollipop!', x: 40, y: 15 },
        ]
      },
      { // Scene 4: Fighting bad guy
        background: 'linear-gradient(180deg, #FFD740 0%, #FFAB00 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'superhero', x: 30, y: 40, size: 40, animation: 'dance' },
          { type: 'speech', text: 'Take THAT!', x: 25, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'And THAT!', x: 25, y: 15 },
        ]
      },
      { // Scene 5: Victory
        background: 'linear-gradient(180deg, #69F0AE 0%, #00E5FF 100%)',
        duration: 10000,
        elements: [
          { type: 'character', svg: 'superhero', x: 35, y: 35, size: 45, animation: 'excited' },
          { type: 'speech', text: 'Justice wins!', x: 40, y: 15, show: true },
          { type: 'delay', time: 3000 },
          { type: 'speech', text: 'The lollipop is GONE!', x: 40, y: 15 },
        ]
      },
      { // Scene 6: Back to normal
        background: 'linear-gradient(180deg, #E1F5FE 0%, #B3E5FC 100%)',
        duration: 6000,
        elements: [
          { type: 'character', svg: 'toonTown', x: 40, y: 40, size: 40, animation: 'bounce-in' },
          { type: 'speech', text: 'Being a hero is tiring!', x: 45, y: 15, show: true },
        ]
      }
    ]
  }
];

// Player State
let currentEpisode = null;
let currentSceneIndex = 0;
let isPlaying = false;
let sceneTimeout = null;
let progressInterval = null;

// DOM Elements
const cartoonModal = document.querySelector('.cartoon-modal');
const modalClose = document.querySelector('.modal-close');
const cartoonStage = document.querySelector('.cartoon-stage');
const cartoonProgressBar = document.querySelector('.cartoon-progress-bar');
const cartoonTime = document.querySelector('.cartoon-time');
const playPauseBtn = document.querySelector('.control-btn.play');
const cartoonTitleDisplay = document.querySelector('.cartoon-title-display');

// Initialize
function initCartoons() {
  renderEpisodeCards();
  setupEventListeners();
}

function renderEpisodeCards() {
  const grid = document.querySelector('.episode-grid');
  if (!grid) return;

  grid.innerHTML = EPISODES.map(episode => `
    <div class="episode-card" data-episode="${episode.id}">
      <div class="episode-thumbnail" style="background: linear-gradient(135deg, ${getEpisodeGradient(episode.category)})">
        ${episode.thumbnail === 'burger' ? CHARACTERS.burger :
          episode.thumbnail === 'rainbow' ? CHARACTERS.rainbow :
          episode.thumbnail === 'numbers' ? CHARACTERS.numbers[1] : CHARACTERS.toonTown}
        <div class="episode-play-btn">▶</div>
      </div>
      <div class="episode-info">
        <span class="episode-category ${episode.category}">${episode.categoryLabel}</span>
        <h3 class="episode-title">${episode.title}</h3>
        <span class="episode-duration">${episode.duration}</span>
      </div>
    </div>
  `).join('');

  // Add click handlers
  document.querySelectorAll('.episode-card').forEach(card => {
    card.addEventListener('click', () => openCartoonModal(card.dataset.episode));
  });
}

function getEpisodeGradient(category) {
  switch(category) {
    case 'funny': return '#FF6B9D, #7C4DFF';
    case 'music': return '#00E5FF, #7C4DFF';
    case 'educational': return '#FFD740, #FF6B9D';
    default: return '#FF6B9D, #7C4DFF';
  }
}

function setupEventListeners() {
  modalClose?.addEventListener('click', closeCartoonModal);
  cartoonModal?.addEventListener('click', (e) => {
    if (e.target === cartoonModal) closeCartoonModal();
  });
  playPauseBtn?.addEventListener('click', togglePlayPause);
}

function openCartoonModal(episodeId) {
  currentEpisode = EPISODES.find(e => e.id === episodeId);
  if (!currentEpisode) return;

  cartoonModal.classList.add('active');
  cartoonTitleDisplay.textContent = currentEpisode.title;
  resetPlayer();
  startPlayer();
}

function closeCartoonModal() {
  cartoonModal.classList.remove('active');
  stopPlayer();
}

function resetPlayer() {
  currentSceneIndex = 0;
  isPlaying = false;
  cartoonProgressBar.style.width = '0%';
  cartoonTime.textContent = '0:00 / ' + formatTime(currentEpisode.durationSec);
  playPauseBtn.innerHTML = '▶';
  if (cartoonStage) cartoonStage.innerHTML = '';
}

function togglePlayPause() {
  if (isPlaying) {
    stopPlayer();
  } else {
    startPlayer();
  }
}

function startPlayer() {
  if (!currentEpisode) return;
  isPlaying = true;
  playPauseBtn.innerHTML = '⏸';

  // Start background music based on cartoon category
  sound.init();
  sound.resume();
  switch(currentEpisode.category) {
    case 'funny': sound.startFunnyMusic(); break;
    case 'music': sound.startMusicTheme(); break;
    case 'educational': sound.startEducationalMusic(); break;
  }

  playProgress();
  playCurrentScene();
}

function stopPlayer() {
  isPlaying = false;
  playPauseBtn.innerHTML = '▶';
  sound.stopMusic();
  sound.stopSpeaking();
  if (sceneTimeout) clearTimeout(sceneTimeout);
  if (progressInterval) clearInterval(progressInterval);
}

function playProgress() {
  const startTime = Date.now() - (currentSceneIndex > 0 ? getElapsedTime() : 0);
  const totalDuration = currentEpisode.durationSec * 1000;

  progressInterval = setInterval(() => {
    if (!isPlaying) return;
    const elapsed = Date.now() - startTime;
    const progress = Math.min((elapsed / totalDuration) * 100, 100);
    cartoonProgressBar.style.width = progress + '%';
    cartoonTime.textContent = formatTime(elapsed / 1000) + ' / ' + formatTime(currentEpisode.durationSec);

    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, 100);
}

function getElapsedTime() {
  let elapsed = 0;
  for (let i = 0; i < currentSceneIndex; i++) {
    elapsed += currentEpisode.scenes[i].duration;
  }
  return elapsed;
}

function playCurrentScene() {
  if (!isPlaying || currentSceneIndex >= currentEpisode.scenes.length) {
    if (currentSceneIndex >= currentEpisode.scenes.length) {
      sound.playHappy();
      closeCartoonModal();
    }
    return;
  }

  // Play scene change sound
  sound.playSceneChange();

  const scene = currentEpisode.scenes[currentSceneIndex];
  renderScene(scene);

  sceneTimeout = setTimeout(() => {
    currentSceneIndex++;
    playCurrentScene();
  }, scene.duration);
}

function renderScene(scene) {
  if (!cartoonStage) return;

  cartoonStage.style.background = scene.background;
  cartoonStage.innerHTML = '';

  let delayOffset = 0;

  scene.elements.forEach(element => {
    if (element.type === 'delay') {
      delayOffset += element.time;
      return;
    }

    setTimeout(() => {
      if (!isPlaying) return;

      switch (element.type) {
        case 'character':
          renderCharacter(element);
          break;
        case 'speech':
          renderSpeech(element);
          break;
        case 'text':
          renderText(element);
          break;
        case 'svg':
          renderSvg(element);
          break;
      }
    }, delayOffset);
  });
}

function renderCharacter(element) {
  const div = document.createElement('div');
  div.className = 'character';
  div.style.cssText = `
    left: ${element.x}%;
    top: ${element.y}%;
    width: ${element.size}%;
    height: auto;
    animation: ${element.animation} 0.6s ease-out forwards;
  `;

  const charSvg = CHARACTERS[element.svg] || '';
  div.innerHTML = charSvg;

  if (element.animation === 'dance' || element.animation === 'wiggle') {
    div.style.animationIterationCount = 'infinite';
    if (element.animation === 'dance') {
      div.style.animationDuration = '0.8s';
    } else {
      div.style.animationDuration = '0.5s';
    }
  }

  cartoonStage.appendChild(div);

  // Play appear sound
  sound.playAppear();
}

function renderSpeech(element) {
  const div = document.createElement('div');
  div.className = 'cartoon-speech';
  div.textContent = element.text;
  div.style.cssText = `
    left: ${element.x}%;
    top: ${element.y}%;
  `;
  cartoonStage.appendChild(div);

  // Determine voice type based on text/emotion
  let voiceType = 'toonTown';
  const text = element.text || '';
  if (text.includes('GROUCHY') || text.includes('BLEHHH')) {
    voiceType = 'silly';
  } else if (text.includes('NOM NOM') || text.includes('YUMMIEST')) {
    voiceType = 'happy';
  } else if (text.includes('Ooh') || text.includes('Look') || text.includes('Maybe')) {
    voiceType = 'surprised';
  }

  // Play speech pop sound AND actual voice
  sound.playSpeech();
  sound.speak(element.text, voiceType);

  setTimeout(() => {
    if (isPlaying) div.classList.add('show');
  }, 200);
}

function renderText(element) {
  const div = document.createElement('div');
  div.className = 'cartoon-text';
  div.innerHTML = element.text.replace(/\n/g, '<br>');
  div.style.cssText = `
    left: ${element.x}%;
    top: ${element.y}%;
    transform: translateX(-50%);
  `;
  cartoonStage.appendChild(div);

  // Play appropriate sound based on content
  const text = element.text || '';
  if (text.includes('RED') || text.includes('ORANGE') || text.includes('YELLOW') ||
      text.includes('GREEN') || text.includes('BLUE') || text.includes('PURPLE')) {
    sound.playColor();
  } else if (text.match(/^[0-9]+$/) || text.includes('1, 2, 3') || text.includes('COUNTING')) {
    sound.playCount();
  } else if (text.includes('BOOGIE') || text.includes('RAINBOW')) {
    sound.playMusicNote();
  } else if (text.includes('BLEHHH') || text.includes('GROUCHY')) {
    sound.playFunny();
  } else {
    sound.playSpeech();
  }

  setTimeout(() => {
    if (isPlaying) div.classList.add('show');
  }, element.delay || 500);
}

function renderSvg(element) {
  const div = document.createElement('div');
  div.className = 'character';
  div.style.cssText = `
    left: ${element.x}%;
    top: ${element.y}%;
    width: ${element.size}%;
    height: auto;
    animation: ${element.animation || 'bounce-in'} 0.6s ease-out forwards;
  `;

  const content = element.content.includes('.') ?
    element.content.split('.').reduce((o, k) => o[k], CHARACTERS) :
    CHARACTERS[element.content];
  div.innerHTML = content;

  cartoonStage.appendChild(div);

  // Play appear and color sound if it's a color
  sound.playAppear();
  if (element.content.includes('colors.')) {
    setTimeout(() => sound.playColor(), 300);
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Category Tab Filtering
function filterEpisodes(category) {
  const cards = document.querySelectorAll('.episode-card');
  const tabs = document.querySelectorAll('.category-tab');

  tabs.forEach(tab => tab.classList.remove('active'));
  if (category === 'all') {
    tabs[0]?.classList.add('active');
  } else {
    tabs.forEach(tab => {
      if (tab.dataset.category === category) tab.classList.add('active');
    });
  }

  cards.forEach(card => {
    const episode = EPISODES.find(e => e.id === card.dataset.episode);
    if (category === 'all' || episode.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initCartoons);

// Make filterEpisodes available globally
window.filterEpisodes = filterEpisodes;

// Toggle sound mute
function toggleSound() {
  const isMuted = sound.toggleMute();
  const muteBtn = document.querySelector('.control-btn.mute');
  if (muteBtn) {
    muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
  }
}

// Initialize audio on first user interaction (required by browsers)
document.addEventListener('click', () => {
  sound.init();
  sound.resume();
}, { once: true });
