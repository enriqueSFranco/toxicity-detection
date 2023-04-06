import styles from '../styles/MainLayout.module.css'

function MainLayout ({ children }) {
  return (
    <main>
      <h1 className={styles.titleApp}>Detección de mensajes toxicos</h1>
      <section className={styles.container}>
        {children}
      </section>
    </main>
  )
}

export default MainLayout
