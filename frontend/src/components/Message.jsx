import styles from '../styles/Message.module.css'

function Message ({ username, message, color }) {
  return <p className={styles.userMessage}><span style={{ color, fontWeight: 700 }}>{username}</span>:{message}</p>
}

export default Message
