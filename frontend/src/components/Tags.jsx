import styles from '../styles/Tags.module.css'
import Chip from './Chip'

function Tags ({ data, loading }) {
  if (loading) {
    return (
      <ul className={styles.tagList}>
        {Array.from(({ length: 3 }, (_, i) => (
          <li key={`tag-id-${i}`}>
            <span className={styles.skeletonChip} />
          </li>
        )))}
      </ul>
    )
  }
  return (
    <ul className={styles.tagList}>
      {data.map(tag => (
        <li key={`tag-id-${tag}`}>
          <Chip text={tag} />
        </li>
      ))}
    </ul>
  )
}

export default Tags
