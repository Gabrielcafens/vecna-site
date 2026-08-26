import { useLanguage, pick } from '@/lib/language'
import { useData } from '@/lib/useData'
import { CardGridSkeleton } from '@/components/ui/skeleton'

interface Feat {
  key: string
  name_en: string
  name_pt: string | null
  translated: boolean
  type_pt: string
  prerequisite_pt: string
  benefits_en: string[]
  benefits_pt: string[] | null
}

export default function FeatsPage() {
  const { lang } = useLanguage()
  const { data: feats, loading } = useData<Feat[]>('data/feats.json')

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Feats' : 'Talentos'}</h1>
      {loading ? (
        <CardGridSkeleton count={6} className="md:grid-cols-2" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {feats!.map((f) => (
            <div key={f.key} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-semibold">{pick(lang, f.name_pt, f.name_en)}</h3>
                <span className="text-[10px] uppercase text-[var(--muted)]">{f.type_pt}</span>
              </div>
              {f.prerequisite_pt && <p className="text-[11px] italic text-[var(--muted)] mb-2">{lang === 'en' ? 'Prerequisite' : 'Pré-requisito'}: {f.prerequisite_pt}</p>}
              <ul className="text-sm list-disc pl-4 space-y-1">
                {(lang === 'pt' ? f.benefits_pt || f.benefits_en : f.benefits_en).map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
