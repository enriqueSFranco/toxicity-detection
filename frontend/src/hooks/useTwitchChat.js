import { useEffect, useState } from 'react'
import io from 'socket.io-client'

export function useTwitchChat () {
  const [data, setData] = useState([])

  useEffect(() => {
    const socket = io('http://localhost:3001')
    socket.on('message', (data) => {
      setData(prevMessages => [...prevMessages, data])
    })
  }, [])

  return data
}
