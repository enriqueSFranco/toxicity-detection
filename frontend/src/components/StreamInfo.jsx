import { useChannelContext } from '../hooks/useChannelContext'
import Tags from './Tags'
import SkeletonStreamInfo from './SkeletonStreamInfo'
import styles from '../styles/StreamInfo.module.css'

function StreamInfo () {
  const { response: streamData, error, loading } = useChannelContext()

  if (!streamData) return null

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  }

  if (!loading) {
    return (
      <SkeletonStreamInfo />
    )
  }

  const { data } = streamData
  const { tags, user_name: username, thumbnail_url: thumbnail, title } = data[0]

  const thumbnailURL = thumbnail.replace('{width}', '200').replace('{height}', '200')

  return (
    <section>
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
      <Tags data={tags} />
    </section>
  )
}

export default StreamInfo
