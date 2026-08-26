export function GrimoireIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="handGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e7dccb" />
          <stop offset="100%" stopColor="#a9987d" />
        </linearGradient>
        <radialGradient id="eyeIris" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#e3c9ff" />
          <stop offset="35%" stopColor="#a55bf0" />
          <stop offset="70%" stopColor="#6d21a8" />
          <stop offset="100%" stopColor="#2d0f4a" />
        </radialGradient>
      </defs>

      <ellipse cx="50" cy="93" rx="20" ry="3.5" fill="black" opacity="0.25" />

      {/* Garras / dedos, estilo desenho a nanquim */}
      <path d="M66 44c4-13 7-24 6-33-0.5-4-4-6-7-4s-4 6-3 10c2 8 3 17 3 25" fill="url(#handGrad)" stroke="#241a12" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M78 50c6-11 11-21 12-30 0.5-4-2-7-5-6s-5 5-5 9c-1 8-2 16-4 24" fill="url(#handGrad)" stroke="#241a12" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M54 41c1-16 1-28-1-36-1-4-5-6-8-4s-4 6-2 10c3 9 5 19 6 29" fill="url(#handGrad)" stroke="#241a12" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M40 43c-2-15-4-26-8-33-2-4-6-5-9-2s-3 7-1 11c4 7 8 15 11 24" fill="url(#handGrad)" stroke="#241a12" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M27 50c-4-11-9-19-15-24-3-3-8-2-9 2s0 8 3 10c6 5 12 11 17 17" fill="url(#handGrad)" stroke="#241a12" strokeWidth="1.6" strokeLinejoin="round" />

      {/* Palma / dorso da mão */}
      <path
        d="M20 55c-4 5-6 11-6 18 0 15 15 25 36 25s36-10 36-25c0-8-3-14-8-19-9 6-16 8-28 8s-22-3-30-7Z"
        fill="url(#handGrad)"
        stroke="#241a12"
        strokeWidth="2"
      />

      {/* Rugas / textura da pele */}
      <path d="M28 60q22 9 44-1M24 68q26 10 52 0" stroke="#241a12" strokeWidth="0.8" fill="none" opacity="0.35" />

      {/* Olho na palma */}
      <path
        d="M28 70c8-10 15-14 22-14s14 4 22 14c-8 10-15 14-22 14s-14-4-22-14Z"
        fill="#0b0710"
        stroke="#a55bf0"
        strokeWidth="1.6"
      />
      <circle cx="50" cy="70" r="9.5" fill="url(#eyeIris)" />
      <path d="M50 61.5c-2.5 5-3.5 6-3.5 8.5s1 3.5 3.5 8.5c2.5-5 3.5-6 3.5-8.5s-1-3.5-3.5-8.5Z" fill="#0b0710" />
      <circle cx="47" cy="66.5" r="1.6" fill="#f3e6ff" opacity="0.9" />
    </svg>
  )
}
