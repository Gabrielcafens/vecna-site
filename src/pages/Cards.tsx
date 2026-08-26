import { useT } from '@/lib/i18n'

const CARDS = [
  {
    key: 'kael',
    name: 'Kael, Aprendiz de Thay',
    level: 'ND 1',
    stats: [
      ['CA', '13'],
      ['PV', '22 (5d8)'],
      ['Deslocamento', '9m'],
    ],
    body: 'Conjurador de necromancia. Ataca com adaga (+4, 4 dano perfurante) ou Raio de Enfraquecimento (+5 à distância, 10 dano necrótico).',
  },
  {
    key: 'reth',
    name: 'Reth, Aprendiz de Thay',
    level: 'ND 1',
    stats: [
      ['CA', '12'],
      ['PV', '27 (6d8)'],
      ['Deslocamento', '9m'],
    ],
    body: 'Sangue Sacrificial: ao cair a 0 HP, cura 10 HP do ritual em andamento. Ataca com cajado ou Mísseis Mágicos (3 dardos, 3 dano cada).',
  },
  {
    key: 'dracolich',
    name: 'Dracolich Enfraquecido',
    level: 'ND 8',
    stats: [
      ['CA', '17'],
      ['PV', '150 (20d12+20)'],
      ['Deslocamento', '9m, voo 18m'],
    ],
    body: 'Mordida (+9, 17 dano perfurante). Sopro Necrótico Enfraquecido (recarga 5-6): cone de 9m, CD 15 Constituição, 27 dano necrótico (metade se sucesso).',
  },
]

export default function CardsPage() {
  const t = useT()

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-1 no-print">{t('cards.title')}</h1>
      <p className="text-sm text-[var(--muted)] mb-6 no-print">
        Cartas do bestiário da Sessão 1 (Necrotério de Thay). Use Ctrl+P pra imprimir.
      </p>

      <div className="flex gap-3 mb-4 no-print">
        <button onClick={() => window.print()} className="h-9 rounded-md bg-[var(--accent)] px-4 text-sm font-medium text-white hover:opacity-90 transition-opacity">
          {t('cards.print')}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 gap-4">
        {CARDS.map((c) => (
          <div key={c.key} className="vecna-card relative print:break-inside-avoid">
            <header className="vecna-card-header">
              <h3 className="vecna-card-name">{c.name}</h3>
              <span className="vecna-card-level">{c.level}</span>
            </header>
            <div className="vecna-card-stats">
              {c.stats.map(([label, value]) => (
                <div key={label}><span>{label}</span><strong>{value}</strong></div>
              ))}
            </div>
            <p className="vecna-card-body">{c.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
