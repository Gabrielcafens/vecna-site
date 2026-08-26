import { Link } from 'react-router-dom'
import type { Character } from '@/lib/types'
import { useData } from '@/lib/useData'
import { useT } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge'
import { CardGridSkeleton } from '@/components/ui/skeleton'
import { User, Maximize2, ArrowRight } from 'lucide-react'

export default function CharactersPage() {
  const t = useT()
  const { data: characters, loading } = useData<Character[]>('data/personagens.json')

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">{t('characters.title')}</h1>
      {loading ? (
        <CardGridSkeleton count={3} className="md:grid-cols-3" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {characters!.map((c) => (
            <Link
              key={c.name}
              to={`/personagens/${encodeURIComponent(c.name)}`}
              className="group relative flex flex-col rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200 overflow-hidden"
            >
              <Maximize2 className="absolute top-3 right-3 h-3.5 w-3.5 text-[var(--muted)] opacity-50 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all" />

              <div className="flex items-center gap-3 p-4 pb-3 border-b border-[var(--border)] bg-[var(--accent)]/5">
                {c.image ? (
                  <img src={`${import.meta.env.BASE_URL}${c.image}`} alt={c.name} className="h-14 w-14 rounded-full object-cover object-top border-2 border-[var(--accent)]/60" />
                ) : (
                  <div className="h-14 w-14 rounded-full bg-[var(--sidebar)] border-2 border-[var(--border)] flex items-center justify-center">
                    <User className="h-7 w-7 text-[var(--muted)]" />
                  </div>
                )}
                <div>
                  <h3 className="font-display font-bold text-[var(--accent)] leading-tight">{c.name}</h3>
                  <span className="text-[11px] text-[var(--muted)]">Nível {c.level}</span>
                </div>
              </div>

              <div className="p-4 pt-3 flex-1 flex flex-col">
                <p className="text-[11px] italic text-[var(--muted)] mb-3">{[c.race, c.class, c.background].filter(Boolean).join(' · ')}</p>

                {c.feats && c.feats.length > 0 && (
                  <div className="mb-3">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted)] mb-1">Talentos</div>
                    <div className="flex flex-wrap gap-1">
                      {c.feats.map((f) => <Badge key={f}>{f}</Badge>)}
                    </div>
                  </div>
                )}

                {c.tags.length > 0 && (
                  <div className="mb-1">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-[var(--muted)] mb-1">Baralho das Muitas Coisas</div>
                    <div className="flex flex-wrap gap-1">
                      {c.tags.slice(0, 3).map((tag) => <Badge key={tag}>{tag}</Badge>)}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-3 flex items-center gap-1 text-[11px] font-medium text-[var(--accent)] opacity-70 group-hover:opacity-100 transition-opacity">
                  Ver ficha completa <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
