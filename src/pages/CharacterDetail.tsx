import { useParams, Link } from 'react-router-dom'
import type { Character } from '@/lib/types'
import { useData } from '@/lib/useData'
import { useT } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge'
import { Spinner } from '@/components/ui/skeleton'
import { ArrowLeft, User } from 'lucide-react'

export default function CharacterDetailPage() {
  const { name } = useParams()
  const t = useT()
  const { data: characters, loading } = useData<Character[]>('data/personagens.json')

  if (loading) return <Spinner />
  const c = characters!.find((x) => x.name === decodeURIComponent(name || ''))
  if (!c) return <div className="p-6">Not found.</div>

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Link to="/personagens" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-4">
        <ArrowLeft className="h-4 w-4" /> {t('characters.title')}
      </Link>
      <div className="flex items-center gap-4 mb-4">
        {c.image ? (
          <img src={c.image} alt={c.name} className="h-20 w-20 rounded-full object-cover border-2 border-[var(--accent)]" />
        ) : (
          <div className="h-20 w-20 rounded-full bg-[var(--sidebar)] border-2 border-[var(--border)] flex items-center justify-center">
            <User className="h-9 w-9 text-[var(--muted)]" />
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold text-[var(--accent)]">{c.name}</h1>
          <p className="text-sm text-[var(--muted)]">{[c.race, c.class, c.background].filter(Boolean).join(' · ')} — Nível {c.level}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 mb-4">
        {c.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
      </div>
      <p className="text-sm whitespace-pre-line leading-relaxed">{c.notes}</p>
    </div>
  )
}
