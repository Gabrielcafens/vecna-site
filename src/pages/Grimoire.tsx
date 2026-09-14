import { USED_IN_SESSION_2, WISH_NOTE, SPELLBOOKS, type SpellRef, type UsedSpell } from '@/lib/spells'
import { ExternalLink } from 'lucide-react'

function UsedCard({ s }: { s: UsedSpell }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
      <div className="flex items-center justify-between gap-2 mb-1">
        <h3 className="font-semibold font-display">
          {s.link ? (
            <a href={s.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-[var(--accent)]">
              {s.name} <ExternalLink className="h-3 w-3" />
            </a>
          ) : s.name}
        </h3>
        <span className="text-xs font-bold text-[var(--accent)] shrink-0">{s.caster}</span>
      </div>
      <p className="text-xs text-[var(--muted)] leading-relaxed">{s.moment}</p>
    </div>
  )
}

function SpellRow({ s }: { s: SpellRef }) {
  return (
    <tr className="border-t border-[var(--border)] align-top">
      <td className="py-1.5 pr-2 font-semibold text-[var(--accent)] whitespace-nowrap">
        {s.link ? (
          <a href={s.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:underline">
            {s.name} <ExternalLink className="h-3 w-3 shrink-0" />
          </a>
        ) : s.name}
      </td>
      <td className="py-1.5 pr-2 text-[var(--muted)] whitespace-nowrap">{s.level}</td>
      <td className="py-1.5">{s.effect}</td>
    </tr>
  )
}

export default function GrimoirePage() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-1">Grimório da Aventura</h1>
      <p className="text-sm text-[var(--muted)] mb-6 max-w-3xl">
        Magias que já apareceram na campanha — as que foram lançadas de verdade na mesa, e o arsenal completo de cada conjurador. Links levam pro AideDD, a mesma referência usada no Bestiário.
      </p>

      <details open className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-4 mb-4">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🌟 Usadas na Sessão 2
        </summary>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
          {USED_IN_SESSION_2.map((s) => <UsedCard key={s.name} s={s} />)}
          <div className="lg:col-span-2">
            <UsedCard s={WISH_NOTE} />
          </div>
        </div>
      </details>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-4 mb-4">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          📖 Grimório completo, por conjurador
        </summary>
        <div className="mt-4 space-y-6">
          {SPELLBOOKS.map((book) => (
            <div key={book.character}>
              <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mb-2">{book.character}</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-[var(--muted)] text-xs">
                    <th className="font-normal pb-1">Magia</th>
                    <th className="font-normal pb-1">Círculo</th>
                    <th className="font-normal pb-1">Efeito</th>
                  </tr>
                </thead>
                <tbody>
                  {book.spells.map((s) => <SpellRow key={s.name} s={s} />)}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </details>
    </div>
  )
}
