import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import monstersData from '@/data/monsters.json'
import type { Monster } from '@/lib/types'
import { useLanguage, pick } from '@/lib/language'
import { Input } from '@/components/ui/input'

const monsters = monstersData as Monster[]
const ABILITY_ORDER: [string, string][] = [
  ['strength', 'FOR'], ['dexterity', 'DES'], ['constitution', 'CON'],
  ['intelligence', 'INT'], ['wisdom', 'SAB'], ['charisma', 'CAR'],
]

export default function MonstersPage() {
  const { lang } = useLanguage()
  const [params] = useSearchParams()
  const [search, setSearch] = useState(params.get('q') || '')
  const [type, setType] = useState('')

  useEffect(() => {
    const q = params.get('q')
    if (q) setSearch(q)
  }, [params])

  const types = useMemo(() => [...new Set(monsters.map((m) => m.type_pt))].sort(), [])

  const filtered = monsters.filter((m) => {
    if (type && m.type_pt !== type) return false
    if (search) {
      const name = pick(lang, m.name_pt, m.name_en).toLowerCase()
      if (!name.includes(search.toLowerCase())) return false
    }
    return true
  })

  const translatedCount = monsters.filter((m) => m.translated).length

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">Monstros</h1>
      <p className="text-sm text-[var(--muted)] mb-4">
        {translatedCount}/{monsters.length} traduzidos ({((translatedCount / monsters.length) * 100).toFixed(1)}%) — troque pro inglês (botão no topo) pra ver o conteúdo completo dos que ainda não foram traduzidos.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        <Input placeholder="Buscar monstro..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-56" />
        <select value={type} onChange={(e) => setType(e.target.value)} className="h-9 rounded-md border border-[var(--border)] bg-[var(--card)] px-2 text-sm">
          <option value="">Todos os tipos</option>
          {types.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filtered.map((m) => (
          <div key={m.key} className={`rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200 ${!m.translated ? 'opacity-70' : ''}`}>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold">{pick(lang, m.name_pt, m.name_en)}</h3>
              <span className="text-xs font-bold text-[var(--accent)]">ND {m.challenge_rating}</span>
            </div>
            <p className="text-[11px] italic text-[var(--muted)] mb-2">{m.size_pt} {m.type_pt}, {m.alignment_pt}</p>
            <div className="grid grid-cols-2 gap-1 text-[11px] text-[var(--muted)] mb-2 border-b border-[var(--border)] pb-2">
              <div><strong>CA:</strong> {m.armor_class}{m.armor_detail ? ` (${m.armor_detail})` : ''}</div>
              <div><strong>PV:</strong> {m.hit_points} ({m.hit_dice})</div>
              <div><strong>Percepção Passiva:</strong> {m.passive_perception}</div>
            </div>
            <div className="grid grid-cols-6 gap-1 text-center text-[10px] mb-2 border-b border-[var(--border)] pb-2">
              {ABILITY_ORDER.map(([key, label]) => (
                <div key={key}>
                  <div className="font-bold text-[var(--muted)]">{label}</div>
                  <div>{m.ability_scores[key]} ({m.modifiers[key] >= 0 ? '+' : ''}{m.modifiers[key]})</div>
                </div>
              ))}
            </div>
            {(['traits', 'actions', 'bonus_actions', 'reactions', 'legendary_actions'] as const).map((section) => {
              const entries = m[section]
              if (!entries || entries.length === 0) return null
              const titles: Record<string, string> = {
                traits: 'Características', actions: 'Ações', bonus_actions: 'Ações Bônus',
                reactions: 'Reações', legendary_actions: 'Ações Lendárias',
              }
              return (
                <div key={section} className="mb-2">
                  <h4 className="text-xs font-bold text-[var(--accent)] border-b border-[var(--border)]">{titles[section]}</h4>
                  {entries.map((e, idx) => (
                    <p key={idx} className="text-xs mt-1">
                      <strong>{pick(lang, e.name_pt, e.name_en)}.</strong> {pick(lang, e.desc_pt, e.desc_en)}
                    </p>
                  ))}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
