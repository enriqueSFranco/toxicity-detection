import { useEffect, useState } from 'react'
import io from 'socket.io-client'

export function useTwitchChat (channel) {
  const [data, setData] = useState([])

  useEffect(() => {
    const socket = io('http://localhost:3001')
    socket.on('message', (data) => {
      setData(prevMessages => [...prevMessages, data])
    })

    return () => {
      socket.emit('leave', channel)
      socket.disconnect()
    }
  }, [channel])

  return data
}
