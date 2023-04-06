import styles from '../styles/MainLayout.module.css'

function MainLayout ({ children }) {
  return (
    <main>
      <h1 className={styles.titleApp}>Main</h1>
      <section className={styles.container}>
        {children}
      </section>
    </main>
  )
}

export default MainLayout
