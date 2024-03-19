import { useTwitchSearchChannel } from '../../hooks'
import DetailsLayout from '../../layouts/LayoutDetail'
import Chat from '../Chat'
import Thumbnail from '../Thumbnail'
import twitchChannelMock from '../../mocks/twitchChannel.json'
import { TwitchChannelData } from '../../shared/types'

const { data } = twitchChannelMock
const { tags, title, thumbnail_url, user_name: username, } = data[0]
const url = thumbnail_url.replace('{width}', '600').replace('{height}', '600')

const StreamSection = () => {
  const { twitchChannel, loading } = useTwitchSearchChannel()

  if (twitchChannel !== undefined) {
    console.log(twitchChannel)
    const data: TwitchChannelData = twitchChannel.data[0]
    const { is_live, display_name, thumbnail_url, tags, title } = data

    return (
      <DetailsLayout>
        {
          is_live ?
            <span>el streamer {display_name} no esta en vivo</span>
            : <Thumbnail
              src={thumbnail_url}
              alt={title}
              title={title}
              username={display_name}
              tags={tags}
            />
        }
        {/* <Chat /> */}
      </DetailsLayout>

    )
  }

  return (
    <div>init ui</div>
  )
}

export default StreamSection
