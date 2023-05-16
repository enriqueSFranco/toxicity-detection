import { useChannel } from '../hooks/useChannel'
import Tags from './Tags'
import SkeletonStreamInfo from './SkeletonStreamInfo'
import Error from './Error'

function StreamInfo () {
  const { streamData, error, loading } = useChannel()

  if (error) return <Error error={error} />

  if (loading) return <SkeletonStreamInfo />

  const { data } = streamData

  const { tags, user_name: username, thumbnail_url: thumbnail, title } = data[0]
  const thumbnailURL = thumbnail.replace('{width}', '600').replace('{height}', '600')

  return (
    <section className='w-fullw h-full'>
      <figure className='flex flex-col gap-6'>
        <div className='h-full shadow-lg shadow-twitch-color overflow-hidden rounded-sm'>
          <img src={thumbnailURL} alt={title} className='w-full aspect-video' />
        </div>
        <figcaption className='flex flex-col gap-2'>
          <p className='text-twitch-color font-semibold'>Titulo del directo: {title}</p>
          <p className='font-semibold text-twitch-color'>Canal:{username}</p>
          <Tags data={tags} />
        </figcaption>
      </figure>
    </section>
  )
}

export default StreamInfo
