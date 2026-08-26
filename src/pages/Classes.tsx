import { Link } from 'react-router-dom'
import type { DndClass } from '@/lib/types'
import { useLanguage, pick } from '@/lib/language'
import { useT } from '@/lib/i18n'
import { useData } from '@/lib/useData'
import { CardGridSkeleton } from '@/components/ui/skeleton'

export default function ClassesPage() {
  const { lang } = useLanguage()
  const t = useT()
  const { data: classes, loading } = useData<DndClass[]>('data/classes.json')

  return (
    <div className="p-6 max-w-[1920px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">{t('classes.title')}</h1>
      {loading ? (
        <CardGridSkeleton count={6} className="md:grid-cols-2 lg:grid-cols-3" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes!.map((c) => (
            <Link
              key={c.key}
              to={`/classes/${c.key}`}
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200"
            >
              <h3 className="font-semibold text-lg mb-2">{pick(lang, c.name_pt, c.name_en)}</h3>
              <div className="grid grid-cols-1 gap-1 text-[11px] text-[var(--muted)]">
                <div><strong>{t('classes.hitDie')}:</strong> {c.hit_die || '—'}</div>
                <div><strong>{t('classes.saves')}:</strong> {c.saves_pt.join(', ') || '—'}</div>
                <div><strong>{t('classes.caster')}:</strong> {c.caster_type_pt}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
