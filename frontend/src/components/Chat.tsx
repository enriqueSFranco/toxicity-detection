import { useEffect } from 'react'
import { useTwitchChat, useChannel } from '../hooks'
// import { toxicityDetection } from '../services/cohere'
// import { PREDICTION } from '../share/constants.d'
import { uuid } from '../utils/uuid'
import Message from './Message'
import api from '../mocks/cohere.json'

const { classifications } = api

function Chat () {
  const { streamData } = useChannel()
  const data = useTwitchChat(streamData.messages)
  /* const [toxicity, setToxicity] = useState([]) */

  useEffect(() => {
    const messages = data.map(({ message }) => message)
    if (messages.length === 0) return
    /* toxicityDetection({ messages })
      .then(response => {
        const { classifications } = response
        setToxicity(classifications)
      })
      .catch(err => console.error(err)) */
  }, [data])

  if (!data.length) return null

  return (
    <section className='overflow-y-auto rounded-sm'>
      <div className='flex flex-col gap-5 h-52'>
        {data.map(({ username, message, color }) => (
          <Message
            key={`message_id-${uuid()}`}
            username={username}
            color={color}
            message={message}
            prediction={false}
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
