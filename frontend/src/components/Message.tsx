enum PREDICTION {
  GOOD = 'Good',
  BAD = 'Bad'
}
type PredictionType = PREDICTION.GOOD | PREDICTION.BAD

type Props = {
  username: string
  message: string
  color?: string
  prediction: PredictionType
}

function Message ({ username, message, color, prediction }: Props) {
  return (
    <div className='max-w-fit flex items-center justify-between gap-4'>
      <p className='text-white'><span className={`font-semibold ${!color ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500' : null}`} style={{ color }}>{username}</span>: {message}</p>
      <span className={`${prediction == PREDICTION.BAD ? 'bg-red-300/20 text-red-400' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'} text-xs font-medium px-2.5 py-0.5 rounded-sm inline-block capitalize`}>{prediction ? '👎 tóxico' : ' 👍 bueno'}</span>
    </div>
  )
}

export default Message
