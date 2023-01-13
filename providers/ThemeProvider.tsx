import { createContext, ReactNode, useEffect, useState } from "react"

export type ThemeContextProps = {
  isDark: boolean
  setIsDark: (theme: boolean) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDark: false,
  setIsDark: () => {
    console.error("setIsDark is not implemented")
    false
  }
})

const persistTheme = (theme: boolean) => {
  if (theme) document.documentElement.classList.add("dark")
  else document.documentElement.classList.remove("dark")
}

export default function ThemeContextProvider({ children }: { children: ReactNode }): JSX.Element {
  const [isDark, setIsDarkValue] = useState<boolean>(false)
  let setIsDark = (theme: boolean): void => setIsDarkValue(theme)

  if (typeof window !== "undefined") {
    setIsDark = (theme: boolean): void => {
      if (theme) {
        localStorage.theme = "dark"
        setIsDarkValue(true)
        persistTheme(true)
        return
      } else localStorage.theme = "light"
      setIsDarkValue(false)
      persistTheme(false)
    }

    useEffect(() => {
      if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        setIsDark(true)
      } else {
        setIsDark(false)
      }
    }, [])
  }

  return <ThemeContext.Provider value={{ isDark, setIsDark }}>{children}</ThemeContext.Provider>
}
