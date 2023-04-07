import styles from '../styles/DetailsLayout.module.css'

function DetailsLayout ({ children }) {
  return (
    <article className={styles.container}>
      {children}
    </article>
  )
}

export default DetailsLayout
