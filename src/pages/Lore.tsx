export default function LorePage() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lore da Campanha</h1>

      <details open className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🔮 Sessão 3 — A Caça
        </summary>
        <div className="mt-4">
          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mb-2">Os anos em que tentaram detê-lo</h2>
          <p className="text-sm leading-relaxed mb-3">
            Passaram-se anos desde a Cripta dos Cantores Silenciados. Anos em que Fabo, Phillipe e Eldris tentaram fazer a única coisa que ainda fazia sentido: deter Vecna. Cada um do seu jeito, cada um no seu canto do mundo.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Não funcionou. Onde eles fechavam uma porta, o lich-deus abria três. Cultos de uma mão e um olho brotaram em cidades que nunca tinham ouvido o nome dele. Aldeias inteiras acordaram sem lembrar o que escondiam — e algumas, sem lembrar o próprio nome. Há bibliotecas queimadas, juramentos que ninguém cumpre porque ninguém lembra de tê-los feito, e cartas que chegam sem remetente, escritas com segredos que só o destinatário conhecia.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Vecna pintou a desgraça no mundo com pincel fino e sem pressa. Ele não precisa destruir o que já está desfeito por dentro. E em algum ponto desses anos, o grupo parou de contar vitórias e passou a contar o que ainda restava.
          </p>
          <blockquote className="border-l-4 border-[var(--danger)] pl-4 italic text-[var(--muted)] mb-4">
            "Ele já nos vê a todos. Vocês também... serão vistos."
          </blockquote>
          <p className="text-sm leading-relaxed mb-3">
            Foi quando Foster chamou. Ele tem um plano, e esse plano depende de vocês.
          </p>
          <p className="text-sm leading-relaxed mb-3">
            Nível: <strong>11</strong>, do início ao fim da sessão. Nesta sessão, Vitu não está no grupo.
          </p>
          <div className="rounded-md border border-dashed border-[var(--accent)]/50 p-4 text-sm mb-4">
            📅 <strong>21/11, às 13h</strong> — casa do Café.
          </div>

          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mt-6 mb-2">🛠️ Quer entrar na mesa? Crie sua ficha</h2>
          <p className="text-sm leading-relaxed mb-3">
            Nível Inicial: <strong>Nível 11</strong> (o grupo chega nesse nível vindo da Sessão 2). Regras: D&amp;D 2024 (Versão 5.5), qualquer classe do Livro do Jogador, qualquer raça — desde que a origem do personagem faça sentido em Faerûn.
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

      <details className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🌟 Sessão 2 — O Ninho do Olho Eldritch
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
            Sessão concluída. Nível de entrada: <strong>6</strong>.
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
          <h2 className="text-base font-bold text-[var(--accent)] border-b border-[var(--border)] pb-1 mt-6 mb-2">As dádivas de Vecna</h2>
          <p className="text-sm leading-relaxed mb-3">
            Vecna deixou claro que queria pelo menos dois aliados voluntários entre os quatro. Só <strong>Fabo</strong> aceitou a dádiva — o Charm of the Eldritch Eye. <strong>Phillipe</strong> recusou, mas negociou: contou o que tirou nas cartas, e Vecna passou a odiá-lo por isso. <strong>Eldris</strong> e <strong>Vitu</strong> recusaram.
          </p>
        </div>
      </details>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4 transition-all duration-200 hover:shadow-md hover:border-[var(--accent)]/40">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          🌙 Entressessões — entre a Sessão 2 e a Sessão 3
        </summary>
        <div className="mt-4">
          <p className="text-sm leading-relaxed mb-4">
            Vecna apareceu, ofereceu, ameaçou e se foi. E então o mundo seguiu em frente: entre a Sessão 2 e a Sessão 3 passaram-se <strong>alguns anos</strong> — entre três e cinco. O que cada herói fez com esse tempo é contado por quem o viveu; cada relato entra aqui assim que o jogador entregar o dele.
          </p>

          <details className="rounded-md border border-[var(--border)] bg-[var(--sidebar)]/30 p-3 mb-2">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">Fabo</summary>
            <blockquote className="border-l-4 border-[var(--danger)] pl-4 italic text-[var(--muted)] mt-2">
              "Mudou que eu agora durmo pensando em como quebrar os ossos daqueles que querem me quebrar antes. Eu tenho medo de não conseguir resolver o problema e não ter meu nome lembrado… Vitu não pode ser o único herói do mundo."
            </blockquote>
            <p className="text-sm leading-relaxed mt-2">
              <span className="text-[var(--muted)]">👁 O relato completo do que Fabo fez nesses anos ainda está por vir.</span>
            </p>
          </details>
          <details className="rounded-md border border-[var(--border)] bg-[var(--sidebar)]/30 p-3 mb-2">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">Phillipe</summary>
            <p className="text-sm leading-relaxed mt-2">
              <strong>O Terceiro Mestre</strong>
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Philip aprendeu esgrima com dois mortos e um velho.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              O compasso veio da academia: o círculo, o ângulo, a lâmina como raio. O martelo veio de Heidan Forteluz, e de Sildar antes dele — a resposta que chega antes da pergunta. Durante oito semanas no dojo ele ensinou os dois juntos e achou que tinha terminado de se montar.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Aí veio a Cripta.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              O que ele viu lá embaixo não respondia a nenhum dos dois. Não havia ângulo contra aquilo. Não havia tempo de reação contra uma coisa que já sabia o nome dele antes de ele entrar. O Diabo da carta não era um diabo, e um homem com uma espada muito boa é, para Vecna, exatamente o que uma fechadura é para quem tem a chave.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Philip entendeu uma coisa simples e humilhante: ele vinha usando magia como tempero. Escudo quando ia morrer. Uma chama quando estava cercado. Truques que ele sabia executar e não sabia explicar — o que, para um professor, é a definição de não saber. Tinha passado sete anos como escudeiro aprendendo que servir é carregar. Tinha passado oito semanas como mestre aprendendo que ensinar é decompor. E nunca tinha decomposto a própria magia.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Então voltou a ser aluno.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Procurou os Gnomos de Phandelver — os mesmos que Sildar lhe apontou quando ele virou cavaleiro — e dessa vez não pediu treinamento. Pediu a biblioteca. Os gnomos acharam graça: um homem de cota de malha, mãos de espada, pedindo tinta e pena. Deram a ele um grimório em branco e a pior mesa da sala, perto da porta.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Philip encheu o grimório.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Não do jeito elegante. Do jeito dele — como treinou guarda a vida inteira, repetindo até o movimento sair sem ser pensado. Copiou, errou, copiou de novo. Descobriu que a Evocação é a escola que mais se parece com esgrima: você declara uma intenção, mede a distância, e a energia obedece à geometria. O relâmpago é uma estocada que atravessa cinco pessoas. O raio ardente são três botes do mesmo pulso. O círculo que ele desenhava com giz no chão do dojo era, o tempo todo, a mesma figura que os gnomos desenhavam nas margens das páginas.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              O compasso e o martelo nunca foram duas coisas. Eram três, e faltava a terceira.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Ele continuou dando aula no dojo. Só mudou o quadro: agora as runas que ele risca no chão não são cenografia, são notação. Os alunos copiam sem entender, do mesmo jeito que ele copiava.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Sildar foi vê-lo estudar uma vez. Ficou na porta, olhou o cavaleiro de armadura curvado sobre um livro, e não disse nada por um tempo longo. Quando falou, foi só:
            </p>
            <blockquote className="border-l-4 border-[var(--danger)] pl-4 italic text-[var(--muted)] mt-2">
              — Heidan teria odiado isso.<br />— Eu sei.<br />— Ele estaria errado.
            </blockquote>
            <p className="text-sm leading-relaxed mt-2">
              E o garoto da turma da tarde, o que não paga mensalidade, agora senta do lado da mesa enquanto Philip copia. Não entende uma palavra. Mas olha a página do mesmo jeito que Philip, aos sete anos, olhou a mão que o Heidan estendeu.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Philip vai. Com a espada, o escudo, e um livro que ele mesmo escreveu — porque contra o deus dos segredos, a única resposta que ele conseguiu pensar foi parar de ter segredos consigo mesmo.
            </p>
          </details>
          <details className="rounded-md border border-[var(--border)] bg-[var(--sidebar)]/30 p-3 mb-2">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">Eldris</summary>
            <blockquote className="border-l-4 border-[var(--danger)] pl-4 italic text-[var(--muted)] mt-2">
              "Não muda nada. Continuo grato a Titânia. Se eu voltei, foi por um motivo. Se eu não usei as magias de desejo, foi por um motivo. Tudo por aquela que me salvou."
            </blockquote>
            <p className="text-sm leading-relaxed mt-2">
              <span className="text-[var(--muted)]">👁 O relato completo do que Eldris fez nesses anos ainda está por vir.</span>
            </p>
          </details>
          <details className="rounded-md border border-[var(--border)] bg-[var(--sidebar)]/30 p-3 mb-2">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--accent)]">Vitu</summary>
            <p className="text-sm leading-relaxed mt-2 text-[var(--muted)]">
              👁 Aguardando o relato de Vitu.
            </p>
          </details>
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
              Passou semanas caçando sobreviventes dos Magos Vermelhos de Thay, com uma parada na cidade natal — os pais não o reconheceram de cara, magoados sem saber nomear quem o tinha "levado" deles. Não insistiu em explicar. Antes de ir, a mãe pediu que ele voltasse mais vezes, pra se conhecerem de novo.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              De volta ao rastro, encontrou a Green Hag na floresta, disfarçada com a voz da Titânia. Perdeu a luta — caiu, e no último instante consciente escolheu não gastar um dos três Desejos pra se salvar. Morreu de verdade. A Hag arrastou o corpo pro próprio covil, onde mais quatro bruxas esperavam, e o que sobrou dele virou sopa.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Titânia alcançou a alma dele antes que fosse embora de vez — mas a instabilidade que já rondava o multiverso desviou o caminho, e ela foi parar no lugar errado. O resto dessa história é onde o Honey Heist e a Sessão 2 realmente começam.
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
