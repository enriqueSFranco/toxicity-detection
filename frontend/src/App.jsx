import { useChannelContext } from './hooks/useChannelContext'
import MainLayout from './layout/MainLayout'
import DetailsLayout from './layout/DetailsLayout'
import Form from './components/Form'
import Chat from './components/Chat'
import Tags from './components/Tags'
import Footer from './components/Footer'
import './App.css'

function App () {
  const { data, loading } = useChannelContext()

  if (!data) {
    return <div>cargando</div>
  }

  console.log(data.data[0].tags)
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
          {data && <Tags listOfTags={data.data[0].tags} loading={loading} />}
        </DetailsLayout>
        <Chat />
      </MainLayout>
      <Footer />
    </div>
  )
}

export default App
