
import { createContext, useMemo, useContext, useState, useEffect } from 'react'
import { useLocale } from "next-intl";

const GlobalContext = createContext(null)

export const GlobalProvider = ({ initialLocales, children }) => {
  const localeValue = useLocale()
  const [locales, setLocales] = useState(initialLocales ?? [{"name":"English","short":"en"}])
  const [locale, setLocale] = useState({"name":"English","short":"en"})
  
  useEffect(() => {
    if (!locales) {
      return
    }

    const currentLangValue = locales.find((el) => el.short === localeValue)
    setLocale(currentLangValue)
  }, [locales])

  const value = useMemo(() => {
    return {
      locales,
      locale,
      setLocales,
      setLocale
    }
  }, [locales, locale])

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }

  return {
    ...context
  }
}
