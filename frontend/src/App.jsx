import { useSearchContext } from './hooks/useSearchContext'
import MainLayout from './layout/MainLayout'
import DetailsLayout from './layout/DetailsLayout'
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
        <DetailsLayout>
          <Form />
          <ul>
            <li>
              <span>username: {data.user_name}</span>
            </li>
            <li><span>Titulo del stream: {data.title}</span></li>
            <li><span>Total de espectadores: {data.viewer_count}</span></li>
          </ul>
          <Tags listOfTags={data.tags} />
        </DetailsLayout>
        <Chat channel={query} />
      </MainLayout>
      <Footer />
    </div>
  )
}

export default App
