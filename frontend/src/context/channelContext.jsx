import { createContext, useState } from 'react'
import { isChannelLive } from '../services/twitch'

export const ChannelContext = createContext()

export function ChannelProvider ({ children }) {
  const [data, setData] = useState([])
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)

  function checkLiveChannel (channel) {
    return isChannelLive({ channel })
      .then(response => {
        setLoading(true)
        setData(response)
      })
      .catch((error) => {
        setError(error)
        setData(null)
      })
      .finally(() => setLoading(false))
  }

  const value = { data, error, loading, setData, checkLiveChannel }
  return (
    <ChannelContext.Provider value={value}>
      {children}
    </ChannelContext.Provider>
  )
}
