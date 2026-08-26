import { useT } from '@/lib/i18n'
import { useLanguage } from '@/lib/language'

const sessions: { label: string; driveUrl: string | null }[] = [
  { label: 'Sessão 1 — O Necrotério de Thay', driveUrl: null },
  { label: 'Sessão 2 — Ninho do Olho', driveUrl: null },
]

export default function PhotosPage() {
  const t = useT()
  const { lang } = useLanguage()
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{t('photos.title')}</h1>
      <p className="text-sm text-[var(--muted)] mb-6">{t('photos.subtitle')}</p>
      <div className="space-y-3">
        {sessions.map((s) => (
          <div key={s.label} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 flex items-center justify-between">
            <span className="font-medium">{s.label}</span>
            {s.driveUrl ? (
              <a href={s.driveUrl} target="_blank" rel="noreferrer" className="text-sm text-[var(--accent)] underline">
                {t('photos.openDrive')}
              </a>
            ) : (
              <span className="text-xs text-[var(--muted)] italic">{t('photos.noLink')}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
