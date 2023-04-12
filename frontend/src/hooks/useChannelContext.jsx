import { useContext } from 'react'
import { ChannelContext } from '../context/channelContext'

export function useChannelContext () {
  const context = useContext(ChannelContext)

  if (context === undefined) return new Error('useChannelContext debe ser usado dentro de ChannelProvider')
  return context
}
