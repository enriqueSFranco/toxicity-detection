import { createContext, useState } from 'react'
import { isChannelLive, getMessagesTwitchChannel } from '../services/twitch'

export const ChannelContext = createContext()

export function ChannelProvider ({ children }) {
  const [streamData, updateStreamData] = useState({
    channel: null,
    messages: null
  })
  const [error, setError] = useState(null)
  const [loadingMessages, updateLoadingMessages] = useState(false)
  const [loading, updateLoading] = useState(false)

  function checkChannel (channel) {
    updateLoading(true)
    isChannelLive({ channel })
      .then(channelResponse => {
        updateStreamData(prevState => ({ ...prevState, channel: channelResponse }))
        if (Object.entries(channelResponse).length > 0) {
          updateLoadingMessages(true)
          getMessagesTwitchChannel(channel)
            .then(messageResponse => updateStreamData(prevState => ({ ...prevState, messages: messageResponse })))
            .catch(error => console.error(error))
            .finally(() => updateLoadingMessages(false))
        }
      })
      .catch(error => setError(error))
      .finally(() => updateLoading(false))
  }

  const value = { streamData, error, loading, loadingMessages, checkChannel }
  return (
    <ChannelContext.Provider value={value}>
      {children}
    </ChannelContext.Provider>
  )
}
