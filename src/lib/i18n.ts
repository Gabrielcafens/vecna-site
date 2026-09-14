import { useLanguage } from '@/lib/language'

const dict = {
  pt: {
    'app.title': 'VECNA',
    'app.subtitle': 'site da campanha',
    'nav.group.campaign': 'Campanha',
    'nav.group.rules': 'Regras',
    'nav.group.table': 'Mesa',
    'nav.lore': 'Lore',
    'nav.characters': 'Personagens',
    'nav.sheets': 'Fichas',
    'nav.npcs': 'NPCs',
    'nav.monsters': 'Bestiário',
    'nav.grimoire': 'Grimório',
    'nav.items': 'Itens',
    'nav.srd': '5eTools (SRD 2024)',
    'footer.license': 'Conteúdo baseado no SRD aberto de D&D (CC-BY 4.0)',
    'search.placeholder': 'Buscar...',
    'search.inputPlaceholder': 'Buscar personagem ou NPC por nome...',
    'search.hint': 'Digite pra buscar personagens e NPCs.',
    'search.empty': 'Nenhum resultado encontrado.',
    'loading': 'Carregando...',
    'translated': 'traduzidos',
    'monsters.title': 'Bestiário — Sessão 1',
    'monsters.subtitle': 'Só as criaturas que já enfrentamos no Necrotério de Thay. A campanha usa o D&D 5.5ª edição (2024) — para consultar qualquer outra regra, magia, item, classe ou monstro do SRD, use o link do 5eTools no menu.',
    'characters.title': 'Personagens',
    'npcs.title': 'NPCs',
  },
  en: {
    'app.title': 'VECNA',
    'app.subtitle': 'campaign site',
    'nav.group.campaign': 'Campaign',
    'nav.group.rules': 'Rules',
    'nav.group.table': 'Table',
    'nav.lore': 'Lore',
    'nav.characters': 'Characters',
    'nav.sheets': 'Sheets',
    'nav.npcs': 'NPCs',
    'nav.monsters': 'Bestiary',
    'nav.grimoire': 'Grimoire',
    'nav.items': 'Items',
    'nav.srd': '5eTools (2024 SRD)',
    'footer.license': 'Content based on the open D&D SRD (CC-BY 4.0)',
    'search.placeholder': 'Search...',
    'search.inputPlaceholder': 'Search for a character or NPC by name...',
    'search.hint': 'Type to search characters and NPCs.',
    'search.empty': 'No results found.',
    'loading': 'Loading...',
    'translated': 'translated',
    'monsters.title': 'Bestiary — Session 1',
    'monsters.subtitle': 'Only the creatures we already fought at the Thay Morgue. The campaign uses D&D 5.5e (2024) — for any other rule, spell, item, class or monster from the SRD, use the 5eTools link in the menu.',
    'characters.title': 'Characters',
    'npcs.title': 'NPCs',
  },
} as const

export type Key = keyof (typeof dict)['pt']

export function useT() {
  const { lang } = useLanguage()
  return (key: Key) => dict[lang][key] || dict.pt[key]
}
