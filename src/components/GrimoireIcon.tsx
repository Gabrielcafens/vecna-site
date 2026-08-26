export function GrimoireIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* capa do livro */}
      <path d="M6 5.5C6 4.67 6.67 4 7.5 4H23c1.1 0 2 .9 2 2v20c0 1.1-.9 2-2 2H7.5c-.83 0-1.5-.67-1.5-1.5V5.5Z" fill="currentColor" />
      {/* lombada */}
      <rect x="6" y="4" width="2.4" height="24" rx="0.6" fill="black" fillOpacity="0.25" />
      {/* runas na capa */}
      <path d="M11 9.5h8M11 13h5" stroke="black" strokeOpacity="0.35" strokeWidth="0.9" strokeLinecap="round" />
      {/* boca/fenda que segura a gema */}
      <path d="M11 20.5c1.6 1.6 3.4 2.4 5 2.4s3.4-.8 5-2.4c-1.6 2.6-3.4 4-5 4s-3.4-1.4-5-4Z" fill="black" fillOpacity="0.4" />
      {/* gema */}
      <path d="M16 17.2l2.3 2.3-2.3 2.3-2.3-2.3 2.3-2.3Z" fill="var(--eye)" />
      <path d="M16 17.2l2.3 2.3-2.3 2.3-2.3-2.3 2.3-2.3Z" fill="var(--eye)" opacity="0.6">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
      </path>
    </svg>
  )
}
