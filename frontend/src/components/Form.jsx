import { useRef } from 'react'
import { useSearchContext } from '../hooks/useSearchContext'
import Loader from './Loader'
import styles from '../styles/Form.module.css'

function Form () {
  const previusSearch = useRef(null)
  const { setQuery } = useSearchContext()

  function handleSubmit (e) {
    e.preventDefault()

    const field = new FormData(e.target)
    const channel = field.get('channel')

    if (previusSearch.current === channel) return

    setQuery(channel)
    previusSearch.current = channel
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.boxInput}>
        <input
          type='search'
          id='channel'
          name='channel'
          placeholder='Buscar canal de twitch'
          className={styles.input}
        />
        <button className={styles.btn}>Buscar</button>
        {/* <Loader /> */}
      </div>
    </form>

  )
}

export default Form
