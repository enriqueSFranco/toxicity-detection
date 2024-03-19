import { createContext, useState } from 'react'
import { searchChannel, getMessagesTwitchChannel } from '../services/twitch'
import { TwitchChannel } from '../shared/types'

type ContextType = {
  twitchChannel: TwitchChannel | undefined
  loading: boolean
  searchTwitchChannel: ({ channelName }: { channelName: string }) => void
}

type Props = {
  children: React.ReactNode
}

export const ChannelContext = createContext<ContextType | null>(null)

export function TwitchProvider ({ children }: Props) {
  const [twitchChannel, setTwitchChannel] = useState<TwitchChannel>()
  // const [error, setError] = useState(null)
  // const [loadingMessages, updateLoadingMessages] = useState(false)
  const [loading, updateLoading] = useState(false)

  function searchTwitchChannel ({ channelName }: { channelName: string }) {
    updateLoading(true)
    searchChannel({ channelName })
      .then(response => {
        setTwitchChannel(response)
        // updateStreamData(prevState => ({ ...prevState, channel: channelResponse }))
        // if (Object.entries(channelResponse).length > 0) {
        //   updateLoadingMessages(true)
        //   getMessagesTwitchChannel(channel)
        //     .then(messageResponse => updateStreamData(prevState => ({ ...prevState, messages: messageResponse })))
        //     .catch(error => console.error(error))
        //     .finally(() => updateLoadingMessages(false))
        // }
      })
      .catch(error => error)
      .finally(() => updateLoading(false))
  }

  const value = { twitchChannel, loading, searchTwitchChannel }
  return (
    <ChannelContext.Provider value={value}>
      {children}
    </ChannelContext.Provider>
  )
}
