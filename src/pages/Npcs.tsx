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

  const sessions = [...new Set(npcs!.map((n) => (n as Npc & { session?: number }).session || 1))].sort()

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">{t('npcs.title')}</h1>
      {sessions.map((session) => (
        <div key={session} className="mb-8">
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--muted)] border-b border-[var(--border)] pb-1 mb-3">
            Sessão {session}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {npcs!.filter((n) => ((n as Npc & { session?: number }).session || 1) === session).map((n) => (
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
        </div>
      ))}
    </div>
  )
}
