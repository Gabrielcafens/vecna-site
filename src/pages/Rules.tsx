import { useState } from 'react'
import { useLanguage, pick } from '@/lib/language'
import { useData } from '@/lib/useData'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/skeleton'

interface Rule {
  key: string
  name_en: string
  name_pt: string | null
  translated: boolean
  desc_en: string
  desc_pt: string | null
}

export default function RulesPage() {
  const { lang } = useLanguage()
  const { data: rules, loading } = useData<Rule[]>('data/rules.json')
  const [search, setSearch] = useState('')

  if (loading) return <Spinner />

  const filtered = rules!.filter((r) => pick(lang, r.name_pt, r.name_en).toLowerCase().includes(search.toLowerCase()))
  const translatedCount = rules!.filter((r) => r.translated).length

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">{lang === 'en' ? 'Rules' : 'Regras'}</h1>
      <p className="text-sm text-[var(--muted)] mb-4">
        {translatedCount}/{rules!.length} {lang === 'en' ? 'translated' : 'traduzidas'} ({((translatedCount / rules!.length) * 100).toFixed(1)}%)
      </p>
      <Input placeholder={lang === 'en' ? 'Search rule...' : 'Buscar regra...'} value={search} onChange={(e) => setSearch(e.target.value)} className="w-64 mb-6" />

      <div className="space-y-3">
        {filtered.map((r) => (
          <details key={r.key} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 group">
            <summary className={`cursor-pointer font-semibold ${!r.translated ? 'opacity-70' : ''}`}>
              {pick(lang, r.name_pt, r.name_en)}
            </summary>
            <div
              className="text-sm mt-3 whitespace-pre-line leading-relaxed text-[var(--muted)]"
              dangerouslySetInnerHTML={{ __html: (pick(lang, r.desc_pt, r.desc_en) || '').replace(/## (.+)/g, '<strong class="text-[var(--foreground)]">$1</strong>') }}
            />
          </details>
        ))}
      </div>
    </div>
  )
}
