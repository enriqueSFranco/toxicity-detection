import { createContext, useState } from 'react'
import { isChannelLive, getMessagesTwitchChannel } from '../services/twitch'

export const ChannelContext = createContext()

export function ChannelProvider ({ children }) {
  const [streamData, updateStreamData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  function checkLiveChannel (channel) {
    setLoading(true)
    isChannelLive({ channel })
      .then(response => {
        updateStreamData(response)
        setError(null)
      })
      .catch((error) => {
        setError(error.message)
        updateStreamData(null)
      })
      .finally(() => setLoading(false))
  }

  function verifyTwitchChannel (channel) {
    checkLiveChannel(channel)
    getMessagesTwitchChannel(channel)
  }

  const value = { streamData, error, loading, verifyTwitchChannel }
  return (
    <ChannelContext.Provider value={value}>
      {children}
    </ChannelContext.Provider>
  )
}
