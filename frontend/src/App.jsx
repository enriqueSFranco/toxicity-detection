import { ChannelProvider } from './context/channelContext'
import MainLayout from './layout/MainLayout'
import DetailsLayout from './layout/DetailsLayout'
import Form from './components/Form'
import Chat from './components/Chat'
import StreamInfo from './components/StreamInfo'
import Footer from './components/Footer'

function App () {
  return (
    <div className='h-full w-screen flex flex-col justify-between gap-4 p-10'>
      <MainLayout>
        <ChannelProvider>
          <DetailsLayout>
            <Form />
            <StreamInfo />
          </DetailsLayout>
          <Chat />
        </ChannelProvider>
      </MainLayout>
      <Footer />
    </div>
  )
}

export default App
