import styles from '../styles/StreamHeader.module.css'

function StreamHeader ({ response, loading }) {
  console.log(response)
  if (response.length === 0) return null

  if (loading) {
    return (
      <div><span>cargando</span></div>
    )
  }

  const { user_name: username, title, thumbnail_url: thumbnail } = response.data[0]
  const thumbnailURL = thumbnail.replace('{width}', '300').replace('{height}', '300')
  return (
    <ul className={styles.container}>
      <li>
        <span className={styles.username}>{username}</span>
      </li>
      <li>
        <div className={styles.thumbnail}>
          <img src={thumbnailURL} alt={title} />
        </div>
      </li>
      <li><span className={styles.title}>{title}</span></li>
    </ul>
  )
}

export default StreamHeader
