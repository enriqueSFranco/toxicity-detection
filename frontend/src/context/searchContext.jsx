import { createContext, useState } from 'react'

export const SearchContext = createContext()

export function SearchProvider ({ children }) {
  const [query, setQuery] = useState('')

  const data = { query, setQuery }
  return (
    <SearchContext.Provider value={data}>
      {children}
    </SearchContext.Provider>
  )
}
