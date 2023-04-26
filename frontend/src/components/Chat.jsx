import { useTwitchChat } from '../hooks/useTwitchChat'
import { uuid } from '../utils/uuid'
import Message from './Message'
import api from '../mocks/cohere.json'
import { PREDICTION } from '../constants.d'

const { classifications } = api

function Chat () {
  const data = useTwitchChat()

  return (
    <article className='bg-secondary-gray w-full h-full overflow-auto p-4 rounded-sm'>
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
        {/*  {
          classifications.map(({ id, input, prediction }) => {
            const emojiPrediction = prediction === PREDICTION.Toxic ? '🤬' : '😄'
            return (
              <p key={id} className='flex items-center gap-2'><span className='bg-gray-600 flex justify-center items-center p-1 h-7 w-7 rounded-full'>{emojiPrediction}</span>{input}</p>
            )
          })
        } */}
      </ul>
    </article>
  )
}

export default Chat
