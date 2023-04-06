import { useContext } from 'react'
import { SearchContext } from '../context/searchContext'

export function useSearchContext () {
  const context = useContext(SearchContext)

  if (context === undefined) return new Error('useSearchContext debe ser usado dentro de SearchProvider')
  return context
}
