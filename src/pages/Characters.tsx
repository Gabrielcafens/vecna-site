import { Link } from 'react-router-dom'
import type { Character } from '@/lib/types'
import { useData } from '@/lib/useData'
import { useT } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge'
import { CardGridSkeleton } from '@/components/ui/skeleton'
import { User } from 'lucide-react'

export default function CharactersPage() {
  const t = useT()
  const { data: characters, loading } = useData<Character[]>('data/personagens.json')

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{t('characters.title')}</h1>
      {loading ? (
        <CardGridSkeleton count={3} className="md:grid-cols-3" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {characters!.map((c) => (
            <Link
              key={c.name}
              to={`/personagens/${encodeURIComponent(c.name)}`}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                {c.image ? (
                  <img src={`${import.meta.env.BASE_URL}${c.image}`} alt={c.name} className="h-12 w-12 rounded-full object-cover border border-[var(--border)]" />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-[var(--sidebar)] border border-[var(--border)] flex items-center justify-center">
                    <User className="h-6 w-6 text-[var(--muted)]" />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-[var(--accent)]">{c.name}</h3>
                  <span className="text-xs">Nível {c.level}</span>
                </div>
              </div>
              <p className="text-[11px] italic text-[var(--muted)] mb-2">{[c.race, c.class, c.background].filter(Boolean).join(' · ')}</p>
              <div className="flex flex-wrap gap-1">
                {c.tags.slice(0, 3).map((tag) => <Badge key={tag}>{tag}</Badge>)}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
