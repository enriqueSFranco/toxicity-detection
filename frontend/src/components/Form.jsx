import { useEffect, useRef } from 'react'
import { useChannel } from '../hooks/useChannel'
import { getMessagesTwitchChannel } from '../services/twitch'
import Loader from './Loader'

function Form () {
  const previusSearch = useRef(null)
  const inputRef = useRef(null)
  const { loading, error, checkLiveChannel } = useChannel()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleSubmit (e) {
    e.preventDefault()

    const field = new FormData(e.target)
    const channel = field.get('channel')

    if (previusSearch.current === channel) return

    previusSearch.current = channel

    // si esta el canal esta en directo
    checkLiveChannel(channel)
    getMessagesTwitchChannel(channel)
      .then(response => console.log(response))
      .catch(error => console.log(error))
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
