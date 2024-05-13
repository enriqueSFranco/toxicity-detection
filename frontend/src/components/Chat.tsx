import { useEffect } from 'react'
// import { toxicityDetection } from '../services/cohere'
// import { PREDICTION } from '../share/constants.d'
import Message from './Message'
import api from '../mocks/cohere.json'

const { classifications } = api

function Chat () {
  /* const [toxicity, setToxicity] = useState([]) */

  return (
    <section className='overflow-y-auto rounded-sm'>
      <div className='flex flex-col gap-5 h-52'>
        {classifications.map(({ id, input, prediction }) => (
          <Message
            key={`messageId-${id}`}
            username={"anonymous"}
            message={input}
            prediction={prediction}
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
