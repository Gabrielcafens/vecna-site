import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n'
import { BookOpen, Users, Contact, Sparkles, Swords, Skull, GraduationCap, Printer, Image as ImageIcon, Star, ScrollText } from 'lucide-react'
import { GrimoireIcon } from '@/components/GrimoireIcon'

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const t = useT()

  const groups = [
    {
      label: t('nav.group.campaign'),
      items: [
        { to: '/', label: t('nav.lore'), icon: BookOpen, end: true },
        { to: '/personagens', label: t('nav.characters'), icon: Users },
        { to: '/npcs', label: t('nav.npcs'), icon: Contact },
        { to: '/fotos', label: t('nav.photos'), icon: ImageIcon },
      ],
    },
    {
      label: t('nav.group.rules'),
      items: [
        { to: '/magias', label: t('nav.spells'), icon: Sparkles },
        { to: '/itens', label: t('nav.items'), icon: Swords },
        { to: '/monstros', label: t('nav.monsters'), icon: Skull },
        { to: '/classes', label: t('nav.classes'), icon: GraduationCap },
        { to: '/talentos', label: t('nav.feats'), icon: Star },
        { to: '/antecedentes', label: t('nav.backgrounds'), icon: ScrollText },
      ],
    },
    {
      label: t('nav.group.table'),
      items: [{ to: '/cartas', label: t('nav.cards'), icon: Printer }],
    },
  ]

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-[var(--border)] bg-[var(--sidebar)] text-[var(--sidebar-foreground)]">
      <div className="flex items-center gap-2 px-4 py-5 border-b border-[var(--border)]">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent)]/60 shadow-md shadow-[var(--accent)]/20">
          <GrimoireIcon className="h-7 w-7 text-[var(--accent-foreground)]" />
        </div>
        <div>
          <div className="font-display text-lg font-bold tracking-[0.15em] leading-none">{t('app.title')}</div>
          <div className="text-[10px] text-[var(--muted)] leading-none mt-1">{t('app.subtitle')}</div>
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
        {t('footer.license')}
      </div>
    </aside>
  )
}
