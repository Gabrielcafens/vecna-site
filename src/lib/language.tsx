import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'pt' | 'en'
const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'pt',
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('vecna-lang')
    return saved === 'en' ? 'en' : 'pt'
  })

  useEffect(() => {
    localStorage.setItem('vecna-lang', lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, toggle: () => setLang((l) => (l === 'pt' ? 'en' : 'pt')) }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

/** Pega o campo _pt se existir e o idioma for pt; senão cai pro _en. */
export function pick(lang: Lang, ptValue: string | null | undefined, enValue: string | null | undefined): string {
  if (lang === 'en') return enValue || ptValue || ''
  return ptValue || enValue || ''
}
