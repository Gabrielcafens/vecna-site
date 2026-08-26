import { useLanguage, pick } from '@/lib/language'
import { useData } from '@/lib/useData'
import { CardGridSkeleton } from '@/components/ui/skeleton'

interface Background {
  key: string
  name_en: string
  name_pt: string | null
  translated: boolean
  ability_scores_en: string | null
  ability_scores_pt: string | null
  equipment_en: string | null
  equipment_pt: string | null
  feat_en: string | null
  feat_pt: string | null
  skills_en: string | null
  skills_pt: string | null
  tool_en: string | null
  tool_pt: string | null
}

export default function BackgroundsPage() {
  const { lang } = useLanguage()
  const { data: backgrounds, loading } = useData<Background[]>('data/backgrounds.json')

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Backgrounds' : 'Antecedentes'}</h1>
      {loading ? (
        <CardGridSkeleton count={4} className="md:grid-cols-2" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {backgrounds!.map((b) => (
            <div key={b.key} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200">
              <h3 className="font-semibold mb-2">{pick(lang, b.name_pt, b.name_en)}</h3>
              <div className="text-sm space-y-1">
                <div><strong>{lang === 'en' ? 'Ability Scores' : 'Atributos'}:</strong> {pick(lang, b.ability_scores_pt, b.ability_scores_en)}</div>
                <div><strong>{lang === 'en' ? 'Skills' : 'Perícias'}:</strong> {pick(lang, b.skills_pt, b.skills_en)}</div>
                <div><strong>{lang === 'en' ? 'Tool' : 'Ferramenta'}:</strong> {pick(lang, b.tool_pt, b.tool_en)}</div>
                <div><strong>{lang === 'en' ? 'Feat' : 'Talento'}:</strong> {pick(lang, b.feat_pt, b.feat_en)}</div>
                <div><strong>{lang === 'en' ? 'Equipment' : 'Equipamento'}:</strong> {pick(lang, b.equipment_pt, b.equipment_en)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
