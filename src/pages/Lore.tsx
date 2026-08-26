export default function LorePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Lore da Campanha</h1>

      <details open className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4">
        <summary className="cursor-pointer text-lg font-bold text-[var(--accent)] font-display">
          Sessão 1 — O Necrotério de Thay
        </summary>
        <div className="mt-4">
          <p className="text-sm italic text-[var(--muted)] mb-6">
            Epílogo de Tyranny of Dragons / Prólogo de Phandelver and Below: The Shattered Obelisk — D&amp;D 2024 (5.5ª edição). Sessão concluída, grupo subiu para o Nível 4.
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
              <tr><td className="py-1">Diário de Reth (narrativo)</td><td>Grupo</td></tr>
            </tbody>
          </table>
        </div>
      </details>

      <details className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 mb-4">
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
          <div className="mt-4 rounded-md border border-dashed border-[var(--danger)] p-4 text-xs text-[var(--muted)]">
            👁 Além desse gancho, o resto da Sessão 2 fica de fora deste site de propósito — ela ainda não foi jogada, e não quero estragar a surpresa pra ninguém na mesa.
          </div>
        </div>
      </details>
    </div>
  )
}
