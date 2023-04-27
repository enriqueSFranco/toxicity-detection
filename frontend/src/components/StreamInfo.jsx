import { useChannel } from '../hooks/useChannel'
import Tags from './Tags'
import SkeletonStreamInfo from './SkeletonStreamInfo'

function StreamInfo () {
  const { response: streamData, error, loading } = useChannel()

  if (error) {
    return (
      <div className='bg-purple-500 my-4 p-4 grid place-content-center'>
        <p className='text-lg'>{JSON.stringify(error, null, ' ')} 🫤</p>
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
  const thumbnailURL = thumbnail.replace('{width}', '1080').replace('{height}', '1080')

  return (
    <section className='my-4 w-full h-full'>
      <figure>
        <div className='w-full h-full'>
          <img src={thumbnailURL} alt={title} className='h-96 aspect-video rounded-sm ' />
        </div>
        <figcaption className='flex flex-col gap-2'>
          <p className='text-purple-500 font-semibold'>{title}</p>
          <p className='font-semibold text-purple-500'>Canal: <span className='text-white'>{username}</span></p>
          <Tags data={tags} />
        </figcaption>
      </figure>
    </section>
  )
}

export default StreamInfo
