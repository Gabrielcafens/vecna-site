import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { BookOpen, Users, Contact, Sparkles, Swords, Skull, GraduationCap, Printer, Image as ImageIcon, Eye } from 'lucide-react'

const groups = [
  {
    label: 'Campanha',
    items: [
      { to: '/', label: 'Lore', icon: BookOpen, end: true },
      { to: '/personagens', label: 'Personagens', icon: Users },
      { to: '/npcs', label: 'NPCs', icon: Contact },
      { to: '/fotos', label: 'Fotos', icon: ImageIcon },
    ],
  },
  {
    label: 'Regras (SRD 5.2)',
    items: [
      { to: '/magias', label: 'Magias', icon: Sparkles },
      { to: '/itens', label: 'Itens', icon: Swords },
      { to: '/monstros', label: 'Monstros', icon: Skull },
      { to: '/classes', label: 'Classes', icon: GraduationCap },
    ],
  },
  {
    label: 'Mesa',
    items: [{ to: '/cartas', label: 'Cartas para imprimir', icon: Printer }],
  },
]

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-[var(--border)] bg-[var(--sidebar)] text-[var(--sidebar-foreground)]">
      <div className="flex items-center gap-2 px-4 py-5 border-b border-[var(--border)]">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/60 shadow-md shadow-[var(--accent)]/20">
          <Eye className="h-5 w-5 text-[var(--accent-foreground)]" />
        </div>
        <div>
          <div className="text-lg font-bold tracking-[0.15em] leading-none">VECNA</div>
          <div className="text-[10px] text-[var(--muted)] leading-none mt-1">site da campanha</div>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-5">
        {groups.map((group) => (
          <div key={group.label}>
            <div className="px-3 mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
              {group.label}
            </div>
            <div className="space-y-0.5">
              {group.items.map(({ to, label, icon: Icon, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    cn(
                      'group relative flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-all duration-150',
                      isActive
                        ? 'bg-[var(--accent)]/15 text-[var(--accent)] font-medium'
                        : 'text-[var(--sidebar-foreground)]/75 hover:bg-[var(--border)]/40 hover:text-[var(--sidebar-foreground)]'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-[var(--accent)]" />
                      )}
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{label}</span>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
      <div className="p-3 text-[10px] text-[var(--muted)] border-t border-[var(--border)]">
        Conteúdo baseado no SRD 5.2 (CC-BY 4.0)
      </div>
    </aside>
  )
}
