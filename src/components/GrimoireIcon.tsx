export function GrimoireIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="handGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a8a45" />
          <stop offset="100%" stopColor="#2d4522" />
        </linearGradient>
        <radialGradient id="eyeGrad" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#c9a8f5" />
          <stop offset="55%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#3d1a70" />
        </radialGradient>
      </defs>

      {/* Sombra de contato */}
      <ellipse cx="50" cy="92" rx="22" ry="4" fill="black" opacity="0.25" />

      {/* Dedos - curvados organicamente, desenhados atrás pra trás pra frente */}
      <path d="M67 46c2-14 3-24 1-32-1-5-4-8-8-7s-6 5-5 10c1 7 2 15 2 22" fill="url(#handGrad)" stroke="#1a2e14" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M55 42c0-16-1-27-3-34-1-5-5-7-9-5s-5 6-3 11c3 8 5 17 6 27" fill="url(#handGrad)" stroke="#1a2e14" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M43 42c-1-15-3-25-6-31-2-4-6-6-10-3s-4 7-1 11c4 7 7 15 9 24" fill="url(#handGrad)" stroke="#1a2e14" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M32 48c-3-12-6-20-11-25-3-4-8-4-11 0s-2 8 1 11c5 5 10 11 14 18" fill="url(#handGrad)" stroke="#1a2e14" strokeWidth="1.5" strokeLinejoin="round" />

      {/* Polegar */}
      <path d="M25 62c-9-4-16-8-20-13-3-4-2-9 2-11s8 0 11 4c4 6 9 12 15 17" fill="url(#handGrad)" stroke="#1a2e14" strokeWidth="1.5" strokeLinejoin="round" />

      {/* Palma */}
      <path
        d="M24 52c-5 4-8 10-8 18 0 16 14 28 34 28s34-12 34-28c0-9-4-16-10-20-3 8-11 13-24 13s-21-5-26-11Z"
        fill="url(#handGrad)"
        stroke="#1a2e14"
        strokeWidth="2"
      />

      {/* Nós dos dedos / textura */}
      <path d="M32 58q18 10 36 0" stroke="#1a2e14" strokeWidth="1" fill="none" opacity="0.5" />

      {/* Olho na palma */}
      <path
        d="M30 68c7-9 13-13 20-13s13 4 20 13c-7 9-13 13-20 13s-13-4-20-13Z"
        fill="#0d080c"
        stroke="#c9a8f5"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="68" r="8" fill="url(#eyeGrad)" />
      <circle cx="50" cy="68" r="3.2" fill="#0d080c" />
      <path d="M50 60v3M50 73v3M42 68h3M55 68h3" stroke="#c9a8f5" strokeWidth="0.8" opacity="0.7" />
      <circle cx="47.5" cy="65" r="1.3" fill="#e9d8fb" opacity="0.8" />
    </svg>
  )
}
