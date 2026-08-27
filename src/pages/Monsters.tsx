import { useT } from '@/lib/i18n'
import { BESTIARY, type StatBlock } from '@/lib/bestiary'

function MonsterCard({ m }: { m: StatBlock }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
      <div className="flex justify-between items-start mb-1 gap-3">
        <div className="flex items-center gap-3">
          {m.image && (
            <img src={`${import.meta.env.BASE_URL}${m.image}`} alt={m.name} className="h-12 w-12 rounded-full object-cover object-top border-2 border-[var(--accent)]/60 shrink-0" />
          )}
          <div>
            <h3 className="font-semibold font-display">{m.name}</h3>
            <p className="text-[11px] italic text-[var(--muted)]">{m.subtitle}</p>
          </div>
        </div>
        <span className="text-xs font-bold text-[var(--accent)] shrink-0 ml-2">ND {m.cr}</span>
      </div>
      <div className="mt-3">
        <div className="grid grid-cols-3 gap-1 text-[11px] text-[var(--muted)] mb-2 border-b border-[var(--border)] pb-2">
          <div><strong>CA:</strong> {m.ac}</div>
          <div><strong>PV:</strong> {m.hp}</div>
          <div><strong>Desl.:</strong> {m.speed}</div>
        </div>
        <div className="grid grid-cols-6 gap-1 text-center text-[10px] mb-2 border-b border-[var(--border)] pb-2">
          {m.stats.map((s) => (
            <div key={s.label}>
              <div className="font-bold text-[var(--muted)]">{s.label}</div>
              <div>{s.score} ({s.mod})</div>
            </div>
          ))}
        </div>
        {m.traits && m.traits.length > 0 && (
          <div className="mb-2">
            <h4 className="text-xs font-bold text-[var(--accent)] border-b border-[var(--border)]">Características</h4>
            {m.traits.map((tr, idx) => (
              <p key={idx} className="text-xs mt-1"><strong>{tr.name}.</strong> {tr.desc}</p>
            ))}
          </div>
        )}
        <div>
          <h4 className="text-xs font-bold text-[var(--accent)] border-b border-[var(--border)]">Ações</h4>
          {m.actions.map((a, idx) => (
            <p key={idx} className="text-xs mt-1"><strong>{a.name}.</strong> {a.desc}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function MonstersPage() {
  const t = useT()

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-1">{t('monsters.title')}</h1>
      <p className="text-sm text-[var(--muted)] mb-6 max-w-3xl">{t('monsters.subtitle')}</p>

      <details open className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🌟 Sessão 2 — O Ninho do Olho Eldritch
        </summary>
        {BESTIARY.some((m) => m.session === 2) ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {BESTIARY.filter((m) => m.session === 2).map((m) => <MonsterCard key={m.name} m={m} />)}
          </div>
        ) : (
          <div className="mt-4 text-sm text-[var(--muted)] italic">
            Ainda não jogada — o bestiário desta sessão entra aqui depois.
          </div>
        )}
      </details>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          Sessão 1 — O Necrotério de Thay
        </summary>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {BESTIARY.filter((m) => m.session === 1).map((m) => <MonsterCard key={m.name} m={m} />)}
        </div>
      </details>
    </div>
  )
}
