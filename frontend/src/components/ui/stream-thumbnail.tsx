import { useTwitchSearchChannel } from '../../hooks/useTwitchSearchChannel'
import Thumbnail from '../Thumbnail'
import thumbnail from '../../assets/arigameplays.webp'
import twitchRes from '../../mocks/twitch-res.json'

const { data } = twitchRes
const [it] = data
const url = it.thumbnail_url.replace('{width}', '600').replace('{height}', '600')

export const StreamDetails = () => {
  // const { twitchChannel, loading } = useTwitchSearchChannel()

  return (
    <section className='w-full flex justify-center max-md:flex-col'>
      <Thumbnail
        src={thumbnail}
        alt={it.title}
        title={it.title}
        username={it.user_name}
        tags={it.tags}
      />
    </section>

  )
}
