import { createContext, useState } from 'react'
import { isChannelLive } from '../services/twitch'

export const ChannelContext = createContext()

export function ChannelProvider ({ children }) {
  const [response, setResponse] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

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

  const value = { response, error, loading, checkLiveChannel }
  return (
    <ChannelContext.Provider value={value}>
      {children}
    </ChannelContext.Provider>
  )
}
