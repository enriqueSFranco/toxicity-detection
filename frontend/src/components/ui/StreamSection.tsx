import { useChannel } from '../../hooks'
import DetailsLayout from '../../layout/LayoutDetail'
import Chat from '../Chat'
import Thumbnail from '../Thumbnail'
import twitchChannelMock from '../../mocks/twitchChannel.json'

const { data } = twitchChannelMock
const { tags, title, thumbnail_url, user_name: username, } = data[0]
const url = thumbnail_url.replace('{width}', '600').replace('{height}', '600')

const StreamSection = () => {
  // const { streamData } = useChannel()
  // const hasStreamData = Object.keys(streamData).length > 0

  return (
    <DetailsLayout>
      {/* <StreamInfo /> */}
      <Thumbnail
        src={url}
        alt={title}
        title={title}
        username={username}
        tags={tags}
      />
      {/* <Chat /> */}
    </DetailsLayout>

  )
}

export default StreamSection
