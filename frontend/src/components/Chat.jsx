import Message from './Message'
import styles from '../styles/Chat.module.css'

function Chat ({ data }) {
  return (
    <article className={styles.containerChat}>
      {data.map(({ username, message, color }, index) => <Message key={`message_id-${index}`} username={username} color={color} message={message} />)}
    </article>
  )
}

export default Chat
