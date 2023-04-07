import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { isChannelLive } from '../services/isChannelLive'
import Message from './Message'
import styles from '../styles/Chat.module.css'

function Chat ({ channel }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    isChannelLive({ channel })
      .then(response => console.info(response))
      .catch(console.error)
  }, [channel])

  return (
    <article className={styles.containerChat}>
      <Message />
    </article>
  )
}

export default Chat
