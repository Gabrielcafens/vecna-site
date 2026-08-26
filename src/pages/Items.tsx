import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { ItemEntry } from '@/lib/types'
import { useLanguage, pick } from '@/lib/language'
import { useT } from '@/lib/i18n'
import { useData } from '@/lib/useData'
import { Input } from '@/components/ui/input'
import { CardGridSkeleton } from '@/components/ui/skeleton'

export default function ItemsPage() {
  const { lang } = useLanguage()
  const t = useT()
  const { data: items, loading } = useData<ItemEntry[]>('data/items.json')
  const [params] = useSearchParams()
  const [search, setSearch] = useState(params.get('q') || '')
  const [cat, setCat] = useState('')

  useEffect(() => {
    const q = params.get('q')
    if (q) setSearch(q)
  }, [params])

  const categories = useMemo(() => [...new Set((items || []).map((i) => i.category_pt))].sort(), [items])

  const filtered = (items || []).filter((i) => {
    if (cat && i.category_pt !== cat) return false
    if (search) {
      const name = pick(lang, i.name_pt, i.name_en).toLowerCase()
      if (!name.includes(search.toLowerCase())) return false
    }
    return true
  })

  const translatedCount = (items || []).filter((i) => i.translated).length

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">{t('items.title')}</h1>
      <p className="text-sm text-[var(--muted)] mb-4">
        {loading ? t('loading') : `${translatedCount}/${items!.length} ${t('translated')} (${((translatedCount / items!.length) * 100).toFixed(1)}%)`}
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        <Input placeholder={t('items.search')} value={search} onChange={(e) => setSearch(e.target.value)} className="w-56" />
        <select value={cat} onChange={(e) => setCat(e.target.value)} className="h-9 rounded-md border border-[var(--border)] bg-[var(--card)] px-2 text-sm">
          <option value="">{t('items.allCategories')}</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {loading ? (
        <CardGridSkeleton count={9} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((i) => (
            <div key={i.key} className={`rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200 ${!i.translated ? 'opacity-70' : ''}`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{pick(lang, i.name_pt, i.name_en)}</h3>
                {i.cost && <span className="text-xs font-bold text-[var(--accent)]">{i.cost} {lang === 'en' ? 'gp' : 'PO'}</span>}
              </div>
              <div className="grid grid-cols-2 gap-1 text-[11px] text-[var(--muted)] mb-2 border-b border-[var(--border)] pb-2">
                <div><strong>{lang === 'en' ? 'Category' : 'Categoria'}:</strong> {i.category_pt}</div>
                <div><strong>{lang === 'en' ? 'Weight' : 'Peso'}:</strong> {i.weight ? `${i.weight} lb` : '—'}</div>
                {i.weapon && <div><strong>{lang === 'en' ? 'Damage' : 'Dano'}:</strong> {i.weapon.damage_dice} {i.weapon.damage_type_pt}</div>}
                {i.weapon && <div><strong>{lang === 'en' ? 'Properties' : 'Propr.'}:</strong> {i.weapon.properties.join(', ') || '—'}</div>}
                {i.armor && <div><strong>AC:</strong> {i.armor.ac_display}</div>}
              </div>
              <p className="text-sm whitespace-pre-line">{pick(lang, i.desc_pt, i.desc_en)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
