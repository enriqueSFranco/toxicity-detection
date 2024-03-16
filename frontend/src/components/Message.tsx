type Props = {
  username: string
  message: string
  color: string
  prediction: string
}

function Message ({ username, message, color, prediction }: Props) {
  return (
    <div className='flex items-center justify-between'>
      <p className='text-white'><span className={`font-semibold ${!color ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500' : null}`} style={{ color }}>{username}</span>: {message}</p>
      <span className={`${prediction ? 'bg-red-300/20 text-red-400' : 'bg-emerald-300/20 text-emerald-400'} px-3 py-1 rounded-sm inline-block capitalize`}>{prediction ? 'tóxico' : 'bueno'}</span>
    </div>
  )
}

export default Message
