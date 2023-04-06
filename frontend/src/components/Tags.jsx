import styles from '../styles/Tags.module.css'
import Chip from './Chip'

function Tags ({ listOfTags }) {
  return (
    <ul className={styles.tagList}>
      {listOfTags.map(tag => (
        <li key={`tag-id-${tag}`}>
          <Chip text={tag} />
        </li>
      ))}
    </ul>
  )
}

export default Tags
