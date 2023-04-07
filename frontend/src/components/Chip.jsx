import styles from '../styles/Chip.module.css'

function Chip ({ text }) {
  return <span className={styles.chip}>{text}</span>
}

export default Chip
