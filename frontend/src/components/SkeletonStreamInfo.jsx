function SkeletonStreamInfo () {
  return (
    <div>
      <div />
      <div />
      <span />
      <div>
        {Array.from({ length: 4 }, (_, i) => <div key={`tag-skeleton-id_${i}`} />)}
      </div>
    </div>
  )
}

export default SkeletonStreamInfo
