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
        <DetailsLayout>
          <Form />
          <StreamInfo />
        </DetailsLayout>
        <Chat />
      </MainLayout>
      <Footer />
    </div>
  )
}

export default App
