import { createContext, useState } from 'react'
import { searchChannel } from '../services/twitch-service'
import { TwitchChannel } from '../shared/types'

export type ContextType = {
  twitchChannel: TwitchChannel | null
  loading: boolean
  searchTwitchChannel: ({ channelName }: { channelName: string }) => void
}

type Props = {
  children: React.ReactNode
}

export const TwitchSearchChannelContext = createContext<ContextType | undefined>(undefined)

export function TwitchSearchChannelProvider ({ children }: Props) {
  const [twitchChannel, setTwitchChannel] = useState<TwitchChannel | null>(null)
  // const [error, setError] = useState(null)
  // const [loadingMessages, updateLoadingMessages] = useState(false)
  const [loading, updateLoading] = useState(false)

  function searchTwitchChannel ({ channelName }: { channelName: string }) {
    updateLoading(true)
    searchChannel({ channelName })
      .then(response => {
        setTwitchChannel(response)
      })
      .catch(error => error)
      .finally(() => updateLoading(false))
  }


  const value = { twitchChannel, loading, searchTwitchChannel }
  return (
    <TwitchSearchChannelContext.Provider value={value}>
      {children}
    </TwitchSearchChannelContext.Provider>
  )
}
