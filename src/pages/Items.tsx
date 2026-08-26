interface Item {
  name: string
  type: string
  desc: string
  owner?: string
}

const SESSION_1_ITEMS: Item[] = [
  {
    name: 'Coração de Vidro de Tiamat (destruído)',
    type: 'Artefato — status atual: destruído',
    desc: 'Fragmento do poder de Tiamat, usado pelos Magos de Thay dissidentes pra alimentar o ritual necromântico no Necrotério de Thay. O grupo destruiu o Coração no clímax da Sessão 1 — mas ao se partir, um símbolo de um olho apareceu gravado no interior do cristal.',
  },
  {
    name: 'Diário de Reth (grimório de Valdris)',
    type: 'Item narrativo',
    desc: 'O diário que Reth tentava queimar quando o grupo o encontrou. Continha anotações do próprio Valdris, incluindo uma frase cifrada em Thayan: "Aquele que Sabe tudo já abriu o Terceiro Olho sob Phandalin." Ao morrer, Valdris sussurrou algo na mesma linha: "Ele já nos vê a todos. Vocês também... serão vistos." As duas coisas apontam pra mesma entidade por trás de tudo: Vecna.',
  },
  {
    name: 'Capa de Proteção +1',
    type: 'Item mágico — +1 CA e Salvaguardas',
    desc: 'Encontrada no Necrotério de Thay, provavelmente no baú perto do cristal que alimentava o ritual. Concede +1 na Classe de Armadura e em todas as jogadas de Salvaguarda enquanto vestida.',
    owner: 'Provavelmente com o Eldris (a confirmar)',
  },
]

export default function ItemsPage() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-1">Itens</h1>
      <p className="text-sm text-[var(--muted)] mb-6 max-w-3xl">Itens e artefatos importantes encontrados ao longo da campanha.</p>

      <details open className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          Sessão 1 — O Necrotério de Thay
        </summary>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {SESSION_1_ITEMS.map((item) => (
            <div key={item.name} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
              <h3 className="font-semibold font-display mb-0.5">{item.name}</h3>
              <p className="text-[11px] italic text-[var(--muted)] mb-2">{item.type}</p>
              <p className="text-sm leading-relaxed">{item.desc}</p>
              {item.owner && <p className="text-xs text-[var(--accent)] font-medium mt-2">{item.owner}</p>}
            </div>
          ))}
        </div>
      </details>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🌟 Sessão 2 — O Ninho do Olho Eldritch
        </summary>
        <div className="mt-4 text-sm text-[var(--muted)] italic">
          Ainda não jogada — os itens desta sessão entram aqui depois.
        </div>
      </details>
    </div>
  )
}
