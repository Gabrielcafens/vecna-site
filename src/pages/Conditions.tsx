import { useLanguage, pick } from '@/lib/language'
import { useData } from '@/lib/useData'
import { CardGridSkeleton } from '@/components/ui/skeleton'

interface Condition {
  key: string
  name_en: string
  name_pt: string | null
  translated: boolean
  desc_en: string
  desc_pt: string | null
  icon: string
}

export default function ConditionsPage() {
  const { lang } = useLanguage()
  const { data: conditions, loading } = useData<Condition[]>('data/conditions.json')

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-1">{lang === 'en' ? 'Conditions' : 'Condições'}</h1>
      <p className="text-xs text-[var(--muted)] mb-4">
        Ícones: Elderberry Inn Icons por Anaislalovi (MIT License)
      </p>
      {loading ? (
        <CardGridSkeleton count={9} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {conditions!.map((c) => (
            <div key={c.key} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200">
              <div className="flex items-center gap-3 mb-2">
                <img src={`${import.meta.env.BASE_URL}${c.icon}`} alt={pick(lang, c.name_pt, c.name_en)} className="h-10 w-10 shrink-0" />
                <h3 className="font-semibold">{pick(lang, c.name_pt, c.name_en)}</h3>
              </div>
              <div className="text-sm whitespace-pre-line leading-relaxed text-[var(--muted)]">
                {(pick(lang, c.desc_pt, c.desc_en) || '').replace(/\*\*(.+?)\*\*/g, '$1')}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
