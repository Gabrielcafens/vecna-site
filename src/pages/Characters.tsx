import charactersData from '@/data/personagens.json'
import type { Character } from '@/lib/types'
import { Badge } from '@/components/ui/badge'

const characters = charactersData as Character[]

export default function CharactersPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Personagens</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {characters.map((c) => (
          <div key={c.name} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-[var(--accent)]">{c.name}</h3>
              <span className="text-xs font-bold">Nível {c.level}</span>
            </div>
            <p className="text-[11px] italic text-[var(--muted)] mb-2">{[c.race, c.class, c.background].filter(Boolean).join(' · ')}</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {c.tags.map((t) => <Badge key={t}>{t}</Badge>)}
            </div>
            <p className="text-sm whitespace-pre-line">{c.notes}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
