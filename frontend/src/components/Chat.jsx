import { useEffect, useState } from 'react'
import { useTwitchChat, useChannel } from '../hooks'
import { toxicityDetection } from '../services/cohere'
import { PREDICTION } from '../constants.d'
import { uuid } from '../utils/uuid'
import Message from './Message'
import api from '../mocks/cohere.json'

const { classifications } = api

function Chat () {
  const { channel } = useChannel()
  const data = useTwitchChat(channel)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const messages = data.map(({ message }) => message)
    if (messages.length === 0) return
    console.log(messages)
    /* toxicityDetection({ messages })
      .then(response => {
        const { classifications } = response
        setMessages(classifications)
      })
      .catch(err => console.error(err)) */
  }, [data])

  return (
    <section className='bg-secondary-gray w-full h-full overflow-auto p-4 rounded-sm'>
      <ul>
        {data.map(({ username, message, color }) => (
          <li key={`message_id-${uuid()}`}>
            <Message
              username={username}
              color={color ?? '#a96fff'}
              message={message}
            />
          </li>
        ))}
        {/* {
          classifications.map(({ id, input, prediction }) => {
            const emojiPrediction = prediction === PREDICTION.Toxic ? '🤬' : '😄'
            const colorPrediction = prediction === PREDICTION.Toxic ? 'bg-orange-500' : 'bg-emerald-600'
            return (
              <div key={id} className=''>
                <span className={`${colorPrediction} flex justify-center items-center h-7 w-7 rounded-full`}>{emojiPrediction}</span>
                <p>{input}</p>
              </div>
            )
          })
        } */}
      </ul>
    </section>
  )
}

export default Chat
