import { useSearchContext } from './hooks/useSearchContext'
import MainLayout from './layout/MainLayout'
import Form from './components/Form'
import Chat from './components/Chat'
import './App.css'

function App () {
  const { query } = useSearchContext()

  /*   useEffect(() => {
    const socket = io('http://localhost:3001')
    socket.on('message', (message) => {
      console.log(message)
    })
  }, []) */
  return (
    <div className='App'>
      <MainLayout>
        <Form />
        <Chat channel={query} />
      </MainLayout>
    </div>
  )
}

export default App
