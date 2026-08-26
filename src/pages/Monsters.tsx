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
    speed: '9m (6 casas)',
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
    speed: '9m (6 casas)',
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
    name: 'Valdris',
    subtitle: 'Humanoide médio (humano), leal maligno — vilão da Sessão 1',
    cr: '6',
    ac: 15,
    hp: '85 (13d8+26)',
    speed: '9m (6 casas)',
    stats: [
      { label: 'FOR', score: 10, mod: '+0' },
      { label: 'DES', score: 14, mod: '+2' },
      { label: 'CON', score: 14, mod: '+2' },
      { label: 'INT', score: 19, mod: '+4' },
      { label: 'SAB', score: 13, mod: '+1' },
      { label: 'CAR', score: 15, mod: '+2' },
    ],
    traits: [
      { name: 'Mago Necromante Líder de Thay', desc: 'Frio, calculista, pragmático. Invocou o Dracolich Enfraquecido usando um poço de sangue negro alimentado pelo Coração de Vidro de Tiamat.' },
    ],
    actions: [
      { name: 'Multiataque', desc: 'Valdris conjura duas magias, ou faz um ataque com o cajado e conjura uma magia.' },
      { name: 'Cajado de Necromancia', desc: '+7 para acertar, alcance 1,5m. Acerto: 6 (1d8+2) de dano de concussão mais 9 (2d8) de dano necrótico.' },
      { name: 'Toque Vampírico (3º nível)', desc: 'Ataque corpo a corpo de magia, +8 para acertar. Acerto: 21 (6d6) de dano necrótico; Valdris recupera metade desse dano em PV.' },
    ],
  },
  {
    name: 'Carniçais',
    subtitle: 'Morto-vivo médio, caótico maligno',
    cr: '1',
    ac: 12,
    hp: '22 (5d8)',
    speed: '9m (6 casas), escalada 9m (6 casas)',
    stats: [
      { label: 'FOR', score: 13, mod: '+1' },
      { label: 'DES', score: 15, mod: '+2' },
      { label: 'CON', score: 10, mod: '+0' },
      { label: 'INT', score: 7, mod: '-2' },
      { label: 'SAB', score: 10, mod: '+0' },
      { label: 'CAR', score: 6, mod: '-2' },
    ],
    traits: [
      { name: 'Imunidade a Morto-vivo', desc: 'Imune a veneno e às condições envenenado e exausto.' },
    ],
    actions: [
      { name: 'Mordida', desc: '+3 para acertar, alcance 1,5m. Acerto: 5 (2d4) de dano perfurante.' },
      { name: 'Garras', desc: '+3 para acertar, alcance 1,5m. Acerto: 5 (2d4) de dano cortante. Se o alvo não é morto-vivo, ele deve ser bem-sucedido numa TR de Constituição CD 10 ou fica Paralisado por 1 minuto (pode repetir a TR no fim de cada turno).' },
    ],
  },
  {
    name: 'Esqueletos',
    subtitle: 'Morto-vivo médio, leal maligno',
    cr: '1/4',
    ac: 13,
    hp: '13 (2d8+4)',
    speed: '9m (6 casas)',
    stats: [
      { label: 'FOR', score: 10, mod: '+0' },
      { label: 'DES', score: 14, mod: '+2' },
      { label: 'CON', score: 15, mod: '+2' },
      { label: 'INT', score: 6, mod: '-2' },
      { label: 'SAB', score: 8, mod: '-1' },
      { label: 'CAR', score: 5, mod: '-3' },
    ],
    traits: [
      { name: 'Vulnerabilidade e Imunidade', desc: 'Vulnerável a dano de concussão. Imune a veneno e às condições envenenado e exausto.' },
    ],
    actions: [
      { name: 'Espada Curta', desc: '+4 para acertar, alcance 1,5m. Acerto: 5 (1d6+2) de dano perfurante.' },
      { name: 'Arco Curto', desc: '+4 para acertar à distância, alcance 24/96m. Acerto: 5 (1d6+2) de dano perfurante.' },
    ],
  },
  {
    name: 'Mímico',
    subtitle: 'Aberração média, neutro',
    cr: '2',
    ac: 12,
    hp: '58 (9d8+18)',
    speed: '4,5m (3 casas)',
    stats: [
      { label: 'FOR', score: 17, mod: '+3' },
      { label: 'DES', score: 12, mod: '+1' },
      { label: 'CON', score: 15, mod: '+2' },
      { label: 'INT', score: 5, mod: '-3' },
      { label: 'SAB', score: 13, mod: '+1' },
      { label: 'CAR', score: 8, mod: '-1' },
    ],
    traits: [
      { name: 'Camuflagem', desc: 'Enquanto imóvel, o mímico parece um objeto inanimado (baú, porta, etc.). TR de Investigação/Percepção CD 15 pra perceber a farsa.' },
      { name: 'Aderência', desc: 'O mímico gruda em qualquer coisa que o toque. Uma criatura Agarrada dessa forma também fica Restringida até se soltar (TR de Força CD 13).' },
    ],
    actions: [
      { name: 'Pseudópode', desc: '+5 para acertar, alcance 1,5m. Acerto: 7 (1d8+3) de dano de concussão e o alvo é Agarrado (CD 13 pra escapar) se o mímico não estiver Agarrando outra criatura.' },
      { name: 'Mordida', desc: '+5 para acertar, alcance 1,5m, um alvo Agarrado. Acerto: 12 (2d8+3) de dano perfurante mais 4 (1d8) de dano ácido.' },
    ],
  },
  {
    name: 'Dracolich Enfraquecido',
    subtitle: 'Morto-vivo grande, leal maligno',
    cr: '8',
    ac: 17,
    hp: '150 (20d12+20)',
    speed: '9m (6 casas), voo 18m (12 casas)',
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

function MonsterCard({ m }: { m: StatBlock }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
      <div className="flex justify-between items-start mb-1">
        <div>
          <h3 className="font-semibold font-display">{m.name}</h3>
          <p className="text-[11px] italic text-[var(--muted)]">{m.subtitle}</p>
        </div>
        <span className="text-xs font-bold text-[var(--accent)] shrink-0 ml-2">ND {m.cr}</span>
      </div>
      <div className="mt-3">
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
    </div>
  )
}

export default function MonstersPage() {
  const t = useT()

  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-1">{t('monsters.title')}</h1>
      <p className="text-sm text-[var(--muted)] mb-6 max-w-3xl">{t('monsters.subtitle')}</p>

      <details open className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-4 mb-4">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          Sessão 1 — O Necrotério de Thay
        </summary>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {BESTIARY.map((m) => <MonsterCard key={m.name} m={m} />)}
        </div>
      </details>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-4 mb-4">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🌟 Sessão 2 — O Ninho do Olho Eldritch
        </summary>
        <div className="mt-4 text-sm text-[var(--muted)] italic">
          Ainda não jogada — o bestiário desta sessão entra aqui depois.
        </div>
      </details>
    </div>
  )
}
