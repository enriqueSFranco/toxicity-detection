import { useChannel } from '../hooks/useChannel'
import Tags from './Tags'
import SkeletonStreamInfo from './SkeletonStreamInfo'
import Error from './Error'
import NoStreamSection from '../pages/NoStreamSection'

function StreamInfo () {
  const { streamData, error, loading } = useChannel()
  if (error) return <Error error={error} />

  if (loading) return <SkeletonStreamInfo />

  if (!streamData.channel) return <NoStreamSection />

  const { data } = streamData.channel

  const { tags, user_name: username, thumbnail_url: thumbnail, title } = data[0]
  const thumbnailURL = thumbnail.replace('{width}', '600').replace('{height}', '600')

  return (
    <section className='w-fullw'>
      <figure className='flex flex-col gap-6'>
        <div className='h-full  overflow-hidden rounded-sm'>
          <img src={thumbnailURL} alt={title} className='w-full aspect-video' />
        </div>
        <figcaption className='flex flex-col gap-4'>
          <p className='text-white font-semibold'><span className='font-semibold text-twitch-color'>{username}</span>: {title}</p>
          <Tags data={tags} />
        </figcaption>
      </figure>
    </section>
  )
}

export default StreamInfo
