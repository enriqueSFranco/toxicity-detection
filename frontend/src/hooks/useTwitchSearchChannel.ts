import { useContext } from 'react'
import { TwitchSearchChannelContext } from '../context/TwitchSearchChannelContext'

export function useTwitchSearchChannel () {
  const context = useContext(TwitchSearchChannelContext)

  if (context === undefined) return new Error('useChannelContext debe ser usado dentro de ChannelProvider')

  return context
}
