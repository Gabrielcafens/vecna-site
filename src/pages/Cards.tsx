import { useState } from 'react'
import type { Spell, ItemEntry, Monster } from '@/lib/types'
import { useLanguage, pick } from '@/lib/language'
import { useT } from '@/lib/i18n'
import { useData } from '@/lib/useData'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/skeleton'

type CardType = 'spells' | 'items' | 'monsters'

export default function CardsPage() {
  const { lang } = useLanguage()
  const t = useT()
  const [type, setType] = useState<CardType>('spells')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const { data: spells } = useData<Spell[]>('data/spells.json')
  const { data: items } = useData<ItemEntry[]>('data/items.json')
  const { data: monsters } = useData<Monster[]>('data/monsters.json')

  const sourceMap = { spells, items, monsters }
  const source = sourceMap[type]

  if (!source) return <Spinner />

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
    <div className="p-6 max-w-[1920px] mx-auto">
      <h1 className="text-2xl font-bold mb-1 no-print">{t('cards.title')}</h1>
      <p className="text-sm text-[var(--muted)] mb-4 no-print">{t('cards.subtitle')}</p>

      <div className="flex flex-wrap gap-3 mb-4 no-print">
        <select value={type} onChange={(e) => { setType(e.target.value as CardType); setSelected(new Set()) }} className="h-9 rounded-md border border-[var(--border)] bg-[var(--card)] px-2 text-sm">
          <option value="spells">{t('nav.spells')}</option>
          <option value="items">{t('nav.items')}</option>
          <option value="monsters">{t('nav.monsters')}</option>
        </select>
        <Input placeholder={t('cards.search')} value={search} onChange={(e) => setSearch(e.target.value)} className="w-56" />
        <Button variant="outline" size="sm" onClick={() => setSelected(new Set(filtered.map((x) => x.key)))}>{t('cards.selectAll')}</Button>
        <Button variant="outline" size="sm" onClick={() => setSelected(new Set())}>{t('cards.clear')}</Button>
        <Button size="sm" onClick={() => window.print()}>{t('cards.print')} ({selected.size})</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-4">
        {filtered.map((x) => {
          const isSelected = selected.has(x.key)
          return (
            <div
              key={x.key}
              className={`vecna-card relative print:break-inside-avoid ${!isSelected ? 'print:hidden' : ''} ${isSelected ? 'ring-2 ring-[var(--accent)]' : ''}`}
            >
              <label className="absolute top-2.5 left-3 no-print z-10">
                <input type="checkbox" checked={isSelected} onChange={() => toggle(x.key)} className="h-4 w-4 accent-[var(--accent)]" />
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
        <header className="vecna-card-header">
          <h3 className="vecna-card-name">{pick(lang, s.name_pt, s.name_en)}</h3>
          <span className="vecna-card-level">{s.level}</span>
        </header>
        <div className="vecna-card-stats">
          <div><span>{lang === 'en' ? 'Range' : 'Alcance'}</span><strong>{s.range_text}</strong></div>
          <div><span>{lang === 'en' ? 'Components' : 'Componentes'}</span><strong>{s.components}</strong></div>
          <div><span>{lang === 'en' ? 'Duration' : 'Duração'}</span><strong>{s.concentration ? 'Conc. ' : ''}{s.duration_pt}</strong></div>
          <div><span>{lang === 'en' ? 'Casting' : 'Conjuração'}</span><strong>{s.ritual ? 'R ' : ''}{s.casting_time_pt}</strong></div>
        </div>
        <p className="vecna-card-body">{pick(lang, s.desc_pt, s.desc_en)}</p>
        <footer className="vecna-card-footer">
          <span>{s.school_pt}</span><span>{s.classes_pt.join(', ')}</span>
        </footer>
      </>
    )
  }
  if (type === 'items') {
    const i = item as ItemEntry
    return (
      <>
        <header className="vecna-card-header">
          <h3 className="vecna-card-name">{pick(lang, i.name_pt, i.name_en)}</h3>
          {i.cost && <span className="vecna-card-cost">{i.cost} PO</span>}
        </header>
        <div className="vecna-card-stats">
          <div><span>{lang === 'en' ? 'Category' : 'Categoria'}</span><strong>{i.category_pt}</strong></div>
          {i.weapon && <div><span>{lang === 'en' ? 'Damage' : 'Dano'}</span><strong>{i.weapon.damage_dice} {i.weapon.damage_type_pt}</strong></div>}
          {i.armor && <div><span>AC</span><strong>{i.armor.ac_display}</strong></div>}
        </div>
        <p className="vecna-card-body">{pick(lang, i.desc_pt, i.desc_en)}</p>
      </>
    )
  }
  const m = item as Monster
  return (
    <>
      <header className="vecna-card-header">
        <h3 className="vecna-card-name">{pick(lang, m.name_pt, m.name_en)}</h3>
        <span className="vecna-card-level">{m.challenge_rating}</span>
      </header>
      <p className="vecna-card-subtitle">{m.size_pt} {m.type_pt}</p>
      <div className="vecna-card-stats">
        <div><span>AC</span><strong>{m.armor_class}</strong></div>
        <div><span>HP</span><strong>{m.hit_points}</strong></div>
      </div>
      {m.actions.slice(0, 3).map((a, idx) => (
        <p key={idx} className="vecna-card-body"><strong>{pick(lang, a.name_pt, a.name_en)}.</strong> {pick(lang, a.desc_pt, a.desc_en)}</p>
      ))}
    </>
  )
}
