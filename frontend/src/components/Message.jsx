function Message ({ username, message, color }) {
  return <p className='text-white'><span style={{ color, fontWeight: 700 }}>{username}</span>: {message}</p>
}

export default Message
