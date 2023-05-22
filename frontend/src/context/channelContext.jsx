import { createContext, useState } from 'react'
import { isChannelLive, getMessagesTwitchChannel } from '../services/twitch'

export const ChannelContext = createContext()

export function ChannelProvider ({ children }) {
  const [streamData, updateStreamData] = useState({})
  const [error, setError] = useState(null)
  const [loadingMessages, updateLoadingMessages] = useState(false)
  const [loading, updateLoading] = useState(false)

  function checkChannel (channel) {
    updateLoading(true)
    isChannelLive({ channel })
      .then(response => {
        console.log(response)
        updateStreamData(response)
        if (Object.entries(response).length > 0) {
          updateLoadingMessages(true)
          getMessagesTwitchChannel(channel)
            .then(response => console.log(response))
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
