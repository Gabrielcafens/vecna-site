import { useParams, Link } from 'react-router-dom'
import type { DndClass } from '@/lib/types'
import { useLanguage, pick } from '@/lib/language'
import { useT } from '@/lib/i18n'
import { useData } from '@/lib/useData'
import { Spinner } from '@/components/ui/skeleton'
import { ArrowLeft } from 'lucide-react'

export default function ClassDetailPage() {
  const { key } = useParams()
  const { lang } = useLanguage()
  const t = useT()
  const { data: classes, loading } = useData<DndClass[]>('data/classes.json')

  if (loading) return <Spinner />
  const c = classes!.find((x) => x.key === key)
  if (!c) return <div className="p-6">Not found.</div>

  const extraCols = c.table_column_names || []

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Link to="/classes" className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--accent)] mb-4">
        <ArrowLeft className="h-4 w-4" /> {t('classes.title')}
      </Link>
      <h1 className="text-2xl font-bold mb-2">{pick(lang, c.name_pt, c.name_en)}</h1>
      <div className="flex flex-wrap gap-4 text-sm text-[var(--muted)] mb-6 border-b border-[var(--border)] pb-4">
        <div><strong className="text-[var(--foreground)]">{t('classes.hitDie')}:</strong> {c.hit_die || '—'}</div>
        <div><strong className="text-[var(--foreground)]">{t('classes.saves')}:</strong> {c.saves_pt.join(', ') || '—'}</div>
        <div><strong className="text-[var(--foreground)]">{t('classes.caster')}:</strong> {c.caster_type_pt}</div>
      </div>

      <div className="overflow-x-auto mb-8 rounded-lg border border-[var(--border)]">
        <table className="w-full text-xs border-collapse">
          <thead className="bg-[var(--sidebar)]">
            <tr>
              <th className="p-2 text-left">{lang === 'en' ? 'Level' : 'Nível'}</th>
              <th className="p-2 text-left">{lang === 'en' ? 'Prof. Bonus' : 'Bônus de Prof.'}</th>
              <th className="p-2 text-left">{lang === 'en' ? 'Features' : 'Características'}</th>
              {extraCols.map((col) => <th key={col} className="p-2 text-left whitespace-nowrap">{col}</th>)}
            </tr>
          </thead>
          <tbody>
            {c.levels.map((lvl) => (
              <tr key={lvl.level} className="border-t border-[var(--border)] even:bg-[var(--sidebar)]/40">
                <td className="p-2 font-semibold">{lvl.level}</td>
                <td className="p-2">+{lvl.proficiency_bonus}</td>
                <td className="p-2">{lvl.features.map((f) => f.name_pt || f.name_en).join(', ') || '—'}</td>
                {extraCols.map((col) => <td key={col} className="p-2">{lvl.columns[col] ?? '—'}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-lg font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mb-3">
        {t('classes.level1features')}
      </h2>
      {c.level1_features.map((f, idx) => (
        <p key={idx} className="text-sm mb-2">
          <strong>{pick(lang, f.name_pt, f.name_en)}.</strong> {pick(lang, f.desc_pt, f.desc_en) || (lang === 'en' ? '(not yet translated)' : '(ainda não traduzido)')}
        </p>
      ))}
      <p className="text-xs italic text-[var(--muted)] mt-4">{t('classes.moreComing')}</p>
    </div>
  )
}
