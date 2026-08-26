export interface Spell {
  key: string
  name_en: string
  name_pt: string | null
  translated: boolean
  level: number
  school_pt: string
  classes_pt: string[]
  ritual: boolean
  concentration: boolean
  casting_time_pt: string
  range_text: string
  duration_pt: string
  components: string
  material: string
  desc_pt: string | null
  desc_en?: string
  higher_level_pt: string
}

export interface ItemEntry {
  key: string
  name_en: string
  name_pt: string | null
  translated: boolean
  category_pt: string
  weight: string
  cost: string
  desc_en: string
  desc_pt: string | null
  weapon: {
    damage_dice: string
    damage_type_pt: string
    is_simple: boolean
    is_martial: boolean
    properties: string[]
  } | null
  armor: {
    category: string
    ac_display: string
    grants_stealth_disadvantage: boolean
    strength_score_required: number | null
  } | null
}

export interface StatEntry {
  name_en: string
  name_pt: string | null
  desc_en: string
  desc_pt: string | null
}

export interface Monster {
  key: string
  name_en: string
  name_pt: string | null
  translated: boolean
  type_pt: string
  size_pt: string
  challenge_rating: number
  alignment_pt: string
  armor_class: number
  armor_detail: string | null
  hit_points: number
  hit_dice: string
  speed: Record<string, number | boolean | string>
  ability_scores: Record<string, number>
  modifiers: Record<string, number>
  skills: { name_pt: string; bonus: number }[]
  passive_perception: number
  darkvision_range: number | null
  languages: string
  traits: StatEntry[]
  actions: StatEntry[]
  bonus_actions: StatEntry[]
  reactions: StatEntry[]
  legendary_actions: StatEntry[]
}

export interface ClassFeature {
  name_en: string
  name_pt: string | null
  desc_en: string
  desc_pt: string | null
}

export interface DndClass {
  key: string
  name_en: string
  name_pt: string | null
  translated: boolean
  hit_die: string | null
  saves_pt: string[]
  caster_type_pt: string
  table_column_names: string[]
  levels: DndClassLevel[]
  level1_features: ClassFeature[]
}

export interface Character {
  name: string
  race: string
  class: string
  background: string
  level: number
  tags: string[]
  notes: string
  image?: string
  sheet?: string
}

export interface DndClassLevel {
  level: number
  proficiency_bonus: number
  features: { name_en: string; name_pt: string | null }[]
  columns: Record<string, string>
}

export interface Npc {
  name: string
  role: string
  notes: string
}
