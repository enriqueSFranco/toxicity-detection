import { useState } from 'react'
import io from 'socket.io-client'
import Message from './Message'
import styles from '../styles/Chat.module.css'

function Chat ({ channel }) {
  const [messages, setMessages] = useState([])

  return (
    <article className={styles.containerChat}>
      <Message />
    </article>
  )
}

export default Chat
