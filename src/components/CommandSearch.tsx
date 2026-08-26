import { useEffect, useMemo, useState } from 'react'
import { Command } from 'cmdk'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useT } from '@/lib/i18n'
import { useData } from '@/lib/useData'
import type { Character, Npc } from '@/lib/types'

export function CommandSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const t = useT()

  const { data: characters } = useData<Character[]>('data/personagens.json')
  const { data: npcs } = useData<Npc[]>('data/npcs.json')

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  const results = useMemo(() => {
    if (!query.trim()) return { characters: [], npcs: [] }
    const q = query.toLowerCase()
    const match = (name: string) => name.toLowerCase().includes(q)
    return {
      characters: (characters || []).filter((c) => match(c.name)).slice(0, 8),
      npcs: (npcs || []).filter((n) => match(n.name)).slice(0, 8),
    }
  }, [query, characters, npcs])

  function go(path: string) {
    setOpen(false)
    setQuery('')
    navigate(path)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm text-[var(--muted)] hover:border-[var(--accent)] transition-colors w-full max-w-64 cursor-pointer"
      >
        <Search className="h-4 w-4 shrink-0" />
        <span className="truncate">{t('search.placeholder')}</span>
        <kbd className="ml-auto shrink-0 text-[10px] border border-[var(--border)] rounded px-1.5 py-0.5">Ctrl K</kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label={t('search.placeholder')}
        className="fixed left-1/2 top-24 z-50 w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)] shadow-2xl"
        overlayClassName="fixed inset-0 z-50 bg-black/60"
        shouldFilter={false}
      >
        <div className="flex items-center gap-2 border-b border-[var(--border)] px-3">
          <Search className="h-4 w-4 text-[var(--muted)] shrink-0" />
          <Command.Input
            autoFocus
            value={query}
            onValueChange={setQuery}
            placeholder={t('search.inputPlaceholder')}
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
          />
        </div>
        <Command.List className="max-h-80 overflow-y-auto p-2">
          {query.trim() === '' && (
            <div className="p-4 text-sm text-[var(--muted)]">{t('search.hint')}</div>
          )}
          {query.trim() !== '' && results.characters.length === 0 && results.npcs.length === 0 && (
            <Command.Empty className="p-4 text-sm text-[var(--muted)]">{t('search.empty')}</Command.Empty>
          )}
          {results.characters.length > 0 && (
            <Command.Group heading={t('nav.characters')} className="text-xs text-[var(--muted)] px-2 py-1 [&_[cmdk-group-heading]]:mb-1">
              {results.characters.map((c) => (
                <Command.Item
                  key={c.name}
                  value={c.name}
                  onSelect={() => go(`/personagens/${encodeURIComponent(c.name)}`)}
                  className="cursor-pointer rounded px-2 py-1.5 text-sm text-[var(--foreground)] data-[selected=true]:bg-[var(--accent)]/15"
                >
                  {c.name}
                </Command.Item>
              ))}
            </Command.Group>
          )}
          {results.npcs.length > 0 && (
            <Command.Group heading={t('nav.npcs')} className="text-xs text-[var(--muted)] px-2 py-1 [&_[cmdk-group-heading]]:mb-1">
              {results.npcs.map((n) => (
                <Command.Item
                  key={n.name}
                  value={n.name}
                  onSelect={() => go(`/npcs/${encodeURIComponent(n.name)}`)}
                  className="cursor-pointer rounded px-2 py-1.5 text-sm text-[var(--foreground)] data-[selected=true]:bg-[var(--accent)]/15"
                >
                  {n.name}
                </Command.Item>
              ))}
            </Command.Group>
          )}
        </Command.List>
      </Command.Dialog>
    </>
  )
}
