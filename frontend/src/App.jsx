import { useChannelContext } from './hooks/useChannelContext'
import MainLayout from './layout/MainLayout'
import DetailsLayout from './layout/DetailsLayout'
import Form from './components/Form'
import Chat from './components/Chat'
import StreamInfo from './components/StreamInfo'
import Footer from './components/Footer'
import './App.css'

function App () {
  const { response, loading } = useChannelContext()
  return (
    <div className='App'>
      <MainLayout>
        <DetailsLayout>
          <Form />
          <StreamInfo response={response} loading={loading} />
        </DetailsLayout>
        <Chat />
      </MainLayout>
      <Footer />
    </div>
  )
}

export default App
