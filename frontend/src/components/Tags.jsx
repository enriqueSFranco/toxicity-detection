import Chip from './Chip'

function Tags ({ data, loading }) {
  if (loading) {
    return (
      <ul>
        {Array.from(({ length: 3 }, (_, i) => (
          <li key={`tag-id-${i}`}>
            <span />
          </li>
        )))}
      </ul>
    )
  }
  return (
    <ul className='flex flex-wrap gap-3'>
      {data.map(tag => (
        <li key={`tag-id-${tag}`}>
          <Chip text={tag} />
        </li>
      ))}
    </ul>
  )
}

export default Tags
