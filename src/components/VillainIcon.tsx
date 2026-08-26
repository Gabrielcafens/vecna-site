export function VillainIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Capuz */}
      <path
        d="M50 10c-16 0-28 14-28 32 0 12 5 22 10 30l4 12c1 3 4 5 7 5h14c3 0 6-2 7-5l4-12c5-8 10-18 10-30 0-18-12-32-28-32Z"
        fill="#2a1544"
        stroke="#4f1c51"
        strokeWidth="3"
      />
      {/* Sombra do rosto */}
      <ellipse cx="50" cy="46" rx="15" ry="18" fill="#0d0812" />
      {/* Olhos brilhantes */}
      <circle cx="43" cy="44" r="2.6" fill="#7c3aed" />
      <circle cx="57" cy="44" r="2.6" fill="#7c3aed" />
      {/* Colar/símbolo */}
      <circle cx="50" cy="78" r="5" fill="#0d0812" stroke="#dca06d" strokeWidth="1.6" />
    </svg>
  )
}
