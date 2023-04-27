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
  /* const [toxicity, setToxicity] = useState([]) */

  useEffect(() => {
    const messages = data.map(({ message }) => message)
    if (messages.length === 0) return
    console.log(messages)
    /* toxicityDetection({ messages })
      .then(response => {
        const { classifications } = response
        setToxicity(classifications)
      })
      .catch(err => console.error(err)) */
  }, [data])

  if (!data.length) return null

  return (
    <section className='bg-secondary-gray w-full h-full overflow-auto p-4 rounded-sm'>
      <div className='flex flex-col gap-5'>
        {data.map(({ username, message, color }) => (
          <Message
            key={`message_id-${uuid()}`}
            username={username}
            color={color ?? '#a96fff'}
            message={message}
          />
        ))}
        {/* {
          toxicity.map(({ id, prediction }) => {
            const emojiPrediction = prediction === PREDICTION.Toxic ? '🤬' : '😄'
            const colorPrediction = prediction === PREDICTION.Toxic ? 'bg-orange-500' : 'bg-emerald-600'
            return (
              <span key={id} className={`${colorPrediction} flex justify-center items-center h-7 w-7 rounded-full`}>{emojiPrediction}</span>
            )
          })
        } */}
      </div>
    </section>
  )
}

export default Chat
