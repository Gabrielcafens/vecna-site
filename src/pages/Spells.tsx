import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import spellsData from '@/data/spells.json'
import type { Spell } from '@/lib/types'
import { useLanguage, pick } from '@/lib/language'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const spells = spellsData as Spell[]

export default function SpellsPage() {
  const { lang } = useLanguage()
  const [params] = useSearchParams()
  const [search, setSearch] = useState(params.get('q') || '')
  const [cls, setCls] = useState('')
  const [level, setLevel] = useState('')

  useEffect(() => {
    const q = params.get('q')
    if (q) setSearch(q)
  }, [params])

  const classes = useMemo(() => [...new Set(spells.flatMap((s) => s.classes_pt))].sort(), [])
  const levels = useMemo(() => [...new Set(spells.map((s) => s.level))].sort((a, b) => a - b), [])

  const filtered = spells.filter((s) => {
    if (cls && !s.classes_pt.includes(cls)) return false
    if (level !== '' && s.level !== Number(level)) return false
    if (search) {
      const name = pick(lang, s.name_pt, s.name_en).toLowerCase()
      if (!name.includes(search.toLowerCase())) return false
    }
    return true
  })

  const translatedCount = spells.filter((s) => s.translated).length

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">Magias</h1>
      <p className="text-sm text-[var(--muted)] mb-4">
        {translatedCount}/{spells.length} traduzidas ({((translatedCount / spells.length) * 100).toFixed(1)}%)
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        <Input placeholder="Buscar magia..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-56" />
        <select value={cls} onChange={(e) => setCls(e.target.value)} className="h-9 rounded-md border border-[var(--border)] bg-[var(--card)] px-2 text-sm">
          <option value="">Todas as classes</option>
          {classes.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={level} onChange={(e) => setLevel(e.target.value)} className="h-9 rounded-md border border-[var(--border)] bg-[var(--card)] px-2 text-sm">
          <option value="">Todos os níveis</option>
          {levels.map((l) => <option key={l} value={l}>{l === 0 ? 'Truque' : `Nível ${l}`}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((s) => (
          <div key={s.key} className={`rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200 ${!s.translated ? 'opacity-70' : ''}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">{pick(lang, s.name_pt, s.name_en)}</h3>
              <Badge>{s.level === 0 ? 'Truque' : `Nv ${s.level}`}</Badge>
            </div>
            <div className="grid grid-cols-2 gap-1 text-[11px] text-[var(--muted)] mb-2 border-b border-[var(--border)] pb-2">
              <div><strong>Alcance:</strong> {s.range_text}</div>
              <div><strong>Componentes:</strong> {s.components}</div>
              <div><strong>Duração:</strong> {s.concentration ? 'Conc. ' : ''}{s.duration_pt}</div>
              <div><strong>Conjuração:</strong> {s.ritual ? 'R ' : ''}{s.casting_time_pt}</div>
            </div>
            <p className="text-sm whitespace-pre-line mb-2">{pick(lang, s.desc_pt, s.desc_en)}</p>
            {s.higher_level_pt && <p className="text-xs text-[var(--muted)] italic">{s.higher_level_pt}</p>}
            <div className="flex justify-between text-[11px] italic text-[var(--muted)] mt-2 pt-2 border-t border-[var(--border)]">
              <span>{s.school_pt}</span>
              <span>{s.classes_pt.join(', ')}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
