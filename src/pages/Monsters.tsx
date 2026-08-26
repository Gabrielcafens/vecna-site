import { useT } from '@/lib/i18n'

interface StatBlock {
  name: string
  subtitle: string
  cr: string
  ac: number
  hp: string
  speed: string
  stats: { label: string; score: number; mod: string }[]
  traits?: { name: string; desc: string }[]
  actions: { name: string; desc: string }[]
}

const BESTIARY: StatBlock[] = [
  {
    name: 'Kael, Aprendiz de Thay',
    subtitle: 'Humanoide médio (humano), leal maligno',
    cr: '1',
    ac: 13,
    hp: '22 (5d8)',
    speed: '9m',
    stats: [
      { label: 'FOR', score: 9, mod: '-1' },
      { label: 'DES', score: 14, mod: '+2' },
      { label: 'CON', score: 12, mod: '+1' },
      { label: 'INT', score: 16, mod: '+3' },
      { label: 'SAB', score: 11, mod: '+0' },
      { label: 'CAR', score: 10, mod: '+0' },
    ],
    traits: [
      { name: 'Conjuração', desc: 'Kael conhece truques de necromancia e usa Raio de Enfraquecimento e Toque Chocante em combate.' },
    ],
    actions: [
      { name: 'Adaga', desc: '+4 para acertar, alcance 1,5/6m, um alvo. Acerto: 4 (1d4+2) de dano perfurante.' },
      { name: 'Raio de Enfraquecimento', desc: 'Ataque à distância de magia, +5 para acertar, alcance 36m. Acerto: 10 (3d6) de dano necrótico.' },
    ],
  },
  {
    name: 'Reth, Aprendiz de Thay',
    subtitle: 'Humanoide médio (humano), leal maligno',
    cr: '1',
    ac: 12,
    hp: '27 (6d8)',
    speed: '9m',
    stats: [
      { label: 'FOR', score: 8, mod: '-1' },
      { label: 'DES', score: 12, mod: '+1' },
      { label: 'CON', score: 13, mod: '+1' },
      { label: 'INT', score: 15, mod: '+2' },
      { label: 'SAB', score: 13, mod: '+1' },
      { label: 'CAR', score: 9, mod: '-1' },
    ],
    traits: [
      { name: 'Sangue Sacrificial', desc: 'Ao cair a 0 HP, Reth pode gastar sua reação para alimentar o poço de sangue negro, curando 10 HP do ritual em andamento.' },
    ],
    actions: [
      { name: 'Cajado', desc: '+3 para acertar, alcance 1,5m, um alvo. Acerto: 4 (1d6+1) de dano de concussão.' },
      { name: 'Mísseis Mágicos (3º nível)', desc: 'Três dardos de força automáticos, 3 (1d4+1) de dano cada.' },
    ],
  },
  {
    name: 'Dracolich Enfraquecido',
    subtitle: 'Morto-vivo grande, leal maligno',
    cr: '8',
    ac: 17,
    hp: '150 (20d12+20)',
    speed: '9m, voo 18m',
    stats: [
      { label: 'FOR', score: 21, mod: '+5' },
      { label: 'DES', score: 10, mod: '+0' },
      { label: 'CON', score: 19, mod: '+4' },
      { label: 'INT', score: 14, mod: '+2' },
      { label: 'SAB', score: 13, mod: '+1' },
      { label: 'CAR', score: 17, mod: '+3' },
    ],
    traits: [
      { name: 'Imunidade a Morto-vivo', desc: 'Imune a veneno e às condições envenenado, exausto e apavorado.' },
      { name: 'Forma Enfraquecida', desc: 'Invocado por um ritual incompleto com o Coração de Vidro de Tiamat — seu sopro e voo estão a metade do poder normal de um dracolich completo.' },
    ],
    actions: [
      { name: 'Mordida', desc: '+9 para acertar, alcance 3m, um alvo. Acerto: 17 (2d10+6) de dano perfurante.' },
      { name: 'Sopro Necrótico Enfraquecido (recarrega 5-6)', desc: 'Cone de 9m de energia necrótica. Cada criatura na área: TR de Constituição CD 15, 27 (6d8) de dano necrótico (metade se sucesso).' },
    ],
  },
]

export default function MonstersPage() {
  const t = useT()

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-1">{t('monsters.title')}</h1>
      <p className="text-sm text-[var(--muted)] mb-6 max-w-3xl">{t('monsters.subtitle')}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {BESTIARY.map((m) => (
          <div key={m.name} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold font-display">{m.name}</h3>
              <span className="text-xs font-bold text-[var(--accent)]">ND {m.cr}</span>
            </div>
            <p className="text-[11px] italic text-[var(--muted)] mb-2">{m.subtitle}</p>
            <div className="grid grid-cols-3 gap-1 text-[11px] text-[var(--muted)] mb-2 border-b border-[var(--border)] pb-2">
              <div><strong>CA:</strong> {m.ac}</div>
              <div><strong>PV:</strong> {m.hp}</div>
              <div><strong>Desl.:</strong> {m.speed}</div>
            </div>
            <div className="grid grid-cols-6 gap-1 text-center text-[10px] mb-2 border-b border-[var(--border)] pb-2">
              {m.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-bold text-[var(--muted)]">{s.label}</div>
                  <div>{s.score} ({s.mod})</div>
                </div>
              ))}
            </div>
            {m.traits && m.traits.length > 0 && (
              <div className="mb-2">
                <h4 className="text-xs font-bold text-[var(--accent)] border-b border-[var(--border)]">Características</h4>
                {m.traits.map((tr, idx) => (
                  <p key={idx} className="text-xs mt-1"><strong>{tr.name}.</strong> {tr.desc}</p>
                ))}
              </div>
            )}
            <div>
              <h4 className="text-xs font-bold text-[var(--accent)] border-b border-[var(--border)]">Ações</h4>
              {m.actions.map((a, idx) => (
                <p key={idx} className="text-xs mt-1"><strong>{a.name}.</strong> {a.desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
