import Chip from '../Chip'

type Props = {
  data: string[]
  loading?: boolean
}

function Tags ({ data, loading = false }: Props) {
  // if (loading) {
  //   return (
  //     <ul>
  //       {Array.from(({ length: 3 }, (_, i) => (
  //         <li key={`tag-id-${i}`}>
  //           <span />
  //         </li>
  //       )))}
  //     </ul>
  //   )
  // }
  return (
    <ul className='flex flex-wrap gap-2'>
      {data.map(tag => (
        <li key={`tag-id-${tag}`}>
          <Chip text={tag} />
        </li>
      ))}
    </ul>
  )
}

export default Tags
