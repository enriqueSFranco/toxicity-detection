import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import MainLayout from './layout/MainLayout'
import DetailsLayout from './layout/DetailsLayout'
import Form from './components/Form'
import Chat from './components/Chat'
import StreamInfo from './components/StreamInfo'
import Footer from './components/Footer'
import './App.css'

const socket = io('http://localhost:3001')

function App () {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('message', (data) => {
      console.log('data------>', data)
      setMessages((messages) => [...messages, data])
    })
  }, [])
  return (
    <div className='App'>
      <MainLayout>
        <DetailsLayout>
          <Form />
          <StreamInfo />
        </DetailsLayout>
        <Chat data={messages} />
      </MainLayout>
      <Footer />
    </div>
  )
}

export default App
