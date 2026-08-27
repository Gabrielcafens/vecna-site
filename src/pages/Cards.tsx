import { useT } from '@/lib/i18n'
import { BESTIARY } from '@/lib/bestiary'

export default function CardsPage() {
  const t = useT()
  const sessions = [...new Set(BESTIARY.map((m) => m.session))].sort((a, b) => b - a)

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-1 no-print">{t('cards.title')}</h1>
      <p className="text-sm text-[var(--muted)] mb-6 no-print">
        Cartas do bestiário, separadas por sessão. Use Ctrl+P pra imprimir.
      </p>

      <div className="flex gap-3 mb-4 no-print">
        <button onClick={() => window.print()} className="h-9 rounded-md bg-[var(--accent)] px-4 text-sm font-medium text-white hover:opacity-90 transition-opacity">
          {t('cards.print')}
        </button>
      </div>

      {sessions.map((session) => (
        <div key={session} className="mb-8">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)] pb-1 mb-3 no-print">
            Sessão {session}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-4">
            {BESTIARY.filter((m) => m.session === session).map((m) => (
              <div key={m.name} className="vecna-card relative print:break-inside-avoid">
                <header className="vecna-card-header">
                  <h3 className="vecna-card-name">{m.name}</h3>
                  <span className="vecna-card-level">ND {m.cr}</span>
                </header>
                <p className="vecna-card-subtitle">{m.subtitle}</p>
                <div className="vecna-card-stats">
                  <div><span>CA</span><strong>{m.ac}</strong></div>
                  <div><span>PV</span><strong>{m.hp}</strong></div>
                  <div><span>Desl.</span><strong>{m.speed}</strong></div>
                </div>
                {m.traits?.map((tr, idx) => (
                  <p key={idx} className="vecna-card-body"><strong>{tr.name}.</strong> {tr.desc}</p>
                ))}
                {m.actions.slice(0, 2).map((a, idx) => (
                  <p key={idx} className="vecna-card-body"><strong>{a.name}.</strong> {a.desc}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
