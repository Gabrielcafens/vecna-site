import type { Character } from '@/lib/types'
import { useData } from '@/lib/useData'
import { Badge } from '@/components/ui/badge'
import { CardGridSkeleton } from '@/components/ui/skeleton'
import { User, Star, Clock } from 'lucide-react'

export default function SheetsPage() {
  const { data: characters, loading } = useData<Character[]>('data/personagens.json')

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-1">Fichas</h1>
      <p className="text-sm text-[var(--muted)] mb-6 max-w-2xl">
        Ficha de combate rápida de cada personagem — atributos, CA, PV e talentos. Pra lore e backstory, veja a aba Personagens.
      </p>

      {loading ? (
        <CardGridSkeleton count={4} className="md:grid-cols-2" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {characters!.map((c) => (
            <div key={c.name} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[var(--border)]">
                {c.image ? (
                  <img src={`${import.meta.env.BASE_URL}${c.image}`} alt={c.name} className="h-12 w-12 rounded-full object-cover object-top border border-[var(--accent)]/60" />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-[var(--sidebar)] border border-[var(--border)] flex items-center justify-center">
                    <User className="h-6 w-6 text-[var(--muted)]" />
                  </div>
                )}
                <div>
                  <h3 className="font-display font-bold text-[var(--accent)] leading-tight">{c.name}</h3>
                  <span className="text-xs text-[var(--muted)]">{[c.race, c.class].filter(Boolean).join(' · ')} — Nível {c.level}</span>
                </div>
              </div>

              {c.feats && c.feats.length > 0 && (
                <div className="flex items-start gap-1.5 flex-wrap mb-3">
                  <Star className="h-3.5 w-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                  {c.feats.map((f) => <Badge key={f}>{f}</Badge>)}
                </div>
              )}

              {c.sheet ? (
                <p className="text-sm whitespace-pre-line leading-relaxed text-[var(--muted)]">{c.sheet}</p>
              ) : (
                <div className="flex items-center gap-2 text-sm text-[var(--muted)] italic">
                  <Clock className="h-4 w-4 shrink-0" />
                  Aguardando foto da ficha física pra preencher aqui.
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
