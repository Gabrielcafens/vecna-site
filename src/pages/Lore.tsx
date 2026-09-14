export default function LorePage() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lore da Campanha</h1>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🔮 Sessão 3 — em construção
        </summary>
        <div className="mt-4">
          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mb-2">Um perigo maior que uma masmorra</h2>
          <p className="text-sm leading-relaxed mb-3">
            Vecna nunca precisou se esconder de verdade — só esperar. Por trás do culto que o grupo cruzou sob Phandalin, o lich-deus vem reunindo segredos há muito mais tempo do que qualquer um imaginava, de muito mais gente do que só um punhado de cultistas numa ruína esquecida. O que aconteceu na Cripta dos Cantores Silenciados não foi o plano — foi só o primeiro fio solto que o grupo puxou.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Agora Vecna sabe os nomes deles. E eles sabem o dele. Isso muda o tamanho do tabuleiro: o que vem a seguir não é mais sobre limpar uma masmorra e voltar pra casa — é sobre entender o que um deus dos segredos está tentando construir, e se existe alguma forma de impedir a tempo.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Entrada prevista em <strong>Nível 10</strong>. Vitu segue como personagem legado ao lado do grupo, mas não sobe de nível junto (o número exato de nível dele está em confirmação).
          </p>
          <div className="rounded-md border border-dashed border-[var(--danger)] p-4 text-xs text-[var(--muted)] mb-4">
            👁 Ainda não tem data nem gancho fechado — quanto tempo passa entre a Sessão 2 e a Sessão 3 ainda está em aberto. Esta seção cresce assim que isso for decidido.
          </div>

          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mt-6 mb-2">🛠️ Quer entrar na mesa? Crie sua ficha</h2>
          <p className="text-sm leading-relaxed mb-3">
            Nível Inicial: <strong>Nível 10</strong> (o grupo chega nesse nível vindo da Sessão 2). Regras: D&amp;D 2024 (Versão 5.5), qualquer classe do Livro do Jogador, qualquer raça — desde que a origem do personagem faça sentido em Faerûn.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            <strong>Exemplos de justificativa de raça:</strong> raças comuns (Humano, Elfo, Anão, Halfling, Gnomo) nasceram ou vivem na Costa da Espada; Dragonborn buscam recuperar a honra do seu povo após a quase-extinção dos dragões; Tieflings/Orcs/Goblins usam o serviço à Aliança dos Lordes como redenção; raças de outros planos caíram em Faerûn por uma fenda planar ou foram enviadas por algum motivo cósmico maior.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            <strong>Como seu personagem entra na história:</strong>
          </p>
          <ul className="text-sm leading-relaxed mb-3 list-disc pl-5 space-y-1">
            <li>Já é conhecido de alguém do grupo (Fabo, Phillipe, Eldris ou Vitu) e foi chamado pra reforçar a missão agora que Vecna está envolvido de verdade;</li>
            <li>É um agente independente da Aliança dos Lordes designado pra investigar a ameaça ao lado do grupo;</li>
            <li>Sentiu, à própria maneira, o peso de algo antigo se movendo no multiverso e seguiu o rastro até esse grupo.</li>
          </ul>
        </div>
      </details>

      <details open className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🌟 Sessão 2 — O Ninho do Olho Eldritch (em andamento)
        </summary>
        <div className="mt-4">
          <img
            src={`${import.meta.env.BASE_URL}ninhodoolho.png`}
            alt="Sessão 2: Ninho do Olho — arte de capa"
            className="w-full max-w-md mx-auto rounded-lg border border-[var(--border)] shadow-lg mb-4"
          />
          <p className="text-sm leading-relaxed mb-3">
            Faerûn respira em paz — mas em Phandalin, alguém acabou de morrer sem explicação. Um vigia encontrado nas ruínas antigas sob a cidade, com marcas que ninguém consegue identificar, e um único detalhe perturbador: o corpo foi encontrado bem no momento em que os Obeliscos Partidos sob Phandalin "acordaram", pulsando com uma luz verde fraca que ninguém via há anos.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Sildar entregou o contrato oficial da Aliança dos Lordes: investigar a morte, descobrir o que despertou os Obeliscos e confirmar se há ligação com a atividade cultista que o grupo já cruzou em Oakhaven. Foster tem uma suspeita que não gosta de dizer em voz alta — o sinal do Coração de Vidro, destruído na Sessão 1, pode ter acordado algo que estava esperando havia muito mais tempo do que qualquer um imagina.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Vitu entra junto desde o início dessa investigação, e não vai deixar Fabo descer sozinho num lugar assim.
          </p>
          <blockquote className="border-l-4 border-[var(--danger)] pl-4 italic text-[var(--muted)] mb-4">
            "Há algo terrível, aberrante e antigo acordando lá embaixo — e já matou alguém pra provar."
          </blockquote>
          <p className="text-sm leading-relaxed mb-3">
            Nível de entrada: <strong>6</strong>.
          </p>

          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mt-6 mb-2">O que já aconteceu</h2>
          <p className="text-sm leading-relaxed mb-3">
            Antes mesmo da masmorra, Eldris morreu sozinho numa floresta — a Green Hag usou a voz da Titânia como isca, e ele recusou usar um Desejo pra se salvar. Titânia pegou a alma dele a tempo, mas a instabilidade que já rondava o multiverso a jogou parar dentro de um pote de mel, num universo-bolso cheio de urso ladrão de banco. O grupo foi atrás — Bob, Vitu, Phillipe e Fabo, todos virados urso por uma noite — recuperou o pote, e alguns dias depois trouxe Eldris de volta com Ressurreição Verdadeira. Ele voltou com uma mancha roxa na palma da mão esquerda e a maioria das bênçãos do Baralho das Muitas Coisas silenciadas — só a Estrela continua.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            De volta a Phandalin, o grupo confirmou o corpo de Bram Osgood, destruiu o olho ressecado que ele carregava e seguiu pras ruínas apontadas pela irmã dele, Mira — que não veio junto. Na entrada, quem tentou forçar a passagem sem dizer a senha certa enfrentou a própria sombra: uma versão de si mesmo vinda de um multiverso onde Vecna já tinha vencido tudo. Lá dentro, atravessaram água parada, escaparam de uma emboscada aquática por pouco, e libertaram um fantasma sem nome preso havia anos — que acabou sendo Heidan Forteluz, o mentor perdido de Phillipe.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            O resto da sessão foi uma cripta trancada: um mini-ritual profano, ondas de zumbis, um golem furioso e guardiões de armadura vazia, contra um relógio que ninguém conseguia parar. O ritual completou antes do grupo dar conta de tudo — e no meio da poeira e do cansaço, uma projeção de <strong>Vecna</strong> se materializou pela primeira vez, oferecendo dons sobrenaturais em troca de lealdade. Alguns aceitaram. Todos saíram vivos.
          </p>
          <div className="mt-2 mb-4 rounded-md border border-dashed border-[var(--danger)] p-4 text-xs text-[var(--muted)]">
            👁 Isso é só até onde a mesa chegou. O resto da masmorra ainda não foi jogado, e fica de fora deste site de propósito.
          </div>
        </div>
      </details>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🌙 Entressessões — entre a Sessão 1 e a Sessão 2
        </summary>
        <div className="mt-4">
          <p className="text-sm leading-relaxed mb-4">
            Depois de Thay, oito semanas de paz relativa em Phandalin antes do corpo de Bram Osgood aparecer nas ruínas. Cada herói passou esse tempo de um jeito bem diferente — até a última semana virar bagunça pra todo mundo junto.
          </p>

          <div className="rounded-md border-2 border-dashed border-[var(--accent)]/50 bg-[var(--sidebar)]/40 p-4 mb-4">
            <h3 className="text-sm font-bold text-[var(--accent)] mb-2">🐻 O Honey Heist — o Pote de Ouro</h3>
            <p className="text-sm leading-relaxed">
              Quando Eldris morreu na floresta, Titânia agarrou a alma dele antes que fosse embora de vez — só que a fresta por onde ela puxou não levou pro lugar certo. A alma foi parar dentro de um pote de mel dourado, trancada num universo-bolso onde todo mundo é urso. Bob, Vitu, Phillipe e Fabo atravessaram atrás dela, viraram ursos ladrões de banco por uma noite, e assaltaram uma convenção inteira (a "UrsoCon") pra recuperar o pote certo — driblando segurança, uma cópia falsa em exibição, e uma cozinheira nada satisfeita chamada Chefe Rita — antes de voltar com a alma intacta pra Faerûn.
            </p>
          </div>

          <details className="rounded-md border border-[var(--border)] bg-[var(--sidebar)]/30 p-3 mb-2">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">Fabo</summary>
            <p className="text-sm leading-relaxed mt-2">
              Vitu decretou que a melhor terapia pro trauma do Necrotério era trabalho braçal insano. Fabo passou as oito semanas saltando fardos em chamas com Vitu agarrado nas costas gritando ordens, destruindo carcaças de galinha (mortas e nem tão mortas assim) pra treinar precisão de machado, e esquivando de tudo que o parceiro decidia jogar nele nos dias de folga. Saiu do outro lado ridiculamente mais forte — fisicamente maior, mais rápido, mais brutal — e com dois talentos novos gravados no corpo: Atleta e Mestre em Armas Grandes.
            </p>
          </details>

          <details className="rounded-md border border-[var(--border)] bg-[var(--sidebar)]/30 p-3 mb-2">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">Phillipe</summary>
            <p className="text-sm leading-relaxed mt-2">
              Sildar tirou Phillipe do treino e botou ele pra ensinar no próprio dojo — "ninguém cresce vencendo gente pior que ele." Ensinando, Phillipe percebeu que carregava duas escolas de esgrima que nunca soube que eram duas: o círculo arcano da academia militar (o "compasso") e o golpe direto que aprendeu com Heidan (o "martelo"). Foi ensinando que virou Cavaleiro Místico de verdade. No fim das seis semanas, voltou ao cemitério onde Heidan está enterrado — não entrou, mas ficou até escurecer pela primeira vez. E pegou um aluno novo, um garoto de sete anos sem nome que ninguém sabe de onde veio.
            </p>
          </details>

          <details className="rounded-md border border-[var(--border)] bg-[var(--sidebar)]/30 p-3 mb-2">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">Eldris</summary>
            <p className="text-sm leading-relaxed mt-2">
              Passou semanas caçando sobreviventes dos Magos Vermelhos de Thay, com uma parada na cidade natal — os pais não o reconheceram de cara, mas a mãe pediu que ele voltasse mais vezes, pra se conhecerem de novo. Encontrou a Green Hag na floresta, disfarçada com a voz da Titânia. Perdeu a luta, recusou gastar um dos três Desejos pra se salvar, e morreu de verdade. Titânia salvou a alma dele a tempo, mas a instabilidade que já rondava o multiverso jogou tudo pro lugar errado — o resto dessa história é onde a Sessão 2 realmente começa.
            </p>
          </details>

          <details className="rounded-md border border-[var(--border)] bg-[var(--sidebar)]/30 p-3">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">Vitu</summary>
            <p className="text-sm leading-relaxed mt-2">
              Presente em tudo isso do jeito que sempre está — sem arco pessoal registrado nessas oito semanas, mas pronto quando a fresta entre universos abriu e alguém precisou ir buscar a alma de um amigo dentro de um pote de mel.
            </p>
          </details>
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
