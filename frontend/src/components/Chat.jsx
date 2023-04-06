import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { isChannelLive } from '../services/isChannelLive'

function Chat ({ channel }) {
  const [messages, setMessages] = useState([])

  /* useEffect(() => {
    isChannelLive({ channel })
      .then(response => console.info(response))
      .catch(console.error)
  }, [channel]) */

  return (
    <article>
      <h2>lista de mensajes del canal {channel}</h2>
    </article>
  )
}

export default Chat
