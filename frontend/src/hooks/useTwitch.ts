import { useEffect, useState } from 'react'
import io from 'socket.io-client'

export function useTwitch () {
  // const [messages, updateMessages] = useState([])

  // useEffect(() => {
  //   const socket = io('http://localhost:3001')
  //   socket.on('message', (messages) => {
  //     updateMessages((prevMessages) => [...prevMessages, messages])
  //   })
  //   return () => socket.disconnect()
  // }, [])

  // return messages
}
