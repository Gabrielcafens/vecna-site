const sessions: { label: string; driveUrl: string | null }[] = [
  { label: 'Sessão 1 — O Necrotério de Thay', driveUrl: null },
  { label: 'Sessão 2 — Ninho do Olho', driveUrl: null },
]

export default function PhotosPage() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Fotos da Campanha</h1>
      <p className="text-sm text-[var(--muted)] mb-6">
        As fotos ficam no Drive, não neste site — cada sessão tem seu próprio link abaixo.
      </p>
      <div className="space-y-3">
        {sessions.map((s) => (
          <div key={s.label} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 flex items-center justify-between">
            <span className="font-medium">{s.label}</span>
            {s.driveUrl ? (
              <a href={s.driveUrl} target="_blank" rel="noreferrer" className="text-sm text-[var(--accent)] underline">
                Abrir no Drive
              </a>
            ) : (
              <span className="text-xs text-[var(--muted)] italic">Link ainda não cadastrado</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
