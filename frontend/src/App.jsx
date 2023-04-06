import { useSearchContext } from './hooks/useSearchContext'
import MainLayout from './layout/MainLayout'
import Form from './components/Form'
import Chat from './components/Chat'
import isChannelLive from './mocks/responseStreams.json'
import Tags from './components/Tags'
import Footer from './components/Footer'
import './App.css'

const data = isChannelLive.data[0]

function App () {
  const { query } = useSearchContext()

  return (
    <div className='App'>
      <MainLayout>
        <div>
          <Form />
          <Tags listOfTags={data.tags} />

        </div>
        <Chat channel={query} />
      </MainLayout>
      <Footer />
    </div>
  )
}

export default App
