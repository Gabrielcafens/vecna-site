import classesData from '@/data/classes.json'
import type { DndClass } from '@/lib/types'
import { useLanguage, pick } from '@/lib/language'

const classes = classesData as DndClass[]

export default function ClassesPage() {
  const { lang } = useLanguage()
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {classes.map((c) => (
          <div key={c.key} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200">
            <h3 className="font-semibold text-lg mb-2">{pick(lang, c.name_pt, c.name_en)}</h3>
            <div className="grid grid-cols-3 gap-1 text-[11px] text-[var(--muted)] mb-3 border-b border-[var(--border)] pb-2">
              <div><strong>Dado de Vida:</strong> {c.hit_die || '—'}</div>
              <div><strong>Salvaguardas:</strong> {c.saves_pt.join(', ') || '—'}</div>
              <div><strong>Conjuração:</strong> {c.caster_type_pt}</div>
            </div>
            <h4 className="text-xs font-bold text-[var(--accent)] mb-1">Características de nível 1</h4>
            {c.level1_features.map((f, idx) => (
              <p key={idx} className="text-sm mb-1">
                <strong>{pick(lang, f.name_pt, f.name_en)}.</strong> {pick(lang, f.desc_pt, f.desc_en)}
              </p>
            ))}
            <p className="text-xs italic text-[var(--muted)] mt-2">
              Características de níveis superiores e subclasses ainda serão adicionadas.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
