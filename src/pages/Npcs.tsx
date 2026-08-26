import npcsData from '@/data/npcs.json'
import type { Npc } from '@/lib/types'

const npcs = npcsData as Npc[]

export default function NpcsPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">NPCs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {npcs.map((n) => (
          <div key={n.name} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm hover:shadow-lg hover:border-[var(--accent)]/50 transition-all duration-200">
            <h3 className="font-semibold text-[var(--accent)]">{n.name}</h3>
            <p className="text-[11px] italic text-[var(--muted)] mb-2">{n.role}</p>
            <p className="text-sm">{n.notes}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
