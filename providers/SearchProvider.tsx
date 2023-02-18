import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

export const SearchContext = createContext<SearchContextProps>({
  search: undefined,
  setSearch: () => {}
})

type SearchContextProps = {
  search: string | undefined
  setSearch: Dispatch<SetStateAction<string | undefined>>
}

type SearchProviderProps = {
  children: ReactNode
}

export default function SearchProvider({ children }: SearchProviderProps): JSX.Element {
  const [search, setSearch] = useState<string | undefined>()

  return <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>
}
