import { useTwitchSearchChannel } from '../../hooks'
import Thumbnail from '../Thumbnail'
import { TwitchChannelData } from '../../shared/types'

// const url = thumbnail_url.replace('{width}', '600').replace('{height}', '600')

export const StreamDetails = () => {
  const { twitchChannel, loading } = useTwitchSearchChannel()

  if (twitchChannel !== null) {
    const data: TwitchChannelData = twitchChannel.data[0]
    const { is_live, display_name, thumbnail_url, tags, title } = data

    return (
      <section className='w-2/3 flex justify-center max-md:flex-col'>
        {
          is_live ?
            <Thumbnail
              src={thumbnail_url}
              alt={title}
              title={title}
              username={display_name}
              tags={tags}
            />
            :
            <span>el streamer {display_name} no esta en vivo</span>
        }
      </section>

    )
  }

  return null
}
