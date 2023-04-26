import { createContext, useState } from 'react'
import { isChannelLive, getMessagesTwitchChannel } from '../services/twitch'

export const ChannelContext = createContext()

export function ChannelProvider ({ children }) {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [channel, setChannel] = useState('')

  function checkLiveChannel (channel) {
    setLoading(true)
    isChannelLive({ channel })
      .then(response => {
        setResponse(response)
        setError(null)
      })
      .catch((error) => {
        setError(error.message)
        setResponse(null)
      })
      .finally(() => setLoading(false))
  }

  function handleCheckLiveChannel (channel) {
    setChannel(channel)
    console.log('buscando ', channel)
    checkLiveChannel(channel)
    getMessagesTwitchChannel(channel)
  }

  const value = { channel, response, error, loading, checkLiveChannel, handleCheckLiveChannel }
  return (
    <ChannelContext.Provider value={value}>
      {children}
    </ChannelContext.Provider>
  )
}
