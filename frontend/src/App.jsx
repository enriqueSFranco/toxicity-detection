import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import './App.css'

function App () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const socket = io('http://localhost:3001')
    socket.on('message', (message) => {
      console.log(message)
    })
  }, [])
  return (
    <div className='App'>
      <h2>hi 👋🏼</h2>
    </div>
  )
}

export default App
