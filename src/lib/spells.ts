export interface SpellRef {
  name: string
  link?: string
  level: string
  effect: string
}

export interface UsedSpell {
  name: string
  link?: string
  caster: string
  moment: string
}

export const USED_IN_SESSION_2: UsedSpell[] = [
  {
    name: 'Revivify (Reviver Amigos)',
    link: 'https://www.aidedd.org/spell/revivify',
    caster: 'Vitu',
    moment: 'Usada duas vezes na Cripta dos Cantores Silenciados (N10) — trouxe Eldris de volta, depois trouxe Fabo de volta, ambos caídos no mesmo combate.',
  },
  {
    name: 'Curar Ferimentos e outras curas',
    link: 'https://www.aidedd.org/spell/cure-wounds',
    caster: 'Vitu',
    moment: 'Várias curas menores ao longo do combate do N10, além dos dois Revivify — Vitu manteve o grupo de pé sozinho.',
  },
  {
    name: 'Proteção contra o Bem e o Mal',
    link: 'https://www.aidedd.org/spell/protection-from-evil-and-good',
    caster: 'Phillipe',
    moment: 'Lançada antes do combate grande do N10 — sala cheia de Morto-Vivo, deu desvantagem nos ataques deles contra o alvo protegido.',
  },
  {
    name: 'Fogo Fátuo',
    link: 'https://www.aidedd.org/spell/faerie-fire',
    caster: 'Eldris',
    moment: 'Usada em área no combate do N10 pra facilitar os acertos do grupo contra os zumbis e construtos.',
  },
  {
    name: 'Padrão Hipnótico',
    link: 'https://www.aidedd.org/spell/hypnotic-pattern',
    caster: 'Eldris',
    moment: 'Magia de área usada no meio da cripta trancada do N10, pra tentar conter parte da horda.',
  },
]

export const WISH_NOTE: UsedSpell = {
  name: 'Desejo (Wish)',
  link: 'https://www.aidedd.org/spell/wish',
  caster: 'Eldris',
  moment: 'Disponível (3 usos, carta A Lua) mas NÃO foi lançada — no momento da morte dele, na floresta, o jogador escolheu conscientemente não gastar um Desejo pra se salvar. Fica registrada aqui porque a escolha de não usá-la foi o momento mais importante da sessão pra esse personagem.',
}

export const SPELLBOOKS: { character: string; spells: SpellRef[] }[] = [
  {
    character: 'Eldris',
    spells: [
      { name: 'Rajada Mística (Eldritch Blast)', link: 'https://www.aidedd.org/spell/eldritch-blast', level: 'Truque', effect: 'Ataque +8 à distância, 1d10+5 força (com Rajada Agonizante), empurra 3m com Rajada Repulsora.' },
      { name: 'Ilusão Menor', link: 'https://www.aidedd.org/spell/minor-illusion', level: 'Truque', effect: 'Cria som ou imagem ilusória simples.' },
      { name: 'Chicote de Espinhos', link: 'https://www.aidedd.org/spell/thorn-whip', level: 'Truque', effect: 'Ataque +8, 1d6 perfurante, puxa o alvo 3m.' },
      { name: 'Produzir Chama', link: 'https://www.aidedd.org/spell/produce-flame', level: 'Truque', effect: 'Dano 1d8 fogo, alcance 9m.' },
      { name: 'Orientação', link: 'https://www.aidedd.org/spell/guidance', level: 'Truque', effect: '+1d4 num teste de perícia de aliado.' },
      { name: 'Estabilizar', link: 'https://www.aidedd.org/spell/spare-the-dying', level: 'Truque', effect: 'Estabiliza aliado com 0 PV instantaneamente.' },
      { name: 'Mãos Mágicas', link: 'https://www.aidedd.org/spell/mage-hand', level: 'Truque', effect: 'Mão espectral utilitária.' },
      { name: 'Palavra Curativa', link: 'https://www.aidedd.org/spell/healing-word', level: 'Grátis (1x/dia)', effect: 'Cura 1d4+5 com ação bônus, alcance 18m.' },
      { name: 'Passo Nevoeiro', link: 'https://www.aidedd.org/spell/misty-step', level: 'Grátis (2x/dia)', effect: 'Teleporte de 9m com ação bônus.' },
      { name: 'Detectar Magia', link: 'https://www.aidedd.org/spell/detect-magic', level: 'Ritual', effect: 'Sente auras mágicas próximas.' },
      { name: 'Identificar', link: 'https://www.aidedd.org/spell/identify', level: 'Ritual', effect: 'Revela propriedades de um item mágico.' },
      { name: 'Fogo Fátuo', link: 'https://www.aidedd.org/spell/faerie-fire', level: '2º (grátis, subclasse)', effect: 'Contorna criaturas em luz — usada no N10.' },
      { name: 'Riso Incontrolável de Tasha', link: 'https://www.aidedd.org/spell/tasha-s-hideous-laughter', level: '2º (grátis, subclasse)', effect: 'Incapacita um alvo rindo sem parar.' },
      { name: 'Acalmar Emoções', link: 'https://www.aidedd.org/spell/calm-emotions', level: '2º (grátis, subclasse)', effect: 'Suprime emoções fortes numa área.' },
      { name: 'Crescimento de Espinhos', link: 'https://www.aidedd.org/spell/spike-growth', level: '2º', effect: 'Área de espinhos, 2d4 dano a cada 1,5m percorrido dentro.' },
      { name: 'Bruxaria (Hex)', link: 'https://www.aidedd.org/spell/hex', level: '2º', effect: '+1d6 dano necrótico/psíquico por ataque contra o alvo amaldiçoado.' },
      { name: 'Repreensão Infernal', link: 'https://www.aidedd.org/spell/hellish-rebuke', level: '2º', effect: 'Reação: 3d10 de fogo em quem causou dano.' },
      { name: 'Imobilizar Pessoa', link: 'https://www.aidedd.org/spell/hold-person', level: '2º', effect: 'Paralisa um humanoide.' },
      { name: 'Bola de Fogo', link: 'https://www.aidedd.org/spell/fireball', level: '2º', effect: 'Esfera de 6m, 8d6 dano de fogo.' },
      { name: 'Contramágica', link: 'https://www.aidedd.org/spell/counterspell', level: '2º', effect: 'Reação: interrompe uma magia sendo conjurada.' },
      { name: 'Padrão Hipnótico', link: 'https://www.aidedd.org/spell/hypnotic-pattern', level: '2º', effect: 'Cubo de 9m, enfeitiça/incapacita — usada no N10.' },
      { name: 'Desejo (Wish)', link: 'https://www.aidedd.org/spell/wish', level: 'Especial (3 usos, carta A Lua)', effect: 'A magia mais poderosa que existe — disponível, mas nunca usada até agora.' },
    ],
  },
  {
    character: 'Phillipe',
    spells: [
      { name: 'Raio de Fogo', link: 'https://www.aidedd.org/spell/fire-bolt', level: 'Truque', effect: 'Ataque +6 à distância, 2d10 fogo.' },
      { name: 'Raio de Gelo', link: 'https://www.aidedd.org/spell/ray-of-frost', level: 'Truque', effect: 'Ataque +6 à distância, 2d8 frio, reduz deslocamento.' },
      { name: 'Toque Chocante', link: 'https://www.aidedd.org/spell/shocking-grasp', level: 'Truque', effect: 'Ataque +6 corpo a corpo, 2d8 elétrico, bloqueia Ataque de Oportunidade.' },
      { name: 'Trovejar', link: 'https://www.aidedd.org/spell/thunderclap', level: 'Truque', effect: '2d6 trovejante em 1,5m ao redor.' },
      { name: 'Escudo', link: 'https://www.aidedd.org/spell/shield', level: '1º (reação)', effect: '+5 de CA até o início do próximo turno.' },
      { name: 'Absorver Elementos', link: 'https://www.aidedd.org/spell/absorb-elements', level: '1º (reação)', effect: 'Resistência ao dano elemental sofrido, +1d6 no próximo ataque.' },
      { name: 'Mãos Flamejantes', link: 'https://www.aidedd.org/spell/burning-hands', level: '1º', effect: 'Cone de 4,5m, 3d6 fogo.' },
      { name: 'Mísseis Mágicos', link: 'https://www.aidedd.org/spell/magic-missile', level: '1º', effect: '3 dardos de 1d4+1 força, acerto automático.' },
      { name: 'Proteção contra o Bem e o Mal', link: 'https://www.aidedd.org/spell/protection-from-evil-and-good', level: '1º', effect: 'Desvantagem nos ataques de certos tipos de criatura — usada no N10.' },
    ],
  },
  {
    character: 'Vitu',
    spells: [
      { name: 'Curar Ferimentos', link: 'https://www.aidedd.org/spell/cure-wounds', level: '1º', effect: 'Toque, restaura 1d8 + Carisma em PV.' },
      { name: 'Raio Guia', link: 'https://www.aidedd.org/spell/guiding-bolt', level: '1º', effect: '4d6 radiante à distância, dá vantagem no próximo ataque contra o alvo.' },
      { name: 'Proteção contra o Bem e o Mal', link: 'https://www.aidedd.org/spell/protection-from-evil-and-good', level: '1º', effect: 'Desvantagem nos ataques de certos tipos de criatura contra o alvo.' },
      { name: 'Bênção', link: 'https://www.aidedd.org/spell/bless', level: '1º', effect: 'Até 3 criaturas somam 1d4 em ataques e salvaguardas.' },
      { name: 'Escudo da Fé', link: 'https://www.aidedd.org/spell/shield-of-faith', level: '1º', effect: '+2 de CA por 10 minutos.' },
      { name: 'Heroísmo', link: 'https://www.aidedd.org/spell/heroism', level: '1º', effect: 'Imunidade a Amedrontado + PV temp a cada turno.' },
      { name: 'Auxílio Divino', link: 'https://www.aidedd.org/spell/divine-favor', level: '1º', effect: 'PV temp e um bônus extra à escolha (a confirmar se é exatamente Divine Favor).' },
      { name: 'Ajuda', link: 'https://www.aidedd.org/spell/aid', level: '2º', effect: 'Até 3 criaturas ganham PV temporários.' },
      { name: 'Proteção contra Veneno', link: 'https://www.aidedd.org/spell/protection-from-poison', level: '2º', effect: 'Neutraliza veneno / vantagem contra veneno por 1h.' },
      { name: 'Zona da Verdade', link: 'https://www.aidedd.org/spell/zone-of-truth', level: '2º', effect: 'Área onde é difícil mentir conscientemente.' },
      { name: 'Arma Mágica', link: 'https://www.aidedd.org/spell/magic-weapon', level: '2º', effect: 'Uma arma tocada vira +1 por 1 hora.' },
      { name: 'Dissipar Magia', link: 'https://www.aidedd.org/spell/dispel-magic', level: '3º', effect: 'Encerra uma magia ativa.' },
      { name: 'Velocidade', link: 'https://www.aidedd.org/spell/haste', level: '3º', effect: 'Dobra o deslocamento, +2 CA, ação extra.' },
      { name: 'Energia Curativa', level: '3º', effect: 'Toque, restaura 2d8 + Carisma em PV (link exato a confirmar).' },
      { name: 'Reviver Amigos (Revivify)', link: 'https://www.aidedd.org/spell/revivify', level: '3º', effect: 'Traz de volta um morto há até 1 minuto, com 1 PV — usada duas vezes no N10.' },
      { name: 'Proteção de Energia', link: 'https://www.aidedd.org/spell/protection-from-energy', level: '3º', effect: 'Resistência a um tipo de dano por 8h.' },
      { name: 'Ataque Mordente', level: '3º', effect: 'Um ataque com arma soma 3d6 de dano do mesmo tipo (link exato a confirmar).' },
      { name: 'Liberdade de Movimento', link: 'https://www.aidedd.org/spell/freedom-of-movement', level: '4º', effect: 'Ignora terreno difícil, imune a Agarrado/Paralisado/Restringido.' },
      { name: 'Compulsão', link: 'https://www.aidedd.org/spell/compulsion', level: '4º', effect: 'Força movimento na direção indicada.' },
    ],
  },
]
