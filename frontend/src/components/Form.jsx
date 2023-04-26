import { useEffect, useRef } from 'react'
import { useChannel } from '../hooks/useChannel'
import Loader from './Loader'

function Form () {
  const previusSearch = useRef(null)
  const inputRef = useRef(null)
  const { loading, checkLiveChannel } = useChannel()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleSubmit (e) {
    e.preventDefault()

    const field = new FormData(e.target)
    const channel = field.get('channel')

    if (previusSearch.current === channel) return

    previusSearch.current = channel
    checkLiveChannel(channel)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex bg-secondary-gray w-full rounded-sm overflow-hidden'>
        <input
          className='w-full outline-none text-purple-500 font-semibold p-3'
          ref={inputRef}
          type='search'
          autoComplete='off'
          id='channel'
          name='channel'
          placeholder='Buscar canal de twitch'
        />
        <button className='bg-purple-500 p-3'>{loading ? <Loader /> : <span>Conectar</span>}</button>
      </div>
    </form>

  )
}

export default Form
