import { ChannelProvider } from '../context/channelContext'
import Form from '../components/Form'
import DetailsLayout from '../layout/DetailsLayout'
import StreamInfo from '../components/StreamInfo'
import Chat from '../components/Chat'

const Home = () => {
  return (
    <main className='h-full w-full flex flex-col items-center gap-4 p-10 relative bg-primary-blue'>
      <ChannelProvider>
        <Form />
        <DetailsLayout>
          <StreamInfo />
          <Chat />
        </DetailsLayout>
      </ChannelProvider>
    </main>
  )
}

export default Home
