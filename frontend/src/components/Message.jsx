function Message ({ username, message, color }) {
  return <p className='text-primary-blue'><span style={{ color, fontWeight: 700 }}>{username}</span>:{message}</p>
}

export default Message
