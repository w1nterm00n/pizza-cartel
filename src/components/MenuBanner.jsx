import './MenuBanner.css';

export const MenuBanner = () => (
  <div className="pc-banner">
    <div className="pc-banner__card">
      <div className="pc-banner__text">
        <div className="pc-banner__since">горячо, честно, по-домашнему —</div>
        <div className="pc-banner__title">
          ВОТ И ВСЯ <span>МАГИЯ.</span>
        </div>
        <div className="pc-banner__lede">
          Тесто на 12-часовой ферментации, печь 350°, пицца у двери — за 25 минут. Выбирай свою.
        </div>
      </div>

      <div className="pc-banner__chef" aria-label="Шеф-повар показывает класс">
        <svg viewBox="0 0 240 260" width="200" height="216">
          <defs>
            <radialGradient id="faceShade" cx="40%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#FCE2C0" />
              <stop offset="70%" stopColor="#F0C896" />
              <stop offset="100%" stopColor="#D89E68" />
            </radialGradient>
            <linearGradient id="hatShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#F0E6CC" />
            </linearGradient>
            <linearGradient id="coatShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#EADDB8" />
            </linearGradient>
            <linearGradient id="neckShade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E63946" />
              <stop offset="100%" stopColor="#8E0E22" />
            </linearGradient>
          </defs>

          <path d="M30 260 Q30 175 95 165 L145 165 Q210 175 210 260 Z" fill="url(#coatShade)" stroke="#1A1208" strokeWidth="3" />
          <path d="M30 260 Q40 215 75 195" fill="none" stroke="#1A1208" strokeWidth="2" opacity="0.5" />
          <path d="M210 260 Q200 215 165 195" fill="none" stroke="#1A1208" strokeWidth="2" opacity="0.5" />
          <circle cx="95" cy="225" r="4" fill="#C8102E" stroke="#1A1208" strokeWidth="1.5" />
          <circle cx="95" cy="248" r="4" fill="#C8102E" stroke="#1A1208" strokeWidth="1.5" />

          <path d="M85 165 Q120 188 155 165 L148 210 Q120 215 92 210 Z" fill="url(#neckShade)" stroke="#1A1208" strokeWidth="2.5" />
          <path d="M115 178 Q120 184 125 178 Q126 184 122 190 L118 190 Q114 184 115 178 Z" fill="#8E0E22" stroke="#1A1208" strokeWidth="1.5" />
          <path d="M95 200 Q105 198 120 202 Q135 198 145 200" fill="none" stroke="#1A1208" strokeWidth="1" opacity="0.4" />

          <path d="M103 148 Q103 165 120 168 Q137 165 137 148 Z" fill="#E8C195" stroke="#1A1208" strokeWidth="2.5" />
          <path d="M103 160 Q120 164 137 160" fill="none" stroke="#1A1208" strokeWidth="1.5" opacity="0.35" />

          <path d="M68 110 Q66 70 95 60 Q120 53 145 60 Q174 70 172 110 Q170 138 155 150 Q120 162 85 150 Q70 138 68 110 Z" fill="url(#faceShade)" stroke="#1A1208" strokeWidth="3" />

          <path d="M68 105 Q60 105 60 118 Q60 128 70 130" fill="url(#faceShade)" stroke="#1A1208" strokeWidth="2.5" />
          <path d="M64 115 Q67 118 65 124" stroke="#1A1208" strokeWidth="1.5" fill="none" />
          <path d="M172 105 Q180 105 180 118 Q180 128 170 130" fill="url(#faceShade)" stroke="#1A1208" strokeWidth="2.5" />
          <path d="M176 115 Q173 118 175 124" stroke="#1A1208" strokeWidth="1.5" fill="none" />

          <path d="M72 108 Q66 92 76 78" stroke="#3A2D1F" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M168 108 Q174 92 164 78" stroke="#3A2D1F" strokeWidth="5" fill="none" strokeLinecap="round" />

          <path d="M86 94 Q98 86 110 92" stroke="#3A2D1F" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M130 92 Q142 86 154 94" stroke="#3A2D1F" strokeWidth="4.5" fill="none" strokeLinecap="round" />

          <path d="M92 106 Q100 100 108 106" stroke="#1A1208" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M132 106 Q140 100 148 106" stroke="#1A1208" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M92 109 Q96 112 100 110" stroke="#1A1208" strokeWidth="1.2" fill="none" />
          <path d="M132 109 Q136 112 140 110" stroke="#1A1208" strokeWidth="1.2" fill="none" />

          <path d="M120 108 Q113 124 116 134 Q120 138 124 134 Q127 124 120 108 Z" fill="#E8C195" stroke="#1A1208" strokeWidth="2" />
          <ellipse cx="117" cy="132" rx="1.5" ry="1" fill="#1A1208" />
          <ellipse cx="123" cy="132" rx="1.5" ry="1" fill="#1A1208" />

          <path d="M88 138 Q92 133 100 135 Q108 138 115 138 Q118 134 120 134 Q122 134 125 138 Q132 138 140 135 Q148 133 152 138 Q150 148 140 150 Q128 150 122 145 Q120 146 118 145 Q112 150 100 150 Q90 148 88 138 Z" fill="#3A2D1F" stroke="#1A1208" strokeWidth="2" strokeLinejoin="round" />

          <path d="M112 152 Q120 159 128 152" stroke="#1A1208" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M114 152 Q120 156 126 152 L126 152 Q120 154 114 152 Z" fill="#C8102E" opacity="0.6" />

          <ellipse cx="82" cy="128" rx="9" ry="6" fill="#E63946" opacity="0.35" />
          <ellipse cx="158" cy="128" rx="9" ry="6" fill="#E63946" opacity="0.35" />

          <rect x="66" y="62" width="108" height="16" fill="url(#hatShade)" stroke="#1A1208" strokeWidth="3" />
          <line x1="66" y1="72" x2="174" y2="72" stroke="#1A1208" strokeWidth="1.5" opacity="0.6" />
          <circle cx="84" cy="72" r="1.8" fill="#C8102E" />
          <circle cx="120" cy="72" r="1.8" fill="#C8102E" />
          <circle cx="156" cy="72" r="1.8" fill="#C8102E" />

          <ellipse cx="78" cy="42" rx="22" ry="26" fill="url(#hatShade)" stroke="#1A1208" strokeWidth="3" />
          <ellipse cx="162" cy="42" rx="22" ry="26" fill="url(#hatShade)" stroke="#1A1208" strokeWidth="3" />
          <ellipse cx="120" cy="28" rx="28" ry="32" fill="url(#hatShade)" stroke="#1A1208" strokeWidth="3" />

          <path d="M170 192 Q200 165 196 130 Q194 118 184 116 Q172 116 172 134 L162 188 Z" fill="url(#coatShade)" stroke="#1A1208" strokeWidth="3" />
          <ellipse cx="184" cy="124" rx="14" ry="7" fill="#C8102E" stroke="#1A1208" strokeWidth="2.5" />

          <path d="M174 116 Q160 112 158 100 Q158 88 172 86 Q188 84 194 92 Q200 100 198 110 Q196 118 184 118 Z" fill="url(#faceShade)" stroke="#1A1208" strokeWidth="2.5" />
          <path d="M170 100 Q175 96 182 99" stroke="#1A1208" strokeWidth="1.3" fill="none" opacity="0.6" />
          <path d="M170 106 Q176 102 184 105" stroke="#1A1208" strokeWidth="1.3" fill="none" opacity="0.6" />
          <path d="M170 112 Q176 108 184 111" stroke="#1A1208" strokeWidth="1.3" fill="none" opacity="0.6" />

          <path d="M184 86 Q180 70 184 56 Q187 48 194 50 Q200 54 200 66 Q198 78 192 88 Z" fill="url(#faceShade)" stroke="#1A1208" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M190 58 Q194 58 195 63 Q193 65 190 64 Z" fill="#FFF" stroke="#1A1208" strokeWidth="1" opacity="0.85" />

          <ellipse cx="115" cy="14" rx="10" ry="4" fill="#FFFFFF" opacity="0.6" />

          <g fill="#F2B829" stroke="#1A1208" strokeWidth="1">
            <path d="M206 50 l2 4 l4 1 l-4 1 l-2 4 l-2 -4 l-4 -1 l4 -1 z" />
            <path d="M210 78 l1.5 3 l3 0.7 l-3 0.8 l-1.5 3 l-1.5 -3 l-3 -0.8 l3 -0.7 z" />
          </g>
        </svg>
      </div>
    </div>
  </div>
);
