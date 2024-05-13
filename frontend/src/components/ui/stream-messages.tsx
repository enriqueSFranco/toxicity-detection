import { useEffect, useState } from "react"
import { io } from 'socket.io-client'

const socket = io('http://localhost:3001')

const initMessages = [
  "mensaje de prueba mensaje de prueba mensaje de prueba mensaje de prueba mensaje de prueba mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba",
  "mensaje de prueba"
]

export function StreamMessages () {
  const [messages, setMessages] = useState<string[]>(initMessages)

  // useEffect(() => {
  //   socket.on('message', receiveMessage)

  //   return () => socket.off("message", receiveMessage)
  // }, [])

  const receiveMessage = (message: string) => setMessages(prevMessages => [...prevMessages, message])

  return (
    <div className="max-h-full h-[500px] border border-white/15 rounded px-3 py-1 overflow-auto scrollGradient">
      <ul className="flex flex-col flex-wrap gap-4">
        {messages.map(message => (
          <li key={`messageId-${crypto.randomUUID()}`}>
            <div className="w-fit bg-white/10 rounded px-2 py-1">
              <span className="text-wrap text-sm">{message}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}