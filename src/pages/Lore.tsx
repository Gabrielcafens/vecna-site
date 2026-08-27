export default function LorePage() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lore da Campanha</h1>

      <details open className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🌟 Sessão 2 — O Ninho do Olho Eldritch (convite)
        </summary>
        <div className="mt-4">
          <p className="text-sm leading-relaxed mb-3">
            Faerûn respira em paz — mas nas sombras dos reinos, algo se move de novo. Sildar entregou o contrato oficial da Aliança dos Lordes: confirmar e neutralizar a atividade cultista ligada ao Coração de Vidro destruído em Oakhaven. Foster complementa — os Obeliscos Partidos sob Phandalin "acordaram" no exato momento em que o Coração se partiu. Algo respondeu ao sinal.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Vitu entra junto desde o início dessa missão, e não vai deixar Fabo entrar sozinho num lugar assim.
          </p>
          <blockquote className="border-l-4 border-[var(--danger)] pl-4 italic text-[var(--muted)] mb-4">
            "Há algo terrível, aberrante e antigo acordando lá embaixo."
          </blockquote>
          <p className="text-sm leading-relaxed mb-3">
            Nível de entrada: <strong>6</strong>.
          </p>

          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mt-6 mb-2">🛠️ Quer entrar na mesa? Crie sua ficha</h2>
          <p className="text-sm leading-relaxed mb-3">
            Nível Inicial: <strong>Nível 6</strong> (o grupo já chegou nesse nível vindo da Sessão 1). Regras: D&amp;D 2024 (Versão 5.5), qualquer classe do Livro do Jogador, qualquer raça — desde que a origem do personagem faça sentido em Faerûn.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            <strong>Exemplos de justificativa de raça:</strong> raças comuns (Humano, Elfo, Anão, Halfling, Gnomo) nasceram ou vivem na Costa da Espada; Dragonborn buscam recuperar a honra do seu povo após a quase-extinção dos dragões; Tieflings/Orcs/Goblins usam o serviço à Aliança dos Lordes como redenção; raças de outros planos caíram em Faerûn por uma fenda planar ou foram enviadas por algum motivo cósmico maior.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            <strong>Como seu personagem entra na história:</strong>
          </p>
          <ul className="text-sm leading-relaxed mb-3 list-disc pl-5 space-y-1">
            <li>Já é conhecido de alguém do grupo (Fabo, Phillipe, Eldris ou Vitu) e foi chamado pra reforçar a missão;</li>
            <li>É um agente independente da Aliança dos Lordes designado pra acompanhar o grupo;</li>
            <li>Sentiu o "despertar" dos Obeliscos Partidos por conta própria e chegou a Phandalin investigando por seus próprios motivos.</li>
          </ul>
          <div className="mt-4 rounded-md border border-dashed border-[var(--danger)] p-4 text-xs text-[var(--muted)]">
            👁 Além desse gancho, o resto da Sessão 2 fica de fora deste site de propósito — ela ainda não foi jogada, e não quero estragar a surpresa pra ninguém na mesa.
          </div>
        </div>
      </details>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          Sessão 1 — O Necrotério de Thay
        </summary>
        <div className="mt-4">
          <img
            src={`${import.meta.env.BASE_URL}cronicas-de-thay.jpeg`}
            alt="Crônicas de Thay — pôster da sessão one-shot"
            className="w-full max-w-md mx-auto rounded-lg border border-[var(--border)] shadow-lg mb-4"
          />
          <p className="text-sm italic text-[var(--muted)] mb-6">
            Epílogo de Tyranny of Dragons / Prólogo de Phandelver and Below: The Shattered Obelisk — D&amp;D 2024 (5.5ª edição). Sessão concluída, grupo subiu para o Nível 6.
          </p>

          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mb-2">Como tudo começou</h2>
          <p className="text-sm leading-relaxed mb-3">
            Faerûn finalmente respira em paz. A tirania do Culto do Dragão ruiu, a Rainha das Trevas foi banida e os grandes heróis do passado agora desfrutam de seu merecido descanso ou governam as grandes facções. Mas nas sombras dos reinos, uma nova ameaça começa a se mover.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            No isolado Cemitério de Oakhaven, vigias locais desapareceram e sussurros de magia profana ecoam vindos das criptas. A Aliança dos Lordes convocou um novo grupo de promissores aventureiros pra investigar o local antes que um mal antigo ganhasse força. A paz é frágil, e o destino dos reinos começou a cair nas mãos de Fabo, Phillipe e Eldris.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Cada um chegou até a Torre de Xonthal por um motivo diferente — ouro e glória, vingança, ou o legado dos veteranos que vieram antes deles. No Gabinete de Guerra da Aliança, Foster, Vitu e Sildar entregaram a missão e mandaram o grupo pra Oakhaven.
          </p>

          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mt-6 mb-2">O que aconteceu</h2>
          <p className="text-sm leading-relaxed mb-3">
            O grupo foi convocado à Torre de Xonthal — Farol da Esperança — pelos veteranos da guerra contra Tiamat. Foster, Vitu e Sildar passaram a missão: investigar o Cemitério de Oakhaven, onde Magos de Thay dissidentes estavam usando o Coração de Vidro de Tiamat para alimentar um ritual necromântico.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            O grupo desceu andar por andar pela cripta, enfrentou os aprendizes Kael e Reth, atravessou um corredor de carne viva e chegou ao clímax: o Mago Líder <strong>Valdris</strong> invocou um Dracolich Enfraquecido usando um poço de sangue negro. O grupo derrotou Valdris e o Dracolich, destruiu o Coração de Vidro de Tiamat e retornou vitorioso à torre.
          </p>

          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mt-6 mb-2">O vilão — Valdris</h2>
          <p className="text-sm leading-relaxed mb-3">
            Mago Necromante Líder de Thay. Frio, calculista, pragmático — não um fanático. Ao morrer, sussurrou:
          </p>
          <blockquote className="border-l-4 border-[var(--danger)] pl-4 italic text-[var(--muted)] mb-4">
            "Ele já nos vê a todos. Vocês também... serão vistos."
          </blockquote>

          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mt-6 mb-2">O Baralho das Muitas Coisas</h2>
          <p className="text-sm leading-relaxed mb-3">
            Foster apresentou o Baralho das Muitas Coisas no encerramento — 22 Arcanos Maiores do Tarô Montalban mapeados para cartas do D&amp;D 2024. Veja os efeitos completos na aba <strong>Personagens</strong>.
          </p>

          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mt-6 mb-2">Loot da sessão</h2>
          <table className="w-full text-sm border-collapse mb-4">
            <thead>
              <tr className="text-left border-b border-[var(--border)]">
                <th className="py-1">Item</th><th className="py-1">Quem ficou</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted)]">
              <tr className="border-b border-[var(--border)]"><td className="py-1">215 PO</td><td>Fabo</td></tr>
              <tr className="border-b border-[var(--border)]"><td className="py-1">215 PO</td><td>Phillipe</td></tr>
              <tr className="border-b border-[var(--border)]"><td className="py-1">215 PO</td><td>Eldris</td></tr>
              <tr className="border-b border-[var(--border)]"><td className="py-1">Capa de Proteção +1 (CA e Salvaguardas)</td><td>Provavelmente Eldris (a confirmar)</td></tr>
              <tr><td className="py-1">Diário de Reth (narrativo)</td><td>Grupo</td></tr>
            </tbody>
          </table>
        </div>
      </details>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          Epílogo de Tyranny of Dragons
        </summary>
        <div className="mt-4">
          <img
            src={`${import.meta.env.BASE_URL}lore-party-antiga.png`}
            alt="O grupo original que derrotou Tiamat em Tyranny of Dragons, com o mestre da campanha ao centro"
            className="w-full max-w-2xl mx-auto rounded-lg border border-[var(--border)] shadow-lg mb-4"
          />
          <p className="text-sm leading-relaxed mb-3">
            Antes de tudo o que está nesse site, houve outra mesa: o grupo que enfrentou o Culto do Dragão e impediu o retorno de Tiamat ao mundo. Foster, Vitu e Sildar Hallwinter vinham dessa geração de heróis — e é a vitória deles que dá o pano de fundo pra essa nova campanha.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Com Tiamat derrotada, o Culto do Dragão perdeu força e os grandes veteranos passaram a viver o descanso que ganharam — ou a assumir cargos de liderança na Aliança dos Lordes, guiando a próxima geração de aventureiros. Mas restos do culto continuaram espalhados pelos reinos, e foi um desses grupos dissidentes de Magos de Thay que puxou os eventos do Necrotério de Thay.
          </p>
          <p className="text-sm leading-relaxed mb-6">
            Essa campanha é o que vem depois: uma nova geração de heróis herdando o mundo que os veteranos deixaram — e as sombras que eles não conseguiram apagar de vez.
          </p>

          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mb-2">O grupo original</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-3">
              <h3 className="font-semibold text-sm mb-1">Foster</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Gnomo Mago de Divinação, devoto de Gond. Deu o golpe final em Tiamat com a Varinha de Mísseis Mágicos. Hoje vive na Torre de Xonthal com o Bob, secretamente tentando prolongar a própria vida sem recorrer à necromancia.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-3">
              <h3 className="font-semibold text-sm mb-1">Vitu</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Dragonborn Paladino da Glória, liderou o grupo contra Tiamat. Carrega a culpa por ter deixado as tribos de fronteira — incluindo a de Fabo — vulneráveis enquanto estava em guerra. Hoje é jogável como personagem legado ao lado do Fabo.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-3">
              <h3 className="font-semibold text-sm mb-1">Sildar Hallwinter</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Humano Guerreiro veterano, cargo sênior na Aliança dos Lordes e patrono de Phandalin. Treinou Heidan Forteluz, que por sua vez treinou Phillipe — quando Heidan morreu, Sildar assumiu Phillipe diretamente.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-3">
              <h3 className="font-semibold text-sm mb-1">Bob</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Espectador verde, companheiro do grupo desde a época da guerra. Flutua entre a Torre de Xonthal e a casa de Vitu. Foster conduz experimentos discretos nele tentando torná-lo algo mais... jogável.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-3">
              <h3 className="font-semibold text-sm mb-1">Drarkent</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Bárbaro lendário da guerra contra Tiamat — suas histórias inspiraram uma geração inteira de aventureiros a servir a Aliança dos Lordes. Reapareceu ao lado de Erin no início da guerra.</p>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--sidebar)]/30 p-3">
              <h3 className="font-semibold text-sm mb-1">Erin, a Branca</h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">Meio-Elfa Feiticeira de Linhagem Dracônica, cabelos brancos, ninguém conseguia classificar direito. Parte do grupo original de Phandalin ao lado de Heidan Forteluz e Lee Sin — sobreviveu ao ataque do Beholder Zumbi que matou os outros dois, e eventualmente reapareceu junto de Drarkent e Erudhir no início da guerra contra Tiamat.</p>
            </div>
          </div>
        </div>
      </details>
    </div>
  )
}
