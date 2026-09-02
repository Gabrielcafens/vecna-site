import { X } from 'lucide-react'
import type { Character } from '@/lib/types'

const ABILITY_LABELS: Record<string, string> = { str: 'FORÇA', dex: 'DESTREZA', con: 'CONSTITUIÇÃO', int: 'INTELIGÊNCIA', wis: 'SABEDORIA', cha: 'CARISMA' }
const ABILITY_ORDER = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const

function mod(score: number) {
  const m = Math.floor((score - 10) / 2)
  return m >= 0 ? `+${m}` : `${m}`
}

export function TraditionalSheet({ character, onClose }: { character: Character; onClose: () => void }) {
  const d = character.sheet_data
  if (!d) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 sm:p-8" onClick={onClose}>
      <div
        className="relative w-full max-w-3xl rounded-xl border-2 border-[var(--accent)] bg-[var(--card)] p-5 sm:p-6 shadow-2xl my-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 rounded-full p-1.5 hover:bg-[var(--border)]/40 text-[var(--muted)] hover:text-[var(--foreground)]">
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4 border-b-2 border-[var(--accent)] pb-3 mb-4">
          {character.image && (
            <img src={`${import.meta.env.BASE_URL}${character.image}`} alt={character.name} className="h-16 w-16 rounded-full object-cover object-top border-2 border-[var(--accent)]" />
          )}
          <div>
            <h2 className="font-display text-xl font-bold text-[var(--accent)]">{character.name}</h2>
            <p className="text-xs text-[var(--muted)]">{[character.race, character.class, character.background].filter(Boolean).join(' · ')} — Nível {character.level}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-5">
          <div className="rounded-lg border border-[var(--border)] p-3 text-center">
            <div className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-wider">Classe de Armadura</div>
            <div className="text-2xl font-bold font-display text-[var(--accent)]">{d.ac}</div>
          </div>
          <div className="rounded-lg border border-[var(--border)] p-3 text-center">
            <div className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-wider">Pontos de Vida</div>
            <div className="text-2xl font-bold font-display text-[var(--accent)]">{d.hp}</div>
            <div className="text-[9px] text-[var(--muted)]">{d.hit_dice}</div>
          </div>
          <div className="rounded-lg border border-[var(--border)] p-3 text-center">
            <div className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-wider">Iniciativa</div>
            <div className="text-2xl font-bold font-display text-[var(--accent)]">{d.initiative >= 0 ? `+${d.initiative}` : d.initiative}</div>
          </div>
          <div className="rounded-lg border border-[var(--border)] p-3 text-center">
            <div className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-wider">Percepção Passiva</div>
            <div className="text-2xl font-bold font-display text-[var(--accent)]">{d.passive_perception}</div>
          </div>
          <div className="rounded-lg border border-[var(--border)] p-3 text-center">
            <div className="text-[9px] uppercase font-bold text-[var(--muted)] tracking-wider">Bônus de Proficiência</div>
            <div className="text-2xl font-bold font-display text-[var(--accent)]">+{d.proficiency_bonus}</div>
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-5">
          {ABILITY_ORDER.map((key) => (
            <div key={key} className="rounded-lg border-2 border-[var(--border)] p-2 text-center">
              <div className="text-[8px] uppercase font-bold text-[var(--muted)] tracking-wider">{ABILITY_LABELS[key]}</div>
              <div className="text-lg font-bold font-display">{d.abilities[key]}</div>
              <div className="text-xs text-[var(--accent)] font-semibold">
                {mod(d.abilities[key])}
                {d.saving_throws?.includes(key) && <span title="Proficiência em salvaguarda">*</span>}
              </div>
            </div>
          ))}
        </div>

        {d.skills && d.skills.length > 0 && (
          <div className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] border-b border-[var(--border)] pb-1 mb-2">Perícias</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm">
              {d.skills.map((s) => (
                <div key={s.name} className="flex justify-between">
                  <span>{s.name}</span>
                  <span className="font-semibold text-[var(--accent)]">{s.bonus >= 0 ? `+${s.bonus}` : s.bonus}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {d.weapons && d.weapons.length > 0 && (
          <div className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] border-b border-[var(--border)] pb-1 mb-2">Armas & Ataques</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[var(--muted)] text-xs">
                  <th className="font-normal pb-1">Nome</th>
                  <th className="font-normal pb-1">Bônus</th>
                  <th className="font-normal pb-1">Dano</th>
                </tr>
              </thead>
              <tbody>
                {d.weapons.map((w) => (
                  <tr key={w.name} className="border-t border-[var(--border)]">
                    <td className="py-1">{w.name}</td>
                    <td className="py-1 text-[var(--accent)] font-semibold">{w.bonus}</td>
                    <td className="py-1">{w.damage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {d.features && d.features.length > 0 && (
          <div className="mb-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] border-b border-[var(--border)] pb-1 mb-2">Talentos & Características</h3>
            <div className="space-y-1.5">
              {d.features.map((f) => (
                <p key={f.name} className="text-sm"><strong className="text-[var(--accent)]">{f.name}.</strong> <span className="text-[var(--muted)]">{f.desc}</span></p>
              ))}
            </div>
          </div>
        )}

        {d.spellcasting && (
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] border-b border-[var(--border)] pb-1 mb-2">Magias</h3>
            <div className="flex flex-wrap gap-4 mb-3 text-sm">
              <span><span className="text-[var(--muted)]">Habilidade:</span> <strong className="text-[var(--accent)]">{d.spellcasting.ability}</strong></span>
              <span><span className="text-[var(--muted)]">CD:</span> <strong className="text-[var(--accent)]">{d.spellcasting.dc}</strong></span>
              <span><span className="text-[var(--muted)]">Ataque de magia:</span> <strong className="text-[var(--accent)]">+{d.spellcasting.attack_bonus}</strong></span>
              {d.spellcasting.slots && <span><span className="text-[var(--muted)]">Espaços:</span> <strong className="text-[var(--accent)]">{d.spellcasting.slots}</strong></span>}
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[var(--muted)] text-xs">
                  <th className="font-normal pb-1">Magia</th>
                  <th className="font-normal pb-1">Círculo</th>
                  <th className="font-normal pb-1">Efeito</th>
                </tr>
              </thead>
              <tbody>
                {d.spellcasting.spells.map((s) => (
                  <tr key={s.name} className="border-t border-[var(--border)] align-top">
                    <td className="py-1.5 font-semibold text-[var(--accent)] whitespace-nowrap">{s.name}</td>
                    <td className="py-1.5 text-[var(--muted)] whitespace-nowrap">{s.level}</td>
                    <td className="py-1.5">{s.effect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
