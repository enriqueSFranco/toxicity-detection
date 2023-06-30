import { useChannel } from '../hooks'
import NoStreamSection from './NoStreamSection'
import DetailsLayout from '../layout/DetailsLayout'
import StreamInfo from '../components/StreamInfo'
import Chat from '../components/Chat'

const StreamSection = () => {
  const { streamData } = useChannel()
  const hasStreamData = Object.keys(streamData).length > 0

  return (
    <>
      {/* {!hasStreamData && <NoStreamSection />} */}
      {hasStreamData && (
        <DetailsLayout>
          <StreamInfo />
          <Chat />
        </DetailsLayout>
      )}
    </>
  )
}

export default StreamSection
