import { Moon, Sun, Languages, Menu } from 'lucide-react'
import { useTheme } from '@/lib/theme'
import { useLanguage } from '@/lib/language'
import { Button } from '@/components/ui/button'
import { CommandSearch } from '@/components/CommandSearch'

export function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, toggle: toggleTheme } = useTheme()
  const { lang, toggle: toggleLang } = useLanguage()

  return (
    <header className="sticky top-0 z-40 flex items-center gap-3 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur px-4 py-2">
      <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex-1 flex justify-center md:justify-start">
        <CommandSearch />
      </div>
      <Button variant="outline" size="sm" onClick={toggleLang} title="Trocar idioma">
        <Languages className="h-4 w-4" />
        {lang === 'pt' ? 'PT-BR' : 'EN'}
      </Button>
      <Button variant="outline" size="icon" onClick={toggleTheme} title="Trocar tema">
        {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </header>
  )
}
