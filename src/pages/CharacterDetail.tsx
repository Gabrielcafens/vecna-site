import { useParams, Link } from 'react-router-dom'
import type { Character } from '@/lib/types'
import { useData } from '@/lib/useData'
import { useT } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge'
import { Spinner } from '@/components/ui/skeleton'
import { ArrowLeft, User, Star } from 'lucide-react'

export default function CharacterDetailPage() {
  const { name } = useParams()
  const t = useT()
  const { data: characters, loading } = useData<Character[]>('data/personagens.json')

  if (loading) return <Spinner />
  const c = characters!.find((x) => x.name === decodeURIComponent(name || ''))
  if (!c) return <div className="p-6">Not found.</div>

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <Link to="/personagens" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-4">
        <ArrowLeft className="h-4 w-4" /> {t('characters.title')}
      </Link>
      <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
        <div className="flex flex-col sm:flex-row items-start gap-5 mb-4">
          {c.image ? (
            <img
              src={`${import.meta.env.BASE_URL}${c.image}`}
              alt={c.name}
              className="w-40 sm:w-48 rounded-lg object-cover border-2 border-[var(--accent)] shadow-lg"
            />
          ) : (
            <div className="h-40 w-40 rounded-lg bg-[var(--sidebar)] border-2 border-[var(--border)] flex items-center justify-center">
              <User className="h-14 w-14 text-[var(--muted)]" />
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-[var(--accent)]">{c.name}</h1>
            <p className="text-sm text-[var(--muted)] mb-3">{[c.race, c.class, c.background].filter(Boolean).join(' · ')} — Nível {c.level}</p>
            {c.feats && c.feats.length > 0 && (
              <div className="flex items-center gap-1 flex-wrap mb-2">
                <Star className="h-3.5 w-3.5 text-[var(--accent)] shrink-0" />
                {c.feats.map((f) => <Badge key={f}>{f}</Badge>)}
              </div>
            )}
            <div className="flex flex-wrap gap-1 mb-3">
              {c.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </div>
            <p className="text-sm whitespace-pre-line leading-relaxed">{c.notes}</p>
          </div>
        </div>
        {c.sheet && (
          <div className="mt-4 rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/40 p-4">
            <h2 className="font-display text-sm font-bold text-[var(--accent)] mb-2">Ficha resumida</h2>
            <p className="text-sm whitespace-pre-line leading-relaxed text-[var(--muted)]">{c.sheet}</p>
          </div>
        )}
      </div>
    </div>
  )
}
