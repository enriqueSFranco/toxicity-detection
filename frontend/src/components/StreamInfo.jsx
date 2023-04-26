import { useChannel } from '../hooks/useChannel'
import Tags from './Tags'
import SkeletonStreamInfo from './SkeletonStreamInfo'

function StreamInfo () {
  const { response: streamData, error, loading } = useChannel()

  if (error) {
    return (
      <div className='bg-purple-500 my-4 p-4 grid place-content-center'>
        <p className='text-lg'>{error} 🫤</p>
      </div>
    )
  }

  if (loading) {
    return (
      <SkeletonStreamInfo />
    )
  }

  if (!streamData || streamData.length === 0) return null

  const { data } = streamData

  const { tags, user_name: username, thumbnail_url: thumbnail, title } = data[0]
  const thumbnailURL = thumbnail.replace('{width}', '200').replace('{height}', '200')

  return (
    <section className='my-4 w-full h-full'>
      <figure className='flex flex-col'>
        <div className='w-full h-56'>
          <img src={thumbnailURL} alt={title} className='object-cover object-center rounded-sm ' />
        </div>
        <figcaption className='flex flex-col gap-2'>
          <span>{title}</span>
          <span>{username}</span>
          <Tags data={tags} />
        </figcaption>
      </figure>
    </section>
  )
}

export default StreamInfo
