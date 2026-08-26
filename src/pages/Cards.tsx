import { useState } from 'react'
import spellsData from '@/data/spells.json'
import itemsData from '@/data/items.json'
import monstersData from '@/data/monsters.json'
import type { Spell, ItemEntry, Monster } from '@/lib/types'
import { useLanguage, pick } from '@/lib/language'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const spells = spellsData as Spell[]
const items = itemsData as ItemEntry[]
const monsters = monstersData as Monster[]

type CardType = 'spells' | 'items' | 'monsters'

export default function CardsPage() {
  const { lang } = useLanguage()
  const [type, setType] = useState<CardType>('spells')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const source = type === 'spells' ? spells : type === 'items' ? items : monsters
  const filtered = source.filter((x) => {
    const name = pick(lang, x.name_pt, x.name_en).toLowerCase()
    return !search || name.includes(search.toLowerCase()) || x.name_en.toLowerCase().includes(search.toLowerCase())
  })

  function toggle(key: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-1 no-print">Cartas para Imprimir</h1>
      <p className="text-sm text-[var(--muted)] mb-4 no-print">
        Escolha o tipo, selecione as cartas e use o botão de imprimir do navegador (Ctrl+P). Só as selecionadas saem no papel.
      </p>

      <div className="flex flex-wrap gap-3 mb-4 no-print">
        <select value={type} onChange={(e) => { setType(e.target.value as CardType); setSelected(new Set()) }} className="h-9 rounded-md border border-[var(--border)] bg-[var(--card)] px-2 text-sm">
          <option value="spells">Magias</option>
          <option value="items">Itens</option>
          <option value="monsters">Monstros</option>
        </select>
        <Input placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-56" />
        <Button variant="outline" size="sm" onClick={() => setSelected(new Set(filtered.map((x) => x.key)))}>Selecionar todas (filtradas)</Button>
        <Button variant="outline" size="sm" onClick={() => setSelected(new Set())}>Limpar seleção</Button>
        <Button size="sm" onClick={() => window.print()}>Imprimir ({selected.size})</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-4">
        {filtered.map((x) => {
          const isSelected = selected.has(x.key)
          return (
            <div
              key={x.key}
              className={`relative rounded-lg border-2 bg-white text-black p-4 print:break-inside-avoid ${isSelected ? 'border-[var(--accent)]' : 'border-[var(--border)]'} ${!isSelected ? 'print:hidden' : ''}`}
            >
              <label className="absolute top-2 left-2 no-print">
                <input type="checkbox" checked={isSelected} onChange={() => toggle(x.key)} />
              </label>
              <CardContent type={type} item={x} lang={lang} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function CardContent({ type, item, lang }: { type: CardType; item: Spell | ItemEntry | Monster; lang: 'pt' | 'en' }) {
  if (type === 'spells') {
    const s = item as Spell
    return (
      <>
        <div className="flex justify-between items-center border-b-2 border-black pb-1 mb-2 ml-4">
          <h3 className="font-bold">{pick(lang, s.name_pt, s.name_en)}</h3>
          <span className="rounded-full border-2 border-black w-6 h-6 flex items-center justify-center text-xs font-bold">{s.level}</span>
        </div>
        <div className="grid grid-cols-2 gap-1 text-[10px] mb-2 border-b pb-2">
          <div><strong>Alcance:</strong> {s.range_text}</div>
          <div><strong>Comp.:</strong> {s.components}</div>
          <div><strong>Duração:</strong> {s.concentration ? 'Conc. ' : ''}{s.duration_pt}</div>
          <div><strong>Conjur.:</strong> {s.ritual ? 'R ' : ''}{s.casting_time_pt}</div>
        </div>
        <p className="text-xs whitespace-pre-line">{pick(lang, s.desc_pt, s.desc_en)}</p>
        <div className="flex justify-between text-[10px] italic mt-2 pt-1 border-t">
          <span>{s.school_pt}</span><span>{s.classes_pt.join(', ')}</span>
        </div>
      </>
    )
  }
  if (type === 'items') {
    const i = item as ItemEntry
    return (
      <>
        <div className="flex justify-between items-center border-b-2 border-black pb-1 mb-2 ml-4">
          <h3 className="font-bold">{pick(lang, i.name_pt, i.name_en)}</h3>
          {i.cost && <span className="text-xs font-bold">{i.cost} PO</span>}
        </div>
        <div className="text-[10px] mb-2 border-b pb-2">
          <div><strong>Categoria:</strong> {i.category_pt}</div>
          {i.weapon && <div><strong>Dano:</strong> {i.weapon.damage_dice} {i.weapon.damage_type_pt}</div>}
          {i.armor && <div><strong>CA:</strong> {i.armor.ac_display}</div>}
        </div>
        <p className="text-xs whitespace-pre-line">{pick(lang, i.desc_pt, i.desc_en)}</p>
      </>
    )
  }
  const m = item as Monster
  return (
    <>
      <div className="flex justify-between items-center border-b-2 border-black pb-1 mb-2 ml-4">
        <h3 className="font-bold">{pick(lang, m.name_pt, m.name_en)}</h3>
        <span className="text-xs font-bold">ND {m.challenge_rating}</span>
      </div>
      <p className="text-[10px] italic mb-1">{m.size_pt} {m.type_pt}</p>
      <div className="text-[10px] mb-2 border-b pb-2">
        <div><strong>CA:</strong> {m.armor_class} · <strong>PV:</strong> {m.hit_points}</div>
      </div>
      {m.actions.slice(0, 3).map((a, idx) => (
        <p key={idx} className="text-[10px] mb-1"><strong>{pick(lang, a.name_pt, a.name_en)}.</strong> {pick(lang, a.desc_pt, a.desc_en)}</p>
      ))}
    </>
  )
}
