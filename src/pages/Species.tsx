import { useLanguage, pick } from '@/lib/language'
import { useData } from '@/lib/useData'
import { CardGridSkeleton } from '@/components/ui/skeleton'

interface SpeciesTrait { name_en: string; name_pt: string | null; desc_en: string; desc_pt: string | null }
interface Species { key: string; name_en: string; name_pt: string | null; translated: boolean; traits: SpeciesTrait[] }

export default function SpeciesPage() {
  const { lang } = useLanguage()
  const { data: species, loading } = useData<Species[]>('data/species.json')

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Species' : 'Raças'}</h1>
      {loading ? (
        <CardGridSkeleton count={9} className="md:grid-cols-2" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {species!.map((s) => (
            <div key={s.key} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200">
              <h3 className="font-semibold text-lg mb-2 font-display">{pick(lang, s.name_pt, s.name_en)}</h3>
              {s.traits.map((t, idx) => (
                <p key={idx} className="text-sm mb-1.5">
                  <strong className="text-[var(--accent)]">{pick(lang, t.name_pt, t.name_en)}.</strong> {pick(lang, t.desc_pt, t.desc_en)}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
