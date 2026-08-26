import { useParams, Link } from 'react-router-dom'
import type { Npc } from '@/lib/types'
import { useData } from '@/lib/useData'
import { useT } from '@/lib/i18n'
import { Spinner } from '@/components/ui/skeleton'
import { ArrowLeft, User } from 'lucide-react'

export default function NpcDetailPage() {
  const { name } = useParams()
  const t = useT()
  const { data: npcs, loading } = useData<Npc[]>('data/npcs.json')

  if (loading) return <Spinner />
  const n = npcs!.find((x) => x.name === decodeURIComponent(name || ''))
  if (!n) return <div className="p-6">Not found.</div>

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <Link to="/npcs" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-4">
        <ArrowLeft className="h-4 w-4" /> {t('npcs.title')}
      </Link>
      <div className="flex flex-col sm:flex-row items-start gap-5 mb-4">
        {n.image ? (
          <img
            src={`${import.meta.env.BASE_URL}${n.image}`}
            alt={n.name}
            className="w-40 sm:w-48 rounded-lg object-cover object-top border-2 border-[var(--accent)] shadow-lg"
          />
        ) : (
          <div className="h-40 w-40 rounded-lg bg-[var(--sidebar)] border-2 border-[var(--border)] flex items-center justify-center shrink-0">
            <User className="h-14 w-14 text-[var(--muted)]" />
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-[var(--accent)]">{n.name}</h1>
          <p className="text-sm text-[var(--muted)] mb-3">{n.role}</p>
          <p className="text-sm whitespace-pre-line leading-relaxed">{n.notes}</p>
        </div>
      </div>
    </div>
  )
}
