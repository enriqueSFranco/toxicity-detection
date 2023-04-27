import { useChannel } from '../hooks/useChannel'
import Tags from './Tags'
import AppInit from './AppInit'
import SkeletonStreamInfo from './SkeletonStreamInfo'
import Error from './Error'

function StreamInfo () {
  const { response: streamData, error, loading } = useChannel()

  if (error) return <Error error={error} />

  if (loading) return <SkeletonStreamInfo />

  if (!streamData || streamData.length === 0) return <AppInit />

  const { data } = streamData

  const { tags, user_name: username, thumbnail_url: thumbnail, title } = data[0]
  const thumbnailURL = thumbnail.replace('{width}', '1080').replace('{height}', '1080')

  return (
    <section className='my-4 w-1/2 h-full'>
      <figure>
        <div className='w-full h-full'>
          <img src={thumbnailURL} alt={title} className='h-80 aspect-video rounded-sm ' />
        </div>
        <figcaption className='flex flex-col gap-2'>
          <p className='text-twitch-color font-semibold'>{title}</p>
          <p className='font-semibold text-twitch-color'>Canal: <span className='text-white'>{username}</span></p>
          <Tags data={tags} />
        </figcaption>
      </figure>
    </section>
  )
}

export default StreamInfo
