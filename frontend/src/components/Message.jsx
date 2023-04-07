import styles from '../styles/Message.module.css'

function Message ({ message = 'hola' }) {
  return <p className={styles.userMessage}>enriquesfranco<span className={styles.message}>: {message}</span></p>
}

export default Message
