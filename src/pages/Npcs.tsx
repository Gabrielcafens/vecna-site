import { Link } from 'react-router-dom'
import type { Npc } from '@/lib/types'
import { useData } from '@/lib/useData'
import { useT } from '@/lib/i18n'
import { CardGridSkeleton } from '@/components/ui/skeleton'
import { User } from 'lucide-react'

export default function NpcsPage() {
  const t = useT()
  const { data: npcs, loading } = useData<Npc[]>('data/npcs.json')

  if (loading) return <div className="p-6"><CardGridSkeleton count={4} className="md:grid-cols-2" /></div>

  const session1 = npcs!.filter((n) => (n.session || 1) === 1)
  const session2 = npcs!.filter((n) => n.session === 2)

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">{t('npcs.title')}</h1>

      <details open className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🌟 Sessão 2 — O Ninho do Olho Eldritch
        </summary>
        {session2.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {session2.map((n) => (
              <Link
                key={n.name}
                to={`/npcs/${encodeURIComponent(n.name)}`}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2">
                  {n.image ? (
                    <img src={`${import.meta.env.BASE_URL}${n.image}`} alt={n.name} className="h-12 w-12 rounded-full object-cover object-top border border-[var(--border)]" />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-[var(--sidebar)] border border-[var(--border)] flex items-center justify-center shrink-0">
                      <User className="h-6 w-6 text-[var(--muted)]" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-[var(--accent)]">{n.name}</h3>
                    <p className="text-[11px] italic text-[var(--muted)]">{n.role}</p>
                  </div>
                </div>
                <p className="text-sm line-clamp-3">{n.notes}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-4 text-sm text-[var(--muted)] italic">
            Ainda não jogada — os NPCs desta sessão entram aqui depois.
          </div>
        )}
      </details>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          Sessão 1 — O Necrotério de Thay
        </summary>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {session1.map((n) => (
            <Link
              key={n.name}
              to={`/npcs/${encodeURIComponent(n.name)}`}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                {n.image ? (
                  <img src={`${import.meta.env.BASE_URL}${n.image}`} alt={n.name} className="h-12 w-12 rounded-full object-cover object-top border border-[var(--border)]" />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-[var(--sidebar)] border border-[var(--border)] flex items-center justify-center shrink-0">
                    <User className="h-6 w-6 text-[var(--muted)]" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-[var(--accent)]">{n.name}</h3>
                  <p className="text-[11px] italic text-[var(--muted)]">{n.role}</p>
                </div>
              </div>
              <p className="text-sm line-clamp-3">{n.notes}</p>
            </Link>
          ))}
        </div>
      </details>
    </div>
  )
}
