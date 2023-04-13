import styles from '../styles/SkeletonStreamInfo.module.css'

function SkeletonStreamInfo () {
  return (
    <div className={styles.container}>
      <div className={styles.username} />
      <div className={styles.image} />
      <span className={styles.title} />
      <div className={styles.tagsSkeleton}>
        {Array.from({ length: 4 }, (_, i) => <div key={`tag-skeleton-id_${i}`} className={styles.tag} />)}
      </div>
    </div>
  )
}

export default SkeletonStreamInfo
