import { useContext } from 'react'
import { ChannelContext } from '../context/TwitchContext'

export function useTwitchSearchChannel () {
  const context = useContext(ChannelContext)

  if (context === undefined) return new Error('useChannelContext debe ser usado dentro de ChannelProvider')

  return context
}
