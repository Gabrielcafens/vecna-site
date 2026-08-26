import { useEffect, useMemo, useState } from 'react'
import { Command } from 'cmdk'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useLanguage, pick } from '@/lib/language'
import spellsData from '@/data/spells.json'
import itemsData from '@/data/items.json'
import monstersData from '@/data/monsters.json'
import type { Spell, ItemEntry, Monster } from '@/lib/types'

const spells = spellsData as Spell[]
const items = itemsData as ItemEntry[]
const monsters = monstersData as Monster[]

export function CommandSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { lang } = useLanguage()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const results = useMemo(() => {
    if (!query.trim()) return { spells: [], items: [], monsters: [] }
    const q = query.toLowerCase()
    const match = (name: string) => name.toLowerCase().includes(q)
    return {
      spells: spells.filter((s) => match(pick(lang, s.name_pt, s.name_en))).slice(0, 8),
      items: items.filter((i) => match(pick(lang, i.name_pt, i.name_en))).slice(0, 8),
      monsters: monsters.filter((m) => match(pick(lang, m.name_pt, m.name_en))).slice(0, 8),
    }
  }, [query, lang])

  function go(path: string) {
    setOpen(false)
    setQuery('')
    navigate(path)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm text-[var(--muted)] hover:border-[var(--accent)] transition-colors w-64"
      >
        <Search className="h-4 w-4" />
        <span>Buscar...</span>
        <kbd className="ml-auto text-[10px] border border-[var(--border)] rounded px-1">Ctrl K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 pt-24" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-lg rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Command shouldFilter={false}>
              <div className="flex items-center gap-2 border-b border-[var(--border)] px-3">
                <Search className="h-4 w-4 text-[var(--muted)]" />
                <Command.Input
                  autoFocus
                  value={query}
                  onValueChange={setQuery}
                  placeholder="Buscar magia, item ou monstro por nome..."
                  className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
                />
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-2">
                {query.trim() === '' && (
                  <div className="p-4 text-sm text-[var(--muted)]">Digite pra buscar em magias, itens e monstros.</div>
                )}
                {results.spells.length > 0 && (
                  <Command.Group heading="Magias" className="text-xs text-[var(--muted)] px-2 py-1">
                    {results.spells.map((s) => (
                      <Command.Item
                        key={s.key}
                        onSelect={() => go(`/magias?q=${encodeURIComponent(pick(lang, s.name_pt, s.name_en))}`)}
                        className="cursor-pointer rounded px-2 py-1.5 text-sm hover:bg-[var(--border)]/40"
                      >
                        {pick(lang, s.name_pt, s.name_en)}
                      </Command.Item>
                    ))}
                  </Command.Group>
                )}
                {results.items.length > 0 && (
                  <Command.Group heading="Itens" className="text-xs text-[var(--muted)] px-2 py-1">
                    {results.items.map((i) => (
                      <Command.Item
                        key={i.key}
                        onSelect={() => go(`/itens?q=${encodeURIComponent(pick(lang, i.name_pt, i.name_en))}`)}
                        className="cursor-pointer rounded px-2 py-1.5 text-sm hover:bg-[var(--border)]/40"
                      >
                        {pick(lang, i.name_pt, i.name_en)}
                      </Command.Item>
                    ))}
                  </Command.Group>
                )}
                {results.monsters.length > 0 && (
                  <Command.Group heading="Monstros" className="text-xs text-[var(--muted)] px-2 py-1">
                    {results.monsters.map((m) => (
                      <Command.Item
                        key={m.key}
                        onSelect={() => go(`/monstros?q=${encodeURIComponent(pick(lang, m.name_pt, m.name_en))}`)}
                        className="cursor-pointer rounded px-2 py-1.5 text-sm hover:bg-[var(--border)]/40"
                      >
                        {pick(lang, m.name_pt, m.name_en)}
                      </Command.Item>
                    ))}
                  </Command.Group>
                )}
              </Command.List>
            </Command>
          </div>
        </div>
      )}
    </>
  )
}
