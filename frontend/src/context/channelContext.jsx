import { createContext, useState } from 'react'
import { isChannelLive } from '../services/twitch'

export const ChannelContext = createContext()

export function ChannelProvider ({ children }) {
  const [response, setResponse] = useState([])
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)

  function checkLiveChannel (channel) {
    return isChannelLive({ channel })
      .then(response => {
        setLoading(true)
        setResponse(response)
      })
      .catch((error) => {
        setError(error)
        setResponse(null)
      })
      .finally(() => setLoading(false))
  }

  const value = { response, error, loading, setResponse, checkLiveChannel }
  return (
    <ChannelContext.Provider value={value}>
      {children}
    </ChannelContext.Provider>
  )
}
